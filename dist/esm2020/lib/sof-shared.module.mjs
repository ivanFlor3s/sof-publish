import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
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
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
            }
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
        {
            provide: APP_INITIALIZER,
            useFactory: initializeKeycloak,
            multi: true,
            deps: [KeycloakService, KeycloakConfigurations]
        },
        KeycloakService
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
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeKeycloak,
                            multi: true,
                            deps: [KeycloakService, KeycloakConfigurations]
                        },
                        KeycloakService
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mLXNoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zb2Ytc2hhcmVkL3NyYy9saWIvc29mLXNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVuRCxhQUFhO0FBQ2IsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMENBQTBDLENBQUM7O0FBRWxGLHlCQUF5QjtBQUN6QixTQUFTLGtCQUFrQixDQUFDLFFBQXlCLEVBQUUsY0FBc0M7SUFDM0YsT0FBTyxHQUFHLEVBQUU7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1osTUFBTSxFQUFFO2dCQUNOLEdBQUcsRUFBRSxVQUFVLGNBQWMsQ0FBQyxFQUFFLElBQUksY0FBYyxDQUFDLElBQUksT0FBTztnQkFDOUQsS0FBSyxFQUFFLGNBQWMsQ0FBQyxLQUFLO2dCQUMzQixRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVE7YUFDbEM7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsTUFBTSxFQUFFLFdBQVc7Z0JBQ25CLHlCQUF5QixFQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRywrQkFBK0I7YUFDM0Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDO0FBc0JELE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQ1osc0JBQThDO1FBRTlDLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs0R0FiVSxlQUFlOzZHQUFmLGVBQWUsaUJBbEJ4QixvQkFBb0IsYUFNcEIsb0JBQW9COzZHQVlYLGVBQWUsYUFWZjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGVBQWU7WUFDeEIsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxzQkFBc0IsQ0FBQztTQUNoRDtRQUNELGVBQWU7S0FDaEIsWUFkUSxFQUVSOzJGQWNVLGVBQWU7a0JBcEIzQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRSxFQUVSO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGtCQUFrQjs0QkFDOUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDO3lCQUNoRDt3QkFDRCxlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2V5Y2xvYWtTZXJ2aWNlIH0gZnJvbSAna2V5Y2xvYWstYW5ndWxhcic7XHJcblxyXG4vL0NvbXBvbmVudGVzXHJcbmltcG9ydCB7IFNvZkRyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NvZi1kcm9wZG93bi9zb2YtZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2V5Y2xvYWtDb25maWd1cmF0aW9ucyB9IGZyb20gJy4vY29uZmlndXJhdGlvbnMva2V5Y2xvYWstY29uZmlndXJhdGlvbnMnO1xyXG5cclxuLy8gQ29uZmlndXJhY2lvbiBLZXljbG9ha1xyXG5mdW5jdGlvbiBpbml0aWFsaXplS2V5Y2xvYWsoa2V5Y2xvYWs6IEtleWNsb2FrU2VydmljZSwgY29uZmlndXJhdGlvbnM6IEtleWNsb2FrQ29uZmlndXJhdGlvbnMpIHtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAga2V5Y2xvYWsuaW5pdCh7XHJcbiAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgIHVybDogYGh0dHA6Ly8ke2NvbmZpZ3VyYXRpb25zLmlwfToke2NvbmZpZ3VyYXRpb25zLnBvcnR9L2F1dGhgLFxyXG4gICAgICAgIHJlYWxtOiBjb25maWd1cmF0aW9ucy5yZWFsbSxcclxuICAgICAgICBjbGllbnRJZDogY29uZmlndXJhdGlvbnMuY2xpZW50SWRcclxuICAgICAgfSxcclxuICAgICAgaW5pdE9wdGlvbnM6IHtcclxuICAgICAgICBvbkxvYWQ6ICdjaGVjay1zc28nLFxyXG4gICAgICAgIHNpbGVudENoZWNrU3NvUmVkaXJlY3RVcmk6XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy9hc3NldHMvc2lsZW50LWNoZWNrLXNzby5odG1sJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU29mRHJvcGRvd25Db21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTb2ZEcm9wZG93bkNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUtleWNsb2FrLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgZGVwczogW0tleWNsb2FrU2VydmljZSwgS2V5Y2xvYWtDb25maWd1cmF0aW9uc11cclxuICAgIH0sXHJcbiAgICBLZXljbG9ha1NlcnZpY2VcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29mU2hhcmVkTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChcclxuICAgIGtleWNsb2FrQ29uZmlndXJhdGlvbnM6IEtleWNsb2FrQ29uZmlndXJhdGlvbnNcclxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNvZlNoYXJlZE1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNvZlNoYXJlZE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogS2V5Y2xvYWtDb25maWd1cmF0aW9ucyxcclxuICAgICAgICAgIHVzZVZhbHVlOiBrZXljbG9ha0NvbmZpZ3VyYXRpb25zLFxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==