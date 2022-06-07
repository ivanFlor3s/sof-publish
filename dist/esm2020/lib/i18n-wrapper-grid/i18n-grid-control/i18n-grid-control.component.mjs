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
I18nGridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nGridControlComponent, selector: "app-i18n-grid-control", inputs: { i18nRowId: "i18nRowId", i18nGridRowData: "i18nGridRowData", i18nGridColDefsRaw: "i18nGridColDefsRaw", i18nGridPaginationPageSize: "i18nGridPaginationPageSize", i18nGridPagination: "i18nGridPagination", i18nGridRowSelection: "i18nGridRowSelection", i18nGridAnimateRows: "i18nGridAnimateRows", i18nGridPageSizeEditable: "i18nGridPageSizeEditable", i18nGridPageSizeText: "i18nGridPageSizeText", i18nGridCheckboxesToSelection: "i18nGridCheckboxesToSelection" }, outputs: { onGridApi: "onGridApi" }, viewQueries: [{ propertyName: "gridControl", first: true, predicate: GridControlComponent, descendants: true }], ngImport: i0, template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n    [rowId]=\"i18nRowId\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""], components: [{ type: i2.GridControlComponent, selector: "sof-grid-control", inputs: ["gridRowOptions", "gridRowData", "gridColDefsRaw", "gridPaginationPageSize", "gridPagination", "gridRowSelection", "localeText", "gridAnimateRows", "gridPageSizeEditable", "gridPageSizeText", "gridChecboxesToSelection", "rowId"], outputs: ["gridReady"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nGridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-grid-control', template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n    [rowId]=\"i18nRowId\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""] }]
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1ncmlkLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1ncmlkL2kxOG4tZ3JpZC1jb250cm9sL2kxOG4tZ3JpZC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItZ3JpZC9pMThuLWdyaWQtY29udHJvbC9pMThuLWdyaWQtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRixPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVF2RCxNQUFNLE9BQU8sd0JBQXdCO0lBc0VuQyxZQUNZLGFBQTRCLEVBQy9CLGlCQUFtQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBckVsQyxjQUFTLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFvQ2hFLCtCQUEwQixHQUFXLEVBQUUsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFDNUM7Ozs7V0FJRztRQUNNLHlCQUFvQixHQUEwQixRQUFRLENBQUM7UUFDaEU7O1dBRUc7UUFDTSx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDOUM7OztXQUdHO1FBQ00sNkJBQXdCLEdBQVksSUFBSSxDQUFDO1FBQ2xEOztXQUVHO1FBQ00seUJBQW9CLEdBQVcsa0JBQWtCLENBQUM7UUFDM0Q7OztXQUdHO1FBQ00s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QUlHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFLRyx3QkFBd0I7c0JBQWhDLEtBQUs7Z0JBSUcsb0JBQW9CO3NCQUE1QixLQUFLO2dCQUtHLDZCQUE2QjtzQkFBckMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IENvbERlZiwgR3JpZEFwaSB9IGZyb20gJ2FnLWdyaWQtY29tbXVuaXR5JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEdyaWRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnc29mLW5nLWNvbnRyb2xzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLWdyaWQtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2kxOG4tZ3JpZC1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pMThuLWdyaWQtY29udHJvbC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4bkdyaWRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGxpc3RlbmVyVG9MYW5nQ2hhbmdlJCE6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgQE91dHB1dCgpIG9uR3JpZEFwaTogRXZlbnRFbWl0dGVyPEdyaWRBcGk+ID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQXBpPigpO1xyXG4gIEBJbnB1dCgpIGkxOG5Sb3dJZCE6IGFueTtcclxuICBcclxuICBAVmlld0NoaWxkKEdyaWRDb250cm9sQ29tcG9uZW50KSBncmlkQ29udHJvbCE6IEdyaWRDb250cm9sQ29tcG9uZW50O1xyXG5cclxuICAvL1Bhc2FtYW5vcyBkZSBwYXJhbXMgYWwgY29tcG9uZW50ZSBHUklEIENPTlRST0xcclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5IEFycmF5IGRlIGRhdG9zIGVuIGxhIGZpbGFcclxuICAgKiBAZXhhbXBsZSBgYGB0c1xyXG4gICAqIFtcclxuICAgICB7XHJcbiAgICAgICAgQ29udmVuaW86ICdBY2NvcmQgU2FsdWQnLFxyXG4gICAgICAgIEZpbmFuY2lhZG9yOiAnQWNjb3JkIFNhbGlkJyxcclxuICAgICAgICBFc3RhZG86ICdTdXNwZW5kaWRvJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIENvbnZlbmlvOiAnQWNjb3JkIFNhbHVkJyxcclxuICAgICAgICBGaW5hbmNpYWRvcjogJ0FjY29yZCBTYWxpZCcsXHJcbiAgICAgICAgRXN0YWRvOiAnSW5hY3Rpdm8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgQ29udmVuaW86ICdBY2NvcmQgU2FsdWQnLFxyXG4gICAgICAgIEZpbmFuY2lhZG9yOiAnQWNjb3JkIFNhbGlkJyxcclxuICAgICAgICBFc3RhZG86ICdBY3Rpdm8nLFxyXG4gICAgICB9XVxyXG4gICAgICBgYGBcclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZFJvd0RhdGEhOiBhbnlbXSB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFycmF5IGNvbiBsYXMgY29uZmlndXJhY2lvbiBkZSBjYWRhIGNvbHVtbmEgZW4gbGEgZ3JpbGxhXHJcbiAgICovXHJcbiAgQElucHV0KCkgaTE4bkdyaWRDb2xEZWZzUmF3ITogQ29sRGVmW107XHJcbiAgQElucHV0KCkgaTE4bkdyaWRQYWdpbmF0aW9uUGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUGFnaW5hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgZ3JpZFJvd1NlbGVjdGlvbiBpbmRpY2EgZWwgdGlwbyBkZSBzZWxlY2Npb24gZW4gbGEgZ3JpbGxhXHJcbiAgICogQHBhcmFtIHNpbmdsZSBzb2xvIHNlIHB1ZWRlIHNlbGVjY2lvbmFyIHVuYSBmaWxhIGEgbGEgdmV6XHJcbiAgICogQHBhcmFtIG11bHRpcGxlIHNlIHB1ZWRlbiBzZWxlY2Npb25hciB2YXJpYXMgZmlsYXNcclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZFJvd1NlbGVjdGlvbjogJ3NpbmdsZScgfCAnbXVsdGlwbGUnID0gJ3NpbmdsZSc7XHJcbiAgLyoqXHJcbiAgICogQW5pbWFjaW9uIGRlIGxhcyBmaWxhcyBlbiBvcmRlbmFtaWVudG9cclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZEFuaW1hdGVSb3dzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogRW4gY2FzbyBkZSBxdWUgc2VhIHZlcmRhZGVyYSBzZSBlbmNhcmdhIGRlIG1vc3RyYXIgZWwgY2FtcG8gZGUgcGFnZSBzaXplIGVkaXRhYmxlLFxyXG4gICAqIGNhc28gY29udHJhcmlvIGVzY29uZGUgZWwgY2FtcG9cclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZFBhZ2VTaXplRWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIFRleHRvIHF1ZSBzZSBtdWVzdHJhIGNvbW8gbGFiZWwgZWwgaW5wdXQgcGFnZVNpemVcclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZFBhZ2VTaXplVGV4dDogc3RyaW5nID0gJ1BhZ2luYXMgcG9yIGZpbGEnO1xyXG4gIC8qKlxyXG4gICAqIEVuIGNhc28gZGUgcXVlIHNlYSB2ZXJkYWRlcm8gdmEgYSBtb3N0cmFyIGxvcyBjaGVja2JveGVzIGVuIGxhIHByaW1lciBjb2x1bW5hXHJcbiAgICogY2FzbyBjb250cmFyaW8gbm8gc2UgdmFuIGEgYWdyZWdhciBsYXMgY2hlY2tib3hlc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkQ2hlY2tib3hlc1RvU2VsZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGdldCBQYWdlU2l6ZVRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5waXBlVHJhbnNsYXRlLnRyYW5zZm9ybSh0aGlzLmkxOG5HcmlkUGFnZVNpemVUZXh0KSB8fCAnJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHBpcGVUcmFuc2xhdGU6IFRyYW5zbGF0ZVBpcGUsXHJcbiAgICBwdWJsaWMgX3NydlRyYW5zbGF0ZVBpcGU6IFRyYW5zbGF0ZVNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VMb2NhbGVPbkxhbmdlQ2hhbmdlZCgpO1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Mb2NhbGUoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNmb3JtSTE4bkNvbHVtblJhd3MoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUxvY2FsZU9uTGFuZ2VDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5saXN0ZW5lclRvTGFuZ0NoYW5nZSQgPSB0aGlzLl9zcnZUcmFuc2xhdGVQaXBlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoXHJcbiAgICAgIChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybUxvY2FsZSgpO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtSTE4bkNvbHVtblJhd3MoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHRyYW5zZm9ybUxvY2FsZSgpIHtcclxuICAgIC8vRXh0cmFpZ28gbGFzIHZhcmlhYmxlcyBwYXJhIG1hbmRhciBhbCBsb2NhbGVUZXh0IGRlIGxhIGdyaWxsYVxyXG5cclxuICAgIGNvbnN0IHsgb2YsIHRvLCBwYWdlLCBub1Jvd3NUb1Nob3cgfSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXHJcbiAgICAgIHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUuZ2V0KCdHUklEJylcclxuICAgICk7XHJcblxyXG5cclxuICAgIGlmICghb2YgfHwgIXRvIHx8ICFwYWdlIHx8ICFub1Jvd3NUb1Nob3cpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdObyBlc3RhbiBkZWZpbmlkYXMgbGFzIHRyYWR1Y2Npb25lcyBwYXJhIGxhcyBvcGNpb25lcyBkZSBsYSBncmlsbGEnXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdyaWRDb250cm9sLmxvY2FsZVRleHQgPSB7IG9mLCB0bywgcGFnZSwgbm9Sb3dzVG9TaG93IH07XHJcbiAgICB0aGlzLmdyaWRDb250cm9sLmRvUmVyZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHRyYW5zZm9ybUkxOG5Db2x1bW5SYXdzKCkge1xyXG4gICAgLy9UbyBwcm9taXNlIGRlcHJlY2F0ZWQgPT4gUmVlbXBsYXpvIGNvbiBcImxhc3RWYWx1ZUZyb21cIlxyXG4gICAgLy9odHRwczovL2luZGVwdGguZGV2L3Bvc3RzLzEyODcvcnhqcy1oZWFkcy11cC10b3Byb21pc2UtaXMtYmVpbmctZGVwcmVjYXRlZFxyXG5cclxuICAgIC8vRXNwZXJvIGEgdGVuZXIgbGFzIHRyYWR1Y2Npb25lc1xyXG4gICAgYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLl9zcnZUcmFuc2xhdGVQaXBlLmdldCgnR1JJRCcpKTtcclxuXHJcbiAgICAvL1JlY29ycm8gY29sdW1uYXMgcGFyYSBzZXRlYXJsZXMgbGEgZnVuY2lvbiBxdWUgdmEgYSBkZXZvbHZlciBsYSB0cmFkdWNjaW9uXHJcbiAgICBjb25zdCBjb2x1bW5EZWZzOiBDb2xEZWZbXSA9IHRoaXMuaTE4bkdyaWRDb2xEZWZzUmF3Lm1hcCgoeDogQ29sRGVmKSA9PiB7XHJcbiAgICAgIHguaGVhZGVyVmFsdWVHZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0gdGhpcy5waXBlVHJhbnNsYXRlLnRyYW5zZm9ybSh4LmhlYWRlck5hbWUgYXMgc3RyaW5nKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIHg7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1NldGVvIGNvbHVtbmFzIGVuIEdyaWRDb250cm9sXHJcbiAgICB0aGlzLmdyaWRDb250cm9sLmdyaWRDb2xEZWZzUmF3ID0gY29sdW1uRGVmcztcclxuXHJcbiAgICAvL05vcm1hbGl6byBsYXMgY29sRGVmcyBxdWUgcGFzZVxyXG4gICAgdGhpcy5ncmlkQ29udHJvbC50cmFuc2Zvcm1Db2x1bW5SYXdzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMubGlzdGVuZXJUb0xhbmdDaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJcclxuICA8c29mLWdyaWQtY29udHJvbFxyXG4gICAgW2dyaWRSb3dEYXRhXT1cImkxOG5HcmlkUm93RGF0YVwiXHJcbiAgICBbZ3JpZENvbERlZnNSYXddPVwiW11cIlxyXG4gICAgW2dyaWRQYWdpbmF0aW9uUGFnZVNpemVdPVwiaTE4bkdyaWRQYWdpbmF0aW9uUGFnZVNpemVcIlxyXG4gICAgW2dyaWRQYWdpbmF0aW9uXT1cImkxOG5HcmlkUGFnaW5hdGlvblwiXHJcbiAgICBbZ3JpZFJvd1NlbGVjdGlvbl09XCJpMThuR3JpZFJvd1NlbGVjdGlvblwiXHJcbiAgICBbZ3JpZEFuaW1hdGVSb3dzXT1cImkxOG5HcmlkQW5pbWF0ZVJvd3NcIlxyXG4gICAgW2dyaWRQYWdlU2l6ZUVkaXRhYmxlXT1cImkxOG5HcmlkUGFnZVNpemVFZGl0YWJsZVwiXHJcbiAgICBbZ3JpZFBhZ2VTaXplVGV4dF09XCJQYWdlU2l6ZVRleHRcIlxyXG4gICAgW2dyaWRDaGVjYm94ZXNUb1NlbGVjdGlvbl09XCJpMThuR3JpZENoZWNrYm94ZXNUb1NlbGVjdGlvblwiXHJcbiAgICAoZ3JpZFJlYWR5KT1cIm9uR3JpZEFwaS5lbWl0KCRldmVudClcIlxyXG4gICAgW3Jvd0lkXT1cImkxOG5Sb3dJZFwiXHJcbiAgPlxyXG4gIFxyXG4gIDwvc29mLWdyaWQtY29udHJvbD5cclxuIl19