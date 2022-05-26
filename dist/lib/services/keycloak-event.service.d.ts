import { KeycloakEvent, KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class KeycloakEventService {
    private keycloakService;
    keyCloakEventSubject$: Subject<KeycloakEvent>;
    constructor(keycloakService: KeycloakService);
    GetObservable(): Observable<KeycloakEvent>;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeycloakEventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<KeycloakEventService>;
}
