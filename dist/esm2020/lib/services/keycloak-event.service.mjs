import { Injectable } from '@angular/core';
import { KeycloakEventType } from 'keycloak-angular';
import * as i0 from "@angular/core";
import * as i1 from "keycloak-angular";
export class KeycloakEventService {
    constructor(keycloakService) {
        this.keycloakService = keycloakService;
        this.keyCloakEventSubject$ = keycloakService.keycloakEvents$;
        this.keyCloakEventSubject$.subscribe({
            next: (e) => {
                if (e.type == KeycloakEventType.OnTokenExpired) {
                    keycloakService.updateToken(20);
                }
            }
        });
    }
    GetObservable() {
        return this.keyCloakEventSubject$.asObservable();
    }
}
KeycloakEventService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: KeycloakEventService, deps: [{ token: i1.KeycloakService }], target: i0.ɵɵFactoryTarget.Injectable });
KeycloakEventService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: KeycloakEventService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: KeycloakEventService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.KeycloakService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Y2xvYWstZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZi1zaGFyZWQvc3JjL2xpYi9zZXJ2aWNlcy9rZXljbG9hay1ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixpQkFBaUIsRUFBbUIsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBT3JGLE1BQU0sT0FBTyxvQkFBb0I7SUFJN0IsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDO1FBRTdELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLGNBQWMsRUFBRTtvQkFDNUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbkM7WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyRCxDQUFDOztpSEFsQlEsb0JBQW9CO3FIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXljbG9ha0V2ZW50LCBLZXljbG9ha0V2ZW50VHlwZSwgS2V5Y2xvYWtTZXJ2aWNlIH0gZnJvbSAna2V5Y2xvYWstYW5ndWxhcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEtleWNsb2FrRXZlbnRTZXJ2aWNlIHtcclxuXHJcbiAgICBrZXlDbG9ha0V2ZW50U3ViamVjdCQ6IFN1YmplY3Q8S2V5Y2xvYWtFdmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBrZXljbG9ha1NlcnZpY2U6IEtleWNsb2FrU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMua2V5Q2xvYWtFdmVudFN1YmplY3QkID0ga2V5Y2xvYWtTZXJ2aWNlLmtleWNsb2FrRXZlbnRzJDtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlDbG9ha0V2ZW50U3ViamVjdCQuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgbmV4dDogKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gS2V5Y2xvYWtFdmVudFR5cGUuT25Ub2tlbkV4cGlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXljbG9ha1NlcnZpY2UudXBkYXRlVG9rZW4oMjApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0T2JzZXJ2YWJsZSgpOiBPYnNlcnZhYmxlPEtleWNsb2FrRXZlbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlDbG9ha0V2ZW50U3ViamVjdCQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==