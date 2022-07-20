import { NgModule } from '@angular/core';
import { ControlsComponent } from './controls.component';
import { ErrorsConfigurations } from './validations/configuration/errors-configuration';
import { MaterialControlsModule } from './material-controls/material-controls.module';
import { DynamicFormModule } from './dynamic-form/dyn-form.module';
import { GridControlModule } from './grid-control/grid-control.module';
import { AlertModule } from './alerts/alert.module';
import * as i0 from "@angular/core";
export class ControlsModule {
    static forRoot(libConfiguration, customClass) {
        AlertModule.forRoot(customClass);
        return {
            ngModule: ControlsModule,
            providers: [
                {
                    provide: ErrorsConfigurations,
                    useValue: libConfiguration,
                },
                {
                    provide: 'customClass',
                    useValue: customClass
                }
            ],
        };
    }
}
ControlsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ControlsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsModule, declarations: [ControlsComponent], exports: [ControlsComponent,
        MaterialControlsModule,
        DynamicFormModule,
        GridControlModule,
        AlertModule] });
ControlsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsModule, imports: [[], MaterialControlsModule,
        DynamicFormModule,
        GridControlModule,
        AlertModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ControlsComponent,
                    ],
                    imports: [],
                    exports: [
                        ControlsComponent,
                        MaterialControlsModule,
                        DynamicFormModule,
                        GridControlModule,
                        AlertModule
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jb250cm9scy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQWtCcEQsTUFBTSxPQUFPLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FDWixnQkFBc0MsRUFDdEMsV0FBeUM7UUFFekMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxhQUFhO29CQUN0QixRQUFRLEVBQUUsV0FBVztpQkFDdEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs0R0FuQlUsY0FBYzs2R0FBZCxjQUFjLGlCQVh2QixpQkFBaUIsYUFJakIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLFdBQVc7NkdBR0YsY0FBYyxZQVRoQixFQUFFLEVBR1Qsc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsV0FBVzs0RkFHRixjQUFjO2tCQWIxQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQixpQkFBaUI7d0JBQ2pCLFdBQVc7cUJBQ1o7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sc0NvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JzQ29uZmlndXJhdGlvbnMgfSBmcm9tICcuL3ZhbGlkYXRpb25zL2NvbmZpZ3VyYXRpb24vZXJyb3JzLWNvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbnRyb2xzTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC1jb250cm9scy9tYXRlcmlhbC1jb250cm9scy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEeW5hbWljRm9ybU1vZHVsZSB9IGZyb20gJy4vZHluYW1pYy1mb3JtL2R5bi1mb3JtLm1vZHVsZSc7XHJcbmltcG9ydCB7IEdyaWRDb250cm9sTW9kdWxlIH0gZnJvbSAnLi9ncmlkLWNvbnRyb2wvZ3JpZC1jb250cm9sLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9hbGVydHMvYWxlcnQubW9kdWxlJztcclxuaW1wb3J0IHsgQ3VzdG9tQ2xhc3NTd2VldCB9IGZyb20gJy4vYWxlcnRzL21vZGVscy9jdXN0b21DbGFzc1N3ZWV0LmludGVyZmFjZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDb250cm9sc0NvbXBvbmVudCxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIENvbnRyb2xzQ29tcG9uZW50LFxyXG4gICAgTWF0ZXJpYWxDb250cm9sc01vZHVsZSxcclxuICAgIER5bmFtaWNGb3JtTW9kdWxlLFxyXG4gICAgR3JpZENvbnRyb2xNb2R1bGUsXHJcbiAgICBBbGVydE1vZHVsZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChcclxuICAgIGxpYkNvbmZpZ3VyYXRpb246IEVycm9yc0NvbmZpZ3VyYXRpb25zLFxyXG4gICAgY3VzdG9tQ2xhc3M6IEN1c3RvbUNsYXNzU3dlZXQgfCB1bmRlZmluZWRcclxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbnRyb2xzTW9kdWxlPiB7XHJcbiAgICBBbGVydE1vZHVsZS5mb3JSb290KGN1c3RvbUNsYXNzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb250cm9sc01vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogRXJyb3JzQ29uZmlndXJhdGlvbnMsXHJcbiAgICAgICAgICB1c2VWYWx1ZTogbGliQ29uZmlndXJhdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBwcm92aWRlOiAnY3VzdG9tQ2xhc3MnLCBcclxuICAgICAgICAgIHVzZVZhbHVlOiBjdXN0b21DbGFzc1xyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==