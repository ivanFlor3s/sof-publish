import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PageSizeComponent implements OnInit {
    pageSize: number;
    previusPageSize: number;
    sizeChangeEvent: EventEmitter<number>;
    pageSizeText: string;
    ngOnInit(): void;
    onSizeChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageSizeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PageSizeComponent, "app-page-size", never, { "pageSize": "pageSize"; "pageSizeText": "pageSizeText"; }, { "sizeChangeEvent": "sizeChangeEvent"; }, never, never>;
}
