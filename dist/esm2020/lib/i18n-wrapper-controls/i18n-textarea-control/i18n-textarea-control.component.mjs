import { Component, Input, ViewChild } from '@angular/core';
import { TextAreaMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nTextAreaControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nTextAreaControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nTextAreaControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nTextAreaControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nTextAreaControlComponent, selector: "app-i18n-textarea-control", inputs: { rowsArea: "rowsArea", resizeable: "resizeable" }, viewQueries: [{ propertyName: "control", first: true, predicate: TextAreaMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n    <sof-text-area-control \r\n        label=\"{{labelToTranslate | translate }}\"\r\n        placeholder=\"{{ placeholderToTranslate | translate}}\"\r\n        [formControlName]=\"controlDir.name\" \r\n        [rowsArea]=\"rowsArea\"\r\n        [resizeable]=\"resizeable\"\r\n    >\r\n    </sof-text-area-control>\r\n</ng-container>", components: [{ type: i1.TextAreaMaterialControlComponent, selector: "sof-text-area-control", inputs: ["resizeable", "rowsArea"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nTextAreaControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-textarea-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n    <sof-text-area-control \r\n        label=\"{{labelToTranslate | translate }}\"\r\n        placeholder=\"{{ placeholderToTranslate | translate}}\"\r\n        [formControlName]=\"controlDir.name\" \r\n        [rowsArea]=\"rowsArea\"\r\n        [resizeable]=\"resizeable\"\r\n    >\r\n    </sof-text-area-control>\r\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [TextAreaMaterialControlComponent]
            }], rowsArea: [{
                type: Input
            }], resizeable: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi10ZXh0YXJlYS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi10ZXh0YXJlYS1jb250cm9sL2kxOG4tdGV4dGFyZWEtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tdGV4dGFyZWEtY29udHJvbC9pMThuLXRleHRhcmVhLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFFBQVE7SUFReEQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7SUFDSixDQUFDOzt5SEFaVSw0QkFBNEI7NkdBQTVCLDRCQUE0QixzS0FFNUIsZ0NBQWdDLHVFQ1Y3Qyw4WEFTZTsyRkRERiw0QkFBNEI7a0JBSnhDLFNBQVM7K0JBQ0UsMkJBQTJCOzhCQU1yQyxPQUFPO3NCQUROLFNBQVM7dUJBQUMsZ0NBQWdDO2dCQUdsQyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dEFyZWFNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBJMThuQmFzZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLXRleHRhcmVhLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLXRleHRhcmVhLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4blRleHRBcmVhQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEkxOG5CYXNlIHtcclxuXHJcbiAgQFZpZXdDaGlsZChUZXh0QXJlYU1hdGVyaWFsQ29udHJvbENvbXBvbmVudClcclxuICBjb250cm9sITogVGV4dEFyZWFNYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIHJvd3NBcmVhITogbnVtYmVyXHJcbiAgQElucHV0KCkgcmVzaXplYWJsZSE6Ym9vbGVhblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2wuZXJyb3JDb250cm9sLnRyYW5zbGF0ZUZ1bmNpb24gPSAocGFyYW06IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5waXBlVHJhbnNsYXRlLnRyYW5zZm9ybShwYXJhbSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ2V0RmJHcm91cCgpXCI+XHJcbiAgICA8c29mLXRleHQtYXJlYS1jb250cm9sIFxyXG4gICAgICAgIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cInt7IHBsYWNlaG9sZGVyVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGV9fVwiXHJcbiAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sRGlyLm5hbWVcIiBcclxuICAgICAgICBbcm93c0FyZWFdPVwicm93c0FyZWFcIlxyXG4gICAgICAgIFtyZXNpemVhYmxlXT1cInJlc2l6ZWFibGVcIlxyXG4gICAgPlxyXG4gICAgPC9zb2YtdGV4dC1hcmVhLWNvbnRyb2w+XHJcbjwvbmctY29udGFpbmVyPiJdfQ==