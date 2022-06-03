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
GridControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
GridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: GridControlComponent, selector: "sof-grid-control", inputs: { gridRowOptions: "gridRowOptions", gridRowData: "gridRowData", gridColDefsRaw: "gridColDefsRaw", gridPaginationPageSize: "gridPaginationPageSize", gridPagination: "gridPagination", gridRowSelection: "gridRowSelection", localeText: "localeText", gridAnimateRows: "gridAnimateRows", gridPageSizeEditable: "gridPageSizeEditable", gridPageSizeText: "gridPageSizeText", gridChecboxesToSelection: "gridChecboxesToSelection" }, outputs: { gridReady: "gridReady" }, viewQueries: [{ propertyName: "grid", first: true, predicate: AgGridAngular, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n</ng-container>\r\n", styles: [""], components: [{ type: i1.AgGridAngular, selector: "ag-grid-angular", inputs: ["statusBar", "sideBar", "suppressContextMenu", "preventDefaultOnContextMenu", "allowContextMenuWithControlKey", "suppressMenuHide", "enableBrowserTooltips", "tooltipShowDelay", "tooltipHideDelay", "tooltipMouseTrack", "popupParent", "copyHeadersToClipboard", "copyGroupHeadersToClipboard", "clipboardDelimiter", "suppressCopyRowsToClipboard", "suppressCopySingleCellRanges", "suppressLastEmptyLineOnPaste", "suppressClipboardPaste", "suppressClipboardApi", "columnDefs", "defaultColDef", "defaultColGroupDef", "columnTypes", "maintainColumnOrder", "suppressFieldDotNotation", "deltaColumnMode", "applyColumnDefOrder", "immutableColumns", "suppressSetColumnStateEvents", "suppressColumnStateEvents", "colWidth", "minColWidth", "maxColWidth", "headerHeight", "groupHeaderHeight", "floatingFiltersHeight", "pivotHeaderHeight", "pivotGroupHeaderHeight", "allowDragFromColumnsToolPanel", "suppressMovableColumns", "suppressColumnMoveAnimation", "suppressDragLeaveHidesColumns", "colResizeDefault", "suppressAutoSize", "autoSizePadding", "skipHeaderOnAutoSize", "components", "frameworkComponents", "editType", "singleClickEdit", "suppressClickEdit", "readOnlyEdit", "stopEditingWhenCellsLoseFocus", "enterMovesDown", "enterMovesDownAfterEdit", "undoRedoCellEditing", "undoRedoCellEditingLimit", "stopEditingWhenGridLosesFocus", "defaultCsvExportParams", "suppressCsvExport", "defaultExcelExportParams", "suppressExcelExport", "excelStyles", "defaultExportParams", "quickFilterText", "cacheQuickFilter", "excludeChildrenWhenTreeDataFiltering", "enableCharts", "chartThemes", "customChartThemes", "chartThemeOverrides", "loadingCellRenderer", "loadingCellRendererFramework", "loadingCellRendererParams", "loadingCellRendererSelector", "localeText", "masterDetail", "keepDetailRows", "keepDetailRowsCount", "detailCellRenderer", "detailCellRendererFramework", "detailCellRendererParams", "detailRowHeight", "detailRowAutoHeight", "context", "alignedGrids", "tabIndex", "rowBuffer", "valueCache", "valueCacheNeverExpires", "enableCellExpressions", "suppressParentsInRowNodes", "suppressTouch", "suppressFocusAfterRefresh", "suppressAsyncEvents", "suppressBrowserResizeObserver", "suppressPropertyNamesCheck", "suppressChangeDetection", "debug", "overlayLoadingTemplate", "loadingOverlayComponent", "loadingOverlayComponentFramework", "loadingOverlayComponentParams", "suppressLoadingOverlay", "overlayNoRowsTemplate", "noRowsOverlayComponent", "noRowsOverlayComponentFramework", "noRowsOverlayComponentParams", "suppressNoRowsOverlay", "pagination", "paginationPageSize", "paginationAutoPageSize", "paginateChildRows", "suppressPaginationPanel", "pivotMode", "pivotPanelShow", "pivotColumnGroupTotals", "pivotRowTotals", "pivotSuppressAutoColumn", "suppressExpandablePivotGroups", "functionsReadOnly", "aggFuncs", "suppressAggFuncInHeader", "suppressAggAtRootLevel", "aggregateOnlyChangedColumns", "suppressAggFilteredOnly", "removePivotHeaderRowWhenSingleValueColumn", "animateRows", "enableCellChangeFlash", "cellFlashDelay", "cellFadeDelay", "domLayout", "ensureDomOrder", "enableRtl", "suppressColumnVirtualisation", "suppressMaxRenderedRowRestriction", "suppressRowVirtualisation", "rowDragManaged", "suppressRowDrag", "suppressMoveWhenRowDragging", "rowDragEntireRow", "rowDragMultiRow", "fullWidthCellRenderer", "fullWidthCellRendererFramework", "fullWidthCellRendererParams", "embedFullWidthRows", "deprecatedEmbedFullWidthRows", "groupDisplayType", "groupDefaultExpanded", "autoGroupColumnDef", "groupMaintainOrder", "groupSelectsChildren", "groupAggFiltering", "groupIncludeFooter", "groupIncludeTotalFooter", "groupSuppressBlankHeader", "groupSelectsFiltered", "showOpenedGroup", "groupRemoveSingleChildren", "groupRemoveLowestSingleChildren", "groupHideOpenParents", "rowGroupPanelShow", "groupRowRenderer", "groupRowRendererFramework", "groupRowRendererParams", "suppressMakeColumnVisibleAfterUnGroup", "treeData", "groupRowInnerRenderer", "groupRowInnerRendererFramework", "groupMultiAutoColumn", "groupUseEntireRow", "groupSuppressAutoColumn", "rememberGroupStateWhenNewData", "pinnedTopRowData", "pinnedBottomRowData", "rowModelType", "rowData", "immutableData", "asyncTransactionWaitMillis", "suppressModelUpdateAfterUpdateTransaction", "deltaRowDataMode", "batchUpdateWaitMillis", "datasource", "cacheOverflowSize", "infiniteInitialRowCount", "serverSideStoreType", "cacheBlockSize", "maxBlocksInCache", "maxConcurrentDatasourceRequests", "blockLoadDebounceMillis", "purgeClosedRowNodes", "serverSideDatasource", "serverSideSortingAlwaysResets", "serverSideFilteringAlwaysResets", "suppressEnterpriseResetOnNewColumns", "viewportDatasource", "viewportRowModelPageSize", "viewportRowModelBufferSize", "alwaysShowHorizontalScroll", "alwaysShowVerticalScroll", "debounceVerticalScrollbar", "suppressHorizontalScroll", "suppressScrollOnNewData", "suppressScrollWhenPopupsAreOpen", "suppressAnimationFrame", "suppressMiddleClickScrolls", "suppressPreventDefaultOnMouseWheel", "scrollbarWidth", "rowSelection", "rowMultiSelectWithClick", "suppressRowDeselection", "suppressRowClickSelection", "suppressCellSelection", "suppressCellFocus", "suppressMultiRangeSelection", "enableCellTextSelection", "enableRangeSelection", "enableRangeHandle", "enableFillHandle", "fillHandleDirection", "suppressClearOnFillReduction", "sortingOrder", "accentedSort", "unSortIcon", "suppressMultiSort", "alwaysMultiSort", "multiSortKey", "suppressMaintainUnsortedOrder", "icons", "rowHeight", "rowStyle", "rowClass", "rowClassRules", "suppressRowHoverHighlight", "suppressRowTransform", "columnHoverHighlight", "deltaSort", "treeDataDisplayType", "angularCompileRows", "angularCompileFilters", "functionsPassive", "enableGroupEdit", "getContextMenuItems", "getMainMenuItems", "postProcessPopup", "processCellForClipboard", "processHeaderForClipboard", "processGroupHeaderForClipboard", "processCellFromClipboard", "sendToClipboard", "processDataFromClipboard", "isExternalFilterPresent", "doesExternalFilterPass", "getChartToolbarItems", "createChartContainer", "navigateToNextHeader", "tabToNextHeader", "navigateToNextCell", "tabToNextCell", "suppressKeyboardEvent", "localeTextFunc", "getLocaleText", "getDocument", "paginationNumberFormatter", "groupRowAggNodes", "getGroupRowAgg", "isGroupOpenByDefault", "initialGroupOrderComparator", "defaultGroupOrderComparator", "processSecondaryColDef", "processSecondaryColGroupDef", "getDataPath", "defaultGroupSortComparator", "getChildCount", "getServerSideStoreParams", "isServerSideGroupOpenByDefault", "isApplyServerSideTransaction", "isServerSideGroup", "getServerSideGroupKey", "getBusinessKeyForNode", "getRowNodeId", "getRowId", "resetRowDataOnUpdate", "processRowPostCreate", "isRowSelectable", "isRowMaster", "fillOperation", "postSort", "postSortRows", "getRowStyle", "getRowClass", "getRowHeight", "isFullWidthCell", "isFullWidthRow", "gridOptions", "modules"], outputs: ["toolPanelVisibleChanged", "pasteStart", "pasteEnd", "columnVisible", "columnPinned", "columnResized", "columnMoved", "columnValueChanged", "columnPivotModeChanged", "columnPivotChanged", "columnGroupOpened", "newColumnsLoaded", "gridColumnsChanged", "displayedColumnsChanged", "virtualColumnsChanged", "columnEverythingChanged", "componentStateChanged", "cellValueChanged", "cellEditRequest", "rowValueChanged", "cellEditingStarted", "cellEditingStopped", "rowEditingStarted", "rowEditingStopped", "filterOpened", "filterChanged", "filterModified", "chartCreated", "chartRangeSelectionChanged", "chartOptionsChanged", "chartDestroyed", "cellKeyDown", "cellKeyPress", "gridReady", "firstDataRendered", "gridSizeChanged", "modelUpdated", "virtualRowRemoved", "viewportChanged", "bodyScroll", "bodyScrollEnd", "dragStarted", "dragStopped", "paginationChanged", "rowDragEnter", "rowDragMove", "rowDragLeave", "rowDragEnd", "columnRowGroupChanged", "rowGroupOpened", "expandOrCollapseAll", "pinnedRowDataChanged", "rowDataChanged", "rowDataUpdated", "asyncTransactionsFlushed", "cellClicked", "cellDoubleClicked", "cellFocused", "cellMouseOver", "cellMouseOut", "cellMouseDown", "rowClicked", "rowDoubleClicked", "rowSelected", "selectionChanged", "cellContextMenu", "rangeSelectionChanged", "sortChanged", "columnRowGroupChangeRequest", "columnPivotChangeRequest", "columnValueChangeRequest", "columnAggFuncChangeRequest"] }, { type: i2.PageSizeComponent, selector: "app-page-size", inputs: ["pageSize", "pageSizeText"], outputs: ["sizeChangeEvent"] }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-grid-control', template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n</ng-container>\r\n", styles: [""] }]
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvZ3JpZC1jb250cm9sL2dyaWQtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9ncmlkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxFQUlULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWhELFNBQVM7QUFDVCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQTtBQUNsRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQTs7Ozs7QUFTbEQsTUFBTSxPQUFPLG9CQUFvQjtJQTBCL0IsWUFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUF2Qm5DLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFBO1FBRXhDLG1CQUFjLEdBQVksS0FBSyxDQUFBO1FBRS9CLG1CQUFjLEdBQXFDLEVBQUUsQ0FBQztRQUN0RCwyQkFBc0IsR0FBVyxFQUFFLENBQUM7UUFDcEMsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFDeEM7Ozs7V0FJRztRQUNNLHFCQUFnQixHQUFtQyxRQUFRLENBQUM7UUFFNUQsZUFBVSxHQUF5QixpQkFBaUIsQ0FBQTtRQUNwRCxvQkFBZSxHQUFXLEtBQUssQ0FBQTtRQUMvQix5QkFBb0IsR0FBVyxJQUFJLENBQUE7UUFDbkMscUJBQWdCLEdBQVcsa0JBQWtCLENBQUE7UUFHN0MsNkJBQXdCLEdBQVksSUFBSSxDQUFBO0lBSWpELENB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QUFFLENBQUMsQ0FBQTtRQUN4QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQTtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLENBQUM7O2lIQXZJVSxvQkFBb0I7cUdBQXBCLG9CQUFvQixpakJBcUJwQixhQUFhLHFFQzdDMUIsK3pCQXFCQTsyRkRHYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usa0JBQWtCO3dHQU9sQixTQUFTO3NCQUFsQixNQUFNO2dCQUVFLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLHNCQUFzQjtzQkFBOUIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQU1HLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFFRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csb0JBQW9CO3NCQUE1QixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDb0IsSUFBSTtzQkFBN0IsU0FBUzt1QkFBQyxhQUFhO2dCQUVmLHdCQUF3QjtzQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFnR3JpZEFuZ3VsYXIgfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBDb2xEZWYsIENvbEdyb3VwRGVmLCBHcmlkQXBpIH0gZnJvbSAnYWctZ3JpZC1jb21tdW5pdHknO1xyXG4vL0lkaW9tYXNcclxuaW1wb3J0IHtBR19HUklEX0xPQ0FMRV9FU30gZnJvbSAnLi9sYW5nL2xvY2FsZS5lcydcclxuaW1wb3J0IHtBR19HUklEX0xPQ0FMRV9FTn0gZnJvbSAnLi9sYW5nL2xvY2FsZS5lbidcclxuaW1wb3J0IHsgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VTaXplQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgR3JpZEFwaUNvbnRyb2wgfSBmcm9tICcuL2ludGVyZmFjZXMvZ3JpZC1hcGktY29udHJvbCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLWdyaWQtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dyaWQtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ3JpZC1jb250cm9sLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgZ3JpZEFwaSE6IEdyaWRBcGk7XHJcblxyXG4gIEBPdXRwdXQoKSBncmlkUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPEdyaWRBcGk+KClcclxuXHJcbiAgQElucHV0KCkgZ3JpZFJvd09wdGlvbnM6IGJvb2xlYW4gPSBmYWxzZVxyXG4gIEBJbnB1dCgpIGdyaWRSb3dEYXRhOiBhbnlbXSB8IG51bGw7XHJcbiAgQElucHV0KCkgZ3JpZENvbERlZnNSYXc6IChDb2xEZWYgfCBDb2xHcm91cERlZiB8c3RyaW5nKVtdID0gW107XHJcbiAgQElucHV0KCkgZ3JpZFBhZ2luYXRpb25QYWdlU2l6ZTogbnVtYmVyID0gMTA7XHJcbiAgQElucHV0KCkgZ3JpZFBhZ2luYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIEBzdW1tYXJ5IGdyaWRSb3dTZWxlY3Rpb24gaW5kaWNhIGVsIHRpcG8gZGUgc2VsZWNjaW9uIGVuIGxhIGdyaWxsYVxyXG4gICAqIEBwYXJhbSBzaW5nbGUgc29sbyBzZSBwdWVkZSBzZWxlY2Npb25hciB1bmEgZmlsYSBhIGxhIHZlelxyXG4gICAqIEBwYXJhbSBtdWx0aXBsZSBzZSBwdWVkZW4gc2VsZWNjaW9uYXIgdmFyaWFzIGZpbGFzXHJcbiAgICovXHJcbiAgQElucHV0KCkgZ3JpZFJvd1NlbGVjdGlvbjogJ3NpbmdsZScgfCAnbXVsdGlwbGUnIHwgJ25vbmUnID0gJ3NpbmdsZSc7XHJcbiAgZ3JpZENvbERlZnM6IChDb2xEZWYgfCBDb2xHcm91cERlZilbXTtcclxuICBASW5wdXQoKSBsb2NhbGVUZXh0Ontba2V5OnN0cmluZ106c3RyaW5nfSA9IEFHX0dSSURfTE9DQUxFX0VOXHJcbiAgQElucHV0KCkgZ3JpZEFuaW1hdGVSb3dzOiBib29sZWFuPSBmYWxzZVxyXG4gIEBJbnB1dCgpIGdyaWRQYWdlU2l6ZUVkaXRhYmxlOiBib29sZWFuPSB0cnVlXHJcbiAgQElucHV0KCkgZ3JpZFBhZ2VTaXplVGV4dDogc3RyaW5nID0gXCJGaWxhcyBwb3IgcGFnaW5hXCJcclxuICBAVmlld0NoaWxkKEFnR3JpZEFuZ3VsYXIpIGdyaWQ6IEFnR3JpZEFuZ3VsYXI7XHJcblxyXG4gIEBJbnB1dCgpIGdyaWRDaGVjYm94ZXNUb1NlbGVjdGlvbjogYm9vbGVhbiA9IHRydWVcclxuICByZXJlbmRlcjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNmb3JtQ29sdW1uUmF3cygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXNwZXJvIGEgcXVlIGNhbWJpZSBlbCBpbnB1dCBkZSBsb2NhbGUgcGFyYSBjYW1iaWFyIGxhIHByb3BpZWRhZCBcclxuICAgICAqIGxvY2FsZVRleHQgeSB2b2x2ZXIgYSByZW5kZXJpemFyIGFnLWdyaWQgY29uIGVzdGUgbnVldm8gbG9jYWxlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSBjaGFuZ2VzWydsb2NhbGVUZXh0J10/LmN1cnJlbnRWYWx1ZVxyXG4gICAgaWYoY3VycmVudExvY2FsZSAmJiBjdXJyZW50TG9jYWxlICE9IGNoYW5nZXNbJ2xvY2FsZVRleHQnXS5wcmV2aW91c1ZhbHVlKXtcclxuICAgICAgdGhpcy5jaGFuZ2VMb2NhbGUoY3VycmVudExvY2FsZSlcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FtYmlhIGVsIGxvY2FsZVRleHQgZW4gbGEgZ3JpbGxhXHJcbiAgICogQHBhcmFtIGxvY2FsZSBvYmpldG8gY29uIGxhcyB0cmFkdWNjaW9uZXMgcXVlIG5lY2VzaXRvIGVuIGxhIGNvbmZpZ3VyYWNpb24gZGUgbGEgZ3JpbGxhXHJcbiAgICogQGV4YW1wbGUgIFxyXG4gICAqIGBgYHRzXHJcbiAgICogeyBcclxuICAgICAqIG9mOiAnZGUnLFxyXG4gICAgICBwYWdlOiAnUGFnaW5hJyxcclxuICAgICAgbmV4dFBhZ2U6ICdTaWd1aWVudGUnLFxyXG4gICAgICBsYXN0UGFnZTogJ0FudGVyaW9yJyxcclxuICAgICAgZmlyc3RQYWdlOiAnUHJpbWVyYSBwYWdpbmEnLFxyXG4gICAgICBwcmV2aW91c1BhZ2U6ICdQYWdpbmEgcHJldmlhJyxcclxuICAgIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuXHJcbiAgY2hhbmdlTG9jYWxlKGxvY2FsZT86YW55KXtcclxuICAgIGlmKGxvY2FsZSl7XHJcbiAgICAgIHRoaXMubG9jYWxlVGV4dCA9IGxvY2FsZVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubG9jYWxlVGV4dCA9ICh0aGlzLmxvY2FsZVRleHQgPT0gQUdfR1JJRF9MT0NBTEVfRU4pIFxyXG4gICAgICA/IEFHX0dSSURfTE9DQUxFX0VTIDogQUdfR1JJRF9MT0NBTEVfRU5cclxuICAgIH1cclxuICAgIHRoaXMuZG9SZXJlbmRlcigpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRvZG8gcGFyYSB2b2x2ZXIgYSByZW5kZXJpemFyIGxhIGdyaWxsYSBjb24gdW4gbmdpZiBlbiBlbCBjb21wb25lbnRlIGRlIGFnLWdyaWRcclxuICAgKi9cclxuICBkb1JlcmVuZGVyKCl7XHJcbiAgICB0aGlzLnJlcmVuZGVyID0gdHJ1ZTtcclxuICAgIHRoaXMuX2NkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMucmVyZW5kZXIgPSBmYWxzZTtcclxuICB9XHJcbiAgXHJcblxyXG4gIHRyYW5zZm9ybUNvbHVtblJhd3MoKSB7XHJcbiAgICBjb25zdCBjb2x1bW5EZWZzOiBDb2xEZWZbXSA9IHRoaXMuZ3JpZENvbERlZnNSYXcubWFwKFxyXG4gICAgICAoeDogKHN0cmluZ3xDb2xEZWYpLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAvL0FncmVnbyBjaGVja2JveCBzZWxlY3Rpb24gZW4gcHJpbWVyIGNvbHVtbmFcclxuICAgICAgICBpZiAoaSA9PSAwICYmIHRoaXMuZ3JpZENoZWNib3hlc1RvU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICBjb25zdCBmaXJzdENvbERlZiA9IHR5cGVvZih4KSA9PSAnc3RyaW5nJyA/IFxyXG4gICAgICAgICAgICAgIHRoaXMubm9ybWFsaXNlU3RyaW5nVG9Db2xEZWYoeCkgOiB0aGlzLm5vcm1hbGlzZUNvbERlZih4KVxyXG4gICAgICAgICAgZmlyc3RDb2xEZWYuaGVhZGVyQ2hlY2tib3hTZWxlY3Rpb249IHRydWVcclxuICAgICAgICAgIGZpcnN0Q29sRGVmLmNoZWNrYm94U2VsZWN0aW9uPSB0cnVlXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBmaXJzdENvbERlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mKHgpID09ICdzdHJpbmcnID9cclxuICAgICAgICAgICAgICB0aGlzLm5vcm1hbGlzZVN0cmluZ1RvQ29sRGVmKHgpIDogdGhpcy5ub3JtYWxpc2VDb2xEZWYoeClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5ncmlkQ29sRGVmcyA9IGNvbHVtbkRlZnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaSBmbGV4IHkgd2lkdGggZXN0YW4gZGVmaW5pZG9zLCBmbGV4IHRpZW5lIG1hcyBwcmlvcmlkYWQgZSBpZ25vcmEgZWwgd2lkdGhcclxuICAgKiBcclxuICAgKiBEZSBhbWJvcywgc29sbyBlbCB3aWR0aCBzZSBub3JtYWxpemEgKDIwMClcclxuICAgKiBAc3VtbWFyeSBsYSBOb3JtYWxpemFjaW9uIGRlIHVuYSBjb2x1bW5hIGNvbnNpc3RlIGVuIGRlamFyIHBhcmFtZXRyb3MgcG9yIGRlZmF1bHQod2lkdGgsIHNvZXJ0YWJsZSwgZmxleCwuLi4pXHJcbiAgICovXHJcbiAgbm9ybWFsaXNlQ29sRGVmKHBhcmFtOiBDb2xEZWYpe1xyXG4gICAgY29uc3QgY2Q6IENvbERlZiA9IHBhcmFtO1xyXG4gICAgY2Quc3VwcHJlc3NNb3ZhYmxlID0gdHJ1ZTtcclxuICAgIGNkLndpZHRoID0gcGFyYW0ud2lkdGggPz8gMjAwO1xyXG4gICAgY2QubWluV2lkdGggPSBwYXJhbS5taW5XaWR0aCA/PyAxNTA7XHJcbiAgICBjZC5zb3J0YWJsZSA9IHRydWU7XHJcbiAgICBjZC5yZXNpemFibGUgPSBwYXJhbS5yZXNpemFibGUgPz8gZmFsc2UgO1xyXG4gICAgY2QuZmxleCA9IHBhcmFtLmZsZXg7XHJcbiAgICByZXR1cm4gY2Q7XHJcbiAgfVxyXG5cclxuICBub3JtYWxpc2VTdHJpbmdUb0NvbERlZihwYXJhbTogc3RyaW5nKTpDb2xEZWZ7XHJcbiAgICBjb25zdCBjZDogQ29sRGVmID0ge2ZpZWxkOnBhcmFtfVxyXG4gICAgdGhpcy5ub3JtYWxpc2VDb2xEZWYoY2QpIFxyXG4gICAgcmV0dXJuIGNkO1xyXG4gIH1cclxuXHJcbiAgb25HcmlkUmVhZHkoKSB7XHJcbiAgICB0aGlzLmdyaWRBcGk9IHRoaXMuZ3JpZC5hcGlcclxuICAgIHRoaXMuZ3JpZFJlYWR5LmVtaXQodGhpcy5ncmlkQXBpKVxyXG4gIH1cclxuXHJcbiAgc2l6ZUNoYW5nZWQoc2l6ZTogbnVtYmVyKXtcclxuICAgIHRoaXMuZ3JpZC5hcGkucGFnaW5hdGlvblNldFBhZ2VTaXplKHNpemUpXHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsIlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIXJlcmVuZGVyICYmIChncmlkUm93RGF0YSAmJiBncmlkQ29sRGVmcylcIj5cclxuICAgIDxhZy1ncmlkLWFuZ3VsYXJcclxuICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXHJcbiAgICAgICAgY2xhc3M9XCJhZy10aGVtZS1tYXRlcmlhbFwiXHJcbiAgICAgICAgW3Jvd0RhdGFdPVwiZ3JpZFJvd0RhdGFcIlxyXG4gICAgICAgIFtjb2x1bW5EZWZzXT1cImdyaWRDb2xEZWZzXCJcclxuICAgICAgICBbcGFnaW5hdGlvbl09XCJncmlkUGFnaW5hdGlvblwiXHJcbiAgICAgICAgW3BhZ2luYXRpb25QYWdlU2l6ZV09XCJncmlkUGFnaW5hdGlvblBhZ2VTaXplXCJcclxuICAgICAgICBbcm93U2VsZWN0aW9uXT1cImdyaWRSb3dTZWxlY3Rpb25cIlxyXG4gICAgICAgIChncmlkUmVhZHkpPVwib25HcmlkUmVhZHkoKVwiXHJcbiAgICAgICAgW3N1cHByZXNzUm93Q2xpY2tTZWxlY3Rpb25dPVwidHJ1ZVwiXHJcbiAgICAgICAgW2RvbUxheW91dF09XCInYXV0b0hlaWdodCdcIlxyXG4gICAgICAgIFtsb2NhbGVUZXh0XT1cImxvY2FsZVRleHRcIlxyXG4gICAgICAgIFthbmltYXRlUm93c109XCJncmlkQW5pbWF0ZVJvd3NcIlxyXG4gICAgPlxyXG4gICAgPC9hZy1ncmlkLWFuZ3VsYXI+XHJcbiAgICA8YXBwLXBhZ2Utc2l6ZSAqbmdJZj1cImdyaWRQYWdlU2l6ZUVkaXRhYmxlXCIgXHJcbiAgICBbcGFnZVNpemVUZXh0XT1cImdyaWRQYWdlU2l6ZVRleHRcIiBcclxuICAgIChzaXplQ2hhbmdlRXZlbnQpPVwic2l6ZUNoYW5nZWQoJGV2ZW50KVwiID48L2FwcC1wYWdlLXNpemU+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=