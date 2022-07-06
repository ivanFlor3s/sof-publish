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
DocControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: DocControlComponent, selector: "sof-doc-control", inputs: { type: "type" }, outputs: { minLength: "minLength" }, viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      #inputRef=\"matInput\"\r\n      matInput\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [mask]=\"customMask\"\r\n    />\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n  </div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i5.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DocControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-doc-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      #inputRef=\"matInput\"\r\n      matInput\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [mask]=\"customMask\"\r\n    />\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n  </div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }], type: [{
                type: Input
            }], minLength: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9kb2MtY29udHJvbC9kb2MtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL21hdGVyaWFsLWNvbnRyb2xzL2RvYy1jb250cm9sL2RvYy1jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFRbEUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG9CQUFvQjtJQUw3RDs7UUFRVyxTQUFJLEdBQWtCLEtBQUssQ0FBQztRQUMzQixjQUFTLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7S0FxQ3hFO0lBbENDLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFHLE9BQU8sRUFBQztZQUNULFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNqQixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07WUFFUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQ0FBaUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hCLE1BQU07WUFFUixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNO1lBRVI7Z0JBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU07U0FDVDtJQUNILENBQUM7O2dIQXhDVSxtQkFBbUI7b0dBQW5CLG1CQUFtQixvS0FDbkIsc0JBQXNCLDRGQ1huQyxrekJBeUJROzJGRGZLLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxpQkFBaUI7OEJBS1EsWUFBWTtzQkFBOUMsU0FBUzt1QkFBQyxzQkFBc0I7Z0JBRXhCLElBQUk7c0JBQVosS0FBSztnQkFDSSxTQUFTO3NCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL3RleHQtY29udHJvbC90ZXh0LWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4uL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFR5cGVEb2N1bWVudHMgfSBmcm9tICcuL3R5cGUuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvZi1kb2MtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RvYy1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kb2MtY29udHJvbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEb2NDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgVGV4dENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQFZpZXdDaGlsZChFcnJvck1hdGVyaWFsQ29tcG9uZW50KSBlcnJvckNvbnRyb2w6IEVycm9yTWF0ZXJpYWxDb21wb25lbnQ7XHJcbiAgXHJcbiAgQElucHV0KCkgdHlwZTogVHlwZURvY3VtZW50cyA9ICdETkknO1xyXG4gIEBPdXRwdXQoKSBtaW5MZW5ndGg6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgY3VzdG9tTWFzazogYW55O1xyXG4gIFxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRNYXNrKCk7XHJcbiAgfVxyXG4gIFxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmKGNoYW5nZXMpe1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy52YWx1ZSA9IG51bGwgfSwgMCk7XHJcbiAgICAgIHRoaXMuc2V0TWFzaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TWFzaygpe1xyXG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSAnRE5JJzpcclxuICAgICAgICB0aGlzLmN1c3RvbU1hc2sgPSAnMC4wMDAuMDAwfHwwMC4wMDAuMDAwJztcclxuICAgICAgICB0aGlzLm1pbkxlbmd0aC5lbWl0KDkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnQ1VJTCc6IFxyXG4gICAgICAgIHRoaXMuY3VzdG9tTWFzayA9ICcwMC0wLjAwMC4wMDAtMHx8MDAtMDAuMDAwLjAwMC0wJztcclxuICAgICAgICB0aGlzLm1pbkxlbmd0aC5lbWl0KDE0KTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ1BBU0FQT1JURSc6XHJcbiAgICAgICAgdGhpcy5jdXN0b21NYXNrID0gJ1NTUzAwMCc7XHJcbiAgICAgICAgdGhpcy5taW5MZW5ndGguZW1pdCg2KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5jdXN0b21NYXNrID0gJzAwLjAwMC4wMDB8fDAuMDAwLjAwMCc7XHJcbiAgICAgICAgdGhpcy5taW5MZW5ndGguZW1pdCg5KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG1hdC1sYWJlbFxyXG4gIFtuZ0NsYXNzXT1cIntcclxuICAgICdyZXF1aXJlZC1sYWJlbCc6IGlzUmVxdWlyZWQsIFxyXG4gICAgJ3RleHQtZXJyb3InOiBFc0ludmFsaWRvLFxyXG4gICAgJ2FjdGl2ZS1sYWJlbCc6aW5wdXRSZWYuZm9jdXNlZCxcclxuICAgICduby1sYWJlbCc6IG5vTGFiZWwsXHJcbiAgICAnc2lkZS1sYWJlbCc6IHNpZGVMYWJlbFxyXG4gIH1cIlxyXG4+e3tsYWJlbH19PC9tYXQtbGFiZWw+XHJcbjxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBcclxuICAgIFtuZ0NsYXNzXT1cInsgJ2Vycm9yLWZpZWxkJzogRXNJbnZhbGlkbyB9XCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgI2lucHV0UmVmPVwibWF0SW5wdXRcIlxyXG4gICAgICBtYXRJbnB1dFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGFueSgkZXZlbnQudGFyZ2V0KS52YWx1ZSlcIlxyXG4gICAgICBbbWFza109XCJjdXN0b21NYXNrXCJcclxuICAgIC8+XHJcbiAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8c29mLWVycm9yIFtjb250cm9sSW52YWxpZG9dPVwiRXNJbnZhbGlkb1wiIFtsYWJlbF09XCJsYWJlbFwiIFtlcnJvcnNdPVwiZXJyb3JzXCI+PC9zb2YtZXJyb3I+XHJcbiAgPC9kaXY+Il19