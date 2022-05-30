import { ValidatorFn } from "@angular/forms";
export declare class DataValidators {
    static cuitValidator(customMessage?: string): ValidatorFn;
    static email(customMessage?: string): ValidatorFn;
}
