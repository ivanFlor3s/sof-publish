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
FormularioService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: FormularioService, deps: [{ token: i1.FormBuilder }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
FormularioService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: FormularioService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: FormularioService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXVsYXJpby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9keW5hbWljLWZvcm0vZm9ybXVsYXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUdMLFdBQVcsR0FFWixNQUFNLGdCQUFnQixDQUFDO0FBR3hCLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsY0FBYyxFQUNkLGtCQUFrQixHQUNuQixNQUFNLGdCQUFnQixDQUFDOzs7O0FBS3hCLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsRUFBZSxFQUFVLElBQWdCO1FBQXpDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUF3QztRQUNyRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxRQUFRLElBQUssS0FBYSxDQUFDLEtBQUssQ0FBQyxFQUFDO2dCQUNsRSxPQUFPLENBQUMsS0FBSyxDQUFD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Q0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNYLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUMvQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FDckQsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OEdBcG1CVSxpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUZoQixNQUFNOzJGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uRm9ybSxcclxuICBDb25kaXRpb25Gb3JtLFxyXG4gIEVtcHR5ZmllbGQsXHJcbiAgRm9ybUZpZWxkQ29uZmlnLFxyXG4gIFZhbGlkYXRpb25Gb3JtLFxyXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEFjdGlvbkZvcm1UeXBlcywgRm9ybUNvbmZpZ1R5cGVzLCBWYWxpZGF0aW9uVHlwZXMgfSBmcm9tICcuL2VudW1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIEZvcm1CdWlsZGVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1Hcm91cCxcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xyXG5pbXBvcnQge1xyXG4gIERhdGFWYWxpZGF0b3JzLFxyXG4gIFJlcXVpcmVkVmFsaWRhdG9ycyxcclxuICBOdW1iZXJWYWxpZGF0b3JzLFxyXG4gIFRleHRWYWxpZGF0b3JzLFxyXG4gIEZpbGVWYWxpZGF0b3JzLFxyXG4gIERhdGVUaW1lVmFsaWRhdG9ycyxcclxufSBmcm9tICcuLi92YWxpZGF0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybXVsYXJpb1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3ViczogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pY2lvIHNlcnZpY2lvIGZvcm0nKTtcclxuICAgIHRoaXMuc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybUdyb3VwKGZpZWxkczogKEZvcm1GaWVsZENvbmZpZyB8IEVtcHR5ZmllbGQpW10pOiBGb3JtR3JvdXAge1xyXG4gICAgY29uc3QgZm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmKCBmaWVsZC50eXBlID09IEZvcm1Db25maWdUeXBlcy5FbXB0eUNvbCAmJiAoZmllbGQgYXMgYW55KVsna2V5J10pe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZlciBGaWVsc0NvbmZpZyBlbjogJywgKGZpZWxkIGFzIGFueSlbJ2tleSddKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gc2UgcHVlZGUgcG9uZXIgdHlwZTpFbXB0eUNvbCBhIHVuIGNvbnRyb2wgcXVlIHRpZW5lIHF1ZSBmb3JtYXIgcGFydGUgZGVsIGZvcm11bGFyaW8nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiggIGZpZWxkLnR5cGUgIT0gRm9ybUNvbmZpZ1R5cGVzLkVtcHR5Q29sICkge1xyXG4gICAgICAgIGZvcm1Hcm91cC5hZGRDb250cm9sKFxyXG4gICAgICAgICAgZmllbGQua2V5LFxyXG4gICAgICAgICAgbmV3IEZvcm1Db250cm9sKHtcclxuICAgICAgICAgICAgdmFsdWU6IGZpZWxkLmRlZmF1bHRWYWx1ZSB8fCAnJyxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLmRpc3NhYmxlZCxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmKCBmaWVsZC50eXBlICE9IEZvcm1Db25maWdUeXBlcy5FbXB0eUNvbCApIHtcclxuICAgICAgICB0aGlzLnJlYWxpemFyUmVxdWVzdFRvVXJsKGZvcm1Hcm91cCwgZmllbGQpO1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMucHJvY2VzYXJBY2Npb25lcyhmaWVsZHMuZmlsdGVyKCBmID0+IGYudHlwZSAhPSBGb3JtQ29uZmlnVHlwZXMuRW1wdHlDb2wpIGFzIEZvcm1GaWVsZENvbmZpZ1tdLCBmaWVsZCwgZm9ybUdyb3VwKTtcclxuICAgICAgICBpZihzdWIpe1xyXG4gIFxyXG4gICAgICAgICAgdGhpcy5zdWJzLmFkZChzdWIpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0aGlzLnNldFZhbGlkYXRpb25zKFxyXG4gICAgICAgICAgZm9ybUdyb3VwLmdldChmaWVsZC5rZXkpIGFzIEFic3RyYWN0Q29udHJvbCxcclxuICAgICAgICAgIGZpZWxkLnZhbGlkYXRpb25zLFxyXG4gICAgICAgICAgZm9ybUdyb3VwXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1Hcm91cDtcclxuICB9XHJcblxyXG4gIHByb2Nlc2FyQWNjaW9uZXMoZmllbGRzOiBGb3JtRmllbGRDb25maWdbXSwgZmllbGQ6IEZvcm1GaWVsZENvbmZpZywgZm9ybTogRm9ybUdyb3VwKSB7XHJcbiAgICBpZiAoZmllbGQuYWN0aW9uLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gZm9ybS5nZXQoZmllbGQua2V5KT8udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgobmV3VmFsdWUpID0+IHtcclxuICAgICAgZmllbGQuYWN0aW9uLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVGFyZ2V0ID0gdGhpcy5nZXRGaWVsZFRhcmdldEZyb21GaWVsZHMoXHJcbiAgICAgICAgICBhY3Rpb24uZmllbGRUYXJnZXQsXHJcbiAgICAgICAgICBmaWVsZHNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db250cm9sVGFyZ2V0ID0gZm9ybS5nZXQoYWN0aW9uLmZpZWxkVGFyZ2V0KSBhcyBGb3JtQ29udHJvbDtcclxuICAgICAgICBpZiAoIWZvcm1Db250cm9sVGFyZ2V0KVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBzZSBlbmNvbnRybyBlbCBmb3JtQ29udHJvbCcpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlIEFjdGlvbkZvcm1UeXBlcy5IaWRlOlxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc2FySGlkZShuZXdWYWx1ZSwgZmllbGRUYXJnZXQsIGFjdGlvbiwgZm9ybUNvbnRyb2xUYXJnZXQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQWN0aW9uRm9ybVR5cGVzLlNob3c6XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzYXJTaG93KG5ld1ZhbHVlLCBmaWVsZFRhcmdldCwgYWN0aW9uLCBmb3JtQ29udHJvbFRhcmdldCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBBY3Rpb25Gb3JtVHlwZXMuUmVzZXQ6XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2VzYXJSZXNldChuZXdWYWx1ZSwgZm9ybUNvbnRyb2xUYXJnZXQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQWN0aW9uRm9ybVR5cGVzLkRpc3NhYmxlOlxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc2FyRGlzYWJsZShuZXdWYWx1ZSwgZm9ybUNvbnRyb2xUYXJnZXQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBBY3Rpb25Gb3JtVHlwZXMuRW5hYmxlOlxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc2FyRW5hYmxlKG5ld1ZhbHVlLCBmb3JtQ29udHJvbFRhcmdldCwgYWN0aW9uKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFjdGlvbkZvcm1UeXBlcy5TZXRWYWx1ZTpcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNhclNldFZhbHVlKG5ld1ZhbHVlLCBmb3JtQ29udHJvbFRhcmdldCwgYWN0aW9uKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEFjdGlvbkZvcm1UeXBlcy5GaWxsT3B0aW9uczpcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNhckZpbGxPcHRpb25zKFxyXG4gICAgICAgICAgICAgIG5ld1ZhbHVlLFxyXG4gICAgICAgICAgICAgIGZvcm1Db250cm9sVGFyZ2V0LFxyXG4gICAgICAgICAgICAgIGZpZWxkVGFyZ2V0LFxyXG4gICAgICAgICAgICAgIGFjdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAnTm8gc2UgcmVjb25vY2UgZWwgdHlwZSBkZSBsYSBhY2Npb246ICcgKyBhY3Rpb24udHlwZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVhbGl6YXJSZXF1ZXN0VG9VcmwoZm9ybTogRm9ybUdyb3VwLCBmaWVsZDogRm9ybUZpZWxkQ29uZmlnKSB7XHJcbiAgICBpZiAoIWZpZWxkLm9wdGlvbnM/LnVybCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnY29uc3VsdG8gZW46ICcgKyBmaWVsZC5rZXkpO1xyXG4gICAgY29uc29sZS5sb2coZmllbGQub3B0aW9ucy51cmwpO1xyXG5cclxuICAgIGZvcm0uZ2V0KGZpZWxkLmtleSkhLmRpc2FibGUoKTtcclxuICAgIHRoaXMuaHR0cC5nZXQoZmllbGQub3B0aW9ucz8udXJsIGFzIHN0cmluZykuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBmaWVsZC5vcHRpb25zIS5vcHRpb25zID0gcmVzO1xyXG4gICAgICBmb3JtLmdldChmaWVsZC5rZXkpIS5lbmFibGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGaWVsZFRhcmdldEZyb21GaWVsZHMoZmllbGRUYXJnZXQ6IHN0cmluZywgZmllbGRzOiBGb3JtRmllbGRDb25maWdbXSkge1xyXG4gICAgY29uc3QgZnQgPSBmaWVsZHMuZmluZCgoeCkgPT4geC5rZXkgPT0gZmllbGRUYXJnZXQpIGFzIEZvcm1GaWVsZENvbmZpZztcclxuICAgIGlmICghZnQpIHRocm93IG5ldyBFcnJvcignTm8gc2UgZW5jdG9udHJvIGVsIGZpZWxkJyk7XHJcbiAgICByZXR1cm4gZnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FyRmlsbE9wdGlvbnMoXHJcbiAgICBuZXdWYWx1ZTogYW55LFxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IEZvcm1GaWVsZENvbmZpZyxcclxuICAgIGFjdGlvbjogQWN0aW9uRm9ybVxyXG4gICkge1xyXG4gICAgLy9SZWxsZW5hciBvcGNpb25lc1xyXG4gICAgLy9VUkwgaHR0cHM6Ly9hcGlzLmRhdG9zLmdvYi5hci9nZW9yZWYvYXBpL211bmljaXBpb3M/cHJvdmluY2lhPXR1Y3VtYW5cclxuICAgIGZvcm1Db250cm9sVGFyZ2V0LnJlc2V0KCcnKTtcclxuICAgIGlmIChhY3Rpb24uZmlsbENvbmZpZz8udXJsICYmIG5ld1ZhbHVlKSB7XHJcbiAgICAgIGZvcm1Db250cm9sVGFyZ2V0LmRpc2FibGUoKTtcclxuXHJcbiAgICAgIHRoaXMuaHR0cFxyXG4gICAgICAgIC5nZXQoYCR7YWN0aW9uLmZpbGxDb25maWchLnVybH0ke25ld1ZhbHVlfWApXHJcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIGxldCB2YWwgPSByZXM7XHJcbiAgICAgICAgICBjb25zdCBwYXRoQXJyYXkgPSBhY3Rpb24uZGF0YVBhdGghLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgcGF0aEFycmF5KSB2YWwgPSB2YWxbcHJvcF07XHJcblxyXG4gICAgICAgICAgZmllbGRUYXJnZXQub3B0aW9ucyEub3B0aW9ucyA9IHZhbDtcclxuXHJcbiAgICAgICAgICBmb3JtQ29udHJvbFRhcmdldC5lbmFibGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoISFhY3Rpb24uZmlsbENvbmZpZz8uZmlsbEZuKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBhY3Rpb24uZmlsbENvbmZpZz8uZmlsbEZuKG5ld1ZhbHVlKTtcclxuICAgICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG4gICAgICAgIG9wdGlvbnMudGhlbih4ID0+IGZpZWxkVGFyZ2V0Lm9wdGlvbnMhLm9wdGlvbnMgPSB4KTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGZpZWxkVGFyZ2V0Lm9wdGlvbnMhLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmllbGRUYXJnZXQub3B0aW9ucyA9IGFjdGlvbi5maWxsQ29uZmlnPy5maWxsT3B0aW9uc0NvbmZpZz8uZmluZChcclxuICAgICAgICAoeCkgPT4geC5vblZhbHVlID09IG5ld1ZhbHVlXHJcbiAgICAgICk/Lm9wdGlvbnNDb25maWc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FySGlkZShcclxuICAgIG5ld1ZhbHVlOiBhbnksXHJcbiAgICBmaWVsZFRhcmdldDogRm9ybUZpZWxkQ29uZmlnLFxyXG4gICAgYWN0aW9uOiBBY3Rpb25Gb3JtLFxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sXHJcbiAgKSB7XHJcbiAgICBmb3JtQ29udHJvbFRhcmdldC5yZXNldCgnJyk7XHJcblxyXG4gICAgZmllbGRUYXJnZXQuaGlkZGVuID0gbmV3VmFsdWUgPT0gYWN0aW9uLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9jZXNhclNob3coXHJcbiAgICBuZXdWYWx1ZTogYW55LFxyXG4gICAgZmllbGRUYXJnZXQ6IEZvcm1GaWVsZENvbmZpZyxcclxuICAgIGFjdGlvbjogQWN0aW9uRm9ybSxcclxuICAgIGZvcm1Db250cm9sVGFyZ2V0OiBGb3JtQ29udHJvbFxyXG4gICkge1xyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQucmVzZXQoJycpO1xyXG5cclxuICAgIGZpZWxkVGFyZ2V0LmhpZGRlbiA9ICEobmV3VmFsdWUgPT0gYWN0aW9uLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzYXJSZXNldChuZXdWYWx1ZTogYW55LCBmb3JtQ29udHJvbFRhcmdldDogRm9ybUNvbnRyb2wpIHtcclxuICAgIGlmIChmb3JtQ29udHJvbFRhcmdldD8udmFsdWUgIT0gJycgJiYgbmV3VmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGZvcm1Db250cm9sVGFyZ2V0LnJlc2V0KCcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJvY2VzYXJEaXNhYmxlKFxyXG4gICAgbmV3VmFsdWU6IGFueSxcclxuICAgIGZvcm1Db250cm9sVGFyZ2V0OiBGb3JtQ29udHJvbCxcclxuICAgIGFjdGlvbjogQWN0aW9uRm9ybVxyXG4gICkge1xyXG4gICAgaWYgKG5ld1ZhbHVlID09IGFjdGlvbi52YWx1ZSkge1xyXG4gICAgICBmb3JtQ29udHJvbFRhcmdldC5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2UgZm9ybUNvbnRyb2xUYXJnZXQuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FyRW5hYmxlKFxyXG4gICAgbmV3VmFsdWU6IGFueSxcclxuICAgIGZvcm1Db250cm9sVGFyZ2V0OiBGb3JtQ29udHJvbCxcclxuICAgIGFjdGlvbjogQWN0aW9uRm9ybVxyXG4gICkge1xyXG4gICAgaWYgKG5ld1ZhbHVlID09IGFjdGlvbi52YWx1ZSkge1xyXG4gICAgICBmb3JtQ29udHJvbFRhcmdldC5lbmFibGUoKTtcclxuICAgIH0gZWxzZSBmb3JtQ29udHJvbFRhcmdldC5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByb2Nlc2FyU2V0VmFsdWUoXHJcbiAgICBuZXdWYWx1ZTogYW55LFxyXG4gICAgZm9ybUNvbnRyb2xUYXJnZXQ6IEZvcm1Db250cm9sLFxyXG4gICAgYWN0aW9uOiBBY3Rpb25Gb3JtXHJcbiAgKSB7XHJcbiAgICBpZiAoIWFjdGlvbi5uZXdWYWx1ZSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdMYSBhY2Npb24gZGViZSB0ZW5lciB1biBudWV2byB2YWxvciBwYXJhIHNldGVhcicpO1xyXG5cclxuICAgIGlmIChuZXdWYWx1ZSA9PSBhY3Rpb24udmFsdWUpIHtcclxuICAgICAgZm9ybUNvbnRyb2xUYXJnZXQuc2V0VmFsdWUoYWN0aW9uLm5ld1ZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coJ01lIGNhaWdvIGEgcGVkYXpvcyEhISEnKTtcclxuICAgIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWxpZGF0aW9ucyhcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIHZhbGlkYXRpb25zOiBWYWxpZGF0aW9uRm9ybVtdLFxyXG4gICAgZjogRm9ybUdyb3VwXHJcbiAgKSB7XHJcbiAgICBmb3IgKGxldCB2YWxpZGF0aW9uIG9mIHZhbGlkYXRpb25zKSB7XHJcbiAgICAgIHN3aXRjaCAodmFsaWRhdGlvbi50eXBlKSB7XHJcbiAgICAgICAgLy8gU2luZ2xlIEZpZWxkcyBWYWxpZGF0aW9uc1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLlJlcXVpcmVkOlxyXG4gICAgICAgICAgdGhpcy5zZXRSZXF1aXJlZFZhbGlkYXRpb24oY29udHJvbCwgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLkZ1bmN0aW9uOlxyXG4gICAgICAgICAgdGhpcy5zZXRGdW5jVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5mdW5jLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5NaW46XHJcbiAgICAgICAgICB0aGlzLnNldE1pblZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLk1heDpcclxuICAgICAgICAgIHRoaXMuc2V0TWF4VmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTWluTGVuZ3RoOlxyXG4gICAgICAgICAgdGhpcy5zZXRNaW5MZW5ndGhWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5NYXhMZW5ndGg6XHJcbiAgICAgICAgICB0aGlzLnNldE1heExlbmd0aFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLlBhdHRlcm46XHJcbiAgICAgICAgICB0aGlzLnNldFBhdHRlcm5WYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5NaW5EYXRlOlxyXG4gICAgICAgICAgdGhpcy5zZXRNaW5EYXRlVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTWF4RGF0ZTpcclxuICAgICAgICAgIHRoaXMuc2V0TWF4RGF0ZVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLk1heEZpbGVTaXplOlxyXG4gICAgICAgICAgdGhpcy5zZXRNYXhGaWxlU2l6ZVZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLkFjY2VwdGVkVHlwZXM6XHJcbiAgICAgICAgICB0aGlzLnNldEFjY2VwdGVkVHlwZXNWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5FbWFpbDpcclxuICAgICAgICAgIHRoaXMuc2V0RW1haWxWYWxpZGF0aW9uKGNvbnRyb2wsIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBDcm9zcyBGaWVsZHMgVmFsaWRhdGlvbnNcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5SZXF1aXJlZElmOlxyXG4gICAgICAgICAgdGhpcy5zZXRSZXF1aXJlZElmVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jb25kaXRpb25zLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5SZXF1aXJlZElmRmllbGRJc0VtcHR5OlxyXG4gICAgICAgICAgdGhpcy5zZXRSZXF1aXJlZElmRmllbGRJc0VtcHR5VmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5maWVsZFRhcmdldCEsXHJcbiAgICAgICAgICAgIGYsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLlJlcXVpcmVkSWZGaWVsZElzTm90RW1wdHk6XHJcbiAgICAgICAgICB0aGlzLnNldFJlcXVpcmVkSWZGaWVsZElzTm90RW1wdHlWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBjb250cm9sLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmZpZWxkVGFyZ2V0ISxcclxuICAgICAgICAgICAgZixcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5jdXN0b21NZXNzYWdlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBWYWxpZGF0aW9uVHlwZXMuTGVzc09yRXF1YWxUbzpcclxuICAgICAgICAgIHRoaXMuc2V0TGVzc09yRXF1YWxUb1ZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZmllbGRUYXJnZXQhLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5Nb3JlT3JFcXVhbFRvOlxyXG4gICAgICAgICAgdGhpcy5zZXRNb3JlT3JFcXVhbFRvVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgY29udHJvbCxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbi5maWVsZFRhcmdldCEsXHJcbiAgICAgICAgICAgIGYsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uY3VzdG9tTWVzc2FnZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVmFsaWRhdGlvblR5cGVzLkFmdGVyT3JFcXVhbFRvOlxyXG4gICAgICAgICAgdGhpcy5zZXRBZnRlck9yRXF1YWxUb1ZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZmllbGRUYXJnZXQhLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFZhbGlkYXRpb25UeXBlcy5CZWZvcmVPckVxdWFsVG86XHJcbiAgICAgICAgICB0aGlzLnNldEJlZm9yZU9yRXF1YWxUb1ZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uZmllbGRUYXJnZXQhLFxyXG4gICAgICAgICAgICBmLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLmN1c3RvbU1lc3NhZ2VcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyBTaW5nbGUgRmllbGRzIFZhbGlkYXRpb25zXHJcblxyXG4gIHByaXZhdGUgc2V0UmVxdWlyZWRWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFJlcXVpcmVkVmFsaWRhdG9ycy5yZXF1aXJlZChjdXN0b21NZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE1pblZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBtaW5WYWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKCFtaW5WYWx1ZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pblZhbHVlIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhOdW1iZXJWYWxpZGF0b3JzLm1pbihtaW5WYWx1ZSwgY3VzdG9tTWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRNYXhWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgbWF4VmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWF4VmFsdWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXhWYWx1ZSBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcbiAgICB9XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoTnVtYmVyVmFsaWRhdG9ycy5tYXgobWF4VmFsdWUsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWluTGVuZ3RoVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIG1pbkxlbmd0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKCFtaW5MZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaW5MZW5ndGggbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFRleHRWYWxpZGF0b3JzLm1pbkxlbmd0aChtaW5MZW5ndGgsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWF4TGVuZ3RoVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIG1heExlbmd0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKCFtYXhMZW5ndGgpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYXhMZW5ndGggbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFRleHRWYWxpZGF0b3JzLm1heExlbmd0aChtYXhMZW5ndGgsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0UGF0dGVyblZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBwYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHAgfCB1bmRlZmluZWQsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBpZiAoIXBhdHRlcm4pIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXR0ZXJuIG11c3QgYmUgZGVjbGFyZWQnKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhUZXh0VmFsaWRhdG9ycy5wYXR0ZXJuKHBhdHRlcm4sIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWluRGF0ZVZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBtaW5EYXRlOiBEYXRlVGltZSxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWluRGF0ZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbkRhdGUgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKERhdGVUaW1lVmFsaWRhdG9ycy5taW5EYXRlKG1pbkRhdGUsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWF4RGF0ZVZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBtYXhEYXRlOiBEYXRlVGltZSxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghbWF4RGF0ZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21heERhdGUgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKERhdGVUaW1lVmFsaWRhdG9ycy5taW5EYXRlKG1heERhdGUsIGN1c3RvbU1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWF4RmlsZVNpemVWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgbWF4U2l6ZTogbnVtYmVyLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKCFtYXhTaXplKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWF4U2l6ZSBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcbiAgICB9XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoRmlsZVZhbGlkYXRvcnMubWF4RmlsZVNpemUobWF4U2l6ZSwgY3VzdG9tTWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRBY2NlcHRlZFR5cGVzVmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGFjY2VwdGVkVHlwZXM6IHN0cmluZ1tdLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKCFhY2NlcHRlZFR5cGVzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYWNjZXB0ZWRUeXBlcyBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcbiAgICB9XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIEZpbGVWYWxpZGF0b3JzLmFjY2VwdGVkRmlsZVR5cGVzKGFjY2VwdGVkVHlwZXMsIGN1c3RvbU1lc3NhZ2UpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRFbWFpbFZhbGlkYXRpb24oY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBjdXN0b21NZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoRGF0YVZhbGlkYXRvcnMuZW1haWwoY3VzdG9tTWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3Jvc3MgRmllbGRzIFZhbGlkYXRpb25zXHJcblxyXG4gIHByaXZhdGUgc2V0RnVuY1ZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBmdW5jOiBGdW5jdGlvbiB8IHVuZGVmaW5lZCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmICghZnVuYykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Z1bmMgbXVzdCBiZSBkZWNsYXJlZCcpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0RXJyb3IgPSAoZXJyb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb250cm9sLnNldEVycm9ycyhcclxuICAgICAgICBjb250cm9sLmVycm9yc1xyXG4gICAgICAgICAgPyB7IC4uLmNvbnRyb2wuZXJyb3JzLCBbZXJyb3JdOiB7IFtlcnJvcl06IHRydWUsIGN1c3RvbU1lc3NhZ2UgfSB9XHJcbiAgICAgICAgICA6IHsgW2Vycm9yXTogeyBbZXJyb3JdOiB0cnVlLCBjdXN0b21NZXNzYWdlIH0gfVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250cm9sLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbCkgPT4ge1xyXG4gICAgICBmdW5jKHZhbCwgc2V0RXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFJlcXVpcmVkSWZWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgY29uZGl0aW9uczogQ29uZGl0aW9uRm9ybVtdIHwgdW5kZWZpbmVkLFxyXG4gICAgZjogRm9ybUdyb3VwLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKCFjb25kaXRpb25zKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29uZGl0aW9ucyBtdXN0IGJlIGRlY2xhcmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgY29uZGl0aW9uIG9mIGNvbmRpdGlvbnMpIHtcclxuICAgICAgaWYgKCFmLmdldChjb25kaXRpb24uZmllbGQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaWVsZCBub3QgZm91bmQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZi5nZXQoY29uZGl0aW9uLmZpZWxkKT8udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbCA9PSBjb25kaXRpb24udmFsdWUpIHtcclxuICAgICAgICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhSZXF1aXJlZFZhbGlkYXRvcnMucmVxdWlyZWQoY3VzdG9tTWVzc2FnZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250cm9sLnJlbW92ZVZhbGlkYXRvcnMoUmVxdWlyZWRWYWxpZGF0b3JzLnJlcXVpcmVkKGN1c3RvbU1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRSZXF1aXJlZElmRmllbGRJc0VtcHR5VmFsaWRhdGlvbihcclxuICAgIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCxcclxuICAgIGZpZWxkVGFyZ2V0OiBzdHJpbmcsXHJcbiAgICBmOiBGb3JtR3JvdXAsXHJcbiAgICBjdXN0b21NZXNzYWdlPzogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNoZWNrVGFyZ2V0QW5kU3Vic2NyaWJlVG9SZWZyZXNoVmFsaWRhdGlvbnMoY29udHJvbCwgZmllbGRUYXJnZXQsIGYpO1xyXG4gICAgY29udHJvbC5hZGRWYWxpZGF0b3JzKFxyXG4gICAgICBSZXF1aXJlZFZhbGlkYXRvcnMucmVxdWlyZWRJZkZpZWxkSXNFbXB0eShmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFJlcXVpcmVkSWZGaWVsZElzTm90RW1wdHlWYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuY2hlY2tUYXJnZXRBbmRTdWJzY3JpYmVUb1JlZnJlc2hWYWxpZGF0aW9ucyhjb250cm9sLCBmaWVsZFRhcmdldCwgZik7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIFJlcXVpcmVkVmFsaWRhdG9ycy5yZXF1aXJlZElmRmllbGRJc05vdEVtcHR5KGZpZWxkVGFyZ2V0LCBjdXN0b21NZXNzYWdlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TGVzc09yRXF1YWxUb1ZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBmaWVsZFRhcmdldDogc3RyaW5nLFxyXG4gICAgZjogRm9ybUdyb3VwLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5jaGVja1RhcmdldEFuZFN1YnNjcmliZVRvUmVmcmVzaFZhbGlkYXRpb25zKGNvbnRyb2wsIGZpZWxkVGFyZ2V0LCBmKTtcclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhcclxuICAgICAgTnVtYmVyVmFsaWRhdG9ycy5sZXNzT3JFcXVhbFRvKGZpZWxkVGFyZ2V0LCBjdXN0b21NZXNzYWdlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TW9yZU9yRXF1YWxUb1ZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBmaWVsZFRhcmdldDogc3RyaW5nLFxyXG4gICAgZjogRm9ybUdyb3VwLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5jaGVja1RhcmdldEFuZFN1YnNjcmliZVRvUmVmcmVzaFZhbGlkYXRpb25zKGNvbnRyb2wsIGZpZWxkVGFyZ2V0LCBmKTtcclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhcclxuICAgICAgTnVtYmVyVmFsaWRhdG9ycy5tb3JlT3JFcXVhbFRvKGZpZWxkVGFyZ2V0LCBjdXN0b21NZXNzYWdlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWZ0ZXJPckVxdWFsVG9WYWxpZGF0aW9uKFxyXG4gICAgY29udHJvbDogQWJzdHJhY3RDb250cm9sLFxyXG4gICAgZmllbGRUYXJnZXQ6IHN0cmluZyxcclxuICAgIGY6IEZvcm1Hcm91cCxcclxuICAgIGN1c3RvbU1lc3NhZ2U/OiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuY2hlY2tUYXJnZXRBbmRTdWJzY3JpYmVUb1JlZnJlc2hWYWxpZGF0aW9ucyhjb250cm9sLCBmaWVsZFRhcmdldCwgZik7XHJcbiAgICBjb250cm9sLmFkZFZhbGlkYXRvcnMoXHJcbiAgICAgIERhdGVUaW1lVmFsaWRhdG9ycy5hZnRlck9yRXF1YWxUbyhmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEJlZm9yZU9yRXF1YWxUb1ZhbGlkYXRpb24oXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBmaWVsZFRhcmdldDogc3RyaW5nLFxyXG4gICAgZjogRm9ybUdyb3VwLFxyXG4gICAgY3VzdG9tTWVzc2FnZT86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgdGhpcy5jaGVja1RhcmdldEFuZFN1YnNjcmliZVRvUmVmcmVzaFZhbGlkYXRpb25zKGNvbnRyb2wsIGZpZWxkVGFyZ2V0LCBmKTtcclxuICAgIGNvbnRyb2wuYWRkVmFsaWRhdG9ycyhcclxuICAgICAgRGF0ZVRpbWVWYWxpZGF0b3JzLmJlZm9yZU9yRXF1YWxUbyhmaWVsZFRhcmdldCwgY3VzdG9tTWVzc2FnZSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrVGFyZ2V0QW5kU3Vic2NyaWJlVG9SZWZyZXNoVmFsaWRhdGlvbnMoXHJcbiAgICBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsXHJcbiAgICBmaWVsZFRhcmdldDogc3RyaW5nLFxyXG4gICAgZjogRm9ybUdyb3VwXHJcbiAgKSB7XHJcbiAgICBpZiAoIWZpZWxkVGFyZ2V0KSB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1Db250cm9sVGFyZ2V0IG11c3QgYmUgZGVjbGFyZWQnKTtcclxuXHJcbiAgICBjb25zdCBmb3JtQ29udHJvbFRhcmdldCA9IGYuZ2V0KGZpZWxkVGFyZ2V0KSBhcyBGb3JtQ29udHJvbDtcclxuICAgIGlmICghZm9ybUNvbnRyb2xUYXJnZXQpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHtmaWVsZFRhcmdldH0gZm9ybUNvbnRyb2wgbm90IGV4aXN0c2ApO1xyXG5cclxuICAgIHRoaXMuc3Vicy5hZGQoXHJcbiAgICAgIGZvcm1Db250cm9sVGFyZ2V0LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbCkgPT5cclxuICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==