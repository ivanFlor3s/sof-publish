import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class BaseFormFieldComponent {
    constructor(controlDir) {
        this.controlDir = controlDir;
        // tslint:disable-next-line: no-output-native
        this.change = new EventEmitter();
        this.noLabel = false;
        this.disabled = false;
        this.isRequired = false;
        this.onChange = (value) => { };
        this.onTouch = () => { };
        if (controlDir) {
            controlDir.valueAccessor = this;
        }
    }
    get EsInvalido() {
        return (!!this.controlDir && this.controlDir.touched && this.controlDir.invalid) || false;
    }
    ngDoCheck() {
        if (this.controlDir?.control instanceof FormControl) {
            // check if this field is required or not to display a 'required label'
            const validator = this.controlDir.control.errors;
            this.isRequired =
                Boolean(validator && validator.hasOwnProperty('required')) ||
                    Boolean(validator && validator.hasOwnProperty('selectedCount'));
        }
    }
    get hasErrors() {
        return (this.controlDir?.control &&
            this.controlDir?.control.touched &&
            !!this.controlDir?.control.errors) ?? false;
    }
    get errors() {
        return this.controlDir?.control?.errors ?? null;
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    onBlur() {
        this.onTouch();
    }
    changeValue(value) {
        this.setInputValue(value);
        this.onTouch();
        this.onChange(this.value);
        this.change.emit(this.value);
    }
    setInputValue(value) {
        this.value = value;
    }
}
BaseFormFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BaseFormFieldComponent, deps: [{ token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
BaseFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: BaseFormFieldComponent, selector: "ng-component", inputs: { info: "info", description: "description", label: "label", placeholder: "placeholder", maxLength: "maxLength", noLabel: "noLabel" }, outputs: { change: "change" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BaseFormFieldComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { info: [{
                type: Input
            }], description: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], change: [{
                type: Output
            }], noLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBd0IsV0FBVyxFQUErQixNQUFNLGdCQUFnQixDQUFDOzs7QUFLaEcsTUFBTSxPQUFPLHNCQUFzQjtJQXVCakMsWUFBdUMsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWpCNUQsNkNBQTZDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJbEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBT25CLGFBQVEsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQzlCLFlBQU8sR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFHakIsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNqQztJQUNILENBQUM7SUFYRCxJQUFJLFVBQVU7UUFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUE7SUFDM0YsQ0FBQztJQVdELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUNuRCx1RUFBdUU7WUFDdkUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ2pELElBQUksQ0FBQyxVQUFVO2dCQUNiLE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDMUQsT0FBTyxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDbkU7SUFDSCxDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxDQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTztZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxPQUFPO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQ2xDLElBQUksS0FBSyxDQUFDO0lBQ2IsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQztJQUNsRCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWlCO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFUyxXQUFXLENBQUMsS0FBVTtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRVMsYUFBYSxDQUFDLEtBQVU7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7bUhBaEZVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGlPQUZ2QixFQUFFOzJGQUVELHNCQUFzQjtrQkFIbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7MEJBd0JjLFFBQVE7OzBCQUFJLElBQUk7NENBdEJwQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVJLE1BQU07c0JBQWYsTUFBTTtnQkFDRSxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERvQ2hlY2ssIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQsIFNlbGYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFzZUZvcm1GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBEb0NoZWNrIHtcclxuICBASW5wdXQoKSBpbmZvITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aCE6IHN0cmluZztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgbm9MYWJlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgdmFsdWU6IGFueTtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIGlzUmVxdWlyZWQgPSBmYWxzZTtcclxuICBpbnZhbGlkITogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IEVzSW52YWxpZG8oKXtcclxuICAgIHJldHVybiAoISF0aGlzLmNvbnRyb2xEaXIgJiYgdGhpcy5jb250cm9sRGlyLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sRGlyLmludmFsaWQpIHx8IGZhbHNlXHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7fTtcclxuICBvblRvdWNoID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIGNvbnRyb2xEaXI6IE5nQ29udHJvbCkge1xyXG4gICAgaWYgKGNvbnRyb2xEaXIpIHtcclxuICAgICAgY29udHJvbERpci52YWx1ZUFjY2Vzc29yID0gdGhpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICh0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xyXG4gICAgICAvLyBjaGVjayBpZiB0aGlzIGZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdCB0byBkaXNwbGF5IGEgJ3JlcXVpcmVkIGxhYmVsJ1xyXG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmNvbnRyb2xEaXIuY29udHJvbC5lcnJvcnM7XHJcbiAgICAgIHRoaXMuaXNSZXF1aXJlZCA9XHJcbiAgICAgICAgQm9vbGVhbih2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpKSB8fFxyXG4gICAgICAgIEJvb2xlYW4odmFsaWRhdG9yICYmIHZhbGlkYXRvci5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRDb3VudCcpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2wgJiZcclxuICAgICAgdGhpcy5jb250cm9sRGlyPy5jb250cm9sLnRvdWNoZWQgJiZcclxuICAgICAgISF0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2wuZXJyb3JzXHJcbiAgICApID8/IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVycm9ycygpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sRGlyPy5jb250cm9sPy5lcnJvcnMgPz8gbnVsbDtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICB0aGlzLm9uVG91Y2goKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFuZ2VWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5vblRvdWNoKCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRJbnB1dFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19