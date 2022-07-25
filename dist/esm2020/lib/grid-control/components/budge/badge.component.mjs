import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BadgeComponent {
    refresh(params) {
        return true;
    }
    // gets called once before the renderer is used
    agInit(params) {
        this.params = params;
        const configs = this.params.badgeConfig;
        const conf = configs.find(x => {
            const match = x.condition.values.includes(params.data[x.condition.compareToParam]);
            return match;
        });
        if (conf) {
            this.config = conf;
        }
        else {
            throw Error('No hubo match para encontrar el badge');
        }
    }
}
BadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: BadgeComponent, selector: "app-budge", ngImport: i0, template: "<div class=\"badge-container\">\r\n  <span *ngIf=\"config\" \r\n      class=\"badge-text\" \r\n      [style.background-color]=\"config.badgeColor\"\r\n      [style.color]=\"config.badgeTextColor\"\r\n      >{{config.text}}</span>\r\n</div>\r\n", styles: [".badge-text{padding:4px 16px;border-radius:10px}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-budge', template: "<div class=\"badge-container\">\r\n  <span *ngIf=\"config\" \r\n      class=\"badge-text\" \r\n      [style.background-color]=\"config.badgeColor\"\r\n      [style.color]=\"config.badgeTextColor\"\r\n      >{{config.text}}</span>\r\n</div>\r\n", styles: [".badge-text{padding:4px 16px;border-radius:10px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9ncmlkLWNvbnRyb2wvY29tcG9uZW50cy9idWRnZS9iYWRnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9jb21wb25lbnRzL2J1ZGdlL2JhZGdlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVUxQyxNQUFNLE9BQU8sY0FBYztJQUt6QixPQUFPLENBQUMsTUFBMkI7UUFDakMsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsK0NBQStDO0lBQy9DLE1BQU0sQ0FBQyxNQUEyQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixNQUFNLE9BQU8sR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNuRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUN0QixDQUFDLENBQUMsRUFBRTtZQUNILE1BQU0sS0FBSyxHQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtZQUNqRixPQUFPLEtBQUssQ0FBQTtRQUNkLENBQUMsQ0FBQyxDQUFBO1FBQ0osSUFBSSxJQUFJLEVBQ047WUFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUFDO2FBRXBCO1lBQUMsTUFBTSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtTQUFDO0lBQzFELENBQUM7OzJHQXRCVSxjQUFjOytGQUFkLGNBQWMsaURDVjNCLHFQQU9BOzJGREdhLGNBQWM7a0JBTDFCLFNBQVM7K0JBQ0UsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyQW5ndWxhckNvbXAgfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyUGFyYW1zIH0gZnJvbSAnYWctZ3JpZC1jb21tdW5pdHknO1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYmFkZ2UtY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWJ1ZGdlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmFkZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JhZGdlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgSUNlbGxSZW5kZXJlckFuZ3VsYXJDb21wIHtcclxuXHJcbiAgY29uZmlnOiBCYWRnZVxyXG4gIHBhcmFtczogYW55XHJcblxyXG4gIHJlZnJlc2gocGFyYW1zOiBJQ2VsbFJlbmRlcmVyUGFyYW1zKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHJ1ZSAgXHJcbiAgfVxyXG5cclxuICAvLyBnZXRzIGNhbGxlZCBvbmNlIGJlZm9yZSB0aGUgcmVuZGVyZXIgaXMgdXNlZFxyXG4gIGFnSW5pdChwYXJhbXM6IElDZWxsUmVuZGVyZXJQYXJhbXMpOiB2b2lkIHtcclxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zXHJcbiAgICBjb25zdCBjb25maWdzOiAgQmFkZ2VbXSAgPSB0aGlzLnBhcmFtcy5iYWRnZUNvbmZpZztcclxuICAgIGNvbnN0IGNvbmYgPSBjb25maWdzLmZpbmRcclxuICAgICAgKHggPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID14LmNvbmRpdGlvbi52YWx1ZXMuaW5jbHVkZXMocGFyYW1zLmRhdGFbeC5jb25kaXRpb24uY29tcGFyZVRvUGFyYW1dKSBcclxuICAgICAgICByZXR1cm4gbWF0Y2hcclxuICAgICAgfSlcclxuICAgIGlmIChjb25mKSBcclxuICAgICAge3RoaXMuY29uZmlnID0gY29uZn0gXHJcbiAgICBlbHNlIFxyXG4gICAgICB7dGhyb3cgRXJyb3IoJ05vIGh1Ym8gbWF0Y2ggcGFyYSBlbmNvbnRyYXIgZWwgYmFkZ2UnKX1cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYmFkZ2UtY29udGFpbmVyXCI+XHJcbiAgPHNwYW4gKm5nSWY9XCJjb25maWdcIiBcclxuICAgICAgY2xhc3M9XCJiYWRnZS10ZXh0XCIgXHJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbmZpZy5iYWRnZUNvbG9yXCJcclxuICAgICAgW3N0eWxlLmNvbG9yXT1cImNvbmZpZy5iYWRnZVRleHRDb2xvclwiXHJcbiAgICAgID57e2NvbmZpZy50ZXh0fX08L3NwYW4+XHJcbjwvZGl2PlxyXG4iXX0=