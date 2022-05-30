import { Component, Input } from '@angular/core';
import { defaultErrorMessages } from '../../validations/configuration/default-error-messages';
import * as i0 from "@angular/core";
import * as i1 from "../../validations/configuration/errors-configuration";
export class ErrorComponent {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.translateFuncion = (param) => param;
        this.controlInvalido = false;
    }
    set errors(value) {
        this.errorsList = value ? Object.keys(value).map(k => this.resolveErrorMessage(k, value[k])) : null;
    }
    get errors() {
        return this.errorsList;
    }
    ngOnChanges(changes) {
        if (changes['controlInvalido']?.currentValue) {
            this.actualizarErrores();
        }
    }
    resolveErrorMessage(errorName, value) {
        const msg = !!value.customMessage ? value.customMessage
            : this.config[errorName] ? this.config[errorName](this.label, value)
                : defaultErrorMessages[errorName] ? defaultErrorMessages[errorName](this.label, value)
                    : '';
        return msg;
    }
    actualizarErrores() {
        this.errorsList = this.errorsList ? this.errorsList.map(e => this.translateFuncion(e)) : null;
    }
}
ErrorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ErrorComponent, deps: [{ token: i1.ErrorsConfigurations }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: ErrorComponent, selector: "sof-error", inputs: { translateFuncion: "translateFuncion", controlInvalido: "controlInvalido", errors: "errors", label: "label" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ErrorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sof-error',
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.ErrorsConfigurations }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { translateFuncion: [{
                type: Input
            }], controlInvalido: [{
                type: Input
            }], errors: [{
                type: Input
            }], label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9iYXNlL2Vycm9yL2Vycm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFFOUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7OztBQU85RixNQUFNLE9BQU8sY0FBYztJQWtCekIsWUFBb0IsTUFBNEIsRUFBVSxFQUFxQjtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFzQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBaEJ0RSxxQkFBZ0IsR0FBNEIsQ0FBQyxLQUFZLEVBQUMsRUFBRSxDQUFBLEtBQUssQ0FBQztRQUNsRSxvQkFBZSxHQUFZLEtBQUssQ0FBQTtJQWdCekMsQ0FBQztJQWRELElBQ0ksTUFBTSxDQUFDLEtBQThCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RHLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxVQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFTRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxZQUFZLEVBQUM7WUFDeEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7U0FDM0I7SUFDSCxDQUFDO0lBRU8sbUJBQW1CLENBQUMsU0FBaUIsRUFBRSxLQUFVO1FBRXZELE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYTtZQUNyRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztvQkFDdEYsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVQLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO0lBQy9GLENBQUM7OzJHQXZDVSxjQUFjOytGQUFkLGNBQWMsOExBRmYsRUFBRTsyRkFFRCxjQUFjO2tCQUoxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsRUFBRTtpQkFDYjsySUFHVSxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFHRixNQUFNO3NCQURULEtBQUs7Z0JBU0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0RXJyb3JNZXNzYWdlcyB9IGZyb20gJy4uLy4uL3ZhbGlkYXRpb25zL2NvbmZpZ3VyYXRpb24vZGVmYXVsdC1lcnJvci1tZXNzYWdlcyc7XHJcbmltcG9ydCB7IEVycm9yc0NvbmZpZ3VyYXRpb25zIH0gZnJvbSAnLi4vLi4vdmFsaWRhdGlvbnMvY29uZmlndXJhdGlvbi9lcnJvcnMtY29uZmlndXJhdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NvZi1lcnJvcicsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlc3tcclxuXHJcbiAgQElucHV0KCkgdHJhbnNsYXRlRnVuY2lvbjogKGFyZzogc3RyaW5nKSA9PiBzdHJpbmcgPSAocGFyYW06c3RyaW5nKT0+cGFyYW07XHJcbiAgQElucHV0KCkgY29udHJvbEludmFsaWRvOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgQElucHV0KCkgXHJcbiAgc2V0IGVycm9ycyh2YWx1ZTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwpIHtcclxuICAgIHRoaXMuZXJyb3JzTGlzdCA9IHZhbHVlID8gT2JqZWN0LmtleXModmFsdWUpLm1hcChrID0+IHRoaXMucmVzb2x2ZUVycm9yTWVzc2FnZShrLCB2YWx1ZVtrXSkpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIGdldCBlcnJvcnMoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzTGlzdCBhcyBhbnk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBsYWJlbCE6IHN0cmluZztcclxuXHJcbiAgZXJyb3JzTGlzdCE6IHN0cmluZ1tdIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IEVycm9yc0NvbmZpZ3VyYXRpb25zLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYoY2hhbmdlc1snY29udHJvbEludmFsaWRvJ10/LmN1cnJlbnRWYWx1ZSl7XHJcbiAgICAgICAgdGhpcy5hY3R1YWxpemFyRXJyb3JlcygpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHByaXZhdGUgcmVzb2x2ZUVycm9yTWVzc2FnZShlcnJvck5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHN0cmluZyB7XHJcblxyXG4gICAgY29uc3QgbXNnID0gISF2YWx1ZS5jdXN0b21NZXNzYWdlID8gdmFsdWUuY3VzdG9tTWVzc2FnZVxyXG4gICAgICA6IHRoaXMuY29uZmlnW2Vycm9yTmFtZV0gPyB0aGlzLmNvbmZpZ1tlcnJvck5hbWVdKHRoaXMubGFiZWwsIHZhbHVlKSBcclxuICAgICAgOiBkZWZhdWx0RXJyb3JNZXNzYWdlc1tlcnJvck5hbWVdID8gZGVmYXVsdEVycm9yTWVzc2FnZXNbZXJyb3JOYW1lXSh0aGlzLmxhYmVsLCB2YWx1ZSkgXHJcbiAgICAgIDogJyc7XHJcblxyXG4gICAgcmV0dXJuIG1zZyAgICBcclxuICB9ICBcclxuXHJcbiAgYWN0dWFsaXphckVycm9yZXMoKXtcclxuICAgIHRoaXMuZXJyb3JzTGlzdCA9IHRoaXMuZXJyb3JzTGlzdCA/IHRoaXMuZXJyb3JzTGlzdC5tYXAoZSA9PiB0aGlzLnRyYW5zbGF0ZUZ1bmNpb24oZSkpIDogbnVsbFxyXG4gIH1cclxufVxyXG4iXX0=