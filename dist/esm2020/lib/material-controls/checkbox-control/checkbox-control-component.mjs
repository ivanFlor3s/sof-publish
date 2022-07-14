import { Component, ViewChild } from '@angular/core';
import { CheckboxControlComponent } from '../../base/checkbox-control/checkbox-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/common";
export class CheckboxMaterialControlComponent extends CheckboxControlComponent {
}
CheckboxMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CheckboxMaterialControlComponent, selector: "sof-checkbox-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\">{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n    <mat-checkbox matInput\r\n    color=\"primary\"\r\n        class=\"form-control\"\r\n        [ngClass]=\"{ 'no-label': noLabel }\"\r\n        [ngClass]=\"{ 'side-label': sideLabel }\"\r\n        [checked]=\"value\"\r\n        [disabled]=\"disabled\"\r\n        type=\"checkbox\"\r\n        (input)=\"onInput($any($event.target).checked)\">\r\n        {{label}}\r\n    </mat-checkbox>\r\n    <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1;width:100%}:host mat-label{white-space:break-spaces}:host mat-label *{align-self:flex-start}:host sof-error{margin-top:0}:host mat-checkbox:not(.side-label){margin-top:25px}\n"], components: [{ type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i3.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-checkbox-control', template: "<mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\">{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n    <mat-checkbox matInput\r\n    color=\"primary\"\r\n        class=\"form-control\"\r\n        [ngClass]=\"{ 'no-label': noLabel }\"\r\n        [ngClass]=\"{ 'side-label': sideLabel }\"\r\n        [checked]=\"value\"\r\n        [disabled]=\"disabled\"\r\n        type=\"checkbox\"\r\n        (input)=\"onInput($any($event.target).checked)\">\r\n        {{label}}\r\n    </mat-checkbox>\r\n    <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1;width:100%}:host mat-label{white-space:break-spaces}:host mat-label *{align-self:flex-start}:host sof-error{margin-top:0}:host mat-checkbox:not(.side-label){margin-top:25px}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29udHJvbC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2NoZWNrYm94LWNvbnRyb2wvY2hlY2tib3gtY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2NoZWNrYm94LWNvbnRyb2wvY2hlY2tib3gtY29udHJvbC1jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNsRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBT2xFLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSx3QkFBd0I7OzhIQUFqRSxnQ0FBZ0M7a0hBQWhDLGdDQUFnQywwR0FDaEMsc0JBQXNCLHVFQ1ZuQyxvdEJBbUJNOzRGRFZPLGdDQUFnQztrQkFMNUMsU0FBUzsrQkFDRSxzQkFBc0I7OEJBS0csWUFBWTtzQkFBOUMsU0FBUzt1QkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGVja2JveENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2NoZWNrYm94LWNvbnRyb2wvY2hlY2tib3gtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLWNoZWNrYm94LWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jaGVja2JveC1jb250cm9sLWNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCBleHRlbmRzIENoZWNrYm94Q29udHJvbENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnRcclxuXHJcbn1cclxuIiwiPG1hdC1sYWJlbCBbbmdDbGFzc109XCJ7XHJcbiAgICAncmVxdWlyZWQtbGFiZWwnOiBpc1JlcXVpcmVkLFxyXG4gICAgJ3RleHQtZXJyb3InOiBFc0ludmFsaWRvLFxyXG4gICAgJ25vLWxhYmVsJzogbm9MYWJlbCxcclxuICAgICdzaWRlLWxhYmVsJzogc2lkZUxhYmVsXHJcbiAgfVwiPnt7bGFiZWx9fTwvbWF0LWxhYmVsPlxyXG48ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICA8bWF0LWNoZWNrYm94IG1hdElucHV0XHJcbiAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ7ICduby1sYWJlbCc6IG5vTGFiZWwgfVwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnc2lkZS1sYWJlbCc6IHNpZGVMYWJlbCB9XCJcclxuICAgICAgICBbY2hlY2tlZF09XCJ2YWx1ZVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIChpbnB1dCk9XCJvbklucHV0KCRhbnkoJGV2ZW50LnRhcmdldCkuY2hlY2tlZClcIj5cclxuICAgICAgICB7e2xhYmVsfX1cclxuICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgPHNvZi1lcnJvciBbY29udHJvbEludmFsaWRvXT1cIkVzSW52YWxpZG9cIiBbbGFiZWxdPVwibGFiZWxcIiBbZXJyb3JzXT1cImVycm9yc1wiPjwvc29mLWVycm9yPlxyXG48L2Rpdj4iXX0=