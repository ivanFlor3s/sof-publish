import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NumberMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-number-control',
  templateUrl: './i18n-number-control.component.html',
})
export class I18nNumberControlComponent extends I18nBase implements AfterViewInit {

  @ViewChild(NumberMaterialControlComponent)
  control!: NumberMaterialControlComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
  
}
