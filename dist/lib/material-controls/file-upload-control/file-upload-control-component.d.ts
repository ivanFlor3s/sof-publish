import { OnInit } from '@angular/core';
import { FileUploadControlComponent } from '../../base/file-upload-control/file-upload-control.component';
import { FileInput } from 'ngx-material-file-input';
import { ValidationForm } from '../../dynamic-form/interfaces';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
export declare class FileUploadMaterialControlComponent extends FileUploadControlComponent implements OnInit {
    maxSize: number;
    Field: any;
    errorControl: ErrorMaterialComponent;
    ngOnInit(): void;
    onInput(value: any): void;
    redrawFields(value: any): void;
    getMaxSizeValueInValidation(validations?: ValidationForm[]): any;
    getFileInputFromValue(): FileInput;
    getFilesName(): string[];
    deleteItem(key: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileUploadMaterialControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileUploadMaterialControlComponent, "sof-file-upload-control", never, { "maxSize": "maxSize"; }, {}, never, never>;
}
