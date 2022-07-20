import { Component } from '@angular/core';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class CheckboxControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    normalizeValue(value) {
        if (value === '')
            return false;
        if (typeof value == 'string') {
            value = value == 'true';
        }
        return !!value;
    }
    writeValue(value) {
        this.value = this.normalizeValue(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvY2hlY2tib3gtY29udHJvbC9jaGVja2JveC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUt4RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsc0JBQXNCO0lBRWxFLE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDZCxPQUFPLEtBQUssQ0FBQztRQUVmLElBQUksT0FBTyxLQUFLLElBQUksUUFBUSxFQUFFO1lBQzVCLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFUSxVQUFVLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7cUhBbkJVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDJFQUZ6QixFQUFFOzJGQUVELHdCQUF3QjtrQkFIcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLWZvcm0tY29udHJvbC9iYXNlLWZvcm0tY29udHJvbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm94Q29udHJvbENvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtRmllbGRDb21wb25lbnQgIHtcclxuXHJcbiAgb25JbnB1dCh2YWx1ZTogYW55KSB7XHJcbiAgICB2YWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBub3JtYWxpemVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAodmFsdWUgPT09ICcnKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlID09ICd0cnVlJztcclxuICAgIH1cclxuICAgIHJldHVybiAhIXZhbHVlO1xyXG4gIH1cclxuICBcclxuICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19