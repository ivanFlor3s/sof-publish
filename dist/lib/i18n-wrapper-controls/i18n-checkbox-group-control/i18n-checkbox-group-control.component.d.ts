import { OnInit, AfterViewInit } from '@angular/core';
import { CheckboxGroupMaterialControlComponent } from 'sof-ng-controls';
import { FormGroup, NgControl } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class I18nCheckboxGroupControlComponent extends CheckboxGroupMaterialControlComponent implements OnInit, AfterViewInit {
    controlDir: NgControl;
    protected pipeTranslate: TranslatePipe;
    _srvTranslatePipe: TranslateService;
    control: CheckboxGroupMaterialControlComponent;
    checkOptions: {
        text: string;
        value: any;
    }[];
    labelToTranslate: string;
    listToTranslate: any[];
    constructor(controlDir: NgControl, pipeTranslate: TranslatePipe, _srvTranslatePipe: TranslateService);
    ngOnInit(): void;
    translateOptions(): void;
    ngAfterViewInit(): void;
    getFbGroup(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nCheckboxGroupControlComponent, [{ self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nCheckboxGroupControlComponent, "app-i18n-checkbox-group-control", never, { "labelToTranslate": "labelToTranslate"; "listToTranslate": "listToTranslate"; }, {}, never, never>;
}
