import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@ngx-translate/core";
export class I18nCardComponent {
    constructor() {
        this.expandable = false;
        this.expanded = true;
        this.onToggleExpand = new EventEmitter();
        this.isSubCard = false;
        this.disabled = false;
    }
}
I18nCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
I18nCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCardComponent, selector: "app-i18n-card", inputs: { titleKey: "titleKey", subTitleKey: "subTitleKey", expandable: "expandable", expanded: "expanded", isSubCard: "isSubCard", disabled: "disabled", customOptions: "customOptions" }, outputs: { onToggleExpand: "onToggleExpand" }, ngImport: i0, template: "<sof-card\r\n  titleText=\"{{titleKey | translate }}\"\r\n  subTitleText=\"{{subTitleKey | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand\"\r\n  [expanded]=\"expanded\"\r\n  [disabled]=\"disabled\"\r\n  [customOptions]=\"customOptions\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>", components: [{ type: i1.CardComponent, selector: "sof-card", inputs: ["titleText", "subTitleText", "expandable", "expanded", "isSubCard", "disabled", "customOptions"], outputs: ["onToggleExpand"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-card', template: "<sof-card\r\n  titleText=\"{{titleKey | translate }}\"\r\n  subTitleText=\"{{subTitleKey | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand\"\r\n  [expanded]=\"expanded\"\r\n  [disabled]=\"disabled\"\r\n  [customOptions]=\"customOptions\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { titleKey: [{
                type: Input
            }], subTitleKey: [{
                type: Input
            }], expandable: [{
                type: Input
            }], expanded: [{
                type: Input
            }], onToggleExpand: [{
                type: Output
            }], isSubCard: [{
                type: Input
            }], disabled: [{
                type: Input
            }], customOptions: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1jYXJkL2kxOG4tY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tY2FyZC9pMThuLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU92RSxNQUFNLE9BQU8saUJBQWlCO0lBYTVCO1FBVFMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFLbkIsQ0FBQzs7OEdBYk4saUJBQWlCO2tHQUFqQixpQkFBaUIsZ1NDUDlCLG1mQWFXOzJGRE5FLGlCQUFpQjtrQkFKN0IsU0FBUzsrQkFDRSxlQUFlOzBFQUtoQixRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNJLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0UsU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdHLGFBQWE7c0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYXJkQ3VzdG9tT3B0aW9ucyB9IGZyb20gJ3NvZi1uZy1jb250cm9scyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLWNhcmQuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuQ2FyZENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlS2V5ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1YlRpdGxlS2V5ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGV4cGFuZGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBleHBhbmRlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQE91dHB1dCgpIG9uVG9nZ2xlRXhwYW5kID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgaXNTdWJDYXJkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIEBJbnB1dCgpIGN1c3RvbU9wdGlvbnM/OiBDYXJkQ3VzdG9tT3B0aW9uc1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iLCI8c29mLWNhcmRcclxuICB0aXRsZVRleHQ9XCJ7e3RpdGxlS2V5IHwgdHJhbnNsYXRlIH19XCJcclxuICBzdWJUaXRsZVRleHQ9XCJ7e3N1YlRpdGxlS2V5IHwgdHJhbnNsYXRlIH19XCJcclxuICBbZXhwYW5kYWJsZV09XCJleHBhbmRhYmxlXCJcclxuICBbaXNTdWJDYXJkXT1cImlzU3ViQ2FyZFwiXHJcbiAgKG9uVG9nZ2xlRXhwYW5kKT1cIm9uVG9nZ2xlRXhwYW5kXCJcclxuICBbZXhwYW5kZWRdPVwiZXhwYW5kZWRcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgW2N1c3RvbU9wdGlvbnNdPVwiY3VzdG9tT3B0aW9uc1wiXHJcbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbaGVhZGVyXVwiIGhlYWRlcj48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2JvZHldXCIgYm9keT48L25nLWNvbnRlbnQ+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIiBmb290ZXI+PC9uZy1jb250ZW50PlxyXG48L3NvZi1jYXJkPiJdfQ==