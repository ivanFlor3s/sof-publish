import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { GridControlComponent } from 'sof-ng-controls';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "sof-ng-controls";
export class I18nGridControlComponent {
    constructor(pipeTranslate, _srvTranslatePipe) {
        this.pipeTranslate = pipeTranslate;
        this._srvTranslatePipe = _srvTranslatePipe;
        this.onGridApi = new EventEmitter();
        this.pageChangeEvent = new EventEmitter();
        this.onMemorySearch = true;
        this.i18nGridPaginationPageSize = 10;
        this.i18nGridPagination = true;
        /**
         * @summary gridRowSelection indica el tipo de seleccion en la grilla
         * @param single solo se puede seleccionar una fila a la vez
         * @param multiple se pueden seleccionar varias filas
         */
        this.i18nGridRowSelection = 'single';
        /**
         * Animacion de las filas en ordenamiento
         */
        this.i18nGridAnimateRows = false;
        /**
         * En caso de que sea verdadera se encarga de mostrar el campo de page size editable,
         * caso contrario esconde el campo
         */
        this.i18nGridPageSizeEditable = true;
        /**
         * Texto que se muestra como label el input pageSize
         */
        this.i18nGridPageSizeText = 'Paginas por fila';
        /**
         * En caso de que sea verdadero va a mostrar los checkboxes en la primer columna
         * caso contrario no se van a agregar las checkboxes
         */
        this.i18nGridCheckboxesToSelection = false;
    }
    get PageSizeText() {
        return this.pipeTranslate.transform(this.i18nGridPageSizeText) || '';
    }
    ngOnInit() {
        this.changeLocaleOnLangeChanged();
        this.transformLocale();
    }
    ngAfterViewInit() {
        this.transformI18nColumnRaws();
    }
    changeLocaleOnLangeChanged() {
        this.listenerToLangChange$ = this._srvTranslatePipe.onLangChange.subscribe((res) => {
            this.transformLocale();
            this.transformI18nColumnRaws();
        });
    }
    async transformLocale() {
        //Extraigo las variables para mandar al localeText de la grilla
        const { of, to, page, noRowsToShow } = await lastValueFrom(this._srvTranslatePipe.get('GRID'));
        if (!of || !to || !page || !noRowsToShow) {
            throw new Error('No estan definidas las traducciones para las opciones de la grilla');
        }
        this.gridControl.localeText = { of, to, page, noRowsToShow };
        this.gridControl.doRerender();
    }
    async transformI18nColumnRaws() {
        //To promise deprecated => Reemplazo con "lastValueFrom"
        //https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated
        //Espero a tener las traducciones
        await lastValueFrom(this._srvTranslatePipe.get('GRID'));
        //Recorro columnas para setearles la funcion que va a devolver la traduccion
        const columnDefs = this.i18nGridColDefsRaw.map((x) => {
            x.headerValueGetter = () => {
                const translate = this.pipeTranslate.transform(x.headerName);
                return translate;
            };
            return x;
        });
        //Seteo columnas en GridControl
        this.gridControl.gridColDefsRaw = columnDefs;
        //Normalizo las colDefs que pase
        this.gridControl.transformColumnRaws();
    }
    ngOnDestroy() {
        this.listenerToLangChange$.unsubscribe();
    }
}
I18nGridControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nGridControlComponent, deps: [{ token: i1.TranslatePipe }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nGridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nGridControlComponent, selector: "app-i18n-grid-control", inputs: { i18nRowId: "i18nRowId", onMemorySearch: "onMemorySearch", totalItems: "totalItems", i18nGridRowData: "i18nGridRowData", i18nGridColDefsRaw: "i18nGridColDefsRaw", i18nGridPaginationPageSize: "i18nGridPaginationPageSize", i18nGridPagination: "i18nGridPagination", i18nGridRowSelection: "i18nGridRowSelection", i18nGridAnimateRows: "i18nGridAnimateRows", i18nGridPageSizeEditable: "i18nGridPageSizeEditable", i18nGridPageSizeText: "i18nGridPageSizeText", i18nGridCheckboxesToSelection: "i18nGridCheckboxesToSelection", isRowSelectableFn: "isRowSelectableFn" }, outputs: { onGridApi: "onGridApi", pageChangeEvent: "pageChangeEvent" }, viewQueries: [{ propertyName: "gridControl", first: true, predicate: GridControlComponent, descendants: true }], ngImport: i0, template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n    [rowId]=\"i18nRowId\"\r\n    [isRowSelectableFn]=\"isRowSelectableFn\"\r\n    [onMemorySearch]=\"onMemorySearch\"\r\n    [totalItems]=\"totalItems\"\r\n    (pageChangeEvent)=\"pageChangeEvent.emit($event)\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""], components: [{ type: i2.GridControlComponent, selector: "sof-grid-control", inputs: ["totalItems", "onMemorySearch", "gridRowOptions", "gridRowData", "gridColDefsRaw", "gridPaginationPageSize", "gridPagination", "gridRowSelection", "localeText", "gridAnimateRows", "gridPageSizeEditable", "gridPageSizeText", "gridChecboxesToSelection", "rowId", "isRowSelectableFn"], outputs: ["gridReady", "pageChangeEvent"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nGridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-grid-control', template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n    [rowId]=\"i18nRowId\"\r\n    [isRowSelectableFn]=\"isRowSelectableFn\"\r\n    [onMemorySearch]=\"onMemorySearch\"\r\n    [totalItems]=\"totalItems\"\r\n    (pageChangeEvent)=\"pageChangeEvent.emit($event)\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.TranslatePipe }, { type: i1.TranslateService }]; }, propDecorators: { onGridApi: [{
                type: Output
            }], pageChangeEvent: [{
                type: Output
            }], i18nRowId: [{
                type: Input
            }], onMemorySearch: [{
                type: Input
            }], totalItems: [{
                type: Input
            }], gridControl: [{
                type: ViewChild,
                args: [GridControlComponent]
            }], i18nGridRowData: [{
                type: Input
            }], i18nGridColDefsRaw: [{
                type: Input
            }], i18nGridPaginationPageSize: [{
                type: Input
            }], i18nGridPagination: [{
                type: Input
            }], i18nGridRowSelection: [{
                type: Input
            }], i18nGridAnimateRows: [{
                type: Input
            }], i18nGridPageSizeEditable: [{
                type: Input
            }], i18nGridPageSizeText: [{
                type: Input
            }], i18nGridCheckboxesToSelection: [{
                type: Input
            }], isRowSelectableFn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1ncmlkLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1ncmlkL2kxOG4tZ3JpZC1jb250cm9sL2kxOG4tZ3JpZC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItZ3JpZC9pMThuLWdyaWQtY29udHJvbC9pMThuLWdyaWQtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkxRixPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVF2RCxNQUFNLE9BQU8sd0JBQXdCO0lBa0ZuQyxZQUNZLGFBQTRCLEVBQy9CLGlCQUFtQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBakZsQyxjQUFTLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDL0Qsb0JBQWUsR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQTtRQUd6RSxtQkFBYyxHQUFZLElBQUksQ0FBQztRQW1DL0IsK0JBQTBCLEdBQVcsRUFBRSxDQUFDO1FBQ3hDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUM1Qzs7OztXQUlHO1FBQ00seUJBQW9CLEdBQTBCLFFBQVEsQ0FBQztRQUNoRTs7V0FFRztRQUNNLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUM5Qzs7O1dBR0c7UUFDTSw2QkFBd0IsR0FBWSxJQUFJ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LG9CQUFvQjtnQkEyQnRCLGVBQWU7c0JBQXZCLEtBQUs7Z0JBS0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLDBCQUEwQjtzQkFBbEMsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBTUcsb0JBQW9CO3NCQUE1QixLQUFLO2dCQUlHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFLRyx3QkFBd0I7c0JBQWhDLEtBQUs7Z0JBSUcsb0JBQW9CO3NCQUE1QixLQUFLO2dCQUtHLDZCQUE2QjtzQkFBckMsS0FBSztnQkFRSSxpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZUV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xEZWYsIEdyaWRBcGkgfSBmcm9tICdhZy1ncmlkLWNvbW11bml0eSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBHcmlkQ29udHJvbENvbXBvbmVudCB9IGZyb20gJ3NvZi1uZy1jb250cm9scyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaTE4bi1ncmlkLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLWdyaWQtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaTE4bi1ncmlkLWNvbnRyb2wuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEkxOG5HcmlkQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBsaXN0ZW5lclRvTGFuZ0NoYW5nZSQhOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIEBPdXRwdXQoKSBvbkdyaWRBcGk6IEV2ZW50RW1pdHRlcjxHcmlkQXBpPiA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZEFwaT4oKTtcclxuICBAT3V0cHV0KCkgcGFnZUNoYW5nZUV2ZW50OiBFdmVudEVtaXR0ZXI8UGFnZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUV2ZW50PigpIFxyXG5cclxuICBASW5wdXQoKSBpMThuUm93SWQhOiBhbnk7XHJcbiAgQElucHV0KCkgb25NZW1vcnlTZWFyY2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICBAVmlld0NoaWxkKEdyaWRDb250cm9sQ29tcG9uZW50KSBncmlkQ29udHJvbCE6IEdyaWRDb250cm9sQ29tcG9uZW50O1xyXG5cclxuICAvL1Bhc2FtYW5vcyBkZSBwYXJhbXMgYWwgY29tcG9uZW50ZSBHUklEIENPTlRST0xcclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5IEFycmF5IGRlIGRhdG9zIGVuIGxhIGZpbGFcclxuICAgKiBAZXhhbXBsZSBgYGB0c1xyXG4gICAqIFtcclxuICAgICB7XHJcbiAgICAgICAgQ29udmVuaW86ICdBY2NvcmQgU2FsdWQnLFxyXG4gICAgICAgIEZpbmFuY2lhZG9yOiAnQWNjb3JkIFNhbGlkJyxcclxuICAgICAgICBFc3RhZG86ICdTdXNwZW5kaWRvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIENvbnZlbmlvOiAnQWNjb3JkIFNhbHVkJyxcclxuICAgICAgICBGaW5hbmNpYWRvcjogJ0FjY29yZCBTYWxpZCcsXHJcbiAgICAgICAgRXN0YWRvOiAnSW5hY3Rpdm8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgQ29udmVuaW86ICdBY2NvcmQgU2FsdWQnLFxyXG4gICAgICAgIEZpbmFuY2lhZG9yOiAnQWNjb3JkIFNhbGlkJyxcclxuICAgICAgICBFc3RhZG86ICdBY3Rpdm8nLFxyXG4gICAgICB9XVxyXG4gICAgICBgYGBcclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZFJvd0RhdGEhOiBhbnlbXSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFycmF5IGNvbiBsYXMgY29uZmlndXJhY2lvbiBkZSBjYWRhIGNvbHVtbmEgZW4gbGEgZ3JpbGxhXHJcbiAgICovXHJcbiAgQElucHV0KCkgaTE4bkdyaWRDb2xEZWZzUmF3ITogQ29sRGVmW107XHJcbiAgQElucHV0KCkgaTE4bkdyaWRQYWdpbmF0aW9uUGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUGFnaW5hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgZ3JpZFJvd1NlbGVjdGlvbiBpbmRpY2EgZWwgdGlwbyBkZSBzZWxlY2Npb24gZW4gbGEgZ3JpbGxhXHJcbiAgICogQHBhcmFtIHNpbmdsZSBzb2xvIHNlIHB1ZWRlIHNlbGVjY2lvbmFyIHVuYSBmaWxhIGEgbGEgdmV6XHJcbiAgICogQHBhcmFtIG11bHRpcGxlIHNlIHB1ZWRlbiBzZWxlY2Npb25hciB2YXJpYXMgZmlsYXNcclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZFJvd1NlbGVjdGlvbjogJ3NpbmdsZScgfCAnbXVsdGlwbGUnID0gJ3NpbmdsZSc7XHJcbiAgLyoqXHJcbiAgICogQW5pbWFjaW9uIGRlIGxhcyBmaWxhcyBlbiBvcmRlbmFtaWVudG9cclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZEFuaW1hdGVSb3dzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogRW4gY2FzbyBkZSBxdWUgc2VhIHZlcmRhZGVyYSBzZSBlbmNhcmdhIGRlIG1vc3RyYXIgZWwgY2FtcG8gZGUgcGFnZSBzaXplIGVkaXRhYmxlLFxyXG4gICAqIGNhc28gY29udHJhcmlvIGVzY29uZGUgZWwgY2FtcG9cclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZFBhZ2VTaXplRWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIFRleHRvIHF1ZSBzZSBtdWVzdHJhIGNvbW8gbGFiZWwgZWwgaW5wdXQgcGFnZVNpemVcclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZFBhZ2VTaXplVGV4dDogc3RyaW5nID0gJ1BhZ2luYXMgcG9yIGZpbGEnO1xyXG4gIC8qKlxyXG4gICAqIEVuIGNhc28gZGUgcXVlIHNlYSB2ZXJkYWRlcm8gdmEgYSBtb3N0cmFyIGxvcyBjaGVja2JveGVzIGVuIGxhIHByaW1lciBjb2x1bW5hXHJcbiAgICogY2FzbyBjb250cmFyaW8gbm8gc2UgdmFuIGEgYWdyZWdhciBsYXMgY2hlY2tib3hlc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkQ2hlY2tib3hlc1RvU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5IGZ1bmNpb24gcXVlIGRldnVlbHZlIHNpIG11ZXN0cmEgdSBvY3VsdGEgZWwgY2hlY2tib3ggZGUgc2VsZWNjaW9uIGxhIGNhZGEgZmlsYVxyXG4gICAqIEBwYXJhbSByb3dOb2RlIGxhIGZpbGEgZGUgbGEgZ3JpbGxhLiByb3dOb2RlLmRhdGEgZXMgZWwgaXRlbSBkZSBsYSBmaWxhIGRlbCBhcnJheSBxdWUgc2UgbGUgcGFzYSBhIGxhIGdyaWxsYVxyXG4gICAqIEBleGFtcGxlIFtpc1JvcVNlbGVjdGFibGVGbl09XCJzZWxlY3RhYmxlRm5cIiAvL1NpIGVzIG5lY2VzYXJpbyAnLi4uPVwic2VsZWN0YWJsZUZuLmJpbmQodGhpcylcIidcclxuICAgKiBAZXhhbXBsZSBzZWxlY3RhYmxlRm4ocm93Tm9kZTogUm93Tm9kZSk6IGJvb2xlYW4geyByZXR1cm4gcm93Tm9kZS5kYXRhPy5jb252SWQgPT0gJ0oxMCc7IH1cclxuICAgKi9cclxuICAgQElucHV0KCkgaXNSb3dTZWxlY3RhYmxlRm4/OiAocm93Tm9kZTogYW55KSA9PiBib29sZWFuO1xyXG5cclxuXHJcbiAgZ2V0IFBhZ2VTaXplVGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHRoaXMuaTE4bkdyaWRQYWdlU2l6ZVRleHQpIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcGlwZVRyYW5zbGF0ZTogVHJhbnNsYXRlUGlwZSxcclxuICAgIHB1YmxpYyBfc3J2VHJhbnNsYXRlUGlwZTogVHJhbnNsYXRlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZUxvY2FsZU9uTGFuZ2VDaGFuZ2VkKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUxvY2FsZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1JMThuQ29sdW1uUmF3cygpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTG9jYWxlT25MYW5nZUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyVG9MYW5nQ2hhbmdlJCA9IHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtTG9jYWxlKCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1JMThuQ29sdW1uUmF3cygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdHJhbnNmb3JtTG9jYWxlKCkge1xyXG4gICAgLy9FeHRyYWlnbyBsYXMgdmFyaWFibGVzIHBhcmEgbWFuZGFyIGFsIGxvY2FsZVRleHQgZGUgbGEgZ3JpbGxhXHJcblxyXG4gICAgY29uc3QgeyBvZiwgdG8sIHBhZ2UsIG5vUm93c1RvU2hvdyB9ID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcclxuICAgICAgdGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5nZXQoJ0dSSUQnKVxyXG4gICAgKTtcclxuXHJcblxyXG4gICAgaWYgKCFvZiB8fCAhdG8gfHwgIXBhZ2UgfHwgIW5vUm93c1RvU2hvdykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ05vIGVzdGFuIGRlZmluaWRhcyBsYXMgdHJhZHVjY2lvbmVzIHBhcmEgbGFzIG9wY2lvbmVzIGRlIGxhIGdyaWxsYSdcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ3JpZENvbnRyb2wubG9jYWxlVGV4dCA9IHsgb2YsIHRvLCBwYWdlLCBub1Jvd3NUb1Nob3cgfTtcclxuICAgIHRoaXMuZ3JpZENvbnRyb2wuZG9SZXJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdHJhbnNmb3JtSTE4bkNvbHVtblJhd3MoKSB7XHJcbiAgICAvL1RvIHByb21pc2UgZGVwcmVjYXRlZCA9PiBSZWVtcGxhem8gY29uIFwibGFzdFZhbHVlRnJvbVwiXHJcbiAgICAvL2h0dHBzOi8vaW5kZXB0aC5kZXYvcG9zdHMvMTI4Ny9yeGpzLWhlYWRzLXVwLXRvcHJvbWlzZS1pcy1iZWluZy1kZXByZWNhdGVkXHJcblxyXG4gICAgLy9Fc3Blcm8gYSB0ZW5lciBsYXMgdHJhZHVjY2lvbmVzXHJcbiAgICBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUuZ2V0KCdHUklEJykpO1xyXG5cclxuICAgIC8vUmVjb3JybyBjb2x1bW5hcyBwYXJhIHNldGVhcmxlcyBsYSBmdW5jaW9uIHF1ZSB2YSBhIGRldm9sdmVyIGxhIHRyYWR1Y2Npb25cclxuICAgIGNvbnN0IGNvbHVtbkRlZnM6IENvbERlZltdID0gdGhpcy5pMThuR3JpZENvbERlZnNSYXcubWFwKCh4OiBDb2xEZWYpID0+IHtcclxuICAgICAgeC5oZWFkZXJWYWx1ZUdldHRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHguaGVhZGVyTmFtZSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4geDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vU2V0ZW8gY29sdW1uYXMgZW4gR3JpZENvbnRyb2xcclxuICAgIHRoaXMuZ3JpZENvbnRyb2wuZ3JpZENvbERlZnNSYXcgPSBjb2x1bW5EZWZzO1xyXG5cclxuICAgIC8vTm9ybWFsaXpvIGxhcyBjb2xEZWZzIHF1ZSBwYXNlXHJcbiAgICB0aGlzLmdyaWRDb250cm9sLnRyYW5zZm9ybUNvbHVtblJhd3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0ZW5lclRvTGFuZ0NoYW5nZSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIlxyXG4gIDxzb2YtZ3JpZC1jb250cm9sXHJcbiAgICBbZ3JpZFJvd0RhdGFdPVwiaTE4bkdyaWRSb3dEYXRhXCJcclxuICAgIFtncmlkQ29sRGVmc1Jhd109XCJbXVwiXHJcbiAgICBbZ3JpZFBhZ2luYXRpb25QYWdlU2l6ZV09XCJpMThuR3JpZFBhZ2luYXRpb25QYWdlU2l6ZVwiXHJcbiAgICBbZ3JpZFBhZ2luYXRpb25dPVwiaTE4bkdyaWRQYWdpbmF0aW9uXCJcclxuICAgIFtncmlkUm93U2VsZWN0aW9uXT1cImkxOG5HcmlkUm93U2VsZWN0aW9uXCJcclxuICAgIFtncmlkQW5pbWF0ZVJvd3NdPVwiaTE4bkdyaWRBbmltYXRlUm93c1wiXHJcbiAgICBbZ3JpZFBhZ2VTaXplRWRpdGFibGVdPVwiaTE4bkdyaWRQYWdlU2l6ZUVkaXRhYmxlXCJcclxuICAgIFtncmlkUGFnZVNpemVUZXh0XT1cIlBhZ2VTaXplVGV4dFwiXHJcbiAgICBbZ3JpZENoZWNib3hlc1RvU2VsZWN0aW9uXT1cImkxOG5HcmlkQ2hlY2tib3hlc1RvU2VsZWN0aW9uXCJcclxuICAgIChncmlkUmVhZHkpPVwib25HcmlkQXBpLmVtaXQoJGV2ZW50KVwiXHJcbiAgICBbcm93SWRdPVwiaTE4blJvd0lkXCJcclxuICAgIFtpc1Jvd1NlbGVjdGFibGVGbl09XCJpc1Jvd1NlbGVjdGFibGVGblwiXHJcbiAgICBbb25NZW1vcnlTZWFyY2hdPVwib25NZW1vcnlTZWFyY2hcIlxyXG4gICAgW3RvdGFsSXRlbXNdPVwidG90YWxJdGVtc1wiXHJcbiAgICAocGFnZUNoYW5nZUV2ZW50KT1cInBhZ2VDaGFuZ2VFdmVudC5lbWl0KCRldmVudClcIlxyXG4gID5cclxuICBcclxuICA8L3NvZi1ncmlkLWNvbnRyb2w+XHJcbiJdfQ==