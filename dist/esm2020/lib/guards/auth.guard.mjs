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
        const keycloakInstance = this.keycloak.getKeycloakInstance();
        return new Promise(resolve => {
            keycloakInstance.onReady = async (authenticated) => {
                if (!authenticated) {
                    await this.keycloak.login({
                        redirectUri: window.location.origin + state.url
                    });
                    resolve(false);
                    return;
                }
                resolve(true);
            };
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZi1zaGFyZWQvc3JjL2xpYi9ndWFyZHMvYXV0aC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBbUIsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUt0RSxNQUFNLE9BQU8sU0FBVSxTQUFRLGlCQUFpQjtJQUM5QyxZQUM4QixNQUFjLEVBQ3ZCLFFBQXlCO1FBRTVDLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFISSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBRzlDLENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUMxQixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUU3RCxPQUFPLElBQUksT0FBTyxDQUFVLE9BQU8sQ0FBQyxFQUFFO1lBQ3BDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2xCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ3hCLFdBQVcsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRztxQkFDaEQsQ0FBQyxDQUFDO29CQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDZixPQUFPO2lCQUNSO2dCQUNELE9BQU8sQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUNsQixDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O3NHQTFCVSxTQUFTOzBHQUFULFNBQVMsY0FGUixNQUFNOzJGQUVQLFNBQVM7a0JBSHJCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgUm91dGVyLFxyXG4gIFJvdXRlclN0YXRlU25hcHNob3RcclxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBLZXljbG9ha0F1dGhHdWFyZCwgS2V5Y2xvYWtTZXJ2aWNlIH0gZnJvbSAna2V5Y2xvYWstYW5ndWxhcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgZXh0ZW5kcyBLZXljbG9ha0F1dGhHdWFyZCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkga2V5Y2xvYWs6IEtleWNsb2FrU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIocm91dGVyLCBrZXljbG9hayk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaXNBY2Nlc3NBbGxvd2VkKFxyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3Qga2V5Y2xvYWtJbnN0YW5jZSA9IHRoaXMua2V5Y2xvYWsuZ2V0S2V5Y2xvYWtJbnN0YW5jZSgpO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcclxuICAgICAga2V5Y2xvYWtJbnN0YW5jZS5vblJlYWR5ID0gYXN5bmMgKGF1dGhlbnRpY2F0ZWQpID0+IHtcclxuICAgICAgICBpZiAoIWF1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMua2V5Y2xvYWsubG9naW4oe1xyXG4gICAgICAgICAgICByZWRpcmVjdFVyaTogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHN0YXRlLnVybFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZSggdHJ1ZSApO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19