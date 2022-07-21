import { Component, Input } from '@angular/core';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class RadioButtonControlComponent extends BaseFormFieldComponent {
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
        // console.log(pathArray)
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
}
RadioButtonControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RadioButtonControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RadioButtonControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: RadioButtonControlComponent, selector: "ng-component", inputs: { list: "list", valuePath: "valuePath", textPath: "textPath" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RadioButtonControlComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9iYXNlL3JhZGlvLWJ1dHRvbi1jb250cm9sL3JhZGlvLWJ1dHRvbi1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBS3hGLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxzQkFBc0I7SUFIdkU7O1FBTVcsY0FBUyxHQUFXLE9BQU8sQ0FBQztRQUM1QixhQUFRLEdBQVcsTUFBTSxDQUFDO0tBK0JwQztJQTdCQyxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFUSxVQUFVLENBQUMsS0FBVTtRQUM1QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVM7UUFDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsS0FBSyxNQUFNLElBQUksSUFBSSxTQUFTO1lBQzFCLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVM7UUFDZixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyx5QkFBeUI7UUFDekIsS0FBSyxNQUFNLElBQUksSUFBSSxTQUFTO1lBQzFCLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDOzt5SEFsQ1UsMkJBQTJCOzZHQUEzQiwyQkFBMkIsbUpBRjVCLEVBQUU7NEZBRUQsMkJBQTJCO2tCQUh2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOzhCQUdVLElBQUk7c0JBQVosS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJhc2VGb3JtRmllbGRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2Jhc2UtZm9ybS1jb250cm9sL2Jhc2UtZm9ybS1jb250cm9sJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Db250cm9sQ29tcG9uZW50IGV4dGVuZHMgQmFzZUZvcm1GaWVsZENvbXBvbmVudCAge1xyXG5cclxuICBASW5wdXQoKSBsaXN0ITogYW55W107XHJcbiAgQElucHV0KCkgdmFsdWVQYXRoOiBzdHJpbmcgPSAndmFsdWUnO1xyXG4gIEBJbnB1dCgpIHRleHRQYXRoOiBzdHJpbmcgPSAndGV4dCc7XHJcblxyXG4gIG9uSW5wdXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGdldFZhbHVlKGl0ZW06IGFueSk6IGFueSB7XHJcbiAgICBsZXQgdmFsID0gaXRlbTtcclxuICAgIGNvbnN0IHBhdGhBcnJheSA9IHRoaXMudmFsdWVQYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcGF0aEFycmF5KVxyXG4gICAgICB2YWwgPSB2YWxbcHJvcF07XHJcbiAgICBcclxuICAgICAgcmV0dXJuIHZhbDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0VGV4dChpdGVtOiBhbnkpOiBhbnkge1xyXG4gICAgbGV0IHZhbCA9IGl0ZW07XHJcbiAgICBjb25zdCBwYXRoQXJyYXkgPSB0aGlzLnRleHRQYXRoLnNwbGl0KCcuJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwYXRoQXJyYXkpXHJcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcGF0aEFycmF5KVxyXG4gICAgICB2YWwgPSB2YWxbcHJvcF07XHJcbiAgICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG59XHJcbiJdfQ==