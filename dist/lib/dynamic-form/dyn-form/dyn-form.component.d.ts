import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormConfigTypes } from '../enums';
import { FormularioService } from '../formulario.service';
import { FormFieldConfig, FormConfig, Emptyfield } from '../interfaces';
import * as i0 from "@angular/core";
export declare class DynFormComponent implements AfterViewInit, OnDestroy, OnChanges {
    private cdRef;
    private fs;
    fieldsP: (FormFieldConfig | Emptyfield)[];
    enum: typeof FormConfigTypes;
    valueChanges: Subscription;
    cols: number;
    gutterSize: string;
    rowHeight: string;
    fields: (FormFieldConfig | Emptyfield)[];
    submitEvent: EventEmitter<any>;
    onChangeEvent: EventEmitter<any>;
    /**
     * Valores a setear en el formulario
     *
     * Setea los valores solo a los campos de las propiedades del objeto
     *
     * Si se quiere limpiar/resetear todo el formulario, pasar null
     */
    FieldsValues: any;
    formConfig: FormConfig;
    forma: FormGroup;
    constructor(cdRef: ChangeDetectorRef, fs: FormularioService);
    ngOnChanges(changes: SimpleChanges): void;
    get FormValues(): any;
    ngOnInit(): void;
    private SetValues;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    OnSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynFormComponent, "app-dyn-form", never, { "cols": "cols"; "gutterSize": "gutterSize"; "rowHeight": "rowHeight"; "fields": "fields"; "FieldsValues": "FieldsValues"; "formConfig": "formConfig"; }, { "submitEvent": "submitEvent"; "onChangeEvent": "onChangeEvent"; }, never, never>;
}
