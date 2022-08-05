import { Component } from '@angular/core';
import { DatePickerControlComponent } from '../../base/date-picker-control/date-picker-control.component';
import * as i0 from "@angular/core";
import * as i1 from "../error/error.component";
export class DatePickerCustomControlComponent extends DatePickerControlComponent {
}
DatePickerCustomControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DatePickerCustomControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DatePickerCustomControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DatePickerCustomControlComponent, selector: "sof-date-picker-control", usesInheritance: true, ngImport: i0, template: "<label>{{label}}\r\n  <input\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"getDateString(value)\"\r\n    [disabled]=\"disabled\"\r\n    type=\"date\"\r\n    (change)=\"onInput($any($event.target).value)\"\r\n    [readonly]=\"readOnly\"\r\n    >\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [""], components: [{ type: i1.ErrorCustomComponent, selector: "sof-error" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DatePickerCustomControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-date-picker-control', template: "<label>{{label}}\r\n  <input\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"getDateString(value)\"\r\n    [disabled]=\"disabled\"\r\n    type=\"date\"\r\n    (change)=\"onInput($any($event.target).value)\"\r\n    [readonly]=\"readOnly\"\r\n    >\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [""] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItY29udHJvbC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2N1c3RvbS1jb250cm9scy9kYXRlLXBpY2tlci1jb250cm9sL2RhdGUtcGlja2VyLWNvbnRyb2wtY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvZGF0ZS1waWNrZXItY29udHJvbC9kYXRlLXBpY2tlci1jb250cm9sLWNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7OztBQU8xRyxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMEJBQTBCOzs2SEFBbkUsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0Msc0ZDUjdDLDZXQVlBOzJGREphLGdDQUFnQztrQkFMNUMsU0FBUzsrQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2RhdGUtcGlja2VyLWNvbnRyb2wvZGF0ZS1waWNrZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzb2YtZGF0ZS1waWNrZXItY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcGlja2VyLWNvbnRyb2wtY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtcGlja2VyLWNvbnRyb2wtY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDdXN0b21Db250cm9sQ29tcG9uZW50IGV4dGVuZHMgRGF0ZVBpY2tlckNvbnRyb2xDb21wb25lbnQgIHtcclxuXHJcbn1cclxuIiwiPGxhYmVsPnt7bGFiZWx9fVxyXG4gIDxpbnB1dFxyXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgIFt2YWx1ZV09XCJnZXREYXRlU3RyaW5nKHZhbHVlKVwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgdHlwZT1cImRhdGVcIlxyXG4gICAgKGNoYW5nZSk9XCJvbklucHV0KCRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUpXCJcclxuICAgIFtyZWFkb25seV09XCJyZWFkT25seVwiXHJcbiAgICA+XHJcbjwvbGFiZWw+XHJcbjxzb2YtZXJyb3IgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuIl19