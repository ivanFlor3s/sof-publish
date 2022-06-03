import { Component, Inject, Self } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { I18nOptions } from '../../shared/models/options';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/core";
import * as i4 from "sof-ng-controls";
export class LangComponent extends I18nOptions {
    constructor(translate, controlDir, _adapter, _locale, pipeTranslate) {
        super(controlDir, pipeTranslate, translate);
        this.translate = translate;
        this.controlDir = controlDir;
        this._adapter = _adapter;
        this._locale = _locale;
        this.pipeTranslate = pipeTranslate;
        this.activedLang = 'es';
        translate.addLangs(['es', 'en']);
        translate.setDefaultLang(this.activedLang);
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/es|en/) ? browserLang : this.activedLang);
    }
    changeLang(lang) {
        this.activedLang = lang;
        this.translate.use(lang);
        //DatePicker
        this._locale = lang;
        this._adapter.setLocale(this._locale);
    }
}
LangComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LangComponent, deps: [{ token: i1.TranslateService }, { token: i2.NgControl, self: true }, { token: i3.DateAdapter }, { token: MAT_DATE_LOCALE }, { token: i1.TranslatePipe }], target: i0.ɵɵFactoryTarget.Component });
LangComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LangComponent, selector: "app-lang", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-select-control\r\n    #langSelect\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    textPath=\"option\"\r\n    valuePath=\"value\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    (change)=\"changeLang(langSelect.value)\"\r\n  >\r\n  </sof-select-control>\r\n</ng-container>", styles: [""], components: [{ type: i4.SelectMaterialControlComponent, selector: "sof-select-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LangComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-lang', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-select-control\r\n    #langSelect\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    textPath=\"option\"\r\n    valuePath=\"value\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    (change)=\"changeLang(langSelect.value)\"\r\n  >\r\n  </sof-select-control>\r\n</ng-container>", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: i2.NgControl, decorators: [{
                    type: Self
                }] }, { type: i3.DateAdapter }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }, { type: i1.TranslatePipe }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvY29tcG9uZW50cy9sYW5nL2xhbmcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2NvbXBvbmVudHMvbGFuZy9sYW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7O0FBTzFELE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBVztJQUk1QyxZQUNTLFNBQTJCLEVBQ1YsVUFBcUIsRUFDckMsUUFBMEIsRUFDRCxPQUFlLEVBQzdCLGFBQTRCO1FBRS9DLEtBQUssQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBRSxDQUFDO1FBTnRDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQ1YsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUNELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFQMUMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFXeEIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sV0FBVyxHQUFRLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwRCxTQUFTLENBQUMsR0FBRyxDQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBUztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUd6QixZQUFZO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OzBHQTVCVSxhQUFhLGtIQVFkLGVBQWU7OEZBUmQsYUFBYSx1RUNYMUIsK2FBWWU7MkZEREYsYUFBYTtrQkFMekIsU0FBUzsrQkFDRSxVQUFVOzswQkFVakIsSUFBSTs7MEJBRUosTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBJbmplY3QsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgSTE4bk9wdGlvbnMgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbGFuZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xhbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xhbmcuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExhbmdDb21wb25lbnQgZXh0ZW5kcyBJMThuT3B0aW9ucyB7XHJcblxyXG4gIHB1YmxpYyBhY3RpdmVkTGFuZyA9ICdlcyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBcclxuICAgIHB1YmxpYyB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXHJcbiAgICBAU2VsZigpIHB1YmxpYyBvdmVycmlkZSBjb250cm9sRGlyOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIF9hZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+LFxyXG4gICAgQEluamVjdChNQVRfREFURV9MT0NBTEUpIHByaXZhdGUgX2xvY2FsZTogc3RyaW5nLFxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHBpcGVUcmFuc2xhdGU6IFRyYW5zbGF0ZVBpcGUsXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjb250cm9sRGlyLCBwaXBlVHJhbnNsYXRlLCB0cmFuc2xhdGUgKTtcclxuXHJcbiAgICB0cmFuc2xhdGUuYWRkTGFuZ3MoWydlcycsICdlbiddKTtcclxuICAgIHRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZyh0aGlzLmFjdGl2ZWRMYW5nKTtcclxuXHJcbiAgICBjb25zdCBicm93c2VyTGFuZzogYW55ID0gdHJhbnNsYXRlLmdldEJyb3dzZXJMYW5nKCk7XHJcbiAgICB0cmFuc2xhdGUudXNlKCBicm93c2VyTGFuZy5tYXRjaCgvZXN8ZW4vKSA/IGJyb3dzZXJMYW5nIDogdGhpcy5hY3RpdmVkTGFuZyk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYW5nKGxhbmc6IGFueSl7XHJcbiAgICB0aGlzLmFjdGl2ZWRMYW5nID0gbGFuZztcclxuICAgIHRoaXMudHJhbnNsYXRlLnVzZShsYW5nKTtcclxuXHJcblxyXG4gICAgLy9EYXRlUGlja2VyXHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsYW5nO1xyXG4gICAgdGhpcy5fYWRhcHRlci5zZXRMb2NhbGUodGhpcy5fbG9jYWxlKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJnZXRGYkdyb3VwKClcIj5cclxuICA8c29mLXNlbGVjdC1jb250cm9sXHJcbiAgICAjbGFuZ1NlbGVjdFxyXG4gICAgbGFiZWw9XCJ7e2xhYmVsVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGUgfX1cIlxyXG4gICAgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyVG9UcmFuc2xhdGUgfCB0cmFuc2xhdGV9fVwiXHJcbiAgICB0ZXh0UGF0aD1cIm9wdGlvblwiXHJcbiAgICB2YWx1ZVBhdGg9XCJ2YWx1ZVwiXHJcbiAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xEaXIubmFtZVwiXHJcbiAgICBbbGlzdF09XCJsaXN0RmluYWxcIlxyXG4gICAgKGNoYW5nZSk9XCJjaGFuZ2VMYW5nKGxhbmdTZWxlY3QudmFsdWUpXCJcclxuICA+XHJcbiAgPC9zb2Ytc2VsZWN0LWNvbnRyb2w+XHJcbjwvbmctY29udGFpbmVyPiJdfQ==