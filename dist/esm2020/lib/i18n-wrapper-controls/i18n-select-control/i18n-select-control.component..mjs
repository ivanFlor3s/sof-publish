import { Component, ViewChild } from '@angular/core';
import { SelectMaterialControlComponent } from 'sof-ng-controls';
import { I18nOptions } from '../../shared/models/options';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nSelectControlComponent extends I18nOptions {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
        this._srvTranslatePipe.onLangChange.subscribe(() => {
            this.showOptions();
        });
    }
}
I18nSelectControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nSelectControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nSelectControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nSelectControlComponent, selector: "app-i18n-select-control", viewQueries: [{ propertyName: "control", first: true, predicate: SelectMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-select-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [textPath]=\"textPath\"\r\n    [valuePath]=\"valuePath\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n  >\r\n  </sof-select-control>\r\n</ng-container>\r\n  ", components: [{ type: i1.SelectMaterialControlComponent, selector: "sof-select-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nSelectControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-select-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-select-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [textPath]=\"textPath\"\r\n    [valuePath]=\"valuePath\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n  >\r\n  </sof-select-control>\r\n</ng-container>\r\n  " }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [SelectMaterialControlComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1zZWxlY3QtY29udHJvbC5jb21wb25lbnQuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1jb250cm9scy9pMThuLXNlbGVjdC1jb250cm9sL2kxOG4tc2VsZWN0LWNvbnRyb2wuY29tcG9uZW50Li50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1zZWxlY3QtY29udHJvbC9pMThuLXNlbGVjdC1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7O0FBTTFELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxXQUFXO0lBS3pELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUUsR0FBRyxFQUFFO1lBQ2xELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3VIQWJVLDBCQUEwQjsyR0FBMUIsMEJBQTBCLHdHQUUxQiw4QkFBOEIsdUVDVjNDLDJYQVdFOzJGREhXLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSx5QkFBeUI7OEJBTW5DLE9BQU87c0JBRE4sU0FBUzt1QkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWxlY3RNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBJMThuT3B0aW9ucyB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvb3B0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLXNlbGVjdC1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1zZWxlY3QtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuU2VsZWN0Q29udHJvbENvbXBvbmVudCBleHRlbmRzIEkxOG5PcHRpb25zIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBWaWV3Q2hpbGQoU2VsZWN0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50KVxyXG4gIGNvbnRyb2whOiBTZWxlY3RNYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5lcnJvckNvbnRyb2wudHJhbnNsYXRlRnVuY2lvbiA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHBhcmFtKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd09wdGlvbnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ2V0RmJHcm91cCgpXCI+XHJcbiAgPHNvZi1zZWxlY3QtY29udHJvbFxyXG4gICAgbGFiZWw9XCJ7e2xhYmVsVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGUgfX1cIlxyXG4gICAgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGV9fVwiXHJcbiAgICBbdGV4dFBhdGhdPVwidGV4dFBhdGhcIlxyXG4gICAgW3ZhbHVlUGF0aF09XCJ2YWx1ZVBhdGhcIlxyXG4gICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sRGlyLm5hbWVcIlxyXG4gICAgW2xpc3RdPVwibGlzdEZpbmFsXCJcclxuICA+XHJcbiAgPC9zb2Ytc2VsZWN0LWNvbnRyb2w+XHJcbjwvbmctY29udGFpbmVyPlxyXG4gICJdfQ==