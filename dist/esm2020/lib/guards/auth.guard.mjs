import { Injectable } from '@angular/core';
import { KeycloakAuthGuard } from 'keycloak-angular';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "keycloak-angular";
export class AuthGuard extends KeycloakAuthGuard {
    constructor(router, keycloak) {
        super(router, keycloak);
        this.router = router;
        this.keycloak = keycloak;
    }
    async isAccessAllowed(route, state) {
        // Force the user to log in if currently unauthenticated.
        if (!this.authenticated) {
            await this.keycloak.login({
                redirectUri: window.location.origin
            });
            return false;
        }
        else
            return true;
        // // Get the roles required from the route.
        // const requiredRoles = route.data.roles;
        // // Allow the user to to proceed if no additional roles are required to access the route.
        // if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
        //   return true;
        // }
        // // Allow the user to proceed if all the required roles are present.
        // return requiredRoles.every((role) => this.roles.includes(role));
        // ToDo Capaz se podria implementar aca lo de permisos
        //      O directamente en un guard por separado
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AuthGuard, deps: [{ token: i1.Router }, { token: i2.KeycloakService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AuthGuard, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.KeycloakService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZi1zaGFyZWQvc3JjL2xpYi9ndWFyZHMvYXV0aC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBbUIsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUt0RSxNQUFNLE9BQU8sU0FBVSxTQUFRLGlCQUFpQjtJQUM5QyxZQUM4QixNQUFjLEVBQ3ZCLFFBQXlCO1FBRTVDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFISSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBRzlDLENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUMxQixLQUE2QixFQUM3QixLQUEwQjtRQUUxQix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTTthQUNwQyxDQUFDLENBQUM7WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNkOztZQUNDLE9BQU8sSUFBSSxDQUFDO1FBRWQsNENBQTRDO1FBQzVDLDBDQUEwQztRQUUxQywyRkFBMkY7UUFDM0YseUVBQXlFO1FBQ3pFLGlCQUFpQjtRQUNqQixJQUFJO1FBRUosc0VBQXNFO1FBQ3RFLG1FQUFtRTtRQUVuRSxzREFBc0Q7UUFDdEQsK0NBQStDO0lBQ2pELENBQUM7O3NHQWxDVSxTQUFTOzBHQUFULFNBQVMsY0FGUixNQUFNOzJGQUVQLFNBQVM7a0JBSHJCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgUm91dGVyLFxyXG4gIFJvdXRlclN0YXRlU25hcHNob3RcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBLZXljbG9ha0F1dGhHdWFyZCwgS2V5Y2xvYWtTZXJ2aWNlIH0gZnJvbSAna2V5Y2xvYWstYW5ndWxhcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgZXh0ZW5kcyBLZXljbG9ha0F1dGhHdWFyZCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkga2V5Y2xvYWs6IEtleWNsb2FrU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIocm91dGVyLCBrZXljbG9hayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaXNBY2Nlc3NBbGxvd2VkKFxyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG4gICkge1xyXG4gICAgLy8gRm9yY2UgdGhlIHVzZXIgdG8gbG9nIGluIGlmIGN1cnJlbnRseSB1bmF1dGhlbnRpY2F0ZWQuXHJcbiAgICBpZiAoIXRoaXMuYXV0aGVudGljYXRlZCkge1xyXG4gICAgICBhd2FpdCB0aGlzLmtleWNsb2FrLmxvZ2luKHtcclxuICAgICAgICByZWRpcmVjdFVyaTogd2luZG93LmxvY2F0aW9uLm9yaWdpblxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIC8vIC8vIEdldCB0aGUgcm9sZXMgcmVxdWlyZWQgZnJvbSB0aGUgcm91dGUuXHJcbiAgICAvLyBjb25zdCByZXF1aXJlZFJvbGVzID0gcm91dGUuZGF0YS5yb2xlcztcclxuXHJcbiAgICAvLyAvLyBBbGxvdyB0aGUgdXNlciB0byB0byBwcm9jZWVkIGlmIG5vIGFkZGl0aW9uYWwgcm9sZXMgYXJlIHJlcXVpcmVkIHRvIGFjY2VzcyB0aGUgcm91dGUuXHJcbiAgICAvLyBpZiAoIShyZXF1aXJlZFJvbGVzIGluc3RhbmNlb2YgQXJyYXkpIHx8IHJlcXVpcmVkUm9sZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAvLyAgIHJldHVybiB0cnVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC8vIEFsbG93IHRoZSB1c2VyIHRvIHByb2NlZWQgaWYgYWxsIHRoZSByZXF1aXJlZCByb2xlcyBhcmUgcHJlc2VudC5cclxuICAgIC8vIHJldHVybiByZXF1aXJlZFJvbGVzLmV2ZXJ5KChyb2xlKSA9PiB0aGlzLnJvbGVzLmluY2x1ZGVzKHJvbGUpKTtcclxuXHJcbiAgICAvLyBUb0RvIENhcGF6IHNlIHBvZHJpYSBpbXBsZW1lbnRhciBhY2EgbG8gZGUgcGVybWlzb3NcclxuICAgIC8vICAgICAgTyBkaXJlY3RhbWVudGUgZW4gdW4gZ3VhcmQgcG9yIHNlcGFyYWRvXHJcbiAgfVxyXG59Il19