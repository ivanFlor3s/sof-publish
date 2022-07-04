import { Component, ViewChild } from '@angular/core';
import { PhoneControlComponent } from '../../base/phone-control/phone-control';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
export class PhoneMaterialControlComponent extends PhoneControlComponent {
}
PhoneMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PhoneMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PhoneMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: PhoneMaterialControlComponent, selector: "sof-phone-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n        #inputRef=\"matInput\"\r\n        matInput\r\n        class=\"form-control\"\r\n        [placeholder]=\"placeholder\"\r\n        [value]=\"value\"\r\n        [disabled]=\"disabled\"\r\n        type=\"tel\"\r\n        (input)=\"onInput($any($event.target).value)\"\r\n        [maxLength]=\"maxLength ? maxLength : 9999\">\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [":host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PhoneMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-phone-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n        #inputRef=\"matInput\"\r\n        matInput\r\n        class=\"form-control\"\r\n        [placeholder]=\"placeholder\"\r\n        [value]=\"value\"\r\n        [disabled]=\"disabled\"\r\n        type=\"tel\"\r\n        (input)=\"onInput($any($event.target).value)\"\r\n        [maxLength]=\"maxLength ? maxLength : 9999\">\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [":host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3Bob25lLWNvbnRyb2wvcGhvbmUtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3Bob25lLWNvbnRyb2wvcGhvbmUtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQU9sRSxNQUFNLE9BQU8sNkJBQThCLFNBQVEscUJBQXFCOzswSEFBM0QsNkJBQTZCOzhHQUE3Qiw2QkFBNkIsdUdBQzdCLHNCQUFzQix1RUNWbkMsd3dCQXVCQTsyRkRkYSw2QkFBNkI7a0JBTHpDLFNBQVM7K0JBQ0UsbUJBQW1COzhCQUtNLFlBQVk7c0JBQTlDLFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGhvbmVDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9waG9uZS1jb250cm9sL3Bob25lLWNvbnRyb2wnO1xyXG5pbXBvcnQgeyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLXBob25lLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waG9uZS1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9waG9uZS1jb250cm9sLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBob25lTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgUGhvbmVDb250cm9sQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKEVycm9yTWF0ZXJpYWxDb21wb25lbnQpIGVycm9yQ29udHJvbDogRXJyb3JNYXRlcmlhbENvbXBvbmVudFxyXG5cclxufVxyXG4iLCI8bWF0LWxhYmVsXHJcbiAgW25nQ2xhc3NdPVwie1xyXG4gICAgJ3JlcXVpcmVkLWxhYmVsJzogaXNSZXF1aXJlZCxcclxuICAgICd0ZXh0LWVycm9yJzogRXNJbnZhbGlkbyxcclxuICAgICdhY3RpdmUtbGFiZWwnOiBpbnB1dFJlZi5mb2N1c2VkLFxyXG4gICAgJ25vLWxhYmVsJzogbm9MYWJlbFxyXG4gIH1cIlxyXG4gID57eyBsYWJlbCB9fTwvbWF0LWxhYmVsXHJcbj5cclxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgXHJcbiAgICBbbmdDbGFzc109XCJ7ICdlcnJvci1maWVsZCc6IEVzSW52YWxpZG8gfVwiPlxyXG4gICAgPGlucHV0XHJcbiAgICAgICAgI2lucHV0UmVmPVwibWF0SW5wdXRcIlxyXG4gICAgICAgIG1hdElucHV0XHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUpXCJcclxuICAgICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aCA/IG1heExlbmd0aCA6IDk5OTlcIj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPHNvZi1lcnJvciBbY29udHJvbEludmFsaWRvXT1cIkVzSW52YWxpZG9cIiBbbGFiZWxdPVwibGFiZWxcIiBbZXJyb3JzXT1cImVycm9yc1wiPjwvc29mLWVycm9yPlxyXG4iXX0=