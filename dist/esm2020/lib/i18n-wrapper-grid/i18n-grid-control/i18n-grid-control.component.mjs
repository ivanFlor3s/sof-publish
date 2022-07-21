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
I18nGridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nGridControlComponent, selector: "app-i18n-grid-control", inputs: { i18nRowId: "i18nRowId", i18nGridRowData: "i18nGridRowData", i18nGridColDefsRaw: "i18nGridColDefsRaw", i18nGridPaginationPageSize: "i18nGridPaginationPageSize", i18nGridPagination: "i18nGridPagination", i18nGridRowSelection: "i18nGridRowSelection", i18nGridAnimateRows: "i18nGridAnimateRows", i18nGridPageSizeEditable: "i18nGridPageSizeEditable", i18nGridPageSizeText: "i18nGridPageSizeText", i18nGridCheckboxesToSelection: "i18nGridCheckboxesToSelection", isRowSelectableFn: "isRowSelectableFn" }, outputs: { onGridApi: "onGridApi" }, viewQueries: [{ propertyName: "gridControl", first: true, predicate: GridControlComponent, descendants: true }], ngImport: i0, template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n    [rowId]=\"i18nRowId\"\r\n    [isRowSelectableFn]=\"isRowSelectableFn\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""], components: [{ type: i2.GridControlComponent, selector: "sof-grid-control", inputs: ["gridRowOptions", "gridRowData", "gridColDefsRaw", "gridPaginationPageSize", "gridPagination", "gridRowSelection", "localeText", "gridAnimateRows", "gridPageSizeEditable", "gridPageSizeText", "gridChecboxesToSelection", "rowId", "isRowSelectableFn"], outputs: ["gridReady"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nGridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-grid-control', template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n    [rowId]=\"i18nRowId\"\r\n    [isRowSelectableFn]=\"isRowSelectableFn\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.TranslatePipe }, { type: i1.TranslateService }]; }, propDecorators: { onGridApi: [{
                type: Output
            }], i18nRowId: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1ncmlkLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1ncmlkL2kxOG4tZ3JpZC1jb250cm9sL2kxOG4tZ3JpZC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItZ3JpZC9pMThuLWdyaWQtY29udHJvbC9pMThuLWdyaWQtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRixPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVF2RCxNQUFNLE9BQU8sd0JBQXdCO0lBK0VuQyxZQUNZLGFBQTRCLEVBQy9CLGlCQUFtQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBOUVsQyxjQUFTLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFvQ2hFLCtCQUEwQixHQUFXLEVBQUUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFDNUM7Ozs7V0FJRztRQUNNLHlCQUFvQixHQUEwQixRQUFRLENBQUM7UUFDaEU7O1dBRUc7UUFDTSx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDOUM7OztXQUdHO1FBQ00sNkJBQXdCLEdBQVksSUFBSSxDQUFDO1FBQ2xEOztXQUVHO1FBQ00seUJBQW9CLEdBQVcsa0JBQWtCLENBQUM7UUFDM0Q7OztXQUdHO1FBQ00s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QkFJRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBS0csd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUlHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFLRyw2QkFBNkI7c0JBQXJDLEtBQUs7Z0JBUUksaUJBQWlCO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQ29sRGVmLCBHcmlkQXBpIH0gZnJvbSAnYWctZ3JpZC1jb21tdW5pdHknO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgR3JpZENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWkxOG4tZ3JpZC1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1ncmlkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2kxOG4tZ3JpZC1jb250cm9sLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuR3JpZENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgbGlzdGVuZXJUb0xhbmdDaGFuZ2UkITogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBAT3V0cHV0KCkgb25HcmlkQXBpOiBFdmVudEVtaXR0ZXI8R3JpZEFwaT4gPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRBcGk+KCk7XHJcbiAgQElucHV0KCkgaTE4blJvd0lkITogYW55O1xyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoR3JpZENvbnRyb2xDb21wb25lbnQpIGdyaWRDb250cm9sITogR3JpZENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIC8vUGFzYW1hbm9zIGRlIHBhcmFtcyBhbCBjb21wb25lbnRlIEdSSUQgQ09OVFJPTFxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgQXJyYXkgZGUgZGF0b3MgZW4gbGEgZmlsYVxyXG4gICAqIEBleGFtcGxlIGBgYHRzXHJcbiAgICogW1xyXG4gICAgIHtcclxuICAgICAgICBDb252ZW5pbzogJ0FjY29yZCBTYWx1ZCcsXHJcbiAgICAgICAgRmluYW5jaWFkb3I6ICdBY2NvcmQgU2FsaWQnLFxyXG4gICAgICAgIEVzdGFkbzogJ1N1c3BlbmRpZG8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgQ29udmVuaW86ICdBY2NvcmQgU2FsdWQnLFxyXG4gICAgICAgIEZpbmFuY2lhZG9yOiAnQWNjb3JkIFNhbGlkJyxcclxuICAgICAgICBFc3RhZG86ICdJbmFjdGl2bycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBDb252ZW5pbzogJ0FjY29yZCBTYWx1ZCcsXHJcbiAgICAgICAgRmluYW5jaWFkb3I6ICdBY2NvcmQgU2FsaWQnLFxyXG4gICAgICAgIEVzdGFkbzogJ0FjdGl2bycsXHJcbiAgICAgIH1dXHJcbiAgICAgIGBgYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUm93RGF0YSE6IGFueVtdIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQXJyYXkgY29uIGxhcyBjb25maWd1cmFjaW9uIGRlIGNhZGEgY29sdW1uYSBlbiBsYSBncmlsbGFcclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZENvbERlZnNSYXchOiBDb2xEZWZbXTtcclxuICBASW5wdXQoKSBpMThuR3JpZFBhZ2luYXRpb25QYWdlU2l6ZTogbnVtYmVyID0gMTA7XHJcbiAgQElucHV0KCkgaTE4bkdyaWRQYWdpbmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBAc3VtbWFyeSBncmlkUm93U2VsZWN0aW9uIGluZGljYSBlbCB0aXBvIGRlIHNlbGVjY2lvbiBlbiBsYSBncmlsbGFcclxuICAgKiBAcGFyYW0gc2luZ2xlIHNvbG8gc2UgcHVlZGUgc2VsZWNjaW9uYXIgdW5hIGZpbGEgYSBsYSB2ZXpcclxuICAgKiBAcGFyYW0gbXVsdGlwbGUgc2UgcHVlZGVuIHNlbGVjY2lvbmFyIHZhcmlhcyBmaWxhc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUm93U2VsZWN0aW9uOiAnc2luZ2xlJyB8ICdtdWx0aXBsZScgPSAnc2luZ2xlJztcclxuICAvKipcclxuICAgKiBBbmltYWNpb24gZGUgbGFzIGZpbGFzIGVuIG9yZGVuYW1pZW50b1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkQW5pbWF0ZVJvd3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBFbiBjYXNvIGRlIHF1ZSBzZWEgdmVyZGFkZXJhIHNlIGVuY2FyZ2EgZGUgbW9zdHJhciBlbCBjYW1wbyBkZSBwYWdlIHNpemUgZWRpdGFibGUsXHJcbiAgICogY2FzbyBjb250cmFyaW8gZXNjb25kZSBlbCBjYW1wb1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUGFnZVNpemVFZGl0YWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGV4dG8gcXVlIHNlIG11ZXN0cmEgY29tbyBsYWJlbCBlbCBpbnB1dCBwYWdlU2l6ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUGFnZVNpemVUZXh0OiBzdHJpbmcgPSAnUGFnaW5hcyBwb3IgZmlsYSc7XHJcbiAgLyoqXHJcbiAgICogRW4gY2FzbyBkZSBxdWUgc2VhIHZlcmRhZGVybyB2YSBhIG1vc3RyYXIgbG9zIGNoZWNrYm94ZXMgZW4gbGEgcHJpbWVyIGNvbHVtbmFcclxuICAgKiBjYXNvIGNvbnRyYXJpbyBubyBzZSB2YW4gYSBhZ3JlZ2FyIGxhcyBjaGVja2JveGVzXHJcbiAgICovXHJcbiAgQElucHV0KCkgaTE4bkdyaWRDaGVja2JveGVzVG9TZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgZnVuY2lvbiBxdWUgZGV2dWVsdmUgc2kgbXVlc3RyYSB1IG9jdWx0YSBlbCBjaGVja2JveCBkZSBzZWxlY2Npb24gbGEgY2FkYSBmaWxhXHJcbiAgICogQHBhcmFtIHJvd05vZGUgbGEgZmlsYSBkZSBsYSBncmlsbGEuIHJvd05vZGUuZGF0YSBlcyBlbCBpdGVtIGRlIGxhIGZpbGEgZGVsIGFycmF5IHF1ZSBzZSBsZSBwYXNhIGEgbGEgZ3JpbGxhXHJcbiAgICogQGV4YW1wbGUgW2lzUm9xU2VsZWN0YWJsZUZuXT1cInNlbGVjdGFibGVGblwiIC8vU2kgZXMgbmVjZXNhcmlvICcuLi49XCJzZWxlY3RhYmxlRm4uYmluZCh0aGlzKVwiJ1xyXG4gICAqIEBleGFtcGxlIHNlbGVjdGFibGVGbihyb3dOb2RlOiBSb3dOb2RlKTogYm9vbGVhbiB7IHJldHVybiByb3dOb2RlLmRhdGE/LmNvbnZJZCA9PSAnSjEwJzsgfVxyXG4gICAqL1xyXG4gICBASW5wdXQoKSBpc1Jvd1NlbGVjdGFibGVGbj86IChyb3dOb2RlOiBhbnkpID0+IGJvb2xlYW47XHJcblxyXG5cclxuICBnZXQgUGFnZVNpemVUZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGlwZVRyYW5zbGF0ZS50cmFuc2Zvcm0odGhpcy5pMThuR3JpZFBhZ2VTaXplVGV4dCkgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBwaXBlVHJhbnNsYXRlOiBUcmFuc2xhdGVQaXBlLFxyXG4gICAgcHVibGljIF9zcnZUcmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlTG9jYWxlT25MYW5nZUNoYW5nZWQoKTtcclxuICAgIHRoaXMudHJhbnNmb3JtTG9jYWxlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUkxOG5Db2x1bW5SYXdzKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMb2NhbGVPbkxhbmdlQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMubGlzdGVuZXJUb0xhbmdDaGFuZ2UkID0gdGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1Mb2NhbGUoKTtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybUkxOG5Db2x1bW5SYXdzKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB0cmFuc2Zvcm1Mb2NhbGUoKSB7XHJcbiAgICAvL0V4dHJhaWdvIGxhcyB2YXJpYWJsZXMgcGFyYSBtYW5kYXIgYWwgbG9jYWxlVGV4dCBkZSBsYSBncmlsbGFcclxuXHJcbiAgICBjb25zdCB7IG9mLCB0bywgcGFnZSwgbm9Sb3dzVG9TaG93IH0gPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxyXG4gICAgICB0aGlzLl9zcnZUcmFuc2xhdGVQaXBlLmdldCgnR1JJRCcpXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICBpZiAoIW9mIHx8ICF0byB8fCAhcGFnZSB8fCAhbm9Sb3dzVG9TaG93KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnTm8gZXN0YW4gZGVmaW5pZGFzIGxhcyB0cmFkdWNjaW9uZXMgcGFyYSBsYXMgb3BjaW9uZXMgZGUgbGEgZ3JpbGxhJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ncmlkQ29udHJvbC5sb2NhbGVUZXh0ID0geyBvZiwgdG8sIHBhZ2UsIG5vUm93c1RvU2hvdyB9O1xyXG4gICAgdGhpcy5ncmlkQ29udHJvbC5kb1JlcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB0cmFuc2Zvcm1JMThuQ29sdW1uUmF3cygpIHtcclxuICAgIC8vVG8gcHJvbWlzZSBkZXByZWNhdGVkID0+IFJlZW1wbGF6byBjb24gXCJsYXN0VmFsdWVGcm9tXCJcclxuICAgIC8vaHR0cHM6Ly9pbmRlcHRoLmRldi9wb3N0cy8xMjg3L3J4anMtaGVhZHMtdXAtdG9wcm9taXNlLWlzLWJlaW5nLWRlcHJlY2F0ZWRcclxuXHJcbiAgICAvL0VzcGVybyBhIHRlbmVyIGxhcyB0cmFkdWNjaW9uZXNcclxuICAgIGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5nZXQoJ0dSSUQnKSk7XHJcblxyXG4gICAgLy9SZWNvcnJvIGNvbHVtbmFzIHBhcmEgc2V0ZWFybGVzIGxhIGZ1bmNpb24gcXVlIHZhIGEgZGV2b2x2ZXIgbGEgdHJhZHVjY2lvblxyXG4gICAgY29uc3QgY29sdW1uRGVmczogQ29sRGVmW10gPSB0aGlzLmkxOG5HcmlkQ29sRGVmc1Jhdy5tYXAoKHg6IENvbERlZikgPT4ge1xyXG4gICAgICB4LmhlYWRlclZhbHVlR2V0dGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHRoaXMucGlwZVRyYW5zbGF0ZS50cmFuc2Zvcm0oeC5oZWFkZXJOYW1lIGFzIHN0cmluZyk7XHJcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiB4O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9TZXRlbyBjb2x1bW5hcyBlbiBHcmlkQ29udHJvbFxyXG4gICAgdGhpcy5ncmlkQ29udHJvbC5ncmlkQ29sRGVmc1JhdyA9IGNvbHVtbkRlZnM7XHJcblxyXG4gICAgLy9Ob3JtYWxpem8gbGFzIGNvbERlZnMgcXVlIHBhc2VcclxuICAgIHRoaXMuZ3JpZENvbnRyb2wudHJhbnNmb3JtQ29sdW1uUmF3cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RlbmVyVG9MYW5nQ2hhbmdlJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcbiAgPHNvZi1ncmlkLWNvbnRyb2xcclxuICAgIFtncmlkUm93RGF0YV09XCJpMThuR3JpZFJvd0RhdGFcIlxyXG4gICAgW2dyaWRDb2xEZWZzUmF3XT1cIltdXCJcclxuICAgIFtncmlkUGFnaW5hdGlvblBhZ2VTaXplXT1cImkxOG5HcmlkUGFnaW5hdGlvblBhZ2VTaXplXCJcclxuICAgIFtncmlkUGFnaW5hdGlvbl09XCJpMThuR3JpZFBhZ2luYXRpb25cIlxyXG4gICAgW2dyaWRSb3dTZWxlY3Rpb25dPVwiaTE4bkdyaWRSb3dTZWxlY3Rpb25cIlxyXG4gICAgW2dyaWRBbmltYXRlUm93c109XCJpMThuR3JpZEFuaW1hdGVSb3dzXCJcclxuICAgIFtncmlkUGFnZVNpemVFZGl0YWJsZV09XCJpMThuR3JpZFBhZ2VTaXplRWRpdGFibGVcIlxyXG4gICAgW2dyaWRQYWdlU2l6ZVRleHRdPVwiUGFnZVNpemVUZXh0XCJcclxuICAgIFtncmlkQ2hlY2JveGVzVG9TZWxlY3Rpb25dPVwiaTE4bkdyaWRDaGVja2JveGVzVG9TZWxlY3Rpb25cIlxyXG4gICAgKGdyaWRSZWFkeSk9XCJvbkdyaWRBcGkuZW1pdCgkZXZlbnQpXCJcclxuICAgIFtyb3dJZF09XCJpMThuUm93SWRcIlxyXG4gICAgW2lzUm93U2VsZWN0YWJsZUZuXT1cImlzUm93U2VsZWN0YWJsZUZuXCJcclxuICA+XHJcbiAgXHJcbiAgPC9zb2YtZ3JpZC1jb250cm9sPlxyXG4iXX0=