import { Component } from '@angular/core';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class CheckboxControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    normalizeValue(value) {
        if (value == '')
            return false;
        if (typeof value == 'string') {
            value = value == 'true';
        }
        return value;
    }
    writeValue(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
}
CheckboxControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CheckboxControlComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvY2hlY2tib3gtY29udHJvbC9jaGVja2JveC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQUt4RixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsc0JBQXNCO0lBRWxFLE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDYixPQUFPLEtBQUssQ0FBQztRQUVmLElBQUksT0FBTyxLQUFLLElBQUksUUFBUSxFQUFFO1lBQzVCLEtBQUssR0FBRyxLQUFLLElBQUksTUFBTSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRVEsVUFBVSxDQUFDLEtBQVU7UUFDNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOztzSEFwQlUsd0JBQXdCOzBHQUF4Qix3QkFBd0IsMkVBRnpCLEVBQUU7NEZBRUQsd0JBQXdCO2tCQUhwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2Jhc2UtZm9ybS1jb250cm9sL2Jhc2UtZm9ybS1jb250cm9sJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1GaWVsZENvbXBvbmVudCAge1xyXG5cclxuICBvbklucHV0KHZhbHVlOiBhbnkpIHtcclxuICAgIHZhbHVlID0gdGhpcy5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZSA9PSAnJylcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZSA9PSAndHJ1ZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=