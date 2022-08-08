import { HttpClient } from '@angular/common/http';
import { NgControl } from '@angular/forms';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export declare class AutocompleteControlComponent extends BaseFormFieldComponent {
    controlDir: NgControl;
    private httpClient;
    constructor(controlDir: NgControl, httpClient: HttpClient);
    onInput(value: string): void;
    writeValue(value: any): void;
    getValue(item: any): any;
    getText(item: any): any;
    debounce: number;
    valuePath: string;
    textPath: string;
    list: any[];
    filterFn: (filterText: string) => any[];
    filterEndPoint: string;
    timeoutObj: any;
    filteredList: any[];
    search(e: any): void;
    filter(filter: string): Promise<any[]>;
    inMemorySearch(filter: string): Promise<any[]>;
    normalizeString(x: string): any;
    functionSearch(filter: string): Promise<any[]>;
    endpointSearch(filter: string): Promise<any>;
    onSelection(selectedText: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteControlComponent, [{ optional: true; self: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteControlComponent, "ng-component", never, { "debounce": "debounce"; "valuePath": "valuePath"; "textPath": "textPath"; "list": "list"; "filterFn": "filterFn"; "filterEndPoint": "filterEndPoint"; }, {}, never, never>;
}