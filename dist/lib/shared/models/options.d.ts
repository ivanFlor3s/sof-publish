import { OnChanges, SimpleChanges } from '@angular/core';
import { I18nBase } from './base';
import * as i0 from "@angular/core";
export declare class I18nOptions extends I18nBase implements OnChanges {
    listTmp: any;
    textPath: string;
    valuePath: string;
    toTranslate: boolean;
    listFinal: any[];
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    showOptions(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nOptions, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nOptions, "ng-component", never, { "listTmp": "listTmp"; "textPath": "textPath"; "valuePath": "valuePath"; "toTranslate": "toTranslate"; }, {}, never, never>;
}