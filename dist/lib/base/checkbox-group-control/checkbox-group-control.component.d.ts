import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export declare class CheckboxGroupControlComponent extends BaseFormFieldComponent {
    list: any[];
    valuePath: string;
    textPath: string;
    onInput(item: any, checked: boolean): void;
    writeValue(value: any): void;
    getChecked(item: any): any;
    getValue(item: any): any;
    getText(item: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxGroupControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxGroupControlComponent, "ng-component", never, { "list": "list"; "valuePath": "valuePath"; "textPath": "textPath"; }, {}, never, never>;
}
