import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TextMaterialControlComponent } from './text-control/text-control-component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMaterialComponent } from './error/error.component';
import { TextAreaMaterialControlComponent } from './text-area-control/text-area-control-component';
import { NumberMaterialControlComponent } from './number-control/number-control-component';
import { CheckboxMaterialControlComponent } from './checkbox-control/checkbox-control-component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RadioButtonMaterialControlComponent } from './radio-button-control/radio-button-control-component';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SelectMaterialControlComponent } from './select-control/select-control-component';
import { AutocompleteMaterialControlComponent } from './autocomplete-control/autocomplete-control-component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePickerMaterialControlComponent } from './date-picker-control/date-picker-control-component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TimePickerMaterialControlComponent } from './time-picker-control/time-picker-control.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadMaterialControlComponent } from './file-upload-control/file-upload-control-component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { PhoneMaterialControlComponent } from './phone-control/phone-control.component';
import { PasswordMaterialControlComponent } from './password-control/password-control.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card-component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http'; // Es para el autocomplete cuando se carga desde un endpoint
import { SearchBoxMaterialControlComponent } from './search-box-control/search-box-control-component';
import { DenseTextMaterialControlComponent } from './dense-text-control/dense-text-control-component';
import { MatChipsModule } from '@angular/material/chips';
import { NgxMaskModule } from 'ngx-mask';
import { DocControlComponent } from './doc-control/doc-control.component';
import { IntegerInputDirective } from '../directives/Integer-input.directive';
import { CheckboxGroupMaterialControlComponent } from './checkbox-group-control/checkbox-group-control-component';
import { DateRangePickerMaterialControlComponent } from './date-range-picker-control/date-range-picker-control.component';
import { PrefixControlMaterialComponent } from './prefix-control/prefix-control.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class MaterialControlsModule {
}
MaterialControlsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaterialControlsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialControlsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaterialControlsModule, declarations: [TextMaterialControlComponent,
        DateRangePickerMaterialControlComponent,
        TextAreaMaterialControlComponent,
        NumberMaterialControlComponent,
        CheckboxMaterialControlComponent,
        RadioButtonMaterialControlComponent,
        SelectMaterialControlComponent,
        AutocompleteMaterialControlComponent,
        TimePickerMaterialControlComponent,
        DatePickerMaterialControlComponent,
        FileUploadMaterialControlComponent,
        ErrorMaterialComponent,
        PhoneMaterialControlComponent,
        PasswordMaterialControlComponent,
        CardComponent,
        SearchBoxMaterialControlComponent,
        DenseTextMaterialControlComponent,
        DocControlComponent,
        IntegerInputDirective,
        CheckboxGroupMaterialControlComponent,
        PrefixControlMaterialComponent], imports: [CommonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatSelectModule,
        MatAutocompleteModule,
        NgxMaterialTimepickerModule,
        MatDatepickerModule,
        MatButtonModule,
        MatLuxonDateModule,
        MaterialFileInputModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        HttpClientModule,
        MatIconModule,
        MatChipsModule, i1.NgxMaskModule, ReactiveFormsModule], exports: [TextMaterialControlComponent,
        TextAreaMaterialControlComponent,
        DateRangePickerMaterialControlComponent,
        NumberMaterialControlComponent,
        CheckboxMaterialControlComponent,
        RadioButtonMaterialControlComponent,
        SelectMaterialControlComponent,
        AutocompleteMaterialControlComponent,
        TimePickerMaterialControlComponent,
        DatePickerMaterialControlComponent,
        FileUploadMaterialControlComponent,
        PhoneMaterialControlComponent,
        PasswordMaterialControlComponent,
        CardComponent,
        SearchBoxMaterialControlComponent,
        DenseTextMaterialControlComponent,
        DocControlComponent,
        CheckboxGroupMaterialControlComponent,
        ErrorMaterialComponent,
        PrefixControlMaterialComponent] });
MaterialControlsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaterialControlsModule, providers: [
        {
            provide: MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'primary' }
        }
    ], imports: [[
            CommonModule,
            MatInputModule,
            MatFormFieldModule,
            FormsModule,
            MatCheckboxModule,
            MatRadioModule,
            MatDialogModule,
            MatSelectModule,
            MatAutocompleteModule,
            NgxMaterialTimepickerModule,
            MatDatepickerModule,
            MatButtonModule,
            MatLuxonDateModule,
            MaterialFileInputModule,
            MatIconModule,
            MatCardModule,
            MatGridListModule,
            HttpClientModule,
            MatIconModule,
            MatChipsModule,
            NgxMaskModule.forRoot(),
            ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaterialControlsModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        {
                            provide: MAT_RADIO_DEFAULT_OPTIONS,
                            useValue: { color: 'primary' }
                        }
                    ],
                    declarations: [
                        TextMaterialControlComponent,
                        DateRangePickerMaterialControlComponent,
                        TextAreaMaterialControlComponent,
                        NumberMaterialControlComponent,
                        CheckboxMaterialControlComponent,
                        RadioButtonMaterialControlComponent,
                        SelectMaterialControlComponent,
                        AutocompleteMaterialControlComponent,
                        TimePickerMaterialControlComponent,
                        DatePickerMaterialControlComponent,
                        FileUploadMaterialControlComponent,
                        ErrorMaterialComponent,
                        PhoneMaterialControlComponent,
                        PasswordMaterialControlComponent,
                        CardComponent,
                        SearchBoxMaterialControlComponent,
                        DenseTextMaterialControlComponent,
                        DocControlComponent,
                        IntegerInputDirective,
                        CheckboxGroupMaterialControlComponent,
                        PrefixControlMaterialComponent
                    ],
                    imports: [
                        CommonModule,
                        MatInputModule,
                        MatFormFieldModule,
                        FormsModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatDialogModule,
                        MatSelectModule,
                        MatAutocompleteModule,
                        NgxMaterialTimepickerModule,
                        MatDatepickerModule,
                        MatButtonModule,
                        MatLuxonDateModule,
                        MaterialFileInputModule,
                        MatIconModule,
                        MatCardModule,
                        MatGridListModule,
                        HttpClientModule,
                        MatIconModule,
                        MatChipsModule,
                        NgxMaskModule.forRoot(),
                        ReactiveFormsModule
                    ],
                    exports: [
                        TextMaterialControlComponent,
                        TextAreaMaterialControlComponent,
                        DateRangePickerMaterialControlComponent,
                        NumberMaterialControlComponent,
                        CheckboxMaterialControlComponent,
                        RadioButtonMaterialControlComponent,
                        SelectMaterialControlComponent,
                        AutocompleteMaterialControlComponent,
                        TimePickerMaterialControlComponent,
                        DatePickerMaterialControlComponent,
                        FileUploadMaterialControlComponent,
                        PhoneMaterialControlComponent,
                        PasswordMaterialControlComponent,
                        CardComponent,
                        SearchBoxMaterialControlComponent,
                        DenseTextMaterialControlComponent,
                        DocControlComponent,
                        CheckboxGroupMaterialControlComponent,
                        ErrorMaterialComponent,
                        PrefixControlMaterialComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtY29udHJvbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9tYXRlcmlhbC1jb250cm9scy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQ0FBb0MsRUFB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c0I7d0JBQ3RCLDZCQUE2Qjt3QkFDN0IsZ0NBQWdDO3dCQUNoQyxhQUFhO3dCQUNiLGlDQUFpQzt3QkFDakMsaUNBQWlDO3dCQUNqQyxtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIscUNBQXFDO3dCQUNyQyw4QkFBOEI7cUJBQy9CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQiwyQkFBMkI7d0JBQzNCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLHVCQUF1Qjt3QkFDdkIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3dCQUM1QixnQ0FBZ0M7d0JBQ2hDLHVDQUF1Qzt3QkFDdkMsOEJBQThCO3dCQUM5QixnQ0FBZ0M7d0JBQ2hDLG1DQUFtQzt3QkFDbkMsOEJBQThCO3dCQUM5QixvQ0FBb0M7d0JBQ3BDLGtDQUFrQzt3QkFDbEMsa0NBQWtDO3dCQUNsQyxrQ0FBa0M7d0JBQ2xDLDZCQUE2Qjt3QkFDN0IsZ0NBQWdDO3dCQUNoQyxhQUFhO3dCQUNiLGlDQUFpQzt3QkFDakMsaUNBQWlDO3dCQUNqQyxtQkFBbUI7d0JBQ25CLHFDQUFxQzt3QkFDckMsc0JBQXNCO3dCQUN0Qiw4QkFBOEI7cUJBQy9CO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IFRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3RleHQtY29udHJvbC90ZXh0LWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBFcnJvck1hdGVyaWFsQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0QXJlYU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1hcmVhLWNvbnRyb2wvdGV4dC1hcmVhLWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnVtYmVyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9udW1iZXItY29udHJvbC9udW1iZXItY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGVja2JveE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3gtY29udHJvbC9jaGVja2JveC1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8tYnV0dG9uLWNvbnRyb2wvcmFkaW8tYnV0dG9uLWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUsIE1BVF9SQURJT19ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IFNlbGVjdE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWNvbnRyb2wvc2VsZWN0LWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvY29tcGxldGUtY29udHJvbC9hdXRvY29tcGxldGUtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLWNvbnRyb2wvZGF0ZS1waWNrZXItY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcic7XHJcbmltcG9ydCB7IFRpbWVQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3RpbWUtcGlja2VyLWNvbnRyb2wvdGltZS1waWNrZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9maWxlLXVwbG9hZC1jb250cm9sL2ZpbGUtdXBsb2FkLWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0ZXJpYWxGaWxlSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dCc7XHJcbmltcG9ydCB7IE1hdEx1eG9uRGF0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLWx1eG9uLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBQaG9uZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vcGhvbmUtY29udHJvbC9waG9uZS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9wYXNzd29yZC1jb250cm9sL3Bhc3N3b3JkLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nXHJcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2FyZC9jYXJkLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEdyaWRMaXN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJzsgLy8gRXMgcGFyYSBlbCBhdXRvY29tcGxldGUgY3VhbmRvIHNlIGNhcmdhIGRlc2RlIHVuIGVuZHBvaW50XHJcbmltcG9ydCB7IFNlYXJjaEJveE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWJveC1jb250cm9sL3NlYXJjaC1ib3gtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEZW5zZVRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2RlbnNlLXRleHQtY29udHJvbC9kZW5zZS10ZXh0LWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xyXG5cclxuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gJ25neC1tYXNrJztcclxuaW1wb3J0IHsgRG9jQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZG9jLWNvbnRyb2wvZG9jLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW50ZWdlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9JbnRlZ2VyLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENoZWNrYm94R3JvdXBNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94LWdyb3VwLWNvbnRyb2wvY2hlY2tib3gtZ3JvdXAtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLWNvbnRyb2wvZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcmVmaXhDb250cm9sTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuL3ByZWZpeC1jb250cm9sL3ByZWZpeC1jb250cm9sLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczpbXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTUFUX1JBRElPX0RFRkFVTFRfT1BUSU9OUyxcclxuICAgIHVzZVZhbHVlOiB7IGNvbG9yOiAncHJpbWFyeScgfX1cclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVGV4dE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERhdGVSYW5nZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFRleHRBcmVhTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgTnVtYmVyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFNlbGVjdE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIEF1dG9jb21wbGV0ZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFRpbWVQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBEYXRlUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgRmlsZVVwbG9hZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIEVycm9yTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBQaG9uZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIFNlYXJjaEJveE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERlbnNlVGV4dE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERvY0NvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJbnRlZ2VySW5wdXREaXJlY3RpdmUsXHJcbiAgICBDaGVja2JveEdyb3VwTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUHJlZml4Q29udHJvbE1hdGVyaWFsQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXRSYWRpb01vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRMdXhvbkRhdGVNb2R1bGUsXHJcbiAgICBNYXRlcmlhbEZpbGVJbnB1dE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdENoaXBzTW9kdWxlLFxyXG4gICAgTmd4TWFza01vZHVsZS5mb3JSb290KCksXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUZXh0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgVGV4dEFyZWFNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBEYXRlUmFuZ2VQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBOdW1iZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBDaGVja2JveE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFJhZGlvQnV0dG9uTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgU2VsZWN0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgQXV0b2NvbXBsZXRlTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgVGltZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERhdGVQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBGaWxlVXBsb2FkTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUGhvbmVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgICBTZWFyY2hCb3hNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBEZW5zZVRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBEb2NDb250cm9sQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hHcm91cE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIEVycm9yTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBQcmVmaXhDb250cm9sTWF0ZXJpYWxDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbnRyb2xzTW9kdWxlIHsgfVxyXG4iXX0=