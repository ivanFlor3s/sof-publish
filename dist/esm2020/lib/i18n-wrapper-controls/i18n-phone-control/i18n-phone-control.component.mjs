import { Component, ViewChild } from '@angular/core';
import { PhoneMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nPhoneControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nPhoneControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPhoneControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nPhoneControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nPhoneControlComponent, selector: "app-i18n-phone-control", viewQueries: [{ propertyName: "control", first: true, predicate: PhoneMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-phone-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n  >\r\n  </sof-phone-control>\r\n</ng-container>\r\n", components: [{ type: i1.PhoneMaterialControlComponent, selector: "sof-phone-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPhoneControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-phone-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-phone-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n  >\r\n  </sof-phone-control>\r\n</ng-container>\r\n" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [PhoneMaterialControlComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1waG9uZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1waG9uZS1jb250cm9sL2kxOG4tcGhvbmUtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tcGhvbmUtY29udHJvbC9pMThuLXBob25lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFFBQVE7SUFLckQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7SUFDSixDQUFDOztzSEFUVSx5QkFBeUI7MEdBQXpCLHlCQUF5Qix1R0FFekIsNkJBQTZCLHVFQ1YxQywyUkFRQTsyRkRBYSx5QkFBeUI7a0JBSnJDLFNBQVM7K0JBQ0Usd0JBQXdCOzhCQU1sQyxPQUFPO3NCQUROLFNBQVM7dUJBQUMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGhvbmVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBJMThuQmFzZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLXBob25lLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLXBob25lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuUGhvbmVDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgSTE4bkJhc2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZChQaG9uZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudClcclxuICBjb250cm9sITogUGhvbmVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5lcnJvckNvbnRyb2wudHJhbnNsYXRlRnVuY2lvbiA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHBhcmFtKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJnZXRGYkdyb3VwKClcIj5cclxuICA8c29mLXBob25lLWNvbnRyb2xcclxuICAgIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICAgIHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlclRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlfX1cIlxyXG4gICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sRGlyLm5hbWVcIlxyXG4gID5cclxuICA8L3NvZi1waG9uZS1jb250cm9sPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19