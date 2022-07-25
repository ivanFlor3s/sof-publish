import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import * as i0 from "@angular/core";
export class LuxonDateTimeRendererComponent {
    constructor() { }
    refresh(params) {
        this.params = params;
        this.setCellValue(this.params);
        return true;
    }
    // gets called once before the renderer is used
    agInit(parameters) {
        this.params = parameters;
        this.setCellValue(this.params);
    }
    setCellValue(params) {
        const config = params.dateTimeConfig;
        if (!params.value)
            this.cellValue = '';
        else if (!!config?.toFormat)
            this.cellValue = params.value.toFormat(config.toFormat, config.opts);
        else if (!!config?.toLocale)
            this.cellValue = params.value.toLocaleString(config.toLocale, config.opts);
        else
            this.cellValue = params.value.toLocaleString(DateTime.DATETIME_SHORT, config?.opts);
    }
}
LuxonDateTimeRendererComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LuxonDateTimeRendererComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LuxonDateTimeRendererComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: LuxonDateTimeRendererComponent, selector: "app-luxon-datetime-renderer", ngImport: i0, template: "{{cellValue}}", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LuxonDateTimeRendererComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-luxon-datetime-renderer', template: "{{cellValue}}", styles: [""] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHV4b24tZGF0ZXRpbWUtcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9ncmlkLWNvbnRyb2wvY29tcG9uZW50cy9sdXhvbi1kYXRldGltZS1yZW5kZXJlci9sdXhvbi1kYXRldGltZS1yZW5kZXJlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2dyaWQtY29udHJvbC9jb21wb25lbnRzL2x1eG9uLWRhdGV0aW1lLXJlbmRlcmVyL2x1eG9uLWRhdGV0aW1lLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQzs7QUFRakMsTUFBTSxPQUFPLDhCQUE4QjtJQUt6QyxnQkFBYyxDQUFDO0lBRWYsT0FBTyxDQUFDLE1BQTJCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELCtDQUErQztJQUMvQyxNQUFNLENBQUMsVUFBK0I7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFXO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxjQUFvQyxDQUFDO1FBRTNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ2pCLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUksTUFBTSxDQUFDLEtBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hGLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUksTUFBTSxDQUFDLEtBQWtCLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUV6RixJQUFJLENBQUMsU0FBUyxHQUFJLE1BQU0sQ0FBQyxLQUFrQixDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RyxDQUFDOzsySEE5QlUsOEJBQThCOytHQUE5Qiw4QkFBOEIsbUVDWDNDLGVBQWE7MkZEV0EsOEJBQThCO2tCQUwxQyxTQUFTOytCQUNFLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyQW5ndWxhckNvbXAgfSBmcm9tICdhZy1ncmlkLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBJQ2VsbFJlbmRlcmVyUGFyYW1zIH0gZnJvbSAnYWctZ3JpZC1jb21tdW5pdHknO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVDZWxsRm9ybWF0LCBNZW51T3B0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sdXhvbi1kYXRldGltZS1yZW5kZXJlcicsXHJcbiAgdGVtcGxhdGVVcmw6Jy4vbHV4b24tZGF0ZXRpbWUtcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczpbJy4vbHV4b24tZGF0ZXRpbWUtcmVuZGVyZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTHV4b25EYXRlVGltZVJlbmRlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgSUNlbGxSZW5kZXJlckFuZ3VsYXJDb21wIHtcclxuIFxyXG4gIHB1YmxpYyBjZWxsVmFsdWUhOiBzdHJpbmc7XHJcbiAgcHVibGljIHBhcmFtczogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcigpe31cclxuXHJcbiAgcmVmcmVzaChwYXJhbXM6IElDZWxsUmVuZGVyZXJQYXJhbXMpOiBib29sZWFuIHtcclxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgdGhpcy5zZXRDZWxsVmFsdWUodGhpcy5wYXJhbXMpO1xyXG4gICAgcmV0dXJuIHRydWUgIFxyXG4gIH1cclxuXHJcbiAgLy8gZ2V0cyBjYWxsZWQgb25jZSBiZWZvcmUgdGhlIHJlbmRlcmVyIGlzIHVzZWRcclxuICBhZ0luaXQocGFyYW1ldGVyczogSUNlbGxSZW5kZXJlclBhcmFtcyk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbWV0ZXJzO1xyXG4gICAgdGhpcy5zZXRDZWxsVmFsdWUodGhpcy5wYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2VsbFZhbHVlKHBhcmFtczogYW55KSB7XHJcbiAgICBjb25zdCBjb25maWcgPSBwYXJhbXMuZGF0ZVRpbWVDb25maWcgYXMgRGF0ZVRpbWVDZWxsRm9ybWF0O1xyXG5cclxuICAgIGlmICghcGFyYW1zLnZhbHVlKSBcclxuICAgICAgdGhpcy5jZWxsVmFsdWUgPSAnJztcclxuICAgIGVsc2UgaWYgKCEhY29uZmlnPy50b0Zvcm1hdClcclxuICAgICAgdGhpcy5jZWxsVmFsdWUgPSAocGFyYW1zLnZhbHVlIGFzIERhdGVUaW1lKS50b0Zvcm1hdChjb25maWcudG9Gb3JtYXQsIGNvbmZpZy5vcHRzKTtcclxuICAgIGVsc2UgaWYgKCEhY29uZmlnPy50b0xvY2FsZSlcclxuICAgICAgdGhpcy5jZWxsVmFsdWUgPSAocGFyYW1zLnZhbHVlIGFzIERhdGVUaW1lKS50b0xvY2FsZVN0cmluZyhjb25maWcudG9Mb2NhbGUsIGNvbmZpZy5vcHRzKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5jZWxsVmFsdWUgPSAocGFyYW1zLnZhbHVlIGFzIERhdGVUaW1lKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFVElNRV9TSE9SVCwgY29uZmlnPy5vcHRzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iLCJ7e2NlbGxWYWx1ZX19Il19