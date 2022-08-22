import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SelectMaterialControlComponent } from 'sof-ng-controls';
import { I18nOptions } from '../../shared/models/options';

@Component({
  selector: 'app-i18n-select-control',
  templateUrl: './i18n-select-control.component.html',
})
export class I18nSelectControlComponent extends I18nOptions implements AfterViewInit {

  @ViewChild(SelectMaterialControlComponent)
  control!: SelectMaterialControlComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };

    this._srvTranslatePipe.onLangChange.subscribe( () => {
      this.showOptions();
    });
  }
  
}
