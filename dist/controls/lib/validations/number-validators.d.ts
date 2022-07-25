import { ValidatorFn } from "@angular/forms";
export declare class NumberValidators {
    static min(minValue: number, customMessage?: string): ValidatorFn;
    static max(maxValue: number, customMessage?: string): ValidatorFn;
    static lessOrEqualTo(formFieldName: string, customMessage?: string): ValidatorFn;
    static moreOrEqualTo(formFieldName: string, customMessage?: string): ValidatorFn;
}
