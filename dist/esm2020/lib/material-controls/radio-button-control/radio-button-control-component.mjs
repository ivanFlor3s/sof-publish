import { Component, ViewChild } from '@angular/core';
import { RadioButtonControlComponent } from '../../base/radio-button-control/radio-button-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/common";
export class RadioButtonMaterialControlComponent extends RadioButtonControlComponent {
}
RadioButtonMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: RadioButtonMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RadioButtonMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: RadioButtonMaterialControlComponent, selector: "sof-radio-button-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n<mat-radio-group style=\"margin-right: 10px;\"\r\n  matInput\r\n  [disabled]=\"disabled\"\r\n  [name]=\"label\" \r\n  [value]=\"value\" \r\n  [ngClass]=\"{'required-label': isRequired}\"\r\n  (input)=\"onInput($any($event.target).value)\">\r\n  <mat-radio-button\r\n    matInput\r\n    *ngFor=\"let item of list; let i=index\"\r\n    [checked]=\"getValue(item) == value\" \r\n    [value]=\"getValue(item)\">\r\n    {{getText(item)}}\r\n  </mat-radio-button>\r\n</mat-radio-group>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [":host mat-radio-group mat-radio-button{margin-right:10px}\n"], components: [{ type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: RadioButtonMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-radio-button-control', template: "\r\n<mat-radio-group style=\"margin-right: 10px;\"\r\n  matInput\r\n  [disabled]=\"disabled\"\r\n  [name]=\"label\" \r\n  [value]=\"value\" \r\n  [ngClass]=\"{'required-label': isRequired}\"\r\n  (input)=\"onInput($any($event.target).value)\">\r\n  <mat-radio-button\r\n    matInput\r\n    *ngFor=\"let item of list; let i=index\"\r\n    [checked]=\"getValue(item) == value\" \r\n    [value]=\"getValue(item)\">\r\n    {{getText(item)}}\r\n  </mat-radio-button>\r\n</mat-radio-group>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [":host mat-radio-group mat-radio-button{margin-right:10px}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9yYWRpby1idXR0b24tY29udHJvbC9yYWRpby1idXR0b24tY29udHJvbC1jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL3JhZGlvLWJ1dHRvbi1jb250cm9sL3JhZGlvLWJ1dHRvbi1jb250cm9sLWNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU9sRSxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsMkJBQTJCOztnSUFBdkUsbUNBQW1DO29IQUFuQyxtQ0FBbUMsOEdBQ25DLHNCQUFzQix1RUNWbkMsMmtCQWlCQTsyRkRSYSxtQ0FBbUM7a0JBTC9DLFNBQVM7K0JBQ0UsMEJBQTBCOzhCQUtELFlBQVk7c0JBQTlDLFNBQVM7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9yYWRpby1idXR0b24tY29udHJvbC9yYWRpby1idXR0b24tY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLXJhZGlvLWJ1dHRvbi1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8tYnV0dG9uLWNvbnRyb2wtY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLWJ1dHRvbi1jb250cm9sLWNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudCBleHRlbmRzIFJhZGlvQnV0dG9uQ29udHJvbENvbXBvbmVudCB7XHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnRcclxuXHJcbn1cclxuIiwiXHJcbjxtYXQtcmFkaW8tZ3JvdXAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCJcclxuICBtYXRJbnB1dFxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgW25hbWVdPVwibGFiZWxcIiBcclxuICBbdmFsdWVdPVwidmFsdWVcIiBcclxuICBbbmdDbGFzc109XCJ7J3JlcXVpcmVkLWxhYmVsJzogaXNSZXF1aXJlZH1cIlxyXG4gIChpbnB1dCk9XCJvbklucHV0KCRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUpXCI+XHJcbiAgPG1hdC1yYWRpby1idXR0b25cclxuICAgIG1hdElucHV0XHJcbiAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBsaXN0OyBsZXQgaT1pbmRleFwiXHJcbiAgICBbY2hlY2tlZF09XCJnZXRWYWx1ZShpdGVtKSA9PSB2YWx1ZVwiIFxyXG4gICAgW3ZhbHVlXT1cImdldFZhbHVlKGl0ZW0pXCI+XHJcbiAgICB7e2dldFRleHQoaXRlbSl9fVxyXG4gIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbjxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj5cclxuIl19