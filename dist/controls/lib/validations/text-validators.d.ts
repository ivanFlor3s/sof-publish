import { ValidatorFn } from "@angular/forms";
export declare class TextValidators {
    static minLength(minLength: number, customMessage?: string): ValidatorFn;
    static maxLength(maxLength: number, customMessage?: string): ValidatorFn;
    static pattern(pattern: string | RegExp, customMessage?: string): ValidatorFn;
}
