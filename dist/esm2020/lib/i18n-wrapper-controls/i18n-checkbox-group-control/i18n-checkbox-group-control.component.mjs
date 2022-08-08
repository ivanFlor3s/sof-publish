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
    ngOnChanges(changes) {
        if (changes && this.listToTranslate)
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
I18nCheckboxGroupControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCheckboxGroupControlComponent, selector: "app-i18n-checkbox-group-control", inputs: { labelToTranslate: "labelToTranslate", listToTranslate: "listToTranslate" }, viewQueries: [{ propertyName: "control", first: true, predicate: CheckboxGroupMaterialControlComponent, descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "\r\n\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-group-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"checkOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-checkbox-group-control>\r\n</ng-container>\r\n", components: [{ type: i3.CheckboxGroupMaterialControlComponent, selector: "sof-checkbox-group-control" }], directives: [{ type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2.TranslatePipe } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sL2kxOG4tY2hlY2tib3gtZ3JvdXAtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tY2hlY2tib3gtZ3JvdXAtY29udHJvbC9pMThuLWNoZWNrYm94LWdyb3VwLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBbUQsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQU90RCxNQUFNLE9BQU8saUNBQWtDLFNBQVEscUNBQXFDO0lBVzFGLFlBQW9DLFVBQXFCLEVBQzdDLGFBQTRCLEVBQy9CLGlCQUFtQztRQUUxQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUE7UUFKaUIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBUjVDLGlCQUFZLEdBQStCLEVBQUUsQ0FBQTtJQVc3QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxPQUFPLElBQUksSUFBSSxDQUFDLGVBQWU7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMvQyxPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDeEIsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUUsR0FBRyxFQUFFO1lBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQW1CLElBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7OEhBL0NVLGlDQUFpQztrSEFBakMsaUNBQWlDLHNNQUVqQyxxQ0FBcUMsNEZDWGxELCtaQWdCQTsyRkRQYSxpQ0FBaUM7a0JBSjdDLFNBQVM7K0JBQ0UsaUNBQWlDOzswQkFjOUIsSUFBSTt1R0FSakIsT0FBTztzQkFETixTQUFTO3VCQUFDLHFDQUFxQztnQkFLdkMsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUVHLGVBQWU7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQsIFNlbGYsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENoZWNrYm94R3JvdXBNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4bkNoZWNrYm94R3JvdXBDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgQ2hlY2tib3hHcm91cE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuICBcclxuICBAVmlld0NoaWxkKENoZWNrYm94R3JvdXBNYXRlcmlhbENvbnRyb2xDb21wb25lbnQpXHJcbiAgY29udHJvbCE6IENoZWNrYm94R3JvdXBNYXRlcmlhbENvbnRyb2xDb21wb25lbnQ7XHJcblxyXG4gIGNoZWNrT3B0aW9uczoge3RleHQ6c3RyaW5nLCB2YWx1ZTphbnl9W10gPSBbXVxyXG5cclxuICBASW5wdXQoKSBsYWJlbFRvVHJhbnNsYXRlITogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBsaXN0VG9UcmFuc2xhdGUhOiBhbnlbXSBcclxuXHJcbiAgY29uc3RydWN0b3IoQFNlbGYoKSBwdWJsaWMgb3ZlcnJpZGUgY29udHJvbERpcjogTmdDb250cm9sLFxyXG4gICAgcHJvdGVjdGVkIHBpcGVUcmFuc2xhdGU6IFRyYW5zbGF0ZVBpcGUsXHJcbiAgICBwdWJsaWMgX3NydlRyYW5zbGF0ZVBpcGU6IFRyYW5zbGF0ZVNlcnZpY2VcclxuICApe1xyXG4gICAgc3VwZXIoY29udHJvbERpcilcclxuICB9XHJcbiAgXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyYW5zbGF0ZU9wdGlvbnMoKTtcclxuICB9XHJcbiAgXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYoY2hhbmdlcyAmJiB0aGlzLmxpc3RUb1RyYW5zbGF0ZSkgdGhpcy50cmFuc2xhdGVPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVPcHRpb25zKCl7XHJcbiAgICB0aGlzLmNoZWNrT3B0aW9ucyA9IHRoaXMubGlzdFRvVHJhbnNsYXRlLm1hcCh4ID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZXh0OiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHRoaXMuZ2V0VGV4dCh4KSkgLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLmdldFZhbHVlKHgpXHJcbiAgICAgIH0gXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbC5lcnJvckNvbnRyb2wudHJhbnNsYXRlRnVuY2lvbiA9IChwYXJhbTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLnBpcGVUcmFuc2xhdGUudHJhbnNmb3JtKHBhcmFtKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fc3J2VHJhbnNsYXRlUGlwZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudHJhbnNsYXRlT3B0aW9ucygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEZiR3JvdXAoKTogRm9ybUdyb3VwICB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sRGlyLmNvbnRyb2w/LnBhcmVudCBhcyBGb3JtR3JvdXB8fCBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIlxyXG5cclxuPG5nLWNvbnRhaW5lciBbZm9ybUdyb3VwXT1cImdldEZiR3JvdXAoKVwiPlxyXG4gIDxzb2YtY2hlY2tib3gtZ3JvdXAtY29udHJvbFxyXG4gIGxhYmVsPVwie3tsYWJlbFRvVHJhbnNsYXRlIHwgdHJhbnNsYXRlIH19XCJcclxuICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xEaXIubmFtZVwiXHJcbiAgW2xpc3RdPVwiY2hlY2tPcHRpb25zXCJcclxuICB0ZXh0UGF0aD1cInRleHRcIlxyXG4gIHZhbHVlUGF0aD1cInZhbHVlXCJcclxuICBbbm9MYWJlbF09XCJub0xhYmVsXCJcclxuICBbc2lkZUxhYmVsXT1cInNpZGVMYWJlbFwiXHJcbiAgW3JlYWRPbmx5XT1cInJlYWRPbmx5XCJcclxuICA+XHJcbiAgICBcclxuICA8L3NvZi1jaGVja2JveC1ncm91cC1jb250cm9sPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19