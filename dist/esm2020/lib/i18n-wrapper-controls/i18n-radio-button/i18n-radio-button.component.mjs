import { Component, ViewChild, Input, Self } from '@angular/core';
import { RadioButtonMaterialControlComponent } from 'sof-ng-controls';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngx-translate/core";
import * as i3 from "sof-ng-controls";
export class I18nRadioButtonComponent extends RadioButtonMaterialControlComponent {
    // = [ {text:'FORM.RADIOTEXT1', value:1},{text: 'FORM.RADIOTEXT2', value: 2}]
    constructor(controlDir, pipeTranslate, _srvTranslatePipe) {
        super(controlDir);
        this.controlDir = controlDir;
        this.pipeTranslate = pipeTranslate;
        this._srvTranslatePipe = _srvTranslatePipe;
        this.radioOptions = [];
    }
    ngOnInit() {
        this.translateOptions();
    }
    translateOptions() {
        this.radioOptions = this.listToTranslate.map(x => {
            return {
                text: this.pipeTranslate.transform(this.getText(x)),
                value: this.getValue(x)
            };
        });
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
        this._srvTranslatePipe.onLangChange.subscribe(() => {
            this.translateOptions();
        });
    }
    getFbGroup() {
        return this.controlDir.control?.parent || new FormGroup({});
    }
}
I18nRadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRadioButtonComponent, deps: [{ token: i1.NgControl, self: true }, { token: i2.TranslatePipe }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nRadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nRadioButtonComponent, selector: "app-i18n-radio-button", inputs: { labelToTranslate: "labelToTranslate", listToTranslate: "listToTranslate" }, viewQueries: [{ propertyName: "control", first: true, predicate: RadioButtonMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n\r\n<ng-container  [formGroup]=\"getFbGroup()\">\r\n  <sof-radio-button-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"radioOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  >\r\n    \r\n  </sof-radio-button-control>\r\n</ng-container>\r\n", components: [{ type: i3.RadioButtonMaterialControlComponent, selector: "sof-radio-button-control" }], directives: [{ type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-radio-button', template: "\r\n\r\n<ng-container  [formGroup]=\"getFbGroup()\">\r\n  <sof-radio-button-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"radioOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  >\r\n    \r\n  </sof-radio-button-control>\r\n</ng-container>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }] }, { type: i2.TranslatePipe }, { type: i2.TranslateService }]; }, propDecorators: { control: [{
                type: ViewChild,
                args: [RadioButtonMaterialControlComponent]
            }], labelToTranslate: [{
                type: Input
            }], listToTranslate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1jb250cm9scy9pMThuLXJhZGlvLWJ1dHRvbi9pMThuLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tcmFkaW8tYnV0dG9uL2kxOG4tcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFPdEQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLG1DQUFtQztJQVUvRSw2RUFBNkU7SUFFN0UsWUFBb0MsVUFBcUIsRUFDN0MsYUFBNEIsRUFDL0IsaUJBQW1DO1FBRTFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUppQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFUNUMsaUJBQVksR0FBK0IsRUFBRSxDQUFBO0lBWTdDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0MsT0FBTztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3hCLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM3RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFFLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFtQixJQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O3FIQTVDVSx3QkFBd0I7eUdBQXhCLHdCQUF3Qiw0TEFFeEIsbUNBQW1DLHVFQ1poRCxnV0FjQTsyRkRKYSx3QkFBd0I7a0JBSnBDLFNBQVM7K0JBQ0UsdUJBQXVCOzswQkFlcEIsSUFBSTt1R0FUakIsT0FBTztzQkFETixTQUFTO3VCQUFDLG1DQUFtQztnQkFLckMsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUVFLGVBQWU7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIFNlbGYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJ3NvZi1uZy1jb250cm9scyc7XHJcbmltcG9ydCB7IFJhZGlvQnV0dG9uQ29udHJvbENvbXBvbmVudCB9IGZyb20gJ3NvZi1uZy1jb250cm9scy9saWIvYmFzZS9yYWRpby1idXR0b24tY29udHJvbC9yYWRpby1idXR0b24tY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaTE4bi1yYWRpby1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEkxOG5SYWRpb0J1dHRvbkNvbXBvbmVudCBleHRlbmRzIFJhZGlvQnV0dG9uTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZChSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudClcclxuICBjb250cm9sITogUmFkaW9CdXR0b25NYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIHJhZGlvT3B0aW9uczoge3RleHQ6c3RyaW5nLCB2YWx1ZTphbnl9W10gPSBbXVxyXG5cclxuICBASW5wdXQoKSBsYWJlbFRvVHJhbnNsYXRlITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKWxpc3RUb1RyYW5zbGF0ZSE6IGFueVtdIFxyXG4gIC8vID0gWyB7dGV4dDonRk9STS5SQURJT1RFWFQxJywgdmFsdWU6MX0se3RleHQ6ICdGT1JNLlJBRElPVEVYVDInLCB2YWx1ZTogMn1dXHJcblxyXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgcHVibGljIG92ZXJyaWRlIGNvbnRyb2xEaXI6IE5nQ29udHJvbCxcclxuICAgIHByb3RlY3RlZCBwaXBlVHJhbnNsYXRlOiBUcmFuc2xhdGVQaXBlLFxyXG4gICAgcHVibGljIF9zcnZUcmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgKXtcclxuICAgIHN1cGVyKGNvbnRyb2xEaXIpXHJcbiAgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmFuc2xhdGVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVPcHRpb25zKCl7XHJcbiAgICB0aGlzLnJhZGlvT3B0aW9ucyA9IHRoaXMubGlzdFRvVHJhbnNsYXRlLm1hcCh4ID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZXh0OiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHRoaXMuZ2V0VGV4dCh4KSkgLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLmdldFZhbHVlKHgpXHJcbiAgICAgIH0gXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5lcnJvckNvbnRyb2wudHJhbnNsYXRlRnVuY2lvbiA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHBhcmFtKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudHJhbnNsYXRlT3B0aW9ucygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEZiR3JvdXAoKTogRm9ybUdyb3VwICB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sRGlyLmNvbnRyb2w/LnBhcmVudCBhcyBGb3JtR3JvdXB8fCBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG5cclxufVxyXG4iLCJcclxuXHJcbjxuZy1jb250YWluZXIgIFtmb3JtR3JvdXBdPVwiZ2V0RmJHcm91cCgpXCI+XHJcbiAgPHNvZi1yYWRpby1idXR0b24tY29udHJvbFxyXG4gIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xEaXIubmFtZVwiXHJcbiAgW2xpc3RdPVwicmFkaW9PcHRpb25zXCJcclxuICB0ZXh0UGF0aD1cInRleHRcIlxyXG4gIHZhbHVlUGF0aD1cInZhbHVlXCJcclxuICBbbm9MYWJlbF09XCJub0xhYmVsXCJcclxuICA+XHJcbiAgICBcclxuICA8L3NvZi1yYWRpby1idXR0b24tY29udHJvbD5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==