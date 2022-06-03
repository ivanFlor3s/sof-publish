import { AfterViewInit } from '@angular/core';
import { SelectMaterialControlComponent } from 'sof-ng-controls';
import { I18nOptions } from '../../shared/models/options';
import * as i0 from "@angular/core";
export declare class I18nSelectControlComponent extends I18nOptions implements AfterViewInit {
    control: SelectMaterialControlComponent;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nSelectControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nSelectControlComponent, "app-i18n-select-control", never, {}, {}, never, never>;
}
