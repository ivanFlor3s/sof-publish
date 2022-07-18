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
DenseTextMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DenseTextMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DenseTextMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DenseTextMaterialControlComponent, selector: "sof-dense-text-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\"\r\n    class=\"dense\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [maxLength]=\"maxLength ? maxLength : 9999\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n\r\n", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DenseTextMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-dense-text-control', encapsulation: ViewEncapsulation.None, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\"\r\n    class=\"dense\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [maxLength]=\"maxLength ? maxLength : 9999\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n\r\n", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVuc2UtdGV4dC1jb250cm9sLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvbWF0ZXJpYWwtY29udHJvbHMvZGVuc2UtdGV4dC1jb250cm9sL2RlbnNlLXRleHQtY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2RlbnNlLXRleHQtY29udHJvbC9kZW5zZS10ZXh0LWNvbnRyb2wtY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQVFsRSxNQUFNLE9BQU8saUNBQWtDLFNBQVEsb0JBQW9COzsrSEFBOUQsaUNBQWlDO21IQUFqQyxpQ0FBaUMsNEdBQ2pDLHNCQUFzQix1RUNYbkMsNHZCQXlCQTs0RkRmYSxpQ0FBaUM7a0JBTjdDLFNBQVM7K0JBQ0Usd0JBQXdCLGlCQUduQixpQkFBaUIsQ0FBQyxJQUFJOzhCQUdGLFlBQVk7c0JBQTlDLFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRleHRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS90ZXh0LWNvbnRyb2wvdGV4dC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2YtZGVuc2UtdGV4dC1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGVuc2UtdGV4dC1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kZW5zZS10ZXh0LWNvbnRyb2wtY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZW5zZVRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBUZXh0Q29udHJvbENvbXBvbmVudHtcclxuICBAVmlld0NoaWxkKEVycm9yTWF0ZXJpYWxDb21wb25lbnQpIGVycm9yQ29udHJvbDogRXJyb3JNYXRlcmlhbENvbXBvbmVudFxyXG4gIFxyXG59XHJcbiIsIjxtYXQtbGFiZWxcclxuICBbbmdDbGFzc109XCJ7XHJcbiAgICAncmVxdWlyZWQtbGFiZWwnOiBpc1JlcXVpcmVkLCBcclxuICAgICd0ZXh0LWVycm9yJzogRXNJbnZhbGlkbyxcclxuICAgICdhY3RpdmUtbGFiZWwnOmlucHV0UmVmLmZvY3VzZWQsXHJcbiAgICAnbm8tbGFiZWwnOiBub0xhYmVsXHJcbiAgfVwiXHJcbj57e2xhYmVsfX08L21hdC1sYWJlbD5cclxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcclxuICAgIGNsYXNzPVwiZGVuc2VcIlxyXG4gICAgW25nQ2xhc3NdPVwieyAnZXJyb3ItZmllbGQnOiBFc0ludmFsaWRvIH1cIj5cclxuICA8aW5wdXRcclxuICAgICNpbnB1dFJlZj1cIm1hdElucHV0XCJcclxuICAgIG1hdElucHV0XHJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAoaW5wdXQpPVwib25JbnB1dCgkYW55KCRldmVudC50YXJnZXQpLnZhbHVlKVwiXHJcbiAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aCA/IG1heExlbmd0aCA6IDk5OTlcIlxyXG4gIC8+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuXHJcbiJdfQ==