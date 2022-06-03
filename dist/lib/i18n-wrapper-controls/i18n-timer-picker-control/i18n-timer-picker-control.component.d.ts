import { AfterViewInit } from '@angular/core';
import { TimePickerMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
export declare class I18nTimePickerControlComponent extends I18nBase implements AfterViewInit {
    control: TimePickerMaterialControlComponent;
    format24hs: boolean;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nTimePickerControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nTimePickerControlComponent, "app-i18n-timer-picker-control", never, { "format24hs": "format24hs"; }, {}, never, never>;
}
