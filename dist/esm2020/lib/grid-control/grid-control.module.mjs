import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridControlComponent } from './grid-control.component';
import { AgGridModule } from 'ag-grid-angular';
import { RowOptionsComponent } from './components/row-options/row-options.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialControlsModule } from '../material-controls/material-controls.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { BadgeComponent, LuxonDateTimeRendererComponent } from './components';
import { PageSizeComponent } from './components/page-size/page-size.component';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "ag-grid-angular";
export class GridControlModule {
}
GridControlModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridControlModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlModule, declarations: [GridControlComponent,
        RowOptionsComponent,
        BadgeComponent,
        PageSizeComponent,
        LuxonDateTimeRendererComponent], imports: [CommonModule,
        MaterialControlsModule, FormsModule,
        MatIconModule, i1.AgGridModule, MatButtonModule,
        MatMenuModule,
        MatInputModule,
        MatTooltipModule], exports: [GridControlComponent,
        RowOptionsComponent,
        BadgeComponent,
        PageSizeComponent,
        LuxonDateTimeRendererComponent] });
GridControlModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlModule, imports: [[
            CommonModule,
            MaterialControlsModule, FormsModule,
            MatIconModule,
            AgGridModule.withComponents(RowOptionsComponent),
            MatButtonModule,
            MatMenuModule,
            MatInputModule,
            MatTooltipModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GridControlComponent,
                        RowOptionsComponent,
                        BadgeComponent,
                        PageSizeComponent,
                        LuxonDateTimeRendererComponent
                    ],
                    imports: [
                        CommonModule,
                        MaterialControlsModule, FormsModule,
                        MatIconModule,
                        AgGridModule.withComponents(RowOptionsComponent),
                        MatButtonModule,
                        MatMenuModule,
                        MatInputModule,
                        MatTooltipModule
                    ],
                    exports: [
                        GridControlComponent,
                        RowOptionsComponent,
                        BadgeComponent,
                        PageSizeComponent,
                        LuxonDateTimeRendererComponent
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250cm9sLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvZ3JpZC1jb250cm9sL2dyaWQtY29udHJvbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFBO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUE7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFBO0FBQ3BELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQTs7O0FBNkIxRCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBekIxQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsOEJBQThCLGFBRzlCLFlBQVk7UUFDWixzQkFBc0IsRUFBQyxXQUFXO1FBQ2xDLGFBQWEsbUJBRWIsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsZ0JBQWdCLGFBR2hCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQiw4QkFBOEI7K0dBSXJCLGlCQUFpQixZQW5CbkI7WUFDUCxZQUFZO1lBQ1osc0JBQXNCLEVBQUMsV0FBVztZQUNsQyxhQUFhO1lBQ2IsWUFBWSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoRCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxnQkFBZ0I7U0FDakI7MkZBVVUsaUJBQWlCO2tCQTNCN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQiw4QkFBOEI7cUJBQy9CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHNCQUFzQixFQUFDLFdBQVc7d0JBQ2xDLGFBQWE7d0JBQ2IsWUFBWSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDaEQsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQiw4QkFBOEI7cUJBQy9CO2lCQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgR3JpZENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtY29udHJvbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtBZ0dyaWRNb2R1bGV9IGZyb20gJ2FnLWdyaWQtYW5ndWxhcidcclxuaW1wb3J0IHsgUm93T3B0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb3ctb3B0aW9ucy9yb3ctb3B0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdGVyaWFsQ29udHJvbHNNb2R1bGUgfSBmcm9tICcuLi9tYXRlcmlhbC1jb250cm9scy9tYXRlcmlhbC1jb250cm9scy5tb2R1bGUnO1xyXG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJ1xyXG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnXHJcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgQmFkZ2VDb21wb25lbnQsIEx1eG9uRGF0ZVRpbWVSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFBhZ2VTaXplQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2Utc2l6ZS9wYWdlLXNpemUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCdcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBHcmlkQ29udHJvbENvbXBvbmVudCxcclxuICAgIFJvd09wdGlvbnNDb21wb25lbnQsIFxyXG4gICAgQmFkZ2VDb21wb25lbnQsIFxyXG4gICAgUGFnZVNpemVDb21wb25lbnQsIFxyXG4gICAgTHV4b25EYXRlVGltZVJlbmRlcmVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRlcmlhbENvbnRyb2xzTW9kdWxlLEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIEFnR3JpZE1vZHVsZS53aXRoQ29tcG9uZW50cyhSb3dPcHRpb25zQ29tcG9uZW50KSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEdyaWRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUm93T3B0aW9uc0NvbXBvbmVudCwgXHJcbiAgICBCYWRnZUNvbXBvbmVudCwgXHJcbiAgICBQYWdlU2l6ZUNvbXBvbmVudCwgXHJcbiAgICBMdXhvbkRhdGVUaW1lUmVuZGVyZXJDb21wb25lbnRcclxuICBdLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb250cm9sTW9kdWxlIHsgfVxyXG4iXX0=