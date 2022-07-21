import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/common";
export class CardComponent {
    constructor() {
        this.subTitleText = '';
        this.expandable = false;
        this.expanded = true;
        this.onToggleExpand = new EventEmitter();
        this.isSubCard = false;
        this.disabled = false;
    }
    toggleExpand() {
        this.expanded = !this.expanded;
        this.onToggleExpand.emit({ expanded: this.expanded });
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CardComponent, selector: "sof-card", inputs: { titleText: "titleText", subTitleText: "subTitleText", expandable: "expandable", expanded: "expanded", isSubCard: "isSubCard", disabled: "disabled" }, outputs: { onToggleExpand: "onToggleExpand" }, ngImport: i0, template: "<mat-card [class.collapsed]=\"!expanded || disabled\" [class.mat-sub-card]=\"isSubCard\" [class.mat-elevation-z7]=\"!isSubCard\">\r\n\r\n  <mat-card-title class=\"mat-card-title-content\">\r\n    <ng-content select=\"[header]\" *ngIf=\"(!expandable || expanded) && !disabled\"></ng-content>\r\n    \r\n    <button mat-stroked-button color=\"primary\" aria-label=\"Expandir\" *ngIf=\"expandable\" (click)=\"toggleExpand()\" [disabled]=\"disabled\">\r\n      <mat-icon class=\"material-icons-outlined\">\r\n        {{expanded && !disabled ? 'expand_less' : 'expand_more'}}\r\n      </mat-icon>\r\n    </button>\r\n  </mat-card-title>\r\n\r\n  <mat-card-title>{{titleText}}</mat-card-title>\r\n\r\n  <mat-card-subtitle>{{subTitleText}}</mat-card-subtitle>\r\n\r\n  <div class=\"body\">\r\n    <ng-content select=\"[body]\"></ng-content>\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <ng-content select=\"[footer]\"></ng-content>\r\n  </div>\r\n\r\n</mat-card>", styles: ["mat-card{padding:40px 21px 32px}.mat-card-title-content{display:inline-flex;justify-content:flex-end;float:right;max-height:1.44em;gap:12px}mat-card>.mat-card-title-content{margin-top:-12px}.body{margin:32px 0}mat-card:not(.collapsed)>*:not(mat-card-title){transition:all .5s ease-in-out}mat-card.collapsed>*:not(mat-card-title){height:0px;margin:0;padding:0;overflow:hidden;opacity:0;transition:all .5s ease-in-out}.mat-sub-card{padding:26px 15px 23px}.mat-sub-card>mat-card-title:not(.mat-card-title-content){font-size:1.25em}\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-card', template: "<mat-card [class.collapsed]=\"!expanded || disabled\" [class.mat-sub-card]=\"isSubCard\" [class.mat-elevation-z7]=\"!isSubCard\">\r\n\r\n  <mat-card-title class=\"mat-card-title-content\">\r\n    <ng-content select=\"[header]\" *ngIf=\"(!expandable || expanded) && !disabled\"></ng-content>\r\n    \r\n    <button mat-stroked-button color=\"primary\" aria-label=\"Expandir\" *ngIf=\"expandable\" (click)=\"toggleExpand()\" [disabled]=\"disabled\">\r\n      <mat-icon class=\"material-icons-outlined\">\r\n        {{expanded && !disabled ? 'expand_less' : 'expand_more'}}\r\n      </mat-icon>\r\n    </button>\r\n  </mat-card-title>\r\n\r\n  <mat-card-title>{{titleText}}</mat-card-title>\r\n\r\n  <mat-card-subtitle>{{subTitleText}}</mat-card-subtitle>\r\n\r\n  <div class=\"body\">\r\n    <ng-content select=\"[body]\"></ng-content>\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <ng-content select=\"[footer]\"></ng-content>\r\n  </div>\r\n\r\n</mat-card>", styles: ["mat-card{padding:40px 21px 32px}.mat-card-title-content{display:inline-flex;justify-content:flex-end;float:right;max-height:1.44em;gap:12px}mat-card>.mat-card-title-content{margin-top:-12px}.body{margin:32px 0}mat-card:not(.collapsed)>*:not(mat-card-title){transition:all .5s ease-in-out}mat-card.collapsed>*:not(mat-card-title){height:0px;margin:0;padding:0;overflow:hidden;opacity:0;transition:all .5s ease-in-out}.mat-sub-card{padding:26px 15px 23px}.mat-sub-card>mat-card-title:not(.mat-card-title-content){font-size:1.25em}\n"] }]
        }], propDecorators: { titleText: [{
                type: Input
            }], subTitleText: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2NhcmQvY2FyZC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2NhcmQvY2FyZC1jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPdkUsTUFBTSxPQUFPLGFBQWE7SUFMMUI7UUFPVyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztLQU1wQztJQUpDLFlBQVk7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzsyR0FaVSxhQUFhOytGQUFiLGFBQWEsK1BDUDFCLG04QkF3Qlc7NEZEakJFLGFBQWE7a0JBTHpCLFNBQVM7K0JBQ0UsVUFBVTs4QkFLWCxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNJLGNBQWM7c0JBQXZCLE1BQU07Z0JBQ0UsU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYXJkLWNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB0aXRsZVRleHQhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3ViVGl0bGVUZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBleHBhbmRhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSBvblRvZ2dsZUV4cGFuZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIGlzU3ViQ2FyZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHRvZ2dsZUV4cGFuZCgpIHtcclxuICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgIHRoaXMub25Ub2dnbGVFeHBhbmQuZW1pdCh7ZXhwYW5kZWQ6IHRoaXMuZXhwYW5kZWR9KTtcclxuICB9XHJcbn1cclxuIiwiPG1hdC1jYXJkIFtjbGFzcy5jb2xsYXBzZWRdPVwiIWV4cGFuZGVkIHx8IGRpc2FibGVkXCIgW2NsYXNzLm1hdC1zdWItY2FyZF09XCJpc1N1YkNhcmRcIiBbY2xhc3MubWF0LWVsZXZhdGlvbi16N109XCIhaXNTdWJDYXJkXCI+XHJcblxyXG4gIDxtYXQtY2FyZC10aXRsZSBjbGFzcz1cIm1hdC1jYXJkLXRpdGxlLWNvbnRlbnRcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltoZWFkZXJdXCIgKm5nSWY9XCIoIWV4cGFuZGFibGUgfHwgZXhwYW5kZWQpICYmICFkaXNhYmxlZFwiPjwvbmctY29udGVudD5cclxuICAgIFxyXG4gICAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4cGFuZGlyXCIgKm5nSWY9XCJleHBhbmRhYmxlXCIgKGNsaWNrKT1cInRvZ2dsZUV4cGFuZCgpXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+XHJcbiAgICAgICAge3tleHBhbmRlZCAmJiAhZGlzYWJsZWQgPyAnZXhwYW5kX2xlc3MnIDogJ2V4cGFuZF9tb3JlJ319XHJcbiAgICAgIDwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L21hdC1jYXJkLXRpdGxlPlxyXG5cclxuICA8bWF0LWNhcmQtdGl0bGU+e3t0aXRsZVRleHR9fTwvbWF0LWNhcmQtdGl0bGU+XHJcblxyXG4gIDxtYXQtY2FyZC1zdWJ0aXRsZT57e3N1YlRpdGxlVGV4dH19PC9tYXQtY2FyZC1zdWJ0aXRsZT5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImJvZHlcIj5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltib2R5XVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2Zvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcblxyXG48L21hdC1jYXJkPiJdfQ==