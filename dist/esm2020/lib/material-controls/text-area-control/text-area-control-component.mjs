import { Component, Input, ViewChild } from '@angular/core';
import { TextAreaControlComponent } from '../../base/text-area-control/text-area-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
export class TextAreaMaterialControlComponent extends TextAreaControlComponent {
    constructor() {
        super(...arguments);
        this.resizeable = false;
        this.rowsArea = 2;
    }
}
TextAreaMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextAreaMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextAreaMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TextAreaMaterialControlComponent, selector: "sof-text-area-control", inputs: { resizeable: "resizeable", rowsArea: "rowsArea" }, viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label [ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'active-label': inputRef.focused,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\">{{label}}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n\r\n    <textarea\r\n      [ngClass]=\"{'no-resizeable':!resizeable}\"\r\n      matInput\r\n      #inputRef=\"matInput\"\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [rows]=\"rowsArea\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    >\r\n    </textarea>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}:host mat-form-field textarea.no-resizeable{resize:none}:host mat-label.side-label{margin-bottom:35px}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextAreaMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-text-area-control', template: "<mat-label [ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'active-label': inputRef.focused,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\">{{label}}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n\r\n    <textarea\r\n      [ngClass]=\"{'no-resizeable':!resizeable}\"\r\n      matInput\r\n      #inputRef=\"matInput\"\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [rows]=\"rowsArea\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    >\r\n    </textarea>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}:host mat-form-field textarea.no-resizeable{resize:none}:host mat-label.side-label{margin-bottom:35px}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }], resizeable: [{
                type: Input
            }], rowsArea: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1hcmVhLWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy90ZXh0LWFyZWEtY29udHJvbC90ZXh0LWFyZWEtY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3RleHQtYXJlYS1jb250cm9sL3RleHQtYXJlYS1jb250cm9sLWNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUlwRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBT2xFLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSx3QkFBd0I7SUFMOUU7O1FBU1csZUFBVSxHQUFHLEtBQUssQ0FBQTtRQUNsQixhQUFRLEdBQUcsQ0FBQyxDQUFBO0tBQ3RCOzs4SEFOWSxnQ0FBZ0M7a0hBQWhDLGdDQUFnQyx1S0FFaEMsc0JBQXNCLHVFQ2RuQyx5NEJBMkJNOzRGRGZPLGdDQUFnQztrQkFMNUMsU0FBUzsrQkFDRSx1QkFBdUI7OEJBTUUsWUFBWTtzQkFBOUMsU0FBUzt1QkFBQyxzQkFBc0I7Z0JBRXhCLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0QXJlYUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL3RleHQtYXJlYS1jb250cm9sL3RleHQtYXJlYS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2YtdGV4dC1hcmVhLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWFyZWEtY29udHJvbC1jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1hcmVhLWNvbnRyb2wtY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRBcmVhTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgVGV4dEFyZWFDb250cm9sQ29tcG9uZW50IHtcclxuXHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnRcclxuXHJcbiAgQElucHV0KCkgcmVzaXplYWJsZSA9IGZhbHNlXHJcbiAgQElucHV0KCkgcm93c0FyZWEgPSAyXHJcbn1cclxuIiwiPG1hdC1sYWJlbCBbbmdDbGFzc109XCJ7XHJcbiAgJ3JlcXVpcmVkLWxhYmVsJzogaXNSZXF1aXJlZCxcclxuICAndGV4dC1lcnJvcic6IEVzSW52YWxpZG8sXHJcbiAgJ2FjdGl2ZS1sYWJlbCc6IGlucHV0UmVmLmZvY3VzZWQsXHJcbiAgJ25vLWxhYmVsJzogbm9MYWJlbCxcclxuICAnc2lkZS1sYWJlbCc6IHNpZGVMYWJlbFxyXG59XCI+e3tsYWJlbH19PC9tYXQtbGFiZWxcclxuPlxyXG48ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcclxuICAgIFtuZ0NsYXNzXT1cInsgJ2Vycm9yLWZpZWxkJzogRXNJbnZhbGlkbyB9XCI+XHJcblxyXG4gICAgPHRleHRhcmVhXHJcbiAgICAgIFtuZ0NsYXNzXT1cInsnbm8tcmVzaXplYWJsZSc6IXJlc2l6ZWFibGV9XCJcclxuICAgICAgbWF0SW5wdXRcclxuICAgICAgI2lucHV0UmVmPVwibWF0SW5wdXRcIlxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFtyb3dzXT1cInJvd3NBcmVhXCJcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGFueSgkZXZlbnQudGFyZ2V0KS52YWx1ZSlcIlxyXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aCA/IG1heExlbmd0aCA6IDk5OTlcIlxyXG4gICAgPlxyXG4gICAgPC90ZXh0YXJlYT5cclxuICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuPC9kaXY+Il19