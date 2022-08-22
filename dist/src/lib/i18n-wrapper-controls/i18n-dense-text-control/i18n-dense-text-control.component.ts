import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { I18nBase } from '../../shared/models/base';
import { DenseTextMaterialControlComponent } from 'sof-ng-controls';

@Component({
  selector: 'app-i18n-dense-text-control',
  templateUrl: './i18n-dense-text-control.component.html'
})
export class I18nDenseTextControlComponent extends I18nBase implements AfterViewInit{

  @ViewChild(DenseTextMaterialControlComponent)
  control!: DenseTextMaterialControlComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
  
}
