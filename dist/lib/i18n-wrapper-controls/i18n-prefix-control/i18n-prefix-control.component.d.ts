import { AfterViewInit } from '@angular/core';
import { PrefixControlMaterialComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
export declare class I18nPrefixControlComponent extends I18nBase implements AfterViewInit {
    inputType: 'number' | 'text';
    prefix: string;
    control: PrefixControlMaterialComponent;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nPrefixControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nPrefixControlComponent, "app-i18n-prefix-control", never, { "inputType": "inputType"; "prefix": "prefix"; }, {}, never, never>;
}
