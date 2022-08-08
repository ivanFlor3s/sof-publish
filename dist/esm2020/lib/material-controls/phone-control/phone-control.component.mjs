import { Component, ViewChild } from '@angular/core';
import { PhoneControlComponent } from '../../base/phone-control/phone-control';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
import * as i5 from "../../directives/Integer-input.directive";
export class PhoneMaterialControlComponent extends PhoneControlComponent {
}
PhoneMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PhoneMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PhoneMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: PhoneMaterialControlComponent, selector: "sof-phone-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n      <input\r\n          #inputRef=\"matInput\"\r\n          matInput\r\n          IntegerInput\r\n          class=\"form-control\"\r\n          [placeholder]=\"placeholder\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          type=\"tel\"\r\n          (input)=\"onInput($any($event.target).value)\"\r\n          [maxLength]=\"maxLength ? maxLength : 9999\"\r\n          [readonly]=\"readOnly\"\r\n        >\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container{width:100%}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i5.IntegerInputDirective, selector: "[IntegerInput]", inputs: ["ignoreSpaces"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PhoneMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-phone-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n      <input\r\n          #inputRef=\"matInput\"\r\n          matInput\r\n          IntegerInput\r\n          class=\"form-control\"\r\n          [placeholder]=\"placeholder\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          type=\"tel\"\r\n          (input)=\"onInput($any($event.target).value)\"\r\n          [maxLength]=\"maxLength ? maxLength : 9999\"\r\n          [readonly]=\"readOnly\"\r\n        >\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container{width:100%}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3Bob25lLWNvbnRyb2wvcGhvbmUtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3Bob25lLWNvbnRyb2wvcGhvbmUtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFPbEUsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHFCQUFxQjs7MEhBQTNELDZCQUE2Qjs4R0FBN0IsNkJBQTZCLHVHQUM3QixzQkFBc0IsdUVDVm5DLHc3QkE0Qk07MkZEbkJPLDZCQUE2QjtrQkFMekMsU0FBUzsrQkFDRSxtQkFBbUI7OEJBS00sWUFBWTtzQkFBOUMsU0FBUzt1QkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQaG9uZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL3Bob25lLWNvbnRyb2wvcGhvbmUtY29udHJvbCc7XHJcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2YtcGhvbmUtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Bob25lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bob25lLWNvbnRyb2wuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGhvbmVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBQaG9uZUNvbnRyb2xDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoRXJyb3JNYXRlcmlhbENvbXBvbmVudCkgZXJyb3JDb250cm9sOiBFcnJvck1hdGVyaWFsQ29tcG9uZW50XHJcblxyXG59XHJcbiIsIjxtYXQtbGFiZWxcclxuICBbbmdDbGFzc109XCJ7XHJcbiAgICAncmVxdWlyZWQtbGFiZWwnOiBpc1JlcXVpcmVkLFxyXG4gICAgJ3RleHQtZXJyb3InOiBFc0ludmFsaWRvLFxyXG4gICAgJ2FjdGl2ZS1sYWJlbCc6IGlucHV0UmVmLmZvY3VzZWQsXHJcbiAgICAnbm8tbGFiZWwnOiBub0xhYmVsLFxyXG4gICAgJ3NpZGUtbGFiZWwnOiBzaWRlTGFiZWxcclxuICB9XCJcclxuICA+e3sgbGFiZWwgfX08L21hdC1sYWJlbFxyXG4+XHJcbjxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBcclxuICAgICAgW25nQ2xhc3NdPVwieyAnZXJyb3ItZmllbGQnOiBFc0ludmFsaWRvIH1cIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgICAjaW5wdXRSZWY9XCJtYXRJbnB1dFwiXHJcbiAgICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgICAgSW50ZWdlcklucHV0XHJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUpXCJcclxuICAgICAgICAgIFttYXhMZW5ndGhdPVwibWF4TGVuZ3RoID8gbWF4TGVuZ3RoIDogOTk5OVwiXHJcbiAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICAgID5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuPC9kaXY+Il19