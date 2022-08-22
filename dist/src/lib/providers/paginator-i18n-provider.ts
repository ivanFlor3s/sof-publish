import {Component, Injectable, NgModule} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import {firstValueFrom, Subject} from 'rxjs';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
    
    changes = new Subject<void>();

    constructor(private translateService: TranslateService) {this.onInit()}

    async onInit() {

        const loadLabels = async() => {
            const labels = await firstValueFrom(this.translateService.get('GRID'))
            this.itemsPerPageLabel = labels['PAGE-SIZETEXT'];
            this.ItemsOfLabel = labels['of']
        }
        await loadLabels()
        this.translateService.onLangChange.subscribe(async  _ => await loadLabels())

    }

    firstPageLabel = ``;
    itemsPerPageLabel = '';
    lastPageLabel = ``;
    ItemsOfLabel = ''
    nextPageLabel = '';
    previousPageLabel = '';

    getRangeLabel(page: number, pageSize: number, length: number): string {
        if (length === 0) {
        return `0 - ${length} ${this.ItemsOfLabel} ${length}`;
        }

        const itemTo = (page + 1) * pageSize;
        const itemFrom =((page + 1) * pageSize) - pageSize + 1; 
        return `${itemFrom} - ${itemTo > length ? length : itemTo} ${this.ItemsOfLabel} ${length}`;
    }
}