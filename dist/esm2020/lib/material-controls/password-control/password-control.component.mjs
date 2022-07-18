import { Component, ViewChild } from '@angular/core';
import { PasswordControlComponent } from '../../base/password-control/password-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/icon";
import * as i3 from "../error/error.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
export class PasswordMaterialControlComponent extends PasswordControlComponent {
}
PasswordMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PasswordMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PasswordMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PasswordMaterialControlComponent, selector: "sof-password-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n    <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      matInput\r\n      #inputRef=\"matInput\"\r\n      [type]=\"show ? 'text' : 'password'\"\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    />\r\n\r\n    <mat-icon *ngIf=\"showEye\" matSuffix (click)=\"show = !show\">\r\n      {{ show ? \"visibility_off\" : \"visibility\" }}\r\n    </mat-icon>\r\n  </mat-form-field>\r\n\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i3.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PasswordMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-password-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n    <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      matInput\r\n      #inputRef=\"matInput\"\r\n      [type]=\"show ? 'text' : 'password'\"\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    />\r\n\r\n    <mat-icon *ngIf=\"showEye\" matSuffix (click)=\"show = !show\">\r\n      {{ show ? \"visibility_off\" : \"visibility\" }}\r\n    </mat-icon>\r\n  </mat-form-field>\r\n\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3Bhc3N3b3JkLWNvbnRyb2wvcGFzc3dvcmQtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3Bhc3N3b3JkLWNvbnRyb2wvcGFzc3dvcmQtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7OztBQU9sRSxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsd0JBQXdCOzs4SEFBakUsZ0NBQWdDO2tIQUFoQyxnQ0FBZ0MsMEdBQ2hDLHNCQUFzQix1RUNWbkMsdWdDQStCTTs0RkR0Qk8sZ0NBQWdDO2tCQUw1QyxTQUFTOytCQUNFLHNCQUFzQjs4QkFLRyxZQUFZO3NCQUE5QyxTQUFTO3VCQUFDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhc3N3b3JkQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvcGFzc3dvcmQtY29udHJvbC9wYXNzd29yZC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2YtcGFzc3dvcmQtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Bhc3N3b3JkLWNvbnRyb2wuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBQYXNzd29yZENvbnRyb2xDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoRXJyb3JNYXRlcmlhbENvbXBvbmVudCkgZXJyb3JDb250cm9sOiBFcnJvck1hdGVyaWFsQ29tcG9uZW50XHJcbn1cclxuIiwiPG1hdC1sYWJlbFxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAgICdyZXF1aXJlZC1sYWJlbCc6IGlzUmVxdWlyZWQsXHJcbiAgICAndGV4dC1lcnJvcic6IEVzSW52YWxpZG8sXHJcbiAgICAnYWN0aXZlLWxhYmVsJzogaW5wdXRSZWYuZm9jdXNlZCxcclxuICAgICduby1sYWJlbCc6IG5vTGFiZWwsXHJcbiAgICAnc2lkZS1sYWJlbCc6IHNpZGVMYWJlbFxyXG4gIH1cIlxyXG4gID57eyBsYWJlbCB9fTwvbWF0LWxhYmVsXHJcbj5cclxuPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgXHJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ2Vycm9yLWZpZWxkJzogRXNJbnZhbGlkbyB9XCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgbWF0SW5wdXRcclxuICAgICAgI2lucHV0UmVmPVwibWF0SW5wdXRcIlxyXG4gICAgICBbdHlwZV09XCJzaG93ID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ1wiXHJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGFueSgkZXZlbnQudGFyZ2V0KS52YWx1ZSlcIlxyXG4gICAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aCA/IG1heExlbmd0aCA6IDk5OTlcIlxyXG4gICAgLz5cclxuXHJcbiAgICA8bWF0LWljb24gKm5nSWY9XCJzaG93RXllXCIgbWF0U3VmZml4IChjbGljayk9XCJzaG93ID0gIXNob3dcIj5cclxuICAgICAge3sgc2hvdyA/IFwidmlzaWJpbGl0eV9vZmZcIiA6IFwidmlzaWJpbGl0eVwiIH19XHJcbiAgICA8L21hdC1pY29uPlxyXG4gIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gIDxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuPC9kaXY+Il19