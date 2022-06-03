import { BaseFormFieldComponent } from 'sof-ng-controls';
import { FormGroup, NgControl } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class I18nBase extends BaseFormFieldComponent {
    controlDir: NgControl;
    protected pipeTranslate: TranslatePipe;
    _srvTranslatePipe: TranslateService;
    labelToTranslate: string;
    placeholderToTranslate: string;
    constructor(controlDir: NgControl, pipeTranslate: TranslatePipe, _srvTranslatePipe: TranslateService);
    getFbGroup(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nBase, [{ self: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nBase, "ng-component", never, { "labelToTranslate": "labelToTranslate"; "placeholderToTranslate": "placeholderToTranslate"; }, {}, never, never>;
}
