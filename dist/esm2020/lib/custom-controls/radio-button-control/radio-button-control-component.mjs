import { Component } from '@angular/core';
import { RadioButtonControlComponent } from '../../base/radio-button-control/radio-button-control.component';
import * as i0 from "@angular/core";
import * as i1 from "../error/error.component";
import * as i2 from "@angular/common";
export class RadioButtonCustomControlComponent extends RadioButtonControlComponent {
}
RadioButtonCustomControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: RadioButtonCustomControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RadioButtonCustomControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: RadioButtonCustomControlComponent, selector: "sof-radio-button-control", usesInheritance: true, ngImport: i0, template: "<label>{{label}}\r\n  <label\r\n    class=\"form-control\" \r\n    *ngFor=\"let item of list; let i=index\">\r\n    {{getText(item)}}\r\n    <input \r\n      class=\"form-control\" \r\n      type=\"radio\" \r\n      [name]=\"label\" \r\n      [value]=\"getValue(item)\" \r\n      [disabled]=\"disabled\"\r\n      [checked]=\"getValue(item) === value\" \r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [readonly]=\"readOnly\"\r\n    >\r\n  </label>\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: [""], components: [{ type: i1.ErrorCustomComponent, selector: "sof-error" }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: RadioButtonCustomControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-radio-button-control', template: "<label>{{label}}\r\n  <label\r\n    class=\"form-control\" \r\n    *ngFor=\"let item of list; let i=index\">\r\n    {{getText(item)}}\r\n    <input \r\n      class=\"form-control\" \r\n      type=\"radio\" \r\n      [name]=\"label\" \r\n      [value]=\"getValue(item)\" \r\n      [disabled]=\"disabled\"\r\n      [checked]=\"getValue(item) === value\" \r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [readonly]=\"readOnly\"\r\n    >\r\n  </label>\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: [""] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvcmFkaW8tYnV0dG9uLWNvbnRyb2wvcmFkaW8tYnV0dG9uLWNvbnRyb2wtY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvcmFkaW8tYnV0dG9uLWNvbnRyb2wvcmFkaW8tYnV0dG9uLWNvbnRyb2wtY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQzs7OztBQU83RyxNQUFNLE9BQU8saUNBQWtDLFNBQVEsMkJBQTJCOzs4SEFBckUsaUNBQWlDO2tIQUFqQyxpQ0FBaUMsdUZDUjlDLCtoQkFpQnlEOzJGRFQ1QyxpQ0FBaUM7a0JBTDdDLFNBQVM7K0JBQ0UsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhZGlvQnV0dG9uQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvcmFkaW8tYnV0dG9uLWNvbnRyb2wvcmFkaW8tYnV0dG9uLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLXJhZGlvLWJ1dHRvbi1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8tYnV0dG9uLWNvbnRyb2wtY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLWJ1dHRvbi1jb250cm9sLWNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkN1c3RvbUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBSYWRpb0J1dHRvbkNvbnRyb2xDb21wb25lbnQgIHtcclxuXHJcbn1cclxuIiwiPGxhYmVsPnt7bGFiZWx9fVxyXG4gIDxsYWJlbFxyXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3Q7IGxldCBpPWluZGV4XCI+XHJcbiAgICB7e2dldFRleHQoaXRlbSl9fVxyXG4gICAgPGlucHV0IFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICB0eXBlPVwicmFkaW9cIiBcclxuICAgICAgW25hbWVdPVwibGFiZWxcIiBcclxuICAgICAgW3ZhbHVlXT1cImdldFZhbHVlKGl0ZW0pXCIgXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtjaGVja2VkXT1cImdldFZhbHVlKGl0ZW0pID09PSB2YWx1ZVwiIFxyXG4gICAgICAoaW5wdXQpPVwib25JbnB1dCgkYW55KCRldmVudC50YXJnZXQpLnZhbHVlKVwiXHJcbiAgICAgIFtyZWFkb25seV09XCJyZWFkT25seVwiXHJcbiAgICA+XHJcbiAgPC9sYWJlbD5cclxuPC9sYWJlbD5cclxuPHNvZi1lcnJvciBbbGFiZWxdPVwibGFiZWxcIiBbZXJyb3JzXT1cImVycm9yc1wiPjwvc29mLWVycm9yPiJdfQ==