import { Component, ViewChild, Input, Self, Optional } from '@angular/core';
import { RadioButtonMaterialControlComponent } from 'sof-ng-controls';
import { FormControl, FormGroup } from '@angular/forms';
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
        return this.controlDir?.control?.parent || new FormGroup({ 'none': new FormControl() });
    }
}
I18nRadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRadioButtonComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.TranslatePipe }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nRadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nRadioButtonComponent, selector: "app-i18n-radio-button", inputs: { labelToTranslate: "labelToTranslate", listToTranslate: "listToTranslate" }, viewQueries: [{ propertyName: "control", first: true, predicate: RadioButtonMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n\r\n<ng-container  [formGroup]=\"getFbGroup()\">\r\n  <sof-radio-button-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"!!controlDir ? controlDir.name : 'none'\"\r\n  [list]=\"radioOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  (change)=\"onInput($event)\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-radio-button-control>\r\n</ng-container>\r\n", components: [{ type: i3.RadioButtonMaterialControlComponent, selector: "sof-radio-button-control" }], directives: [{ type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-radio-button', template: "\r\n\r\n<ng-container  [formGroup]=\"getFbGroup()\">\r\n  <sof-radio-button-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"!!controlDir ? controlDir.name : 'none'\"\r\n  [list]=\"radioOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  (change)=\"onInput($event)\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-radio-button-control>\r\n</ng-container>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i2.TranslatePipe }, { type: i2.TranslateService }]; }, propDecorators: { control: [{
                type: ViewChild,
                args: [RadioButtonMaterialControlComponent]
            }], labelToTranslate: [{
                type: Input
            }], listToTranslate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1jb250cm9scy9pMThuLXJhZGlvLWJ1dHRvbi9pMThuLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tcmFkaW8tYnV0dG9uL2kxOG4tcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFVLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU9uRSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsbUNBQW1DO0lBVS9FLDZFQUE2RTtJQUU3RSxZQUFnRCxVQUFxQixFQUN6RCxhQUE0QixFQUMvQixpQkFBbUM7UUFFMUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBSjZCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDekQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVQ1QyxpQkFBWSxHQUErQixFQUFFLENBQUE7SUFZN0MsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQyxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDeEIsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUUsR0FBRyxFQUFFO1lBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQW1CLElBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEcsQ0FBQzs7cUhBNUNVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDRMQUV4QixtQ0FBbUMsdUVDWmhELHNkQWlCQTsyRkRQYSx3QkFBd0I7a0JBSnBDLFNBQVM7K0JBQ0UsdUJBQXVCOzswQkFlcEIsUUFBUTs7MEJBQUksSUFBSTt1R0FUN0IsT0FBTztzQkFETixTQUFTO3VCQUFDLG1DQUFtQztnQkFLckMsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUVFLGVBQWU7c0JBQXRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIFNlbGYsIE9uSW5pdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25NYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBSYWRpb0J1dHRvbkNvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMvbGliL2Jhc2UvcmFkaW8tYnV0dG9uLWNvbnRyb2wvcmFkaW8tYnV0dG9uLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLXJhZGlvLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2kxOG4tcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4blJhZGlvQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgUmFkaW9CdXR0b25NYXRlcmlhbENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xyXG5cclxuICBAVmlld0NoaWxkKFJhZGlvQnV0dG9uTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50KVxyXG4gIGNvbnRyb2whOiBSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudDtcclxuXHJcbiAgcmFkaW9PcHRpb25zOiB7dGV4dDpzdHJpbmcsIHZhbHVlOmFueX1bXSA9IFtdXHJcblxyXG4gIEBJbnB1dCgpIGxhYmVsVG9UcmFuc2xhdGUhOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpbGlzdFRvVHJhbnNsYXRlITogYW55W10gXHJcbiAgLy8gPSBbIHt0ZXh0OidGT1JNLlJBRElPVEVYVDEnLCB2YWx1ZToxfSx7dGV4dDogJ0ZPUk0uUkFESU9URVhUMicsIHZhbHVlOiAyfV1cclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgb3ZlcnJpZGUgY29udHJvbERpcjogTmdDb250cm9sLFxyXG4gICAgcHJvdGVjdGVkIHBpcGVUcmFuc2xhdGU6IFRyYW5zbGF0ZVBpcGUsXHJcbiAgICBwdWJsaWMgX3NydlRyYW5zbGF0ZVBpcGU6IFRyYW5zbGF0ZVNlcnZpY2VcclxuICApe1xyXG4gICAgc3VwZXIoY29udHJvbERpcilcclxuICB9XHJcbiAgXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZU9wdGlvbnMoKXtcclxuICAgIHRoaXMucmFkaW9PcHRpb25zID0gdGhpcy5saXN0VG9UcmFuc2xhdGUubWFwKHggPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRleHQ6IHRoaXMucGlwZVRyYW5zbGF0ZS50cmFuc2Zvcm0odGhpcy5nZXRUZXh0KHgpKSAsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoeClcclxuICAgICAgfSBcclxuICAgIH0pIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sLmVycm9yQ29udHJvbC50cmFuc2xhdGVGdW5jaW9uID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMucGlwZVRyYW5zbGF0ZS50cmFuc2Zvcm0ocGFyYW0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9zcnZUcmFuc2xhdGVQaXBlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoICgpID0+IHtcclxuICAgICAgdGhpcy50cmFuc2xhdGVPcHRpb25zKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmJHcm91cCgpOiBGb3JtR3JvdXAgIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2w/LnBhcmVudCBhcyBGb3JtR3JvdXB8fCBuZXcgRm9ybUdyb3VwKHsgJ25vbmUnOiBuZXcgRm9ybUNvbnRyb2woKSB9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG5cclxufVxyXG4iLCJcclxuXHJcbjxuZy1jb250YWluZXIgIFtmb3JtR3JvdXBdPVwiZ2V0RmJHcm91cCgpXCI+XHJcbiAgPHNvZi1yYWRpby1idXR0b24tY29udHJvbFxyXG4gIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICBbZm9ybUNvbnRyb2xOYW1lXT1cIiEhY29udHJvbERpciA/IGNvbnRyb2xEaXIubmFtZSA6ICdub25lJ1wiXHJcbiAgW2xpc3RdPVwicmFkaW9PcHRpb25zXCJcclxuICB0ZXh0UGF0aD1cInRleHRcIlxyXG4gIHZhbHVlUGF0aD1cInZhbHVlXCJcclxuICBbbm9MYWJlbF09XCJub0xhYmVsXCJcclxuICBbc2lkZUxhYmVsXT1cInNpZGVMYWJlbFwiXHJcbiAgKGNoYW5nZSk9XCJvbklucHV0KCRldmVudClcIlxyXG4gIFtyZWFkT25seV09XCJyZWFkT25seVwiXHJcbiAgPlxyXG4gICAgXHJcbiAgPC9zb2YtcmFkaW8tYnV0dG9uLWNvbnRyb2w+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=