import { ModuleWithProviders } from '@angular/core';
import { KeycloakConfigurations } from './configurations/keycloak-configurations';
import * as i0 from "@angular/core";
import * as i1 from "./components/sof-dropdown/sof-dropdown.component";
export declare class SofSharedModule {
    static forRoot(keycloakConfigurations: KeycloakConfigurations): ModuleWithProviders<SofSharedModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SofSharedModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SofSharedModule, [typeof i1.SofDropdownComponent], never, [typeof i1.SofDropdownComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SofSharedModule>;
}
