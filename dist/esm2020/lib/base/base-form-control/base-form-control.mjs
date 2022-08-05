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
        this.readOnly = false;
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
BaseFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: BaseFormFieldComponent, selector: "ng-component", inputs: { info: "info", description: "description", label: "label", placeholder: "placeholder", maxLength: "maxLength", noLabel: "noLabel", sideLabel: "sideLabel", readOnly: "readOnly" }, outputs: { change: "change" }, ngImport: i0, template: '', isInline: true });
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
            }], sideLabel: [{
                type: Input
            }], readOnly: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBd0IsV0FBVyxFQUErQixNQUFNLGdCQUFnQixDQUFDOzs7QUFLaEcsTUFBTSxPQUFPLHNCQUFzQjtJQXlCakMsWUFBdUMsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQW5CNUQsNkNBQTZDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLFlBQU8sR0FBeUIsS0FBSyxDQUFDO1FBQ3RDLGNBQVMsR0FBeUIsS0FBSyxDQUFDO1FBQ3hDLGFBQVEsR0FBeUIsS0FBSyxDQUFDO1FBSWhELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU9uQixhQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM5QixZQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBR2pCLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBWEQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFBO0lBQzNGLENBQUM7SUFXRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbkQsdUVBQXVFO1lBQ3ZFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxJQUFJLENBQUMsVUFBVTtnQkFDYixPQUFPLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sQ0FDTCxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU87WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsT0FBTztZQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUNsQyxJQUFJLEtBQUssQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRVMsV0FBVyxDQUFDLEtBQVU7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVTLGFBQWEsQ0FBQyxLQUFVO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7O21IQWxGVSxzQkFBc0I7dUdBQXRCLHNCQUFzQiwrUUFGdkIsRUFBRTsyRkFFRCxzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OzBCQTBCYyxRQUFROzswQkFBSSxJQUFJOzRDQXhCcEIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFFSSxNQUFNO3NCQUFmLE1BQU07Z0JBQ0UsT0FBTztzQkFBZixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dCwgU2VsZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTmdDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIERvQ2hlY2sge1xyXG4gIEBJbnB1dCgpIGluZm8hOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb24hOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWwhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWF4TGVuZ3RoITogc3RyaW5nO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tb3V0cHV0LW5hdGl2ZVxyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBub0xhYmVsPzogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpZGVMYWJlbD86IGJvb2xlYW4gfCB1bmRlZmluZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkT25seT86IGJvb2xlYW4gfCB1bmRlZmluZWQgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgdmFsdWU6IGFueTtcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIGlzUmVxdWlyZWQgPSBmYWxzZTtcclxuICBpbnZhbGlkITogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IEVzSW52YWxpZG8oKXtcclxuICAgIHJldHVybiAoISF0aGlzLmNvbnRyb2xEaXIgJiYgdGhpcy5jb250cm9sRGlyLnRvdWNoZWQgJiYgdGhpcy5jb250cm9sRGlyLmludmFsaWQpIHx8IGZhbHNlXHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7fTtcclxuICBvblRvdWNoID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIGNvbnRyb2xEaXI6IE5nQ29udHJvbCkge1xyXG4gICAgaWYgKGNvbnRyb2xEaXIpIHtcclxuICAgICAgY29udHJvbERpci52YWx1ZUFjY2Vzc29yID0gdGhpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGlmICh0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xyXG4gICAgICAvLyBjaGVjayBpZiB0aGlzIGZpZWxkIGlzIHJlcXVpcmVkIG9yIG5vdCB0byBkaXNwbGF5IGEgJ3JlcXVpcmVkIGxhYmVsJ1xyXG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmNvbnRyb2xEaXIuY29udHJvbC5lcnJvcnM7XHJcbiAgICAgIHRoaXMuaXNSZXF1aXJlZCA9XHJcbiAgICAgICAgQm9vbGVhbih2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpKSB8fFxyXG4gICAgICAgIEJvb2xlYW4odmFsaWRhdG9yICYmIHZhbGlkYXRvci5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRDb3VudCcpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2wgJiZcclxuICAgICAgdGhpcy5jb250cm9sRGlyPy5jb250cm9sLnRvdWNoZWQgJiZcclxuICAgICAgISF0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2wuZXJyb3JzXHJcbiAgICApID8/IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVycm9ycygpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sRGlyPy5jb250cm9sPy5lcnJvcnMgPz8gbnVsbDtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICB0aGlzLm9uVG91Y2goKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFuZ2VWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5vblRvdWNoKCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRJbnB1dFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19