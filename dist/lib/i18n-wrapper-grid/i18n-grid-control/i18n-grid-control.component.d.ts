import { EventEmitter, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { GridControlComponent } from 'sof-ng-controls';
import * as i0 from "@angular/core";
export declare class I18nGridControlComponent implements OnInit {
    protected pipeTranslate: TranslatePipe;
    _srvTranslatePipe: TranslateService;
    private listenerToLangChange$;
    onGridApi: EventEmitter<GridApi>;
    i18nRowId: any;
    gridControl: GridControlComponent;
    /**
     *
     */
    /**
     * @summary Array de datos en la fila
     * @example ```ts
     * [
       {
          Convenio: 'Accord Salud',
          Financiador: 'Accord Salid',
          Estado: 'Suspendido',
        },
        {
          Convenio: 'Accord Salud',
          Financiador: 'Accord Salid',
          Estado: 'Inactivo',
        },
        {
          Convenio: 'Accord Salud',
          Financiador: 'Accord Salid',
          Estado: 'Activo',
        }]
        ```
     */
    i18nGridRowData: any[] | null;
    /**
     * Array con las configuracion de cada columna en la grilla
     */
    i18nGridColDefsRaw: ColDef[];
    i18nGridPaginationPageSize: number;
    i18nGridPagination: boolean;
    /**
     * @summary gridRowSelection indica el tipo de seleccion en la grilla
     * @param single solo se puede seleccionar una fila a la vez
     * @param multiple se pueden seleccionar varias filas
     */
    i18nGridRowSelection: 'single' | 'multiple';
    /**
     * Animacion de las filas en ordenamiento
     */
    i18nGridAnimateRows: boolean;
    /**
     * En caso de que sea verdadera se encarga de mostrar el campo de page size editable,
     * caso contrario esconde el campo
     */
    i18nGridPageSizeEditable: boolean;
    /**
     * Texto que se muestra como label el input pageSize
     */
    i18nGridPageSizeText: string;
    /**
     * En caso de que sea verdadero va a mostrar los checkboxes en la primer columna
     * caso contrario no se van a agregar las checkboxes
     */
    i18nGridCheckboxesToSelection: boolean;
    /**
     * @summary funcion que devuelve si muestra u oculta el checkbox de seleccion la cada fila
     * @param rowNode la fila de la grilla. rowNode.data es el item de la fila del array que se le pasa a la grilla
     * @example [isRoqSelectableFn]="selectableFn" //Si es necesario '...="selectableFn.bind(this)"'
     * @example selectableFn(rowNode: RowNode): boolean { return rowNode.data?.convId == 'J10'; }
     */
    isRowSelectableFn?: (rowNode: any) => boolean;
    get PageSizeText(): any;
    constructor(pipeTranslate: TranslatePipe, _srvTranslatePipe: TranslateService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    changeLocaleOnLangeChanged(): void;
    transformLocale(): Promise<void>;
    transformI18nColumnRaws(): Promise<void>;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nGridControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nGridControlComponent, "app-i18n-grid-control", never, { "i18nRowId": "i18nRowId"; "i18nGridRowData": "i18nGridRowData"; "i18nGridColDefsRaw": "i18nGridColDefsRaw"; "i18nGridPaginationPageSize": "i18nGridPaginationPageSize"; "i18nGridPagination": "i18nGridPagination"; "i18nGridRowSelection": "i18nGridRowSelection"; "i18nGridAnimateRows": "i18nGridAnimateRows"; "i18nGridPageSizeEditable": "i18nGridPageSizeEditable"; "i18nGridPageSizeText": "i18nGridPageSizeText"; "i18nGridCheckboxesToSelection": "i18nGridCheckboxesToSelection"; "isRowSelectableFn": "isRowSelectableFn"; }, { "onGridApi": "onGridApi"; }, never, never>;
}
