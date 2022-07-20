import { Component, Input, Optional, Self } from '@angular/core';
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
                end: this.controlDir.control?.value.hasta
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
        this.changesSub = this.rangeForm.valueChanges.subscribe(values => {
            this.controlDir.control?.setValue(values);
            if (!!this.controlDir.control?.validator) {
                const validator = this.controlDir.control.validator({});
                //Si es requerido valido que ambos campos (start o end)tengan valor
                if (!!validator && !!validator['required'] && Object.keys(this.rangeForm.value).some(k => !!!this.rangeForm.value[k]))
                    this.controlDir.control.setErrors({
                        ...this.controlDir.control.errors,
                        required: validator['required'],
                    });
            }
        });
    }
    ngOnDestroy() {
        this.changesSub.unsubscribe();
    }
}
DateRangePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DateRangePickerControlComponent, deps: [{ token: i1.FormBuilder }, { token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DateRangePickerControlComponent, selector: "ng-component", inputs: { editable: "editable", openOnClick: "openOnClick", placeHolderFromDate: "placeHolderFromDate", placeHolderToDate: "placeHolderToDate" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DateRangePickerControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvYmFzZS9kYXRlLXJhbmdlLXBpY2tlci1jb250cm9sL2RhdGUtcmFuZ2UtcGlja2VyLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7OztBQUtoRixNQUFNLE9BQU8sK0JBQWdDLFNBQVEsc0JBQXNCO0lBWXZFLFlBQ1UsRUFBZSxFQUNhLFVBQXFCO1FBRXpELEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUhWLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDYSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBWmxELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsd0JBQW1CLEdBQVcsWUFBWSxDQUFBO1FBQzFDLHNCQUFpQixHQUFVLFlBQVksQ0FBQTtJQVVoRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUssRUFBRSxFQUFFO1lBQ1QsR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFFcEIsZ0VBQWdFO1FBQzlELElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDM0MsR0FBRyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLO2FBQ3pDLENBQUMsQ0FBQztTQUNKO0lBRUwsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUErQjtRQUMxQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRVEsVUFBVSxDQUFDLEtBQVU7UUFDNUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDdkI7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFFLE1BQU0sQ0FBQyxFQUFFO1lBRTNELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUV6QyxJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUM7Z0JBQ3RDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDakQsRUFBcUIsQ0FDdEIsQ0FBQTtnQkFDRCxtRUFBbUU7Z0JBQ25FLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO3dCQUNoQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU07d0JBQ2pDLFFBQVEsRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDO3FCQUNoQyxDQUFDLENBQUM7YUFDSjtRQUlQLENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQy9CLENBQUM7OzRIQS9FUSwrQkFBK0I7Z0hBQS9CLCtCQUErQiw2TkFGL0IsRUFBRTsyRkFFRiwrQkFBK0I7a0JBSDNDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFDLEVBQUU7aUJBQ2Q7OzBCQWVNLFFBQVE7OzBCQUFJLElBQUk7NENBWlYsUUFBUTtzQkFBaEIsS0FBSztnQkFFRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFDRyxpQkFBaUI7c0JBQXpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdERhdGVSYW5nZVBpY2tlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UtZm9ybS1jb250cm9sL2Jhc2UtZm9ybS1jb250cm9sJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6JydcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KCkgb3Blbk9uQ2xpY2sgPSB0cnVlO1xyXG4gIFxyXG4gICAgQElucHV0KCkgcGxhY2VIb2xkZXJGcm9tRGF0ZTogc3RyaW5nID0gJ2RkL01NL3l5eXknXHJcbiAgICBASW5wdXQoKSBwbGFjZUhvbGRlclRvRGF0ZTogc3RyaW5nID0nZGQvTU0veXl5eSdcclxuICBcclxuICAgIHJhbmdlRm9ybTogRm9ybUdyb3VwO1xyXG4gICAgY2hhbmdlc1N1YjogU3Vic2NyaXB0aW9uO1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBvdmVycmlkZSBjb250cm9sRGlyOiBOZ0NvbnRyb2xcclxuICAgICkge1xyXG4gICAgICBzdXBlcihjb250cm9sRGlyKTtcclxuICAgIH1cclxuICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLmJ1aWxkQW5kTG9hZEZvcm0oKTtcclxuICAgIH1cclxuICBcclxuICAgIGJ1aWxkQW5kTG9hZEZvcm0oKSB7XHJcbiAgICAgIHRoaXMucmFuZ2VGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgc3RhcnQ6IFtdLFxyXG4gICAgICAgIGVuZDogW10sXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB0aGlzLmxpc3RlbkNoYW5nZXMoKVxyXG4gIFxyXG4gICAgICAvLyBjb25zb2xlLmxvZygndmFsb3JlcyAgaW5wdXQ/Jyx0aGlzLmNvbnRyb2xEaXIuY29udHJvbD8udmFsdWUpXHJcbiAgICAgICAgaWYodGhpcy5jb250cm9sRGlyLnZhbHVlKXtcclxuICAgICAgICAgIHRoaXMucmFuZ2VGb3JtLnBhdGNoVmFsdWUoe1xyXG4gICAgICAgICAgICBzdGFydDogdGhpcy5jb250cm9sRGlyLmNvbnRyb2w/LnZhbHVlLmRlc2RlLFxyXG4gICAgICAgICAgICBlbmQ6dGhpcy5jb250cm9sRGlyLmNvbnRyb2w/LnZhbHVlLmhhc3RhXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgdG9nZ2xlUGlja2VyKHBpY2tlcjogTWF0RGF0ZVJhbmdlUGlja2VyPGFueT4pIHtcclxuICAgICAgaWYgKHRoaXMub3Blbk9uQ2xpY2spIHtcclxuICAgICAgICBwaWNrZXIub3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgaWYgKCEhdGhpcy5yYW5nZUZvcm0gJiYgdmFsdWUgPT09IG51bGwpe1xyXG4gICAgICAgIHRoaXMucmFuZ2VGb3JtLnJlc2V0KClcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsaXN0ZW5DaGFuZ2VzKCl7XHJcbiAgICAgIHRoaXMuY2hhbmdlc1N1Yj0gdGhpcy5yYW5nZUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSggdmFsdWVzID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sRGlyLmNvbnRyb2w/LnNldFZhbHVlKHZhbHVlcylcclxuICBcclxuICAgICAgICAgICAgaWYoISF0aGlzLmNvbnRyb2xEaXIuY29udHJvbD8udmFsaWRhdG9yKXtcclxuICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmNvbnRyb2xEaXIuY29udHJvbC52YWxpZGF0b3IoXHJcbiAgICAgICAgICAgICAgICB7fSBhcyBBYnN0cmFjdENvbnRyb2xcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLy9TaSBlcyByZXF1ZXJpZG8gdmFsaWRvIHF1ZSBhbWJvcyBjYW1wb3MgKHN0YXJ0IG8gZW5kKXRlbmdhbiB2YWxvclxyXG4gICAgICAgICAgICAgIGlmICghIXZhbGlkYXRvciAmJiAhIXZhbGlkYXRvclsncmVxdWlyZWQnXSAmJiBPYmplY3Qua2V5cyh0aGlzLnJhbmdlRm9ybS52YWx1ZSkuc29tZShrPT4hISF0aGlzLnJhbmdlRm9ybS52YWx1ZVtrXSkgKVxyXG4gICAgICAgICAgICAgIHRoaXMuY29udHJvbERpci5jb250cm9sLnNldEVycm9ycyh7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmNvbnRyb2xEaXIuY29udHJvbC5lcnJvcnMsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdmFsaWRhdG9yWydyZXF1aXJlZCddLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH0pXHJcbiAgXHJcbiAgICB9ICAgIFxyXG4gIFxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuY2hhbmdlc1N1Yi51bnN1YnNjcmliZSgpXHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuXHJcbn1cclxuIl19