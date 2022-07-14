import { Component, ViewChild } from '@angular/core';
import { SelectControlComponent } from '../../base/select-control/select-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "../error/error.component";
import * as i5 from "@angular/common";
export class SelectMaterialControlComponent extends SelectControlComponent {
}
SelectMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
SelectMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: SelectMaterialControlComponent, selector: "sof-select-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n<mat-label\r\n[ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'active-label': inputRef.focused,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\"\r\n>{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <mat-select\r\n      matSelect\r\n      #inputRef=\"matSelect\"\r\n      [disabled]=\"disabled\"\r\n      [(value)]=\"value\"\r\n      (selectionChange)=\"onInput($event.value)\"\r\n      [placeholder]=\"placeholder\"> \r\n      <mat-option \r\n        *ngFor=\"let item of list; let i=index\"\r\n        [value]=\"getValue(item)\">\r\n        {{getText(item)}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1;width:100%}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i4.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-select-control', template: "\r\n<mat-label\r\n[ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'active-label': inputRef.focused,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\"\r\n>{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <mat-select\r\n      matSelect\r\n      #inputRef=\"matSelect\"\r\n      [disabled]=\"disabled\"\r\n      [(value)]=\"value\"\r\n      (selectionChange)=\"onInput($event.value)\"\r\n      [placeholder]=\"placeholder\"> \r\n      <mat-option \r\n        *ngFor=\"let item of list; let i=index\"\r\n        [value]=\"getValue(item)\">\r\n        {{getText(item)}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1;width:100%}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9zZWxlY3QtY29udHJvbC9zZWxlY3QtY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3NlbGVjdC1jb250cm9sL3NlbGVjdC1jb250cm9sLWNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBT2xFLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxzQkFBc0I7OzRIQUE3RCw4QkFBOEI7Z0hBQTlCLDhCQUE4Qix3R0FDOUIsc0JBQXNCLHVFQ1ZuQyw4NEJBNkJNOzRGRHBCTyw4QkFBOEI7a0JBTDFDLFNBQVM7K0JBQ0Usb0JBQW9COzhCQUtLLFlBQVk7c0JBQTlDLFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VsZWN0Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2Uvc2VsZWN0LWNvbnRyb2wvc2VsZWN0LWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvZi1zZWxlY3QtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QtY29udHJvbC1jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgU2VsZWN0Q29udHJvbENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnRcclxuXHJcbn1cclxuIiwiXHJcbjxtYXQtbGFiZWxcclxuW25nQ2xhc3NdPVwie1xyXG4gICdyZXF1aXJlZC1sYWJlbCc6IGlzUmVxdWlyZWQsXHJcbiAgJ3RleHQtZXJyb3InOiBFc0ludmFsaWRvLFxyXG4gICdhY3RpdmUtbGFiZWwnOiBpbnB1dFJlZi5mb2N1c2VkLFxyXG4gICduby1sYWJlbCc6IG5vTGFiZWwsXHJcbiAgJ3NpZGUtbGFiZWwnOiBzaWRlTGFiZWxcclxufVwiXHJcbj57eyBsYWJlbCB9fTwvbWF0LWxhYmVsXHJcbj5cclxuPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIFxyXG4gICAgW25nQ2xhc3NdPVwieyAnZXJyb3ItZmllbGQnOiBFc0ludmFsaWRvIH1cIj5cclxuICAgIDxtYXQtc2VsZWN0XHJcbiAgICAgIG1hdFNlbGVjdFxyXG4gICAgICAjaW5wdXRSZWY9XCJtYXRTZWxlY3RcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbKHZhbHVlKV09XCJ2YWx1ZVwiXHJcbiAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwib25JbnB1dCgkZXZlbnQudmFsdWUpXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+IFxyXG4gICAgICA8bWF0LW9wdGlvbiBcclxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0OyBsZXQgaT1pbmRleFwiXHJcbiAgICAgICAgW3ZhbHVlXT1cImdldFZhbHVlKGl0ZW0pXCI+XHJcbiAgICAgICAge3tnZXRUZXh0KGl0ZW0pfX1cclxuICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgPC9tYXQtc2VsZWN0PlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPHNvZi1lcnJvciBbY29udHJvbEludmFsaWRvXT1cIkVzSW52YWxpZG9cIiBbbGFiZWxdPVwibGFiZWxcIiBbZXJyb3JzXT1cImVycm9yc1wiPjwvc29mLWVycm9yPlxyXG48L2Rpdj4iXX0=