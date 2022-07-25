import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export declare class FileUploadControlComponent extends BaseFormFieldComponent {
    multiple: boolean;
    accept: string;
    onInput(value: any): void;
    writeValue(value: any): void;
    protected normalizeValue(value: any): any;
    getDisplayFileInfo(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileUploadControlComponent, "ng-component", never, { "multiple": "multiple"; "accept": "accept"; }, {}, never, never>;
}
