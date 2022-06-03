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
import * as i0 from "@angular/core";
export class I18nWrapperModule {
}
I18nWrapperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18nWrapperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, declarations: [LangComponent,
        I18nTextControlComponent,
        I18nNumberControlComponent,
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
        I18nDocControlComponent], imports: [CommonModule,
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
        I18nDocControlComponent] });
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
                        I18nDocControlComponent
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
                        I18nDocControlComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi13cmFwcGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9pMThuLXdyYXBwZXItY29udHJvbHMvaTE4bi13cmFwcGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDNUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDL0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDbEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDNUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDL0csT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDakgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7O0FBdUR4RixNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBMUMxQixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLGlCQUFpQjtRQUNqQix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsOEJBQThCO1FBQzlCLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBQzVCLHdCQUF3QjtRQUN4Qix1QkFBdUIsYUF4QnZCLFlBQVk7UUFDWixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWUsYUF3QmYsYUFBYTtRQUNiLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLGlCQUFpQjtRQUNqQiw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLDhCQUE4QjtRQUM5Qix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLDRCQUE0QjtRQUM1Qix3QkFBd0I7UUFDeEIsdUJBQXVCOytHQUdkLGlCQUFpQixhQXBEakIsRUFFVixZQUNRO1lBQ1AsWUFBWTtZQUNaLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsZUFBZTtTQUNoQjsyRkE0Q1UsaUJBQWlCO2tCQXJEN0IsUUFBUTttQkFBQztvQkFDUixTQUFTLEVBQUUsRUFFVjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsZUFBZTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2Isd0JBQXdCO3dCQUN4QiwwQkFBMEI7d0JBQzFCLDRCQUE0Qjt3QkFDNUIsNkJBQTZCO3dCQUM3QixpQkFBaUI7d0JBQ2pCLDhCQUE4Qjt3QkFDOUIsNEJBQTRCO3dCQUM1QixpQkFBaUI7d0JBQ2pCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3dCQUMxQiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsOEJBQThCO3dCQUM5Qix3QkFBd0I7d0JBQ3hCLDhCQUE4Qjt3QkFDOUIsNEJBQTRCO3dCQUM1Qix3QkFBd0I7d0JBQ3hCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYix3QkFBd0I7d0JBQ3hCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1Qiw0QkFBNEI7d0JBQzVCLDZCQUE2Qjt3QkFDN0IsaUJBQWlCO3dCQUNqQiw4QkFBOEI7d0JBQzlCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3dCQUMxQiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsOEJBQThCO3dCQUM5Qix3QkFBd0I7d0JBQ3hCLDhCQUE4Qjt3QkFDOUIsNEJBQTRCO3dCQUM1Qix3QkFBd0I7d0JBQ3hCLHVCQUF1QjtxQkFDeEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9tb2R1bGUvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBMYW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYW5nL2xhbmcuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuXHJcbmltcG9ydCB7IEkxOG5UZXh0Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi10ZXh0LWNvbnRyb2wvaTE4bi10ZXh0LWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4bk51bWJlckNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tbnVtYmVyLWNvbnRyb2wvaTE4bi1udW1iZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuQ2hlY2tib3hDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLWNoZWNrYm94LWNvbnRyb2wvaTE4bi1jaGVja2JveC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5QYXNzd29yZENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tcGFzc3dvcmQtY29udHJvbC9pMThuLXBhc3N3b3JkLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4bkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tY2FyZC9pMThuLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4bkRlbnNlVGV4dENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tZGVuc2UtdGV4dC1jb250cm9sL2kxOG4tZGVuc2UtdGV4dC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5EYXRlUGlja2VyQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1kYXRlLXBpY2tlci1jb250cm9sL2kxOG4tZGF0ZS1waWNrZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuUGhvbmVDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLXBob25lLWNvbnRyb2wvaTE4bi1waG9uZS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5UZXh0QXJlYUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tdGV4dGFyZWEtY29udHJvbC9pMThuLXRleHRhcmVhLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4blNlbGVjdENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tc2VsZWN0LWNvbnRyb2wvaTE4bi1zZWxlY3QtY29udHJvbC5jb21wb25lbnQuJztcclxuaW1wb3J0IHsgSTE4blNlYXJjaEJveENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tc2VhcmNoLWJveC1jb250cm9sL2kxOG4tc2VhcmNoLWJveC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5BdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tYXV0b2NvbXBsZXRlLWNvbnRyb2wvaTE4bi1hdXRvY29tcGxldGUtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuRmlsZVVwbG9hZENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2kxOG4tZmlsZS11cGxvYWQtY29udHJvbC9pMThuLWZpbGUtdXBsb2FkLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSTE4blJhZGlvQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLXJhZGlvLWJ1dHRvbi9pMThuLXJhZGlvLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJMThuRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuL2kxOG4tZHluYW1pYy1mb3JtL2kxOG4tZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5UaW1lUGlja2VyQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi10aW1lci1waWNrZXItY29udHJvbC9pMThuLXRpbWVyLXBpY2tlci1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEkxOG5Eb2NDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9pMThuLWRvYy1jb250cm9sL2kxOG4tZG9jLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSwgXHJcbiAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICBNYXRHcmlkTGlzdE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMYW5nQ29tcG9uZW50LFxyXG4gICAgSTE4blRleHRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bk51bWJlckNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuQ2hlY2tib3hDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkRlbnNlVGV4dENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuQ2FyZENvbXBvbmVudCxcclxuICAgIEkxOG5EYXRlUGlja2VyQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5QYXNzd29yZENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuQ2FyZENvbXBvbmVudCxcclxuICAgIEkxOG5QaG9uZUNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuU2VsZWN0Q29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5TZWFyY2hCb3hDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkF1dG9jb21wbGV0ZUNvbXBvbmVudCxcclxuICAgIEkxOG5GaWxlVXBsb2FkQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5SYWRpb0J1dHRvbkNvbXBvbmVudCxcclxuICAgIEkxOG5UaW1lUGlja2VyQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5UZXh0QXJlYUNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuRHluYW1pY0Zvcm1Db21wb25lbnQsXHJcbiAgICBJMThuRG9jQ29udHJvbENvbXBvbmVudCAgICBcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRyYW5zbGF0ZVBpcGUsXHJcbiAgICBMYW5nQ29tcG9uZW50LFxyXG4gICAgSTE4blRleHRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bk51bWJlckNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuQ2hlY2tib3hDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4blBhc3N3b3JkQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5EZW5zZVRleHRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkNhcmRDb21wb25lbnQsXHJcbiAgICBJMThuRGF0ZVBpY2tlckNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuUGhvbmVDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4blNlbGVjdENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuU2VhcmNoQm94Q29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5BdXRvY29tcGxldGVDb21wb25lbnQsXHJcbiAgICBJMThuRmlsZVVwbG9hZENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuUmFkaW9CdXR0b25Db21wb25lbnQsXHJcbiAgICBJMThuVGltZVBpY2tlckNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJMThuVGV4dEFyZWFDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkR5bmFtaWNGb3JtQ29tcG9uZW50LFxyXG4gICAgSTE4bkRvY0NvbnRyb2xDb21wb25lbnRcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSTE4bldyYXBwZXJNb2R1bGUge31cclxuIl19