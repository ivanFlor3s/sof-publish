import { ElementRef, EventEmitter } from '@angular/core';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
export declare class SearchBoxMaterialControlComponent {
    placeholder: string;
    disabled: boolean;
    onInput: EventEmitter<string>;
    errorControl: ErrorMaterialComponent;
    input: ElementRef;
    onInputEvent(val: string): void;
    reset(emit?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchBoxMaterialControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchBoxMaterialControlComponent, "sof-search-box-control", never, { "placeholder": "placeholder"; "disabled": "disabled"; }, { "onInput": "onInput"; }, never, never>;
}
