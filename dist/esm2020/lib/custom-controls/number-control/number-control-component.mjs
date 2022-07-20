import { Component } from '@angular/core';
import { NumberControlComponent } from '../../base/number-control/number-control.component';
import * as i0 from "@angular/core";
import * as i1 from "../error/error.component";
export class NumberCustomControlComponent extends NumberControlComponent {
}
NumberCustomControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NumberCustomControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NumberCustomControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: NumberCustomControlComponent, selector: "sof-number-control", usesInheritance: true, ngImport: i0, template: "<!-- <app-control-label *ngIf=\"label\" [label]=\"label\" [isRequired]=\"isRequired\" [info]=\"info\"></app-control-label>\r\n<input\r\n  class=\"form-control\"\r\n  [value]=\"value\"\r\n  [disabled]=\"isDisabled\"\r\n  [ngClass]=\"{'is-invalid': hasErrors}\"\r\n  type=\"text\"\r\n  (input)=\"onInput($event.target.value)\">\r\n<small class=\"text-muted\">{{description}}</small> -->\r\n\r\n<label>{{label}}\r\n  <input\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"number\"\r\n    (input)=\"onInput($any($event.target).value)\">\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [""], components: [{ type: i1.ErrorCustomComponent, selector: "sof-error" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: NumberCustomControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-number-control', template: "<!-- <app-control-label *ngIf=\"label\" [label]=\"label\" [isRequired]=\"isRequired\" [info]=\"info\"></app-control-label>\r\n<input\r\n  class=\"form-control\"\r\n  [value]=\"value\"\r\n  [disabled]=\"isDisabled\"\r\n  [ngClass]=\"{'is-invalid': hasErrors}\"\r\n  type=\"text\"\r\n  (input)=\"onInput($event.target.value)\">\r\n<small class=\"text-muted\">{{description}}</small> -->\r\n\r\n<label>{{label}}\r\n  <input\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"number\"\r\n    (input)=\"onInput($any($event.target).value)\">\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [""] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvbnVtYmVyLWNvbnRyb2wvbnVtYmVyLWNvbnRyb2wtY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvbnVtYmVyLWNvbnRyb2wvbnVtYmVyLWNvbnRyb2wtY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7O0FBTzVGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxzQkFBc0I7O3lIQUEzRCw0QkFBNEI7NkdBQTVCLDRCQUE0QixpRkNSekMsZ3NCQW9CQTsyRkRaYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0Usb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE51bWJlckNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL251bWJlci1jb250cm9sL251bWJlci1jb250cm9sLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvZi1udW1iZXItY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9udW1iZXItY29udHJvbC1jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyQ3VzdG9tQ29udHJvbENvbXBvbmVudCBleHRlbmRzIE51bWJlckNvbnRyb2xDb21wb25lbnQgIHtcclxuXHJcbn1cclxuIiwiPCEtLSA8YXBwLWNvbnRyb2wtbGFiZWwgKm5nSWY9XCJsYWJlbFwiIFtsYWJlbF09XCJsYWJlbFwiIFtpc1JlcXVpcmVkXT1cImlzUmVxdWlyZWRcIiBbaW5mb109XCJpbmZvXCI+PC9hcHAtY29udHJvbC1sYWJlbD5cclxuPGlucHV0XHJcbiAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxyXG4gIFtuZ0NsYXNzXT1cInsnaXMtaW52YWxpZCc6IGhhc0Vycm9yc31cIlxyXG4gIHR5cGU9XCJ0ZXh0XCJcclxuICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxyXG48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+e3tkZXNjcmlwdGlvbn19PC9zbWFsbD4gLS0+XHJcblxyXG48bGFiZWw+e3tsYWJlbH19XHJcbiAgPGlucHV0XHJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgIChpbnB1dCk9XCJvbklucHV0KCRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUpXCI+XHJcbjwvbGFiZWw+XHJcbjxzb2YtZXJyb3IgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuIl19