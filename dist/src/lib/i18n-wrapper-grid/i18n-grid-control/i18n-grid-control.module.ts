import { NgModule } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { GridControlModule } from 'sof-ng-controls';
import { SharedModule } from '../../shared/module/shared.module';
import { I18nBadgeControlComponent,I18nRowOptionsComponent } from './components';

import { I18nGridControlComponent } from './i18n-grid-control.component';

//MATERIALS
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu'
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip'
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    GridControlModule, 
    SharedModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule
],
  exports: [
    I18nGridControlComponent,
    I18nBadgeControlComponent,
    I18nRowOptionsComponent,
],
  declarations: [
    I18nGridControlComponent,
    I18nBadgeControlComponent,
    I18nRowOptionsComponent
],
  providers: [],
})
export class I18GridControlModule {}
