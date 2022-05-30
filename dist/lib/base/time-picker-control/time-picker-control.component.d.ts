import { BaseFormFieldComponent } from '../base-form-control/base-form-control';
import * as i0 from "@angular/core";
export declare class TimePickerControlComponent extends BaseFormFieldComponent {
    DefaultValue: number;
    onInput(value: any): void;
    get Hour(): number;
    get Minute(): number;
    getValue(): {
        hour: number;
        minute: number;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<TimePickerControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimePickerControlComponent, "ng-component", never, { "DefaultValue": "DefaultValue"; }, {}, never, never>;
}
