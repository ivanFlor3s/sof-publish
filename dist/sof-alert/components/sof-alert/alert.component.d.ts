import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { I18nDynamicFormComponent } from '../../../lib/i18n-wrapper-controls/i18n-dynamic-form/i18n-dynamic-form.component';
import { FormConfig } from 'sof-ng-controls';
import { IconColorEnum } from '../../enums/icon-color.enum';
import { IconStyleEnum } from '../../enums/icon-style.enum';
import { IconEnum } from '../../enums/icon.enum';
import { AlertConfig } from '../../interfaces/alert-config.interface';
import * as i0 from "@angular/core";
export declare class AlertComponent implements OnInit {
    private dialogRef;
    data: AlertConfig;
    private translateService;
    config: AlertConfig;
    IconStyleEnum: typeof IconStyleEnum;
    IconColorEnum: typeof IconColorEnum;
    IconEnum: typeof IconEnum;
    form: I18nDynamicFormComponent;
    formConfigs: FormConfig;
    constructor(dialogRef: MatDialogRef<AlertComponent>, data: AlertConfig, translateService: TranslateService);
    ngOnInit(): Promise<void>;
    onClick(type: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "app-alert", never, {}, {}, never, never>;
}
