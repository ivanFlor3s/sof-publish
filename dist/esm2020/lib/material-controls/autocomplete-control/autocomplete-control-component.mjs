import { Component, ViewChild } from '@angular/core';
import { AutocompleteControlComponent } from '../../base/autocomplete-control/autocomplete-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/autocomplete";
import * as i3 from "@angular/material/core";
import * as i4 from "../error/error.component";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
export class AutocompleteMaterialControlComponent extends AutocompleteControlComponent {
}
AutocompleteMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AutocompleteMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutocompleteMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: AutocompleteMaterialControlComponent, selector: "sof-autocomplete-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input type=\"text\"\r\n    #inputRef = matInput\r\n    [placeholder]=\"placeholder\"\r\n    matInput\r\n    [value]=\"getText(value)\"\r\n    [disabled]=\"disabled\"\r\n    (input)=\"search($event)\"\r\n    [matAutocomplete]=\"auto\">\r\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSelection($event.option.value)\">\r\n    <mat-option *ngFor=\"let item of filteredList\" [value]=\"getText(item)\">{{getText(item)}}</mat-option>\r\n  </mat-autocomplete>\r\n\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n\r\n", styles: [":host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i4.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AutocompleteMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-autocomplete-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input type=\"text\"\r\n    #inputRef = matInput\r\n    [placeholder]=\"placeholder\"\r\n    matInput\r\n    [value]=\"getText(value)\"\r\n    [disabled]=\"disabled\"\r\n    (input)=\"search($event)\"\r\n    [matAutocomplete]=\"auto\">\r\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSelection($event.option.value)\">\r\n    <mat-option *ngFor=\"let item of filteredList\" [value]=\"getText(item)\">{{getText(item)}}</mat-option>\r\n  </mat-autocomplete>\r\n\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n\r\n", styles: [":host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9hdXRvY29tcGxldGUtY29udHJvbC9hdXRvY29tcGxldGUtY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2F1dG9jb21wbGV0ZS1jb250cm9sL2F1dG9jb21wbGV0ZS1jb250cm9sLWNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBSTlHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztBQU9sRSxNQUFNLE9BQU8sb0NBQXFDLFNBQVEsNEJBQTRCOztpSUFBekUsb0NBQW9DO3FIQUFwQyxvQ0FBb0MsOEdBQ3BDLHNCQUFzQix1RUNibkMsazVCQXlCQTsyRkRiYSxvQ0FBb0M7a0JBTGhELFNBQVM7K0JBQ0UsMEJBQTBCOzhCQUtELFlBQVk7c0JBQTlDLFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2F1dG9jb21wbGV0ZS1jb250cm9sL2F1dG9jb21wbGV0ZS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2YtYXV0b2NvbXBsZXRlLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUtY29udHJvbC1jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLWNvbnRyb2wtY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEF1dG9jb21wbGV0ZUNvbnRyb2xDb21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoRXJyb3JNYXRlcmlhbENvbXBvbmVudCkgZXJyb3JDb250cm9sOiBFcnJvck1hdGVyaWFsQ29tcG9uZW50XHJcblxyXG59XHJcbiIsIjxtYXQtbGFiZWxcclxuICBbbmdDbGFzc109XCJ7XHJcbiAgICAncmVxdWlyZWQtbGFiZWwnOiBpc1JlcXVpcmVkLFxyXG4gICAgJ3RleHQtZXJyb3InOiBFc0ludmFsaWRvLFxyXG4gICAgJ2FjdGl2ZS1sYWJlbCc6IGlucHV0UmVmLmZvY3VzZWRcclxuICB9XCJcclxuICA+e3sgbGFiZWwgfX08L21hdC1sYWJlbFxyXG4+XHJcbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIFxyXG4gICAgW25nQ2xhc3NdPVwieyAnZXJyb3ItZmllbGQnOiBFc0ludmFsaWRvIH1cIj5cclxuICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgI2lucHV0UmVmID0gbWF0SW5wdXRcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICBtYXRJbnB1dFxyXG4gICAgW3ZhbHVlXT1cImdldFRleHQodmFsdWUpXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAoaW5wdXQpPVwic2VhcmNoKCRldmVudClcIlxyXG4gICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCI+XHJcbiAgPG1hdC1hdXRvY29tcGxldGUgYXV0b0FjdGl2ZUZpcnN0T3B0aW9uICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCIgKG9wdGlvblNlbGVjdGVkKT1cIm9uU2VsZWN0aW9uKCRldmVudC5vcHRpb24udmFsdWUpXCI+XHJcbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWx0ZXJlZExpc3RcIiBbdmFsdWVdPVwiZ2V0VGV4dChpdGVtKVwiPnt7Z2V0VGV4dChpdGVtKX19PC9tYXQtb3B0aW9uPlxyXG4gIDwvbWF0LWF1dG9jb21wbGV0ZT5cclxuXHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuXHJcbiJdfQ==