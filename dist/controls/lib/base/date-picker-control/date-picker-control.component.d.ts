import { DateTime } from 'luxon';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export declare class DatePickerControlComponent extends BaseFormFieldComponent {
    onInput(value: string | DateTime): void;
    writeValue(value: any): void;
    normalizeValue(value: any): any;
    getDateString(value: DateTime): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePickerControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatePickerControlComponent, "ng-component", never, {}, {}, never, never>;
}
