import { NgModule } from '@angular/core';
import { I18nWrapperModule } from './i18n-wrapper-controls/i18n-wrapper.module';
import { I18GridControlModule } from './i18n-wrapper-grid/i18n-grid-control/i18n-grid-control.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [I18nWrapperModule, I18GridControlModule],
})
export class I18nControlsModule {}
