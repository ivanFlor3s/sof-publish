import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { Buttons } from '../classes/buttons.class';
import { IconsDefaultConfigs } from '../classes/icons-default-configs.class';
import { AlertComponent } from '../components/sof-alert/alert.component';
import { AlertConfig } from '../interfaces/alert-config.interface';
import { AlertResult } from '../interfaces/alert-result.interface';

@Injectable({
  providedIn: 'root'
})
export class SofAlertService {

  constructor(
    private dialog: MatDialog
  ) { }

  async show(config: AlertConfig): Promise<AlertResult | undefined>
  {
    return await firstValueFrom(this.dialog.open(AlertComponent, {
      data: config
    }).afterClosed());
  }

  async showConfirmAction(text: string, textParams?: any, buttonsParams?: any, width?: string): Promise<AlertResult | undefined>
  {
    const config = {
      icon: IconsDefaultConfigs.highlightOff,
      text: text,
      textParams: textParams,
      buttons: [Buttons.Cancel.stroked, Buttons.YesAction.raised],
      buttonsParams: buttonsParams,
      width: width ?? '500px'
    } as AlertConfig;
    return await firstValueFrom(this.dialog.open(AlertComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: config
    }).afterClosed());
  }

}
