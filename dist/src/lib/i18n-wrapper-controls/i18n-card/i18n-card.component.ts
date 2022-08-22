import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardCustomOptions } from 'sof-ng-controls';

@Component({
  selector: 'app-i18n-card',
  templateUrl: './i18n-card.component.html'
})
export class I18nCardComponent {

  @Input() titleKey!: string;
  @Input() subTitleKey!: string;
  @Input() expandable: boolean = false;
  @Input() expanded: boolean = true;
  @Output() onToggleExpand = new EventEmitter<any>();
  @Input() isSubCard: boolean = false;
  @Input() disabled: boolean = false;


  @Input() customOptions?: CardCustomOptions

  constructor() { }

}
