import { ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ErrorsConfigurations } from '../../validations/configuration/errors-configuration';
import * as i0 from "@angular/core";
export declare class ErrorComponent implements OnChanges {
    private config;
    private cd;
    translateFuncion: (arg: string) => string;
    controlInvalido: boolean;
    set errors(value: ValidationErrors | null);
    get errors(): ValidationErrors | null;
    label: string;
    errorsList: string[] | null;
    constructor(config: ErrorsConfigurations, cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    private resolveErrorMessage;
    actualizarErrores(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorComponent, "sof-error", never, { "translateFuncion": "translateFuncion"; "controlInvalido": "controlInvalido"; "errors": "errors"; "label": "label"; }, {}, never, never>;
}
