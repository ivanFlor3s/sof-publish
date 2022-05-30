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
TextMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TextMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TextMaterialControlComponent, selector: "sof-text-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [".required-label:after{content:\"*\";color:red}:host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:#f44336}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TextMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-text-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [".required-label:after{content:\"*\";color:red}:host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:#f44336}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1jb250cm9sLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvbWF0ZXJpYWwtY29udHJvbHMvdGV4dC1jb250cm9sL3RleHQtY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3RleHQtY29udHJvbC90ZXh0LWNvbnRyb2wtY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQVFsRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsb0JBQW9COzt5SEFBekQsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsc0dBQzVCLHNCQUFzQix1RUNYbkMsa3BCQXFCQTsyRkRYYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0Usa0JBQWtCOzhCQUtPLFlBQVk7c0JBQTlDLFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL3RleHQtY29udHJvbC90ZXh0LWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2YtdGV4dC1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWNvbnRyb2wtY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBUZXh0Q29udHJvbENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnRcclxuXHJcbn1cclxuIiwiPG1hdC1sYWJlbFxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAgICdyZXF1aXJlZC1sYWJlbCc6IGlzUmVxdWlyZWQsIFxyXG4gICAgJ3RleHQtZXJyb3InOiBFc0ludmFsaWRvLFxyXG4gICAgJ2FjdGl2ZS1sYWJlbCc6aW5wdXRSZWYuZm9jdXNlZFxyXG4gIH1cIlxyXG4+e3tsYWJlbH19PC9tYXQtbGFiZWw+XHJcbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIFxyXG4gICAgW25nQ2xhc3NdPVwieyAnZXJyb3ItZmllbGQnOiBFc0ludmFsaWRvIH1cIj5cclxuICA8aW5wdXRcclxuICAgICNpbnB1dFJlZj1cIm1hdElucHV0XCJcclxuICAgIG1hdElucHV0XHJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAoaW5wdXQpPVwib25JbnB1dCgkYW55KCRldmVudC50YXJnZXQpLnZhbHVlKVwiXHJcbiAgLz5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuPHNvZi1lcnJvciBbY29udHJvbEludmFsaWRvXT1cIkVzSW52YWxpZG9cIiBbbGFiZWxdPVwibGFiZWxcIiBbZXJyb3JzXT1cImVycm9yc1wiPjwvc29mLWVycm9yPlxyXG4iXX0=