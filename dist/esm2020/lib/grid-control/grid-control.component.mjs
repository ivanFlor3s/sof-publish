import { Component, Input, ViewChild, Output, EventEmitter, } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
//Idiomas
import { AG_GRID_LOCALE_ES } from './lang/locale.es';
import { AG_GRID_LOCALE_EN } from './lang/locale.en';
import * as i0 from "@angular/core";
import * as i1 from "ag-grid-angular";
import * as i2 from "./components/page-size/page-size.component";
import * as i3 from "@angular/common";
export class GridControlComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.gridReady = new EventEmitter();
        this.gridRowOptions = false;
        this.gridColDefsRaw = [];
        this.gridPaginationPageSize = 10;
        this.gridPagination = true;
        /**
         * @summary gridRowSelection indica el tipo de seleccion en la grilla
         * @param single solo se puede seleccionar una fila a la vez
         * @param multiple se pueden seleccionar varias filas
         */
        this.gridRowSelection = 'single';
        this.localeText = AG_GRID_LOCALE_EN;
        this.gridAnimateRows = false;
        this.gridPageSizeEditable = true;
        this.gridPageSizeText = "Filas por pagina";
        this.gridChecboxesToSelection = true;
        this.rowId = 'id';
        this.getRowId = (params) => {
            return params.data[this.rowId];
        };
    }
    ngOnInit() {
        this.transformColumnRaws();
    }
    ngOnChanges(changes) {
        /**
         * Espero a que cambie el input de locale para cambiar la propiedad
         * localeText y volver a renderizar ag-grid con este nuevo locale
         */
        const currentLocale = changes['localeText']?.currentValue;
        if (currentLocale && currentLocale != changes['localeText'].previousValue) {
            this.changeLocale(currentLocale);
        }
    }
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
    changeLocale(locale) {
        if (locale) {
            this.localeText = locale;
        }
        else {
            this.localeText = (this.localeText == AG_GRID_LOCALE_EN)
                ? AG_GRID_LOCALE_ES : AG_GRID_LOCALE_EN;
        }
        this.doRerender();
    }
    /**
     * Metodo para volver a renderizar la grilla con un ngif en el componente de ag-grid
     */
    doRerender() {
        this.rerender = true;
        this._cdRef.detectChanges();
        this.rerender = false;
    }
    transformColumnRaws() {
        const columnDefs = this.gridColDefsRaw.map((x, i) => {
            //Agrego checkbox selection en primer columna
            if (i == 0 && this.gridChecboxesToSelection) {
                const firstColDef = typeof (x) == 'string' ?
                    this.normaliseStringToColDef(x) : this.normaliseColDef(x);
                firstColDef.headerCheckboxSelection = true;
                firstColDef.checkboxSelection = true;
                return firstColDef;
            }
            else {
                return typeof (x) == 'string' ?
                    this.normaliseStringToColDef(x) : this.normaliseColDef(x);
            }
        });
        this.gridColDefs = columnDefs;
    }
    /**
     * Si flex y width estan definidos, flex tiene mas prioridad e ignora el width
     *
     * De ambos, solo el width se normaliza (200)
     * @summary la Normalizacion de una columna consiste en dejar parametros por default(width, soertable, flex,...)
     */
    normaliseColDef(param) {
        const cd = param;
        cd.suppressMovable = true;
        cd.width = param.width ?? 200;
        cd.minWidth = param.minWidth ?? 150;
        cd.sortable = true;
        cd.resizable = param.resizable ?? false;
        cd.flex = param.flex;
        return cd;
    }
    normaliseStringToColDef(param) {
        const cd = { field: param };
        this.normaliseColDef(cd);
        return cd;
    }
    onGridReady() {
        this.gridApi = this.grid.api;
        this.gridReady.emit(this.gridApi);
    }
    sizeChanged(size) {
        this.grid.api.paginationSetPageSize(size);
    }
}
GridControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridControlComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
GridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: GridControlComponent, selector: "sof-grid-control", inputs: { gridRowOptions: "gridRowOptions", gridRowData: "gridRowData", gridColDefsRaw: "gridColDefsRaw", gridPaginationPageSize: "gridPaginationPageSize", gridPagination: "gridPagination", gridRowSelection: "gridRowSelection", localeText: "localeText", gridAnimateRows: "gridAnimateRows", gridPageSizeEditable: "gridPageSizeEditable", gridPageSizeText: "gridPageSizeText", gridChecboxesToSelection: "gridChecboxesToSelection", rowId: "rowId", isRowSelectableFn: "isRowSelectableFn" }, outputs: { gridReady: "gridReady" }, viewQueries: [{ propertyName: "grid", first: true, predicate: AgGridAngular, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n        [getRowId]=\"getRowId\"\r\n        [isRowSelectable]=\"isRowSelectableFn\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n</ng-container>\r\n", styles: [""], components: [{ type: i1.AgGridAngular, selector: "ag-grid-angular", inputs: ["statusBar", "sideBar", "suppressContextMenu", "preventDefaultOnContextMenu", "allowContextMenuWithControlKey", "suppressMenuHide", "enableBrowserTooltips", "tooltipShowDelay", "tooltipHideDelay", "tooltipMouseTrack", "popupParent", "copyHeadersToClipboard", "copyGroupHeadersToClipboard", "clipboardDelimiter", "suppressCopyRowsToClipboard", "suppressCopySingleCellRanges", "suppressLastEmptyLineOnPaste", "suppressClipboardPaste", "suppressClipboardApi", "columnDefs", "defaultColDef", "defaultColGroupDef", "columnTypes", "maintainColumnOrder", "suppressFieldDotNotation", "deltaColumnMode", "applyColumnDefOrder", "immutableColumns", "suppressSetColumnStateEvents", "suppressColumnStateEvents", "colWidth", "minColWidth", "maxColWidth", "headerHeight", "groupHeaderHeight", "floatingFiltersHeight", "pivotHeaderHeight", "pivotGroupHeaderHeight", "allowDragFromColumnsToolPanel", "suppressMovableColumns", "suppressColumnMoveAnimation", "suppressDragLeaveHidesColumns", "colResizeDefault", "suppressAutoSize", "autoSizePadding", "skipHeaderOnAutoSize", "components", "frameworkComponents", "editType", "singleClickEdit", "suppressClickEdit", "readOnlyEdit", "stopEditingWhenCellsLoseFocus", "enterMovesDown", "enterMovesDownAfterEdit", "undoRedoCellEditing", "undoRedoCellEditingLimit", "stopEditingWhenGridLosesFocus", "defaultCsvExportParams", "suppressCsvExport", "defaultExcelExportParams", "suppressExcelExport", "excelStyles", "defaultExportParams", "quickFilterText", "cacheQuickFilter", "excludeChildrenWhenTreeDataFiltering", "enableCharts", "chartThemes", "customChartThemes", "chartThemeOverrides", "loadingCellRenderer", "loadingCellRendererFramework", "loadingCellRendererParams", "loadingCellRendererSelector", "localeText", "masterDetail", "keepDetailRows", "keepDetailRowsCount", "detailCellRenderer", "detailCellRendererFramework", "detailCellRendererParams", "detailRowHeight", "detailRowAutoHeight", "context", "alignedGrids", "tabIndex", "rowBuffer", "valueCache", "valueCacheNeverExpires", "enableCellExpressions", "suppressParentsInRowNodes", "suppressTouch", "suppressFocusAfterRefresh", "suppressAsyncEvents", "suppressBrowserResizeObserver", "suppressPropertyNamesCheck", "suppressChangeDetection", "debug", "overlayLoadingTemplate", "loadingOverlayComponent", "loadingOverlayComponentFramework", "loadingOverlayComponentParams", "suppressLoadingOverlay", "overlayNoRowsTemplate", "noRowsOverlayComponent", "noRowsOverlayComponentFramework", "noRowsOverlayComponentParams", "suppressNoRowsOverlay", "pagination", "paginationPageSize", "paginationAutoPageSize", "paginateChildRows", "suppressPaginationPanel", "pivotMode", "pivotPanelShow", "pivotColumnGroupTotals", "pivotRowTotals", "pivotSuppressAutoColumn", "suppressExpandablePivotGroups", "functionsReadOnly", "aggFuncs", "suppressAggFuncInHeader", "suppressAggAtRootLevel", "aggregateOnlyChangedColumns", "suppressAggFilteredOnly", "removePivotHeaderRowWhenSingleValueColumn", "animateRows", "enableCellChangeFlash", "cellFlashDelay", "cellFadeDelay", "domLayout", "ensureDomOrder", "enableRtl", "suppressColumnVirtualisation", "suppressMaxRenderedRowRestriction", "suppressRowVirtualisation", "rowDragManaged", "suppressRowDrag", "suppressMoveWhenRowDragging", "rowDragEntireRow", "rowDragMultiRow", "fullWidthCellRenderer", "fullWidthCellRendererFramework", "fullWidthCellRendererParams", "embedFullWidthRows", "deprecatedEmbedFullWidthRows", "groupDisplayType", "groupDefaultExpanded", "autoGroupColumnDef", "groupMaintainOrder", "groupSelectsChildren", "groupAggFiltering", "groupIncludeFooter", "groupIncludeTotalFooter", "groupSuppressBlankHeader", "groupSelectsFiltered", "showOpenedGroup", "groupRemoveSingleChildren", "groupRemoveLowestSingleChildren", "groupHideOpenParents", "rowGroupPanelShow", "groupRowRenderer", "groupRowRendererFramework", "groupRowRendererParams", "suppressMakeColumnVisibleAfterUnGroup", "treeData", "groupRowInnerRenderer", "groupRowInnerRendererFramework", "groupMultiAutoColumn", "groupUseEntireRow", "groupSuppressAutoColumn", "rememberGroupStateWhenNewData", "pinnedTopRowData", "pinnedBottomRowData", "rowModelType", "rowData", "immutableData", "asyncTransactionWaitMillis", "suppressModelUpdateAfterUpdateTransaction", "deltaRowDataMode", "batchUpdateWaitMillis", "datasource", "cacheOverflowSize", "infiniteInitialRowCount", "serverSideStoreType", "cacheBlockSize", "maxBlocksInCache", "maxConcurrentDatasourceRequests", "blockLoadDebounceMillis", "purgeClosedRowNodes", "serverSideDatasource", "serverSideSortingAlwaysResets", "serverSideFilteringAlwaysResets", "suppressEnterpriseResetOnNewColumns", "viewportDatasource", "viewportRowModelPageSize", "viewportRowModelBufferSize", "alwaysShowHorizontalScroll", "alwaysShowVerticalScroll", "debounceVerticalScrollbar", "suppressHorizontalScroll", "suppressScrollOnNewData", "suppressScrollWhenPopupsAreOpen", "suppressAnimationFrame", "suppressMiddleClickScrolls", "suppressPreventDefaultOnMouseWheel", "scrollbarWidth", "rowSelection", "rowMultiSelectWithClick", "suppressRowDeselection", "suppressRowClickSelection", "suppressCellSelection", "suppressCellFocus", "suppressMultiRangeSelection", "enableCellTextSelection", "enableRangeSelection", "enableRangeHandle", "enableFillHandle", "fillHandleDirection", "suppressClearOnFillReduction", "sortingOrder", "accentedSort", "unSortIcon", "suppressMultiSort", "alwaysMultiSort", "multiSortKey", "suppressMaintainUnsortedOrder", "icons", "rowHeight", "rowStyle", "rowClass", "rowClassRules", "suppressRowHoverHighlight", "suppressRowTransform", "columnHoverHighlight", "deltaSort", "treeDataDisplayType", "angularCompileRows", "angularCompileFilters", "functionsPassive", "enableGroupEdit", "getContextMenuItems", "getMainMenuItems", "postProcessPopup", "processCellForClipboard", "processHeaderForClipboard", "processGroupHeaderForClipboard", "processCellFromClipboard", "sendToClipboard", "processDataFromClipboard", "isExternalFilterPresent", "doesExternalFilterPass", "getChartToolbarItems", "createChartContainer", "navigateToNextHeader", "tabToNextHeader", "navigateToNextCell", "tabToNextCell", "suppressKeyboardEvent", "localeTextFunc", "getLocaleText", "getDocument", "paginationNumberFormatter", "groupRowAggNodes", "getGroupRowAgg", "isGroupOpenByDefault", "initialGroupOrderComparator", "defaultGroupOrderComparator", "processSecondaryColDef", "processSecondaryColGroupDef", "getDataPath", "defaultGroupSortComparator", "getChildCount", "getServerSideStoreParams", "isServerSideGroupOpenByDefault", "isApplyServerSideTransaction", "isServerSideGroup", "getServerSideGroupKey", "getBusinessKeyForNode", "getRowNodeId", "getRowId", "resetRowDataOnUpdate", "processRowPostCreate", "isRowSelectable", "isRowMaster", "fillOperation", "postSort", "postSortRows", "getRowStyle", "getRowClass", "getRowHeight", "isFullWidthCell", "isFullWidthRow", "gridOptions", "modules"], outputs: ["toolPanelVisibleChanged", "pasteStart", "pasteEnd", "columnVisible", "columnPinned", "columnResized", "columnMoved", "columnValueChanged", "columnPivotModeChanged", "columnPivotChanged", "columnGroupOpened", "newColumnsLoaded", "gridColumnsChanged", "displayedColumnsChanged", "virtualColumnsChanged", "columnEverythingChanged", "componentStateChanged", "cellValueChanged", "cellEditRequest", "rowValueChanged", "cellEditingStarted", "cellEditingStopped", "rowEditingStarted", "rowEditingStopped", "filterOpened", "filterChanged", "filterModified", "chartCreated", "chartRangeSelectionChanged", "chartOptionsChanged", "chartDestroyed", "cellKeyDown", "cellKeyPress", "gridReady", "firstDataRendered", "gridSizeChanged", "modelUpdated", "virtualRowRemoved", "viewportChanged", "bodyScroll", "bodyScrollEnd", "dragStarted", "dragStopped", "paginationChanged", "rowDragEnter", "rowDragMove", "rowDragLeave", "rowDragEnd", "columnRowGroupChanged", "rowGroupOpened", "expandOrCollapseAll", "pinnedRowDataChanged", "rowDataChanged", "rowDataUpdated", "asyncTransactionsFlushed", "cellClicked", "cellDoubleClicked", "cellFocused", "cellMouseOver", "cellMouseOut", "cellMouseDown", "rowClicked", "rowDoubleClicked", "rowSelected", "selectionChanged", "cellContextMenu", "rangeSelectionChanged", "sortChanged", "columnRowGroupChangeRequest", "columnPivotChangeRequest", "columnValueChangeRequest", "columnAggFuncChangeRequest"] }, { type: i2.PageSizeComponent, selector: "app-page-size", inputs: ["pageSize", "pageSizeText"], outputs: ["sizeChangeEvent"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-grid-control', template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n        [getRowId]=\"getRowId\"\r\n        [isRowSelectable]=\"isRowSelectableFn\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n</ng-container>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { gridReady: [{
                type: Output
            }], gridRowOptions: [{
                type: Input
            }], gridRowData: [{
                type: Input
            }], gridColDefsRaw: [{
                type: Input
            }], gridPaginationPageSize: [{
                type: Input
            }], gridPagination: [{
                type: Input
            }], gridRowSelection: [{
                type: Input
            }], localeText: [{
                type: Input
            }], gridAnimateRows: [{
                type: Input
            }], gridPageSizeEditable: [{
                type: Input
            }], gridPageSizeText: [{
                type: Input
            }], grid: [{
                type: ViewChild,
                args: [AgGridAngular]
            }], gridChecboxesToSelection: [{
                type: Input
            }], rowId: [{
                type: Input
            }], isRowSelectableFn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvZ3JpZC1jb250cm9sL2dyaWQtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9ncmlkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxFQUlULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR2hELFNBQVM7QUFDVCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTs7Ozs7QUFPcEQsTUFBTSxPQUFPLG9CQUFvQjtJQXFDL0IsWUFDVSxNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQW5DekIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUE7UUFFeEMsbUJBQWMsR0FBWSxLQUFLLENBQUE7UUFFL0IsbUJBQWMsR0FBcUMsRUFBRSxDQUFDO1FBQ3RELDJCQUFzQixHQUFXLEVBQUUsQ0FBQztRQUNwQyxtQkFBYyxHQUFZLElBQUksQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ00scUJBQWdCLEdBQW1DLFFBQVEsQ0FBQztRQUU1RCxlQUFVLEdBQXlCLGlCQUFpQixDQUFBO1FBQ3BELG9CQUFlLEdBQVcsS0FBSyxDQUFBO1FBQy9CLHlCQUFvQixHQUFXLElBQUksQ0FBQTtRQUNuQyxxQkFBZ0IsR0FBVyxrQkFBa0IsQ0FBQTtRQUc3Qyw2QkFBd0IsR0FBWSxJQUFJLENBQUE7UUFHeEMsVUFB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cG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBZ0dyaWRBbmd1bGFyIH0gZnJvbSAnYWctZ3JpZC1hbmd1bGFyJztcclxuaW1wb3J0IHsgQ29sRGVmLCBDb2xHcm91cERlZiwgR2V0Um93SWRGdW5jLCBHZXRSb3dJZFBhcmFtcywgR3JpZEFwaSwgUm93Tm9kZSB9IGZyb20gJ2FnLWdyaWQtY29tbXVuaXR5JztcclxuXHJcbi8vSWRpb21hc1xyXG5pbXBvcnQgeyBBR19HUklEX0xPQ0FMRV9FUyB9IGZyb20gJy4vbGFuZy9sb2NhbGUuZXMnXHJcbmltcG9ydCB7IEFHX0dSSURfTE9DQUxFX0VOIH0gZnJvbSAnLi9sYW5nL2xvY2FsZS5lbidcclxuaW1wb3J0IHsgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLWdyaWQtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ3JpZC1jb250cm9sLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBncmlkQXBpITogR3JpZEFwaTtcclxuXHJcbiAgQE91dHB1dCgpIGdyaWRSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8R3JpZEFwaT4oKVxyXG5cclxuICBASW5wdXQoKSBncmlkUm93T3B0aW9uczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgQElucHV0KCkgZ3JpZFJvd0RhdGE6IGFueVtdIHwgbnVsbDtcclxuICBASW5wdXQoKSBncmlkQ29sRGVmc1JhdzogKENvbERlZiB8IENvbEdyb3VwRGVmIHxzdHJpbmcpW10gPSBbXTtcclxuICBASW5wdXQoKSBncmlkUGFnaW5hdGlvblBhZ2VTaXplOiBudW1iZXIgPSAxMDtcclxuICBASW5wdXQoKSBncmlkUGFnaW5hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgZ3JpZFJvd1NlbGVjdGlvbiBpbmRpY2EgZWwgdGlwbyBkZSBzZWxlY2Npb24gZW4gbGEgZ3JpbGxhXHJcbiAgICogQHBhcmFtIHNpbmdsZSBzb2xvIHNlIHB1ZWRlIHNlbGVjY2lvbmFyIHVuYSBmaWxhIGEgbGEgdmV6XHJcbiAgICogQHBhcmFtIG11bHRpcGxlIHNlIHB1ZWRlbiBzZWxlY2Npb25hciB2YXJpYXMgZmlsYXNcclxuICAgKi9cclxuICBASW5wdXQoKSBncmlkUm93U2VsZWN0aW9uOiAnc2luZ2xlJyB8ICdtdWx0aXBsZScgfCAnbm9uZScgPSAnc2luZ2xlJztcclxuICBncmlkQ29sRGVmczogKENvbERlZiB8IENvbEdyb3VwRGVmKVtdO1xyXG4gIEBJbnB1dCgpIGxvY2FsZVRleHQ6e1trZXk6c3RyaW5nXTpzdHJpbmd9ID0gQUdfR1JJRF9MT0NBTEVfRU5cclxuICBASW5wdXQoKSBncmlkQW5pbWF0ZVJvd3M6IGJvb2xlYW49IGZhbHNlXHJcbiAgQElucHV0KCkgZ3JpZFBhZ2VTaXplRWRpdGFibGU6IGJvb2xlYW49IHRydWVcclxuICBASW5wdXQoKSBncmlkUGFnZVNpemVUZXh0OiBzdHJpbmcgPSBcIkZpbGFzIHBvciBwYWdpbmFcIlxyXG4gIEBWaWV3Q2hpbGQoQWdHcmlkQW5ndWxhcikgZ3JpZDogQWdHcmlkQW5ndWxhcjtcclxuXHJcbiAgQElucHV0KCkgZ3JpZENoZWNib3hlc1RvU2VsZWN0aW9uOiBib29sZWFuID0gdHJ1ZVxyXG4gIHJlcmVuZGVyOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSByb3dJZDogc3RyaW5nID0gJ2lkJztcclxuXHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgZnVuY2lvbiBxdWUgZGV2dWVsdmUgc2kgbXVlc3RyYSB1IG9jdWx0YSBlbCBjaGVja2JveCBkZSBzZWxlY2Npb24gbGEgY2FkYSBmaWxhXHJcbiAgICogQHBhcmFtIHJvd05vZGUgbGEgZmlsYSBkZSBsYSBncmlsbGEuIHJvd05vZGUuZGF0YSBlcyBlbCBpdGVtIGRlIGxhIGZpbGEgZGVsIGFycmF5IHF1ZSBzZSBsZSBwYXNhIGEgbGEgZ3JpbGxhXHJcbiAgICogQGV4YW1wbGUgW2lzUm9xU2VsZWN0YWJsZUZuXT1cInNlbGVjdGFibGVGblwiIC8vU2kgZXMgbmVjZXNhcmlvICcuLi49XCJzZWxlY3RhYmxlRm4uYmluZCh0aGlzKVwiJ1xyXG4gICAqIEBleGFtcGxlIHNlbGVjdGFibGVGbihyb3dOb2RlOiBSb3dOb2RlKTogYm9vbGVhbiB7IHJldHVybiByb3dOb2RlLmRhdGE/LmNvbnZJZCA9PSAnSjEwJzsgfVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGlzUm93U2VsZWN0YWJsZUZuPzogKHJvd05vZGU6IFJvd05vZGUpID0+IGJvb2xlYW47XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybUNvbHVtblJhd3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVzcGVybyBhIHF1ZSBjYW1iaWUgZWwgaW5wdXQgZGUgbG9jYWxlIHBhcmEgY2FtYmlhciBsYSBwcm9waWVkYWQgXHJcbiAgICAgKiBsb2NhbGVUZXh0IHkgdm9sdmVyIGEgcmVuZGVyaXphciBhZy1ncmlkIGNvbiBlc3RlIG51ZXZvIGxvY2FsZVxyXG4gICAgICovXHJcbiAgICBjb25zdCBjdXJyZW50TG9jYWxlID0gY2hhbmdlc1snbG9jYWxlVGV4dCddPy5jdXJyZW50VmFsdWVcclxuICAgIGlmKGN1cnJlbnRMb2NhbGUgJiYgY3VycmVudExvY2FsZSAhPSBjaGFuZ2VzWydsb2NhbGVUZXh0J10ucHJldmlvdXNWYWx1ZSl7XHJcbiAgICAgIHRoaXMuY2hhbmdlTG9jYWxlKGN1cnJlbnRMb2NhbGUpXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbWJpYSBlbCBsb2NhbGVUZXh0IGVuIGxhIGdyaWxsYVxyXG4gICAqIEBwYXJhbSBsb2NhbGUgb2JqZXRvIGNvbiBsYXMgdHJhZHVjY2lvbmVzIHF1ZSBuZWNlc2l0byBlbiBsYSBjb25maWd1cmFjaW9uIGRlIGxhIGdyaWxsYVxyXG4gICAqIEBleGFtcGxlICBcclxuICAgKiBgYGB0c1xyXG4gICAqIHsgXHJcbiAgICAgKiBvZjogJ2RlJyxcclxuICAgICAgcGFnZTogJ1BhZ2luYScsXHJcbiAgICAgIG5leHRQYWdlOiAnU2lndWllbnRlJyxcclxuICAgICAgbGFzdFBhZ2U6ICdBbnRlcmlvcicsXHJcbiAgICAgIGZpcnN0UGFnZTogJ1ByaW1lcmEgcGFnaW5hJyxcclxuICAgICAgcHJldmlvdXNQYWdlOiAnUGFnaW5hIHByZXZpYScsXHJcbiAgICB9XHJcbiAgICogYGBgXHJcbiAgICovXHJcblxyXG4gIGNoYW5nZUxvY2FsZShsb2NhbGU/OmFueSl7XHJcbiAgICBpZihsb2NhbGUpe1xyXG4gICAgICB0aGlzLmxvY2FsZVRleHQgPSBsb2NhbGVcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvY2FsZVRleHQgPSAodGhpcy5sb2NhbGVUZXh0ID09IEFHX0dSSURfTE9DQUxFX0VOKSBcclxuICAgICAgPyBBR19HUklEX0xPQ0FMRV9FUyA6IEFHX0dSSURfTE9DQUxFX0VOXHJcbiAgICB9XHJcbiAgICB0aGlzLmRvUmVyZW5kZXIoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0b2RvIHBhcmEgdm9sdmVyIGEgcmVuZGVyaXphciBsYSBncmlsbGEgY29uIHVuIG5naWYgZW4gZWwgY29tcG9uZW50ZSBkZSBhZy1ncmlkXHJcbiAgICovXHJcbiAgZG9SZXJlbmRlcigpe1xyXG4gICAgdGhpcy5yZXJlbmRlciA9IHRydWU7XHJcbiAgICB0aGlzLl9jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLnJlcmVuZGVyID0gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG5cclxuICB0cmFuc2Zvcm1Db2x1bW5SYXdzKCkge1xyXG4gICAgY29uc3QgY29sdW1uRGVmczogQ29sRGVmW10gPSB0aGlzLmdyaWRDb2xEZWZzUmF3Lm1hcChcclxuICAgICAgKHg6IChzdHJpbmd8Q29sRGVmKSwgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgLy9BZ3JlZ28gY2hlY2tib3ggc2VsZWN0aW9uIGVuIHByaW1lciBjb2x1bW5hXHJcbiAgICAgICAgaWYgKGkgPT0gMCAmJiB0aGlzLmdyaWRDaGVjYm94ZXNUb1NlbGVjdGlvbikge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RDb2xEZWYgPSB0eXBlb2YoeCkgPT0gJ3N0cmluZycgPyBcclxuICAgICAgICAgICAgICB0aGlzLm5vcm1hbGlzZVN0cmluZ1RvQ29sRGVmKHgpIDogdGhpcy5ub3JtYWxpc2VDb2xEZWYoeClcclxuICAgICAgICAgIGZpcnN0Q29sRGVmLmhlYWRlckNoZWNrYm94U2VsZWN0aW9uPSB0cnVlXHJcbiAgICAgICAgICBmaXJzdENvbERlZi5jaGVja2JveFNlbGVjdGlvbj0gdHJ1ZVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gZmlyc3RDb2xEZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZih4KSA9PSAnc3RyaW5nJyA/XHJcbiAgICAgICAgICAgICAgdGhpcy5ub3JtYWxpc2VTdHJpbmdUb0NvbERlZih4KSA6IHRoaXMubm9ybWFsaXNlQ29sRGVmKHgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuZ3JpZENvbERlZnMgPSBjb2x1bW5EZWZzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2kgZmxleCB5IHdpZHRoIGVzdGFuIGRlZmluaWRvcywgZmxleCB0aWVuZSBtYXMgcHJpb3JpZGFkIGUgaWdub3JhIGVsIHdpZHRoXHJcbiAgICogXHJcbiAgICogRGUgYW1ib3MsIHNvbG8gZWwgd2lkdGggc2Ugbm9ybWFsaXphICgyMDApXHJcbiAgICogQHN1bW1hcnkgbGEgTm9ybWFsaXphY2lvbiBkZSB1bmEgY29sdW1uYSBjb25zaXN0ZSBlbiBkZWphciBwYXJhbWV0cm9zIHBvciBkZWZhdWx0KHdpZHRoLCBzb2VydGFibGUsIGZsZXgsLi4uKVxyXG4gICAqL1xyXG4gIG5vcm1hbGlzZUNvbERlZihwYXJhbTogQ29sRGVmKXtcclxuICAgIGNvbnN0IGNkOiBDb2xEZWYgPSBwYXJhbTtcclxuICAgIGNkLnN1cHByZXNzTW92YWJsZSA9IHRydWU7XHJcbiAgICBjZC53aWR0aCA9IHBhcmFtLndpZHRoID8/IDIwMDtcclxuICAgIGNkLm1pbldpZHRoID0gcGFyYW0ubWluV2lkdGggPz8gMTUwO1xyXG4gICAgY2Quc29ydGFibGUgPSB0cnVlO1xyXG4gICAgY2QucmVzaXphYmxlID0gcGFyYW0ucmVzaXphYmxlID8/IGZhbHNlIDtcclxuICAgIGNkLmZsZXggPSBwYXJhbS5mbGV4O1xyXG4gICAgcmV0dXJuIGNkO1xyXG4gIH1cclxuXHJcbiAgbm9ybWFsaXNlU3RyaW5nVG9Db2xEZWYocGFyYW06IHN0cmluZyk6Q29sRGVme1xyXG4gICAgY29uc3QgY2Q6IENvbERlZiA9IHtmaWVsZDpwYXJhbX1cclxuICAgIHRoaXMubm9ybWFsaXNlQ29sRGVmKGNkKSBcclxuICAgIHJldHVybiBjZDtcclxuICB9XHJcblxyXG4gIG9uR3JpZFJlYWR5KCkge1xyXG4gICAgdGhpcy5ncmlkQXBpID0gdGhpcy5ncmlkLmFwaTtcclxuICAgIHRoaXMuZ3JpZFJlYWR5LmVtaXQodGhpcy5ncmlkQXBpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRSb3dJZDogR2V0Um93SWRGdW5jID0gKHBhcmFtczogR2V0Um93SWRQYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBwYXJhbXMuZGF0YVt0aGlzLnJvd0lkXTsgXHJcbiAgfTtcclxuXHJcbiAgc2l6ZUNoYW5nZWQoc2l6ZTogbnVtYmVyKXtcclxuICAgIHRoaXMuZ3JpZC5hcGkucGFnaW5hdGlvblNldFBhZ2VTaXplKHNpemUpO1xyXG4gIH1cclxuICBcclxufVxyXG4iLCJcclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZXJlbmRlciAmJiAoZ3JpZFJvd0RhdGEgJiYgZ3JpZENvbERlZnMpXCI+XHJcbiAgICA8YWctZ3JpZC1hbmd1bGFyXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIlxyXG4gICAgICAgIGNsYXNzPVwiYWctdGhlbWUtbWF0ZXJpYWxcIlxyXG4gICAgICAgIFtyb3dEYXRhXT1cImdyaWRSb3dEYXRhXCJcclxuICAgICAgICBbY29sdW1uRGVmc109XCJncmlkQ29sRGVmc1wiXHJcbiAgICAgICAgW3BhZ2luYXRpb25dPVwiZ3JpZFBhZ2luYXRpb25cIlxyXG4gICAgICAgIFtwYWdpbmF0aW9uUGFnZVNpemVdPVwiZ3JpZFBhZ2luYXRpb25QYWdlU2l6ZVwiXHJcbiAgICAgICAgW3Jvd1NlbGVjdGlvbl09XCJncmlkUm93U2VsZWN0aW9uXCJcclxuICAgICAgICAoZ3JpZFJlYWR5KT1cIm9uR3JpZFJlYWR5KClcIlxyXG4gICAgICAgIFtzdXBwcmVzc1Jvd0NsaWNrU2VsZWN0aW9uXT1cInRydWVcIlxyXG4gICAgICAgIFtkb21MYXlvdXRdPVwiJ2F1dG9IZWlnaHQnXCJcclxuICAgICAgICBbbG9jYWxlVGV4dF09XCJsb2NhbGVUZXh0XCJcclxuICAgICAgICBbYW5pbWF0ZVJvd3NdPVwiZ3JpZEFuaW1hdGVSb3dzXCJcclxuICAgICAgICBbZ2V0Um93SWRdPVwiZ2V0Um93SWRcIlxyXG4gICAgICAgIFtpc1Jvd1NlbGVjdGFibGVdPVwiaXNSb3dTZWxlY3RhYmxlRm5cIlxyXG4gICAgPlxyXG4gICAgPC9hZy1ncmlkLWFuZ3VsYXI+XHJcbiAgICA8YXBwLXBhZ2Utc2l6ZSAqbmdJZj1cImdyaWRQYWdlU2l6ZUVkaXRhYmxlXCIgXHJcbiAgICBbcGFnZVNpemVUZXh0XT1cImdyaWRQYWdlU2l6ZVRleHRcIiBcclxuICAgIChzaXplQ2hhbmdlRXZlbnQpPVwic2l6ZUNoYW5nZWQoJGV2ZW50KVwiID48L2FwcC1wYWdlLXNpemU+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=