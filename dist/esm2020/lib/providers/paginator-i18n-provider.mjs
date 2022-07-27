import { Injectable } from '@angular/core';
import { firstValueFrom, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class MyCustomPaginatorIntl {
    constructor(translateService) {
        this.translateService = translateService;
        this.changes = new Subject();
        this.firstPageLabel = ``;
        this.itemsPerPageLabel = '';
        this.lastPageLabel = ``;
        this.ItemsOfLabel = '';
        this.nextPageLabel = '';
        this.previousPageLabel = '';
        this.onInit();
    }
    async onInit() {
        const loadLabels = async () => {
            const labels = await firstValueFrom(this.translateService.get('GRID'));
            this.itemsPerPageLabel = labels['PAGE-SIZETEXT'];
            this.ItemsOfLabel = labels['of'];
        };
        await loadLabels();
        this.translateService.onLangChange.subscribe(async (_) => await loadLabels());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWkxOG4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvcHJvdmlkZXJzL3BhZ2luYXRvci1pMThuLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBWSxVQUFVLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFHOUQsT0FBTyxFQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7OztBQUc3QyxNQUFNLE9BQU8scUJBQXFCO0lBSTlCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBZ0I5QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxFQUFFLENBQUE7UUFDakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBbkJrQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFBQSxDQUFDO0lBRXZFLEtBQUssQ0FBQyxNQUFNO1FBRVIsTUFBTSxVQUFVLEdBQUcsS0FBSyxJQUFHLEVBQUU7WUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ3RFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFBO1FBQ0QsTUFBTSxVQUFVLEVBQUUsQ0FBQTtRQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxNQUFNLFVBQVUsRUFBRSxDQUFDLENBQUE7SUFFaEYsQ0FBQztJQVNELGFBQWEsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQ3hELElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQixPQUFPLE9BQU8sTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxFQUFFLENBQUM7U0FDckQ7UUFFRCxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDckMsTUFBTSxRQUFRLEdBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sR0FBRyxRQUFRLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUMvRixDQUFDOztrSEFqQ1EscUJBQXFCO3NIQUFyQixxQkFBcUI7MkZBQXJCLHFCQUFxQjtrQkFEakMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3RhYmxlLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TWF0UGFnaW5hdG9ySW50bCwgTWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7Zmlyc3RWYWx1ZUZyb20sIFN1YmplY3R9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXlDdXN0b21QYWdpbmF0b3JJbnRsIGltcGxlbWVudHMgTWF0UGFnaW5hdG9ySW50bCB7XHJcbiAgICBcclxuICAgIGNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSkge3RoaXMub25Jbml0KCl9XHJcblxyXG4gICAgYXN5bmMgb25Jbml0KCkge1xyXG5cclxuICAgICAgICBjb25zdCBsb2FkTGFiZWxzID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVscyA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXQoJ0dSSUQnKSlcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2VMYWJlbCA9IGxhYmVsc1snUEFHRS1TSVpFVEVYVCddO1xyXG4gICAgICAgICAgICB0aGlzLkl0ZW1zT2ZMYWJlbCA9IGxhYmVsc1snb2YnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBsb2FkTGFiZWxzKClcclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZShhc3luYyAgXyA9PiBhd2FpdCBsb2FkTGFiZWxzKCkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0UGFnZUxhYmVsID0gYGA7XHJcbiAgICBpdGVtc1BlclBhZ2VMYWJlbCA9ICcnO1xyXG4gICAgbGFzdFBhZ2VMYWJlbCA9IGBgO1xyXG4gICAgSXRlbXNPZkxhYmVsID0gJydcclxuICAgIG5leHRQYWdlTGFiZWwgPSAnJztcclxuICAgIHByZXZpb3VzUGFnZUxhYmVsID0gJyc7XHJcblxyXG4gICAgZ2V0UmFuZ2VMYWJlbChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGAwIC0gJHtsZW5ndGh9ICR7dGhpcy5JdGVtc09mTGFiZWx9ICR7bGVuZ3RofWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtVG8gPSAocGFnZSArIDEpICogcGFnZVNpemU7XHJcbiAgICAgICAgY29uc3QgaXRlbUZyb20gPSgocGFnZSArIDEpICogcGFnZVNpemUpIC0gcGFnZVNpemUgKyAxOyBcclxuICAgICAgICByZXR1cm4gYCR7aXRlbUZyb219IC0gJHtpdGVtVG8gPiBsZW5ndGggPyBsZW5ndGggOiBpdGVtVG99ICR7dGhpcy5JdGVtc09mTGFiZWx9ICR7bGVuZ3RofWA7XHJcbiAgICB9XHJcbn0iXX0=