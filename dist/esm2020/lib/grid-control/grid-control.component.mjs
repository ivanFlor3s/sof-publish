import { Component, Input, ViewChild, Output, EventEmitter, } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
//Idiomas
import { AG_GRID_LOCALE_ES } from './lang/locale.es';
import { AG_GRID_LOCALE_EN } from './lang/locale.en';
import * as i0 from "@angular/core";
import * as i1 from "ag-grid-angular";
import * as i2 from "./components/page-size/page-size.component";
import * as i3 from "./components/pagination/pagination.component";
import * as i4 from "@angular/common";
export class GridControlComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.gridReady = new EventEmitter();
        this.pageChangeEvent = new EventEmitter();
        this.pageSize = 10;
        this.onMemorySearch = true;
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
        this.pageSize = size;
        this.grid.api.paginationSetPageSize(size);
    }
}
GridControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
GridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: GridControlComponent, selector: "sof-grid-control", inputs: { totalItems: "totalItems", onMemorySearch: "onMemorySearch", gridRowOptions: "gridRowOptions", gridRowData: "gridRowData", gridColDefsRaw: "gridColDefsRaw", gridPaginationPageSize: "gridPaginationPageSize", gridPagination: "gridPagination", gridRowSelection: "gridRowSelection", localeText: "localeText", gridAnimateRows: "gridAnimateRows", gridPageSizeEditable: "gridPageSizeEditable", gridPageSizeText: "gridPageSizeText", gridChecboxesToSelection: "gridChecboxesToSelection", rowId: "rowId", isRowSelectableFn: "isRowSelectableFn" }, outputs: { gridReady: "gridReady", pageChangeEvent: "pageChangeEvent" }, viewQueries: [{ propertyName: "grid", first: true, predicate: AgGridAngular, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination && onMemorySearch\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n        [getRowId]=\"getRowId\"\r\n        [isRowSelectable]=\"isRowSelectableFn\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPagination && onMemorySearch && gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n\r\n    <app-pagination \r\n        *ngIf=\"gridPagination && !onMemorySearch\"\r\n        (pageChangeEvent)=\"pageChangeEvent.emit($event)\"\r\n        [TotalItems]=\"totalItems\"\r\n        [PageSize]=\"pageSize\"\r\n        >\r\n    </app-pagination>\r\n</ng-container>\r\n", styles: [""], components: [{ type: i1.AgGridAngular, selector: "ag-grid-angular", inputs: ["statusBar", "sideBar", "suppressContextMenu", "preventDefaultOnContextMenu", "allowContextMenuWithControlKey", "suppressMenuHide", "enableBrowserTooltips", "tooltipShowDelay", "tooltipHideDelay", "tooltipMouseTrack", "popupParent", "copyHeadersToClipboard", "copyGroupHeadersToClipboard", "clipboardDelimiter", "suppressCopyRowsToClipboard", "suppressCopySingleCellRanges", "suppressLastEmptyLineOnPaste", "suppressClipboardPaste", "suppressClipboardApi", "columnDefs", "defaultColDef", "defaultColGroupDef", "columnTypes", "maintainColumnOrder", "suppressFieldDotNotation", "deltaColumnMode", "applyColumnDefOrder", "immutableColumns", "suppressSetColumnStateEvents", "suppressColumnStateEvents", "colWidth", "minColWidth", "maxColWidth", "headerHeight", "groupHeaderHeight", "floatingFiltersHeight", "pivotHeaderHeight", "pivotGroupHeaderHeight", "allowDragFromColumnsToolPanel", "suppressMovableColumns", "suppressColumnMoveAnimation", "suppressDragLeaveHidesColumns", "colResizeDefault", "suppressAutoSize", "autoSizePadding", "skipHeaderOnAutoSize", "components", "frameworkComponents", "editType", "singleClickEdit", "suppressClickEdit", "readOnlyEdit", "stopEditingWhenCellsLoseFocus", "enterMovesDown", "enterMovesDownAfterEdit", "undoRedoCellEditing", "undoRedoCellEditingLimit", "stopEditingWhenGridLosesFocus", "defaultCsvExportParams", "suppressCsvExport", "defaultExcelExportParams", "suppressExcelExport", "excelStyles", "defaultExportParams", "quickFilterText", "cacheQuickFilter", "excludeChildrenWhenTreeDataFiltering", "enableCharts", "chartThemes", "customChartThemes", "chartThemeOverrides", "loadingCellRenderer", "loadingCellRendererFramework", "loadingCellRendererParams", "loadingCellRendererSelector", "localeText", "masterDetail", "keepDetailRows", "keepDetailRowsCount", "detailCellRenderer", "detailCellRendererFramework", "detailCellRendererParams", "detailRowHeight", "detailRowAutoHeight", "context", "alignedGrids", "tabIndex", "rowBuffer", "valueCache", "valueCacheNeverExpires", "enableCellExpressions", "suppressParentsInRowNodes", "suppressTouch", "suppressFocusAfterRefresh", "suppressAsyncEvents", "suppressBrowserResizeObserver", "suppressPropertyNamesCheck", "suppressChangeDetection", "debug", "overlayLoadingTemplate", "loadingOverlayComponent", "loadingOverlayComponentFramework", "loadingOverlayComponentParams", "suppressLoadingOverlay", "overlayNoRowsTemplate", "noRowsOverlayComponent", "noRowsOverlayComponentFramework", "noRowsOverlayComponentParams", "suppressNoRowsOverlay", "pagination", "paginationPageSize", "paginationAutoPageSize", "paginateChildRows", "suppressPaginationPanel", "pivotMode", "pivotPanelShow", "pivotColumnGroupTotals", "pivotRowTotals", "pivotSuppressAutoColumn", "suppressExpandablePivotGroups", "functionsReadOnly", "aggFuncs", "suppressAggFuncInHeader", "suppressAggAtRootLevel", "aggregateOnlyChangedColumns", "suppressAggFilteredOnly", "removePivotHeaderRowWhenSingleValueColumn", "animateRows", "enableCellChangeFlash", "cellFlashDelay", "cellFadeDelay", "domLayout", "ensureDomOrder", "enableRtl", "suppressColumnVirtualisation", "suppressMaxRenderedRowRestriction", "suppressRowVirtualisation", "rowDragManaged", "suppressRowDrag", "suppressMoveWhenRowDragging", "rowDragEntireRow", "rowDragMultiRow", "fullWidthCellRenderer", "fullWidthCellRendererFramework", "fullWidthCellRendererParams", "embedFullWidthRows", "deprecatedEmbedFullWidthRows", "groupDisplayType", "groupDefaultExpanded", "autoGroupColumnDef", "groupMaintainOrder", "groupSelectsChildren", "groupAggFiltering", "groupIncludeFooter", "groupIncludeTotalFooter", "groupSuppressBlankHeader", "groupSelectsFiltered", "showOpenedGroup", "groupRemoveSingleChildren", "groupRemoveLowestSingleChildren", "groupHideOpenParents", "rowGroupPanelShow", "groupRowRenderer", "groupRowRendererFramework", "groupRowRendererParams", "suppressMakeColumnVisibleAfterUnGroup", "treeData", "groupRowInnerRenderer", "groupRowInnerRendererFramework", "groupMultiAutoColumn", "groupUseEntireRow", "groupSuppressAutoColumn", "rememberGroupStateWhenNewData", "pinnedTopRowData", "pinnedBottomRowData", "rowModelType", "rowData", "immutableData", "asyncTransactionWaitMillis", "suppressModelUpdateAfterUpdateTransaction", "deltaRowDataMode", "batchUpdateWaitMillis", "datasource", "cacheOverflowSize", "infiniteInitialRowCount", "serverSideStoreType", "cacheBlockSize", "maxBlocksInCache", "maxConcurrentDatasourceRequests", "blockLoadDebounceMillis", "purgeClosedRowNodes", "serverSideDatasource", "serverSideSortingAlwaysResets", "serverSideFilteringAlwaysResets", "suppressEnterpriseResetOnNewColumns", "viewportDatasource", "viewportRowModelPageSize", "viewportRowModelBufferSize", "alwaysShowHorizontalScroll", "alwaysShowVerticalScroll", "debounceVerticalScrollbar", "suppressHorizontalScroll", "suppressScrollOnNewData", "suppressScrollWhenPopupsAreOpen", "suppressAnimationFrame", "suppressMiddleClickScrolls", "suppressPreventDefaultOnMouseWheel", "scrollbarWidth", "rowSelection", "rowMultiSelectWithClick", "suppressRowDeselection", "suppressRowClickSelection", "suppressCellSelection", "suppressCellFocus", "suppressMultiRangeSelection", "enableCellTextSelection", "enableRangeSelection", "enableRangeHandle", "enableFillHandle", "fillHandleDirection", "suppressClearOnFillReduction", "sortingOrder", "accentedSort", "unSortIcon", "suppressMultiSort", "alwaysMultiSort", "multiSortKey", "suppressMaintainUnsortedOrder", "icons", "rowHeight", "rowStyle", "rowClass", "rowClassRules", "suppressRowHoverHighlight", "suppressRowTransform", "columnHoverHighlight", "deltaSort", "treeDataDisplayType", "angularCompileRows", "angularCompileFilters", "functionsPassive", "enableGroupEdit", "getContextMenuItems", "getMainMenuItems", "postProcessPopup", "processCellForClipboard", "processHeaderForClipboard", "processGroupHeaderForClipboard", "processCellFromClipboard", "sendToClipboard", "processDataFromClipboard", "isExternalFilterPresent", "doesExternalFilterPass", "getChartToolbarItems", "createChartContainer", "navigateToNextHeader", "tabToNextHeader", "navigateToNextCell", "tabToNextCell", "suppressKeyboardEvent", "localeTextFunc", "getLocaleText", "getDocument", "paginationNumberFormatter", "groupRowAggNodes", "getGroupRowAgg", "isGroupOpenByDefault", "initialGroupOrderComparator", "defaultGroupOrderComparator", "processSecondaryColDef", "processSecondaryColGroupDef", "getDataPath", "defaultGroupSortComparator", "getChildCount", "getServerSideStoreParams", "isServerSideGroupOpenByDefault", "isApplyServerSideTransaction", "isServerSideGroup", "getServerSideGroupKey", "getBusinessKeyForNode", "getRowNodeId", "getRowId", "resetRowDataOnUpdate", "processRowPostCreate", "isRowSelectable", "isRowMaster", "fillOperation", "postSort", "postSortRows", "getRowStyle", "getRowClass", "getRowHeight", "isFullWidthCell", "isFullWidthRow", "gridOptions", "modules"], outputs: ["toolPanelVisibleChanged", "pasteStart", "pasteEnd", "columnVisible", "columnPinned", "columnResized", "columnMoved", "columnValueChanged", "columnPivotModeChanged", "columnPivotChanged", "columnGroupOpened", "newColumnsLoaded", "gridColumnsChanged", "displayedColumnsChanged", "virtualColumnsChanged", "columnEverythingChanged", "componentStateChanged", "cellValueChanged", "cellEditRequest", "rowValueChanged", "cellEditingStarted", "cellEditingStopped", "rowEditingStarted", "rowEditingStopped", "filterOpened", "filterChanged", "filterModified", "chartCreated", "chartRangeSelectionChanged", "chartOptionsChanged", "chartDestroyed", "cellKeyDown", "cellKeyPress", "gridReady", "firstDataRendered", "gridSizeChanged", "modelUpdated", "virtualRowRemoved", "viewportChanged", "bodyScroll", "bodyScrollEnd", "dragStarted", "dragStopped", "paginationChanged", "rowDragEnter", "rowDragMove", "rowDragLeave", "rowDragEnd", "columnRowGroupChanged", "rowGroupOpened", "expandOrCollapseAll", "pinnedRowDataChanged", "rowDataChanged", "rowDataUpdated", "asyncTransactionsFlushed", "cellClicked", "cellDoubleClicked", "cellFocused", "cellMouseOver", "cellMouseOut", "cellMouseDown", "rowClicked", "rowDoubleClicked", "rowSelected", "selectionChanged", "cellContextMenu", "rangeSelectionChanged", "sortChanged", "columnRowGroupChangeRequest", "columnPivotChangeRequest", "columnValueChangeRequest", "columnAggFuncChangeRequest"] }, { type: i2.PageSizeComponent, selector: "app-page-size", inputs: ["pageSize", "pageSizeText"], outputs: ["sizeChangeEvent"] }, { type: i3.PaginationComponent, selector: "app-pagination", inputs: ["TotalItems", "PageSize"], outputs: ["pageChangeEvent"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-grid-control', template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination && onMemorySearch\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n        [getRowId]=\"getRowId\"\r\n        [isRowSelectable]=\"isRowSelectableFn\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPagination && onMemorySearch && gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n\r\n    <app-pagination \r\n        *ngIf=\"gridPagination && !onMemorySearch\"\r\n        (pageChangeEvent)=\"pageChangeEvent.emit($event)\"\r\n        [TotalItems]=\"totalItems\"\r\n        [PageSize]=\"pageSize\"\r\n        >\r\n    </app-pagination>\r\n</ng-container>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { gridReady: [{
                type: Output
            }], pageChangeEvent: [{
                type: Output
            }], totalItems: [{
                type: Input
            }], onMemorySearch: [{
                type: Input
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvZ3JpZC1jb250cm9sL2dyaWQtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9ncmlkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxFQUlULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR2hELFNBQVM7QUFDVCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTs7Ozs7O0FBUXBELE1BQU0sT0FBTyxvQkFBb0I7SUEwQy9CLFlBQ1UsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUF4Q3pCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFBO1FBQ3ZDLG9CQUFlLEdBQTRCLElBQUksWUFBWSxFQUFhLENBQUE7UUFHbEYsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUViLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG1CQUFjLEdBQVksS0FBSyxDQUFBO1FBRS9CLG1CQUFjLEdBQXFDLEVBQUUsQ0FBQztRQUN0RCwyQkFBc0IsR0FBVyxFQUFFLENBQUM7UUFDcEMsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFDeEM7Ozs7V0FJRztRQUNNLHFCQUFnQixHQUFtQyxRQUFRLENBQUM7UUFFNUQsZUFBVSxHQUF5QixpQkFBaUIsQ0FBQTtRQUNwRCxvQkFBZSxHQUFXLEtBQUssQ0FBQTtRQUMv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ZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBQ0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNvQixJQUFJO3NCQUE3QixTQUFTO3VCQUFDLGFBQWE7Z0JBRWYsd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFRRyxpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQWdHcmlkQW5ndWxhciB9IGZyb20gJ2FnLWdyaWQtYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbERlZiwgQ29sR3JvdXBEZWYsIEdldFJvd0lkRnVuYywgR2V0Um93SWRQYXJhbXMsIEdyaWRBcGksIFJvd05vZGUgfSBmcm9tICdhZy1ncmlkLWNvbW11bml0eSc7XHJcblxyXG4vL0lkaW9tYXNcclxuaW1wb3J0IHsgQUdfR1JJRF9MT0NBTEVfRVMgfSBmcm9tICcuL2xhbmcvbG9jYWxlLmVzJ1xyXG5pbXBvcnQgeyBBR19HUklEX0xPQ0FMRV9FTiB9IGZyb20gJy4vbGFuZy9sb2NhbGUuZW4nXHJcbmltcG9ydCB7IE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlRXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvZi1ncmlkLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dyaWQtY29udHJvbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgZ3JpZEFwaSE6IEdyaWRBcGk7XHJcblxyXG4gIEBPdXRwdXQoKSBncmlkUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRBcGk+KClcclxuICBAT3V0cHV0KCkgcGFnZUNoYW5nZUV2ZW50OiBFdmVudEVtaXR0ZXI8UGFnZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUV2ZW50PigpIFxyXG5cclxuICBASW5wdXQoKSB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgcGFnZVNpemU6IG51bWJlciA9IDEwO1xyXG5cclxuICBASW5wdXQoKSBvbk1lbW9yeVNlYXJjaDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgZ3JpZFJvd09wdGlvbnM6IGJvb2xlYW4gPSBmYWxzZVxyXG4gIEBJbnB1dCgpIGdyaWRSb3dEYXRhOiBhbnlbXSB8IG51bGw7XHJcbiAgQElucHV0KCkgZ3JpZENvbERlZnNSYXc6IChDb2xEZWYgfCBDb2xHcm91cERlZiB8c3RyaW5nKVtdID0gW107XHJcbiAgQElucHV0KCkgZ3JpZFBhZ2luYXRpb25QYWdlU2l6ZTogbnVtYmVyID0gMTA7XHJcbiAgQElucHV0KCkgZ3JpZFBhZ2luYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5IGdyaWRSb3dTZWxlY3Rpb24gaW5kaWNhIGVsIHRpcG8gZGUgc2VsZWNjaW9uIGVuIGxhIGdyaWxsYVxyXG4gICAqIEBwYXJhbSBzaW5nbGUgc29sbyBzZSBwdWVkZSBzZWxlY2Npb25hciB1bmEgZmlsYSBhIGxhIHZlelxyXG4gICAqIEBwYXJhbSBtdWx0aXBsZSBzZSBwdWVkZW4gc2VsZWNjaW9uYXIgdmFyaWFzIGZpbGFzXHJcbiAgICovXHJcbiAgQElucHV0KCkgZ3JpZFJvd1NlbGVjdGlvbjogJ3NpbmdsZScgfCAnbXVsdGlwbGUnIHwgJ25vbmUnID0gJ3NpbmdsZSc7XHJcbiAgZ3JpZENvbERlZnM6IChDb2xEZWYgfCBDb2xHcm91cERlZilbXTtcclxuICBASW5wdXQoKSBsb2NhbGVUZXh0Ontba2V5OnN0cmluZ106c3RyaW5nfSA9IEFHX0dSSURfTE9DQUxFX0VOXHJcbiAgQElucHV0KCkgZ3JpZEFuaW1hdGVSb3dzOiBib29sZWFuPSBmYWxzZVxyXG4gIEBJbnB1dCgpIGdyaWRQYWdlU2l6ZUVkaXRhYmxlOiBib29sZWFuID0gdHJ1ZVxyXG4gIEBJbnB1dCgpIGdyaWRQYWdlU2l6ZVRleHQ6IHN0cmluZyA9IFwiRmlsYXMgcG9yIHBhZ2luYVwiXHJcbiAgQFZpZXdDaGlsZChBZ0dyaWRBbmd1bGFyKSBncmlkOiBBZ0dyaWRBbmd1bGFyO1xyXG5cclxuICBASW5wdXQoKSBncmlkQ2hlY2JveGVzVG9TZWxlY3Rpb246IGJvb2xlYW4gPSB0cnVlXHJcbiAgcmVyZW5kZXI6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIHJvd0lkOiBzdHJpbmcgPSAnaWQnO1xyXG5cclxuICAvKipcclxuICAgKiBAc3VtbWFyeSBmdW5jaW9uIHF1ZSBkZXZ1ZWx2ZSBzaSBtdWVzdHJhIHUgb2N1bHRhIGVsIGNoZWNrYm94IGRlIHNlbGVjY2lvbiBsYSBjYWRhIGZpbGFcclxuICAgKiBAcGFyYW0gcm93Tm9kZSBsYSBmaWxhIGRlIGxhIGdyaWxsYS4gcm93Tm9kZS5kYXRhIGVzIGVsIGl0ZW0gZGUgbGEgZmlsYSBkZWwgYXJyYXkgcXVlIHNlIGxlIHBhc2EgYSBsYSBncmlsbGFcclxuICAgKiBAZXhhbXBsZSBbaXNSb3FTZWxlY3RhYmxlRm5dPVwic2VsZWN0YWJsZUZuXCIgLy9TaSBlcyBuZWNlc2FyaW8gJy4uLj1cInNlbGVjdGFibGVGbi5iaW5kKHRoaXMpXCInXHJcbiAgICogQGV4YW1wbGUgc2VsZWN0YWJsZUZuKHJvd05vZGU6IFJvd05vZGUpOiBib29sZWFuIHsgcmV0dXJuIHJvd05vZGUuZGF0YT8uY29udklkID09ICdKMTAnOyB9XHJcbiAgICovXHJcbiAgQElucHV0KCkgaXNSb3dTZWxlY3RhYmxlRm4/OiAocm93Tm9kZTogUm93Tm9kZSkgPT4gYm9vbGVhbjtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29sdW1uUmF3cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXNwZXJvIGEgcXVlIGNhbWJpZSBlbCBpbnB1dCBkZSBsb2NhbGUgcGFyYSBjYW1iaWFyIGxhIHByb3BpZWRhZCBcclxuICAgICAqIGxvY2FsZVRleHQgeSB2b2x2ZXIgYSByZW5kZXJpemFyIGFnLWdyaWQgY29uIGVzdGUgbnVldm8gbG9jYWxlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSBjaGFuZ2VzWydsb2NhbGVUZXh0J10/LmN1cnJlbnRWYWx1ZVxyXG4gICAgaWYoY3VycmVudExvY2FsZSAmJiBjdXJyZW50TG9jYWxlICE9IGNoYW5nZXNbJ2xvY2FsZVRleHQnXS5wcmV2aW91c1ZhbHVlKXtcclxuICAgICAgdGhpcy5jaGFuZ2VMb2NhbGUoY3VycmVudExvY2FsZSlcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FtYmlhIGVsIGxvY2FsZVRleHQgZW4gbGEgZ3JpbGxhXHJcbiAgICogQHBhcmFtIGxvY2FsZSBvYmpldG8gY29uIGxhcyB0cmFkdWNjaW9uZXMgcXVlIG5lY2VzaXRvIGVuIGxhIGNvbmZpZ3VyYWNpb24gZGUgbGEgZ3JpbGxhXHJcbiAgICogQGV4YW1wbGUgIFxyXG4gICAqIGBgYHRzXHJcbiAgICogeyBcclxuICAgICAqIG9mOiAnZGUnLFxyXG4gICAgICBwYWdlOiAnUGFnaW5hJyxcclxuICAgICAgbmV4dFBhZ2U6ICdTaWd1aWVudGUnLFxyXG4gICAgICBsYXN0UGFnZTogJ0FudGVyaW9yJyxcclxuICAgICAgZmlyc3RQYWdlOiAnUHJpbWVyYSBwYWdpbmEnLFxyXG4gICAgICBwcmV2aW91c1BhZ2U6ICdQYWdpbmEgcHJldmlhJyxcclxuICAgIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuXHJcbiAgY2hhbmdlTG9jYWxlKGxvY2FsZT86YW55KXtcclxuICAgIGlmKGxvY2FsZSl7XHJcbiAgICAgIHRoaXMubG9jYWxlVGV4dCA9IGxvY2FsZVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubG9jYWxlVGV4dCA9ICh0aGlzLmxvY2FsZVRleHQgPT0gQUdfR1JJRF9MT0NBTEVfRU4pIFxyXG4gICAgICA/IEFHX0dSSURfTE9DQUxFX0VTIDogQUdfR1JJRF9MT0NBTEVfRU5cclxuICAgIH1cclxuICAgIHRoaXMuZG9SZXJlbmRlcigpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRvZG8gcGFyYSB2b2x2ZXIgYSByZW5kZXJpemFyIGxhIGdyaWxsYSBjb24gdW4gbmdpZiBlbiBlbCBjb21wb25lbnRlIGRlIGFnLWdyaWRcclxuICAgKi9cclxuICBkb1JlcmVuZGVyKCl7XHJcbiAgICB0aGlzLnJlcmVuZGVyID0gdHJ1ZTtcclxuICAgIHRoaXMuX2NkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMucmVyZW5kZXIgPSBmYWxzZTtcclxuICB9XHJcbiAgXHJcblxyXG4gIHRyYW5zZm9ybUNvbHVtblJhd3MoKSB7XHJcbiAgICBjb25zdCBjb2x1bW5EZWZzOiBDb2xEZWZbXSA9IHRoaXMuZ3JpZENvbERlZnNSYXcubWFwKFxyXG4gICAgICAoeDogKHN0cmluZ3xDb2xEZWYpLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAvL0FncmVnbyBjaGVja2JveCBzZWxlY3Rpb24gZW4gcHJpbWVyIGNvbHVtbmFcclxuICAgICAgICBpZiAoaSA9PSAwICYmIHRoaXMuZ3JpZENoZWNib3hlc1RvU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdENvbERlZiA9IHR5cGVvZih4KSA9PSAnc3RyaW5nJyA/IFxyXG4gICAgICAgICAgICAgIHRoaXMubm9ybWFsaXNlU3RyaW5nVG9Db2xEZWYoeCkgOiB0aGlzLm5vcm1hbGlzZUNvbERlZih4KVxyXG4gICAgICAgICAgZmlyc3RDb2xEZWYuaGVhZGVyQ2hlY2tib3hTZWxlY3Rpb249IHRydWVcclxuICAgICAgICAgIGZpcnN0Q29sRGVmLmNoZWNrYm94U2VsZWN0aW9uPSB0cnVlXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBmaXJzdENvbERlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mKHgpID09ICdzdHJpbmcnID9cclxuICAgICAgICAgICAgICB0aGlzLm5vcm1hbGlzZVN0cmluZ1RvQ29sRGVmKHgpIDogdGhpcy5ub3JtYWxpc2VDb2xEZWYoeClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5ncmlkQ29sRGVmcyA9IGNvbHVtbkRlZnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaSBmbGV4IHkgd2lkdGggZXN0YW4gZGVmaW5pZG9zLCBmbGV4IHRpZW5lIG1hcyBwcmlvcmlkYWQgZSBpZ25vcmEgZWwgd2lkdGhcclxuICAgKiBcclxuICAgKiBEZSBhbWJvcywgc29sbyBlbCB3aWR0aCBzZSBub3JtYWxpemEgKDIwMClcclxuICAgKiBAc3VtbWFyeSBsYSBOb3JtYWxpemFjaW9uIGRlIHVuYSBjb2x1bW5hIGNvbnNpc3RlIGVuIGRlamFyIHBhcmFtZXRyb3MgcG9yIGRlZmF1bHQod2lkdGgsIHNvZXJ0YWJsZSwgZmxleCwuLi4pXHJcbiAgICovXHJcbiAgbm9ybWFsaXNlQ29sRGVmKHBhcmFtOiBDb2xEZWYpe1xyXG4gICAgY29uc3QgY2Q6IENvbERlZiA9IHBhcmFtO1xyXG4gICAgY2Quc3VwcHJlc3NNb3ZhYmxlID0gdHJ1ZTtcclxuICAgIGNkLndpZHRoID0gcGFyYW0ud2lkdGggPz8gMjAwO1xyXG4gICAgY2QubWluV2lkdGggPSBwYXJhbS5taW5XaWR0aCA/PyAxNTA7XHJcbiAgICBjZC5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICBjZC5yZXNpemFibGUgPSBwYXJhbS5yZXNpemFibGUgPz8gZmFsc2UgO1xyXG4gICAgY2QuZmxleCA9IHBhcmFtLmZsZXg7XHJcbiAgICByZXR1cm4gY2Q7XHJcbiAgfVxyXG5cclxuICBub3JtYWxpc2VTdHJpbmdUb0NvbERlZihwYXJhbTogc3RyaW5nKTpDb2xEZWZ7XHJcbiAgICBjb25zdCBjZDogQ29sRGVmID0ge2ZpZWxkOnBhcmFtfVxyXG4gICAgdGhpcy5ub3JtYWxpc2VDb2xEZWYoY2QpIFxyXG4gICAgcmV0dXJuIGNkO1xyXG4gIH1cclxuXHJcbiAgb25HcmlkUmVhZHkoKSB7XHJcbiAgICB0aGlzLmdyaWRBcGkgPSB0aGlzLmdyaWQuYXBpO1xyXG4gICAgdGhpcy5ncmlkUmVhZHkuZW1pdCh0aGlzLmdyaWRBcGkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJvd0lkOiBHZXRSb3dJZEZ1bmMgPSAocGFyYW1zOiBHZXRSb3dJZFBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIHBhcmFtcy5kYXRhW3RoaXMucm93SWRdOyBcclxuICB9O1xyXG5cclxuICBzaXplQ2hhbmdlZChzaXplOiBudW1iZXIpe1xyXG4gICAgdGhpcy5wYWdlU2l6ZSA9IHNpemVcclxuICAgIHRoaXMuZ3JpZC5hcGkucGFnaW5hdGlvblNldFBhZ2VTaXplKHNpemUpO1xyXG4gIH1cclxuICBcclxufVxyXG4iLCJcclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZXJlbmRlciAmJiAoZ3JpZFJvd0RhdGEgJiYgZ3JpZENvbERlZnMpXCI+XHJcbiAgICA8YWctZ3JpZC1hbmd1bGFyXHJcbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIlxyXG4gICAgICAgIGNsYXNzPVwiYWctdGhlbWUtbWF0ZXJpYWxcIlxyXG4gICAgICAgIFtyb3dEYXRhXT1cImdyaWRSb3dEYXRhXCJcclxuICAgICAgICBbY29sdW1uRGVmc109XCJncmlkQ29sRGVmc1wiXHJcbiAgICAgICAgW3BhZ2luYXRpb25dPVwiZ3JpZFBhZ2luYXRpb24gJiYgb25NZW1vcnlTZWFyY2hcIlxyXG4gICAgICAgIFtwYWdpbmF0aW9uUGFnZVNpemVdPVwiZ3JpZFBhZ2luYXRpb25QYWdlU2l6ZVwiXHJcbiAgICAgICAgW3Jvd1NlbGVjdGlvbl09XCJncmlkUm93U2VsZWN0aW9uXCJcclxuICAgICAgICAoZ3JpZFJlYWR5KT1cIm9uR3JpZFJlYWR5KClcIlxyXG4gICAgICAgIFtzdXBwcmVzc1Jvd0NsaWNrU2VsZWN0aW9uXT1cInRydWVcIlxyXG4gICAgICAgIFtkb21MYXlvdXRdPVwiJ2F1dG9IZWlnaHQnXCJcclxuICAgICAgICBbbG9jYWxlVGV4dF09XCJsb2NhbGVUZXh0XCJcclxuICAgICAgICBbYW5pbWF0ZVJvd3NdPVwiZ3JpZEFuaW1hdGVSb3dzXCJcclxuICAgICAgICBbZ2V0Um93SWRdPVwiZ2V0Um93SWRcIlxyXG4gICAgICAgIFtpc1Jvd1NlbGVjdGFibGVdPVwiaXNSb3dTZWxlY3RhYmxlRm5cIlxyXG4gICAgPlxyXG4gICAgPC9hZy1ncmlkLWFuZ3VsYXI+XHJcbiAgICA8YXBwLXBhZ2Utc2l6ZSAqbmdJZj1cImdyaWRQYWdpbmF0aW9uICYmIG9uTWVtb3J5U2VhcmNoICYmIGdyaWRQYWdlU2l6ZUVkaXRhYmxlXCIgXHJcbiAgICBbcGFnZVNpemVUZXh0XT1cImdyaWRQYWdlU2l6ZVRleHRcIiBcclxuICAgIChzaXplQ2hhbmdlRXZlbnQpPVwic2l6ZUNoYW5nZWQoJGV2ZW50KVwiID48L2FwcC1wYWdlLXNpemU+XHJcblxyXG4gICAgPGFwcC1wYWdpbmF0aW9uIFxyXG4gICAgICAgICpuZ0lmPVwiZ3JpZFBhZ2luYXRpb24gJiYgIW9uTWVtb3J5U2VhcmNoXCJcclxuICAgICAgICAocGFnZUNoYW5nZUV2ZW50KT1cInBhZ2VDaGFuZ2VFdmVudC5lbWl0KCRldmVudClcIlxyXG4gICAgICAgIFtUb3RhbEl0ZW1zXT1cInRvdGFsSXRlbXNcIlxyXG4gICAgICAgIFtQYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgPC9hcHAtcGFnaW5hdGlvbj5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==