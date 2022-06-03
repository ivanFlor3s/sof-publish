import { FileUploadMaterialControlComponent, ValidationForm } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
export declare class I18nFileUploadControlComponent extends I18nBase {
    control: FileUploadMaterialControlComponent;
    maxSize: number;
    multiple: boolean;
    ngAfterViewInit(): void;
    getMaxSizeValueInValidation(validations?: ValidationForm[]): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nFileUploadControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nFileUploadControlComponent, "app-i18n-file-upload-control", never, { "maxSize": "maxSize"; "multiple": "multiple"; }, {}, never, never>;
}
