import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/paginator";
export class PaginationComponent {
    constructor() {
        this.pageChangeEvent = new EventEmitter();
    }
    ngOnInit() {
    }
    onChange(e) {
        this.pageChangeEvent.emit(e);
    }
}
PaginationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PaginationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PaginationComponent, selector: "app-pagination", inputs: { TotalItems: "TotalItems", PageSize: "PageSize" }, outputs: { pageChangeEvent: "pageChangeEvent" }, ngImport: i0, template: "<mat-paginator [length]=\"TotalItems\"\r\n               [pageSize]=\"PageSize\"\r\n               [pageSizeOptions]=\"[5,10,15,20]\"\r\n               (page)=\"onChange($event)\"\r\n               [showFirstLastButtons]=\"true\"\r\n               aria-label=\"Select page\">\r\n</mat-paginator>\r\n", styles: [""], components: [{ type: i1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-pagination', encapsulation: ViewEncapsulation.None, template: "<mat-paginator [length]=\"TotalItems\"\r\n               [pageSize]=\"PageSize\"\r\n               [pageSizeOptions]=\"[5,10,15,20]\"\r\n               (page)=\"onChange($event)\"\r\n               [showFirstLastButtons]=\"true\"\r\n               aria-label=\"Select page\">\r\n</mat-paginator>\r\n", styles: [""] }]
        }], propDecorators: { TotalItems: [{
                type: Input
            }], PageSize: [{
                type: Input
            }], pageChangeEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFVbEcsTUFBTSxPQUFPLG1CQUFtQjtJQU5oQztRQVVZLG9CQUFlLEdBQTRCLElBQUksWUFBWSxFQUFhLENBQUE7S0FVbkY7SUFSQyxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFZO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2lIQVhVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLG1LQ1ZoQyw2U0FPQTs0RkRHYSxtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0UsZ0JBQWdCLGlCQUdYLGlCQUFpQixDQUFDLElBQUk7OEJBSTVCLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9ySW50bCwgUGFnZUV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGFnaW5hdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgVG90YWxJdGVtczogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIFBhZ2VTaXplOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIHBhZ2VDaGFuZ2VFdmVudDogRXZlbnRFbWl0dGVyPFBhZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VFdmVudD4oKSBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShlOiBQYWdlRXZlbnQpe1xyXG4gICAgdGhpcy5wYWdlQ2hhbmdlRXZlbnQuZW1pdChlKTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuIiwiPG1hdC1wYWdpbmF0b3IgW2xlbmd0aF09XCJUb3RhbEl0ZW1zXCJcclxuICAgICAgICAgICAgICAgW3BhZ2VTaXplXT1cIlBhZ2VTaXplXCJcclxuICAgICAgICAgICAgICAgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwxMCwxNSwyMF1cIlxyXG4gICAgICAgICAgICAgICAocGFnZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgW3Nob3dGaXJzdExhc3RCdXR0b25zXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2VcIj5cclxuPC9tYXQtcGFnaW5hdG9yPlxyXG4iXX0=