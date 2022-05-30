import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { TextControlComponent } from '../../base/text-control/text-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "../error/error.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/input";
import * as i5 from "ngx-mask";
export class DocControlComponent extends TextControlComponent {
    constructor() {
        super(...arguments);
        this.type = 'DNI';
        this.minLength = new EventEmitter();
    }
    ngOnInit() {
        this.setMask();
    }
    ngOnChanges(changes) {
        if (changes) {
            setTimeout(() => { this.value = null; }, 0);
            this.setMask();
        }
    }
    setMask() {
        switch (this.type) {
            case 'DNI':
                this.customMask = '0.000.000||00.000.000';
                this.minLength.emit(9);
                break;
            case 'CUIL':
                this.customMask = '00-0.000.000-0||00-00.000.000-0';
                this.minLength.emit(14);
                break;
            case 'PASAPORTE':
                this.customMask = 'SSS000';
                this.minLength.emit(6);
                break;
            default:
                this.customMask = '00.000.000||0.000.000';
                this.minLength.emit(9);
                break;
        }
    }
}
DocControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DocControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DocControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DocControlComponent, selector: "sof-doc-control", inputs: { type: "type" }, outputs: { minLength: "minLength" }, viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [mask]=\"customMask\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: [".required-label:after{content:\"*\";color:red}:host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:#f44336}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i5.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DocControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-doc-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [mask]=\"customMask\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: [".required-label:after{content:\"*\";color:red}:host{display:flex;flex-direction:column}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:#f44336}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }], type: [{
                type: Input
            }], minLength: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9kb2MtY29udHJvbC9kb2MtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2RvYy1jb250cm9sL2RvYy1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFRbEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG9CQUFvQjtJQUw3RDs7UUFRVyxTQUFJLEdBQWtCLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7S0FxQ3hFO0lBbENDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFHLE9BQU8sRUFBQztZQUNULFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07WUFFUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQ0FBaUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hCLE1BQU07WUFFUixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1lBRVI7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07U0FDVDtJQUNILENBQUM7O2dIQXhDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixvS0FDbkIsc0JBQXNCLDRGQ1huQywycUJBcUJ3RjsyRkRYM0UsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGlCQUFpQjs4QkFLUSxZQUFZO3NCQUE5QyxTQUFTO3VCQUFDLHNCQUFzQjtnQkFFeEIsSUFBSTtzQkFBWixLQUFLO2dCQUNJLFNBQVM7c0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvdGV4dC1jb250cm9sL3RleHQtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHlwZURvY3VtZW50cyB9IGZyb20gJy4vdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLWRvYy1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZG9jLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RvYy1jb250cm9sLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIERvY0NvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBUZXh0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBAVmlld0NoaWxkKEVycm9yTWF0ZXJpYWxDb21wb25lbnQpIGVycm9yQ29udHJvbDogRXJyb3JNYXRlcmlhbENvbXBvbmVudDtcclxuICBcclxuICBASW5wdXQoKSB0eXBlOiBUeXBlRG9jdW1lbnRzID0gJ0ROSSc7XHJcbiAgQE91dHB1dCgpIG1pbkxlbmd0aDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBjdXN0b21NYXNrOiBhbnk7XHJcbiAgXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldE1hc2soKTtcclxuICB9XHJcbiAgXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYoY2hhbmdlcyl7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnZhbHVlID0gbnVsbCB9LCAwKTtcclxuICAgICAgdGhpcy5zZXRNYXNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNYXNrKCl7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICBjYXNlICdETkknOlxyXG4gICAgICAgIHRoaXMuY3VzdG9tTWFzayA9ICcwLjAwMC4wMDB8fDAwLjAwMC4wMDAnO1xyXG4gICAgICAgIHRoaXMubWluTGVuZ3RoLmVtaXQoOSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdDVUlMJzogXHJcbiAgICAgICAgdGhpcy5jdXN0b21NYXNrID0gJzAwLTAuMDAwLjAwMC0wfHwwMC0wMC4wMDAuMDAwLTAnO1xyXG4gICAgICAgIHRoaXMubWluTGVuZ3RoLmVtaXQoMTQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnUEFTQVBPUlRFJzpcclxuICAgICAgICB0aGlzLmN1c3RvbU1hc2sgPSAnU1NTMDAwJztcclxuICAgICAgICB0aGlzLm1pbkxlbmd0aC5lbWl0KDYpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmN1c3RvbU1hc2sgPSAnMDAuMDAwLjAwMHx8MC4wMDAuMDAwJztcclxuICAgICAgICB0aGlzLm1pbkxlbmd0aC5lbWl0KDkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bWF0LWxhYmVsXHJcbiAgW25nQ2xhc3NdPVwie1xyXG4gICAgJ3JlcXVpcmVkLWxhYmVsJzogaXNSZXF1aXJlZCwgXHJcbiAgICAndGV4dC1lcnJvcic6IEVzSW52YWxpZG8sXHJcbiAgICAnYWN0aXZlLWxhYmVsJzppbnB1dFJlZi5mb2N1c2VkXHJcbiAgfVwiXHJcbj57e2xhYmVsfX08L21hdC1sYWJlbD5cclxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgXHJcbiAgICBbbmdDbGFzc109XCJ7ICdlcnJvci1maWVsZCc6IEVzSW52YWxpZG8gfVwiPlxyXG4gIDxpbnB1dFxyXG4gICAgI2lucHV0UmVmPVwibWF0SW5wdXRcIlxyXG4gICAgbWF0SW5wdXRcclxuICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIChpbnB1dCk9XCJvbklucHV0KCRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUpXCJcclxuICAgIFttYXNrXT1cImN1c3RvbU1hc2tcIlxyXG4gIC8+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbjxzb2YtZXJyb3IgW2NvbnRyb2xJbnZhbGlkb109XCJFc0ludmFsaWRvXCIgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj4iXX0=