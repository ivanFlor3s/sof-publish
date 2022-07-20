import { Component, ViewChild } from '@angular/core';
import { DateRangePickerControlComponent } from '../../base/date-range-picker-control/date-range-picker-control';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "../error/error.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/input";
export class DateRangePickerMaterialControlComponent extends DateRangePickerControlComponent {
}
DateRangePickerMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DateRangePickerMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DateRangePickerMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DateRangePickerMaterialControlComponent, selector: "sof-date-range-picker-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\n  [ngClass]=\"{\n    'required-label': isRequired,\n    'text-error': EsInvalido,\n    'active-label': inputRef1.focused || inputRef2.focused,\n    'no-label': noLabel,\n    'side-label': sideLabel\n  }\"\n  >{{ label }}</mat-label\n>\n\n<div class=\"input-container\" (click)=\"togglePicker(picker)\">\n  <mat-form-field\n    appearance=\"outline\"\n    [ngClass]=\"{ 'error-field': EsInvalido }\"\n  >\n    <mat-date-range-input [formGroup]=\"rangeForm\" [rangePicker]=\"picker\">\n      <input\n        autocomplete=\"off\"\n        matInput\n        #inputRef1=\"matInput\"\n        [readonly]=\"!editable\"\n        matStartDate\n        formControlName=\"start\"\n        [placeholder]=\"placeHolderFromDate\"\n      />\n      <input\n        autocomplete=\"off\"\n        matInput\n        #inputRef2=\"matInput\"\n        [readonly]=\"!editable\"\n        matEndDate\n        formControlName=\"end\"\n        [placeholder]=\"placeHolderToDate\"\n      />\n    </mat-date-range-input>\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-date-range-picker #picker></mat-date-range-picker>\n  </mat-form-field>\n  <sof-error\n    [controlInvalido]=\"EsInvalido\"\n    [label]=\"label\"\n    [errors]=\"errors\"\n  ></sof-error>\n</div>\n", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container{width:100%}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { type: i3.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { type: i1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DateRangePickerMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-date-range-picker-control', template: "<mat-label\n  [ngClass]=\"{\n    'required-label': isRequired,\n    'text-error': EsInvalido,\n    'active-label': inputRef1.focused || inputRef2.focused,\n    'no-label': noLabel,\n    'side-label': sideLabel\n  }\"\n  >{{ label }}</mat-label\n>\n\n<div class=\"input-container\" (click)=\"togglePicker(picker)\">\n  <mat-form-field\n    appearance=\"outline\"\n    [ngClass]=\"{ 'error-field': EsInvalido }\"\n  >\n    <mat-date-range-input [formGroup]=\"rangeForm\" [rangePicker]=\"picker\">\n      <input\n        autocomplete=\"off\"\n        matInput\n        #inputRef1=\"matInput\"\n        [readonly]=\"!editable\"\n        matStartDate\n        formControlName=\"start\"\n        [placeholder]=\"placeHolderFromDate\"\n      />\n      <input\n        autocomplete=\"off\"\n        matInput\n        #inputRef2=\"matInput\"\n        [readonly]=\"!editable\"\n        matEndDate\n        formControlName=\"end\"\n        [placeholder]=\"placeHolderToDate\"\n      />\n    </mat-date-range-input>\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-date-range-picker #picker></mat-date-range-picker>\n  </mat-form-field>\n  <sof-error\n    [controlInvalido]=\"EsInvalido\"\n    [label]=\"label\"\n    [errors]=\"errors\"\n  ></sof-error>\n</div>\n", styles: ["@charset \"UTF-8\";:host{display:flex;flex-wrap:wrap;align-items:center}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label:not(.required-label):empty:after{content:\"\\a0\"}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-top:7px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container{width:100%}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2RhdGUtcmFuZ2UtcGlja2VyLWNvbnRyb2wvZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2RhdGUtcmFuZ2UtcGlja2VyLWNvbnRyb2wvZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7QUFPbEUsTUFBTSxPQUFPLHVDQUF3QyxTQUFRLCtCQUErQjs7b0lBQS9FLHVDQUF1Qzt3SEFBdkMsdUNBQXVDLG1IQUN2QyxzQkFBc0IsdUVDVm5DLDh3Q0E2Q0E7MkZEcENhLHVDQUF1QztrQkFMbkQsU0FBUzsrQkFDRSwrQkFBK0I7OEJBS04sWUFBWTtzQkFBOUMsU0FBUzt1QkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC9kYXRlLXJhbmdlLXBpY2tlci1jb250cm9sJztcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb2YtZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXJhbmdlLXBpY2tlci1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBEYXRlUmFuZ2VQaWNrZXJDb250cm9sQ29tcG9uZW50ICB7XG4gIEBWaWV3Q2hpbGQoRXJyb3JNYXRlcmlhbENvbXBvbmVudCkgZXJyb3JDb250cm9sOiBFcnJvck1hdGVyaWFsQ29tcG9uZW50XG4gIFxuXG5cbn1cbiIsIjxtYXQtbGFiZWxcbiAgW25nQ2xhc3NdPVwie1xuICAgICdyZXF1aXJlZC1sYWJlbCc6IGlzUmVxdWlyZWQsXG4gICAgJ3RleHQtZXJyb3InOiBFc0ludmFsaWRvLFxuICAgICdhY3RpdmUtbGFiZWwnOiBpbnB1dFJlZjEuZm9jdXNlZCB8fCBpbnB1dFJlZjIuZm9jdXNlZCxcbiAgICAnbm8tbGFiZWwnOiBub0xhYmVsLFxuICAgICdzaWRlLWxhYmVsJzogc2lkZUxhYmVsXG4gIH1cIlxuICA+e3sgbGFiZWwgfX08L21hdC1sYWJlbFxuPlxuXG48ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCIgKGNsaWNrKT1cInRvZ2dsZVBpY2tlcihwaWNrZXIpXCI+XG4gIDxtYXQtZm9ybS1maWVsZFxuICAgIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCJcbiAgICBbbmdDbGFzc109XCJ7ICdlcnJvci1maWVsZCc6IEVzSW52YWxpZG8gfVwiXG4gID5cbiAgICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW2Zvcm1Hcm91cF09XCJyYW5nZUZvcm1cIiBbcmFuZ2VQaWNrZXJdPVwicGlja2VyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgI2lucHV0UmVmMT1cIm1hdElucHV0XCJcbiAgICAgICAgW3JlYWRvbmx5XT1cIiFlZGl0YWJsZVwiXG4gICAgICAgIG1hdFN0YXJ0RGF0ZVxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJzdGFydFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZUhvbGRlckZyb21EYXRlXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgI2lucHV0UmVmMj1cIm1hdElucHV0XCJcbiAgICAgICAgW3JlYWRvbmx5XT1cIiFlZGl0YWJsZVwiXG4gICAgICAgIG1hdEVuZERhdGVcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlSG9sZGVyVG9EYXRlXCJcbiAgICAgIC8+XG4gICAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3BpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHNvZi1lcnJvclxuICAgIFtjb250cm9sSW52YWxpZG9dPVwiRXNJbnZhbGlkb1wiXG4gICAgW2xhYmVsXT1cImxhYmVsXCJcbiAgICBbZXJyb3JzXT1cImVycm9yc1wiXG4gID48L3NvZi1lcnJvcj5cbjwvZGl2PlxuIl19