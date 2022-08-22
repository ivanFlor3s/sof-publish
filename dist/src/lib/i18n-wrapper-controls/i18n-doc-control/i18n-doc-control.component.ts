import { Component, AfterViewInit, ViewChild, Input, OnChanges, SimpleChanges, AfterViewChecked, Output, EventEmitter } from '@angular/core';
import { DocControlComponent } from 'sof-ng-controls';
import { TypeDocuments } from 'sof-ng-controls/lib/material-controls/doc-control/type.enum';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-doc-control',
  templateUrl: './i18n-doc-control.component.html'
})
export class I18nDocControlComponent extends I18nBase implements AfterViewInit {
  @Input() type!: TypeDocuments;
  @Output() minLength: EventEmitter<number> = new EventEmitter<number>();
  
  @ViewChild(DocControlComponent)
  control!: DocControlComponent;
  
  ngAfterViewInit(): void {

    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };

  }

}
