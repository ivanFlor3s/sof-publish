import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Badge } from '../../interfaces/badge-config';
import * as i0 from "@angular/core";
export declare class BadgeComponent implements ICellRendererAngularComp {
    config: Badge;
    params: any;
    refresh(params: ICellRendererParams): boolean;
    agInit(params: ICellRendererParams): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeComponent, "app-budge", never, {}, {}, never, never>;
}
