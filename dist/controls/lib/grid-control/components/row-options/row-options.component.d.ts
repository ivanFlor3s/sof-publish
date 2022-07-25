import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MenuOptionConfig } from '../../interfaces';
import * as i0 from "@angular/core";
export declare class RowOptionsComponent<T> implements ICellRendererAngularComp {
    cellValue: string;
    params: any;
    options: MenuOptionConfig<T>[];
    constructor();
    refresh(params: ICellRendererParams): boolean;
    agInit(parameters: ICellRendererParams): void;
    accionar(opt: MenuOptionConfig<T>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowOptionsComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RowOptionsComponent<any>, "app-row-options", never, {}, {}, never, never>;
}
