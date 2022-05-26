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
                redirectUri: window.location.origin + state.url
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZi1zaGFyZWQvc3JjL2xpYi9ndWFyZHMvYXV0aC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBbUIsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUt0RSxNQUFNLE9BQU8sU0FBVSxTQUFRLGlCQUFpQjtJQUM5QyxZQUM4QixNQUFjLEVBQ3ZCLFFBQXlCO1FBRTVDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFISSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBRzlDLENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUMxQixLQUE2QixFQUM3QixLQUEwQjtRQUUxQix5REFBeUQ7UUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDeEIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHO2FBQ2hELENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0MsT0FBTyxJQUFJLENBQUM7UUFFZCw0Q0FBNEM7UUFDNUMsMENBQTBDO1FBRTFDLDJGQUEyRjtRQUMzRix5RUFBeUU7UUFDekUsaUJBQWlCO1FBQ2pCLElBQUk7UUFFSixzRUFBc0U7UUFDdEUsbUVBQW1FO1FBRW5FLHNEQUFzRDtRQUN0RCwrQ0FBK0M7SUFDakQsQ0FBQzs7c0dBbENVLFNBQVM7MEdBQVQsU0FBUyxjQUZSLE1BQU07MkZBRVAsU0FBUztrQkFIckIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICBSb3V0ZXIsXHJcbiAgUm91dGVyU3RhdGVTbmFwc2hvdFxyXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEtleWNsb2FrQXV0aEd1YXJkLCBLZXljbG9ha1NlcnZpY2UgfSBmcm9tICdrZXljbG9hay1hbmd1bGFyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBleHRlbmRzIEtleWNsb2FrQXV0aEd1YXJkIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBrZXljbG9hazogS2V5Y2xvYWtTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihyb3V0ZXIsIGtleWNsb2FrKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBpc0FjY2Vzc0FsbG93ZWQoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAgKSB7XHJcbiAgICAvLyBGb3JjZSB0aGUgdXNlciB0byBsb2cgaW4gaWYgY3VycmVudGx5IHVuYXV0aGVudGljYXRlZC5cclxuICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMua2V5Y2xvYWsubG9naW4oe1xyXG4gICAgICAgIHJlZGlyZWN0VXJpOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgc3RhdGUudXJsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2VcclxuICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgLy8gLy8gR2V0IHRoZSByb2xlcyByZXF1aXJlZCBmcm9tIHRoZSByb3V0ZS5cclxuICAgIC8vIGNvbnN0IHJlcXVpcmVkUm9sZXMgPSByb3V0ZS5kYXRhLnJvbGVzO1xyXG5cclxuICAgIC8vIC8vIEFsbG93IHRoZSB1c2VyIHRvIHRvIHByb2NlZWQgaWYgbm8gYWRkaXRpb25hbCByb2xlcyBhcmUgcmVxdWlyZWQgdG8gYWNjZXNzIHRoZSByb3V0ZS5cclxuICAgIC8vIGlmICghKHJlcXVpcmVkUm9sZXMgaW5zdGFuY2VvZiBBcnJheSkgfHwgcmVxdWlyZWRSb2xlcy5sZW5ndGggPT09IDApIHtcclxuICAgIC8vICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gLy8gQWxsb3cgdGhlIHVzZXIgdG8gcHJvY2VlZCBpZiBhbGwgdGhlIHJlcXVpcmVkIHJvbGVzIGFyZSBwcmVzZW50LlxyXG4gICAgLy8gcmV0dXJuIHJlcXVpcmVkUm9sZXMuZXZlcnkoKHJvbGUpID0+IHRoaXMucm9sZXMuaW5jbHVkZXMocm9sZSkpO1xyXG5cclxuICAgIC8vIFRvRG8gQ2FwYXogc2UgcG9kcmlhIGltcGxlbWVudGFyIGFjYSBsbyBkZSBwZXJtaXNvc1xyXG4gICAgLy8gICAgICBPIGRpcmVjdGFtZW50ZSBlbiB1biBndWFyZCBwb3Igc2VwYXJhZG9cclxuICB9XHJcbn0iXX0=