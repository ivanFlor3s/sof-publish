import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Buttons } from '../classes/buttons.class';
import { IconsDefaultConfigs } from '../classes/icons-default-configs.class';
import { AlertComponent } from '../components/sof-alert/alert.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class SofAlertService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    async show(config) {
        return await firstValueFrom(this.dialog.open(AlertComponent, {
            data: config
        }).afterClosed());
    }
    async showConfirmAction(text, textParams, buttonsParams, width) {
        const config = {
            icon: IconsDefaultConfigs.highlightOff,
            text: text,
            textParams: textParams,
            buttons: [Buttons.Cancel.stroked, Buttons.YesAction.raised],
            buttonsParams: buttonsParams,
            width: width ?? '500px'
        };
        return await firstValueFrom(this.dialog.open(AlertComponent, {
            maxWidth: '80vw',
            maxHeight: '80vh',
            data: config
        }).afterClosed());
    }
}
SofAlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SofAlertService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
SofAlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SofAlertService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SofAlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mLWFsZXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pMThuLWNvbnRyb2xzL3NyYy9zb2YtYWxlcnQvc2VydmljZXMvc29mLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7OztBQU96RSxNQUFNLE9BQU8sZUFBZTtJQUUxQixZQUNVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDdkIsQ0FBQztJQUVMLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBbUI7UUFFNUIsT0FBTyxNQUFNLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDM0QsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQVksRUFBRSxVQUFnQixFQUFFLGFBQW1CLEVBQUUsS0FBYztRQUV6RixNQUFNLE1BQU0sR0FBRztZQUNiLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxZQUFZO1lBQ3RDLElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLFVBQVU7WUFDdEIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDM0QsYUFBYSxFQUFFLGFBQWE7WUFDNUIsS0FBSyxFQUFFLEtBQUssSUFBSSxPQUFPO1NBQ1QsQ0FBQztRQUNqQixPQUFPLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMzRCxRQUFRLEVBQUUsTUFBTTtZQUNoQixTQUFTLEVBQUUsTUFBTTtZQUNqQixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7OzRHQTVCVSxlQUFlO2dIQUFmLGVBQWUsY0FGZCxNQUFNOzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBmaXJzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCdXR0b25zIH0gZnJvbSAnLi4vY2xhc3Nlcy9idXR0b25zLmNsYXNzJztcclxuaW1wb3J0IHsgSWNvbnNEZWZhdWx0Q29uZmlncyB9IGZyb20gJy4uL2NsYXNzZXMvaWNvbnMtZGVmYXVsdC1jb25maWdzLmNsYXNzJztcclxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NvZi1hbGVydC9hbGVydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydENvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvYWxlcnQtY29uZmlnLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEFsZXJ0UmVzdWx0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hbGVydC1yZXN1bHQuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvZkFsZXJ0U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xyXG4gICkgeyB9XHJcblxyXG4gIGFzeW5jIHNob3coY29uZmlnOiBBbGVydENvbmZpZyk6IFByb21pc2U8QWxlcnRSZXN1bHQgfCB1bmRlZmluZWQ+XHJcbiAge1xyXG4gICAgcmV0dXJuIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRDb21wb25lbnQsIHtcclxuICAgICAgZGF0YTogY29uZmlnXHJcbiAgICB9KS5hZnRlckNsb3NlZCgpKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNob3dDb25maXJtQWN0aW9uKHRleHQ6IHN0cmluZywgdGV4dFBhcmFtcz86IGFueSwgYnV0dG9uc1BhcmFtcz86IGFueSwgd2lkdGg/OiBzdHJpbmcpOiBQcm9taXNlPEFsZXJ0UmVzdWx0IHwgdW5kZWZpbmVkPlxyXG4gIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgaWNvbjogSWNvbnNEZWZhdWx0Q29uZmlncy5oaWdobGlnaHRPZmYsXHJcbiAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgIHRleHRQYXJhbXM6IHRleHRQYXJhbXMsXHJcbiAgICAgIGJ1dHRvbnM6IFtCdXR0b25zLkNhbmNlbC5zdHJva2VkLCBCdXR0b25zLlllc0FjdGlvbi5yYWlzZWRdLFxyXG4gICAgICBidXR0b25zUGFyYW1zOiBidXR0b25zUGFyYW1zLFxyXG4gICAgICB3aWR0aDogd2lkdGggPz8gJzUwMHB4J1xyXG4gICAgfSBhcyBBbGVydENvbmZpZztcclxuICAgIHJldHVybiBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0Q29tcG9uZW50LCB7XHJcbiAgICAgIG1heFdpZHRoOiAnODB2dycsXHJcbiAgICAgIG1heEhlaWdodDogJzgwdmgnLFxyXG4gICAgICBkYXRhOiBjb25maWdcclxuICAgIH0pLmFmdGVyQ2xvc2VkKCkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19