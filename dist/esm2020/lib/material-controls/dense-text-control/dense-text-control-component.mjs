import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TextControlComponent } from '../../base/text-control/text-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
export class DenseTextMaterialControlComponent extends TextControlComponent {
}
DenseTextMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DenseTextMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DenseTextMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DenseTextMaterialControlComponent, selector: "sof-dense-text-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\"\r\n    class=\"dense\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    [readonly]=\"readOnly\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n\r\n", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container{width:100%}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DenseTextMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-dense-text-control', encapsulation: ViewEncapsulation.None, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\"\r\n    class=\"dense\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    [readonly]=\"readOnly\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n\r\n", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container{width:100%}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVuc2UtdGV4dC1jb250cm9sLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvbWF0ZXJpYWwtY29udHJvbHMvZGVuc2UtdGV4dC1jb250cm9sL2RlbnNlLXRleHQtY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2RlbnNlLXRleHQtY29udHJvbC9kZW5zZS10ZXh0LWNvbnRyb2wtY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQVFsRSxNQUFNLE9BQU8saUNBQWtDLFNBQVEsb0JBQW9COzs4SEFBOUQsaUNBQWlDO2tIQUFqQyxpQ0FBaUMsNEdBQ2pDLHNCQUFzQix1RUNYbkMsMnhCQTBCQTsyRkRoQmEsaUNBQWlDO2tCQU43QyxTQUFTOytCQUNFLHdCQUF3QixpQkFHbkIsaUJBQWlCLENBQUMsSUFBSTs4QkFHRixZQUFZO3NCQUE5QyxTQUFTO3VCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvdGV4dC1jb250cm9sL3RleHQtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLWRlbnNlLXRleHQtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbnNlLXRleHQtY29udHJvbC1jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGVuc2UtdGV4dC1jb250cm9sLWNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVuc2VUZXh0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgVGV4dENvbnRyb2xDb21wb25lbnR7XHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnRcclxuICBcclxufVxyXG4iLCI8bWF0LWxhYmVsXHJcbiAgW25nQ2xhc3NdPVwie1xyXG4gICAgJ3JlcXVpcmVkLWxhYmVsJzogaXNSZXF1aXJlZCwgXHJcbiAgICAndGV4dC1lcnJvcic6IEVzSW52YWxpZG8sXHJcbiAgICAnYWN0aXZlLWxhYmVsJzppbnB1dFJlZi5mb2N1c2VkLFxyXG4gICAgJ25vLWxhYmVsJzogbm9MYWJlbFxyXG4gIH1cIlxyXG4+e3tsYWJlbH19PC9tYXQtbGFiZWw+XHJcbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiXHJcbiAgICBjbGFzcz1cImRlbnNlXCJcclxuICAgIFtuZ0NsYXNzXT1cInsgJ2Vycm9yLWZpZWxkJzogRXNJbnZhbGlkbyB9XCI+XHJcbiAgPGlucHV0XHJcbiAgICAjaW5wdXRSZWY9XCJtYXRJbnB1dFwiXHJcbiAgICBtYXRJbnB1dFxyXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgdHlwZT1cInRleHRcIlxyXG4gICAgKGlucHV0KT1cIm9uSW5wdXQoJGFueSgkZXZlbnQudGFyZ2V0KS52YWx1ZSlcIlxyXG4gICAgW21heExlbmd0aF09XCJtYXhMZW5ndGggPyBtYXhMZW5ndGggOiA5OTk5XCJcclxuICAgIFtyZWFkb25seV09XCJyZWFkT25seVwiXHJcbiAgLz5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPHNvZi1lcnJvciBbY29udHJvbEludmFsaWRvXT1cIkVzSW52YWxpZG9cIiBbbGFiZWxdPVwibGFiZWxcIiBbZXJyb3JzXT1cImVycm9yc1wiPjwvc29mLWVycm9yPlxyXG5cclxuIl19