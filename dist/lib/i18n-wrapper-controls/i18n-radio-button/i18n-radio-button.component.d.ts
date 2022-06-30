import { AfterViewInit } from '@angular/core';
import { RadioButtonMaterialControlComponent } from 'sof-ng-controls';
import { FormGroup, NgControl } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class I18nRadioButtonComponent extends RadioButtonMaterialControlComponent implements AfterViewInit {
    controlDir: NgControl;
    protected pipeTranslate: TranslatePipe;
    _srvTranslatePipe: TranslateService;
    control: RadioButtonMaterialControlComponent;
    radioOptions: {
        text: string;
        value: any;
    }[];
    labelToTranslate: string;
    listToTranslate: any[];
    constructor(controlDir: NgControl, pipeTranslate: TranslatePipe, _srvTranslatePipe: TranslateService);
    translateOptions(): void;
    ngAfterViewInit(): void;
    getFbGroup(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nRadioButtonComponent, [{ self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nRadioButtonComponent, "app-i18n-radio-button", never, { "labelToTranslate": "labelToTranslate"; "listToTranslate": "listToTranslate"; }, {}, never, never>;
}
