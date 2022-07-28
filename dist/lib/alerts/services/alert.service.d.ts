import { SweetAlertIcon, SweetAlertInput, SweetAlertPosition } from 'sweetalert2';
import { LinkSweet } from '../models/linkSweet.class';
import { CustomClassSweet } from '../models/customClassSweet.interface';
import * as i0 from "@angular/core";
export declare class AlertService {
    private swalWithMatButtonsBasic;
    private swalWithMatButtonsDialog;
    private swalWithMatButtonsConfirm;
    constructor(customClass?: CustomClassSweet);
    showBasic(title?: string, text?: string, icon?: SweetAlertIcon): void;
    showCustom(position?: SweetAlertPosition, title?: string, text?: string, icon?: SweetAlertIcon, timer?: number, showConfirmButton?: boolean, confirmButtonText?: string): void;
    showCustomHTML(position?: SweetAlertPosition, title?: string, html?: string, icon?: SweetAlertIcon, showCloseButton?: boolean, showCancelButton?: boolean, focusConfirm?: boolean, confirmButtonText?: string, cancelButtonText?: string): void;
    showCustomImage(imageUrl: string, position?: SweetAlertPosition, title?: string, text?: string, imageWidth?: number, imageHeight?: number, imageAlt?: string): void;
    showDialog(title?: string, text?: string, confirmButtonText?: string, denyButtonText?: string, cancelButtonText?: string, mode?: boolean): Promise<any>;
    showConfirm(title?: string, text?: string, icon?: SweetAlertIcon, confirmButtonText?: string, cancelButtonText?: string): Promise<import("sweetalert2").SweetAlertResult<any>>;
    showBasicErrorFooter(title?: string, text?: string, link?: LinkSweet | HTMLElement | string, icon?: SweetAlertIcon): void;
    showConfirmWithInputHtml(title?: string, text?: string, icon?: SweetAlertIcon, confirmButtonText?: string, cancelButtonText?: string, html?: string | HTMLElement | JQuery, preConfirm?: (inputValue: any) => any | false | undefined | Promise<any | false | undefined>, input?: SweetAlertInput, inputLabel?: string, inputPlaceholder?: string, inputOptions?: ReadonlyMap<string, string> | Record<string, any> | Promise<ReadonlyMap<string, string> | Record<string, any>>, inputAttributes?: Record<string, string>, inputValidator?: (inputValue: string) => string | null | Promise<string | null>, inputValue?: string | number | boolean | Promise<string | number | boolean>): Promise<import("sweetalert2").SweetAlertResult<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlertService>;
}
