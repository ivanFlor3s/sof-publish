import { GridApi } from 'ag-grid-community';
import * as i0 from "@angular/core";
export declare class GridHandlerService {
    private gridApi;
    private rowData;
    private dataId;
    get RowData(): any[];
    get isSelectedRows(): boolean;
    get selectedRows(): import("ag-grid-community").RowNode[];
    constructor();
    setConfigs(gridApiParam: GridApi, rowDataParam: any[], dataIdParam: any): void;
    addRow(objToAdd: any): void;
    updateRowState(obj: any, action: string, column?: string): void;
    updateDataState(action: string): void;
    deleteRowsSelected(): void;
    finalTransaction(data: any[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GridHandlerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GridHandlerService>;
}
