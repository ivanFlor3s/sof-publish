import { NgModule } from '@angular/core';
import { AlertService } from './services/alert.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import * as i0 from "@angular/core";
import * as i1 from "@sweetalert2/ngx-sweetalert2";
//To implement in style.scss or angular.json
/* @import 'node_modules/sof-ng-controls/assets/alerts/scss/alert.global.scss'; */
export class AlertModule {
    static forRoot(customClass) {
        return {
            ngModule: AlertModule,
            providers: [
                AlertModule,
                {
                    provide: 'customClass',
                    useValue: customClass
                }
            ]
        };
    }
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertModule, imports: [i1.SweetAlert2Module] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertModule, providers: [
        AlertService
    ], imports: [[
            SweetAlert2Module.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        SweetAlert2Module.forRoot()
                    ],
                    declarations: [],
                    providers: [
                        AlertService
                    ],
                    schemas: []
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9hbGVydHMvYWxlcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O0FBR2pFLDRDQUE0QztBQUM1QyxrRkFBa0Y7QUFjbEYsTUFBTSxPQUFPLFdBQVc7SUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBRSxXQUF5QztRQUN2RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1g7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O3dHQVpVLFdBQVc7eUdBQVgsV0FBVzt5R0FBWCxXQUFXLGFBTFg7UUFDVCxZQUFZO0tBQ2IsWUFSUTtZQUNQLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtTQUM1QjsyRkFTVSxXQUFXO2tCQVp2QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7cUJBQzVCO29CQUNELFlBQVksRUFBRSxFQUViO29CQUNELFNBQVMsRUFBRTt3QkFDVCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBQyxFQUFFO2lCQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3dlZXRBbGVydDJNb2R1bGUgfSBmcm9tICdAc3dlZXRhbGVydDIvbmd4LXN3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgQ3VzdG9tQ2xhc3NTd2VldCB9IGZyb20gJy4vbW9kZWxzL2N1c3RvbUNsYXNzU3dlZXQuaW50ZXJmYWNlJztcclxuXHJcbi8vVG8gaW1wbGVtZW50IGluIHN0eWxlLnNjc3Mgb3IgYW5ndWxhci5qc29uXHJcbi8qIEBpbXBvcnQgJ25vZGVfbW9kdWxlcy9zb2YtbmctY29udHJvbHMvYXNzZXRzL2FsZXJ0cy9zY3NzL2FsZXJ0Lmdsb2JhbC5zY3NzJzsgKi9cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgU3dlZXRBbGVydDJNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBBbGVydFNlcnZpY2VcclxuICBdLFxyXG4gIHNjaGVtYXM6W11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0TW9kdWxlIHsgXHJcbiAgc3RhdGljIGZvclJvb3QoIGN1c3RvbUNsYXNzOiBDdXN0b21DbGFzc1N3ZWV0IHwgdW5kZWZpbmVkICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QWxlcnRNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBbGVydE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQWxlcnRNb2R1bGUsIFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICBwcm92aWRlOiAnY3VzdG9tQ2xhc3MnLCBcclxuICAgICAgICAgIHVzZVZhbHVlOiBjdXN0b21DbGFzc1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19