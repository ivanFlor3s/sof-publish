import { Injectable } from '@angular/core';
import { ActionFormTypes, FormConfigTypes, ValidationTypes } from './enums';
import { Subscription } from 'rxjs';
import { FormControl, } from '@angular/forms';
import { DataValidators, RequiredValidators, NumberValidators, TextValidators, FileValidators, DateTimeValidators, } from '../validations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common/http";
export class FormularioService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        console.log('Inicio servicio form');
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
            if (field.type != FormConfigTypes.EmptyCol) {
                field = field;
                this.realizarRequestToUrl(formGroup, field);
                const sub = this.procesarAcciones(fields.filter(f => f.type != FormConfigTypes.EmptyCol), field, formGroup);
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
    realizarRequestToUrl(form, field) {
        if (!field.options?.url) {
            return;
        }
        console.log('consulto en: ' + field.key);
        console.log(field.options.url);
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
                options.then(x => fieldTarget.options.options = x);
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
        console.log('Me caigo a pedazos!!!!');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYXJpby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9keW5hbWljLWZvcm0vZm9ybXVsYXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUdMLFdBQVcsR0FFWixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGtCQUFrQixHQUNuQixNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3hCLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsRUFBZSxFQUFVLElBQWdCO1FBQXpDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUF5QjtRQUN0QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxRQUFRLElBQUssS0FBYSxDQUFDLEtBQUssQ0FBQyxFQUFDO2dCQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFD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LEtBQUssQ0FBQyxHQUFHLFdBQVcseUJBQXlCLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDWCxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDL0MsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQ3JELENBQ0YsQ0FBQztJQUNKLENBQUM7OytHQXJtQlUsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs0RkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbkZvcm0sXHJcbiAgQ29uZGl0aW9uRm9ybSxcclxuICBFbXB0eWZpZWxkLFxyXG4gIEZpZWxkQ29uZmlnLFxyXG4gIEZvcm1GaWVsZENvbmZpZyxcclxuICBWYWxpZGF0aW9uRm9ybSxcclxufSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBBY3Rpb25Gb3JtVHlwZXMsIEZvcm1Db25maWdUeXBlcywgVmFsaWRhdGlvblR5cGVzIH0gZnJvbSAnLi9lbnVtcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBGb3JtQnVpbGRlcixcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtR3JvdXAsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcclxuaW1wb3J0IHtcclxuICBEYXRhVmFsaWRhdG9ycyxcclxuICBSZXF1aXJlZFZhbGlkYXRvcnMsXHJcbiAgTnVtYmVyVmFsaWRhdG9ycyxcclxuICBUZXh0VmFsaWRhdG9ycyxcclxuICBGaWxlVmFsaWRhdG9ycyxcclxuICBEYXRlVGltZVZhbGlkYXRvcnMsXHJcbn0gZnJvbSAnLi4vdmFsaWRhdGlvbnMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm11bGFyaW9TZXJ2aWNlIHtcclxuICBwcml2YXRlIHN1YnM6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ0luaWNpbyBzZXJ2aWNpbyBmb3JtJyk7XHJcbiAgICB0aGlzLnN1YnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZEZvcm1Hcm91cChmaWVsZHM6IEZvcm1GaWVsZENvbmZpZ1tdKTogRm9ybUdyb3VwIHtcclxuICAgIGNvbnN0IGZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe30pO1xyXG5cclxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiggZmllbGQudHlwZSA9PSBGb3JtQ29uZmlnVHlwZXMuRW1wdHlDb2wgJiYgKGZpZWxkIGFzIGFueSlbJ2tleSddKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdWZXIgRmllbHNDb25maWcgZW46ICcsIChmaWVsZCBhcyBhbnkpWydrZXknXSlcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlIHB1ZWRlIHBvbmVyIHR5cGU6RW1wdHlDb2wgYSB1biBjb250cm9sIHF1ZSB0aWVuZSBxdWUgZm9ybWFyIHBhcnRlIGRlbCBmb3JtdWxhcmlvJylcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoICBmaWVsZC50eXBlICE9IEZvcm1Db25maWdUeXBlcy5FbXB0eUNvbCApIHtcclxuICAgICAgICBmb3JtR3JvdXAuYWRkQ29udHJvbChcclxuICAgICAgICAgIGZpZWxkLmtleSxcclxuICAgICAgICAgIG5ldyBGb3JtQ29udHJvbCh7XHJcbiAgICAgICAgICAgIHZhbHVlOiBmaWVsZC5kZWZhdWx0VmFsdWUgfHwgJycsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBmaWVsZC5kaXNzYWJsZWQsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7ICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmKCBmaWVsZC50eXBlICE9IEZvcm1Db25maWdUeXBlcy5FbXB0eUNvbCApIHtcclxuICAgICAgICBmaWVsZCA9IGZpZWxkIGFzIEZpZWxkQ29uZmlnXHJcbiAgICAgICAgdGhpcy5yZWFsaXphclJlcXVlc3RUb1VybChmb3JtR3JvdXAsIGZpZWxkKTtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLnByb2Nlc2FyQWNjaW9uZXMoZmllbGRzLmZpbHRlciggZiA9PiBmLnR5cGUgIT0gRm9ybUNvbmZpZ1R5cGVzLkVtcHR5Q29sICkgYXMgRmllbGRDb25maWdbXSwgZmllbGQsIGZvcm1Hcm91cCk7XHJcbiAgICAgICAgaWYoc3ViKXtcclxuICBcclxuICAgICAgICAgIHRoaXMuc3Vicy5hZGQoc3ViKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGhpcy5zZXRWYWxpZGF0aW9ucyhcclxuICAgICAgICAgIGZvcm1Hcm91cC5nZXQoZmllbGQua2V5KSBhcyBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICAgICAgICBmaWVsZC52YWxpZGF0aW9ucyxcclxuICAgICAgICAgIGZvcm1Hcm91cFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtR3JvdXA7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNhckFjY2lvbmVzKGZpZWxkczogRmllbGRDb25maWdbXSwgZmllbGQ6IEZpZWxkQ29uZmlnLCBmb3JtOiBGb3JtR3JvdXApIHtcclxuICAgIGlmIChmaWVsZC5hY3Rpb24ubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybiBmb3JtLmdldChmaWVsZC5rZXkpPy52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICBmaWVsZC5hY3Rpb24uZm9yRWFjaCgoYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFRhcmdldCA9IHRoaXMuZ2V0RmllbGRUYXJnZXRGcm9tRmllbGRzKFxyXG4gICAgICAgICAgYWN0aW9uLmZpZWxkVGFyZ2V0LFxyXG4gICAgICAgICAgZmllbGRzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBmb3JtQ29udHJvbFRhcmdldCA9IGZvcm0uZ2V0KGFjdGlvbi5maWVsZFRhcmdldCkgYXMgRm9ybUNvbnRyb2w7XHJcbiAgICAgICAgaWYgKCFmb3JtQ29udHJvbFRhcmdldClcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2UgZW5jb250cm8gZWwgZm9ybUNvbnRyb2wnKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBBY3Rpb25Gb3JtVHlwZXMuSGlkZTpcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNhckhpZGUobmV3VmFsdWUsIGZpZWxkVGFyZ2V0LCBhY3Rpb24sIGZvcm1Db250cm9sVGFyZ2V0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFjdGlvbkZvcm1UeXBlcy5TaG93OlxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc2FyU2hvdyhuZXdWYWx1ZSwgZmllbGRUYXJnZXQsIGFjdGlvbiwgZm9ybUNvbnRyb2xUYXJnZXQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQWN0aW9uRm9ybVR5cGVzLlJlc2V0OlxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc2FyUmVzZXQobmV3VmFsdWUsIGZvcm1Db250cm9sVGFyZ2V0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFjdGlvbkZvcm1UeXBlcy5EaXNzYWJsZTpcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNhckRpc2FibGUobmV3VmFsdWUsIGZvcm1Db250cm9sVGFyZ2V0LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQWN0aW9uRm9ybVR5cGVzLkVuYWJsZTpcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNhckVuYWJsZShuZXdWYWx1ZSwgZm9ybUNvbnRyb2xUYXJnZXQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBBY3Rpb25Gb3JtVHlwZXMuU2V0VmFsdWU6XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzYXJTZXRWYWx1ZShuZXdWYWx1ZSwgZm9ybUNvbnRyb2xUYXJnZXQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBBY3Rpb25Gb3JtVHlwZXMuRmlsbE9wdGlvbnM6XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzYXJGaWxsT3B0aW9ucyhcclxuICAgICAgICAgICAgICBuZXdWYWx1ZSxcclxuICAgICAgICAgICAgICBmb3JtQ29udHJvbFRhcmdldCxcclxuICAgICAgICAgICAgICBmaWVsZFRhcmdldCxcclxuICAgICAgICAgICAgICBhY3Rpb25cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgJ05vIHNlIHJlY29ub2NlIGVsIHR5cGUgZGUgbGEgYWNjaW9uOiAnICsgYWN0aW9uLnR5cGVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlYWxpemFyUmVxdWVzdFRvVXJsKGZvcm06IEZvcm1Hcm91cCwgZmllbGQ6IEZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAoIWZpZWxkLm9wdGlvbnM/LnVybCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnY29uc3VsdG8gZW46ICcgKyBmaWVsZC5rZXkpO1xyXG4gICAgY29uc29sZS5sb2coZmllbGQub3B0aW9ucy51cmwpO1xyXG5cclxuICAgIGZvcm0uZ2V0KGZpZWxkLmtleSkhLmRpc2FibGUoKTtcclxuICAgIHRoaXMuaHR0cC5nZXQoZmllbGQub3B0aW9ucz8udXJsIGFzIHN0cmluZykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBmaWVsZC5vcHRpb25zIS5vcHRpb25zID0gcmVzO1xyXG4gICAgICBmb3JtLmdldChmaWVsZC5rZXkpIS5lbmFibGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWVsZFRhcmdldEZyb21GaWVsZHMoZmllbGRUYXJnZXQ6IHN0cmluZywgZmllbGRzOiBGaWVsZENvbmZpZ1tdKSB7XHJcbiAgICBjb25zdCBmdCA9IGZpZWxkcy5maW5kKCh4KSA9PiB4LmtleSA9PSBmaWVsZFRhcmdldCkgYXMgRmllbGRDb25maWc7XHJcbiAgICBpZiAoIWZ0KSB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlIGVuY3RvbnRybyBlbCBmaWVsZCcpO1xyXG4gICAgcmV0dXJuIGZ0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNhckZpbGxPcHRpb25zKFxyXG4gICAgbmV3VmFsdWU6IGFueSxcclxuICAgIGZvcm1Db250cm9sVGFyZ2V0OiBGb3JtQ29udHJvbCxcclxuICAgIGZpZWxkVGFyZ2V0OiBGaWVsZENvbmZpZyxcclxuICAgIGFjdGlvbjogQWN0aW9uRm9ybVxyXG4gICkge1xyXG4gICAgLy9SZWxsZW5hciBvcGNpb25lc1xyXG4gICAgLy9VUkwgaHR0cHM6Ly9hcGlzLmRhdG9zLmdvYi5hci9nZW9yZWYvYXBpL211bmljaXBpb3M/cHJvdmluY2lhPXR1Y3VtYW5cclxuICAgIGZvcm1Db250cm9sVGFyZ2V0LnJlc2V0KCcnKTtcclxuICAgIGlmIChhY3Rpb24uZmlsbENvbmZpZz8udXJsICYmIG5ld1ZhbHVlKSB7XHJcbiAgICAgIGZvcm1Db250cm9sVGFyZ2V0LmRpc2FibGUoKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgIC5nZXQoYCR7YWN0aW9uLmZpbGxDb25maWchLnVybH0ke25ld1ZhbHVlfWApXHJcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGxldCB2YWwgPSByZXM7XHJcbiAgICAgICAgICBjb25zdCBwYXRoQXJyYXkgPSBhY3Rpb24uZGF0YVBhdGghLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgcGF0aEFycmF5KSB2YWwgPSB2YWxbcHJvcF07XHJcblxyXG4gICAgICAgICAgZmllbGRUYXJnZXQub3B0aW9ucyEub3B0aW9ucyA9IHZhbDtcclxuXHJcbiAgICAgICAgICBmb3JtQ29udHJvbFRhcmdldC5lbmFibGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoISFhY3Rpb24uZmlsbENvbmZpZz8uZmlsbEZuKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBhY3Rpb24uZmlsbENvbmZpZz8uZmlsbEZuKG5ld1ZhbHVlKTtcclxuICAgICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG4gICAgICAgIG9wdGlvbnMudGhlbih4ID0+IGZpZWxkVGFyZ2V0Lm9wdGlvbnMhLm9wdGlvbnMgPSB4KTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGZpZWxkVGFyZ2V0Lm9wdGlvbnMhLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmllbGRUYXJnZXQub3B0aW9ucyA9IGFjdGlvbi5maWxsQ29uZmlnPy5maWxsT3B0aW9uc0NvbmZpZz8uZmluZChcclxuICAgICAgICAoeCkgPT4geC5vblZhbHVlID09IG5ld1ZhbHVlXHJcbiAgICAgICk/Lm9wdGlvbnNDb25maWc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FySGlkZShcclxuICAgIG5ld1ZhbHVlOiBhbnksXHJcbiAgICBmaWVsZFRhcmdldDogRmllbGRDb25maWcsXHJcbiAgICBhY3Rpb246IEFjdGlvbkZvcm0sXHJcbiAgICBmb3JtQ29udHJvbFRhcmdldDogRm9ybUNvbnRyb2xcclxuICApIHtcclxuICAgIGZvcm1Db250cm9sVGFyZ2V0LnJlc2V0KCcnKTtcclxuXHJcbiAgICBmaWVsZFRhcmdldC5oaWRkZW4gPSBuZXdWYWx1ZSA9PSBhY3Rpb24udmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FyU2hvdyhcclxuICAgIG5ld1ZhbHVlOiBhbnksXHJcbiAgICBmaWVsZFRhcmdldDogRmllbGRDb25maWcsXHJcbiAgICBhY3Rpb246IEFjdGlvbkZvcm0sXHJcbiAgICBmb3JtQ29udHJvbFRhcmdldDogRm9ybUNvbnRyb2xcclxuICApIHtcclxuICAgIGZvcm1Db250cm9sVGFyZ2V0LnJlc2V0KCcnKTtcclxuXHJcbiAgICBmaWVsZFRhcmdldC5oaWRkZW4gPSAhKG5ld1ZhbHVlID09IGFjdGlvbi52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FyUmVzZXQobmV3VmFsdWU6IGFueSwgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sKSB7XHJcbiAgICBpZiAoZm9ybUNvbnRyb2xUYXJnZXQ/LnZhbHVlICE9ICcnICYmIG5ld1ZhbHVlICE9PSAnJykge1xyXG4gICAgICBmb3JtQ29udHJvbFRhcmdldC5yZXNldCgnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FyRGlzYWJsZShcclxuICAgIG5ld1ZhbHVlOiBhbnksXHJcbiAgICBmb3JtQ29udHJvbFRhcmdldDogRm9ybUNvbnRyb2wsXHJcbiAgICBhY3Rpb246IEFjdGlvbkZvcm1cclxuICApIHtcclxuICAgIGlmIChuZXdWYWx1ZSA9PSBhY3Rpb24udmFsdWUpIHtcclxuICAgICAgZm9ybUNvbnRyb2xUYXJnZXQuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIGZvcm1Db250cm9sVGFyZ2V0LmVuYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNhckVuYWJsZShcclxuICAgIG5ld1ZhbHVlOiBhbnksXHJcbiAgICBmb3JtQ29udHJvbFRhcmdldDogRm9ybUNvbnRyb2wsXHJcbiAgICBhY3Rpb246IEFjdGlvbkZvcm1cclxuICApIHtcclxuICAgIGlmIChuZXdWYWx1ZSA9PSBhY3Rpb24udmFsdWUpIHtcclxuICAgICAgZm9ybUNvbnRyb2xUYXJnZXQuZW5hYmxlKCk7XHJcbiAgICB9IGVsc2UgZm9ybUNvbnRyb2xUYXJnZXQuZGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNhclNldFZhbHVlKFxyXG4gICAgbmV3VmFsdWU6IGFueSxcclxuICAgIGZvcm1Db250cm9sVGFyZ2V0OiBGb3JtQ29udHJvbCxcclxuICAgIGFjdGlvbjogQWN0aW9uRm9ybVxyXG4gICkge1xyXG4gICAgaWYgKCFhY3Rpb24ubmV3VmFsdWUpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTGEgYWNjaW9uIGRlYmUgdGVuZXIgdW4gbnVldm8gdmFsb3IgcGFyYSBzZXRlYXInKTtcclxuXHJcbiAgICBpZiAobmV3VmFsdWUgPT0gYWN0aW9uLnZhbHVlKSB7XHJcbiAgICAgIGZvcm1Db250cm9sVGFyZ2V0LnNldFZhbHVlKGFjdGlvbi5uZXdWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdNZSBjYWlnbyBhIHBlZGF6b3MhISEhJyk7XHJcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VmFsaWRhdGlvbnMoXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICB2YWxpZGF0aW9uczogVmFsaWRhdGlvbkZvcm1bXSxcclxuICAgIGY6IEZvcm1Hcm91cFxyXG4gICkge1xyXG4gICAgZm9yIChsZXQgdmFsaWRhdGlvbiBvZiB2YWxpZGF0aW9ucykge1xyXG4gICAgICBzd2l0Y2ggKHZhbGlkYXRpb24udHlwZSkge1xyXG4gICAgICAgIC8vIFNpbmdsZSBGaWVsZHMgVmFsaWRhdGlvbnNcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5SZXF1aXJlZDpcclxuICAgICAgICAgIHRoaXMuc2V0UmVxdWlyZWRWYWxpZGF0aW9uKGNvbnRyb2wsIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5GdW5jdGlvbjpcclxuICAgICAgICAgIHRoaXMuc2V0RnVuY1ZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZnVuYyxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTWluOlxyXG4gICAgICAgICAgdGhpcy5zZXRNaW5WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5NYXg6XHJcbiAgICAgICAgICB0aGlzLnNldE1heFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLk1pbkxlbmd0aDpcclxuICAgICAgICAgIHRoaXMuc2V0TWluTGVuZ3RoVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTWF4TGVuZ3RoOlxyXG4gICAgICAgICAgdGhpcy5zZXRNYXhMZW5ndGhWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5QYXR0ZXJuOlxyXG4gICAgICAgICAgdGhpcy5zZXRQYXR0ZXJuVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTWluRGF0ZTpcclxuICAgICAgICAgIHRoaXMuc2V0TWluRGF0ZVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLk1heERhdGU6XHJcbiAgICAgICAgICB0aGlzLnNldE1heERhdGVWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5NYXhGaWxlU2l6ZTpcclxuICAgICAgICAgIHRoaXMuc2V0TWF4RmlsZVNpemVWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5BY2NlcHRlZFR5cGVzOlxyXG4gICAgICAgICAgdGhpcy5zZXRBY2NlcHRlZFR5cGVzVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuRW1haWw6XHJcbiAgICAgICAgICB0aGlzLnNldEVtYWlsVmFsaWRhdGlvbihjb250cm9sLCB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2UpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gQ3Jvc3MgRmllbGRzIFZhbGlkYXRpb25zXHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuUmVxdWlyZWRJZjpcclxuICAgICAgICAgIHRoaXMuc2V0UmVxdWlyZWRJZlZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY29uZGl0aW9ucyxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuUmVxdWlyZWRJZkZpZWxkSXNFbXB0eTpcclxuICAgICAgICAgIHRoaXMuc2V0UmVxdWlyZWRJZkZpZWxkSXNFbXB0eVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZmllbGRUYXJnZXQhLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5SZXF1aXJlZElmRmllbGRJc05vdEVtcHR5OlxyXG4gICAgICAgICAgdGhpcy5zZXRSZXF1aXJlZElmRmllbGRJc05vdEVtcHR5VmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5maWVsZFRhcmdldCEsXHJcbiAgICAgICAgICAgIGYsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLkxlc3NPckVxdWFsVG86XHJcbiAgICAgICAgICB0aGlzLnNldExlc3NPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmZpZWxkVGFyZ2V0ISxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTW9yZU9yRXF1YWxUbzpcclxuICAgICAgICAgIHRoaXMuc2V0TW9yZU9yRXF1YWxUb1ZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZmllbGRUYXJnZXQhLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5BZnRlck9yRXF1YWxUbzpcclxuICAgICAgICAgIHRoaXMuc2V0QWZ0ZXJPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmZpZWxkVGFyZ2V0ISxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuQmVmb3JlT3JFcXVhbFRvOlxyXG4gICAgICAgICAgdGhpcy5zZXRCZWZvcmVPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmZpZWxkVGFyZ2V0ISxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gU2luZ2xlIEZpZWxkcyBWYWxpZGF0aW9uc1xyXG5cclxuICBwcml2YXRlIHNldFJlcXVpcmVkVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhSZXF1aXJlZFZhbGlkYXRvcnMucmVxdWlyZWQoY3VzdG9tTWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRNaW5WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgbWluVmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWluVmFsdWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW5WYWx1ZSBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcbiAgICB9XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoTnVtYmVyVmFsaWRhdG9ycy5taW4obWluVmFsdWUsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWF4VmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIG1heFZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIW1heFZhbHVlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4VmFsdWUgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKE51bWJlclZhbGlkYXRvcnMubWF4KG1heFZhbHVlLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1pbkxlbmd0aFZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBtaW5MZW5ndGg6IG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWluTGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWluTGVuZ3RoIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhUZXh0VmFsaWRhdG9ycy5taW5MZW5ndGgobWluTGVuZ3RoLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1heExlbmd0aFZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBtYXhMZW5ndGg6IG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWF4TGVuZ3RoKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4TGVuZ3RoIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhUZXh0VmFsaWRhdG9ycy5tYXhMZW5ndGgobWF4TGVuZ3RoLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFBhdHRlcm5WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgcGF0dGVybjogc3RyaW5nIHwgUmVnRXhwIHwgdW5kZWZpbmVkLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKCFwYXR0ZXJuKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigncGF0dGVybiBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcbiAgICB9XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoVGV4dFZhbGlkYXRvcnMucGF0dGVybihwYXR0ZXJuLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1pbkRhdGVWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgbWluRGF0ZTogRGF0ZVRpbWUsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIW1pbkRhdGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW5EYXRlIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhEYXRlVGltZVZhbGlkYXRvcnMubWluRGF0ZShtaW5EYXRlLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1heERhdGVWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgbWF4RGF0ZTogRGF0ZVRpbWUsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIW1heERhdGUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXhEYXRlIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhEYXRlVGltZVZhbGlkYXRvcnMubWluRGF0ZShtYXhEYXRlLCBjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1heEZpbGVTaXplVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIG1heFNpemU6IG51bWJlcixcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWF4U2l6ZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21heFNpemUgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKEZpbGVWYWxpZGF0b3JzLm1heEZpbGVTaXplKG1heFNpemUsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWNjZXB0ZWRUeXBlc1ZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBhY2NlcHRlZFR5cGVzOiBzdHJpbmdbXSxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghYWNjZXB0ZWRUeXBlcykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FjY2VwdGVkVHlwZXMgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFxyXG4gICAgICBGaWxlVmFsaWRhdG9ycy5hY2NlcHRlZEZpbGVUeXBlcyhhY2NlcHRlZFR5cGVzLCBjdXN0b21NZXNzYWdlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RW1haWxWYWxpZGF0aW9uKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgY3VzdG9tTWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKERhdGFWYWxpZGF0b3JzLmVtYWlsKGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIC8vIENyb3NzIEZpZWxkcyBWYWxpZGF0aW9uc1xyXG5cclxuICBwcml2YXRlIHNldEZ1bmNWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZnVuYzogRnVuY3Rpb24gfCB1bmRlZmluZWQsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIWZ1bmMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmdW5jIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEVycm9yID0gKGVycm9yOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29udHJvbC5zZXRFcnJvcnMoXHJcbiAgICAgICAgY29udHJvbC5lcnJvcnNcclxuICAgICAgICAgID8geyAuLi5jb250cm9sLmVycm9ycywgW2Vycm9yXTogeyBbZXJyb3JdOiB0cnVlLCBjdXN0b21NZXNzYWdlIH0gfVxyXG4gICAgICAgICAgOiB7IFtlcnJvcl06IHsgW2Vycm9yXTogdHJ1ZSwgY3VzdG9tTWVzc2FnZSB9IH1cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWwpID0+IHtcclxuICAgICAgZnVuYyh2YWwsIHNldEVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRSZXF1aXJlZElmVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGNvbmRpdGlvbnM6IENvbmRpdGlvbkZvcm1bXSB8IHVuZGVmaW5lZCxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghY29uZGl0aW9ucykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbmRpdGlvbnMgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGNvbmRpdGlvbiBvZiBjb25kaXRpb25zKSB7XHJcbiAgICAgIGlmICghZi5nZXQoY29uZGl0aW9uLmZpZWxkKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmllbGQgbm90IGZvdW5kJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGYuZ2V0KGNvbmRpdGlvbi5maWVsZCk/LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWwgPT0gY29uZGl0aW9uLnZhbHVlKSB7XHJcbiAgICAgICAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoUmVxdWlyZWRWYWxpZGF0b3JzLnJlcXVpcmVkKGN1c3RvbU1lc3NhZ2UpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udHJvbC5yZW1vdmVWYWxpZGF0b3JzKFJlcXVpcmVkVmFsaWRhdG9ycy5yZXF1aXJlZChjdXN0b21NZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UmVxdWlyZWRJZkZpZWxkSXNFbXB0eVZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBmaWVsZFRhcmdldDogc3RyaW5nLFxyXG4gICAgZjogRm9ybUdyb3VwLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5jaGVja1RhcmdldEFuZFN1YnNjcmliZVRvUmVmcmVzaFZhbGlkYXRpb25zKGNvbnRyb2wsIGZpZWxkVGFyZ2V0LCBmKTtcclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhcclxuICAgICAgUmVxdWlyZWRWYWxpZGF0b3JzLnJlcXVpcmVkSWZGaWVsZElzRW1wdHkoZmllbGRUYXJnZXQsIGN1c3RvbU1lc3NhZ2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRSZXF1aXJlZElmRmllbGRJc05vdEVtcHR5VmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGZpZWxkVGFyZ2V0OiBzdHJpbmcsXHJcbiAgICBmOiBGb3JtR3JvdXAsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoZWNrVGFyZ2V0QW5kU3Vic2NyaWJlVG9SZWZyZXNoVmFsaWRhdGlvbnMoY29udHJvbCwgZmllbGRUYXJnZXQsIGYpO1xyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFxyXG4gICAgICBSZXF1aXJlZFZhbGlkYXRvcnMucmVxdWlyZWRJZkZpZWxkSXNOb3RFbXB0eShmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldExlc3NPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuY2hlY2tUYXJnZXRBbmRTdWJzY3JpYmVUb1JlZnJlc2hWYWxpZGF0aW9ucyhjb250cm9sLCBmaWVsZFRhcmdldCwgZik7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIE51bWJlclZhbGlkYXRvcnMubGVzc09yRXF1YWxUbyhmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1vcmVPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuY2hlY2tUYXJnZXRBbmRTdWJzY3JpYmVUb1JlZnJlc2hWYWxpZGF0aW9ucyhjb250cm9sLCBmaWVsZFRhcmdldCwgZik7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIE51bWJlclZhbGlkYXRvcnMubW9yZU9yRXF1YWxUbyhmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEFmdGVyT3JFcXVhbFRvVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGZpZWxkVGFyZ2V0OiBzdHJpbmcsXHJcbiAgICBmOiBGb3JtR3JvdXAsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoZWNrVGFyZ2V0QW5kU3Vic2NyaWJlVG9SZWZyZXNoVmFsaWRhdGlvbnMoY29udHJvbCwgZmllbGRUYXJnZXQsIGYpO1xyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFxyXG4gICAgICBEYXRlVGltZVZhbGlkYXRvcnMuYWZ0ZXJPckVxdWFsVG8oZmllbGRUYXJnZXQsIGN1c3RvbU1lc3NhZ2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRCZWZvcmVPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuY2hlY2tUYXJnZXRBbmRTdWJzY3JpYmVUb1JlZnJlc2hWYWxpZGF0aW9ucyhjb250cm9sLCBmaWVsZFRhcmdldCwgZik7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIERhdGVUaW1lVmFsaWRhdG9ycy5iZWZvcmVPckVxdWFsVG8oZmllbGRUYXJnZXQsIGN1c3RvbU1lc3NhZ2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1RhcmdldEFuZFN1YnNjcmliZVRvUmVmcmVzaFZhbGlkYXRpb25zKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cFxyXG4gICkge1xyXG4gICAgaWYgKCFmaWVsZFRhcmdldCkgdGhyb3cgbmV3IEVycm9yKCdmb3JtQ29udHJvbFRhcmdldCBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybUNvbnRyb2xUYXJnZXQgPSBmLmdldChmaWVsZFRhcmdldCkgYXMgRm9ybUNvbnRyb2w7XHJcbiAgICBpZiAoIWZvcm1Db250cm9sVGFyZ2V0KVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZmllbGRUYXJnZXR9IGZvcm1Db250cm9sIG5vdCBleGlzdHNgKTtcclxuXHJcbiAgICB0aGlzLnN1YnMuYWRkKFxyXG4gICAgICBmb3JtQ29udHJvbFRhcmdldC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKCh2YWwpID0+XHJcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KHsgZW1pdEV2ZW50OiBmYWxzZSB9KVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=