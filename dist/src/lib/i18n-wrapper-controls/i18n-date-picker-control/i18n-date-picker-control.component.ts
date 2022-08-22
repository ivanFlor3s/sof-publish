import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatePickerMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-date-picker-control',
  templateUrl: './i18n-date-picker-control.component.html',
})
export class I18nDatePickerControlComponent extends I18nBase implements AfterViewInit {

  @ViewChild(DatePickerMaterialControlComponent)
  control!: DatePickerMaterialControlComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }


}
