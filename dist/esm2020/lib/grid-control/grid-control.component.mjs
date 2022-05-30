import { Component, Input, ViewChild, } from '@angular/core';
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
    }
    sizeChanged(size) {
        this.grid.api.paginationSetPageSize(size);
    }
}
GridControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
GridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: GridControlComponent, selector: "app-grid-control", inputs: { gridRowOptions: "gridRowOptions", gridRowData: "gridRowData", gridColDefsRaw: "gridColDefsRaw", gridPaginationPageSize: "gridPaginationPageSize", gridPagination: "gridPagination", gridRowSelection: "gridRowSelection", localeText: "localeText", gridAnimateRows: "gridAnimateRows", gridPageSizeEditable: "gridPageSizeEditable", gridPageSizeText: "gridPageSizeText", gridChecboxesToSelection: "gridChecboxesToSelection" }, viewQueries: [{ propertyName: "grid", first: true, predicate: AgGridAngular, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n</ng-container>\r\n", styles: [""], components: [{ type: i1.AgGridAngular, selector: "ag-grid-angular", inputs: ["statusBar", "sideBar", "suppressContextMenu", "preventDefaultOnContextMenu", "allowContextMenuWithControlKey", "suppressMenuHide", "enableBrowserTooltips", "tooltipShowDelay", "tooltipHideDelay", "tooltipMouseTrack", "popupParent", "copyHeadersToClipboard", "copyGroupHeadersToClipboard", "clipboardDelimiter", "suppressCopyRowsToClipboard", "suppressLastEmptyLineOnPaste", "suppressClipboardPaste", "suppressClipboardApi", "columnDefs", "defaultColDef", "defaultColGroupDef", "columnTypes", "maintainColumnOrder", "suppressFieldDotNotation", "deltaColumnMode", "applyColumnDefOrder", "immutableColumns", "suppressSetColumnStateEvents", "suppressColumnStateEvents", "colWidth", "minColWidth", "maxColWidth", "headerHeight", "groupHeaderHeight", "floatingFiltersHeight", "pivotHeaderHeight", "pivotGroupHeaderHeight", "allowDragFromColumnsToolPanel", "suppressMovableColumns", "suppressColumnMoveAnimation", "suppressDragLeaveHidesColumns", "colResizeDefault", "suppressAutoSize", "autoSizePadding", "skipHeaderOnAutoSize", "components", "frameworkComponents", "editType", "singleClickEdit", "suppressClickEdit", "readOnlyEdit", "stopEditingWhenCellsLoseFocus", "enterMovesDown", "enterMovesDownAfterEdit", "undoRedoCellEditing", "undoRedoCellEditingLimit", "stopEditingWhenGridLosesFocus", "defaultCsvExportParams", "suppressCsvExport", "defaultExcelExportParams", "suppressExcelExport", "excelStyles", "defaultExportParams", "quickFilterText", "cacheQuickFilter", "excludeChildrenWhenTreeDataFiltering", "enableCharts", "chartThemes", "customChartThemes", "chartThemeOverrides", "loadingCellRenderer", "loadingCellRendererFramework", "loadingCellRendererParams", "loadingCellRendererSelector", "localeText", "masterDetail", "keepDetailRows", "keepDetailRowsCount", "detailCellRenderer", "detailCellRendererFramework", "detailCellRendererParams", "detailRowHeight", "detailRowAutoHeight", "context", "alignedGrids", "tabIndex", "rowBuffer", "valueCache", "valueCacheNeverExpires", "enableCellExpressions", "suppressParentsInRowNodes", "suppressTouch", "suppressFocusAfterRefresh", "suppressAsyncEvents", "suppressBrowserResizeObserver", "suppressPropertyNamesCheck", "suppressChangeDetection", "debug", "overlayLoadingTemplate", "loadingOverlayComponent", "loadingOverlayComponentFramework", "loadingOverlayComponentParams", "suppressLoadingOverlay", "overlayNoRowsTemplate", "noRowsOverlayComponent", "noRowsOverlayComponentFramework", "noRowsOverlayComponentParams", "suppressNoRowsOverlay", "pagination", "paginationPageSize", "paginationAutoPageSize", "paginateChildRows", "suppressPaginationPanel", "pivotMode", "pivotPanelShow", "pivotColumnGroupTotals", "pivotRowTotals", "pivotSuppressAutoColumn", "suppressExpandablePivotGroups", "functionsReadOnly", "aggFuncs", "suppressAggFuncInHeader", "suppressAggAtRootLevel", "aggregateOnlyChangedColumns", "suppressAggFilteredOnly", "animateRows", "enableCellChangeFlash", "cellFlashDelay", "cellFadeDelay", "domLayout", "ensureDomOrder", "enableRtl", "suppressColumnVirtualisation", "suppressMaxRenderedRowRestriction", "suppressRowVirtualisation", "rowDragManaged", "suppressRowDrag", "suppressMoveWhenRowDragging", "rowDragEntireRow", "rowDragMultiRow", "fullWidthCellRenderer", "fullWidthCellRendererFramework", "fullWidthCellRendererParams", "embedFullWidthRows", "deprecatedEmbedFullWidthRows", "groupDisplayType", "groupDefaultExpanded", "autoGroupColumnDef", "groupMaintainOrder", "groupSelectsChildren", "groupAggFiltering", "groupIncludeFooter", "groupIncludeTotalFooter", "groupSuppressBlankHeader", "groupSelectsFiltered", "showOpenedGroup", "groupRemoveSingleChildren", "groupRemoveLowestSingleChildren", "groupHideOpenParents", "rowGroupPanelShow", "groupRowRenderer", "groupRowRendererFramework", "groupRowRendererParams", "suppressMakeColumnVisibleAfterUnGroup", "treeData", "groupRowInnerRenderer", "groupRowInnerRendererFramework", "groupMultiAutoColumn", "groupUseEntireRow", "groupSuppressAutoColumn", "rememberGroupStateWhenNewData", "pinnedTopRowData", "pinnedBottomRowData", "rowModelType", "rowData", "immutableData", "asyncTransactionWaitMillis", "suppressModelUpdateAfterUpdateTransaction", "deltaRowDataMode", "batchUpdateWaitMillis", "datasource", "cacheOverflowSize", "infiniteInitialRowCount", "serverSideStoreType", "cacheBlockSize", "maxBlocksInCache", "maxConcurrentDatasourceRequests", "blockLoadDebounceMillis", "purgeClosedRowNodes", "serverSideDatasource", "serverSideSortingAlwaysResets", "serverSideFilteringAlwaysResets", "suppressEnterpriseResetOnNewColumns", "viewportDatasource", "viewportRowModelPageSize", "viewportRowModelBufferSize", "alwaysShowHorizontalScroll", "alwaysShowVerticalScroll", "debounceVerticalScrollbar", "suppressHorizontalScroll", "suppressScrollOnNewData", "suppressScrollWhenPopupsAreOpen", "suppressAnimationFrame", "suppressMiddleClickScrolls", "suppressPreventDefaultOnMouseWheel", "scrollbarWidth", "rowSelection", "rowMultiSelectWithClick", "suppressRowDeselection", "suppressRowClickSelection", "suppressCellSelection", "suppressCellFocus", "suppressMultiRangeSelection", "enableCellTextSelection", "enableRangeSelection", "enableRangeHandle", "enableFillHandle", "fillHandleDirection", "suppressClearOnFillReduction", "sortingOrder", "accentedSort", "unSortIcon", "suppressMultiSort", "alwaysMultiSort", "multiSortKey", "suppressMaintainUnsortedOrder", "icons", "rowHeight", "rowStyle", "rowClass", "rowClassRules", "suppressRowHoverHighlight", "suppressRowTransform", "columnHoverHighlight", "deltaSort", "treeDataDisplayType", "angularCompileRows", "angularCompileFilters", "functionsPassive", "enableGroupEdit", "getContextMenuItems", "getMainMenuItems", "postProcessPopup", "processCellForClipboard", "processHeaderForClipboard", "processGroupHeaderForClipboard", "processCellFromClipboard", "sendToClipboard", "processDataFromClipboard", "isExternalFilterPresent", "doesExternalFilterPass", "getChartToolbarItems", "createChartContainer", "navigateToNextHeader", "tabToNextHeader", "navigateToNextCell", "tabToNextCell", "suppressKeyboardEvent", "localeTextFunc", "getLocaleText", "getDocument", "paginationNumberFormatter", "groupRowAggNodes", "getGroupRowAgg", "isGroupOpenByDefault", "initialGroupOrderComparator", "defaultGroupOrderComparator", "processSecondaryColDef", "processSecondaryColGroupDef", "getDataPath", "defaultGroupSortComparator", "getChildCount", "getServerSideStoreParams", "isServerSideGroupOpenByDefault", "isApplyServerSideTransaction", "isServerSideGroup", "getServerSideGroupKey", "getBusinessKeyForNode", "getRowNodeId", "getRowId", "processRowPostCreate", "isRowSelectable", "isRowMaster", "fillOperation", "postSort", "postSortRows", "getRowStyle", "getRowClass", "getRowHeight", "isFullWidthCell", "isFullWidthRow", "gridOptions", "modules"], outputs: ["toolPanelVisibleChanged", "pasteStart", "pasteEnd", "columnVisible", "columnPinned", "columnResized", "columnMoved", "columnValueChanged", "columnPivotModeChanged", "columnPivotChanged", "columnGroupOpened", "newColumnsLoaded", "gridColumnsChanged", "displayedColumnsChanged", "virtualColumnsChanged", "columnEverythingChanged", "componentStateChanged", "cellValueChanged", "cellEditRequest", "rowValueChanged", "cellEditingStarted", "cellEditingStopped", "rowEditingStarted", "rowEditingStopped", "filterOpened", "filterChanged", "filterModified", "chartCreated", "chartRangeSelectionChanged", "chartOptionsChanged", "chartDestroyed", "cellKeyDown", "cellKeyPress", "gridReady", "firstDataRendered", "gridSizeChanged", "modelUpdated", "virtualRowRemoved", "viewportChanged", "bodyScroll", "bodyScrollEnd", "dragStarted", "dragStopped", "paginationChanged", "rowDragEnter", "rowDragMove", "rowDragLeave", "rowDragEnd", "columnRowGroupChanged", "rowGroupOpened", "expandOrCollapseAll", "pinnedRowDataChanged", "rowDataChanged", "rowDataUpdated", "asyncTransactionsFlushed", "cellClicked", "cellDoubleClicked", "cellFocused", "cellMouseOver", "cellMouseOut", "cellMouseDown", "rowClicked", "rowDoubleClicked", "rowSelected", "selectionChanged", "cellContextMenu", "rangeSelectionChanged", "sortChanged", "columnRowGroupChangeRequest", "columnPivotChangeRequest", "columnValueChangeRequest", "columnAggFuncChangeRequest"] }, { type: i2.PageSizeComponent, selector: "app-page-size", inputs: ["pageSize", "pageSizeText"], outputs: ["sizeChangeEvent"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-grid-control', template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n</ng-container>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { gridRowOptions: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvZ3JpZC1jb250cm9sL2dyaWQtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9ncmlkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxHQUlWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxTQUFTO0FBQ1QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0JBQWtCLENBQUE7QUFDbEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0JBQWtCLENBQUE7Ozs7O0FBUWxELE1BQU0sT0FBTyxvQkFBb0I7SUF3Qi9CLFlBQW9CLE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBckJwQyxtQkFBYyxHQUFZLEtBQUssQ0FBQTtRQUUvQixtQkFBYyxHQUFxQyxFQUFFLENBQUM7UUFDdEQsMkJBQXNCLEdBQVcsRUFBRSxDQUFDO1FBQ3BDLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBQ3hDOzs7O1dBSUc7UUFDTSxxQkFBZ0IsR0FBbUMsUUFBUSxDQUFDO1FBRTVELGVBQVUsR0FBeUIsaUJBQWlCLENBQUE7UUFDcEQsb0JBQWUsR0FBVyxLQUFLLENBQUE7UUFDL0IseUJBQW9CLEdBQVcsSUFBSSxDQUFBO1FBQ25DLHFCQUFnQixHQUFXLGtCQUFrQixDQUFBO1FBRzdDLDZCQUF3QixHQUFZLElBQUksQ0FBQTtJQUlqRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7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QUNULElBQUksQ0FBQyxPQUFPLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDN0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7O2lIQXBJVSxvQkFBb0I7cUdBQXBCLG9CQUFvQiw0Z0JBbUJwQixhQUFhLHFFQ3hDMUIsK3pCQXFCQTsyRkRBYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usa0JBQWtCO3dHQU9uQixjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxzQkFBc0I7c0JBQTlCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFNRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBRUcsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ29CLElBQUk7c0JBQTdCLFNBQVM7dUJBQUMsYUFBYTtnQkFFZix3QkFBd0I7c0JBQWhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWdHcmlkQW5ndWxhciB9IGZyb20gJ2FnLWdyaWQtYW5ndWxhcic7XHJcbmltcG9ydCB7IENvbERlZiwgQ29sR3JvdXBEZWYsIEdyaWRBcGkgfSBmcm9tICdhZy1ncmlkLWNvbW11bml0eSc7XHJcbi8vSWRpb21hc1xyXG5pbXBvcnQge0FHX0dSSURfTE9DQUxFX0VTfSBmcm9tICcuL2xhbmcvbG9jYWxlLmVzJ1xyXG5pbXBvcnQge0FHX0dSSURfTE9DQUxFX0VOfSBmcm9tICcuL2xhbmcvbG9jYWxlLmVuJ1xyXG5pbXBvcnQgeyBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZVNpemVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ncmlkLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dyaWQtY29udHJvbC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3JpZENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGdyaWRBcGkhOiBHcmlkQXBpO1xyXG5cclxuICBASW5wdXQoKSBncmlkUm93T3B0aW9uczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgQElucHV0KCkgZ3JpZFJvd0RhdGE6IGFueVtdIHwgbnVsbDtcclxuICBASW5wdXQoKSBncmlkQ29sRGVmc1JhdzogKENvbERlZiB8IENvbEdyb3VwRGVmIHxzdHJpbmcpW10gPSBbXTtcclxuICBASW5wdXQoKSBncmlkUGFnaW5hdGlvblBhZ2VTaXplOiBudW1iZXIgPSAxMDtcclxuICBASW5wdXQoKSBncmlkUGFnaW5hdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogQHN1bW1hcnkgZ3JpZFJvd1NlbGVjdGlvbiBpbmRpY2EgZWwgdGlwbyBkZSBzZWxlY2Npb24gZW4gbGEgZ3JpbGxhXHJcbiAgICogQHBhcmFtIHNpbmdsZSBzb2xvIHNlIHB1ZWRlIHNlbGVjY2lvbmFyIHVuYSBmaWxhIGEgbGEgdmV6XHJcbiAgICogQHBhcmFtIG11bHRpcGxlIHNlIHB1ZWRlbiBzZWxlY2Npb25hciB2YXJpYXMgZmlsYXNcclxuICAgKi9cclxuICBASW5wdXQoKSBncmlkUm93U2VsZWN0aW9uOiAnc2luZ2xlJyB8ICdtdWx0aXBsZScgfCAnbm9uZScgPSAnc2luZ2xlJztcclxuICBncmlkQ29sRGVmczogKENvbERlZiB8IENvbEdyb3VwRGVmKVtdO1xyXG4gIEBJbnB1dCgpIGxvY2FsZVRleHQ6e1trZXk6c3RyaW5nXTpzdHJpbmd9ID0gQUdfR1JJRF9MT0NBTEVfRU5cclxuICBASW5wdXQoKSBncmlkQW5pbWF0ZVJvd3M6IGJvb2xlYW49IGZhbHNlXHJcbiAgQElucHV0KCkgZ3JpZFBhZ2VTaXplRWRpdGFibGU6IGJvb2xlYW49IHRydWVcclxuICBASW5wdXQoKSBncmlkUGFnZVNpemVUZXh0OiBzdHJpbmcgPSBcIkZpbGFzIHBvciBwYWdpbmFcIlxyXG4gIEBWaWV3Q2hpbGQoQWdHcmlkQW5ndWxhcikgZ3JpZDogQWdHcmlkQW5ndWxhcjtcclxuXHJcbiAgQElucHV0KCkgZ3JpZENoZWNib3hlc1RvU2VsZWN0aW9uOiBib29sZWFuID0gdHJ1ZVxyXG4gIHJlcmVuZGVyOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1Db2x1bW5SYXdzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFc3Blcm8gYSBxdWUgY2FtYmllIGVsIGlucHV0IGRlIGxvY2FsZSBwYXJhIGNhbWJpYXIgbGEgcHJvcGllZGFkIFxyXG4gICAgICogbG9jYWxlVGV4dCB5IHZvbHZlciBhIHJlbmRlcml6YXIgYWctZ3JpZCBjb24gZXN0ZSBudWV2byBsb2NhbGVcclxuICAgICAqL1xyXG4gICAgY29uc3QgY3VycmVudExvY2FsZSA9IGNoYW5nZXNbJ2xvY2FsZVRleHQnXT8uY3VycmVudFZhbHVlXHJcbiAgICBpZihjdXJyZW50TG9jYWxlICYmIGN1cnJlbnRMb2NhbGUgIT0gY2hhbmdlc1snbG9jYWxlVGV4dCddLnByZXZpb3VzVmFsdWUpe1xyXG4gICAgICB0aGlzLmNoYW5nZUxvY2FsZShjdXJyZW50TG9jYWxlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYW1iaWEgZWwgbG9jYWxlVGV4dCBlbiBsYSBncmlsbGFcclxuICAgKiBAcGFyYW0gbG9jYWxlIG9iamV0byBjb24gbGFzIHRyYWR1Y2Npb25lcyBxdWUgbmVjZXNpdG8gZW4gbGEgY29uZmlndXJhY2lvbiBkZSBsYSBncmlsbGFcclxuICAgKiBAZXhhbXBsZSAgXHJcbiAgICogYGBgdHNcclxuICAgKiB7IFxyXG4gICAgICogb2Y6ICdkZScsXHJcbiAgICAgIHBhZ2U6ICdQYWdpbmEnLFxyXG4gICAgICBuZXh0UGFnZTogJ1NpZ3VpZW50ZScsXHJcbiAgICAgIGxhc3RQYWdlOiAnQW50ZXJpb3InLFxyXG4gICAgICBmaXJzdFBhZ2U6ICdQcmltZXJhIHBhZ2luYScsXHJcbiAgICAgIHByZXZpb3VzUGFnZTogJ1BhZ2luYSBwcmV2aWEnLFxyXG4gICAgfVxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG5cclxuICBjaGFuZ2VMb2NhbGUobG9jYWxlPzphbnkpe1xyXG4gICAgaWYobG9jYWxlKXtcclxuICAgICAgdGhpcy5sb2NhbGVUZXh0ID0gbG9jYWxlXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5sb2NhbGVUZXh0ID0gKHRoaXMubG9jYWxlVGV4dCA9PSBBR19HUklEX0xPQ0FMRV9FTikgXHJcbiAgICAgID8gQUdfR1JJRF9MT0NBTEVfRVMgOiBBR19HUklEX0xPQ0FMRV9FTlxyXG4gICAgfVxyXG4gICAgdGhpcy5kb1JlcmVuZGVyKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldG9kbyBwYXJhIHZvbHZlciBhIHJlbmRlcml6YXIgbGEgZ3JpbGxhIGNvbiB1biBuZ2lmIGVuIGVsIGNvbXBvbmVudGUgZGUgYWctZ3JpZFxyXG4gICAqL1xyXG4gIGRvUmVyZW5kZXIoKXtcclxuICAgIHRoaXMucmVyZW5kZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5fY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5yZXJlbmRlciA9IGZhbHNlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgdHJhbnNmb3JtQ29sdW1uUmF3cygpIHtcclxuICAgIGNvbnN0IGNvbHVtbkRlZnM6IENvbERlZltdID0gdGhpcy5ncmlkQ29sRGVmc1Jhdy5tYXAoXHJcbiAgICAgICh4OiAoc3RyaW5nfENvbERlZiksIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIC8vQWdyZWdvIGNoZWNrYm94IHNlbGVjdGlvbiBlbiBwcmltZXIgY29sdW1uYVxyXG4gICAgICAgIGlmIChpID09IDAgJiYgdGhpcy5ncmlkQ2hlY2JveGVzVG9TZWxlY3Rpb24pIHtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0Q29sRGVmID0gdHlwZW9mKHgpID09ICdzdHJpbmcnID8gXHJcbiAgICAgICAgICAgICAgdGhpcy5ub3JtYWxpc2VTdHJpbmdUb0NvbERlZih4KSA6IHRoaXMubm9ybWFsaXNlQ29sRGVmKHgpXHJcbiAgICAgICAgICBmaXJzdENvbERlZi5oZWFkZXJDaGVja2JveFNlbGVjdGlvbj0gdHJ1ZVxyXG4gICAgICAgICAgZmlyc3RDb2xEZWYuY2hlY2tib3hTZWxlY3Rpb249IHRydWVcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIGZpcnN0Q29sRGVmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YoeCkgPT0gJ3N0cmluZycgP1xyXG4gICAgICAgICAgICAgIHRoaXMubm9ybWFsaXNlU3RyaW5nVG9Db2xEZWYoeCkgOiB0aGlzLm5vcm1hbGlzZUNvbERlZih4KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmdyaWRDb2xEZWZzID0gY29sdW1uRGVmcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNpIGZsZXggeSB3aWR0aCBlc3RhbiBkZWZpbmlkb3MsIGZsZXggdGllbmUgbWFzIHByaW9yaWRhZCBlIGlnbm9yYSBlbCB3aWR0aFxyXG4gICAqIFxyXG4gICAqIERlIGFtYm9zLCBzb2xvIGVsIHdpZHRoIHNlIG5vcm1hbGl6YSAoMjAwKVxyXG4gICAqIEBzdW1tYXJ5IGxhIE5vcm1hbGl6YWNpb24gZGUgdW5hIGNvbHVtbmEgY29uc2lzdGUgZW4gZGVqYXIgcGFyYW1ldHJvcyBwb3IgZGVmYXVsdCh3aWR0aCwgc29lcnRhYmxlLCBmbGV4LC4uLilcclxuICAgKi9cclxuICBub3JtYWxpc2VDb2xEZWYocGFyYW06IENvbERlZil7XHJcbiAgICBjb25zdCBjZDogQ29sRGVmID0gcGFyYW07XHJcbiAgICBjZC5zdXBwcmVzc01vdmFibGUgPSB0cnVlO1xyXG4gICAgY2Qud2lkdGggPSBwYXJhbS53aWR0aCA/PyAyMDA7XHJcbiAgICBjZC5taW5XaWR0aCA9IHBhcmFtLm1pbldpZHRoID8/IDE1MDtcclxuICAgIGNkLnNvcnRhYmxlID0gdHJ1ZTtcclxuICAgIGNkLnJlc2l6YWJsZSA9IHBhcmFtLnJlc2l6YWJsZSA/PyBmYWxzZSA7XHJcbiAgICBjZC5mbGV4ID0gcGFyYW0uZmxleDtcclxuICAgIHJldHVybiBjZDtcclxuICB9XHJcblxyXG4gIG5vcm1hbGlzZVN0cmluZ1RvQ29sRGVmKHBhcmFtOiBzdHJpbmcpOkNvbERlZntcclxuICAgIGNvbnN0IGNkOiBDb2xEZWYgPSB7ZmllbGQ6cGFyYW19XHJcbiAgICB0aGlzLm5vcm1hbGlzZUNvbERlZihjZCkgXHJcbiAgICByZXR1cm4gY2Q7XHJcbiAgfVxyXG5cclxuICBvbkdyaWRSZWFkeSgpIHtcclxuICAgIHRoaXMuZ3JpZEFwaT0gdGhpcy5ncmlkLmFwaVxyXG4gIH1cclxuXHJcbiAgc2l6ZUNoYW5nZWQoc2l6ZTogbnVtYmVyKXtcclxuICAgIHRoaXMuZ3JpZC5hcGkucGFnaW5hdGlvblNldFBhZ2VTaXplKHNpemUpXHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsIlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIXJlcmVuZGVyICYmIChncmlkUm93RGF0YSAmJiBncmlkQ29sRGVmcylcIj5cclxuICAgIDxhZy1ncmlkLWFuZ3VsYXJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXHJcbiAgICAgICAgY2xhc3M9XCJhZy10aGVtZS1tYXRlcmlhbFwiXHJcbiAgICAgICAgW3Jvd0RhdGFdPVwiZ3JpZFJvd0RhdGFcIlxyXG4gICAgICAgIFtjb2x1bW5EZWZzXT1cImdyaWRDb2xEZWZzXCJcclxuICAgICAgICBbcGFnaW5hdGlvbl09XCJncmlkUGFnaW5hdGlvblwiXHJcbiAgICAgICAgW3BhZ2luYXRpb25QYWdlU2l6ZV09XCJncmlkUGFnaW5hdGlvblBhZ2VTaXplXCJcclxuICAgICAgICBbcm93U2VsZWN0aW9uXT1cImdyaWRSb3dTZWxlY3Rpb25cIlxyXG4gICAgICAgIChncmlkUmVhZHkpPVwib25HcmlkUmVhZHkoKVwiXHJcbiAgICAgICAgW3N1cHByZXNzUm93Q2xpY2tTZWxlY3Rpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgW2RvbUxheW91dF09XCInYXV0b0hlaWdodCdcIlxyXG4gICAgICAgIFtsb2NhbGVUZXh0XT1cImxvY2FsZVRleHRcIlxyXG4gICAgICAgIFthbmltYXRlUm93c109XCJncmlkQW5pbWF0ZVJvd3NcIlxyXG4gICAgPlxyXG4gICAgPC9hZy1ncmlkLWFuZ3VsYXI+XHJcbiAgICA8YXBwLXBhZ2Utc2l6ZSAqbmdJZj1cImdyaWRQYWdlU2l6ZUVkaXRhYmxlXCIgXHJcbiAgICBbcGFnZVNpemVUZXh0XT1cImdyaWRQYWdlU2l6ZVRleHRcIiBcclxuICAgIChzaXplQ2hhbmdlRXZlbnQpPVwic2l6ZUNoYW5nZWQoJGV2ZW50KVwiID48L2FwcC1wYWdlLXNpemU+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=