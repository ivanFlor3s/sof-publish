import { Component, ViewChild } from '@angular/core';
import { AutocompleteMaterialControlComponent } from 'sof-ng-controls';
import { I18nOptions } from '../../shared/models/options';
import * as i0 from "@angular/core";
import * as i1 from "sof-ng-controls";
import * as i2 from "@angular/forms";
import * as i3 from "@ngx-translate/core";
export class I18nAutocompleteComponent extends I18nOptions {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
        this._srvTranslatePipe.onLangChange.subscribe(() => {
            this.showOptions();
        });
    }
}
I18nAutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nAutocompleteComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nAutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nAutocompleteComponent, selector: "app-i18n-autocomplete-control", viewQueries: [{ propertyName: "control", first: true, predicate: AutocompleteMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-autocomplete-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [textPath]=\"textPath\"\r\n    [valuePath]=\"valuePath\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n  >\r\n  </sof-autocomplete-control>\r\n</ng-container>\r\n", components: [{ type: i1.AutocompleteMaterialControlComponent, selector: "sof-autocomplete-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i3.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-autocomplete-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-autocomplete-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [textPath]=\"textPath\"\r\n    [valuePath]=\"valuePath\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n  >\r\n  </sof-autocomplete-control>\r\n</ng-container>\r\n" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [AutocompleteMaterialControlComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1hdXRvY29tcGxldGUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tYXV0b2NvbXBsZXRlLWNvbnRyb2wvaTE4bi1hdXRvY29tcGxldGUtY29udHJvbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9saWIvaTE4bi13cmFwcGVyLWNvbnRyb2xzL2kxOG4tYXV0b2NvbXBsZXRlLWNvbnRyb2wvaTE4bi1hdXRvY29tcGxldGUtY29udHJvbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7OztBQU0xRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsV0FBVztJQUt4RCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM3RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFFLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztzSEFiVSx5QkFBeUI7MEdBQXpCLHlCQUF5Qiw4R0FFekIsb0NBQW9DLHVFQ1ZqRCxvZUFjQTsyRkROYSx5QkFBeUI7a0JBSnJDLFNBQVM7K0JBQ0UsK0JBQStCOzhCQU16QyxPQUFPO3NCQUROLFNBQVM7dUJBQUMsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnc29mLW5nLWNvbnRyb2xzJztcclxuaW1wb3J0IHsgSTE4bk9wdGlvbnMgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL29wdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaTE4bi1hdXRvY29tcGxldGUtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2kxOG4tYXV0b2NvbXBsZXRlLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuQXV0b2NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgSTE4bk9wdGlvbnMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBcclxuICBAVmlld0NoaWxkKEF1dG9jb21wbGV0ZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudClcclxuICBjb250cm9sITogQXV0b2NvbXBsZXRlTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50O1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2wuZXJyb3JDb250cm9sLnRyYW5zbGF0ZUZ1bmNpb24gPSAocGFyYW06IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5waXBlVHJhbnNsYXRlLnRyYW5zZm9ybShwYXJhbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUub25MYW5nQ2hhbmdlLnN1YnNjcmliZSggKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dPcHRpb25zKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW2Zvcm1Hcm91cF09XCJnZXRGYkdyb3VwKClcIj5cclxuICA8c29mLWF1dG9jb21wbGV0ZS1jb250cm9sXHJcbiAgICBsYWJlbD1cInt7bGFiZWxUb1RyYW5zbGF0ZSB8IHRyYW5zbGF0ZSB9fVwiXHJcbiAgICBwbGFjZWhvbGRlcj1cInt7cGxhY2Vob2xkZXJUb1RyYW5zbGF0ZSB8IHRyYW5zbGF0ZX19XCJcclxuICAgIFt0ZXh0UGF0aF09XCJ0ZXh0UGF0aFwiXHJcbiAgICBbdmFsdWVQYXRoXT1cInZhbHVlUGF0aFwiXHJcbiAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbnRyb2xEaXIubmFtZVwiXHJcbiAgICBbbGlzdF09XCJsaXN0RmluYWxcIlxyXG4gICAgW21heExlbmd0aF09XCJtYXhMZW5ndGhcIlxyXG4gICAgW25vTGFiZWxdPVwibm9MYWJlbFwiXHJcbiAgICBbc2lkZUxhYmVsXT1cInNpZGVMYWJlbFwiXHJcbiAgPlxyXG4gIDwvc29mLWF1dG9jb21wbGV0ZS1jb250cm9sPlxyXG48L25nLWNvbnRhaW5lcj5cclxuIl19