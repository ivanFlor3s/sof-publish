import { Component, Input } from '@angular/core';
import { BaseFormFieldComponent } from '../base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class PasswordControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.show = false;
        this.showEye = true;
    }
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
PasswordControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PasswordControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PasswordControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: PasswordControlComponent, selector: "ng-component", inputs: { DefaultValue: "DefaultValue" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: PasswordControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { DefaultValue: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvcGFzc3dvcmQtY29udHJvbC9wYXNzd29yZC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFNaEYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLHNCQUFzQjtJQUpwRTs7UUFRRSxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLFlBQU8sR0FBWSxJQUFJLENBQUE7S0FjeEI7SUFaQyxPQUFPLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFUSxVQUFVLENBQUMsS0FBVTtRQUM1QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOztxSEFqQlUsd0JBQXdCO3lHQUF4Qix3QkFBd0IscUhBSHpCLEVBQUU7MkZBR0Qsd0JBQXdCO2tCQUpwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOzhCQUlVLFlBQVk7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLWZvcm0tY29udHJvbC9iYXNlLWZvcm0tY29udHJvbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgRGVmYXVsdFZhbHVlITogc3RyaW5nXHJcblxyXG4gIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93RXllOiBib29sZWFuID0gdHJ1ZVxyXG5cclxuICBvbklucHV0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpXHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=