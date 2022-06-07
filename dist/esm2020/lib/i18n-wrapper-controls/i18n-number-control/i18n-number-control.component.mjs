import { Component, ViewChild } from '@angular/core';
import { NumberMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nNumberControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nNumberControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nNumberControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nNumberControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nNumberControlComponent, selector: "app-i18n-number-control", viewQueries: [{ propertyName: "control", first: true, predicate: NumberMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-number-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n  >\r\n  </sof-number-control>\r\n</ng-container>", components: [{ type: i1.NumberMaterialControlComponent, selector: "sof-number-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nNumberControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-number-control', template: "\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-number-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n  >\r\n  </sof-number-control>\r\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [NumberMaterialControlComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1udW1iZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tbnVtYmVyLWNvbnRyb2wvaTE4bi1udW1iZXItY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tbnVtYmVyLWNvbnRyb2wvaTE4bi1udW1iZXItY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU1wRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsUUFBUTtJQUt0RCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM3RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQztJQUNKLENBQUM7O3VIQVRVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLHdHQUUxQiw4QkFBOEIsdUVDVjNDLDZSQVFlOzJGREFGLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSx5QkFBeUI7OEJBTW5DLE9BQU87c0JBRE4sU0FBUzt1QkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBJMThuQmFzZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLW51bWJlci1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1udW1iZXItY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuTnVtYmVyQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEkxOG5CYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoTnVtYmVyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50KVxyXG4gIGNvbnRyb2whOiBOdW1iZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5lcnJvckNvbnRyb2wudHJhbnNsYXRlRnVuY2lvbiA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHBhcmFtKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsIlxyXG48bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ2V0RmJHcm91cCgpXCI+XHJcbiAgPHNvZi1udW1iZXItY29udHJvbFxyXG4gICAgbGFiZWw9XCJ7e2xhYmVsVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGUgfX1cIlxyXG4gICAgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGV9fVwiXHJcbiAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xEaXIubmFtZVwiXHJcbiAgPlxyXG4gIDwvc29mLW51bWJlci1jb250cm9sPlxyXG48L25nLWNvbnRhaW5lcj4iXX0=