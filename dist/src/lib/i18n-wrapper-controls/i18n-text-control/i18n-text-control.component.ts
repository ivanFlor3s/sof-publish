import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { TextMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-text-control',
  templateUrl: './i18n-text-control.component.html'
})
export class I18nTextControlComponent extends I18nBase implements AfterViewInit {
  @ViewChild(TextMaterialControlComponent)
  control!: TextMaterialControlComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
}
