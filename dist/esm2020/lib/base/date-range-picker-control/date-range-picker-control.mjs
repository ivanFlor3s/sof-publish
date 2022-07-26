import { Component, Input, Optional, Self, } from '@angular/core';
import { BaseFormFieldComponent } from '../base-form-control/base-form-control';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class DateRangePickerControlComponent extends BaseFormFieldComponent {
    constructor(fb, controlDir) {
        super(controlDir);
        this.fb = fb;
        this.controlDir = controlDir;
        this.editable = false;
        this.openOnClick = true;
        this.placeHolderFromDate = 'dd/MM/yyyy';
        this.placeHolderToDate = 'dd/MM/yyyy';
    }
    ngOnInit() {
        this.buildAndLoadForm();
        this.validarRequired();
    }
    buildAndLoadForm() {
        this.rangeForm = this.fb.group({
            start: [],
            end: [],
        });
        this.listenChanges();
        // console.log('valores  input?',this.controlDir.control?.value)
        if (this.controlDir.value) {
            this.rangeForm.patchValue({
                start: this.controlDir.control?.value.desde,
                end: this.controlDir.control?.value.hasta,
            });
        }
    }
    togglePicker(picker) {
        if (this.openOnClick) {
            picker.open();
        }
    }
    writeValue(value) {
        if (!!this.rangeForm && value === null) {
            this.rangeForm.reset();
        }
        this.value = value;
    }
    listenChanges() {
        this.changesSub = this.rangeForm.valueChanges.subscribe((values) => {
            this.controlDir.control?.setValue(values);
            //Si es requerido valido que ambos campos (start o end)tengan valor
            this.validarRequired();
        });
    }
    validarRequired() {
        const noDatesInForm = Object.keys(this.rangeForm.value).some((k) => !!!this.rangeForm.value[k]);
        const validator = !!this.controlDir.control?.validator &&
            this.controlDir.control.validator({});
        if (noDatesInForm) {
            if (!!this.controlDir.control?.validator) {
                if (!!validator && !!validator['required']) {
                    this.controlDir.control.setErrors({
                        ...this.controlDir.control.errors,
                        required: validator['required'],
                    });
                }
            }
        }
        if (this.controlDir.control) {
            this.isRequired =
                this.controlDir.control.invalid &&
                    Boolean(validator && validator.hasOwnProperty('required'));
        }
    }
    ngDoCheck() {
        if (this.controlDir.control?.touched) {
            this.rangeForm.markAllAsTouched();
            this.validarRequired();
        }
    }
    ngOnDestroy() {
        this.changesSub.unsubscribe();
    }
}
DateRangePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateRangePickerControlComponent, deps: [{ token: i1.FormBuilder }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DateRangePickerControlComponent, selector: "ng-component", inputs: { editable: "editable", openOnClick: "openOnClick", placeHolderFromDate: "placeHolderFromDate", placeHolderToDate: "placeHolderToDate" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateRangePickerControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { editable: [{
                type: Input
            }], openOnClick: [{
                type: Input
            }], placeHolderFromDate: [{
                type: Input
            }], placeHolderToDate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvYmFzZS9kYXRlLXJhbmdlLXBpY2tlci1jb250cm9sL2RhdGUtcmFuZ2UtcGlja2VyLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsUUFBUSxFQUNSLElBQUksR0FFTCxNQUFNLGVBQWUsQ0FBQztBQVN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBS2hGLE1BQU0sT0FBTywrQkFDWCxTQUFRLHNCQUFzQjtJQWE5QixZQUNVLEVBQWUsRUFDYSxVQUFxQjtRQUV6RCxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFIVixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2EsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQVpsRCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLHdCQUFtQixHQUFXLFlBQVksQ0FBQztRQUMzQyxzQkFBaUIsR0FBVyxZQUFZLENBQUM7SUFVbEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDN0IsS0FBSyxFQUFFLEVBQUU7WUFDVCxHQUFHLEVBQUUsRUFBRTtTQUNSLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixnRUFBZ0U7UUFDaEUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxD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QkksUUFBUTs7MEJBQUksSUFBSTs0Q0FaVixRQUFRO3NCQUFoQixLQUFLO2dCQUVHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBRUcsbUJBQW1CO3NCQUEzQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2VsZixcclxuICBEb0NoZWNrLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBGb3JtQnVpbGRlcixcclxuICBGb3JtR3JvdXAsXHJcbiAgTmdDb250cm9sLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0RGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyQ29udHJvbENvbXBvbmVudFxyXG4gIGV4dGVuZHMgQmFzZUZvcm1GaWVsZENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3lcclxue1xyXG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG9wZW5PbkNsaWNrID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgcGxhY2VIb2xkZXJGcm9tRGF0ZTogc3RyaW5nID0gJ2RkL01NL3l5eXknO1xyXG4gIEBJbnB1dCgpIHBsYWNlSG9sZGVyVG9EYXRlOiBzdHJpbmcgPSAnZGQvTU0veXl5eSc7XHJcblxyXG4gIHJhbmdlRm9ybTogRm9ybUdyb3VwO1xyXG4gIGNoYW5nZXNTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcclxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG92ZXJyaWRlIGNvbnRyb2xEaXI6IE5nQ29udHJvbFxyXG4gICkge1xyXG4gICAgc3VwZXIoY29udHJvbERpcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYnVpbGRBbmRMb2FkRm9ybSgpO1xyXG4gICAgdGhpcy52YWxpZGFyUmVxdWlyZWQoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkQW5kTG9hZEZvcm0oKSB7XHJcbiAgICB0aGlzLnJhbmdlRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBzdGFydDogW10sXHJcbiAgICAgIGVuZDogW10sXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmxpc3RlbkNoYW5nZXMoKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygndmFsb3JlcyAgaW5wdXQ/Jyx0aGlzLmNvbnRyb2xEaXIuY29udHJvbD8udmFsdWUpXHJcbiAgICBpZiAodGhpcy5jb250cm9sRGlyLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMucmFuZ2VGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgIHN0YXJ0OiB0aGlzLmNvbnRyb2xEaXIuY29udHJvbD8udmFsdWUuZGVzZGUsXHJcbiAgICAgICAgZW5kOiB0aGlzLmNvbnRyb2xEaXIuY29udHJvbD8udmFsdWUuaGFzdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGlja2VyKHBpY2tlcjogTWF0RGF0ZVJhbmdlUGlja2VyPGFueT4pIHtcclxuICAgIGlmICh0aGlzLm9wZW5PbkNsaWNrKSB7XHJcbiAgICAgIHBpY2tlci5vcGVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghIXRoaXMucmFuZ2VGb3JtICYmIHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmFuZ2VGb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5jaGFuZ2VzU3ViID0gdGhpcy5yYW5nZUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWVzKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbERpci5jb250cm9sPy5zZXRWYWx1ZSh2YWx1ZXMpO1xyXG4gICAgICAvL1NpIGVzIHJlcXVlcmlkbyB2YWxpZG8gcXVlIGFtYm9zIGNhbXBvcyAoc3RhcnQgbyBlbmQpdGVuZ2FuIHZhbG9yXHJcbiAgICAgIHRoaXMudmFsaWRhclJlcXVpcmVkKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXJSZXF1aXJlZCgpIHtcclxuICAgIGNvbnN0IG5vRGF0ZXNJbkZvcm0gPSBPYmplY3Qua2V5cyh0aGlzLnJhbmdlRm9ybS52YWx1ZSkuc29tZShcclxuICAgICAgKGspID0+ICEhIXRoaXMucmFuZ2VGb3JtLnZhbHVlW2tdXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRvciA9XHJcbiAgICAgICEhdGhpcy5jb250cm9sRGlyLmNvbnRyb2w/LnZhbGlkYXRvciAmJlxyXG4gICAgICB0aGlzLmNvbnRyb2xEaXIuY29udHJvbC52YWxpZGF0b3Ioe30gYXMgQWJzdHJhY3RDb250cm9sKTtcclxuXHJcbiAgICBpZiAobm9EYXRlc0luRm9ybSkge1xyXG4gICAgICBpZiAoISF0aGlzLmNvbnRyb2xEaXIuY29udHJvbD8udmFsaWRhdG9yKSB7XHJcbiAgICAgICAgaWYgKCEhdmFsaWRhdG9yICYmICEhdmFsaWRhdG9yWydyZXF1aXJlZCddKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRyb2xEaXIuY29udHJvbC5zZXRFcnJvcnMoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmNvbnRyb2xEaXIuY29udHJvbC5lcnJvcnMsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB2YWxpZGF0b3JbJ3JlcXVpcmVkJ10sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNvbnRyb2xEaXIuY29udHJvbCkge1xyXG4gICAgICB0aGlzLmlzUmVxdWlyZWQgPVxyXG4gICAgICAgIHRoaXMuY29udHJvbERpci5jb250cm9sLmludmFsaWQgJiZcclxuICAgICAgICBCb29sZWFuKHZhbGlkYXRvciAmJiB2YWxpZGF0b3IuaGFzT3duUHJvcGVydHkoJ3JlcXVpcmVkJykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdEb0NoZWNrKCkge1xyXG4gICAgaWYgKHRoaXMuY29udHJvbERpci5jb250cm9sPy50b3VjaGVkKSB7XHJcbiAgICAgIHRoaXMucmFuZ2VGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcclxuICAgICAgdGhpcy52YWxpZGFyUmVxdWlyZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VzU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==