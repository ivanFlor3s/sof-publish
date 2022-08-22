import { Component, Input, ViewChild } from '@angular/core';
import { SearchBoxMaterialControlComponent } from 'sof-ng-controls';
@Component({
  selector: 'app-i18n-search-box-control',
  templateUrl: './i18n-search-box-control.component.html',
})
export class I18nSearchBoxControlComponent extends SearchBoxMaterialControlComponent {
  @Input() placeholderToTranslate!: string;

  @ViewChild('searchBox') searchBox!: SearchBoxMaterialControlComponent
  
  override reset(emit: boolean = false) {
    this.searchBox.reset(emit);
  }
  
}
