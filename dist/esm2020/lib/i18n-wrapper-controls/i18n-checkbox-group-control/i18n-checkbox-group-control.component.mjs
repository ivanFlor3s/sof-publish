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
I18nCheckboxGroupControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCheckboxGroupControlComponent, selector: "app-i18n-checkbox-group-control", inputs: { labelToTranslate: "labelToTranslate", listToTranslate: "listToTranslate" }, viewQueries: [{ propertyName: "control", first: true, predicate: CheckboxGroupMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-group-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"checkOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-checkbox-group-control>\r\n</ng-container>\r\n", components: [{ type: i3.CheckboxGroupMaterialControlComponent, selector: "sof-checkbox-group-control" }], directives: [{ type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCheckboxGroupControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-checkbox-group-control', template: "\r\n\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-group-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"checkOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-checkbox-group-control>\r\n</ng-container>\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sL2kxOG4tY2hlY2tib3gtZ3JvdXAtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tY2hlY2tib3gtZ3JvdXAtY29udHJvbC9pMThuLWNoZWNrYm94LWdyb3VwLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU90RCxNQUFNLE9BQU8saUNBQWtDLFNBQVEscUNBQXFDO0lBVzFGLFlBQW9DLFVBQXFCLEVBQzdDLGFBQTRCLEVBQy9CLGlCQUFtQztRQUUxQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7UUFKaUIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBUjVDLGlCQUFZLEdBQStCLEVBQUUsQ0FBQTtJQVc3QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQy9DLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUN4QixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBRSxHQUFHLEVBQUU7WUFDbEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBbUIsSUFBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs4SEEzQ1UsaUNBQWlDO2tIQUFqQyxpQ0FBaUMsc01BRWpDLHFDQUFxQyx1RUNYbEQsK1pBZ0JBOzJGRFBhLGlDQUFpQztrQkFKN0MsU0FBUzsrQkFDRSxpQ0FBaUM7OzBCQWM5QixJQUFJO3VHQVJqQixPQUFPO3NCQUROLFNBQVM7dUJBQUMscUNBQXFDO2dCQUt2QyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBRUcsZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBJbnB1dCwgU2VsZiwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoZWNrYm94R3JvdXBNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4bkNoZWNrYm94R3JvdXBDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgQ2hlY2tib3hHcm91cE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgXHJcbiAgQFZpZXdDaGlsZChDaGVja2JveEdyb3VwTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50KVxyXG4gIGNvbnRyb2whOiBDaGVja2JveEdyb3VwTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50O1xyXG5cclxuICBjaGVja09wdGlvbnM6IHt0ZXh0OnN0cmluZywgdmFsdWU6YW55fVtdID0gW11cclxuXHJcbiAgQElucHV0KCkgbGFiZWxUb1RyYW5zbGF0ZSE6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgbGlzdFRvVHJhbnNsYXRlITogYW55W10gXHJcblxyXG4gIGNvbnN0cnVjdG9yKEBTZWxmKCkgcHVibGljIG92ZXJyaWRlIGNvbnRyb2xEaXI6IE5nQ29udHJvbCxcclxuICAgIHByb3RlY3RlZCBwaXBlVHJhbnNsYXRlOiBUcmFuc2xhdGVQaXBlLFxyXG4gICAgcHVibGljIF9zcnZUcmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVTZXJ2aWNlXHJcbiAgKXtcclxuICAgIHN1cGVyKGNvbnRyb2xEaXIpXHJcbiAgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50cmFuc2xhdGVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVPcHRpb25zKCl7XHJcbiAgICB0aGlzLmNoZWNrT3B0aW9ucyA9IHRoaXMubGlzdFRvVHJhbnNsYXRlLm1hcCh4ID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZXh0OiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHRoaXMuZ2V0VGV4dCh4KSkgLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLmdldFZhbHVlKHgpXHJcbiAgICAgIH0gXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5lcnJvckNvbnRyb2wudHJhbnNsYXRlRnVuY2lvbiA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHBhcmFtKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudHJhbnNsYXRlT3B0aW9ucygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEZiR3JvdXAoKTogRm9ybUdyb3VwICB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sRGlyLmNvbnRyb2w/LnBhcmVudCBhcyBGb3JtR3JvdXB8fCBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIlxyXG5cclxuPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdldEZiR3JvdXAoKVwiPlxyXG4gIDxzb2YtY2hlY2tib3gtZ3JvdXAtY29udHJvbFxyXG4gIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xEaXIubmFtZVwiXHJcbiAgW2xpc3RdPVwiY2hlY2tPcHRpb25zXCJcclxuICB0ZXh0UGF0aD1cInRleHRcIlxyXG4gIHZhbHVlUGF0aD1cInZhbHVlXCJcclxuICBbbm9MYWJlbF09XCJub0xhYmVsXCJcclxuICBbc2lkZUxhYmVsXT1cInNpZGVMYWJlbFwiXHJcbiAgW3JlYWRPbmx5XT1cInJlYWRPbmx5XCJcclxuICA+XHJcbiAgICBcclxuICA8L3NvZi1jaGVja2JveC1ncm91cC1jb250cm9sPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19