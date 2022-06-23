import { Component } from '@angular/core';
import { BadgeComponent } from 'sof-ng-controls';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ngx-translate/core";
export class I18nBadgeControlComponent extends BadgeComponent {
}
I18nBadgeControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nBadgeControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nBadgeControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nBadgeControlComponent, selector: "app-i18n-badge-control", usesInheritance: true, ngImport: i0, template: "<div class=\"badge-container\">\r\n    <span *ngIf=\"config\"  \r\n        class=\"badge\" \r\n        [style.background-color]=\"config.badgeColor\"\r\n        [style.color]=\"config.badgeTextColor\"\r\n        >{{config.text | translate}}</span>\r\n  </div>", styles: [".badge{padding:4px 16px;border-radius:10px}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nBadgeControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-badge-control', template: "<div class=\"badge-container\">\r\n    <span *ngIf=\"config\"  \r\n        class=\"badge\" \r\n        [style.background-color]=\"config.badgeColor\"\r\n        [style.color]=\"config.badgeTextColor\"\r\n        >{{config.text | translate}}</span>\r\n  </div>", styles: [".badge{padding:4px 16px;border-radius:10px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1iYWRnZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItZ3JpZC9pMThuLWdyaWQtY29udHJvbC9jb21wb25lbnRzL2kxOG4tYmFkZ2UtY29udHJvbC9pMThuLWJhZGdlLWNvbnRyb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1ncmlkL2kxOG4tZ3JpZC1jb250cm9sL2NvbXBvbmVudHMvaTE4bi1iYWRnZS1jb250cm9sL2kxOG4tYmFkZ2UtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVFqRCxNQUFNLE9BQU8seUJBQTJCLFNBQVEsY0FBYzs7c0hBQWpELHlCQUF5QjswR0FBekIseUJBQXlCLHFGQ1R0QyxxUUFNUTsyRkRHSyx5QkFBeUI7a0JBTHJDLFNBQVM7K0JBQ0Usd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhZGdlQ29tcG9uZW50IH0gZnJvbSAnc29mLW5nLWNvbnRyb2xzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLWJhZGdlLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLWJhZGdlLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2kxOG4tYmFkZ2UtY29udHJvbC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4bkJhZGdlQ29udHJvbENvbXBvbmVudCAgZXh0ZW5kcyBCYWRnZUNvbXBvbmVudCAge1xyXG5cclxuICBcclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYmFkZ2UtY29udGFpbmVyXCI+XHJcbiAgICA8c3BhbiAqbmdJZj1cImNvbmZpZ1wiICBcclxuICAgICAgICBjbGFzcz1cImJhZGdlXCIgXHJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29uZmlnLmJhZGdlQ29sb3JcIlxyXG4gICAgICAgIFtzdHlsZS5jb2xvcl09XCJjb25maWcuYmFkZ2VUZXh0Q29sb3JcIlxyXG4gICAgICAgID57e2NvbmZpZy50ZXh0IHwgdHJhbnNsYXRlfX08L3NwYW4+XHJcbiAgPC9kaXY+Il19