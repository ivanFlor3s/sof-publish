import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PhoneMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-phone-control',
  templateUrl: './i18n-phone-control.component.html'
})
export class I18nPhoneControlComponent extends I18nBase implements AfterViewInit {

  @ViewChild(PhoneMaterialControlComponent)
  control!: PhoneMaterialControlComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
  
}
