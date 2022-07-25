import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { SharedModule } from '../shared/module/shared.module';
import { LangComponent } from '../components/lang/lang.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { I18nTextControlComponent } from './i18n-text-control/i18n-text-control.component';
import { I18nNumberControlComponent } from './i18n-number-control/i18n-number-control.component';
import { I18nCheckboxControlComponent } from './i18n-checkbox-control/i18n-checkbox-control.component';
import { I18nPasswordControlComponent } from './i18n-password-control/i18n-password-control.component';
import { I18nCardComponent } from './i18n-card/i18n-card.component';
import { I18nDenseTextControlComponent } from './i18n-dense-text-control/i18n-dense-text-control.component';
import { I18nDatePickerControlComponent } from './i18n-date-picker-control/i18n-date-picker-control.component';
import { I18nPhoneControlComponent } from './i18n-phone-control/i18n-phone-control.component';
import { I18nTextAreaControlComponent } from './i18n-textarea-control/i18n-textarea-control.component';
import { I18nSelectControlComponent } from './i18n-select-control/i18n-select-control.component.';
import { I18nSearchBoxControlComponent } from './i18n-search-box-control/i18n-search-box-control.component';
import { I18nAutocompleteComponent } from './i18n-autocomplete-control/i18n-autocomplete-control.component';
import { I18nFileUploadControlComponent } from './i18n-file-upload-control/i18n-file-upload-control.component';
import { I18nRadioButtonComponent } from './i18n-radio-button/i18n-radio-button.component';
import { I18nDynamicFormComponent } from './i18n-dynamic-form/i18n-dynamic-form.component';
import { I18nTimePickerControlComponent } from './i18n-timer-picker-control/i18n-timer-picker-control.component';
import { I18nDocControlComponent } from './i18n-doc-control/i18n-doc-control.component';
import { I18nCheckboxGroupControlComponent } from './i18n-checkbox-group-control/i18n-checkbox-group-control.component';
import { I18nDateRangePickerControlComponent } from './i18n-date-range-picker-control/i18n-date-picker-control.component';
import { I18nPrefixControlComponent } from './i18n-prefix-control/i18n-prefix-control.component';
import * as i0 from "@angular/core";
export class I18nWrapperModule {
}
I18nWrapperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18nWrapperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, declarations: [LangComponent,
        I18nTextControlComponent,
        I18nNumberControlComponent,
        I18nPrefixControlComponent,
        I18nCheckboxControlComponent,
        I18nDenseTextControlComponent,
        I18nCardComponent,
        I18nDatePickerControlComponent,
        I18nPasswordControlComponent,
        I18nCardComponent,
        I18nPhoneControlComponent,
        I18nSelectControlComponent,
        I18nSearchBoxControlComponent,
        I18nAutocompleteComponent,
        I18nFileUploadControlComponent,
        I18nRadioButtonComponent,
        I18nTimePickerControlComponent,
        I18nTextAreaControlComponent,
        I18nDynamicFormComponent,
        I18nDocControlComponent,
        I18nCheckboxGroupControlComponent,
        I18nDateRangePickerControlComponent], imports: [CommonModule,
        SharedModule,
        MatGridListModule,
        MatButtonModule], exports: [TranslatePipe,
        LangComponent,
        I18nTextControlComponent,
        I18nNumberControlComponent,
        I18nCheckboxControlComponent,
        I18nPasswordControlComponent,
        I18nDenseTextControlComponent,
        I18nCardComponent,
        I18nDatePickerControlComponent,
        I18nPhoneControlComponent,
        I18nSelectControlComponent,
        I18nSearchBoxControlComponent,
        I18nAutocompleteComponent,
        I18nFileUploadControlComponent,
        I18nRadioButtonComponent,
        I18nTimePickerControlComponent,
        I18nTextAreaControlComponent,
        I18nDynamicFormComponent,
        I18nDocControlComponent,
        I18nCheckboxGroupControlComponent,
        I18nDateRangePickerControlComponent,
        I18nPrefixControlComponent] });
