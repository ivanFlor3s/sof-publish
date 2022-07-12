import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/menu";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/common";
export class RowOptionsComponent {
    constructor() {
        this.options = [];
    }
    refresh(params) {
        this.params = params;
        return true;
    }
    // gets called once before the renderer is used
    agInit(parameters) {
        this.params = parameters;
        this.options = this.params.menuOptions.filter((opt) => {
            // En el caso de que tenga una condicion, la valido
            if (opt.condicion) {
                // Valido que entre los values de la condicion este el valor del parametro que apunto (compareToParam)
                return (opt.condicion.values.includes(this.params.data[opt.condicion.compareToParam])) ? opt : null;
            }
            // Caso contrario devuelvo la opcion,util para casos en lo que la opcion este presente siempre
            else {
                return opt;
            }
        });
    }
    accionar(opt) {
        if (!!opt.actionFn)
            opt.actionFn(this.params.data);
    }
}
RowOptionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RowOptionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RowOptionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: RowOptionsComponent, selector: "app-row-options", ngImport: i0, template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon  matTooltip=\"Opciones\">\r\n      more_vert\r\n  </mat-icon>\r\n</button>\r\n<div >\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let opt of options\" (click)=\"accionar(opt)\" >{{ opt.option }}</button>\r\n  </mat-menu>\r\n</div>\r\n", styles: [":host{display:flex;height:100%;width:100%}:host mat-icon{margin:auto 0}:host div.options-card{position:relative;z-index:999;background:white;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}\n"], components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i3.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i3.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i4.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RowOptionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-row-options', template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon  matTooltip=\"Opciones\">\r\n      more_vert\r\n  </mat-icon>\r\n</button>\r\n<div >\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let opt of options\" (click)=\"accionar(opt)\" >{{ opt.option }}</button>\r\n  </mat-menu>\r\n</div>\r\n", styles: [":host{display:flex;height:100%;width:100%}:host mat-icon{margin:auto 0}:host div.options-card{position:relative;z-index:999;background:white;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LW9wdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9ncmlkLWNvbnRyb2wvY29tcG9uZW50cy9yb3ctb3B0aW9ucy9yb3ctb3B0aW9ucy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9jb21wb25lbnRzL3Jvdy1vcHRpb25zL3Jvdy1vcHRpb25zLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFVMUMsTUFBTSxPQUFPLG1CQUFtQjtJQU05QjtRQURBLFlBQU8sR0FBeUIsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFZixPQUFPLENBQUMsTUFBMkI7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsK0NBQStDO0lBQy9DLE1BQU0sQ0FBQyxVQUErQjtRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQXdCLEVBQUMsRUFBRTtZQUN2RSxtREFBbUQ7WUFDbkQsSUFBRyxHQUFHLENBQUMsU0FBUyxFQUFDO2dCQUNmLHNHQUFzRztnQkFDdEcsT0FBTyxDQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7YUFDdkc7WUFDRCw4RkFBOEY7aUJBQzFGO2dCQUNGLE9BQU8sR0FBRyxDQUFBO2FBQ1g7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBd0I7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVE7WUFDaEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQVMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2lIQWhDVSxtQkFBbUI7cUdBQW5CLG1CQUFtQix1RENWaEMsNFVBVUE7NEZEQWEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyQW5ndWxhckNvbXAgfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyUGFyYW1zIH0gZnJvbSAnYWctZ3JpZC1jb21tdW5pdHknO1xyXG5pbXBvcnQgeyBNZW51T3B0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb3ctb3B0aW9ucycsXHJcbiAgdGVtcGxhdGVVcmw6Jy4vcm93LW9wdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczpbJy4vcm93LW9wdGlvbnMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm93T3B0aW9uc0NvbXBvbmVudDxUPiBpbXBsZW1lbnRzIElDZWxsUmVuZGVyZXJBbmd1bGFyQ29tcCB7XHJcbiBcclxuICBwdWJsaWMgY2VsbFZhbHVlITogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgcGFyYW1zOiBhbnlcclxuICBvcHRpb25zOiBNZW51T3B0aW9uQ29uZmlnPFQ+W109IFtdXHJcbiAgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gIHJlZnJlc2gocGFyYW1zOiBJQ2VsbFJlbmRlcmVyUGFyYW1zKTogYm9vbGVhbiB7XHJcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcclxuICAgIHJldHVybiB0cnVlICBcclxuICB9XHJcblxyXG4gIC8vIGdldHMgY2FsbGVkIG9uY2UgYmVmb3JlIHRoZSByZW5kZXJlciBpcyB1c2VkXHJcbiAgYWdJbml0KHBhcmFtZXRlcnM6IElDZWxsUmVuZGVyZXJQYXJhbXMpOiB2b2lkIHtcclxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1ldGVycztcclxuICAgIHRoaXMub3B0aW9ucz0gdGhpcy5wYXJhbXMubWVudU9wdGlvbnMuZmlsdGVyKChvcHQ6IE1lbnVPcHRpb25Db25maWc8VD4pPT4ge1xyXG4gICAgICAvLyBFbiBlbCBjYXNvIGRlIHF1ZSB0ZW5nYSB1bmEgY29uZGljaW9uLCBsYSB2YWxpZG9cclxuICAgICAgaWYob3B0LmNvbmRpY2lvbil7XHJcbiAgICAgICAgLy8gVmFsaWRvIHF1ZSBlbnRyZSBsb3MgdmFsdWVzIGRlIGxhIGNvbmRpY2lvbiBlc3RlIGVsIHZhbG9yIGRlbCBwYXJhbWV0cm8gcXVlIGFwdW50byAoY29tcGFyZVRvUGFyYW0pXHJcbiAgICAgICAgcmV0dXJuICggb3B0LmNvbmRpY2lvbi52YWx1ZXMuaW5jbHVkZXMoIHRoaXMucGFyYW1zLmRhdGFbb3B0LmNvbmRpY2lvbi5jb21wYXJlVG9QYXJhbV0pKSA/ICBvcHQgOiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgLy8gQ2FzbyBjb250cmFyaW8gZGV2dWVsdm8gbGEgb3BjaW9uLHV0aWwgcGFyYSBjYXNvcyBlbiBsbyBxdWUgbGEgb3BjaW9uIGVzdGUgcHJlc2VudGUgc2llbXByZVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHJldHVybiBvcHRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFjY2lvbmFyKG9wdDogTWVudU9wdGlvbkNvbmZpZzxUPil7XHJcbiAgICBpZiAoISFvcHQuYWN0aW9uRm4pXHJcbiAgICAgIG9wdC5hY3Rpb25Gbih0aGlzLnBhcmFtcy5kYXRhIGFzIFQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIjxidXR0b24gbWF0LWljb24tYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+XHJcbiAgPG1hdC1pY29uICBtYXRUb29sdGlwPVwiT3BjaW9uZXNcIj5cclxuICAgICAgbW9yZV92ZXJ0XHJcbiAgPC9tYXQtaWNvbj5cclxuPC9idXR0b24+XHJcbjxkaXYgPlxyXG4gIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cclxuICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgb3B0IG9mIG9wdGlvbnNcIiAoY2xpY2spPVwiYWNjaW9uYXIob3B0KVwiID57eyBvcHQub3B0aW9uIH19PC9idXR0b24+XHJcbiAgPC9tYXQtbWVudT5cclxuPC9kaXY+XHJcbiJdfQ==