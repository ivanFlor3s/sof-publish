import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FileUploadMaterialControlComponent, ValidationForm, ValidationTypes } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';

@Component({
  selector: 'app-i18n-file-upload-control',
  templateUrl: './i18n-file-upload-control.component.html',
  styleUrls: ['./i18n-file-upload-control.component.scss']
})
export class I18nFileUploadControlComponent extends I18nBase {

  @ViewChild(FileUploadMaterialControlComponent)
  control!: FileUploadMaterialControlComponent;

  @Input() maxSize!:  number
  @Input() multiple!: boolean

  ngAfterViewInit(): void {
    this.control.errorControl.translateFuncion = (param: string) => {
      return this.pipeTranslate.transform(param);
    };
  }
  
  getMaxSizeValueInValidation(validations?: ValidationForm[]){
    if(validations){
      return validations.find(x=>x.type== ValidationTypes.MaxFileSize)?.value
    }
    else return 0
  }



}
