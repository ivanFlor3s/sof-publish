import { Component, ViewChild } from '@angular/core';
import { TextControlComponent } from '../../base/text-control/text-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
export class TextMaterialControlComponent extends TextControlComponent {
}
TextMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TextMaterialControlComponent, selector: "sof-text-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      #inputRef=\"matInput\"\r\n      matInput\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    />\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-text-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      #inputRef=\"matInput\"\r\n      matInput\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    />\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb250cm9sLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvbWF0ZXJpYWwtY29udHJvbHMvdGV4dC1jb250cm9sL3RleHQtY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3RleHQtY29udHJvbC90ZXh0LWNvbnRyb2wtY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQVFsRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsb0JBQW9COzswSEFBekQsNEJBQTRCOzhHQUE1Qiw0QkFBNEIsc0dBQzVCLHNCQUFzQix1RUNYbkMsdTBCQXlCTTs0RkRmTyw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0Usa0JBQWtCOzhCQUtPLFlBQVk7c0JBQTlDLFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL3RleHQtY29udHJvbC90ZXh0LWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2YtdGV4dC1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWNvbnRyb2wtY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBUZXh0Q29udHJvbENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnRcclxuXHJcbn1cclxuIiwiPG1hdC1sYWJlbFxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAgICdyZXF1aXJlZC1sYWJlbCc6IGlzUmVxdWlyZWQsIFxyXG4gICAgJ3RleHQtZXJyb3InOiBFc0ludmFsaWRvLFxyXG4gICAgJ2FjdGl2ZS1sYWJlbCc6aW5wdXRSZWYuZm9jdXNlZCxcclxuICAgICduby1sYWJlbCc6IG5vTGFiZWwsXHJcbiAgICAnc2lkZS1sYWJlbCc6IHNpZGVMYWJlbFxyXG4gIH1cIlxyXG4+e3tsYWJlbH19PC9tYXQtbGFiZWw+XHJcbjxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBcclxuICAgIFtuZ0NsYXNzXT1cInsgJ2Vycm9yLWZpZWxkJzogRXNJbnZhbGlkbyB9XCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgI2lucHV0UmVmPVwibWF0SW5wdXRcIlxyXG4gICAgICBtYXRJbnB1dFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGFueSgkZXZlbnQudGFyZ2V0KS52YWx1ZSlcIlxyXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aCA/IG1heExlbmd0aCA6IDk5OTlcIlxyXG4gICAgLz5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuPC9kaXY+Il19