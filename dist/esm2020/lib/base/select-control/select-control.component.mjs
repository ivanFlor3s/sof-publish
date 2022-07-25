import { Component, Input } from '@angular/core';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class SelectControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.valuePath = 'value';
        this.textPath = 'text';
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
    getValue(item) {
        let val = item;
        const pathArray = this.valuePath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
    getText(item) {
        let val = item;
        const pathArray = this.textPath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
}
SelectControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SelectControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
SelectControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: SelectControlComponent, selector: "ng-component", inputs: { list: "list", valuePath: "valuePath", textPath: "textPath" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SelectControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { list: [{
                type: Input
            }], valuePath: [{
                type: Input
            }], textPath: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9iYXNlL3NlbGVjdC1jb250cm9sL3NlbGVjdC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBS3hGLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxzQkFBc0I7SUFIbEU7O1FBTVcsY0FBUyxHQUFXLE9BQU8sQ0FBQztRQUM1QixhQUFRLEdBQVcsTUFBTSxDQUFDO0tBK0JwQztJQTdCQyxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFUSxVQUFVLENBQUMsS0FBVTtRQUM1QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVM7UUFDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsS0FBSyxNQUFNLElBQUksSUFBSSxTQUFTO1lBQzFCLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVM7UUFDZixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxLQUFLLE1BQU0sSUFBSSxJQUFJLFNBQVM7WUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7O21IQWxDVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixtSkFGdkIsRUFBRTsyRkFFRCxzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OEJBR1UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1GaWVsZENvbXBvbmVudCAge1xyXG5cclxuICBASW5wdXQoKSBsaXN0ITogYW55W107XHJcbiAgQElucHV0KCkgdmFsdWVQYXRoOiBzdHJpbmcgPSAndmFsdWUnO1xyXG4gIEBJbnB1dCgpIHRleHRQYXRoOiBzdHJpbmcgPSAndGV4dCc7XHJcblxyXG4gIG9uSW5wdXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGdldFZhbHVlKGl0ZW06IGFueSk6IGFueSB7XHJcbiAgICBsZXQgdmFsID0gaXRlbTtcclxuICAgIGNvbnN0IHBhdGhBcnJheSA9IHRoaXMudmFsdWVQYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcGF0aEFycmF5KVxyXG4gICAgICB2YWwgPSB2YWxbcHJvcF07XHJcbiAgICBcclxuICAgICAgcmV0dXJuIHZhbDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0VGV4dChpdGVtOiBhbnkpOiBhbnkge1xyXG4gICAgbGV0IHZhbCA9IGl0ZW07XHJcbiAgICBjb25zdCBwYXRoQXJyYXkgPSB0aGlzLnRleHRQYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcGF0aEFycmF5KVxyXG4gICAgICB2YWwgPSB2YWxbcHJvcF07XHJcbiAgICBcclxuICAgICAgcmV0dXJuIHZhbDtcclxuICB9XHJcbn1cclxuIl19