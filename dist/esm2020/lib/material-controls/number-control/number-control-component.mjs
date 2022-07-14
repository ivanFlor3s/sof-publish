import { Component, ViewChild } from '@angular/core';
import { NumberControlComponent } from '../../base/number-control/number-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
import * as i5 from "../../directives/Integer-input.directive";
export class NumberMaterialControlComponent extends NumberControlComponent {
}
NumberMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NumberMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NumberMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: NumberMaterialControlComponent, selector: "sof-number-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n      <input \r\n          matInput\r\n          #inputRef=\"matInput\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"placeholder\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          type=\"text\"\r\n          (input)=\"onInput($any($event.target).value)\"\r\n          IntegerInput\r\n          [maxLength]=\"maxLength ? maxLength : 9999\">\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1;width:100%}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i5.IntegerInputDirective, selector: "[IntegerInput]", inputs: ["ignoreSpaces"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NumberMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-number-control', template: "<mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n      <input \r\n          matInput\r\n          #inputRef=\"matInput\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"placeholder\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          type=\"text\"\r\n          (input)=\"onInput($any($event.target).value)\"\r\n          IntegerInput\r\n          [maxLength]=\"maxLength ? maxLength : 9999\">\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1;width:100%}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9udW1iZXItY29udHJvbC9udW1iZXItY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL251bWJlci1jb250cm9sL251bWJlci1jb250cm9sLWNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBT2xFLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxzQkFBc0I7OzRIQUE3RCw4QkFBOEI7Z0hBQTlCLDhCQUE4Qix3R0FDOUIsc0JBQXNCLHVFQ1ZuQyxvNEJBeUJNOzRGRGhCTyw4QkFBOEI7a0JBTDFDLFNBQVM7K0JBQ0Usb0JBQW9COzhCQUtLLFlBQVk7c0JBQTlDLFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnVtYmVyQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvbnVtYmVyLWNvbnRyb2wvbnVtYmVyLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvZi1udW1iZXItY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9udW1iZXItY29udHJvbC1jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgTnVtYmVyQ29udHJvbENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnRcclxuICBcclxufVxyXG4iLCI8bWF0LWxhYmVsIFtuZ0NsYXNzXT1cIntcclxuICAgICdyZXF1aXJlZC1sYWJlbCc6IGlzUmVxdWlyZWQsXHJcbiAgICAndGV4dC1lcnJvcic6IEVzSW52YWxpZG8sXHJcbiAgICAnYWN0aXZlLWxhYmVsJzogaW5wdXRSZWYuZm9jdXNlZCxcclxuICAgICduby1sYWJlbCc6IG5vTGFiZWwsXHJcbiAgICAnc2lkZS1sYWJlbCc6IHNpZGVMYWJlbFxyXG4gIH1cIlxyXG4gID57eyBsYWJlbCB9fTwvbWF0LWxhYmVsXHJcbj5cclxuPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIFxyXG4gICAgICBbbmdDbGFzc109XCJ7ICdlcnJvci1maWVsZCc6IEVzSW52YWxpZG8gfVwiPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgICAgICBtYXRJbnB1dFxyXG4gICAgICAgICAgI2lucHV0UmVmPVwibWF0SW5wdXRcIlxyXG4gICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGFueSgkZXZlbnQudGFyZ2V0KS52YWx1ZSlcIlxyXG4gICAgICAgICAgSW50ZWdlcklucHV0XHJcbiAgICAgICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aCA/IG1heExlbmd0aCA6IDk5OTlcIj5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuPC9kaXY+Il19