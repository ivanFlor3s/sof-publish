import { BaseFormFieldComponent, TextMaterialControlComponent } from 'sof-ng-controls';
import { Component, Input, Self } from '@angular/core';
import { FormGroup, NgControl } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  template: ''
})

export class I18nBase extends BaseFormFieldComponent  {

  @Input() labelToTranslate!: string;
  @Input() placeholderToTranslate!: string;

  constructor(
    @Self() public override controlDir: NgControl, 
    protected pipeTranslate: TranslatePipe,
    public _srvTranslatePipe: TranslateService
  ) {
    super(controlDir);
  }
  
  getFbGroup(): FormGroup  {
    return this.controlDir.control?.parent as FormGroup|| new FormGroup({});
  }

}
