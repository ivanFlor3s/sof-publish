import { NgModule } from '@angular/core';
import { GridControlModule } from 'sof-ng-controls';
import { SharedModule } from '../../shared/module/shared.module';
import { I18nBadgeControlComponent, I18nRowOptionsComponent } from './components';
import { I18nGridControlComponent } from './i18n-grid-control.component';
//MATERIALS
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
export class I18GridControlModule {
}
I18GridControlModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18GridControlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18GridControlModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18GridControlModule, declarations: [I18nGridControlComponent,
        I18nBadgeControlComponent,
        I18nRowOptionsComponent], imports: [GridControlModule,
        SharedModule,
        MatButtonModule,
        MatMenuModule,
        MatInputModule,
        MatTooltipModule,
        MatIconModule], exports: [I18nGridControlComponent,
        I18nBadgeControlComponent,
        I18nRowOptionsComponent] });
I18GridControlModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18GridControlModule, providers: [], imports: [[
            GridControlModule,
            SharedModule,
            MatButtonModule,
            MatMenuModule,
            MatInputModule,
            MatTooltipModule,
            MatIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18GridControlModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        GridControlModule,
                        SharedModule,
                        MatButtonModule,
                        MatMenuModule,
                        MatInputModule,
                        MatTooltipModule,
                        MatIconModule
                    ],
                    exports: [
                        I18nGridControlComponent,
                        I18nBadgeControlComponent,
                        I18nRowOptionsComponent,
                    ],
                    declarations: [
                        I18nGridControlComponent,
                        I18nBadgeControlComponent,
                        I18nRowOptionsComponent
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi1ncmlkLWNvbnRyb2wubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaTE4bi1jb250cm9scy9zcmMvbGliL2kxOG4td3JhcHBlci1ncmlkL2kxOG4tZ3JpZC1jb250cm9sL2kxOG4tZ3JpZC1jb250cm9sLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUseUJBQXlCLEVBQUMsdUJBQXVCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFakYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFekUsV0FBVztBQUNYLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQTtBQUN4RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUE7QUFDcEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFBO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUF5QnZELE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFON0Isd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qix1QkFBdUIsYUFoQnZCLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGFBQWEsYUFHYix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHVCQUF1QjtrSEFTZCxvQkFBb0IsYUFGcEIsRUFBRSxZQW5CSjtZQUNQLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osZUFBZTtZQUNmLGFBQWE7WUFDYixjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLGFBQWE7U0FDaEI7MkZBYVksb0JBQW9CO2tCQXRCaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsYUFBYTtxQkFDaEI7b0JBQ0MsT0FBTyxFQUFFO3dCQUNQLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6Qix1QkFBdUI7cUJBQzFCO29CQUNDLFlBQVksRUFBRTt3QkFDWix3QkFBd0I7d0JBQ3hCLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3FCQUMxQjtvQkFDQyxTQUFTLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgR3JpZENvbnRyb2xNb2R1bGUgfSBmcm9tICdzb2YtbmctY29udHJvbHMnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kdWxlL3NoYXJlZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJMThuQmFkZ2VDb250cm9sQ29tcG9uZW50LEkxOG5Sb3dPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzJztcclxuXHJcbmltcG9ydCB7IEkxOG5HcmlkQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vaTE4bi1ncmlkLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcbi8vTUFURVJJQUxTXHJcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nXHJcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSdcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnXHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEdyaWRDb250cm9sTW9kdWxlLCBcclxuICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBNYXRJY29uTW9kdWxlXHJcbl0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgSTE4bkdyaWRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkJhZGdlQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5Sb3dPcHRpb25zQ29tcG9uZW50LFxyXG5dLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSTE4bkdyaWRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgSTE4bkJhZGdlQ29udHJvbENvbXBvbmVudCxcclxuICAgIEkxOG5Sb3dPcHRpb25zQ29tcG9uZW50XHJcbl0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEkxOEdyaWRDb250cm9sTW9kdWxlIHt9XHJcbiJdfQ==