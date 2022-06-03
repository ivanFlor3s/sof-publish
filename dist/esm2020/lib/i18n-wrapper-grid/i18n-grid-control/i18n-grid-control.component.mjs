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
I18nGridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nGridControlComponent, selector: "app-i18n-grid-control", inputs: { i18nGridRowData: "i18nGridRowData", i18nGridColDefsRaw: "i18nGridColDefsRaw", i18nGridPaginationPageSize: "i18nGridPaginationPageSize", i18nGridPagination: "i18nGridPagination", i18nGridRowSelection: "i18nGridRowSelection", i18nGridAnimateRows: "i18nGridAnimateRows", i18nGridPageSizeEditable: "i18nGridPageSizeEditable", i18nGridPageSizeText: "i18nGridPageSizeText", i18nGridCheckboxesToSelection: "i18nGridCheckboxesToSelection" }, outputs: { onGridApi: "onGridApi" }, viewQueries: [{ propertyName: "gridControl", first: true, predicate: GridControlComponent, descendants: true }], ngImport: i0, template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""], components: [{ type: i2.GridControlComponent, selector: "sof-grid-control", inputs: ["gridRowOptions", "gridRowData", "gridColDefsRaw", "gridPaginationPageSize", "gridPagination", "gridRowSelection", "localeText", "gridAnimateRows", "gridPageSizeEditable", "gridPageSizeText", "gridChecboxesToSelection"], outputs: ["gridReady"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nGridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-grid-control', template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.TranslatePipe }, { type: i1.TranslateService }]; }, propDecorators: { onGridApi: [{
                type: Output
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1ncmlkLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1ncmlkL2kxOG4tZ3JpZC1jb250cm9sL2kxOG4tZ3JpZC1jb250cm9sLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItZ3JpZC9pMThuLWdyaWQtY29udHJvbC9pMThuLWdyaWQtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRixPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVF2RCxNQUFNLE9BQU8sd0JBQXdCO0lBcUVuQyxZQUNZLGFBQTRCLEVBQy9CLGlCQUFtQztRQURoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBcEVsQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQTtRQW1DeEMsK0JBQTBCLEdBQVcsRUFBRSxDQUFDO1FBQ3hDLHVCQUFrQixHQUFZLElBQUksQ0FBQztRQUM1Qzs7OztXQUlHO1FBQ00seUJBQW9CLEdBQTBCLFFBQVEsQ0FBQztRQUNoRTs7V0FFRztRQUNNLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUM5Qzs7O1dBR0c7UUFDTSw2QkFBd0IsR0FBWSxJQUFJLENBQUM7UUFDbEQ7O1dBRUc7UUFDTSx5QkFBb0IsR0FBVyxrQkFBa0IsQ0FBQztRQUMzRDs7O1dBR0c7UUFDTSxr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QUtHLHdCQUF3QjtzQkFBaEMsS0FBSztnQkFJRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBS0csNkJBQTZCO3NCQUFyQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgQ29sRGVmLCBHcmlkQXBpIH0gZnJvbSAnYWctZ3JpZC1jb21tdW5pdHknO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgR3JpZENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWkxOG4tZ3JpZC1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1ncmlkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2kxOG4tZ3JpZC1jb250cm9sLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuR3JpZENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgbGlzdGVuZXJUb0xhbmdDaGFuZ2UkITogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBAT3V0cHV0KCkgb25HcmlkQXBpID0gbmV3IEV2ZW50RW1pdHRlcjxHcmlkQXBpPigpXHJcblxyXG4gIEBWaWV3Q2hpbGQoR3JpZENvbnRyb2xDb21wb25lbnQpIGdyaWRDb250cm9sITogR3JpZENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIC8vUGFzYW1hbm9zIGRlIHBhcmFtcyBhbCBjb21wb25lbnRlIEdSSUQgQ09OVFJPTFxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgQXJyYXkgZGUgZGF0b3MgZW4gbGEgZmlsYVxyXG4gICAqIEBleGFtcGxlIGBgYHRzXHJcbiAgICogW1xyXG4gICAgIHtcclxuICAgICAgICBDb252ZW5pbzogJ0FjY29yZCBTYWx1ZCcsXHJcbiAgICAgICAgRmluYW5jaWFkb3I6ICdBY2NvcmQgU2FsaWQnLFxyXG4gICAgICAgIEVzdGFkbzogJ1N1c3BlbmRpZG8nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgQ29udmVuaW86ICdBY2NvcmQgU2FsdWQnLFxyXG4gICAgICAgIEZpbmFuY2lhZG9yOiAnQWNjb3JkIFNhbGlkJyxcclxuICAgICAgICBFc3RhZG86ICdJbmFjdGl2bycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBDb252ZW5pbzogJ0FjY29yZCBTYWx1ZCcsXHJcbiAgICAgICAgRmluYW5jaWFkb3I6ICdBY2NvcmQgU2FsaWQnLFxyXG4gICAgICAgIEVzdGFkbzogJ0FjdGl2bycsXHJcbiAgICAgIH1dXHJcbiAgICAgIGBgYFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUm93RGF0YSE6IGFueVtdIHwgbnVsbDtcclxuXHJcbiAgLyoqXHJcbiAgICogQXJyYXkgY29uIGxhcyBjb25maWd1cmFjaW9uIGRlIGNhZGEgY29sdW1uYSBlbiBsYSBncmlsbGFcclxuICAgKi9cclxuICBASW5wdXQoKSBpMThuR3JpZENvbERlZnNSYXchOiBDb2xEZWZbXTtcclxuICBASW5wdXQoKSBpMThuR3JpZFBhZ2luYXRpb25QYWdlU2l6ZTogbnVtYmVyID0gMTA7XHJcbiAgQElucHV0KCkgaTE4bkdyaWRQYWdpbmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBAc3VtbWFyeSBncmlkUm93U2VsZWN0aW9uIGluZGljYSBlbCB0aXBvIGRlIHNlbGVjY2lvbiBlbiBsYSBncmlsbGFcclxuICAgKiBAcGFyYW0gc2luZ2xlIHNvbG8gc2UgcHVlZGUgc2VsZWNjaW9uYXIgdW5hIGZpbGEgYSBsYSB2ZXpcclxuICAgKiBAcGFyYW0gbXVsdGlwbGUgc2UgcHVlZGVuIHNlbGVjY2lvbmFyIHZhcmlhcyBmaWxhc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUm93U2VsZWN0aW9uOiAnc2luZ2xlJyB8ICdtdWx0aXBsZScgPSAnc2luZ2xlJztcclxuICAvKipcclxuICAgKiBBbmltYWNpb24gZGUgbGFzIGZpbGFzIGVuIG9yZGVuYW1pZW50b1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkQW5pbWF0ZVJvd3M6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBFbiBjYXNvIGRlIHF1ZSBzZWEgdmVyZGFkZXJhIHNlIGVuY2FyZ2EgZGUgbW9zdHJhciBlbCBjYW1wbyBkZSBwYWdlIHNpemUgZWRpdGFibGUsXHJcbiAgICogY2FzbyBjb250cmFyaW8gZXNjb25kZSBlbCBjYW1wb1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUGFnZVNpemVFZGl0YWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogVGV4dG8gcXVlIHNlIG11ZXN0cmEgY29tbyBsYWJlbCBlbCBpbnB1dCBwYWdlU2l6ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGkxOG5HcmlkUGFnZVNpemVUZXh0OiBzdHJpbmcgPSAnUGFnaW5hcyBwb3IgZmlsYSc7XHJcbiAgLyoqXHJcbiAgICogRW4gY2FzbyBkZSBxdWUgc2VhIHZlcmRhZGVybyB2YSBhIG1vc3RyYXIgbG9zIGNoZWNrYm94ZXMgZW4gbGEgcHJpbWVyIGNvbHVtbmFcclxuICAgKiBjYXNvIGNvbnRyYXJpbyBubyBzZSB2YW4gYSBhZ3JlZ2FyIGxhcyBjaGVja2JveGVzXHJcbiAgICovXHJcbiAgQElucHV0KCkgaTE4bkdyaWRDaGVja2JveGVzVG9TZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgZ2V0IFBhZ2VTaXplVGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHRoaXMuaTE4bkdyaWRQYWdlU2l6ZVRleHQpIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcGlwZVRyYW5zbGF0ZTogVHJhbnNsYXRlUGlwZSxcclxuICAgIHB1YmxpYyBfc3J2VHJhbnNsYXRlUGlwZTogVHJhbnNsYXRlU2VydmljZVxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZUxvY2FsZU9uTGFuZ2VDaGFuZ2VkKCk7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUxvY2FsZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1JMThuQ29sdW1uUmF3cygpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTG9jYWxlT25MYW5nZUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLmxpc3RlbmVyVG9MYW5nQ2hhbmdlJCA9IHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtTG9jYWxlKCk7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1JMThuQ29sdW1uUmF3cygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdHJhbnNmb3JtTG9jYWxlKCkge1xyXG4gICAgLy9FeHRyYWlnbyBsYXMgdmFyaWFibGVzIHBhcmEgbWFuZGFyIGFsIGxvY2FsZVRleHQgZGUgbGEgZ3JpbGxhXHJcblxyXG4gICAgY29uc3QgeyBvZiwgdG8sIHBhZ2UsIG5vUm93c1RvU2hvdyB9ID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcclxuICAgICAgdGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5nZXQoJ0dSSUQnKVxyXG4gICAgKTtcclxuXHJcblxyXG4gICAgaWYgKCFvZiB8fCAhdG8gfHwgIXBhZ2UgfHwgIW5vUm93c1RvU2hvdykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ05vIGVzdGFuIGRlZmluaWRhcyBsYXMgdHJhZHVjY2lvbmVzIHBhcmEgbGFzIG9wY2lvbmVzIGRlIGxhIGdyaWxsYSdcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ3JpZENvbnRyb2wubG9jYWxlVGV4dCA9IHsgb2YsIHRvLCBwYWdlLCBub1Jvd3NUb1Nob3cgfTtcclxuICAgIHRoaXMuZ3JpZENvbnRyb2wuZG9SZXJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdHJhbnNmb3JtSTE4bkNvbHVtblJhd3MoKSB7XHJcbiAgICAvL1RvIHByb21pc2UgZGVwcmVjYXRlZCA9PiBSZWVtcGxhem8gY29uIFwibGFzdFZhbHVlRnJvbVwiXHJcbiAgICAvL2h0dHBzOi8vaW5kZXB0aC5kZXYvcG9zdHMvMTI4Ny9yeGpzLWhlYWRzLXVwLXRvcHJvbWlzZS1pcy1iZWluZy1kZXByZWNhdGVkXHJcblxyXG4gICAgLy9Fc3Blcm8gYSB0ZW5lciBsYXMgdHJhZHVjY2lvbmVzXHJcbiAgICBhd2FpdCBsYXN0VmFsdWVGcm9tKHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUuZ2V0KCdHUklEJykpO1xyXG5cclxuICAgIC8vUmVjb3JybyBjb2x1bW5hcyBwYXJhIHNldGVhcmxlcyBsYSBmdW5jaW9uIHF1ZSB2YSBhIGRldm9sdmVyIGxhIHRyYWR1Y2Npb25cclxuICAgIGNvbnN0IGNvbHVtbkRlZnM6IENvbERlZltdID0gdGhpcy5pMThuR3JpZENvbERlZnNSYXcubWFwKCh4OiBDb2xEZWYpID0+IHtcclxuICAgICAgeC5oZWFkZXJWYWx1ZUdldHRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHguaGVhZGVyTmFtZSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGU7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4geDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vU2V0ZW8gY29sdW1uYXMgZW4gR3JpZENvbnRyb2xcclxuICAgIHRoaXMuZ3JpZENvbnRyb2wuZ3JpZENvbERlZnNSYXcgPSBjb2x1bW5EZWZzO1xyXG5cclxuICAgIC8vTm9ybWFsaXpvIGxhcyBjb2xEZWZzIHF1ZSBwYXNlXHJcbiAgICB0aGlzLmdyaWRDb250cm9sLnRyYW5zZm9ybUNvbHVtblJhd3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saXN0ZW5lclRvTGFuZ0NoYW5nZSQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIlxyXG4gIDxzb2YtZ3JpZC1jb250cm9sXHJcbiAgICBbZ3JpZFJvd0RhdGFdPVwiaTE4bkdyaWRSb3dEYXRhXCJcclxuICAgIFtncmlkQ29sRGVmc1Jhd109XCJbXVwiXHJcbiAgICBbZ3JpZFBhZ2luYXRpb25QYWdlU2l6ZV09XCJpMThuR3JpZFBhZ2luYXRpb25QYWdlU2l6ZVwiXHJcbiAgICBbZ3JpZFBhZ2luYXRpb25dPVwiaTE4bkdyaWRQYWdpbmF0aW9uXCJcclxuICAgIFtncmlkUm93U2VsZWN0aW9uXT1cImkxOG5HcmlkUm93U2VsZWN0aW9uXCJcclxuICAgIFtncmlkQW5pbWF0ZVJvd3NdPVwiaTE4bkdyaWRBbmltYXRlUm93c1wiXHJcbiAgICBbZ3JpZFBhZ2VTaXplRWRpdGFibGVdPVwiaTE4bkdyaWRQYWdlU2l6ZUVkaXRhYmxlXCJcclxuICAgIFtncmlkUGFnZVNpemVUZXh0XT1cIlBhZ2VTaXplVGV4dFwiXHJcbiAgICBbZ3JpZENoZWNib3hlc1RvU2VsZWN0aW9uXT1cImkxOG5HcmlkQ2hlY2tib3hlc1RvU2VsZWN0aW9uXCJcclxuICAgIChncmlkUmVhZHkpPVwib25HcmlkQXBpLmVtaXQoJGV2ZW50KVwiXHJcbiAgPlxyXG4gIFxyXG4gIDwvc29mLWdyaWQtY29udHJvbD5cclxuIl19