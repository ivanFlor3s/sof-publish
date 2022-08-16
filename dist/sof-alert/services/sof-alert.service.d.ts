import { MatDialog } from '@angular/material/dialog';
import { AlertConfig } from '../interfaces/alert-config.interface';
import { AlertResult } from '../interfaces/alert-result.interface';
import * as i0 from "@angular/core";
export declare class SofAlertService {
    private dialog;
    constructor(dialog: MatDialog);
    show(config: AlertConfig): Promise<AlertResult | undefined>;
    showConfirmAction(text: string, textParams?: any, buttonsParams?: any, width?: string): Promise<AlertResult | undefined>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SofAlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SofAlertService>;
}
