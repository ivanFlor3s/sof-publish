import { Component, Input } from '@angular/core';
import { BaseFormFieldComponent } from '../base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class PhoneControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        // console.log(value)
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
}
PhoneControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PhoneControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PhoneControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: PhoneControlComponent, selector: "ng-component", inputs: { DefaultValue: "DefaultValue" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PhoneControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { DefaultValue: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvYmFzZS9waG9uZS1jb250cm9sL3Bob25lLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O0FBTWhGLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxzQkFBc0I7SUFJL0QsT0FBTyxDQUFDLEtBQVU7UUFDaEIscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUdRLFVBQVUsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7O2tIQWhCVSxxQkFBcUI7c0dBQXJCLHFCQUFxQixxSEFIdEIsRUFBRTsyRkFHRCxxQkFBcUI7a0JBSmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OEJBSVUsWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UtZm9ybS1jb250cm9sL2Jhc2UtZm9ybS1jb250cm9sJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBob25lQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtRmllbGRDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBEZWZhdWx0VmFsdWUhOiBzdHJpbmdcclxuXHJcbiAgb25JbnB1dCh2YWx1ZTogYW55KSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpXHJcbiAgfVxyXG5cclxuICBcclxuICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==