import { ValidatorFn } from "@angular/forms";
import { DateTime } from "luxon";
export declare class DateTimeValidators {
    static maxDate(max: DateTime, customMessage?: string): ValidatorFn;
    static minDate(min: DateTime, customMessage?: string): ValidatorFn;
    static afterOrEqualTo(formFieldName: string, customMessage?: string): ValidatorFn;
    static beforeOrEqualTo(formFieldName: string, customMessage?: string): ValidatorFn;
}
