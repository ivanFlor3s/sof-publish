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
        CheckboxGroupMaterialControlComponent], imports: [CommonModule,
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
        ErrorMaterialComponent] });
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtY29udHJvbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9tYXRlcmlhbC1jb250cm9scy9tYXRlcmlhbC1jb250cm9scy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQ0FBb0MsRUFB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QUNqQyxtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIscUNBQXFDO3FCQUN0QztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsMkJBQTJCO3dCQUMzQixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDRCQUE0Qjt3QkFDNUIsZ0NBQWdDO3dCQUNoQyx1Q0FBdUM7d0JBQ3ZDLDhCQUE4Qjt3QkFDOUIsZ0NBQWdDO3dCQUNoQyxtQ0FBbUM7d0JBQ25DLDhCQUE4Qjt3QkFDOUIsb0NBQW9DO3dCQUNwQyxrQ0FBa0M7d0JBQ2xDLGtDQUFrQzt3QkFDbEMsa0NBQWtDO3dCQUNsQyw2QkFBNkI7d0JBQzdCLGdDQUFnQzt3QkFDaEMsYUFBYTt3QkFDYixpQ0FBaUM7d0JBQ2pDLGlDQUFpQzt3QkFDakMsbUJBQW1CO3dCQUNuQixxQ0FBcUM7d0JBQ3JDLHNCQUFzQjtxQkFDdkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgVGV4dE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1jb250cm9sL3RleHQtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEVycm9yTWF0ZXJpYWxDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRleHRBcmVhTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi90ZXh0LWFyZWEtY29udHJvbC90ZXh0LWFyZWEtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOdW1iZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL251bWJlci1jb250cm9sL251bWJlci1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoZWNrYm94TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jaGVja2JveC1jb250cm9sL2NoZWNrYm94LWNvbnRyb2wtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IFJhZGlvQnV0dG9uTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby1idXR0b24tY29udHJvbC9yYWRpby1idXR0b24tY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSwgTUFUX1JBRElPX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHsgU2VsZWN0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtY29udHJvbC9zZWxlY3QtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGVNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1jb250cm9sL2F1dG9jb21wbGV0ZS1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXItY29udHJvbC9kYXRlLXBpY2tlci1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1tYXRlcmlhbC10aW1lcGlja2VyJztcclxuaW1wb3J0IHsgVGltZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdGltZS1waWNrZXItY29udHJvbC90aW1lLXBpY2tlci1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtdXBsb2FkLWNvbnRyb2wvZmlsZS11cGxvYWQtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRlcmlhbEZpbGVJbnB1dE1vZHVsZSB9IGZyb20gJ25neC1tYXRlcmlhbC1maWxlLWlucHV0JztcclxuaW1wb3J0IHsgTWF0THV4b25EYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbHV4b24tYWRhcHRlcic7XHJcbmltcG9ydCB7IFBob25lTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9waG9uZS1jb250cm9sL3Bob25lLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFzc3dvcmRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3Bhc3N3b3JkLWNvbnRyb2wvcGFzc3dvcmQtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbidcclxuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xyXG5pbXBvcnQgeyBDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJkL2NhcmQtY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0R3JpZExpc3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnOyAvLyBFcyBwYXJhIGVsIGF1dG9jb21wbGV0ZSBjdWFuZG8gc2UgY2FyZ2EgZGVzZGUgdW4gZW5kcG9pbnRcclxuaW1wb3J0IHsgU2VhcmNoQm94TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtYm94LWNvbnRyb2wvc2VhcmNoLWJveC1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERlbnNlVGV4dE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZGVuc2UtdGV4dC1jb250cm9sL2RlbnNlLXRleHQtY29udHJvbC1jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcblxyXG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnbmd4LW1hc2snO1xyXG5pbXBvcnQgeyBEb2NDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9kb2MtY29udHJvbC9kb2MtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbnRlZ2VySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL0ludGVnZXItaW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ2hlY2tib3hHcm91cE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tib3gtZ3JvdXAtY29udHJvbC9jaGVja2JveC1ncm91cC1jb250cm9sLWNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXItY29udHJvbC9kYXRlLXJhbmdlLXBpY2tlci1jb250cm9sLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIHByb3ZpZGVyczpbXHJcbiAge1xyXG4gICAgcHJvdmlkZTogTUFUX1JBRElPX0RFRkFVTFRfT1BUSU9OUyxcclxuICAgIHVzZVZhbHVlOiB7IGNvbG9yOiAncHJpbWFyeScgfX1cclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVGV4dE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERhdGVSYW5nZVBpY2tlck1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFRleHRBcmVhTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgTnVtYmVyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFNlbGVjdE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIEF1dG9jb21wbGV0ZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFRpbWVQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBEYXRlUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgRmlsZVVwbG9hZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIEVycm9yTWF0ZXJpYWxDb21wb25lbnQsXHJcbiAgICBQaG9uZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgQ2FyZENvbXBvbmVudCxcclxuICAgIFNlYXJjaEJveE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERlbnNlVGV4dE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIERvY0NvbnRyb2xDb21wb25lbnQsXHJcbiAgICBJbnRlZ2VySW5wdXREaXJlY3RpdmUsXHJcbiAgICBDaGVja2JveEdyb3VwTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0UmFkaW9Nb2R1bGUsXHJcbiAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICBNYXRTZWxlY3RNb2R1bGUsXHJcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXHJcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUsXHJcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgTWF0THV4b25EYXRlTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxGaWxlSW5wdXRNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRDaGlwc01vZHVsZSxcclxuICAgIE5neE1hc2tNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVGV4dE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFRleHRBcmVhTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgRGF0ZVJhbmdlUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgTnVtYmVyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgQ2hlY2tib3hNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBSYWRpb0J1dHRvbk1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFNlbGVjdE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIEF1dG9jb21wbGV0ZU1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFRpbWVQaWNrZXJNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBEYXRlUGlja2VyTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgRmlsZVVwbG9hZE1hdGVyaWFsQ29udHJvbENvbXBvbmVudCxcclxuICAgIFBob25lTWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUGFzc3dvcmRNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBDYXJkQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQm94TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgRGVuc2VUZXh0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50LFxyXG4gICAgRG9jQ29udHJvbENvbXBvbmVudCxcclxuICAgIENoZWNrYm94R3JvdXBNYXRlcmlhbENvbnRyb2xDb21wb25lbnQsXHJcbiAgICBFcnJvck1hdGVyaWFsQ29tcG9uZW50LFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ29udHJvbHNNb2R1bGUgeyB9XHJcbiJdfQ==