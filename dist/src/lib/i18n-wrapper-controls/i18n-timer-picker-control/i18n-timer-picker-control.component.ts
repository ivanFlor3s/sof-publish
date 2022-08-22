import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { TimePickerMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-timer-picker-control',
  templateUrl: './i18n-timer-picker-control.component.html',
})
export class I18nTimePickerControlComponent
  extends I18nBase
  implements AfterViewInit
{
  @ViewChild(TimePickerMaterialControlComponent)
  control!: TimePickerMaterialControlComponent;
  @Input() format24hs: boolean = false;
  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
}
