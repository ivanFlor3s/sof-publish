import { Component } from '@angular/core';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class CheckboxControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
}
CheckboxControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CheckboxControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: CheckboxControlComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CheckboxControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvY2hlY2tib3gtY29udHJvbC9jaGVja2JveC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUt4RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsc0JBQXNCO0lBRWxFLE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVRLFVBQVUsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7O3FIQVpVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDJFQUZ6QixFQUFFOzJGQUVELHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLWZvcm0tY29udHJvbC9iYXNlLWZvcm0tY29udHJvbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29udHJvbENvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtRmllbGRDb21wb25lbnQgIHtcclxuXHJcbiAgb25JbnB1dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19