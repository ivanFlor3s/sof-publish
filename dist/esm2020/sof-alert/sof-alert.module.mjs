import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { I18nControlsModule } from '../lib/i18n-controls.module';
import { AlertComponent } from './components/sof-alert/alert.component';
import * as i0 from "@angular/core";
export class SofAlertModule {
}
SofAlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SofAlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SofAlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SofAlertModule, declarations: [AlertComponent], imports: [CommonModule,
        I18nControlsModule,
        TranslateModule,
        MatButtonModule] });
SofAlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SofAlertModule, providers: [], imports: [[
            CommonModule,
            I18nControlsModule,
            TranslateModule,
            MatButtonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SofAlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AlertComponent
                    ],
                    imports: [
                        CommonModule,
                        I18nControlsModule,
                        TranslateModule,
                        MatButtonModule
                    ],
                    providers: []
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mLWFsZXJ0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL3NvZi1hbGVydC9zb2YtYWxlcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQWdCeEUsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFadkIsY0FBYyxhQUdkLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGVBQWU7NEdBTU4sY0FBYyxhQUpkLEVBRVYsWUFSUTtZQUNQLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsZUFBZTtZQUNmLGVBQWU7U0FDaEI7MkZBS1UsY0FBYztrQkFkMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYztxQkFDakI7b0JBQ0MsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGVBQWU7cUJBQ2hCO29CQUNELFNBQVMsRUFBRSxFQUVWO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7IEkxOG5Db250cm9sc01vZHVsZSB9IGZyb20gJy4uL2xpYi9pMThuLWNvbnRyb2xzLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NvZi1hbGVydC9hbGVydC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFsZXJ0Q29tcG9uZW50XHJcbl0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSTE4bkNvbnRyb2xzTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgTWF0QnV0dG9uTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29mQWxlcnRNb2R1bGUge31cclxuIl19