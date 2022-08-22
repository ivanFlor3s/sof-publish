import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { I18nControlsModule } from '../lib/i18n-controls.module';
import { AlertComponent } from './components/sof-alert/alert.component';

@NgModule({
  declarations: [
    AlertComponent
],
  imports: [
    CommonModule,
    I18nControlsModule,
    TranslateModule,
    MatButtonModule
  ],
  providers: [

  ]
})
export class SofAlertModule {}
