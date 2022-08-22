import { AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DateRangePickerMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-date-range-picker-control',
  templateUrl: './i18n-date-range-picker-control.component.html',
})
export class I18nDateRangePickerControlComponent extends I18nBase implements AfterViewInit {

  @ViewChild(DateRangePickerMaterialControlComponent)
  control!: DateRangePickerMaterialControlComponent;

  @Input() override placeholderToTranslate = 'dd/MM/yyyy'

  /**
   * En caso de true, se va a mostrar el calendario al hacer click en cualquier parte del input
   */
  @Input() openOnClick = false

  /**
   * En caso de true se va a permitir editar las fechas, caso contrario estaran readonly y solo se podra editar desde el calendario
   */
  @Input() editable = false


  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }

}
