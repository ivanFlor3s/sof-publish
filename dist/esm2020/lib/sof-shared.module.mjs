import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
//Componentes
import { SofDropdownComponent } from './components/sof-dropdown/sof-dropdown.component';
import { KeycloakConfigurations } from './configurations/keycloak-configurations';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import * as i0 from "@angular/core";
// Configuracion Keycloak
function initializeKeycloak(keycloak, configurations) {
    return () => {
        keycloak.init({
            config: {
                url: `http://${configurations.ip}:${configurations.port}/auth`,
                realm: configurations.realm,
                clientId: configurations.clientId
            },
            initOptions: {
                onLoad: 'login-required',
                silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
            },
            bearerExcludedUrls: ['/assets'],
        });
    };
}
export class SofSharedModule {
    static forRoot(keycloakConfigurations) {
        return {
            ngModule: SofSharedModule,
            providers: [
                {
                    provide: KeycloakConfigurations,
                    useValue: keycloakConfigurations,
                }
            ],
        };
    }
}
SofSharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SofSharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SofSharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SofSharedModule, declarations: [SofDropdownComponent], exports: [SofDropdownComponent] });
SofSharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SofSharedModule, providers: [
        KeycloakService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            multi: true,
            deps: [KeycloakService, KeycloakConfigurations]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: KeycloakBearerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true
        },
    ], imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: SofSharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SofDropdownComponent
                    ],
                    imports: [],
                    exports: [
                        SofDropdownComponent
                    ],
                    providers: [
                        KeycloakService,
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeKeycloak,
                            multi: true,
                            deps: [KeycloakService, KeycloakConfigurations]
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: KeycloakBearerInterceptor,
                            multi: true
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: LoadingInterceptor,
                            multi: true
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mLXNoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2Ytc2hhcmVkL3NyYy9saWIvc29mLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RSxhQUFhO0FBQ2IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O0FBRXhFLHlCQUF5QjtBQUN6QixTQUFTLGtCQUFrQixDQUFDLFFBQXlCLEVBQUUsY0FBc0M7SUFDM0YsT0FBTyxHQUFHLEVBQUU7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osTUFBTSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxVQUFVLGNBQWMsQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFDLElBQUksT0FBTztnQkFDOUQsS0FBSyxFQUFFLGNBQWMsQ0FBQyxLQUFLO2dCQUMzQixRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVE7YUFDbEM7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIseUJBQXlCLEVBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLCtCQUErQjthQUUzRDtZQUNELGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7QUFnQ0QsTUFBTSxPQUFPLGVBQWU7SUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FDWixzQkFBOEM7UUFFOUMsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzRHQWJVLGVBQWU7NkdBQWYsZUFBZSxpQkE1QnhCLG9CQUFvQixhQU1wQixvQkFBb0I7NkdBc0JYLGVBQWUsYUFwQmY7UUFDVCxlQUFlO1FBQ2Y7WUFDRSxPQUFPLEVBQUUsZUFBZTtZQUN4QixVQUFVLEVBQUUsa0JBQWtCO1lBQzlCLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDO1NBQ2hEO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNEO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRixZQXhCUSxFQUVSOzJGQXdCVSxlQUFlO2tCQTlCM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUUsRUFFUjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsZUFBZTt3QkFDZjs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGtCQUFrQjs0QkFDOUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDO3lCQUNoRDt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUseUJBQXlCOzRCQUNuQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsa0JBQWtCOzRCQUM1QixLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtleWNsb2FrQmVhcmVySW50ZXJjZXB0b3IsIEtleWNsb2FrU2VydmljZSB9IGZyb20gJ2tleWNsb2FrLWFuZ3VsYXInO1xyXG5cclxuLy9Db21wb25lbnRlc1xyXG5pbXBvcnQgeyBTb2ZEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zb2YtZHJvcGRvd24vc29mLWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtleWNsb2FrQ29uZmlndXJhdGlvbnMgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb25zL2tleWNsb2FrLWNvbmZpZ3VyYXRpb25zJztcclxuaW1wb3J0IHsgTG9hZGluZ0ludGVyY2VwdG9yIH0gZnJvbSAnLi9pbnRlcmNlcHRvcnMvbG9hZGluZy5pbnRlcmNlcHRvcic7XHJcblxyXG4vLyBDb25maWd1cmFjaW9uIEtleWNsb2FrXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVLZXljbG9hayhrZXljbG9hazogS2V5Y2xvYWtTZXJ2aWNlLCBjb25maWd1cmF0aW9uczogS2V5Y2xvYWtDb25maWd1cmF0aW9ucykge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBrZXljbG9hay5pbml0KHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgdXJsOiBgaHR0cDovLyR7Y29uZmlndXJhdGlvbnMuaXB9OiR7Y29uZmlndXJhdGlvbnMucG9ydH0vYXV0aGAsXHJcbiAgICAgICAgcmVhbG06IGNvbmZpZ3VyYXRpb25zLnJlYWxtLFxyXG4gICAgICAgIGNsaWVudElkOiBjb25maWd1cmF0aW9ucy5jbGllbnRJZFxyXG4gICAgICB9LFxyXG4gICAgICBpbml0T3B0aW9uczoge1xyXG4gICAgICAgIG9uTG9hZDogJ2xvZ2luLXJlcXVpcmVkJyxcclxuICAgICAgICBzaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpOlxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYXNzZXRzL3NpbGVudC1jaGVjay1zc28uaHRtbCcsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGJlYXJlckV4Y2x1ZGVkVXJsczogWycvYXNzZXRzJ10sIFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNvZkRyb3Bkb3duQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcblxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU29mRHJvcGRvd25Db21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgS2V5Y2xvYWtTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVLZXljbG9hayxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIGRlcHM6IFtLZXljbG9ha1NlcnZpY2UsIEtleWNsb2FrQ29uZmlndXJhdGlvbnNdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IEtleWNsb2FrQmVhcmVySW50ZXJjZXB0b3IsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IExvYWRpbmdJbnRlcmNlcHRvcixcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvZlNoYXJlZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoXHJcbiAgICBrZXljbG9ha0NvbmZpZ3VyYXRpb25zOiBLZXljbG9ha0NvbmZpZ3VyYXRpb25zXHJcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTb2ZTaGFyZWRNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTb2ZTaGFyZWRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHByb3ZpZGU6IEtleWNsb2FrQ29uZmlndXJhdGlvbnMsXHJcbiAgICAgICAgICB1c2VWYWx1ZToga2V5Y2xvYWtDb25maWd1cmF0aW9ucyxcclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=