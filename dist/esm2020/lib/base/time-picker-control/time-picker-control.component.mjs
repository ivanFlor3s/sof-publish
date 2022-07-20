import { Component, Input } from '@angular/core';
import { BaseFormFieldComponent } from '../base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class TimePickerControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        // console.log(value)
        this.changeValue(value);
    }
    get Hour() {
        return Number(this.value.split(':')[0] && 0);
    }
    get Minute() {
        return Number(this.value.split(':')[1] && 0);
    }
    getValue() {
        return { hour: this.Hour, minute: this.Minute };
    }
}
TimePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TimePickerControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TimePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TimePickerControlComponent, selector: "ng-component", inputs: { DefaultValue: "DefaultValue" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TimePickerControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { DefaultValue: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvdGltZS1waWNrZXItY29udHJvbC90aW1lLXBpY2tlci1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFNaEYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHNCQUFzQjtJQUlwRSxPQUFPLENBQUMsS0FBVTtRQUNoQixxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFHRCxRQUFRO1FBQ04sT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDaEQsQ0FBQzs7d0hBcEJVLDBCQUEwQjs0R0FBMUIsMEJBQTBCLHFIQUgzQixFQUFFOzRGQUdELDBCQUEwQjtrQkFKdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFJVSxZQUFZO3NCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZVBpY2tlckNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgRGVmYXVsdFZhbHVlITogbnVtYmVyXHJcblxyXG4gIG9uSW5wdXQodmFsdWU6IGFueSkge1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpXHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgZ2V0IEhvdXIoKTpudW1iZXIge1xyXG4gICAgcmV0dXJuIE51bWJlcih0aGlzLnZhbHVlLnNwbGl0KCc6JylbMF0gJiYgMClcclxuICB9XHJcblxyXG4gIGdldCBNaW51dGUoKTpudW1iZXJ7XHJcbiAgICByZXR1cm4gTnVtYmVyKHRoaXMudmFsdWUuc3BsaXQoJzonKVsxXSAmJiAwKVxyXG4gIH1cclxuXHJcblxyXG4gIGdldFZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHsgaG91cjogdGhpcy5Ib3VyLCBtaW51dGU6dGhpcy5NaW51dGUgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19