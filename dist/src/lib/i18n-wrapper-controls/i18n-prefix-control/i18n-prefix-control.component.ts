import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { PrefixControlMaterialComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-prefix-control',
  templateUrl: './i18n-prefix-control.component.html'
})
export class I18nPrefixControlComponent extends I18nBase implements AfterViewInit {

  @Input() inputType: 'number' | 'text' = 'number'
  @Input() prefix: string;

  @ViewChild(PrefixControlMaterialComponent)
  control: PrefixControlMaterialComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
}
