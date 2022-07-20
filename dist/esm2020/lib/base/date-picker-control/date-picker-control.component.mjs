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
        this.value = this.normalizeValue(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvZGF0ZS1waWNrZXItY29udHJvbC9kYXRlLXBpY2tlci1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDakMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBS3hGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxzQkFBc0I7SUFFcEUsT0FBTyxDQUFDLEtBQXdCO1FBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVRLFVBQVUsQ0FBQyxLQUFVO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdkIsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDO1FBRWQsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDNUIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBZTtRQUMzQixPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzt3SEF2QlUsMEJBQTBCOzRHQUExQiwwQkFBMEIsMkVBRjNCLEVBQUU7NEZBRUQsMEJBQTBCO2tCQUh0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcclxuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtRmllbGRDb21wb25lbnQgIHtcclxuXHJcbiAgb25JbnB1dCh2YWx1ZTogc3RyaW5nIHwgRGF0ZVRpbWUpIHtcclxuICAgIHZhbHVlID0gdGhpcy5ub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMubm9ybWFsaXplVmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbm9ybWFsaXplVmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHZhbHVlID09ICcnKVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHZhbHVlID0gRGF0ZVRpbWUuZnJvbUlTTyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIGdldERhdGVTdHJpbmcodmFsdWU6IERhdGVUaW1lKSB7XHJcbiAgICByZXR1cm4gISF2YWx1ZSA/IGAke3ZhbHVlLnRvSVNPRGF0ZSgpfWAgOiAnJztcclxuICB9XHJcbn1cclxuIl19