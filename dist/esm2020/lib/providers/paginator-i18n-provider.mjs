import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class MyCustomPaginatorIntl {
    constructor(translateService) {
        this.translateService = translateService;
        this.changes = new Subject();
        this.firstPageLabel = ``;
        this.lastPageLabel = ``;
        this.ItemsOfLabel = '';
        // You can set labels to an arbitrary string too, or dynamically compute
        // it through other third-party internationalization libraries.
        this.nextPageLabel = '';
        this.previousPageLabel = '';
        this.onInit();
    }
    async onInit() {
        this.translateService.onLangChange.subscribe(async (_) => {
            const labels = await firstValueFrom(this.translateService.get('GRID'));
            this.itemsPerPageLabel = labels['PAGE-SIZETEXT'];
            this.ItemsOfLabel = labels['of'];
        });
    }
    getRangeLabel(page, pageSize, length) {
        if (length === 0) {
            return `0 - ${length} ${this.ItemsOfLabel} ${length}`;
        }
        const itemTo = (page + 1) * pageSize;
        const itemFrom = ((page + 1) * pageSize) - pageSize + 1;
        return `${itemFrom} - ${itemTo > length ? length : itemTo} ${this.ItemsOfLabel} ${length}`;
    }
}
MyCustomPaginatorIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: MyCustomPaginatorIntl, deps: [{ token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable });
MyCustomPaginatorIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: MyCustomPaginatorIntl });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.TranslateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWkxOG4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvcHJvdmlkZXJzL3BhZ2luYXRvci1pMThuLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBWSxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFHOUQsT0FBTyxFQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7OztBQUc3QyxNQUFNLE9BQU8scUJBQXFCO0lBSTlCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBZTlCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLHdFQUF3RTtRQUN4RSwrREFBK0Q7UUFDL0Qsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBckJrQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFBQSxDQUFDO0lBRXZFLEtBQUssQ0FBQyxNQUFNO1FBRVIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFO1lBQ3BELE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtZQUN0RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQWFELGFBQWEsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQ3hELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQixPQUFPLE9BQU8sTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxFQUFFLENBQUM7U0FDckQ7UUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDckMsTUFBTSxRQUFRLEdBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sR0FBRyxRQUFRLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUMvRixDQUFDOztrSEFuQ1EscUJBQXFCO3NIQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0UGFnaW5hdG9ySW50bCwgTWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7Zmlyc3RWYWx1ZUZyb20sIFN1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXlDdXN0b21QYWdpbmF0b3JJbnRsIGltcGxlbWVudHMgTWF0UGFnaW5hdG9ySW50bCB7XHJcbiAgICBcclxuICAgIGNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge3RoaXMub25Jbml0KCl9XHJcblxyXG4gICAgYXN5bmMgb25Jbml0KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKGFzeW5jICBfID0+IHsgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbHMgPSBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KCdHUklEJykpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlTGFiZWwgPSBsYWJlbHNbJ1BBR0UtU0laRVRFWFQnXTtcclxuICAgICAgICAgICAgdGhpcy5JdGVtc09mTGFiZWwgPSBsYWJlbHNbJ29mJ11cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZmlyc3RQYWdlTGFiZWwgPSBgYDtcclxuICAgIGl0ZW1zUGVyUGFnZUxhYmVsOiAnJztcclxuICAgIGxhc3RQYWdlTGFiZWwgPSBgYDtcclxuICAgIEl0ZW1zT2ZMYWJlbCA9ICcnO1xyXG5cclxuICAgIC8vIFlvdSBjYW4gc2V0IGxhYmVscyB0byBhbiBhcmJpdHJhcnkgc3RyaW5nIHRvbywgb3IgZHluYW1pY2FsbHkgY29tcHV0ZVxyXG4gICAgLy8gaXQgdGhyb3VnaCBvdGhlciB0aGlyZC1wYXJ0eSBpbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJpZXMuXHJcbiAgICBuZXh0UGFnZUxhYmVsID0gJyc7XHJcbiAgICBwcmV2aW91c1BhZ2VMYWJlbCA9ICcnO1xyXG5cclxuICAgIGdldFJhbmdlTGFiZWwocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBgMCAtICR7bGVuZ3RofSAke3RoaXMuSXRlbXNPZkxhYmVsfSAke2xlbmd0aH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbVRvID0gKHBhZ2UgKyAxKSAqIHBhZ2VTaXplO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Gcm9tID0oKHBhZ2UgKyAxKSAqIHBhZ2VTaXplKSAtIHBhZ2VTaXplICsgMTsgXHJcbiAgICAgICAgcmV0dXJuIGAke2l0ZW1Gcm9tfSAtICR7aXRlbVRvID4gbGVuZ3RoID8gbGVuZ3RoIDogaXRlbVRvfSAke3RoaXMuSXRlbXNPZkxhYmVsfSAke2xlbmd0aH1gO1xyXG4gICAgfVxyXG59Il19