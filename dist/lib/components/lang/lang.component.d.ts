import { NgControl } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { I18nOptions } from '../../shared/models/options';
import * as i0 from "@angular/core";
export declare class LangComponent extends I18nOptions {
    translate: TranslateService;
    controlDir: NgControl;
    private _adapter;
    private _locale;
    protected pipeTranslate: TranslatePipe;
    activedLang: string;
    constructor(translate: TranslateService, controlDir: NgControl, _adapter: DateAdapter<any>, _locale: string, pipeTranslate: TranslatePipe);
    changeLang(lang: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LangComponent, [null, { self: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LangComponent, "app-lang", never, {}, {}, never, never>;
}
