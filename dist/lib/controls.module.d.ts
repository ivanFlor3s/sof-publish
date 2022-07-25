import { ModuleWithProviders } from '@angular/core';
import { ErrorsConfigurations } from './validations/configuration/errors-configuration';
import { CustomClassSweet } from './alerts/models/customClassSweet.interface';
import * as i0 from "@angular/core";
import * as i1 from "./controls.component";
import * as i2 from "./material-controls/material-controls.module";
import * as i3 from "./dynamic-form/dyn-form.module";
import * as i4 from "./grid-control/grid-control.module";
import * as i5 from "./alerts/alert.module";
export declare class ControlsModule {
    static forRoot(libConfiguration: ErrorsConfigurations, customClass: CustomClassSweet | undefined): ModuleWithProviders<ControlsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ControlsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ControlsModule, [typeof i1.ControlsComponent], never, [typeof i1.ControlsComponent, typeof i2.MaterialControlsModule, typeof i3.DynamicFormModule, typeof i4.GridControlModule, typeof i5.AlertModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ControlsModule>;
}
