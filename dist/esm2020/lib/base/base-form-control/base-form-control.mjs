import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class BaseFormFieldComponent {
    constructor(controlDir) {
        this.controlDir = controlDir;
        // tslint:disable-next-line: no-output-native
        this.change = new EventEmitter();
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
BaseFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: BaseFormFieldComponent, selector: "ng-component", inputs: { info: "info", description: "description", label: "label", placeholder: "placeholder" }, outputs: { change: "change" }, ngImport: i0, template: '', isInline: true });
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
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBd0IsV0FBVyxFQUErQixNQUFNLGdCQUFnQixDQUFDOzs7QUFLaEcsTUFBTSxPQUFPLHNCQUFzQjtJQXFCakMsWUFBdUMsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQWhCNUQsNkNBQTZDO1FBQ25DLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSTNDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU9uQixhQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUM5QixZQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBR2pCLElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBWEQsSUFBSSxVQUFVO1FBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFBO0lBQzNGLENBQUM7SUFXRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sWUFBWSxXQUFXLEVBQUU7WUFDbkQsdUVBQXVFO1lBQ3ZFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNqRCxJQUFJLENBQUMsVUFBVTtnQkFDYixPQUFPLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzFELE9BQU8sQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sQ0FDTCxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU87WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsT0FBTztZQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUNsQyxJQUFJLEtBQUssQ0FBQztJQUNiLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUM7SUFDbEQsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRVMsV0FBVyxDQUFDLEtBQVU7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVTLGFBQWEsQ0FBQyxLQUFVO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7O21IQTlFVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixxTEFGdkIsRUFBRTsyRkFFRCxzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OzBCQXNCYyxRQUFROzswQkFBSSxJQUFJOzRDQXBCcEIsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEb0NoZWNrLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPcHRpb25hbCwgT3V0cHV0LCBTZWxmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOZ0NvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VGb3JtRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRG9DaGVjayB7XHJcbiAgQElucHV0KCkgaW5mbyE6IHN0cmluZztcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbiE6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciE6IHN0cmluZztcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLW91dHB1dC1uYXRpdmVcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG5cclxuICB2YWx1ZTogYW55O1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgaXNSZXF1aXJlZCA9IGZhbHNlO1xyXG4gIGludmFsaWQhOiBib29sZWFuO1xyXG5cclxuICBnZXQgRXNJbnZhbGlkbygpe1xyXG4gICAgcmV0dXJuICghIXRoaXMuY29udHJvbERpciAmJiB0aGlzLmNvbnRyb2xEaXIudG91Y2hlZCAmJiB0aGlzLmNvbnRyb2xEaXIuaW52YWxpZCkgfHwgZmFsc2VcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlID0gKHZhbHVlOiBhbnkpID0+IHt9O1xyXG4gIG9uVG91Y2ggPSAoKSA9PiB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgY29udHJvbERpcjogTmdDb250cm9sKSB7XHJcbiAgICBpZiAoY29udHJvbERpcikge1xyXG4gICAgICBjb250cm9sRGlyLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdEb0NoZWNrKCkge1xyXG4gICAgaWYgKHRoaXMuY29udHJvbERpcj8uY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sKSB7XHJcbiAgICAgIC8vIGNoZWNrIGlmIHRoaXMgZmllbGQgaXMgcmVxdWlyZWQgb3Igbm90IHRvIGRpc3BsYXkgYSAncmVxdWlyZWQgbGFiZWwnXHJcbiAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuY29udHJvbERpci5jb250cm9sLmVycm9ycztcclxuICAgICAgdGhpcy5pc1JlcXVpcmVkID1cclxuICAgICAgICBCb29sZWFuKHZhbGlkYXRvciAmJiB2YWxpZGF0b3IuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykpIHx8XHJcbiAgICAgICAgQm9vbGVhbih2YWxpZGF0b3IgJiYgdmFsaWRhdG9yLmhhc093blByb3BlcnR5KCdzZWxlY3RlZENvdW50JykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0Vycm9ycygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuY29udHJvbERpcj8uY29udHJvbCAmJlxyXG4gICAgICB0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2wudG91Y2hlZCAmJlxyXG4gICAgICAhIXRoaXMuY29udHJvbERpcj8uY29udHJvbC5lcnJvcnNcclxuICAgICkgPz8gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgZXJyb3JzKCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xEaXI/LmNvbnRyb2w/LmVycm9ycyA/PyBudWxsO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMub25Ub3VjaCgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB0aGlzLm9uVG91Y2goKTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldElucHV0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=