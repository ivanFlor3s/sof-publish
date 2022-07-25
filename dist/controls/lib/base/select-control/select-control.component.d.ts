import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export declare class SelectControlComponent extends BaseFormFieldComponent {
    list: any[];
    valuePath: string;
    textPath: string;
    onInput(value: string): void;
    writeValue(value: any): void;
    getValue(item: any): any;
    getText(item: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectControlComponent, "ng-component", never, { "list": "list"; "valuePath": "valuePath"; "textPath": "textPath"; }, {}, never, never>;
}
