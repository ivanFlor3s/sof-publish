import { Component, ViewChild, Input, Self } from '@angular/core';
import { CheckboxGroupMaterialControlComponent } from 'sof-ng-controls';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngx-translate/core";
import * as i3 from "sof-ng-controls";
export class I18nCheckboxGroupControlComponent extends CheckboxGroupMaterialControlComponent {
    constructor(controlDir, pipeTranslate, _srvTranslatePipe) {
        super(controlDir);
        this.controlDir = controlDir;
        this.pipeTranslate = pipeTranslate;
        this._srvTranslatePipe = _srvTranslatePipe;
        this.checkOptions = [];
    }
    ngOnInit() {
        this.translateOptions();
    }
    translateOptions() {
        this.checkOptions = this.listToTranslate.map(x => {
            return {
                text: this.pipeTranslate.transform(this.getText(x)),
                value: this.getValue(x)
            };
        });
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
        this._srvTranslatePipe.onLangChange.subscribe(() => {
            this.translateOptions();
        });
    }
    getFbGroup() {
        return this.controlDir.control?.parent || new FormGroup({});
    }
}
I18nCheckboxGroupControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCheckboxGroupControlComponent, deps: [{ token: i1.NgControl, self: true }, { token: i2.TranslatePipe }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nCheckboxGroupControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCheckboxGroupControlComponent, selector: "app-i18n-checkbox-group-control", inputs: { labelToTranslate: "labelToTranslate", listToTranslate: "listToTranslate" }, viewQueries: [{ propertyName: "control", first: true, predicate: CheckboxGroupMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-group-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"checkOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  >\r\n    \r\n  </sof-checkbox-group-control>\r\n</ng-container>\r\n", components: [{ type: i3.CheckboxGroupMaterialControlComponent, selector: "sof-checkbox-group-control" }], directives: [{ type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCheckboxGroupControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-checkbox-group-control', template: "\r\n\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-group-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"checkOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  >\r\n    \r\n  </sof-checkbox-group-control>\r\n</ng-container>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }] }, { type: i2.TranslatePipe }, { type: i2.TranslateService }]; }, propDecorators: { control: [{
                type: ViewChild,
                args: [CheckboxGroupMaterialControlComponent]
            }], labelToTranslate: [{
                type: Input
            }], listToTranslate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sL2kxOG4tY2hlY2tib3gtZ3JvdXAtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tY2hlY2tib3gtZ3JvdXAtY29udHJvbC9pMThuLWNoZWNrYm94LWdyb3VwLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU90RCxNQUFNLE9BQU8saUNBQWtDLFNBQVEscUNBQXFDO0lBVzFGLFlBQW9DLFVBQXFCLEVBQzdDLGFBQTRCLEVBQy9CLGlCQUFtQztRQUUxQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7UUFKaUIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBUjVDLGlCQUFZLEdBQStCLEVBQUUsQ0FBQTtJQVc3QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9DLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN4QixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBRSxHQUFHLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBbUIsSUFBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs4SEEzQ1UsaUNBQWlDO2tIQUFqQyxpQ0FBaUMsc01BRWpDLHFDQUFxQyx1RUNYbEQsbVdBY0E7MkZETGEsaUNBQWlDO2tCQUo3QyxTQUFTOytCQUNFLGlDQUFpQzs7MEJBYzlCLElBQUk7dUdBUmpCLE9BQU87c0JBRE4sU0FBUzt1QkFBQyxxQ0FBcUM7Z0JBS3ZDLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFFRyxlQUFlO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0LCBTZWxmLCBPbkluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hHcm91cE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJ3NvZi1uZy1jb250cm9scyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1pMThuLWNoZWNrYm94LWdyb3VwLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9pMThuLWNoZWNrYm94LWdyb3VwLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuQ2hlY2tib3hHcm91cENvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBDaGVja2JveEdyb3VwTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBcclxuICBAVmlld0NoaWxkKENoZWNrYm94R3JvdXBNYXRlcmlhbENvbnRyb2xDb21wb25lbnQpXHJcbiAgY29udHJvbCE6IENoZWNrYm94R3JvdXBNYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIGNoZWNrT3B0aW9uczoge3RleHQ6c3RyaW5nLCB2YWx1ZTphbnl9W10gPSBbXVxyXG5cclxuICBASW5wdXQoKSBsYWJlbFRvVHJhbnNsYXRlITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBsaXN0VG9UcmFuc2xhdGUhOiBhbnlbXSBcclxuXHJcbiAgY29uc3RydWN0b3IoQFNlbGYoKSBwdWJsaWMgb3ZlcnJpZGUgY29udHJvbERpcjogTmdDb250cm9sLFxyXG4gICAgcHJvdGVjdGVkIHBpcGVUcmFuc2xhdGU6IFRyYW5zbGF0ZVBpcGUsXHJcbiAgICBwdWJsaWMgX3NydlRyYW5zbGF0ZVBpcGU6IFRyYW5zbGF0ZVNlcnZpY2VcclxuICApe1xyXG4gICAgc3VwZXIoY29udHJvbERpcilcclxuICB9XHJcbiAgXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZU9wdGlvbnMoKXtcclxuICAgIHRoaXMuY2hlY2tPcHRpb25zID0gdGhpcy5saXN0VG9UcmFuc2xhdGUubWFwKHggPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRleHQ6IHRoaXMucGlwZVRyYW5zbGF0ZS50cmFuc2Zvcm0odGhpcy5nZXRUZXh0KHgpKSAsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoeClcclxuICAgICAgfSBcclxuICAgIH0pIFxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sLmVycm9yQ29udHJvbC50cmFuc2xhdGVGdW5jaW9uID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMucGlwZVRyYW5zbGF0ZS50cmFuc2Zvcm0ocGFyYW0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9zcnZUcmFuc2xhdGVQaXBlLm9uTGFuZ0NoYW5nZS5zdWJzY3JpYmUoICgpID0+IHtcclxuICAgICAgdGhpcy50cmFuc2xhdGVPcHRpb25zKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RmJHcm91cCgpOiBGb3JtR3JvdXAgIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xEaXIuY29udHJvbD8ucGFyZW50IGFzIEZvcm1Hcm91cHx8IG5ldyBGb3JtR3JvdXAoe30pO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiXHJcblxyXG48bmctY29udGFpbmVyIFtmb3JtR3JvdXBdPVwiZ2V0RmJHcm91cCgpXCI+XHJcbiAgPHNvZi1jaGVja2JveC1ncm91cC1jb250cm9sXHJcbiAgbGFiZWw9XCJ7e2xhYmVsVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGUgfX1cIlxyXG4gIFtmb3JtQ29udHJvbE5hbWVdPVwiY29udHJvbERpci5uYW1lXCJcclxuICBbbGlzdF09XCJjaGVja09wdGlvbnNcIlxyXG4gIHRleHRQYXRoPVwidGV4dFwiXHJcbiAgdmFsdWVQYXRoPVwidmFsdWVcIlxyXG4gIFtub0xhYmVsXT1cIm5vTGFiZWxcIlxyXG4gID5cclxuICAgIFxyXG4gIDwvc29mLWNoZWNrYm94LWdyb3VwLWNvbnRyb2w+XHJcbjwvbmctY29udGFpbmVyPlxyXG4iXX0=