I18nWrapperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, providers: [], imports: [[
            CommonModule,
            SharedModule,
            MatGridListModule,
            MatButtonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [],
                    imports: [
                        CommonModule,
                        SharedModule,
                        MatGridListModule,
                        MatButtonModule
                    ],
                    declarations: [
                        LangComponent,
                        I18nTextControlComponent,
                        I18nNumberControlComponent,
                        I18nPrefixControlComponent,
                        I18nCheckboxControlComponent,
                        I18nDenseTextControlComponent,
                        I18nCardComponent,
                        I18nDatePickerControlComponent,
                        I18nPasswordControlComponent,
                        I18nCardComponent,
                        I18nPhoneControlComponent,
                        I18nSelectControlComponent,
                        I18nSearchBoxControlComponent,
                        I18nAutocompleteComponent,
                        I18nFileUploadControlComponent,
                        I18nRadioButtonComponent,
                        I18nTimePickerControlComponent,
                        I18nTextAreaControlComponent,
                        I18nDynamicFormComponent,
                        I18nDocControlComponent,
                        I18nCheckboxGroupControlComponent,
                        I18nDateRangePickerControlComponent
                    ],
                    exports: [
                        TranslatePipe,
                        LangComponent,
                        I18nTextControlComponent,
                        I18nNumberControlComponent,
                        I18nCheckboxControlComponent,
                        I18nPasswordControlComponent,
                        I18nDenseTextControlComponent,
                        I18nCardComponent,
                        I18nDatePickerControlComponent,
                        I18nPhoneControlComponent,
                        I18nSelectControlComponent,
                        I18nSearchBoxControlComponent,
                        I18nAutocompleteComponent,
                        I18nFileUploadControlComponent,
                        I18nRadioButtonComponent,
                        I18nTimePickerControlComponent,
                        I18nTextAreaControlComponent,
                        I18nDynamicFormComponent,
                        I18nDocControlComponent,
                        I18nCheckboxGroupControlComponent,
                        I18nDateRangePickerControlComponent,
                        I18nPrefixControlComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi13cmFwcGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi13cmFwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDNUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDL0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcs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QUFpQjt3QkFDakIsOEJBQThCO3dCQUM5Qix5QkFBeUI7d0JBQ3pCLDBCQUEwQjt3QkFDMUIsNkJBQTZCO3dCQUM3Qix5QkFBeUI7d0JBQ3pCLDhCQUE4Qjt3QkFDOUIsd0JBQXdCO3dCQUN4Qiw4QkFBOEI7d0JBQzlCLDRCQUE0Qjt3QkFDNUIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLGlDQUFpQzt3QkFDakMsbUNBQW1DO3dCQUNuQywwQkFBMEI7cUJBQzNCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvbW9kdWxlL3NoYXJlZC5tb2R1bGUnO1xyXG5cclxuaW1wb3J0IHsgTGFuZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZy9sYW5nLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBNYXRHcmlkTGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBJMThuVGV4dENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tdGV4dC1jb250cm9sL2kxOG4tdGV4dC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5OdW1iZXJDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLW51bWJlci1jb250cm9sL2kxOG4tbnVtYmVyLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4bkNoZWNrYm94Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1jaGVja2JveC1jb250cm9sL2kxOG4tY2hlY2tib3gtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuUGFzc3dvcmRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLXBhc3N3b3JkLWNvbnRyb2wvaTE4bi1wYXNzd29yZC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5DYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLWNhcmQvaTE4bi1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5EZW5zZVRleHRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLWRlbnNlLXRleHQtY29udHJvbC9pMThuLWRlbnNlLXRleHQtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuRGF0ZVBpY2tlckNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tZGF0ZS1waWNrZXItY29udHJvbC9pMThuLWRhdGUtcGlja2VyLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4blBob25lQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1waG9uZS1jb250cm9sL2kxOG4tcGhvbmUtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuVGV4dEFyZWFDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLXRleHRhcmVhLWNvbnRyb2wvaTE4bi10ZXh0YXJlYS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5TZWxlY3RDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLXNlbGVjdC1jb250cm9sL2kxOG4tc2VsZWN0LWNvbnRyb2wuY29tcG9uZW50Lic7XHJcbmltcG9ydCB7IEkxOG5TZWFyY2hCb3hDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLXNlYXJjaC1ib3gtY29udHJvbC9pMThuLXNlYXJjaC1ib3gtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuQXV0b2NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLWF1dG9jb21wbGV0ZS1jb250cm9sL2kxOG4tYXV0b2NvbXBsZXRlLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4bkZpbGVVcGxvYWRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLWZpbGUtdXBsb2FkLWNvbnRyb2wvaTE4bi1maWxlLXVwbG9hZC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5SYWRpb0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1yYWRpby1idXR0b24vaTE4bi1yYWRpby1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4bkR5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLWR5bmFtaWMtZm9ybS9pMThuLWR5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuVGltZVBpY2tlckNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tdGltZXItcGlja2VyLWNvbnRyb2wvaTE4bi10aW1lci1waWNrZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuRG9jQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1kb2MtY29udHJvbC9pMThuLWRvYy1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5DaGVja2JveEdyb3VwQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1jaGVja2JveC1ncm91cC1jb250cm9sL2kxOG4tY2hlY2tib3gtZ3JvdXAtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuRGF0ZVJhbmdlUGlja2VyQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1kYXRlLXJhbmdlLXBpY2tlci1jb250cm9sL2kxOG4tZGF0ZS1waWNrZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuUHJlZml4Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1wcmVmaXgtY29udHJvbC9pMThuLXByZWZpeC1jb250cm9sLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsIFxyXG4gICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTGFuZ0NvbXBvbmVudCxcclxuICAgIEkxOG5UZXh0Q29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5OdW1iZXJDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4blByZWZpeENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuQ2hlY2tib3hDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkRlbnNlVGV4dENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuQ2FyZENvbXBvbmVudCxcclxuICAgIEkxOG5EYXRlUGlja2VyQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5QYXNzd29yZENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuQ2FyZENvbXBvbmVudCxcclxuICAgIEkxOG5QaG9uZUNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuU2VsZWN0Q29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5TZWFyY2hCb3hDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkF1dG9jb21wbGV0ZUNvbXBvbmVudCxcclxuICAgIEkxOG5GaWxlVXBsb2FkQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5SYWRpb0J1dHRvbkNvbXBvbmVudCxcclxuICAgIEkxOG5UaW1lUGlja2VyQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5UZXh0QXJlYUNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuRHluYW1pY0Zvcm1Db21wb25lbnQsXHJcbiAgICBJMThuRG9jQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5DaGVja2JveEdyb3VwQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5EYXRlUmFuZ2VQaWNrZXJDb250cm9sQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUcmFuc2xhdGVQaXBlLFxyXG4gICAgTGFuZ0NvbXBvbmVudCxcclxuICAgIEkxOG5UZXh0Q29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5OdW1iZXJDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkNoZWNrYm94Q29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5QYXNzd29yZENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuRGVuc2VUZXh0Q29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5DYXJkQ29tcG9uZW50LFxyXG4gICAgSTE4bkRhdGVQaWNrZXJDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4blBob25lQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5TZWxlY3RDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4blNlYXJjaEJveENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuQXV0b2NvbXBsZXRlQ29tcG9uZW50LFxyXG4gICAgSTE4bkZpbGVVcGxvYWRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4blJhZGlvQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgSTE4blRpbWVQaWNrZXJDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4blRleHRBcmVhQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5EeW5hbWljRm9ybUNvbXBvbmVudCxcclxuICAgIEkxOG5Eb2NDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkNoZWNrYm94R3JvdXBDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkRhdGVSYW5nZVBpY2tlckNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuUHJlZml4Q29udHJvbENvbXBvbmVudFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJMThuV3JhcHBlck1vZHVsZSB7fVxyXG4iXX0=