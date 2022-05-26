import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import * as i0 from "@angular/core";
export declare class AuthGuard extends KeycloakAuthGuard {
    protected readonly router: Router;
    protected readonly keycloak: KeycloakService;
    constructor(router: Router, keycloak: KeycloakService);
    isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
