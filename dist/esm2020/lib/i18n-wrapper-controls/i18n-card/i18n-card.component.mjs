import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@ngx-translate/core";
export class I18nCardComponent {
    constructor() {
        this.expandable = false;
        this.onToggleExpand = new EventEmitter();
        this.isSubCard = false;
    }
}
I18nCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
I18nCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCardComponent, selector: "app-i18n-card", inputs: { title: "title", subTitle: "subTitle", expandable: "expandable", isSubCard: "isSubCard" }, outputs: { onToggleExpand: "onToggleExpand" }, ngImport: i0, template: "<sof-card\r\n  title=\"{{title | translate }}\"\r\n  subTitle=\"{{subTitle | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>", components: [{ type: i1.CardComponent, selector: "sof-card", inputs: ["title", "subTitle", "expandable", "isSubCard"], outputs: ["onToggleExpand"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-card', template: "<sof-card\r\n  title=\"{{title | translate }}\"\r\n  subTitle=\"{{subTitle | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], expandable: [{
                type: Input
            }], onToggleExpand: [{
                type: Output
            }], isSubCard: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1jYXJkL2kxOG4tY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tY2FyZC9pMThuLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU12RSxNQUFNLE9BQU8saUJBQWlCO0lBUTVCO1FBSlMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUVwQixDQUFDOzs4R0FSTixpQkFBaUI7a0dBQWpCLGlCQUFpQix3TUNOOUIsb1lBVVc7MkZESkUsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLGVBQWU7MEVBS2hCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksY0FBYztzQkFBdkIsTUFBTTtnQkFDRSxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWkxOG4tY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2kxOG4tY2FyZC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEkxOG5DYXJkQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgdGl0bGUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3ViVGl0bGUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZXhwYW5kYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvblRvZ2dsZUV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIGlzU3ViQ2FyZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8c29mLWNhcmRcclxuICB0aXRsZT1cInt7dGl0bGUgfCB0cmFuc2xhdGUgfX1cIlxyXG4gIHN1YlRpdGxlPVwie3tzdWJUaXRsZSB8IHRyYW5zbGF0ZSB9fVwiXHJcbiAgW2V4cGFuZGFibGVdPVwiZXhwYW5kYWJsZVwiXHJcbiAgW2lzU3ViQ2FyZF09XCJpc1N1YkNhcmRcIlxyXG4gIChvblRvZ2dsZUV4cGFuZCk9XCJvblRvZ2dsZUV4cGFuZFwiXHJcbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbaGVhZGVyXVwiIGhlYWRlcj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JvZHldXCIgYm9keT48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIiBmb290ZXI+PC9uZy1jb250ZW50PlxyXG48L3NvZi1jYXJkPiJdfQ==