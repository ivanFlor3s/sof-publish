import { Component, ViewChild } from '@angular/core';
import { DatePickerMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nDatePickerControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nDatePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDatePickerControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nDatePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nDatePickerControlComponent, selector: "app-i18n-date-picker-control", viewQueries: [{ propertyName: "control", first: true, predicate: DatePickerMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-date-picker-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n  >\r\n  </sof-date-picker-control>\r\n</ng-container>", components: [{ type: i1.DatePickerMaterialControlComponent, selector: "sof-date-picker-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDatePickerControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-date-picker-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-date-picker-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n  >\r\n  </sof-date-picker-control>\r\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [DatePickerMaterialControlComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1kYXRlLXBpY2tlci1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1kYXRlLXBpY2tlci1jb250cm9sL2kxOG4tZGF0ZS1waWNrZXItY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tZGF0ZS1waWNrZXItY29udHJvbC9pMThuLWRhdGUtcGlja2VyLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLDhCQUErQixTQUFRLFFBQVE7SUFLMUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7SUFDSixDQUFDOzsySEFUVSw4QkFBOEI7K0dBQTlCLDhCQUE4Qiw2R0FFOUIsa0NBQWtDLHVFQ1YvQyxxT0FNZTsyRkRFRiw4QkFBOEI7a0JBSjFDLFNBQVM7K0JBQ0UsOEJBQThCOzhCQU14QyxPQUFPO3NCQUROLFNBQVM7dUJBQUMsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnc29mLW5nLWNvbnRyb2xzJztcclxuaW1wb3J0IHsgSTE4bkJhc2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL2Jhc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaTE4bi1kYXRlLXBpY2tlci1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1kYXRlLXBpY2tlci1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEkxOG5EYXRlUGlja2VyQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEkxOG5CYXNlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoRGF0ZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudClcclxuICBjb250cm9sITogRGF0ZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudDtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sLmVycm9yQ29udHJvbC50cmFuc2xhdGVGdW5jaW9uID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMucGlwZVRyYW5zbGF0ZS50cmFuc2Zvcm0ocGFyYW0pO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJnZXRGYkdyb3VwKClcIj5cclxuICA8c29mLWRhdGUtcGlja2VyLWNvbnRyb2xcclxuICAgIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbERpci5uYW1lXCJcclxuICA+XHJcbiAgPC9zb2YtZGF0ZS1waWNrZXItY29udHJvbD5cclxuPC9uZy1jb250YWluZXI+Il19