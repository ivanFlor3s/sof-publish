import { Component, Input, ViewChild } from '@angular/core';
import { TextAreaMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-textarea-control',
  templateUrl: './i18n-textarea-control.component.html',
})
export class I18nTextAreaControlComponent extends I18nBase {

  @ViewChild(TextAreaMaterialControlComponent)
  control!: TextAreaMaterialControlComponent;

  @Input() rowsArea!: number
  @Input() resizeable!:boolean

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
}
