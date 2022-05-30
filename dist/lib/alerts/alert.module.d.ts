import { ModuleWithProviders } from '@angular/core';
import { CustomClassSweet } from './models/customClassSweet.interface';
import * as i0 from "@angular/core";
import * as i1 from "@sweetalert2/ngx-sweetalert2";
export declare class AlertModule {
    static forRoot(customClass: CustomClassSweet | undefined): ModuleWithProviders<AlertModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AlertModule, never, [typeof i1.SweetAlert2Module], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AlertModule>;
}
