import { Component, ViewChild } from '@angular/core';
import { PasswordMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nPasswordControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nPasswordControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPasswordControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nPasswordControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nPasswordControlComponent, selector: "app-i18n-password-control", viewQueries: [{ propertyName: "control", first: true, predicate: PasswordMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-password-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n  >\r\n  </sof-password-control>\r\n</ng-container>\r\n", components: [{ type: i1.PasswordMaterialControlComponent, selector: "sof-password-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPasswordControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-password-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-password-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n  >\r\n  </sof-password-control>\r\n</ng-container>\r\n" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [PasswordMaterialControlComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1wYXNzd29yZC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1wYXNzd29yZC1jb250cm9sL2kxOG4tcGFzc3dvcmQtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tcGFzc3dvcmQtY29udHJvbC9pMThuLXBhc3N3b3JkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNcEQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLFFBQVE7SUFLeEQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7SUFDSixDQUFDOzt5SEFUVSw0QkFBNEI7NkdBQTVCLDRCQUE0QiwwR0FFNUIsZ0NBQWdDLHVFQ1Y3QywrVkFVQTsyRkRGYSw0QkFBNEI7a0JBSnhDLFNBQVM7K0JBQ0UsMkJBQTJCOzhCQU1yQyxPQUFPO3NCQUROLFNBQVM7dUJBQUMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFzc3dvcmRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBJMThuQmFzZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9tb2RlbHMvYmFzZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLXBhc3N3b3JkLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLXBhc3N3b3JkLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuUGFzc3dvcmRDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgSTE4bkJhc2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQFZpZXdDaGlsZChQYXNzd29yZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudClcclxuICBjb250cm9sITogUGFzc3dvcmRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5lcnJvckNvbnRyb2wudHJhbnNsYXRlRnVuY2lvbiA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHBhcmFtKTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJnZXRGYkdyb3VwKClcIj5cclxuICA8c29mLXBhc3N3b3JkLWNvbnRyb2xcclxuICAgIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICAgIHBsYWNlaG9sZGVyPVwie3twbGFjZWhvbGRlclRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlfX1cIlxyXG4gICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb250cm9sRGlyLm5hbWVcIlxyXG4gICAgW21heExlbmd0aF09XCJtYXhMZW5ndGhcIlxyXG4gICAgW25vTGFiZWxdPVwibm9MYWJlbFwiXHJcbiAgPlxyXG4gIDwvc29mLXBhc3N3b3JkLWNvbnRyb2w+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=