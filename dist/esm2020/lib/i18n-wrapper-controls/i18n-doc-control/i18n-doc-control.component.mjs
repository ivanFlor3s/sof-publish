import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { DocControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nDocControlComponent extends I18nBase {
    constructor() {
        super(...arguments);
        this.minLength = new EventEmitter();
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nDocControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDocControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nDocControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nDocControlComponent, selector: "app-i18n-doc-control", inputs: { type: "type" }, outputs: { minLength: "minLength" }, viewQueries: [{ propertyName: "control", first: true, predicate: DocControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-doc-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [type]=\"type\"\r\n    (minLength)=\"minLength.emit($event)\"\r\n  >\r\n  </sof-doc-control>\r\n</ng-container>", components: [{ type: i1.DocControlComponent, selector: "sof-doc-control", inputs: ["type"], outputs: ["minLength"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDocControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-doc-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-doc-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [type]=\"type\"\r\n    (minLength)=\"minLength.emit($event)\"\r\n  >\r\n  </sof-doc-control>\r\n</ng-container>" }]
        }], propDecorators: { type: [{
                type: Input
            }], minLength: [{
                type: Output
            }], control: [{
                type: ViewChild,
                args: [DocControlComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1kb2MtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tZG9jLWNvbnRyb2wvaTE4bi1kb2MtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tZG9jLWNvbnRyb2wvaTE4bi1kb2MtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsS0FBSyxFQUE4QyxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXRELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFFBQVE7SUFKckQ7O1FBTVksY0FBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO0tBYXhFO0lBUkMsZUFBZTtRQUViLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7SUFFSixDQUFDOztvSEFiVSx1QkFBdUI7d0dBQXZCLHVCQUF1QixvS0FJdkIsbUJBQW1CLHVFQ2JoQyx3VkFTZTsyRkRBRix1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0Usc0JBQXNCOzhCQUl2QixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksU0FBUztzQkFBbEIsTUFBTTtnQkFHUCxPQUFPO3NCQUROLFNBQVM7dUJBQUMsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEFmdGVyVmlld0NoZWNrZWQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvY0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBUeXBlRG9jdW1lbnRzIH0gZnJvbSAnc29mLW5nLWNvbnRyb2xzL2xpYi9tYXRlcmlhbC1jb250cm9scy9kb2MtY29udHJvbC90eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBJMThuQmFzZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLWRvYy1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1kb2MtY29udHJvbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEkxOG5Eb2NDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgSTE4bkJhc2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSB0eXBlITogVHlwZURvY3VtZW50cztcclxuICBAT3V0cHV0KCkgbWluTGVuZ3RoOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIFxyXG4gIEBWaWV3Q2hpbGQoRG9jQ29udHJvbENvbXBvbmVudClcclxuICBjb250cm9sITogRG9jQ29udHJvbENvbXBvbmVudDtcclxuICBcclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5jb250cm9sLmVycm9yQ29udHJvbC50cmFuc2xhdGVGdW5jaW9uID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMucGlwZVRyYW5zbGF0ZS50cmFuc2Zvcm0ocGFyYW0pO1xyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ2V0RmJHcm91cCgpXCI+XHJcbiAgPHNvZi1kb2MtY29udHJvbFxyXG4gICAgbGFiZWw9XCJ7e2xhYmVsVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGUgfX1cIlxyXG4gICAgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGV9fVwiXHJcbiAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xEaXIubmFtZVwiXHJcbiAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgIChtaW5MZW5ndGgpPVwibWluTGVuZ3RoLmVtaXQoJGV2ZW50KVwiXHJcbiAgPlxyXG4gIDwvc29mLWRvYy1jb250cm9sPlxyXG48L25nLWNvbnRhaW5lcj4iXX0=