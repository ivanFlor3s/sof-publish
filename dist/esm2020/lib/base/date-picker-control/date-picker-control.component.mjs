import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class DatePickerControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    writeValue(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    normalizeValue(value) {
        if (value == '')
            return null;
        if (typeof value == 'string') {
            value = DateTime.fromISO(value);
        }
        return value;
    }
    getDateString(value) {
        return !!value ? `${value.toISODate()}` : '';
    }
}
DatePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DatePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DatePickerControlComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvZGF0ZS1waWNrZXItY29udHJvbC9kYXRlLXBpY2tlci1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDakMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBS3hGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxzQkFBc0I7SUFFcEUsT0FBTyxDQUFDLEtBQXdCO1FBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVRLFVBQVUsQ0FBQyxLQUFVO1FBQzVCLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztRQUVkLElBQUksT0FBTyxLQUFLLElBQUksUUFBUSxFQUFFO1lBQzVCLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWU7UUFDM0IsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7d0hBeEJVLDBCQUEwQjs0R0FBMUIsMEJBQTBCLDJFQUYzQixFQUFFOzRGQUVELDBCQUEwQjtrQkFIdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XHJcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2Jhc2UtZm9ybS1jb250cm9sL2Jhc2UtZm9ybS1jb250cm9sJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50ICB7XHJcblxyXG4gIG9uSW5wdXQodmFsdWU6IHN0cmluZyB8IERhdGVUaW1lKSB7XHJcbiAgICB2YWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHZhbHVlID0gdGhpcy5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5vcm1hbGl6ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZSA9PSAnJylcclxuICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xyXG4gICAgICB2YWx1ZSA9IERhdGVUaW1lLmZyb21JU08odmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuICBcclxuICBnZXREYXRlU3RyaW5nKHZhbHVlOiBEYXRlVGltZSkge1xyXG4gICAgcmV0dXJuICEhdmFsdWUgPyBgJHt2YWx1ZS50b0lTT0RhdGUoKX1gIDogJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==