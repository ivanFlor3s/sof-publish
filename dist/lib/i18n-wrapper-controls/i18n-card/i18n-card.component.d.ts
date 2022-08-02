import { EventEmitter } from '@angular/core';
import { CardCustomOptions } from 'sof-ng-controls';
import * as i0 from "@angular/core";
export declare class I18nCardComponent {
    titleKey: string;
    subTitleKey: string;
    expandable: boolean;
    expanded: boolean;
    onToggleExpand: EventEmitter<any>;
    isSubCard: boolean;
    disabled: boolean;
    customOptions?: CardCustomOptions;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nCardComponent, "app-i18n-card", never, { "titleKey": "titleKey"; "subTitleKey": "subTitleKey"; "expandable": "expandable"; "expanded": "expanded"; "isSubCard": "isSubCard"; "disabled": "disabled"; "customOptions": "customOptions"; }, { "onToggleExpand": "onToggleExpand"; }, never, ["[header]", "[body]", "[footer]"]>;
}
