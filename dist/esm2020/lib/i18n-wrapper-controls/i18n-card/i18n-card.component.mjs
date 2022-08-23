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
I18nCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCardComponent, selector: "app-i18n-card", inputs: { titleKey: "titleKey", subTitleKey: "subTitleKey", expandable: "expandable", expanded: "expanded", isSubCard: "isSubCard", disabled: "disabled", customOptions: "customOptions" }, outputs: { onToggleExpand: "onToggleExpand" }, ngImport: i0, template: "<sof-card\r\n  titleText=\"{{titleKey | translate }}\"\r\n  subTitleText=\"{{subTitleKey | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand.emit($event)\"\r\n  [expanded]=\"expanded\"\r\n  [disabled]=\"disabled\"\r\n  [customOptions]=\"customOptions\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>", components: [{ type: i1.CardComponent, selector: "sof-card", inputs: ["titleText", "subTitleText", "expandable", "expanded", "isSubCard", "disabled", "customOptions"], outputs: ["onToggleExpand"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-card', template: "<sof-card\r\n  titleText=\"{{titleKey | translate }}\"\r\n  subTitleText=\"{{subTitleKey | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand.emit($event)\"\r\n  [expanded]=\"expanded\"\r\n  [disabled]=\"disabled\"\r\n  [customOptions]=\"customOptions\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1jYXJkL2kxOG4tY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tY2FyZC9pMThuLWNhcmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU92RSxNQUFNLE9BQU8saUJBQWlCO0lBYTVCO1FBVFMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3hCLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFLbkIsQ0FBQzs7OEdBYk4saUJBQWlCO2tHQUFqQixpQkFBaUIsZ1NDUDlCLGdnQkFhVzsyRkRORSxpQkFBaUI7a0JBSjdCLFNBQVM7K0JBQ0UsZUFBZTswRUFLaEIsUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxjQUFjO3NCQUF2QixNQUFNO2dCQUNFLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFHRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FyZEN1c3RvbU9wdGlvbnMgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaTE4bi1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1jYXJkLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4bkNhcmRDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSB0aXRsZUtleSE6IHN0cmluZztcclxuICBASW5wdXQoKSBzdWJUaXRsZUtleSE6IHN0cmluZztcclxuICBASW5wdXQoKSBleHBhbmRhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBvblRvZ2dsZUV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIGlzU3ViQ2FyZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBASW5wdXQoKSBjdXN0b21PcHRpb25zPzogQ2FyZEN1c3RvbU9wdGlvbnNcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIiwiPHNvZi1jYXJkXHJcbiAgdGl0bGVUZXh0PVwie3t0aXRsZUtleSB8IHRyYW5zbGF0ZSB9fVwiXHJcbiAgc3ViVGl0bGVUZXh0PVwie3tzdWJUaXRsZUtleSB8IHRyYW5zbGF0ZSB9fVwiXHJcbiAgW2V4cGFuZGFibGVdPVwiZXhwYW5kYWJsZVwiXHJcbiAgW2lzU3ViQ2FyZF09XCJpc1N1YkNhcmRcIlxyXG4gIChvblRvZ2dsZUV4cGFuZCk9XCJvblRvZ2dsZUV4cGFuZC5lbWl0KCRldmVudClcIlxyXG4gIFtleHBhbmRlZF09XCJleHBhbmRlZFwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbY3VzdG9tT3B0aW9uc109XCJjdXN0b21PcHRpb25zXCJcclxuPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJdXCIgaGVhZGVyPjwvbmctY29udGVudD5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbYm9keV1cIiBib2R5PjwvbmctY29udGVudD5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJbZm9vdGVyXVwiIGZvb3Rlcj48L25nLWNvbnRlbnQ+XHJcbjwvc29mLWNhcmQ+Il19