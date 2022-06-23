import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TextMaterialControlComponent } from './text-control/text-control-component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
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
import * as i0 from "@angular/core";
import * as i1 from "ngx-mask";
export class MaterialControlsModule {
}
MaterialControlsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MaterialControlsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialControlsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MaterialControlsModule, declarations: [TextMaterialControlComponent,
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
        IntegerInputDirective], imports: [CommonModule,
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
        MatChipsModule, i1.NgxMaskModule], exports: [TextMaterialControlComponent,
        TextAreaMaterialControlComponent,
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
        DocControlComponent] });
MaterialControlsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MaterialControlsModule, providers: [
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
            NgxMaskModule.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: MaterialControlsModule, decorators: [{
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
                        IntegerInputDirective
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
                        NgxMaskModule.forRoot()
                    ],
                    exports: [
                        TextMaterialControlComponent,
                        TextAreaMaterialControlComponent,
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
                        DocControlComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtY29udHJvbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9tYXRlcmlhbC1jb250cm9scy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHVEQUF1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Qjt3QkFDbEIsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxhQUFhLENBQUMsT0FBTyxFQUFFO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3dCQUM1QixnQ0FBZ0M7d0JBQ2hDLDhCQUE4Qjt3QkFDOUIsZ0NBQWdDO3dCQUNoQyxtQ0FBbUM7d0JBQ25DLDhCQUE4Qjt3QkFDOUIsb0NBQW9DO3dCQUNwQyxrQ0FBa0M7d0JBQ2xDLGtDQUFrQzt3QkFDbEMsa0NBQWtDO3dCQUNsQyw2QkFBNkI7d0JBQzdCLGdDQUFnQzt3QkFDaEMsYUFBYTt3QkFDYixpQ0FBaUM7d0JBQ2pDLGlDQUFpQzt3QkFDakMsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBUZXh0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LWNvbnRyb2wvdGV4dC1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRXJyb3JNYXRlcmlhbENvbXBvbmVudCB9IGZyb20gJy4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGV4dEFyZWFNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3RleHQtYXJlYS1jb250cm9sL3RleHQtYXJlYS1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE51bWJlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vbnVtYmVyLWNvbnRyb2wvbnVtYmVyLWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NoZWNrYm94LWNvbnRyb2wvY2hlY2tib3gtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25NYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3JhZGlvLWJ1dHRvbi1jb250cm9sL3JhZGlvLWJ1dHRvbi1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlLCBNQVRfUkFESU9fREVGQVVMVF9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBTZWxlY3RNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1jb250cm9sL3NlbGVjdC1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWNvbnRyb2wvYXV0b2NvbXBsZXRlLWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXBpY2tlci1jb250cm9sL2RhdGUtcGlja2VyLWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgeyBUaW1lUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lLXBpY2tlci1jb250cm9sL3RpbWUtcGlja2VyLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZmlsZS11cGxvYWQtY29udHJvbC9maWxlLXVwbG9hZC1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsRmlsZUlucHV0TW9kdWxlIH0gZnJvbSAnbmd4LW1hdGVyaWFsLWZpbGUtaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXRMdXhvbkRhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1sdXhvbi1hZGFwdGVyJztcclxuaW1wb3J0IHsgUGhvbmVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3Bob25lLWNvbnRyb2wvcGhvbmUtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYXNzd29yZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQtY29udHJvbC9wYXNzd29yZC1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJ1xyXG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XHJcbmltcG9ydCB7IENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQvY2FyZC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRHcmlkTGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7IC8vIEVzIHBhcmEgZWwgYXV0b2NvbXBsZXRlIGN1YW5kbyBzZSBjYXJnYSBkZXNkZSB1biBlbmRwb2ludFxyXG5pbXBvcnQgeyBTZWFyY2hCb3hNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1ib3gtY29udHJvbC9zZWFyY2gtYm94LWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGVuc2VUZXh0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9kZW5zZS10ZXh0LWNvbnRyb2wvZGVuc2UtdGV4dC1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcclxuXHJcbmltcG9ydCB7IE5neE1hc2tNb2R1bGUgfSBmcm9tICduZ3gtbWFzayc7XHJcbmltcG9ydCB7IERvY0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2RvYy1jb250cm9sL2RvYy1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEludGVnZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvSW50ZWdlci1pbnB1dC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBwcm92aWRlcnM6W1xyXG4gIHtcclxuICAgIHByb3ZpZGU6IE1BVF9SQURJT19ERUZBVUxUX09QVElPTlMsXHJcbiAgICB1c2VWYWx1ZTogeyBjb2xvcjogJ3ByaW1hcnknIH19XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBUZXh0QXJlYU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIE51bWJlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIENoZWNrYm94TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUmFkaW9CdXR0b25NYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBTZWxlY3RNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBBdXRvY29tcGxldGVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBUaW1lUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgRGF0ZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIEZpbGVVcGxvYWRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBFcnJvck1hdGVyaWFsQ29tcG9uZW50LFxyXG4gICAgUGhvbmVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIENhcmRDb21wb25lbnQsXHJcbiAgICBTZWFyY2hCb3hNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBEZW5zZVRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBEb2NDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSW50ZWdlcklucHV0RGlyZWN0aXZlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXHJcbiAgICBNYXRSYWRpb01vZHVsZSxcclxuICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICBNYXRMdXhvbkRhdGVNb2R1bGUsXHJcbiAgICBNYXRlcmlhbEZpbGVJbnB1dE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIE1hdENoaXBzTW9kdWxlLFxyXG4gICAgTmd4TWFza01vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFRleHRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBUZXh0QXJlYU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIE51bWJlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIENoZWNrYm94TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUmFkaW9CdXR0b25NYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBTZWxlY3RNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBBdXRvY29tcGxldGVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBUaW1lUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgRGF0ZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIEZpbGVVcGxvYWRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBQaG9uZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIFNlYXJjaEJveE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERlbnNlVGV4dE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERvY0NvbnRyb2xDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbnRyb2xzTW9kdWxlIHsgfVxyXG4iXX0=