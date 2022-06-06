import { OnInit, ChangeDetectorRef, SimpleChanges, EventEmitter } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColGroupDef, GetRowIdFunc, GridApi } from 'ag-grid-community';
import { OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class GridControlComponent implements OnInit, OnChanges {
    private _cdRef;
    private gridApi;
    gridReady: EventEmitter<GridApi>;
    gridRowOptions: boolean;
    gridRowData: any[] | null;
    gridColDefsRaw: (ColDef | ColGroupDef | string)[];
    gridPaginationPageSize: number;
    gridPagination: boolean;
    /**
     * @summary gridRowSelection indica el tipo de seleccion en la grilla
     * @param single solo se puede seleccionar una fila a la vez
     * @param multiple se pueden seleccionar varias filas
     */
    gridRowSelection: 'single' | 'multiple' | 'none';
    gridColDefs: (ColDef | ColGroupDef)[];
    localeText: {
        [key: string]: string;
    };
    gridAnimateRows: boolean;
    gridPageSizeEditable: boolean;
    gridPageSizeText: string;
    grid: AgGridAngular;
    gridChecboxesToSelection: boolean;
    rerender: boolean;
    rowId: string;
    constructor(_cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Cambia el localeText en la grilla
     * @param locale objeto con las traducciones que necesito en la configuracion de la grilla
     * @example
     * ```ts
     * {
       * of: 'de',
        page: 'Pagina',
        nextPage: 'Siguiente',
        lastPage: 'Anterior',
        firstPage: 'Primera pagina',
        previousPage: 'Pagina previa',
      }
     * ```
     */
    changeLocale(locale?: any): void;
    /**
     * Metodo para volver a renderizar la grilla con un ngif en el componente de ag-grid
     */
    doRerender(): void;
    transformColumnRaws(): void;
    /**
     * Si flex y width estan definidos, flex tiene mas prioridad e ignora el width
     *
     * De ambos, solo el width se normaliza (200)
     * @summary la Normalizacion de una columna consiste en dejar parametros por default(width, soertable, flex,...)
     */
    normaliseColDef(param: ColDef): ColDef;
    normaliseStringToColDef(param: string): ColDef;
    onGridReady(): void;
    getRowId: GetRowIdFunc;
    sizeChanged(size: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GridControlComponent, "sof-grid-control", never, { "gridRowOptions": "gridRowOptions"; "gridRowData": "gridRowData"; "gridColDefsRaw": "gridColDefsRaw"; "gridPaginationPageSize": "gridPaginationPageSize"; "gridPagination": "gridPagination"; "gridRowSelection": "gridRowSelection"; "localeText": "localeText"; "gridAnimateRows": "gridAnimateRows"; "gridPageSizeEditable": "gridPageSizeEditable"; "gridPageSizeText": "gridPageSizeText"; "gridChecboxesToSelection": "gridChecboxesToSelection"; "rowId": "rowId"; }, { "gridReady": "gridReady"; }, never, never>;
}
