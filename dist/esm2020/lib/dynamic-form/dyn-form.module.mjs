import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynFormComponent } from './dyn-form/dyn-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialControlsModule } from '../material-controls/material-controls.module';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i0 from "@angular/core";
export class DynamicFormModule {
}
DynamicFormModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DynamicFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DynamicFormModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DynamicFormModule, declarations: [DynFormComponent], imports: [CommonModule,
        ReactiveFormsModule,
        MaterialControlsModule,
        MatButtonModule,
        MatGridListModule], exports: [DynFormComponent] });
DynamicFormModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DynamicFormModule, providers: [], imports: [[
            CommonModule,
            ReactiveFormsModule,
            MaterialControlsModule,
            MatButtonModule,
            MatGridListModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: DynamicFormModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DynFormComponent],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MaterialControlsModule,
                        MatButtonModule,
                        MatGridListModule
                    ],
                    exports: [DynFormComponent],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluLWZvcm0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9keW5hbWljLWZvcm0vZHluLWZvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFjaEUsTUFBTSxPQUFPLGlCQUFpQjs7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLGlCQVhYLGdCQUFnQixhQUUzQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsaUJBQWlCLGFBRVgsZ0JBQWdCOytHQUdqQixpQkFBaUIsYUFGZixFQUFFLFlBUko7WUFDTCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHNCQUFzQjtZQUN0QixlQUFlO1lBQ2YsaUJBQWlCO1NBQ3BCOzJGQUlRLGlCQUFpQjtrQkFaN0IsUUFBUTttQkFBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDaEMsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLGVBQWU7d0JBQ2YsaUJBQWlCO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsU0FBUyxFQUFFLEVBQUU7aUJBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHluRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZHluLWZvcm0vZHluLWZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxDb250cm9sc01vZHVsZSB9IGZyb20gJy4uL21hdGVyaWFsLWNvbnRyb2xzL21hdGVyaWFsLWNvbnRyb2xzLm1vZHVsZSc7XHJcbmltcG9ydCB7IEN1c3RvbUNvbnRyb2xzTW9kdWxlIH0gZnJvbSAnLi4vY3VzdG9tLWNvbnRyb2xzL2N1c3RvbS1jb250cm9scy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xyXG5pbXBvcnQgeyBNYXRHcmlkTGlzdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbRHluRm9ybUNvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbIFxyXG4gICAgICAgIENvbW1vbk1vZHVsZSwgXHJcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgICBNYXRlcmlhbENvbnRyb2xzTW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRHcmlkTGlzdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtEeW5Gb3JtQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybU1vZHVsZSB7fSJdfQ==