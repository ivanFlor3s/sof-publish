import { Component, Input, ViewChild } from '@angular/core';
import { FileUploadMaterialControlComponent, ValidationTypes } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nFileUploadControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
    getMaxSizeValueInValidation(validations) {
        if (validations) {
            return validations.find(x => x.type == ValidationTypes.MaxFileSize)?.value;
        }
        else
            return 0;
    }
}
I18nFileUploadControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nFileUploadControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nFileUploadControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nFileUploadControlComponent, selector: "app-i18n-file-upload-control", inputs: { maxSize: "maxSize", multiple: "multiple" }, viewQueries: [{ propertyName: "control", first: true, predicate: FileUploadMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-file-upload-control \r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxSize]=\"maxSize\"\r\n    [multiple]=\"multiple\"\r\n    >\r\n  </sof-file-upload-control>\r\n</ng-container>\r\n<!-- Probaron init en AG GRID -->", styles: [""], components: [{ type: i1.FileUploadMaterialControlComponent, selector: "sof-file-upload-control", inputs: ["maxSize"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nFileUploadControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-file-upload-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-file-upload-control \r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxSize]=\"maxSize\"\r\n    [multiple]=\"multiple\"\r\n    >\r\n  </sof-file-upload-control>\r\n</ng-container>\r\n<!-- Probaron init en AG GRID -->", styles: [""] }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [FileUploadMaterialControlComponent]
            }], maxSize: [{
                type: Input
            }], multiple: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1maWxlLXVwbG9hZC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1maWxlLXVwbG9hZC1jb250cm9sL2kxOG4tZmlsZS11cGxvYWQtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tZmlsZS11cGxvYWQtY29udHJvbC9pMThuLWZpbGUtdXBsb2FkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBa0IsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU9wRCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsUUFBUTtJQVExRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM3RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCwyQkFBMkIsQ0FBQyxXQUE4QjtRQUN4RCxJQUFHLFdBQVcsRUFBQztZQUNiLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLElBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssQ0FBQTtTQUN4RTs7WUFDSSxPQUFPLENBQUMsQ0FBQTtJQUNmLENBQUM7OzJIQW5CVSw4QkFBOEI7K0dBQTlCLDhCQUE4QixtS0FFOUIsa0NBQWtDLHVFQ1gvQyx5VUFTaUM7MkZEQXBCLDhCQUE4QjtrQkFMMUMsU0FBUzsrQkFDRSw4QkFBOEI7OEJBT3hDLE9BQU87c0JBRE4sU0FBUzt1QkFBQyxrQ0FBa0M7Z0JBR3BDLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCwgVmFsaWRhdGlvbkZvcm0sIFZhbGlkYXRpb25UeXBlcyB9IGZyb20gJ3NvZi1uZy1jb250cm9scyc7XHJcbmltcG9ydCB7IEkxOG5CYXNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9iYXNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWkxOG4tZmlsZS11cGxvYWQtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2kxOG4tZmlsZS11cGxvYWQtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaTE4bi1maWxlLXVwbG9hZC1jb250cm9sLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEkxOG5GaWxlVXBsb2FkQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEkxOG5CYXNlIHtcclxuXHJcbiAgQFZpZXdDaGlsZChGaWxlVXBsb2FkTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50KVxyXG4gIGNvbnRyb2whOiBGaWxlVXBsb2FkTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50O1xyXG5cclxuICBASW5wdXQoKSBtYXhTaXplITogIG51bWJlclxyXG4gIEBJbnB1dCgpIG11bHRpcGxlITogYm9vbGVhblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2wuZXJyb3JDb250cm9sLnRyYW5zbGF0ZUZ1bmNpb24gPSAocGFyYW06IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5waXBlVHJhbnNsYXRlLnRyYW5zZm9ybShwYXJhbSk7XHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICBnZXRNYXhTaXplVmFsdWVJblZhbGlkYXRpb24odmFsaWRhdGlvbnM/OiBWYWxpZGF0aW9uRm9ybVtdKXtcclxuICAgIGlmKHZhbGlkYXRpb25zKXtcclxuICAgICAgcmV0dXJuIHZhbGlkYXRpb25zLmZpbmQoeD0+eC50eXBlPT0gVmFsaWRhdGlvblR5cGVzLk1heEZpbGVTaXplKT8udmFsdWVcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIDBcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdldEZiR3JvdXAoKVwiPlxyXG4gIDxzb2YtZmlsZS11cGxvYWQtY29udHJvbCBcclxuICAgIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbERpci5uYW1lXCJcclxuICAgIFttYXhTaXplXT1cIm1heFNpemVcIlxyXG4gICAgW211bHRpcGxlXT1cIm11bHRpcGxlXCJcclxuICAgID5cclxuICA8L3NvZi1maWxlLXVwbG9hZC1jb250cm9sPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPCEtLSBQcm9iYXJvbiBpbml0IGVuIEFHIEdSSUQgLS0+Il19