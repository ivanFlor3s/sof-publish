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
I18nCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCardComponent, selector: "app-i18n-card", inputs: { titleKey: "titleKey", subTitleKey: "subTitleKey", expandable: "expandable", isSubCard: "isSubCard" }, outputs: { onToggleExpand: "onToggleExpand" }, ngImport: i0, template: "<sof-card\r\n  titleText=\"{{titleKey | translate }}\"\r\n  subTitleText=\"{{subTitleKey | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>", components: [{ type: i1.CardComponent, selector: "sof-card", inputs: ["titleText", "subTitleText", "expandable", "isSubCard"], outputs: ["onToggleExpand"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-card', template: "<sof-card\r\n  titleText=\"{{titleKey | translate }}\"\r\n  subTitleText=\"{{subTitleKey | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { titleKey: [{
                type: Input
            }], subTitleKey: [{
                type: Input
            }], expandable: [{
                type: Input
            }], onToggleExpand: [{
                type: Output
            }], isSubCard: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1jYXJkL2kxOG4tY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tY2FyZC9pMThuLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU12RSxNQUFNLE9BQU8saUJBQWlCO0lBUTVCO1FBSlMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDMUMsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUVwQixDQUFDOzs4R0FSTixpQkFBaUI7a0dBQWpCLGlCQUFpQixvTkNOOUIsa1pBVVc7MkZESkUsaUJBQWlCO2tCQUo3QixTQUFTOytCQUNFLGVBQWU7MEVBS2hCLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNJLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0UsU0FBUztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLWNhcmQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuQ2FyZENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlS2V5ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1YlRpdGxlS2V5ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25Ub2dnbGVFeHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBpc1N1YkNhcmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiPHNvZi1jYXJkXHJcbiAgdGl0bGVUZXh0PVwie3t0aXRsZUtleSB8IHRyYW5zbGF0ZSB9fVwiXHJcbiAgc3ViVGl0bGVUZXh0PVwie3tzdWJUaXRsZUtleSB8IHRyYW5zbGF0ZSB9fVwiXHJcbiAgW2V4cGFuZGFibGVdPVwiZXhwYW5kYWJsZVwiXHJcbiAgW2lzU3ViQ2FyZF09XCJpc1N1YkNhcmRcIlxyXG4gIChvblRvZ2dsZUV4cGFuZCk9XCJvblRvZ2dsZUV4cGFuZFwiXHJcbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbaGVhZGVyXVwiIGhlYWRlcj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JvZHldXCIgYm9keT48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIiBmb290ZXI+PC9uZy1jb250ZW50PlxyXG48L3NvZi1jYXJkPiJdfQ==