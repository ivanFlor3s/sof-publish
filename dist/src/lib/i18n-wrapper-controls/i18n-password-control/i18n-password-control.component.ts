import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PasswordMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-password-control',
  templateUrl: './i18n-password-control.component.html'
})
export class I18nPasswordControlComponent extends I18nBase implements AfterViewInit {

  @ViewChild(PasswordMaterialControlComponent)
  control!: PasswordMaterialControlComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
  
}
