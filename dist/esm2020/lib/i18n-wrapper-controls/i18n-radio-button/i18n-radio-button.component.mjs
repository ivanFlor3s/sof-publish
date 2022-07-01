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
        this.translateOptions();
    }
    getFbGroup() {
        return this.controlDir.control?.parent || new FormGroup({});
    }
}
I18nRadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRadioButtonComponent, deps: [{ token: i1.NgControl, self: true }, { token: i2.TranslatePipe }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nRadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nRadioButtonComponent, selector: "app-i18n-radio-button", inputs: { labelToTranslate: "labelToTranslate", listToTranslate: "listToTranslate" }, viewQueries: [{ propertyName: "control", first: true, predicate: RadioButtonMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n\r\n<ng-container  [formGroup]=\"getFbGroup()\">\r\n  <sof-radio-button-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"radioOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  >\r\n    \r\n  </sof-radio-button-control>\r\n</ng-container>\r\n", components: [{ type: i3.RadioButtonMaterialControlComponent, selector: "sof-radio-button-control" }], directives: [{ type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-radio-button', template: "\r\n\r\n<ng-container  [formGroup]=\"getFbGroup()\">\r\n  <sof-radio-button-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"radioOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  >\r\n    \r\n  </sof-radio-button-control>\r\n</ng-container>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1jb250cm9scy9pMThuLXJhZGlvLWJ1dHRvbi9pMThuLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tcmFkaW8tYnV0dG9uL2kxOG4tcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRFLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFPdEQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLG1DQUFtQztJQVUvRSw2RUFBNkU7SUFFN0UsWUFBb0MsVUFBcUIsRUFDN0MsYUFBNEIsRUFDL0IsaUJBQW1DO1FBRTFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUppQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFUNUMsaUJBQVksR0FBK0IsRUFBRSxDQUFBO0lBWTdDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9DLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN4QixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBRSxHQUFHLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBbUIsSUFBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOztxSEExQ1Usd0JBQXdCO3lHQUF4Qix3QkFBd0IsNExBRXhCLG1DQUFtQyx1RUNaaEQscVVBYUE7MkZESGEsd0JBQXdCO2tCQUpwQyxTQUFTOytCQUNFLHVCQUF1Qjs7MEJBZXBCLElBQUk7dUdBVGpCLE9BQU87c0JBRE4sU0FBUzt1QkFBQyxtQ0FBbUM7Z0JBS3JDLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFFRSxlQUFlO3NCQUF0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhZGlvQnV0dG9uTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnc29mLW5nLWNvbnRyb2xzJztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnc29mLW5nLWNvbnRyb2xzL2xpYi9iYXNlL3JhZGlvLWJ1dHRvbi1jb250cm9sL3JhZGlvLWJ1dHRvbi1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLXJhZGlvLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2kxOG4tcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4blJhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgUmFkaW9CdXR0b25NYXRlcmlhbENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZChSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudClcclxuICBjb250cm9sITogUmFkaW9CdXR0b25NYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIHJhZGlvT3B0aW9uczoge3RleHQ6c3RyaW5nLCB2YWx1ZTphbnl9W10gPSBbXVxyXG5cclxuICBASW5wdXQoKSBsYWJlbFRvVHJhbnNsYXRlITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKWxpc3RUb1RyYW5zbGF0ZSE6IGFueVtdIFxyXG4gIC8vID0gWyB7dGV4dDonRk9STS5SQURJT1RFWFQxJywgdmFsdWU6MX0se3RleHQ6ICdGT1JNLlJBRElPVEVYVDInLCB2YWx1ZTogMn1dXHJcblxyXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgcHVibGljIG92ZXJyaWRlIGNvbnRyb2xEaXI6IE5nQ29udHJvbCxcclxuICAgIHByb3RlY3RlZCBwaXBlVHJhbnNsYXRlOiBUcmFuc2xhdGVQaXBlLFxyXG4gICAgcHVibGljIF9zcnZUcmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgKXtcclxuICAgIHN1cGVyKGNvbnRyb2xEaXIpXHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVPcHRpb25zKCl7XHJcbiAgICB0aGlzLnJhZGlvT3B0aW9ucyA9IHRoaXMubGlzdFRvVHJhbnNsYXRlLm1hcCh4ID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZXh0OiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHRoaXMuZ2V0VGV4dCh4KSkgLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLmdldFZhbHVlKHgpXHJcbiAgICAgIH0gXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5lcnJvckNvbnRyb2wudHJhbnNsYXRlRnVuY2lvbiA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHBhcmFtKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudHJhbnNsYXRlT3B0aW9ucygpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRyYW5zbGF0ZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIGdldEZiR3JvdXAoKTogRm9ybUdyb3VwICB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sRGlyLmNvbnRyb2w/LnBhcmVudCBhcyBGb3JtR3JvdXB8fCBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG5cclxufVxyXG4iLCJcclxuXHJcbjxuZy1jb250YWluZXIgIFtmb3JtR3JvdXBdPVwiZ2V0RmJHcm91cCgpXCI+XHJcbiAgPHNvZi1yYWRpby1idXR0b24tY29udHJvbFxyXG4gIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xEaXIubmFtZVwiXHJcbiAgW2xpc3RdPVwicmFkaW9PcHRpb25zXCJcclxuICB0ZXh0UGF0aD1cInRleHRcIlxyXG4gIHZhbHVlUGF0aD1cInZhbHVlXCJcclxuICA+XHJcbiAgICBcclxuICA8L3NvZi1yYWRpby1idXR0b24tY29udHJvbD5cclxuPC9uZy1jb250YWluZXI+XHJcbiJdfQ==