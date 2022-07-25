import { ValidatorFn } from "@angular/forms";
export declare class RequiredValidators {
    static required(customMessage?: string): ValidatorFn;
    static requiredTrue(customMessage?: string): ValidatorFn;
    static requiredIfFieldIsEmpty(ifEmptyField: string, customMessage?: string): ValidatorFn;
    static requiredIfFieldIsIn(formFieldName: string, values: any[], customMessage?: string): ValidatorFn;
    static requiredIfFieldIsNotEmpty(ifNotEmptyField: string, customMessage?: string): ValidatorFn;
    static requiredIf(predicate: () => boolean, customMessage?: string): ValidatorFn;
    static fieldRequiredIfFieldEmpty(requiredField: string, ifEmptyField: string, customMessage?: string): ValidatorFn;
}
