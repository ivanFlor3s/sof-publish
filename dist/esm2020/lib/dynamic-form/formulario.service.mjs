import { Injectable } from '@angular/core';
import { ActionFormTypes, FormConfigTypes, ValidationTypes } from './enums';
import { Subscription, combineLatest, map } from 'rxjs';
import { FormControl, } from '@angular/forms';
import { DataValidators, RequiredValidators, NumberValidators, TextValidators, FileValidators, DateTimeValidators, } from '../validations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common/http";
export class FormularioService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        this.subs = new Subscription();
    }
    buildFormGroup(fields) {
        const formGroup = this.fb.group({});
        fields.forEach((field) => {
            if (field.type == FormConfigTypes.EmptyCol && field['key']) {
                console.error('Ver FielsConfig en: ', field['key']);
                throw new Error('No se puede poner type:EmptyCol a un control que tiene que formar parte del formulario');
            }
            if (field.type != FormConfigTypes.EmptyCol) {
                formGroup.addControl(field.key, new FormControl({
                    value: field.defaultValue || '',
                    disabled: field.dissabled,
                }));
            }
        });
        fields.forEach((field) => {
            if (field.type == FormConfigTypes.Prefix) {
                this.procesarPrefix(formGroup, field);
            }
            if (field.type != FormConfigTypes.EmptyCol) {
                field = field;
                this.realizarRequestToUrl(formGroup, field);
                const sub = this.procesarAcciones(fields.filter((f) => f.type != FormConfigTypes.EmptyCol), field, formGroup);
                if (sub) {
                    this.subs.add(sub);
                }
                this.setValidations(formGroup.get(field.key), field.validations, formGroup);
            }
        });
        return formGroup;
    }
    procesarAcciones(fields, field, form) {
        if (field.action.length == 0)
            return null;
        return form.get(field.key)?.valueChanges.subscribe((newValue) => {
            field.action.forEach((action) => {
                const fieldTarget = this.getFieldTargetFromFields(action.fieldTarget, fields);
                const formControlTarget = form.get(action.fieldTarget);
                if (!formControlTarget)
                    throw new Error('No se encontro el formControl');
                switch (action.type) {
                    case ActionFormTypes.Hide:
                        this.procesarHide(newValue, fieldTarget, action, formControlTarget);
                        break;
                    case ActionFormTypes.Show:
                        this.procesarShow(newValue, fieldTarget, action, formControlTarget);
                        break;
                    case ActionFormTypes.Reset:
                        this.procesarReset(newValue, formControlTarget);
                        break;
                    case ActionFormTypes.Dissable:
                        this.procesarDisable(newValue, formControlTarget, action);
                        break;
                    case ActionFormTypes.Enable:
                        this.procesarEnable(newValue, formControlTarget, action);
                        break;
                    case ActionFormTypes.SetValue:
                        this.procesarSetValue(newValue, formControlTarget, action);
                        break;
                    case ActionFormTypes.FillOptions:
                        this.procesarFillOptions(newValue, formControlTarget, fieldTarget, action);
                        break;
                    default:
                        throw new Error('No se reconoce el type de la accion: ' + action.type);
                }
            });
        });
    }
    procesarPrefix(form, field) {
        /**
         * Procesel prefix (esucho cambios en dependencies para armar elprefijo dinamico) cuando:
         *   el campo tiene prefixConfig
         *   prefixConfig tiene laconfiguracion dinamica
         *   La configuracion dinamica tiene controles
         */
        if (!field.prefixConfig ||
            !field.prefixConfig?.prefixDinamic ||
            field.prefixConfig?.prefixDinamic.controlKeyDependencies.length == 0) {
            return;
        }
        const controlDependencies = field.prefixConfig.prefixDinamic?.controlKeyDependencies.map((control) => {
            if (!!!form.get(control)) {
                throw new Error('[Dinamyx prefix] no existe el control ' + control);
            }
            return form.get(control)?.valueChanges;
        });
        const prefixDependencies$ = combineLatest(controlDependencies).pipe(map((r) => {
            if (r.every((x) => !!x)) {
                return field.prefixConfig?.prefixDinamic?.reduceFn(r.map((x) => x.toString()));
            }
            else
                return '';
        }));
        field.prefixConfig.prefixDinamic.prefix$ = prefixDependencies$;
    }
    realizarRequestToUrl(form, field) {
        if (!field.options?.url) {
            return;
        }
        // console.log('consulto en: ' + field.key);
        // console.log(field.options.url);
        form.get(field.key).disable();
        this.http.get(field.options?.url).subscribe((res) => {
            field.options.options = res;
            form.get(field.key).enable();
        });
    }
    getFieldTargetFromFields(fieldTarget, fields) {
        const ft = fields.find((x) => x.key == fieldTarget);
        if (!ft)
            throw new Error('No se enctontro el field');
        return ft;
    }
    procesarFillOptions(newValue, formControlTarget, fieldTarget, action) {
        //Rellenar opciones
        //URL https://apis.datos.gob.ar/georef/api/municipios?provincia=tucuman
        formControlTarget.reset('');
        if (action.fillConfig?.url && newValue) {
            formControlTarget.disable();
            this.http
                .get(`${action.fillConfig.url}${newValue}`)
                .subscribe((res) => {
                let val = res;
                const pathArray = action.dataPath.split('.');
                for (const prop of pathArray)
                    val = val[prop];
                fieldTarget.options.options = val;
                formControlTarget.enable();
            });
        }
        else if (!!action.fillConfig?.fillFn) {
            const options = action.fillConfig?.fillFn(newValue);
            if (options instanceof Promise)
                options.then((x) => (fieldTarget.options.options = x));
            else
                fieldTarget.options.options = options;
        }
        else {
            fieldTarget.options = action.fillConfig?.fillOptionsConfig?.find((x) => x.onValue == newValue)?.optionsConfig;
        }
    }
    procesarHide(newValue, fieldTarget, action, formControlTarget) {
        formControlTarget.reset('');
        fieldTarget.hidden = newValue == action.value;
    }
    procesarShow(newValue, fieldTarget, action, formControlTarget) {
        formControlTarget.reset('');
        fieldTarget.hidden = !(newValue == action.value);
    }
    procesarReset(newValue, formControlTarget) {
        if (formControlTarget?.value != '' && newValue !== '') {
            formControlTarget.reset('');
        }
    }
    procesarDisable(newValue, formControlTarget, action) {
        if (newValue == action.value) {
            formControlTarget.disable();
        }
        else
            formControlTarget.enable();
    }
    procesarEnable(newValue, formControlTarget, action) {
        if (newValue == action.value) {
            formControlTarget.enable();
        }
        else
            formControlTarget.disable();
    }
    procesarSetValue(newValue, formControlTarget, action) {
        if (!action.newValue)
            throw new Error('La accion debe tener un nuevo valor para setear');
        if (newValue == action.value) {
            formControlTarget.setValue(action.newValue);
        }
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    setValidations(control, validations, f) {
        for (let validation of validations) {
            switch (validation.type) {
                // Single Fields Validations
                case ValidationTypes.Required:
                    this.setRequiredValidation(control, validation.customMessage);
                    break;
                case ValidationTypes.Function:
                    this.setFuncValidation(control, validation.func, validation.customMessage);
                    break;
                case ValidationTypes.Min:
                    this.setMinValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.Max:
                    this.setMaxValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MinLength:
                    this.setMinLengthValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MaxLength:
                    this.setMaxLengthValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.Pattern:
                    this.setPatternValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MinDate:
                    this.setMinDateValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MaxDate:
                    this.setMaxDateValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MaxFileSize:
                    this.setMaxFileSizeValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.AcceptedTypes:
                    this.setAcceptedTypesValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.Email:
                    this.setEmailValidation(control, validation.customMessage);
                    break;
                // Cross Fields Validations
                case ValidationTypes.RequiredIf:
                    this.setRequiredIfValidation(control, validation.conditions, f, validation.customMessage);
                    break;
                case ValidationTypes.RequiredIfFieldIsEmpty:
                    this.setRequiredIfFieldIsEmptyValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.RequiredIfFieldIsNotEmpty:
                    this.setRequiredIfFieldIsNotEmptyValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.LessOrEqualTo:
                    this.setLessOrEqualToValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.MoreOrEqualTo:
                    this.setMoreOrEqualToValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.AfterOrEqualTo:
                    this.setAfterOrEqualToValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.BeforeOrEqualTo:
                    this.setBeforeOrEqualToValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
            }
        }
    }
    // Single Fields Validations
    setRequiredValidation(control, customMessage) {
        control.addValidators(RequiredValidators.required(customMessage));
    }
    setMinValidation(control, minValue, customMessage) {
        if (!minValue) {
            throw new Error('minValue must be declared');
        }
        control.addValidators(NumberValidators.min(minValue, customMessage));
    }
    setMaxValidation(control, maxValue, customMessage) {
        if (!maxValue) {
            throw new Error('maxValue must be declared');
        }
        control.addValidators(NumberValidators.max(maxValue, customMessage));
    }
    setMinLengthValidation(control, minLength, customMessage) {
        if (!minLength) {
            throw new Error('minLength must be declared');
        }
        control.addValidators(TextValidators.minLength(minLength, customMessage));
    }
    setMaxLengthValidation(control, maxLength, customMessage) {
        if (!maxLength) {
            throw new Error('maxLength must be declared');
        }
        control.addValidators(TextValidators.maxLength(maxLength, customMessage));
    }
    setPatternValidation(control, pattern, customMessage) {
        if (!pattern) {
            throw new Error('pattern must be declared');
        }
        control.addValidators(TextValidators.pattern(pattern, customMessage));
    }
    setMinDateValidation(control, minDate, customMessage) {
        if (!minDate) {
            throw new Error('minDate must be declared');
        }
        control.addValidators(DateTimeValidators.minDate(minDate, customMessage));
    }
    setMaxDateValidation(control, maxDate, customMessage) {
        if (!maxDate) {
            throw new Error('maxDate must be declared');
        }
        control.addValidators(DateTimeValidators.minDate(maxDate, customMessage));
    }
    setMaxFileSizeValidation(control, maxSize, customMessage) {
        if (!maxSize) {
            throw new Error('maxSize must be declared');
        }
        control.addValidators(FileValidators.maxFileSize(maxSize, customMessage));
    }
    setAcceptedTypesValidation(control, acceptedTypes, customMessage) {
        if (!acceptedTypes) {
            throw new Error('acceptedTypes must be declared');
        }
        control.addValidators(FileValidators.acceptedFileTypes(acceptedTypes, customMessage));
    }
    setEmailValidation(control, customMessage) {
        control.addValidators(DataValidators.email(customMessage));
    }
    // Cross Fields Validations
    setFuncValidation(control, func, customMessage) {
        if (!func) {
            throw new Error('func must be declared');
        }
        const setError = (error) => {
            control.setErrors(control.errors
                ? { ...control.errors, [error]: { [error]: true, customMessage } }
                : { [error]: { [error]: true, customMessage } });
        };
        control.valueChanges.subscribe((val) => {
            func(val, setError);
        });
    }
    setRequiredIfValidation(control, conditions, f, customMessage) {
        if (!conditions) {
            throw new Error('conditions must be declared');
        }
        for (let condition of conditions) {
            if (!f.get(condition.field)) {
                throw new Error('field not found');
            }
            f.get(condition.field)?.valueChanges.subscribe((val) => {
                if (val == condition.value) {
                    control.addValidators(RequiredValidators.required(customMessage));
                }
                else {
                    control.removeValidators(RequiredValidators.required(customMessage));
                }
            });
        }
    }
    setRequiredIfFieldIsEmptyValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(RequiredValidators.requiredIfFieldIsEmpty(fieldTarget, customMessage));
    }
    setRequiredIfFieldIsNotEmptyValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(RequiredValidators.requiredIfFieldIsNotEmpty(fieldTarget, customMessage));
    }
    setLessOrEqualToValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(NumberValidators.lessOrEqualTo(fieldTarget, customMessage));
    }
    setMoreOrEqualToValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(NumberValidators.moreOrEqualTo(fieldTarget, customMessage));
    }
    setAfterOrEqualToValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(DateTimeValidators.afterOrEqualTo(fieldTarget, customMessage));
    }
    setBeforeOrEqualToValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(DateTimeValidators.beforeOrEqualTo(fieldTarget, customMessage));
    }
    checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f) {
        if (!fieldTarget)
            throw new Error('formControlTarget must be declared');
        const formControlTarget = f.get(fieldTarget);
        if (!formControlTarget)
            throw new Error(`${fieldTarget} formControl not exists`);
        this.subs.add(formControlTarget.valueChanges.subscribe((val) => control.updateValueAndValidity({ emitEvent: false })));
    }
}
FormularioService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormularioService, deps: [{ token: i1.FormBuilder }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
FormularioService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormularioService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormularioService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYXJpby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9keW5hbWljLWZvcm0vZm9ybXVsYXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQWMsYUFBYSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRSxPQUFPLEVBR0wsV0FBVyxHQUVaLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsT0FBTyxFQUNMLGNBQWMsRUFDZCxrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsa0JBQWtCLEdBQ25CLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLeEIsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixZQUFvQixFQUFlLEVBQVUsSUFBZ0I7UUFBekMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBeUI7UUFDdEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxlQUFlLENBQUMsUUFBUSxJQUFLLEtBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkUsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRyxLQUFhLENBQUMs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LFdBQVcseUJBQXlCLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDWCxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDL0MsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQ3JELENBQ0YsQ0FBQztJQUNKLENBQUM7OytHQW5wQlUsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs0RkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbkZvcm0sXHJcbiAgQ29uZGl0aW9uRm9ybSxcclxuICBFbXB0eWZpZWxkLFxyXG4gIEZpZWxkQ29uZmlnLFxyXG4gIEZvcm1GaWVsZENvbmZpZyxcclxuICBWYWxpZGF0aW9uRm9ybSxcclxufSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBBY3Rpb25Gb3JtVHlwZXMsIEZvcm1Db25maWdUeXBlcywgVmFsaWRhdGlvblR5cGVzIH0gZnJvbSAnLi9lbnVtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCwgbWFwIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIEZvcm1CdWlsZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1Hcm91cCxcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xyXG5pbXBvcnQgeyBQcmVmaXhDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMvcHJlZml4LWNvbmZpZyc7XHJcbmltcG9ydCB7XHJcbiAgRGF0YVZhbGlkYXRvcnMsXHJcbiAgUmVxdWlyZWRWYWxpZGF0b3JzLFxyXG4gIE51bWJlclZhbGlkYXRvcnMsXHJcbiAgVGV4dFZhbGlkYXRvcnMsXHJcbiAgRmlsZVZhbGlkYXRvcnMsXHJcbiAgRGF0ZVRpbWVWYWxpZGF0b3JzLFxyXG59IGZyb20gJy4uL3ZhbGlkYXRpb25zJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtdWxhcmlvU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdWJzOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIHRoaXMuc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybUdyb3VwKGZpZWxkczogRm9ybUZpZWxkQ29uZmlnW10pOiBGb3JtR3JvdXAge1xyXG4gICAgY29uc3QgZm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZC50eXBlID09IEZvcm1Db25maWdUeXBlcy5FbXB0eUNvbCAmJiAoZmllbGQgYXMgYW55KVsna2V5J10pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdWZXIgRmllbHNDb25maWcgZW46ICcsIChmaWVsZCBhcyBhbnkpWydrZXknXSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgJ05vIHNlIHB1ZWRlIHBvbmVyIHR5cGU6RW1wdHlDb2wgYSB1biBjb250cm9sIHF1ZSB0aWVuZSBxdWUgZm9ybWFyIHBhcnRlIGRlbCBmb3JtdWxhcmlvJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWVsZC50eXBlICE9IEZvcm1Db25maWdUeXBlcy5FbXB0eUNvbCkge1xyXG4gICAgICAgIGZvcm1Hcm91cC5hZGRDb250cm9sKFxyXG4gICAgICAgICAgZmllbGQua2V5LFxyXG4gICAgICAgICAgbmV3IEZvcm1Db250cm9sKHtcclxuICAgICAgICAgICAgdmFsdWU6IGZpZWxkLmRlZmF1bHRWYWx1ZSB8fCAnJyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLmRpc3NhYmxlZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmIChmaWVsZC50eXBlID09IEZvcm1Db25maWdUeXBlcy5QcmVmaXgpIHtcclxuICAgICAgICB0aGlzLnByb2Nlc2FyUHJlZml4KGZvcm1Hcm91cCwgZmllbGQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWVsZC50eXBlICE9IEZvcm1Db25maWdUeXBlcy5FbXB0eUNvbCkge1xyXG4gICAgICAgIGZpZWxkID0gZmllbGQgYXMgRmllbGRDb25maWc7XHJcbiAgICAgICAgdGhpcy5yZWFsaXphclJlcXVlc3RUb1VybChmb3JtR3JvdXAsIGZpZWxkKTtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLnByb2Nlc2FyQWNjaW9uZXMoXHJcbiAgICAgICAgICBmaWVsZHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAoZikgPT4gZi50eXBlICE9IEZvcm1Db25maWdUeXBlcy5FbXB0eUNvbFxyXG4gICAgICAgICAgKSBhcyBGaWVsZENvbmZpZ1tdLFxyXG4gICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICBmb3JtR3JvdXBcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgIHRoaXMuc3Vicy5hZGQoc3ViKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VmFsaWRhdGlvbnMoXHJcbiAgICAgICAgICBmb3JtR3JvdXAuZ2V0KGZpZWxkLmtleSkgYXMgQWJzdHJhY3RDb250cm9sLFxyXG4gICAgICAgICAgZmllbGQudmFsaWRhdGlvbnMsXHJcbiAgICAgICAgICBmb3JtR3JvdXBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybUdyb3VwO1xyXG4gIH1cclxuXHJcbiAgcHJvY2VzYXJBY2Npb25lcyhmaWVsZHM6IEZpZWxkQ29uZmlnW10sIGZpZWxkOiBGaWVsZENvbmZpZywgZm9ybTogRm9ybUdyb3VwKSB7XHJcbiAgICBpZiAoZmllbGQuYWN0aW9uLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gZm9ybS5nZXQoZmllbGQua2V5KT8udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcclxuICAgICAgZmllbGQuYWN0aW9uLmZvckVhY2goKGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRUYXJnZXQgPSB0aGlzLmdldEZpZWxkVGFyZ2V0RnJvbUZpZWxkcyhcclxuICAgICAgICAgIGFjdGlvbi5maWVsZFRhcmdldCxcclxuICAgICAgICAgIGZpZWxkc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZm9ybUNvbnRyb2xUYXJnZXQgPSBmb3JtLmdldChhY3Rpb24uZmllbGRUYXJnZXQpIGFzIEZvcm1Db250cm9sO1xyXG4gICAgICAgIGlmICghZm9ybUNvbnRyb2xUYXJnZXQpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlIGVuY29udHJvIGVsIGZvcm1Db250cm9sJyk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgQWN0aW9uRm9ybVR5cGVzLkhpZGU6XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzYXJIaWRlKG5ld1ZhbHVlLCBmaWVsZFRhcmdldCwgYWN0aW9uLCBmb3JtQ29udHJvbFRhcmdldCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBBY3Rpb25Gb3JtVHlwZXMuU2hvdzpcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNhclNob3cobmV3VmFsdWUsIGZpZWxkVGFyZ2V0LCBhY3Rpb24sIGZvcm1Db250cm9sVGFyZ2V0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFjdGlvbkZvcm1UeXBlcy5SZXNldDpcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNhclJlc2V0KG5ld1ZhbHVlLCBmb3JtQ29udHJvbFRhcmdldCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBBY3Rpb25Gb3JtVHlwZXMuRGlzc2FibGU6XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzYXJEaXNhYmxlKG5ld1ZhbHVlLCBmb3JtQ29udHJvbFRhcmdldCwgYWN0aW9uKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFjdGlvbkZvcm1UeXBlcy5FbmFibGU6XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzYXJFbmFibGUobmV3VmFsdWUsIGZvcm1Db250cm9sVGFyZ2V0LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQWN0aW9uRm9ybVR5cGVzLlNldFZhbHVlOlxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc2FyU2V0VmFsdWUobmV3VmFsdWUsIGZvcm1Db250cm9sVGFyZ2V0LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQWN0aW9uRm9ybVR5cGVzLkZpbGxPcHRpb25zOlxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc2FyRmlsbE9wdGlvbnMoXHJcbiAgICAgICAgICAgICAgbmV3VmFsdWUsXHJcbiAgICAgICAgICAgICAgZm9ybUNvbnRyb2xUYXJnZXQsXHJcbiAgICAgICAgICAgICAgZmllbGRUYXJnZXQsXHJcbiAgICAgICAgICAgICAgYWN0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICdObyBzZSByZWNvbm9jZSBlbCB0eXBlIGRlIGxhIGFjY2lvbjogJyArIGFjdGlvbi50eXBlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvY2VzYXJQcmVmaXgoZm9ybTogRm9ybUdyb3VwLCBmaWVsZDogRmllbGRDb25maWcpIHtcclxuICAgIC8qKlxyXG4gICAgICogUHJvY2VzZWwgcHJlZml4IChlc3VjaG8gY2FtYmlvcyBlbiBkZXBlbmRlbmNpZXMgcGFyYSBhcm1hciBlbHByZWZpam8gZGluYW1pY28pIGN1YW5kbzpcclxuICAgICAqICAgZWwgY2FtcG8gdGllbmUgcHJlZml4Q29uZmlnXHJcbiAgICAgKiAgIHByZWZpeENvbmZpZyB0aWVuZSBsYWNvbmZpZ3VyYWNpb24gZGluYW1pY2FcclxuICAgICAqICAgTGEgY29uZmlndXJhY2lvbiBkaW5hbWljYSB0aWVuZSBjb250cm9sZXNcclxuICAgICAqL1xyXG4gICAgaWYgKFxyXG4gICAgICAhZmllbGQucHJlZml4Q29uZmlnIHx8XHJcbiAgICAgICFmaWVsZC5wcmVmaXhDb25maWc/LnByZWZpeERpbmFtaWMgfHxcclxuICAgICAgZmllbGQucHJlZml4Q29uZmlnPy5wcmVmaXhEaW5hbWljLmNvbnRyb2xLZXlEZXBlbmRlbmNpZXMubGVuZ3RoID09IDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250cm9sRGVwZW5kZW5jaWVzID1cclxuICAgICAgZmllbGQucHJlZml4Q29uZmlnLnByZWZpeERpbmFtaWM/LmNvbnRyb2xLZXlEZXBlbmRlbmNpZXMubWFwKFxyXG4gICAgICAgIChjb250cm9sKSA9PiB7XHJcbiAgICAgICAgICBpZiAoISEhZm9ybS5nZXQoY29udHJvbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbRGluYW15eCBwcmVmaXhdIG5vIGV4aXN0ZSBlbCBjb250cm9sICcgKyBjb250cm9sICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGZvcm0uZ2V0KGNvbnRyb2wpPy52YWx1ZUNoYW5nZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICApIGFzIE9ic2VydmFibGU8bnVtYmVyIHwgc3RyaW5nPltdO1xyXG5cclxuICAgIGNvbnN0IHByZWZpeERlcGVuZGVuY2llcyQgPSBjb21iaW5lTGF0ZXN0KGNvbnRyb2xEZXBlbmRlbmNpZXMpLnBpcGUoXHJcbiAgICAgIG1hcCgocikgPT4ge1xyXG4gICAgICAgIGlmIChyLmV2ZXJ5KCh4KSA9PiAhIXgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmllbGQucHJlZml4Q29uZmlnPy5wcmVmaXhEaW5hbWljPy5yZWR1Y2VGbihcclxuICAgICAgICAgICAgci5tYXAoKHgpID0+IHgudG9TdHJpbmcoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHJldHVybiAnJztcclxuICAgICAgfSlcclxuICAgICkgYXMgT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG5cclxuICAgIChmaWVsZC5wcmVmaXhDb25maWcucHJlZml4RGluYW1pYyBhcyBhbnkpLnByZWZpeCQgPSBwcmVmaXhEZXBlbmRlbmNpZXMkO1xyXG4gIH1cclxuXHJcbiAgcmVhbGl6YXJSZXF1ZXN0VG9VcmwoZm9ybTogRm9ybUdyb3VwLCBmaWVsZDogRmllbGRDb25maWcpIHtcclxuICAgIGlmICghZmllbGQub3B0aW9ucz8udXJsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCdjb25zdWx0byBlbjogJyArIGZpZWxkLmtleSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmaWVsZC5vcHRpb25zLnVybCk7XHJcblxyXG4gICAgZm9ybS5nZXQoZmllbGQua2V5KSEuZGlzYWJsZSgpO1xyXG4gICAgdGhpcy5odHRwLmdldChmaWVsZC5vcHRpb25zPy51cmwgYXMgc3RyaW5nKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGZpZWxkLm9wdGlvbnMhLm9wdGlvbnMgPSByZXM7XHJcbiAgICAgIGZvcm0uZ2V0KGZpZWxkLmtleSkhLmVuYWJsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpZWxkVGFyZ2V0RnJvbUZpZWxkcyhmaWVsZFRhcmdldDogc3RyaW5nLCBmaWVsZHM6IEZpZWxkQ29uZmlnW10pIHtcclxuICAgIGNvbnN0IGZ0ID0gZmllbGRzLmZpbmQoKHgpID0+IHgua2V5ID09IGZpZWxkVGFyZ2V0KSBhcyBGaWVsZENvbmZpZztcclxuICAgIGlmICghZnQpIHRocm93IG5ldyBFcnJvcignTm8gc2UgZW5jdG9udHJvIGVsIGZpZWxkJyk7XHJcbiAgICByZXR1cm4gZnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FyRmlsbE9wdGlvbnMoXHJcbiAgICBuZXdWYWx1ZTogYW55LFxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IEZpZWxkQ29uZmlnLFxyXG4gICAgYWN0aW9uOiBBY3Rpb25Gb3JtXHJcbiAgKSB7XHJcbiAgICAvL1JlbGxlbmFyIG9wY2lvbmVzXHJcbiAgICAvL1VSTCBodHRwczovL2FwaXMuZGF0b3MuZ29iLmFyL2dlb3JlZi9hcGkvbXVuaWNpcGlvcz9wcm92aW5jaWE9dHVjdW1hblxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQucmVzZXQoJycpO1xyXG4gICAgaWYgKGFjdGlvbi5maWxsQ29uZmlnPy51cmwgJiYgbmV3VmFsdWUpIHtcclxuICAgICAgZm9ybUNvbnRyb2xUYXJnZXQuZGlzYWJsZSgpO1xyXG5cclxuICAgICAgdGhpcy5odHRwXHJcbiAgICAgICAgLmdldChgJHthY3Rpb24uZmlsbENvbmZpZyEudXJsfSR7bmV3VmFsdWV9YClcclxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgbGV0IHZhbCA9IHJlcztcclxuICAgICAgICAgIGNvbnN0IHBhdGhBcnJheSA9IGFjdGlvbi5kYXRhUGF0aCEuc3BsaXQoJy4nKTtcclxuICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBvZiBwYXRoQXJyYXkpIHZhbCA9IHZhbFtwcm9wXTtcclxuXHJcbiAgICAgICAgICBmaWVsZFRhcmdldC5vcHRpb25zIS5vcHRpb25zID0gdmFsO1xyXG5cclxuICAgICAgICAgIGZvcm1Db250cm9sVGFyZ2V0LmVuYWJsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICghIWFjdGlvbi5maWxsQ29uZmlnPy5maWxsRm4pIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IGFjdGlvbi5maWxsQ29uZmlnPy5maWxsRm4obmV3VmFsdWUpO1xyXG4gICAgICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpXHJcbiAgICAgICAgb3B0aW9ucy50aGVuKCh4KSA9PiAoZmllbGRUYXJnZXQub3B0aW9ucyEub3B0aW9ucyA9IHgpKTtcclxuICAgICAgZWxzZSBmaWVsZFRhcmdldC5vcHRpb25zIS5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpZWxkVGFyZ2V0Lm9wdGlvbnMgPSBhY3Rpb24uZmlsbENvbmZpZz8uZmlsbE9wdGlvbnNDb25maWc/LmZpbmQoXHJcbiAgICAgICAgKHgpID0+IHgub25WYWx1ZSA9PSBuZXdWYWx1ZVxyXG4gICAgICApPy5vcHRpb25zQ29uZmlnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNhckhpZGUoXHJcbiAgICBuZXdWYWx1ZTogYW55LFxyXG4gICAgZmllbGRUYXJnZXQ6IEZpZWxkQ29uZmlnLFxyXG4gICAgYWN0aW9uOiBBY3Rpb25Gb3JtLFxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sXHJcbiAgKSB7XHJcbiAgICBmb3JtQ29udHJvbFRhcmdldC5yZXNldCgnJyk7XHJcblxyXG4gICAgZmllbGRUYXJnZXQuaGlkZGVuID0gbmV3VmFsdWUgPT0gYWN0aW9uLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNhclNob3coXHJcbiAgICBuZXdWYWx1ZTogYW55LFxyXG4gICAgZmllbGRUYXJnZXQ6IEZpZWxkQ29uZmlnLFxyXG4gICAgYWN0aW9uOiBBY3Rpb25Gb3JtLFxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sXHJcbiAgKSB7XHJcbiAgICBmb3JtQ29udHJvbFRhcmdldC5yZXNldCgnJyk7XHJcblxyXG4gICAgZmllbGRUYXJnZXQuaGlkZGVuID0gIShuZXdWYWx1ZSA9PSBhY3Rpb24udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNhclJlc2V0KG5ld1ZhbHVlOiBhbnksIGZvcm1Db250cm9sVGFyZ2V0OiBGb3JtQ29udHJvbCkge1xyXG4gICAgaWYgKGZvcm1Db250cm9sVGFyZ2V0Py52YWx1ZSAhPSAnJyAmJiBuZXdWYWx1ZSAhPT0gJycpIHtcclxuICAgICAgZm9ybUNvbnRyb2xUYXJnZXQucmVzZXQoJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNhckRpc2FibGUoXHJcbiAgICBuZXdWYWx1ZTogYW55LFxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sLFxyXG4gICAgYWN0aW9uOiBBY3Rpb25Gb3JtXHJcbiAgKSB7XHJcbiAgICBpZiAobmV3VmFsdWUgPT0gYWN0aW9uLnZhbHVlKSB7XHJcbiAgICAgIGZvcm1Db250cm9sVGFyZ2V0LmRpc2FibGUoKTtcclxuICAgIH0gZWxzZSBmb3JtQ29udHJvbFRhcmdldC5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzYXJFbmFibGUoXHJcbiAgICBuZXdWYWx1ZTogYW55LFxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sLFxyXG4gICAgYWN0aW9uOiBBY3Rpb25Gb3JtXHJcbiAgKSB7XHJcbiAgICBpZiAobmV3VmFsdWUgPT0gYWN0aW9uLnZhbHVlKSB7XHJcbiAgICAgIGZvcm1Db250cm9sVGFyZ2V0LmVuYWJsZSgpO1xyXG4gICAgfSBlbHNlIGZvcm1Db250cm9sVGFyZ2V0LmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzYXJTZXRWYWx1ZShcclxuICAgIG5ld1ZhbHVlOiBhbnksXHJcbiAgICBmb3JtQ29udHJvbFRhcmdldDogRm9ybUNvbnRyb2wsXHJcbiAgICBhY3Rpb246IEFjdGlvbkZvcm1cclxuICApIHtcclxuICAgIGlmICghYWN0aW9uLm5ld1ZhbHVlKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xhIGFjY2lvbiBkZWJlIHRlbmVyIHVuIG51ZXZvIHZhbG9yIHBhcmEgc2V0ZWFyJyk7XHJcblxyXG4gICAgaWYgKG5ld1ZhbHVlID09IGFjdGlvbi52YWx1ZSkge1xyXG4gICAgICBmb3JtQ29udHJvbFRhcmdldC5zZXRWYWx1ZShhY3Rpb24ubmV3VmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsaWRhdGlvbnMoXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICB2YWxpZGF0aW9uczogVmFsaWRhdGlvbkZvcm1bXSxcclxuICAgIGY6IEZvcm1Hcm91cFxyXG4gICkge1xyXG4gICAgZm9yIChsZXQgdmFsaWRhdGlvbiBvZiB2YWxpZGF0aW9ucykge1xyXG4gICAgICBzd2l0Y2ggKHZhbGlkYXRpb24udHlwZSkge1xyXG4gICAgICAgIC8vIFNpbmdsZSBGaWVsZHMgVmFsaWRhdGlvbnNcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5SZXF1aXJlZDpcclxuICAgICAgICAgIHRoaXMuc2V0UmVxdWlyZWRWYWxpZGF0aW9uKGNvbnRyb2wsIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5GdW5jdGlvbjpcclxuICAgICAgICAgIHRoaXMuc2V0RnVuY1ZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZnVuYyxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTWluOlxyXG4gICAgICAgICAgdGhpcy5zZXRNaW5WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5NYXg6XHJcbiAgICAgICAgICB0aGlzLnNldE1heFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLk1pbkxlbmd0aDpcclxuICAgICAgICAgIHRoaXMuc2V0TWluTGVuZ3RoVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTWF4TGVuZ3RoOlxyXG4gICAgICAgICAgdGhpcy5zZXRNYXhMZW5ndGhWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5QYXR0ZXJuOlxyXG4gICAgICAgICAgdGhpcy5zZXRQYXR0ZXJuVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTWluRGF0ZTpcclxuICAgICAgICAgIHRoaXMuc2V0TWluRGF0ZVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLk1heERhdGU6XHJcbiAgICAgICAgICB0aGlzLnNldE1heERhdGVWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5NYXhGaWxlU2l6ZTpcclxuICAgICAgICAgIHRoaXMuc2V0TWF4RmlsZVNpemVWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5BY2NlcHRlZFR5cGVzOlxyXG4gICAgICAgICAgdGhpcy5zZXRBY2NlcHRlZFR5cGVzVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuRW1haWw6XHJcbiAgICAgICAgICB0aGlzLnNldEVtYWlsVmFsaWRhdGlvbihjb250cm9sLCB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2UpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gQ3Jvc3MgRmllbGRzIFZhbGlkYXRpb25zXHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuUmVxdWlyZWRJZjpcclxuICAgICAgICAgIHRoaXMuc2V0UmVxdWlyZWRJZlZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY29uZGl0aW9ucyxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuUmVxdWlyZWRJZkZpZWxkSXNFbXB0eTpcclxuICAgICAgICAgIHRoaXMuc2V0UmVxdWlyZWRJZkZpZWxkSXNFbXB0eVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZmllbGRUYXJnZXQhLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5SZXF1aXJlZElmRmllbGRJc05vdEVtcHR5OlxyXG4gICAgICAgICAgdGhpcy5zZXRSZXF1aXJlZElmRmllbGRJc05vdEVtcHR5VmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5maWVsZFRhcmdldCEsXHJcbiAgICAgICAgICAgIGYsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLkxlc3NPckVxdWFsVG86XHJcbiAgICAgICAgICB0aGlzLnNldExlc3NPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmZpZWxkVGFyZ2V0ISxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTW9yZU9yRXF1YWxUbzpcclxuICAgICAgICAgIHRoaXMuc2V0TW9yZU9yRXF1YWxUb1ZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZmllbGRUYXJnZXQhLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5BZnRlck9yRXF1YWxUbzpcclxuICAgICAgICAgIHRoaXMuc2V0QWZ0ZXJPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmZpZWxkVGFyZ2V0ISxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuQmVmb3JlT3JFcXVhbFRvOlxyXG4gICAgICAgICAgdGhpcy5zZXRCZWZvcmVPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmZpZWxkVGFyZ2V0ISxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gU2luZ2xlIEZpZWxkcyBWYWxpZGF0aW9uc1xyXG5cclxuICBwcml2YXRlIHNldFJlcXVpcmVkVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhSZXF1aXJlZFZhbGlkYXRvcnMucmVxdWlyZWQoY3VzdG9tTWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRNaW5WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgbWluVmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWluVmFsdWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW5WYWx1ZSBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcbiAgICB9XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoTnVtYmVyVmFsaWRhdG9ycy5taW4obWluVmFsdWUsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWF4VmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIG1heFZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIW1heFZhbHVlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4VmFsdWUgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKE51bWJlclZhbGlkYXRvcnMubWF4KG1heFZhbHVlLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1pbkxlbmd0aFZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBtaW5MZW5ndGg6IG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWluTGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWluTGVuZ3RoIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhUZXh0VmFsaWRhdG9ycy5taW5MZW5ndGgobWluTGVuZ3RoLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1heExlbmd0aFZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBtYXhMZW5ndGg6IG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWF4TGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4TGVuZ3RoIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhUZXh0VmFsaWRhdG9ycy5tYXhMZW5ndGgobWF4TGVuZ3RoLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFBhdHRlcm5WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgcGF0dGVybjogc3RyaW5nIHwgUmVnRXhwIHwgdW5kZWZpbmVkLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKCFwYXR0ZXJuKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigncGF0dGVybiBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcbiAgICB9XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoVGV4dFZhbGlkYXRvcnMucGF0dGVybihwYXR0ZXJuLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1pbkRhdGVWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgbWluRGF0ZTogRGF0ZVRpbWUsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIW1pbkRhdGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW5EYXRlIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhEYXRlVGltZVZhbGlkYXRvcnMubWluRGF0ZShtaW5EYXRlLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1heERhdGVWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgbWF4RGF0ZTogRGF0ZVRpbWUsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIW1heERhdGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXhEYXRlIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhEYXRlVGltZVZhbGlkYXRvcnMubWluRGF0ZShtYXhEYXRlLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1heEZpbGVTaXplVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIG1heFNpemU6IG51bWJlcixcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWF4U2l6ZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21heFNpemUgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKEZpbGVWYWxpZGF0b3JzLm1heEZpbGVTaXplKG1heFNpemUsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWNjZXB0ZWRUeXBlc1ZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBhY2NlcHRlZFR5cGVzOiBzdHJpbmdbXSxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghYWNjZXB0ZWRUeXBlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FjY2VwdGVkVHlwZXMgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFxyXG4gICAgICBGaWxlVmFsaWRhdG9ycy5hY2NlcHRlZEZpbGVUeXBlcyhhY2NlcHRlZFR5cGVzLCBjdXN0b21NZXNzYWdlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RW1haWxWYWxpZGF0aW9uKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgY3VzdG9tTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKERhdGFWYWxpZGF0b3JzLmVtYWlsKGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIC8vIENyb3NzIEZpZWxkcyBWYWxpZGF0aW9uc1xyXG5cclxuICBwcml2YXRlIHNldEZ1bmNWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZnVuYzogRnVuY3Rpb24gfCB1bmRlZmluZWQsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIWZ1bmMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEVycm9yID0gKGVycm9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29udHJvbC5zZXRFcnJvcnMoXHJcbiAgICAgICAgY29udHJvbC5lcnJvcnNcclxuICAgICAgICAgID8geyAuLi5jb250cm9sLmVycm9ycywgW2Vycm9yXTogeyBbZXJyb3JdOiB0cnVlLCBjdXN0b21NZXNzYWdlIH0gfVxyXG4gICAgICAgICAgOiB7IFtlcnJvcl06IHsgW2Vycm9yXTogdHJ1ZSwgY3VzdG9tTWVzc2FnZSB9IH1cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgZnVuYyh2YWwsIHNldEVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRSZXF1aXJlZElmVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGNvbmRpdGlvbnM6IENvbmRpdGlvbkZvcm1bXSB8IHVuZGVmaW5lZCxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghY29uZGl0aW9ucykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmRpdGlvbnMgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNvbmRpdGlvbiBvZiBjb25kaXRpb25zKSB7XHJcbiAgICAgIGlmICghZi5nZXQoY29uZGl0aW9uLmZpZWxkKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmllbGQgbm90IGZvdW5kJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGYuZ2V0KGNvbmRpdGlvbi5maWVsZCk/LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWwgPT0gY29uZGl0aW9uLnZhbHVlKSB7XHJcbiAgICAgICAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoUmVxdWlyZWRWYWxpZGF0b3JzLnJlcXVpcmVkKGN1c3RvbU1lc3NhZ2UpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udHJvbC5yZW1vdmVWYWxpZGF0b3JzKFJlcXVpcmVkVmFsaWRhdG9ycy5yZXF1aXJlZChjdXN0b21NZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UmVxdWlyZWRJZkZpZWxkSXNFbXB0eVZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBmaWVsZFRhcmdldDogc3RyaW5nLFxyXG4gICAgZjogRm9ybUdyb3VwLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5jaGVja1RhcmdldEFuZFN1YnNjcmliZVRvUmVmcmVzaFZhbGlkYXRpb25zKGNvbnRyb2wsIGZpZWxkVGFyZ2V0LCBmKTtcclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhcclxuICAgICAgUmVxdWlyZWRWYWxpZGF0b3JzLnJlcXVpcmVkSWZGaWVsZElzRW1wdHkoZmllbGRUYXJnZXQsIGN1c3RvbU1lc3NhZ2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRSZXF1aXJlZElmRmllbGRJc05vdEVtcHR5VmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGZpZWxkVGFyZ2V0OiBzdHJpbmcsXHJcbiAgICBmOiBGb3JtR3JvdXAsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoZWNrVGFyZ2V0QW5kU3Vic2NyaWJlVG9SZWZyZXNoVmFsaWRhdGlvbnMoY29udHJvbCwgZmllbGRUYXJnZXQsIGYpO1xyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFxyXG4gICAgICBSZXF1aXJlZFZhbGlkYXRvcnMucmVxdWlyZWRJZkZpZWxkSXNOb3RFbXB0eShmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldExlc3NPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuY2hlY2tUYXJnZXRBbmRTdWJzY3JpYmVUb1JlZnJlc2hWYWxpZGF0aW9ucyhjb250cm9sLCBmaWVsZFRhcmdldCwgZik7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIE51bWJlclZhbGlkYXRvcnMubGVzc09yRXF1YWxUbyhmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1vcmVPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuY2hlY2tUYXJnZXRBbmRTdWJzY3JpYmVUb1JlZnJlc2hWYWxpZGF0aW9ucyhjb250cm9sLCBmaWVsZFRhcmdldCwgZik7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIE51bWJlclZhbGlkYXRvcnMubW9yZU9yRXF1YWxUbyhmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFmdGVyT3JFcXVhbFRvVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGZpZWxkVGFyZ2V0OiBzdHJpbmcsXHJcbiAgICBmOiBGb3JtR3JvdXAsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoZWNrVGFyZ2V0QW5kU3Vic2NyaWJlVG9SZWZyZXNoVmFsaWRhdGlvbnMoY29udHJvbCwgZmllbGRUYXJnZXQsIGYpO1xyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFxyXG4gICAgICBEYXRlVGltZVZhbGlkYXRvcnMuYWZ0ZXJPckVxdWFsVG8oZmllbGRUYXJnZXQsIGN1c3RvbU1lc3NhZ2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRCZWZvcmVPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuY2hlY2tUYXJnZXRBbmRTdWJzY3JpYmVUb1JlZnJlc2hWYWxpZGF0aW9ucyhjb250cm9sLCBmaWVsZFRhcmdldCwgZik7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIERhdGVUaW1lVmFsaWRhdG9ycy5iZWZvcmVPckVxdWFsVG8oZmllbGRUYXJnZXQsIGN1c3RvbU1lc3NhZ2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1RhcmdldEFuZFN1YnNjcmliZVRvUmVmcmVzaFZhbGlkYXRpb25zKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cFxyXG4gICkge1xyXG4gICAgaWYgKCFmaWVsZFRhcmdldCkgdGhyb3cgbmV3IEVycm9yKCdmb3JtQ29udHJvbFRhcmdldCBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybUNvbnRyb2xUYXJnZXQgPSBmLmdldChmaWVsZFRhcmdldCkgYXMgRm9ybUNvbnRyb2w7XHJcbiAgICBpZiAoIWZvcm1Db250cm9sVGFyZ2V0KVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZmllbGRUYXJnZXR9IGZvcm1Db250cm9sIG5vdCBleGlzdHNgKTtcclxuXHJcbiAgICB0aGlzLnN1YnMuYWRkKFxyXG4gICAgICBmb3JtQ29udHJvbFRhcmdldC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWwpID0+XHJcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=