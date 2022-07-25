import { TimePickerControlComponent } from '../../base/time-picker-control/time-picker-control.component';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
export declare class TimePickerMaterialControlComponent extends TimePickerControlComponent {
    errorControl: ErrorMaterialComponent;
    themes: NgxMaterialTimepickerTheme;
    format24hs: boolean;
    onInput(value: any): void;
    normalizeValue(value: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimePickerMaterialControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimePickerMaterialControlComponent, "sof-time-picker-control", never, { "format24hs": "format24hs"; }, {}, never, never>;
}
