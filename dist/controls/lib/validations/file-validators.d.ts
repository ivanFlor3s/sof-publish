import { ValidatorFn } from "@angular/forms";
export declare class FileValidators {
    static maxFileSize(maxBytes: number, customMessage?: string): ValidatorFn;
    static acceptedFileTypes(fileTypes: string[], customMessage?: string): ValidatorFn;
}
