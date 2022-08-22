import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { I18nDynamicFormComponent } from '../../../lib/i18n-wrapper-controls/i18n-dynamic-form/i18n-dynamic-form.component';
import { FormConfig } from 'sof-ng-controls';
import { IconColorEnum } from '../../enums/icon-color.enum';
import { IconStyleEnum } from '../../enums/icon-style.enum';
import { IconEnum } from '../../enums/icon.enum';
import { AlertConfig } from '../../interfaces/alert-config.interface';
import { AlertResult } from '../../interfaces/alert-result.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  config: AlertConfig;
  
  IconStyleEnum = IconStyleEnum;
  IconColorEnum = IconColorEnum;
  IconEnum = IconEnum;

  @ViewChild('form', { static: false }) form!: I18nDynamicFormComponent;
  formConfigs: FormConfig = {
    formCustomClass: '',
    submitButtonConfig:{
      text:'',
      color:'primary',
      hidden: true,
      materialButtonType:'raised'
    }
  }


  constructor(
    private dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertConfig,
    private translateService: TranslateService
  ) {
    this.config = data;
  }

  async ngOnInit(): Promise<void> {
    if (!!this.config.width)
      this.dialogRef.updateSize(this.config.width);
    
    if (!!this.config.textParams)
      Object.keys(this.config.textParams).forEach(async key => this.config.textParams[key] = this.translateService.instant(this.config.textParams[key]));
    
    if (!!this.config.buttonsParams)
      Object.keys(this.config.buttonsParams).forEach(async key => this.config.buttonsParams[key] = this.translateService.instant(this.config.buttonsParams[key]));
  }

  onClick(type: string) {
    const values = !this.form ? undefined : this.form.forma.value;
    this.dialogRef.close({
      usedButton: type,
      values: values
    } as AlertResult);
  }

}
