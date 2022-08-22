import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { AutocompleteMaterialControlComponent } from 'sof-ng-controls';
import { I18nOptions } from '../../shared/models/options';

@Component({
  selector: 'app-i18n-autocomplete-control',
  templateUrl: './i18n-autocomplete-control.component.html'
})
export class I18nAutocompleteComponent extends I18nOptions implements AfterViewInit {
  
  /**
   * Delay para filtrar
   **/ 
  @Input() debounce: number = 300;

  /**
   * Busqueda usado una funcion definida en el componente
   **/ 
  @Input() filterFn!: (filterText: string) => any[] | Promise<any[]>;

  /**
   * Busqueda usando un endpoint
   **/ 
  @Input() filterEndPoint!: string;

  @ViewChild(AutocompleteMaterialControlComponent)
  control!: AutocompleteMaterialControlComponent;

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };

    if (!this.filterFn && !this.filterEndPoint)
      this._srvTranslatePipe.onLangChange.subscribe( () => {
        this.showOptions();
      });
  }

}
