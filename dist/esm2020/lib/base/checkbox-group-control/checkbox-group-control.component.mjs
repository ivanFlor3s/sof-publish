import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class CheckboxGroupControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.valuePath = 'value';
        this.textPath = 'text';
    }
    onInput(item, checked) {
        if (!this.value)
            this.value = {};
        this.value[this.getValue(item)] = checked;
        this.changeValue(this.value);
        //Setear el error de IsRequired ya que solo salta con null y '', y no con {}
        //Mantiene el customMessage original
        if (!Object.keys(this.value).some(prop => this.value[prop] == true))
            if (this.controlDir?.control instanceof FormControl)
                if (!!this.controlDir.control.validator) {
                    const validator = this.controlDir.control.validator({});
                    if (!!validator && !!validator["required"])
                        this.controlDir.control.setErrors({ ...this.controlDir.control.errors, required: validator["required"] });
                }
    }
    writeValue(value) {
        if (value) {
            this.value = value || {};
        }
        else {
            this.value = {};
        }
    }
    getChecked(item) {
        return !!this.value ? this.value[this.getValue(item)] : false;
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
CheckboxGroupControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CheckboxGroupControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxGroupControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: CheckboxGroupControlComponent, selector: "ng-component", inputs: { list: "list", valuePath: "valuePath", textPath: "textPath" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: CheckboxGroupControlComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvY2hlY2tib3gtZ3JvdXAtY29udHJvbC9jaGVja2JveC1ncm91cC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQW1CLFdBQVcsRUFBYyxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDOztBQU14RixNQUFNLE9BQU8sNkJBQThCLFNBQVEsc0JBQXNCO0lBSHpFOztRQU1XLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFDNUIsYUFBUSxHQUFXLE1BQU0sQ0FBQztLQWtEcEM7SUFoREMsT0FBTyxDQUFDLElBQVMsRUFBRSxPQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7UUFFMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsNEVBQTRFO1FBQzVFLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7WUFDakUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sWUFBWSxXQUFXO2dCQUNqRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFxQixDQUFDLENBQUM7b0JBQzNFLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQzt3QkFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQzNHO0lBQ1AsQ0FBQztJQUVRLFVBQVUsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxVQUFVLENBQUMsSUFBUztRQUNsQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBUztRQUNoQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxLQUFLLE1BQU0sSUFBSSxJQUFJLFNBQVM7WUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVoQixPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBUztRQUNmLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztRQUNmLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLEtBQUssTUFBTSxJQUFJLElBQUksU0FBUztZQUMxQixHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhCLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQzs7MEhBckRVLDZCQUE2Qjs4R0FBN0IsNkJBQTZCLG1KQUY5QixFQUFFOzJGQUVELDZCQUE2QjtrQkFIekMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFHVSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEb0NoZWNrLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLWZvcm0tY29udHJvbC9iYXNlLWZvcm0tY29udHJvbCc7XHJcbmltcG9ydCB7IFJlcXVpcmVkVmFsaWRhdG9ycyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hHcm91cENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50ICB7XHJcblxyXG4gIEBJbnB1dCgpIGxpc3QhOiBhbnlbXTtcclxuICBASW5wdXQoKSB2YWx1ZVBhdGg6IHN0cmluZyA9ICd2YWx1ZSc7XHJcbiAgQElucHV0KCkgdGV4dFBhdGg6IHN0cmluZyA9ICd0ZXh0JztcclxuXHJcbiAgb25JbnB1dChpdGVtOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy52YWx1ZSlcclxuICAgICAgdGhpcy52YWx1ZSA9IHt9O1xyXG5cclxuICAgIHRoaXMudmFsdWVbdGhpcy5nZXRWYWx1ZShpdGVtKV0gPSBjaGVja2VkO1xyXG5cclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy52YWx1ZSk7XHJcblxyXG4gICAgLy9TZXRlYXIgZWwgZXJyb3IgZGUgSXNSZXF1aXJlZCB5YSBxdWUgc29sbyBzYWx0YSBjb24gbnVsbCB5ICcnLCB5IG5vIGNvbiB7fVxyXG4gICAgLy9NYW50aWVuZSBlbCBjdXN0b21NZXNzYWdlIG9yaWdpbmFsXHJcbiAgICBpZiAoIU9iamVjdC5rZXlzKHRoaXMudmFsdWUpLnNvbWUocHJvcCA9PiB0aGlzLnZhbHVlW3Byb3BdID09IHRydWUpKVxyXG4gICAgICBpZiAodGhpcy5jb250cm9sRGlyPy5jb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIFxyXG4gICAgICAgIGlmICghIXRoaXMuY29udHJvbERpci5jb250cm9sLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5jb250cm9sRGlyLmNvbnRyb2wudmFsaWRhdG9yKHt9IGFzIEFic3RyYWN0Q29udHJvbCk7XHJcbiAgICAgICAgICBpZiAoISF2YWxpZGF0b3IgJiYgISF2YWxpZGF0b3JbXCJyZXF1aXJlZFwiXSlcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sRGlyLmNvbnRyb2wuc2V0RXJyb3JzKHsuLi50aGlzLmNvbnRyb2xEaXIuY29udHJvbC5lcnJvcnMsIHJlcXVpcmVkOiB2YWxpZGF0b3JbXCJyZXF1aXJlZFwiXX0pO1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCB7fTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB7fTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENoZWNrZWQoaXRlbTogYW55KSB7XHJcbiAgICByZXR1cm4gISF0aGlzLnZhbHVlID8gdGhpcy52YWx1ZVt0aGlzLmdldFZhbHVlKGl0ZW0pXSA6IGZhbHNlO1xyXG4gIH1cclxuICBcclxuICBnZXRWYWx1ZShpdGVtOiBhbnkpOiBhbnkge1xyXG4gICAgbGV0IHZhbCA9IGl0ZW07XHJcbiAgICBjb25zdCBwYXRoQXJyYXkgPSB0aGlzLnZhbHVlUGF0aC5zcGxpdCgnLicpO1xyXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHBhdGhBcnJheSlcclxuICAgICAgdmFsID0gdmFsW3Byb3BdO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFRleHQoaXRlbTogYW55KTogYW55IHtcclxuICAgIGxldCB2YWwgPSBpdGVtO1xyXG4gICAgY29uc3QgcGF0aEFycmF5ID0gdGhpcy50ZXh0UGF0aC5zcGxpdCgnLicpO1xyXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHBhdGhBcnJheSlcclxuICAgICAgdmFsID0gdmFsW3Byb3BdO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG59XHJcbiJdfQ==