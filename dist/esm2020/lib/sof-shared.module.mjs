import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
//Componentes
import { SofDropdownComponent } from './components/sof-dropdown/sof-dropdown.component';
import { KeycloakConfigurations } from './configurations/keycloak-configurations';
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
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mLXNoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2Ytc2hhcmVkL3NyYy9saWIvc29mLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RSxhQUFhO0FBQ2IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBRWxGLHlCQUF5QjtBQUN6QixTQUFTLGtCQUFrQixDQUFDLFFBQXlCLEVBQUUsY0FBc0M7SUFDM0YsT0FBTyxHQUFHLEVBQUU7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osTUFBTSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxVQUFVLGNBQWMsQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFDLElBQUksT0FBTztnQkFDOUQsS0FBSyxFQUFFLGNBQWMsQ0FBQyxLQUFLO2dCQUMzQixRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVE7YUFDbEM7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLGdCQUFnQjtnQkFDeEIseUJBQXlCLEVBQ3ZCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLCtCQUErQjthQUUzRDtZQUNELGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7QUEyQkQsTUFBTSxPQUFPLGVBQWU7SUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FDWixzQkFBOEM7UUFFOUMsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUsc0JBQXNCO2lCQUNqQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzRHQWJVLGVBQWU7NkdBQWYsZUFBZSxpQkF2QnhCLG9CQUFvQixhQU1wQixvQkFBb0I7NkdBaUJYLGVBQWUsYUFmZjtRQUNULGVBQWU7UUFDZjtZQUNFLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFVBQVUsRUFBRSxrQkFBa0I7WUFDOUIsS0FBSyxFQUFFLElBQUk7WUFDWCxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUM7U0FDaEQ7UUFDRDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsWUFuQlEsRUFFUjsyRkFtQlUsZUFBZTtrQkF6QjNCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFLEVBRVI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGVBQWU7d0JBQ2Y7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxrQkFBa0I7NEJBQzlCLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQzt5QkFDaEQ7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHlCQUF5Qjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXljbG9ha0JlYXJlckludGVyY2VwdG9yLCBLZXljbG9ha1NlcnZpY2UgfSBmcm9tICdrZXljbG9hay1hbmd1bGFyJztcclxuXHJcbi8vQ29tcG9uZW50ZXNcclxuaW1wb3J0IHsgU29mRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc29mLWRyb3Bkb3duL3NvZi1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXljbG9ha0NvbmZpZ3VyYXRpb25zIH0gZnJvbSAnLi9jb25maWd1cmF0aW9ucy9rZXljbG9hay1jb25maWd1cmF0aW9ucyc7XHJcblxyXG4vLyBDb25maWd1cmFjaW9uIEtleWNsb2FrXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVLZXljbG9hayhrZXljbG9hazogS2V5Y2xvYWtTZXJ2aWNlLCBjb25maWd1cmF0aW9uczogS2V5Y2xvYWtDb25maWd1cmF0aW9ucykge1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBrZXljbG9hay5pbml0KHtcclxuICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgdXJsOiBgaHR0cDovLyR7Y29uZmlndXJhdGlvbnMuaXB9OiR7Y29uZmlndXJhdGlvbnMucG9ydH0vYXV0aGAsXHJcbiAgICAgICAgcmVhbG06IGNvbmZpZ3VyYXRpb25zLnJlYWxtLFxyXG4gICAgICAgIGNsaWVudElkOiBjb25maWd1cmF0aW9ucy5jbGllbnRJZFxyXG4gICAgICB9LFxyXG4gICAgICBpbml0T3B0aW9uczoge1xyXG4gICAgICAgIG9uTG9hZDogJ2xvZ2luLXJlcXVpcmVkJyxcclxuICAgICAgICBzaWxlbnRDaGVja1Nzb1JlZGlyZWN0VXJpOlxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvYXNzZXRzL3NpbGVudC1jaGVjay1zc28uaHRtbCcsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGJlYXJlckV4Y2x1ZGVkVXJsczogWycvYXNzZXRzJ10sIFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNvZkRyb3Bkb3duQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcblxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU29mRHJvcGRvd25Db21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgS2V5Y2xvYWtTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVLZXljbG9hayxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIGRlcHM6IFtLZXljbG9ha1NlcnZpY2UsIEtleWNsb2FrQ29uZmlndXJhdGlvbnNdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IEtleWNsb2FrQmVhcmVySW50ZXJjZXB0b3IsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2ZTaGFyZWRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KFxyXG4gICAga2V5Y2xvYWtDb25maWd1cmF0aW9uczogS2V5Y2xvYWtDb25maWd1cmF0aW9uc1xyXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U29mU2hhcmVkTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU29mU2hhcmVkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBwcm92aWRlOiBLZXljbG9ha0NvbmZpZ3VyYXRpb25zLFxyXG4gICAgICAgICAgdXNlVmFsdWU6IGtleWNsb2FrQ29uZmlndXJhdGlvbnMsXHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19