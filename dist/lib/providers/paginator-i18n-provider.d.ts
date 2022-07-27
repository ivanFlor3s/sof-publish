import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MyCustomPaginatorIntl implements MatPaginatorIntl {
    private translateService;
    changes: Subject<void>;
    constructor(translateService: TranslateService);
    onInit(): Promise<void>;
    firstPageLabel: string;
    itemsPerPageLabel: '';
    lastPageLabel: string;
    ItemsOfLabel: string;
    nextPageLabel: string;
    previousPageLabel: string;
    getRangeLabel(page: number, pageSize: number, length: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MyCustomPaginatorIntl, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MyCustomPaginatorIntl>;
}
