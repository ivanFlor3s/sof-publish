import { EventEmitter } from '@angular/core';
import { CardCustomOptions } from '../interfaces';
import * as i0 from "@angular/core";
export declare class CardComponent {
    titleText: string;
    subTitleText: string;
    expandable: boolean;
    expanded: boolean;
    onToggleExpand: EventEmitter<any>;
    isSubCard: boolean;
    disabled: boolean;
    customOptions?: CardCustomOptions;
    toggleExpand(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "sof-card", never, { "titleText": "titleText"; "subTitleText": "subTitleText"; "expandable": "expandable"; "expanded": "expanded"; "isSubCard": "isSubCard"; "disabled": "disabled"; "customOptions": "customOptions"; }, { "onToggleExpand": "onToggleExpand"; }, never, ["[header]", "[body]", "[footer]"]>;
}
