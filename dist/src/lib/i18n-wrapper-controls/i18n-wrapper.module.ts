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

@NgModule({
  providers: [
    
  ],
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
})
export class I18nWrapperModule {}
