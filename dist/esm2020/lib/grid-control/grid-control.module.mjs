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
import { PaginationComponent } from './components/pagination/pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "ag-grid-angular";
export class GridControlModule {
}
GridControlModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridControlModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlModule, declarations: [GridControlComponent,
        RowOptionsComponent,
        BadgeComponent,
        PageSizeComponent,
        LuxonDateTimeRendererComponent,
        PaginationComponent], imports: [CommonModule,
        MaterialControlsModule, FormsModule,
        MatIconModule, i1.AgGridModule, MatButtonModule,
        MatMenuModule,
        MatInputModule,
        MatTooltipModule,
        MatPaginatorModule], exports: [GridControlComponent,
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
            MatTooltipModule,
            MatPaginatorModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: GridControlModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        GridControlComponent,
                        RowOptionsComponent,
                        BadgeComponent,
                        PageSizeComponent,
                        LuxonDateTimeRendererComponent,
                        PaginationComponent
                    ],
                    imports: [
                        CommonModule,
                        MaterialControlsModule, FormsModule,
                        MatIconModule,
                        AgGridModule.withComponents(RowOptionsComponent),
                        MatButtonModule,
                        MatMenuModule,
                        MatInputModule,
                        MatTooltipModule,
                        MatPaginatorModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1jb250cm9sLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvZ3JpZC1jb250cm9sL2dyaWQtY29udHJvbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFBO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUE7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFBO0FBQ3BELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQTtBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBK0IvRCxNQUFNLE9BQU8saUJBQWlCOzs4R0FBakIsaUJBQWlCOytHQUFqQixpQkFBaUIsaUJBM0IxQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsOEJBQThCO1FBQzlCLG1CQUFtQixhQUduQixZQUFZO1FBQ1osc0JBQXNCLEVBQUMsV0FBVztRQUNsQyxhQUFhLG1CQUViLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixrQkFBa0IsYUFHbEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLDhCQUE4QjsrR0FJckIsaUJBQWlCLFlBcEJuQjtZQUNQLFlBQVk7WUFDWixzQkFBc0IsRUFBQyxXQUFXO1lBQ2xDLGFBQWE7WUFDYixZQUFZLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDO1lBQ2hELGVBQWU7WUFDZixhQUFhO1lBQ2IsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixrQkFBa0I7U0FDbkI7MkZBVVUsaUJBQWlCO2tCQTdCN0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQiw4QkFBOEI7d0JBQzlCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osc0JBQXNCLEVBQUMsV0FBVzt3QkFDbEMsYUFBYTt3QkFDYixZQUFZLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDO3dCQUNoRCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIsOEJBQThCO3FCQUMvQjtpQkFFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEdyaWRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7QWdHcmlkTW9kdWxlfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXInXHJcbmltcG9ydCB7IFJvd09wdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm93LW9wdGlvbnMvcm93LW9wdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRlcmlhbENvbnRyb2xzTW9kdWxlIH0gZnJvbSAnLi4vbWF0ZXJpYWwtY29udHJvbHMvbWF0ZXJpYWwtY29udHJvbHMubW9kdWxlJztcclxuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbidcclxuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51J1xyXG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IEJhZGdlQ29tcG9uZW50LCBMdXhvbkRhdGVUaW1lUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBQYWdlU2l6ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlLXNpemUvcGFnZS1zaXplLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnXHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEdyaWRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUm93T3B0aW9uc0NvbXBvbmVudCwgXHJcbiAgICBCYWRnZUNvbXBvbmVudCwgXHJcbiAgICBQYWdlU2l6ZUNvbXBvbmVudCwgXHJcbiAgICBMdXhvbkRhdGVUaW1lUmVuZGVyZXJDb21wb25lbnQsXHJcbiAgICBQYWdpbmF0aW9uQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBNYXRlcmlhbENvbnRyb2xzTW9kdWxlLEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0SWNvbk1vZHVsZSxcclxuICAgIEFnR3JpZE1vZHVsZS53aXRoQ29tcG9uZW50cyhSb3dPcHRpb25zQ29tcG9uZW50KSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBNYXRJbnB1dE1vZHVsZSxcclxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICBNYXRQYWdpbmF0b3JNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIEdyaWRDb250cm9sQ29tcG9uZW50LFxyXG4gICAgUm93T3B0aW9uc0NvbXBvbmVudCwgXHJcbiAgICBCYWRnZUNvbXBvbmVudCwgXHJcbiAgICBQYWdlU2l6ZUNvbXBvbmVudCwgXHJcbiAgICBMdXhvbkRhdGVUaW1lUmVuZGVyZXJDb21wb25lbnRcclxuICBdLFxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWRDb250cm9sTW9kdWxlIHsgfVxyXG4iXX0=