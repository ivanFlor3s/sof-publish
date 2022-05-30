import { Component, Input, ViewChild } from '@angular/core';
import { TimePickerControlComponent } from '../../base/time-picker-control/time-picker-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "ngx-material-timepicker";
import * as i3 from "../error/error.component";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
export class TimePickerMaterialControlComponent extends TimePickerControlComponent {
    constructor() {
        super(...arguments);
        this.themes = {
            container: {
                bodyBackgroundColor: '#424242',
            }
        };
        this.format24hs = false;
    }
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    normalizeValue(value) {
        if (!value)
            return null;
        const minutes = Number(value.split(':')[1].substring(0, 2));
        if (value.includes('AM')) {
            // console.log('normaliceAM :>> ', value);
            const hours = Number(value.split(':')[0]);
            value = `${hours}:${minutes}`;
        }
        if (value.includes('PM')) {
            // console.log('normalicePM :>> ', value);
            let hours = Number(value.split(':')[0]) + 12;
            if (hours >= 24) {
                hours -= 24;
            }
            value = `${hours}:${minutes}`;
        }
        return value;
    }
}
TimePickerMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TimePickerMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TimePickerMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: TimePickerMaterialControlComponent, selector: "sof-time-picker-control", inputs: { format24hs: "format24hs" }, viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<mat-form-field appearance=\"outline\" [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    matInput\r\n    #inputRef=\"matInput\"\r\n    [placeholder]=\"placeholder\"\r\n    aria-label=\"12hr format\"\r\n    [ngxTimepicker]=\"picker\"\r\n    [format]=\"format24hs ? 24 : 12\"\r\n    readonly\r\n    [disabled]=\"disabled\"\r\n    [value]=\"value\"\r\n  />\r\n  <ngx-material-timepicker\r\n    #picker\r\n    (timeSet)=\"onInput($event)\"\r\n  ></ngx-material-timepicker>\r\n</mat-form-field>\r\n\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [":host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.NgxMaterialTimepickerComponent, selector: "ngx-material-timepicker", inputs: ["ESC", "hoursOnly", "ngxMaterialTimepickerTheme", "format", "minutesGap", "cancelBtnTmpl", "editableHintTmpl", "confirmBtnTmpl", "enableKeyboardInput", "preventOverlayClick", "disableAnimation", "appendToInput", "defaultTime", "timepickerClass", "theme", "min", "max"], outputs: ["timeSet", "opened", "closed", "hourSelected", "timeChanged"] }, { type: i3.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.TimepickerDirective, selector: "[ngxTimepicker]", inputs: ["format", "value", "min", "max", "ngxTimepicker", "disabled", "disableClick"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: TimePickerMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-time-picker-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<mat-form-field appearance=\"outline\" [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    matInput\r\n    #inputRef=\"matInput\"\r\n    [placeholder]=\"placeholder\"\r\n    aria-label=\"12hr format\"\r\n    [ngxTimepicker]=\"picker\"\r\n    [format]=\"format24hs ? 24 : 12\"\r\n    readonly\r\n    [disabled]=\"disabled\"\r\n    [value]=\"value\"\r\n  />\r\n  <ngx-material-timepicker\r\n    #picker\r\n    (timeSet)=\"onInput($event)\"\r\n  ></ngx-material-timepicker>\r\n</mat-form-field>\r\n\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [":host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }], format24hs: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3RpbWUtcGlja2VyLWNvbnRyb2wvdGltZS1waWNrZXItY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3RpbWUtcGlja2VyLWNvbnRyb2wvdGltZS1waWNrZXItY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFFMUcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFRbEUsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLDBCQUEwQjtJQU5sRjs7UUFnQkUsV0FBTSxHQUErQjtZQUNuQyxTQUFTLEVBQUM7Z0JBQ1IsbUJBQW1CLEVBQUMsU0FBUzthQUM5QjtTQUNGLENBQUE7UUFFUSxlQUFVLEdBQVksS0FBSyxDQUFBO0tBK0JyQztJQTdCVSxPQUFPLENBQUMsS0FBVTtRQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFHRCxjQUFjLENBQUMsS0FBYTtRQUMxQixJQUFHLENBQUMsS0FBSztZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRXZCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUUxRCxJQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDdEIsMENBQTBDO1lBQzFDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDekMsS0FBSyxHQUFHLEdBQUcsS0FBSyxJQUFJLE9BQU8sRUFBRSxDQUFBO1NBQzlCO1FBQ0QsSUFBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDO1lBQ3RCLDBDQUEwQztZQUUxQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUM1QyxJQUFHLEtBQUssSUFBSSxFQUFFLEVBQUU7Z0JBQ2QsS0FBSyxJQUFJLEVBQUUsQ0FBQTthQUNaO1lBQ0QsS0FBSyxHQUFHLEdBQUcsS0FBSyxJQUFJLE9BQU8sRUFBRSxDQUFBO1NBQzlCO1FBRUQsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDOzsrSEE3Q1Usa0NBQWtDO21IQUFsQyxrQ0FBa0MsbUpBT2xDLHNCQUFzQix1RUNsQm5DLDZ4QkEyQkE7MkZEaEJhLGtDQUFrQztrQkFOOUMsU0FBUzsrQkFDRSx5QkFBeUI7OEJBWUEsWUFBWTtzQkFBOUMsU0FBUzt1QkFBQyxzQkFBc0I7Z0JBU3hCLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGltZVBpY2tlckNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL3RpbWUtcGlja2VyLWNvbnRyb2wvdGltZS1waWNrZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJDb21wb25lbnQsIE5neE1hdGVyaWFsVGltZXBpY2tlclRoZW1lIH0gZnJvbSAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgeyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLXRpbWUtcGlja2VyLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLXBpY2tlci1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90aW1lLXBpY2tlci1jb250cm9sLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCBleHRlbmRzIFRpbWVQaWNrZXJDb250cm9sQ29tcG9uZW50IHtcclxuICAvLyBAVmlld0NoaWxkKCduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcicpXHJcbiAgLy8gdGltZVBpY2tlciE6IE5neE1hdGVyaWFsVGltZXBpY2tlckNvbXBvbmVudDtcclxuICAvLyBvdmVycmlkZSBvbklucHV0KHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAvLyAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgLy8gfVxyXG5cclxuICBAVmlld0NoaWxkKEVycm9yTWF0ZXJpYWxDb21wb25lbnQpIGVycm9yQ29udHJvbDogRXJyb3JNYXRlcmlhbENvbXBvbmVudFxyXG5cclxuXHJcbiAgdGhlbWVzOiBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJUaGVtZSA9IHtcclxuICAgIGNvbnRhaW5lcjp7XHJcbiAgICAgIGJvZHlCYWNrZ3JvdW5kQ29sb3I6JyM0MjQyNDInLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgZm9ybWF0MjRoczogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gIG92ZXJyaWRlIG9uSW5wdXQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgbm9ybWFsaXplVmFsdWUodmFsdWU6IHN0cmluZyl7XHJcbiAgICBpZighdmFsdWUpIHJldHVybiBudWxsO1xyXG4gICAgXHJcbiAgICBjb25zdCBtaW51dGVzID0gTnVtYmVyKHZhbHVlLnNwbGl0KCc6JylbMV0uc3Vic3RyaW5nKDAsMikpXHJcbiAgICBcclxuICAgIGlmKHZhbHVlLmluY2x1ZGVzKCdBTScpKXtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ25vcm1hbGljZUFNIDo+PiAnLCB2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gTnVtYmVyKHZhbHVlLnNwbGl0KCc6JylbMF0pXHJcbiAgICAgIHZhbHVlID0gYCR7aG91cnN9OiR7bWludXRlc31gIFxyXG4gICAgfVxyXG4gICAgaWYodmFsdWUuaW5jbHVkZXMoJ1BNJykpe1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygnbm9ybWFsaWNlUE0gOj4+ICcsIHZhbHVlKTtcclxuXHJcbiAgICAgIGxldCBob3VycyA9IE51bWJlcih2YWx1ZS5zcGxpdCgnOicpWzBdKSArIDEyXHJcbiAgICAgIGlmKGhvdXJzID49IDI0KSB7XHJcbiAgICAgICAgaG91cnMgLT0gMjRcclxuICAgICAgfVxyXG4gICAgICB2YWx1ZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPG1hdC1sYWJlbFxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAgICdyZXF1aXJlZC1sYWJlbCc6IGlzUmVxdWlyZWQsXHJcbiAgICAndGV4dC1lcnJvcic6IEVzSW52YWxpZG8sXHJcbiAgICAnYWN0aXZlLWxhYmVsJzogaW5wdXRSZWYuZm9jdXNlZFxyXG4gIH1cIlxyXG4gID57eyBsYWJlbCB9fTwvbWF0LWxhYmVsXHJcbj5cclxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgW25nQ2xhc3NdPVwieyAnZXJyb3ItZmllbGQnOiBFc0ludmFsaWRvIH1cIj5cclxuICA8aW5wdXRcclxuICAgIG1hdElucHV0XHJcbiAgICAjaW5wdXRSZWY9XCJtYXRJbnB1dFwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgYXJpYS1sYWJlbD1cIjEyaHIgZm9ybWF0XCJcclxuICAgIFtuZ3hUaW1lcGlja2VyXT1cInBpY2tlclwiXHJcbiAgICBbZm9ybWF0XT1cImZvcm1hdDI0aHMgPyAyNCA6IDEyXCJcclxuICAgIHJlYWRvbmx5XHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAvPlxyXG4gIDxuZ3gtbWF0ZXJpYWwtdGltZXBpY2tlclxyXG4gICAgI3BpY2tlclxyXG4gICAgKHRpbWVTZXQpPVwib25JbnB1dCgkZXZlbnQpXCJcclxuICA+PC9uZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbjxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuIl19