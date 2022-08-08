import { Component } from '@angular/core';
import { SelectControlComponent } from '../../base/select-control/select-control.component';
import * as i0 from "@angular/core";
import * as i1 from "../error/error.component";
import * as i2 from "@angular/common";
export class SelectCustomControlComponent extends SelectControlComponent {
}
SelectCustomControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SelectCustomControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
SelectCustomControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SelectCustomControlComponent, selector: "sof-select-control", usesInheritance: true, ngImport: i0, template: "\r\n<label for=\"pet-select\">{{label}}\r\n  <select\r\n    class=\"form-control\" \r\n    [name]=\"label\"\r\n    [disabled]=\"disabled || readOnly\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    >\r\n      <option value=\"\">{{placeholder}}</option>\r\n      <option\r\n        class=\"form-control\" \r\n        *ngFor=\"let item of list; let i=index\"\r\n        [selected]=\"getValue(item) === value\" \r\n        [value]=\"getValue(item)\" >\r\n        {{getText(item)}}\r\n      </option>\r\n  </select>\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: [""], components: [{ type: i1.ErrorCustomComponent, selector: "sof-error" }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SelectCustomControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-select-control', template: "\r\n<label for=\"pet-select\">{{label}}\r\n  <select\r\n    class=\"form-control\" \r\n    [name]=\"label\"\r\n    [disabled]=\"disabled || readOnly\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    >\r\n      <option value=\"\">{{placeholder}}</option>\r\n      <option\r\n        class=\"form-control\" \r\n        *ngFor=\"let item of list; let i=index\"\r\n        [selected]=\"getValue(item) === value\" \r\n        [value]=\"getValue(item)\" >\r\n        {{getText(item)}}\r\n      </option>\r\n  </select>\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: [""] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvc2VsZWN0LWNvbnRyb2wvc2VsZWN0LWNvbnRyb2wtY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvc2VsZWN0LWNvbnRyb2wvc2VsZWN0LWNvbnRyb2wtY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7OztBQU81RixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsc0JBQXNCOzt5SEFBM0QsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsaUZDUnpDLDRsQkFrQnlEOzJGRFY1Qyw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0Usb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL3NlbGVjdC1jb250cm9sL3NlbGVjdC1jb250cm9sLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvZi1zZWxlY3QtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QtY29udHJvbC1jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q3VzdG9tQ29udHJvbENvbXBvbmVudCBleHRlbmRzIFNlbGVjdENvbnRyb2xDb21wb25lbnQgIHtcclxuXHJcbn1cclxuIiwiXHJcbjxsYWJlbCBmb3I9XCJwZXQtc2VsZWN0XCI+e3tsYWJlbH19XHJcbiAgPHNlbGVjdFxyXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgIFtuYW1lXT1cImxhYmVsXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZCB8fCByZWFkT25seVwiXHJcbiAgICAoaW5wdXQpPVwib25JbnB1dCgkYW55KCRldmVudC50YXJnZXQpLnZhbHVlKVwiXHJcbiAgICA+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57e3BsYWNlaG9sZGVyfX08L29wdGlvbj5cclxuICAgICAgPG9wdGlvblxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdDsgbGV0IGk9aW5kZXhcIlxyXG4gICAgICAgIFtzZWxlY3RlZF09XCJnZXRWYWx1ZShpdGVtKSA9PT0gdmFsdWVcIiBcclxuICAgICAgICBbdmFsdWVdPVwiZ2V0VmFsdWUoaXRlbSlcIiA+XHJcbiAgICAgICAge3tnZXRUZXh0KGl0ZW0pfX1cclxuICAgICAgPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbjwvbGFiZWw+XHJcbjxzb2YtZXJyb3IgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj4iXX0=