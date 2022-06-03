import { TextAreaMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
export declare class I18nTextAreaControlComponent extends I18nBase {
    control: TextAreaMaterialControlComponent;
    rowsArea: number;
    resizeable: boolean;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nTextAreaControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nTextAreaControlComponent, "app-i18n-textarea-control", never, { "rowsArea": "rowsArea"; "resizeable": "resizeable"; }, {}, never, never>;
}
