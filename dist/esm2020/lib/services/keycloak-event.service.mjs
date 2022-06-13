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
                    // keycloakService.updateToken(20);
                    keycloakService.updateToken();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Y2xvYWstZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZi1zaGFyZWQvc3JjL2xpYi9zZXJ2aWNlcy9rZXljbG9hay1ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixpQkFBaUIsRUFBbUIsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBT3JGLE1BQU0sT0FBTyxvQkFBb0I7SUFJN0IsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDO1FBRTdELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7WUFDakMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLGNBQWMsRUFBRTtvQkFDNUMsbUNBQW1DO29CQUNuQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ2pDO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxhQUFhO1FBQ1QsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckQsQ0FBQzs7aUhBbkJRLG9CQUFvQjtxSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07MkZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5Y2xvYWtFdmVudCwgS2V5Y2xvYWtFdmVudFR5cGUsIEtleWNsb2FrU2VydmljZSB9IGZyb20gJ2tleWNsb2FrLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXljbG9ha0V2ZW50U2VydmljZSB7XHJcblxyXG4gICAga2V5Q2xvYWtFdmVudFN1YmplY3QkOiBTdWJqZWN0PEtleWNsb2FrRXZlbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUga2V5Y2xvYWtTZXJ2aWNlOiBLZXljbG9ha1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmtleUNsb2FrRXZlbnRTdWJqZWN0JCA9IGtleWNsb2FrU2VydmljZS5rZXljbG9ha0V2ZW50cyQ7XHJcblxyXG4gICAgICAgIHRoaXMua2V5Q2xvYWtFdmVudFN1YmplY3QkLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50eXBlID09IEtleWNsb2FrRXZlbnRUeXBlLk9uVG9rZW5FeHBpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8ga2V5Y2xvYWtTZXJ2aWNlLnVwZGF0ZVRva2VuKDIwKTtcclxuICAgICAgICAgICAgICAgICAgICBrZXljbG9ha1NlcnZpY2UudXBkYXRlVG9rZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE9ic2VydmFibGUoKTogT2JzZXJ2YWJsZTxLZXljbG9ha0V2ZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5Q2xvYWtFdmVudFN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=