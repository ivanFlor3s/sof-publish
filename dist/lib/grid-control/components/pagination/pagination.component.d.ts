import { EventEmitter, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import * as i0 from "@angular/core";
export declare class PaginationComponent implements OnInit {
    TotalItems: number;
    PageSize: number;
    pageChangeEvent: EventEmitter<PageEvent>;
    ngOnInit(): void;
    onChange(e: PageEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "app-pagination", never, { "TotalItems": "TotalItems"; "PageSize": "PageSize"; }, { "pageChangeEvent": "pageChangeEvent"; }, never, never>;
}
