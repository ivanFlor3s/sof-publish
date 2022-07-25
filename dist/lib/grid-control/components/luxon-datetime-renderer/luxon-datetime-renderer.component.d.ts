import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import * as i0 from "@angular/core";
export declare class LuxonDateTimeRendererComponent implements ICellRendererAngularComp {
    cellValue: string;
    params: any;
    constructor();
    refresh(params: ICellRendererParams): boolean;
    agInit(parameters: ICellRendererParams): void;
    setCellValue(params: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LuxonDateTimeRendererComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LuxonDateTimeRendererComponent, "app-luxon-datetime-renderer", never, {}, {}, never, never>;
}
