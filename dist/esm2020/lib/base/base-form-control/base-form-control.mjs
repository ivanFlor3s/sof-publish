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
        this.sideLabel = false;
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
BaseFormFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BaseFormFieldComponent, deps: [{ token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
BaseFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: BaseFormFieldComponent, selector: "ng-component", inputs: { info: "info", description: "description", label: "label", placeholder: "placeholder", maxLength: "maxLength", noLabel: "noLabel", sideLabel: "sideLabel" }, outputs: { change: "change" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BaseFormFieldComponent, decorators: [{
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
            }], sideLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBd0IsV0FBVyxFQUErQixNQUFNLGdCQUFnQixDQUFDOzs7QUFLaEcsTUFBTSxPQUFPLHNCQUFzQjtJQXdCakMsWUFBdUMsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWxCNUQsNkNBQTZDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLFlBQU8sR0FBeUIsS0FBSyxDQUFDO1FBQ3RDLGNBQVMsR0FBeUIsS0FBSyxDQUFDO1FBSWpELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU9uQixhQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM5QixZQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBR2pCLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBWEQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFBO0lBQzNGLENBQUM7SUFXRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbkQsdUVBQXVFO1lBQ3ZFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxJQUFJLENBQUMsVUFBVTtnQkFDYixPQUFPLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sQ0FDTCxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU87WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsT0FBTztZQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUNsQyxJQUFJLEtBQUssQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRVMsV0FBVyxDQUFDLEtBQVU7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVTLGFBQWEsQ0FBQyxLQUFVO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7O29IQWpGVSxzQkFBc0I7d0dBQXRCLHNCQUFzQix5UEFGdkIsRUFBRTs0RkFFRCxzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OzBCQXlCYyxRQUFROzswQkFBSSxJQUFJOzRDQXZCcEIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFFSSxNQUFNO3NCQUFmLE1BQU07Z0JBQ0UsT0FBTztzQkFBZixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERvQ2hlY2ssIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9wdGlvbmFsLCBPdXRwdXQsIFNlbGYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCwgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFzZUZvcm1GaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBEb0NoZWNrIHtcclxuICBASW5wdXQoKSBpbmZvITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aCE6IHN0cmluZztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgbm9MYWJlbD86IGJvb2xlYW4gfCB1bmRlZmluZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaWRlTGFiZWw/OiBib29sZWFuIHwgdW5kZWZpbmVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHZhbHVlOiBhbnk7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBpc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgaW52YWxpZCE6IGJvb2xlYW47XHJcblxyXG4gIGdldCBFc0ludmFsaWRvKCl7XHJcbiAgICByZXR1cm4gKCEhdGhpcy5jb250cm9sRGlyICYmIHRoaXMuY29udHJvbERpci50b3VjaGVkICYmIHRoaXMuY29udHJvbERpci5pbnZhbGlkKSB8fCBmYWxzZVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge307XHJcbiAgb25Ub3VjaCA9ICgpID0+IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBjb250cm9sRGlyOiBOZ0NvbnRyb2wpIHtcclxuICAgIGlmIChjb250cm9sRGlyKSB7XHJcbiAgICAgIGNvbnRyb2xEaXIudmFsdWVBY2Nlc3NvciA9IHRoaXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKSB7XHJcbiAgICBpZiAodGhpcy5jb250cm9sRGlyPy5jb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcclxuICAgICAgLy8gY2hlY2sgaWYgdGhpcyBmaWVsZCBpcyByZXF1aXJlZCBvciBub3QgdG8gZGlzcGxheSBhICdyZXF1aXJlZCBsYWJlbCdcclxuICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5jb250cm9sRGlyLmNvbnRyb2wuZXJyb3JzO1xyXG4gICAgICB0aGlzLmlzUmVxdWlyZWQgPVxyXG4gICAgICAgIEJvb2xlYW4odmFsaWRhdG9yICYmIHZhbGlkYXRvci5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWQnKSkgfHxcclxuICAgICAgICBCb29sZWFuKHZhbGlkYXRvciAmJiB2YWxpZGF0b3IuaGFzT3duUHJvcGVydHkoJ3NlbGVjdGVkQ291bnQnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5jb250cm9sRGlyPy5jb250cm9sICYmXHJcbiAgICAgIHRoaXMuY29udHJvbERpcj8uY29udHJvbC50b3VjaGVkICYmXHJcbiAgICAgICEhdGhpcy5jb250cm9sRGlyPy5jb250cm9sLmVycm9yc1xyXG4gICAgKSA/PyBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldCBlcnJvcnMoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbERpcj8uY29udHJvbD8uZXJyb3JzID8/IG51bGw7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgdGhpcy5vblRvdWNoKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY2hhbmdlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMub25Ub3VjaCgpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0SW5wdXRWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==