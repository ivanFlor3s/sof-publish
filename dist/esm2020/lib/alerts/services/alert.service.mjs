import { Inject, Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { LinkSweet } from '../models/linkSweet.class';
import * as i0 from "@angular/core";
import * as i1 from "../models/customClassSweet.interface";
export class AlertService {
    constructor(customClass) {
        if (customClass) {
            this.swalWithMatButtonsBasic = Swal.mixin({
                customClass: {
                    confirmButton: customClass.basic
                },
                buttonsStyling: false
            });
            this.swalWithMatButtonsDialog = Swal.mixin({
                customClass: {
                    confirmButton: customClass.dialog.confirmButton,
                    cancelButton: customClass.dialog.cancelButton,
                    denyButton: customClass.dialog.denyButton
                },
                buttonsStyling: false
            });
            this.swalWithMatButtonsConfirm = Swal.mixin({
                customClass: {
                    confirmButton: customClass.confirm.confirmButton,
                    cancelButton: customClass.confirm.cancelButton
                },
                buttonsStyling: false
            });
        }
        else {
            this.swalWithMatButtonsBasic = Swal.mixin({});
            this.swalWithMatButtonsDialog = Swal.mixin({});
            this.swalWithMatButtonsConfirm = Swal.mixin({});
        }
    }
    showBasic(title, text, icon) {
        this.swalWithMatButtonsBasic.fire(title, text, icon);
    }
    showCustom(position, title, text, icon, timer = 2500, showConfirmButton = false, confirmButtonText = 'OK') {
        if (timer) {
            showConfirmButton = false;
            confirmButtonText = '';
        }
        this.swalWithMatButtonsBasic.fire({
            position,
            title,
            text,
            icon,
            timer,
            showConfirmButton,
            confirmButtonText
        });
    }
    showCustomHTML(position, title, html, icon, showCloseButton = true, showCancelButton = true, focusConfirm = false, confirmButtonText, cancelButtonText) {
        if (!showCancelButton)
            cancelButtonText = '';
        this.swalWithMatButtonsConfirm.fire({
            position,
            title,
            html,
            icon,
            showCloseButton,
            showCancelButton,
            focusConfirm,
            confirmButtonText: confirmButtonText ? confirmButtonText : 'OK',
            cancelButtonText: cancelButtonText ? cancelButtonText : 'CANCELAR',
            reverseButtons: true
        });
    }
    showCustomImage(imageUrl, position, title, text, imageWidth = 360, imageHeight = 160, imageAlt = 'Custom image') {
        this.swalWithMatButtonsBasic.fire({
            position,
            title,
            text,
            showConfirmButton: false,
            showCloseButton: true,
            imageUrl,
            imageWidth,
            imageHeight,
            imageAlt
        });
    }
    async showDialog(title, text, confirmButtonText, denyButtonText, cancelButtonText, mode = true) {
        return await this.swalWithMatButtonsDialog.fire({
            title,
            text,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: confirmButtonText ? confirmButtonText : 'OK',
            denyButtonText: denyButtonText ? denyButtonText : 'DENEGAR',
            cancelButtonText: cancelButtonText ? cancelButtonText : 'CANCELAR',
            reverseButtons: mode
        });
    }
    async showConfirm(title, text, icon, confirmButtonText, cancelButtonText) {
        return await this.swalWithMatButtonsConfirm.fire({
            title,
            text,
            icon,
            showCancelButton: true,
            confirmButtonText: confirmButtonText ? confirmButtonText : 'OK',
            cancelButtonText: cancelButtonText ? cancelButtonText : 'CANCELAR',
            reverseButtons: true
        });
    }
    showBasicErrorFooter(title, text, link = '', icon) {
        const footer = link instanceof LinkSweet ? `<a href="${link.redirecTo}" target="_blank">${link.text}</a>` : link;
        this.swalWithMatButtonsBasic.fire({
            icon,
            title,
            text,
            footer
        });
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertService, deps: [{ token: 'customClass' }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.CustomClassSweet, decorators: [{
                    type: Inject,
                    args: ['customClass']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbnRyb2xzL3NyYy9saWIvYWxlcnRzL3NlcnZpY2VzL2FsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxJQUFJLE1BQU0saUNBQWlDLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFPdEQsTUFBTSxPQUFPLFlBQVk7SUFNdkIsWUFBb0MsV0FBOEI7UUFFaEUsSUFBRyxXQUFXLEVBQUM7WUFDYixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDeEMsV0FBVyxFQUFFO29CQUNYLGFBQWEsRUFBRSxXQUFXLENBQUMsS0FBSztpQkFDakM7Z0JBQ0QsY0FBYyxFQUFFLEtBQUs7YUFDdEIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3pDLFdBQVcsRUFBRTtvQkFDWCxhQUFhLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhO29CQUMvQyxZQUFZLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZO29CQUM3QyxVQUFVLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVO2lCQUMxQztnQkFDRCxjQUFjLEVBQUUsS0FBSzthQUN0QixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDMUMsV0FBVyxFQUFFO29CQUNYLGFBQWEsRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWE7b0JBQ2hELFlBQVksRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVk7aUJBQy9DO2dCQUNELGNBQWMsRUFBRSxL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SW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLmpzJztcclxuaW1wb3J0IHsgU3dlZXRBbGVydEljb24sIFN3ZWV0QWxlcnRQb3NpdGlvbiB9IGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgTGlua1N3ZWV0IH0gZnJvbSAnLi4vbW9kZWxzL2xpbmtTd2VldC5jbGFzcyc7XHJcbmltcG9ydCB7IEN1c3RvbUNsYXNzU3dlZXQgfSBmcm9tICcuLi9tb2RlbHMvY3VzdG9tQ2xhc3NTd2VldC5pbnRlcmZhY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0U2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc3dhbFdpdGhNYXRCdXR0b25zQmFzaWMhOiBhbnk7XHJcbiAgcHJpdmF0ZSBzd2FsV2l0aE1hdEJ1dHRvbnNEaWFsb2chOiBhbnk7XHJcbiAgcHJpdmF0ZSBzd2FsV2l0aE1hdEJ1dHRvbnNDb25maXJtITogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvciggQEluamVjdCgnY3VzdG9tQ2xhc3MnKSBjdXN0b21DbGFzcz86IEN1c3RvbUNsYXNzU3dlZXQgKSB7IFxyXG5cclxuICAgIGlmKGN1c3RvbUNsYXNzKXtcclxuICAgICAgdGhpcy5zd2FsV2l0aE1hdEJ1dHRvbnNCYXNpYyA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiBjdXN0b21DbGFzcy5iYXNpY1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB0aGlzLnN3YWxXaXRoTWF0QnV0dG9uc0RpYWxvZyA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiBjdXN0b21DbGFzcy5kaWFsb2cuY29uZmlybUJ1dHRvbixcclxuICAgICAgICAgIGNhbmNlbEJ1dHRvbjogY3VzdG9tQ2xhc3MuZGlhbG9nLmNhbmNlbEJ1dHRvbixcclxuICAgICAgICAgIGRlbnlCdXR0b246IGN1c3RvbUNsYXNzLmRpYWxvZy5kZW55QnV0dG9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHRoaXMuc3dhbFdpdGhNYXRCdXR0b25zQ29uZmlybSA9IFN3YWwubWl4aW4oe1xyXG4gICAgICAgIGN1c3RvbUNsYXNzOiB7XHJcbiAgICAgICAgICBjb25maXJtQnV0dG9uOiBjdXN0b21DbGFzcy5jb25maXJtLmNvbmZpcm1CdXR0b24sXHJcbiAgICAgICAgICBjYW5jZWxCdXR0b246IGN1c3RvbUNsYXNzLmNvbmZpcm0uY2FuY2VsQnV0dG9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zd2FsV2l0aE1hdEJ1dHRvbnNCYXNpYyA9IFN3YWwubWl4aW4oe30pO1xyXG4gICAgICB0aGlzLnN3YWxXaXRoTWF0QnV0dG9uc0RpYWxvZyA9IFN3YWwubWl4aW4oe30pO1xyXG4gICAgICB0aGlzLnN3YWxXaXRoTWF0QnV0dG9uc0NvbmZpcm0gPSBTd2FsLm1peGluKHt9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIHNob3dCYXNpYyggXHJcbiAgICB0aXRsZT86IHN0cmluZywgXHJcbiAgICB0ZXh0Pzogc3RyaW5nLCBcclxuICAgIGljb24/OiBTd2VldEFsZXJ0SWNvbiBcclxuICApe1xyXG5cclxuICAgIHRoaXMuc3dhbFdpdGhNYXRCdXR0b25zQmFzaWMuZmlyZShcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIGljb25cclxuICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd0N1c3RvbSggXHJcbiAgICBwb3NpdGlvbj86IFN3ZWV0QWxlcnRQb3NpdGlvbiwgXHJcbiAgICB0aXRsZT86IHN0cmluZywgXHJcbiAgICB0ZXh0Pzogc3RyaW5nLCBcclxuICAgIGljb24/OiBTd2VldEFsZXJ0SWNvbiwgXHJcbiAgICB0aW1lcjogbnVtYmVyID0gMjUwMCwgXHJcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlLCBcclxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiBzdHJpbmcgPSAnT0snIFxyXG4gICl7XHJcblxyXG4gICAgaWYodGltZXIpe1xyXG4gICAgICBzaG93Q29uZmlybUJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3dhbFdpdGhNYXRCdXR0b25zQmFzaWMuZmlyZSh7XHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGV4dCxcclxuICAgICAgaWNvbixcclxuICAgICAgdGltZXIsXHJcbiAgICAgIHNob3dDb25maXJtQnV0dG9uLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dFxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd0N1c3RvbUhUTUwoIFxyXG4gICAgcG9zaXRpb24/OiBTd2VldEFsZXJ0UG9zaXRpb24sIFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsIFxyXG4gICAgaHRtbD86IHN0cmluZywgXHJcbiAgICBpY29uPzogU3dlZXRBbGVydEljb24sIFxyXG4gICAgc2hvd0Nsb3NlQnV0dG9uOiBib29sZWFuID0gdHJ1ZSxcclxuICAgIHNob3dDYW5jZWxCdXR0b246IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgZm9jdXNDb25maXJtOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICBjb25maXJtQnV0dG9uVGV4dD86IHN0cmluZyxcclxuICAgIGNhbmNlbEJ1dHRvblRleHQ/OiBzdHJpbmdcclxuICApe1xyXG5cclxuICAgIGlmKCFzaG93Q2FuY2VsQnV0dG9uKSBjYW5jZWxCdXR0b25UZXh0ID0gJyc7XHJcblxyXG4gICAgdGhpcy5zd2FsV2l0aE1hdEJ1dHRvbnNDb25maXJtLmZpcmUoe1xyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGh0bWwsXHJcbiAgICAgIGljb24sXHJcbiAgICAgIHNob3dDbG9zZUJ1dHRvbixcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbixcclxuICAgICAgZm9jdXNDb25maXJtLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybUJ1dHRvblRleHQgPyBjb25maXJtQnV0dG9uVGV4dCA6ICdPSycsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbEJ1dHRvblRleHQgPyBjYW5jZWxCdXR0b25UZXh0IDogJ0NBTkNFTEFSJyxcclxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6IHRydWVcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBzaG93Q3VzdG9tSW1hZ2UoIFxyXG4gICAgaW1hZ2VVcmw6IHN0cmluZyxcclxuICAgIHBvc2l0aW9uPzogU3dlZXRBbGVydFBvc2l0aW9uLCBcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgdGV4dD86IHN0cmluZyxcclxuICAgIGltYWdlV2lkdGg6IG51bWJlciA9IDM2MCxcclxuICAgIGltYWdlSGVpZ2h0OiBudW1iZXIgPSAxNjAsXHJcbiAgICBpbWFnZUFsdDogc3RyaW5nID0gJ0N1c3RvbSBpbWFnZScsXHJcbiAgKXtcclxuXHJcbiAgICB0aGlzLnN3YWxXaXRoTWF0QnV0dG9uc0Jhc2ljLmZpcmUoe1xyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIHNob3dDb25maXJtQnV0dG9uOiBmYWxzZSxcclxuICAgICAgc2hvd0Nsb3NlQnV0dG9uOiB0cnVlLFxyXG4gICAgICBpbWFnZVVybCxcclxuICAgICAgaW1hZ2VXaWR0aCxcclxuICAgICAgaW1hZ2VIZWlnaHQsXHJcbiAgICAgIGltYWdlQWx0XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG4gXHJcbiAgYXN5bmMgc2hvd0RpYWxvZyggXHJcbiAgICB0aXRsZT86IHN0cmluZywgXHJcbiAgICB0ZXh0Pzogc3RyaW5nLFxyXG4gICAgY29uZmlybUJ1dHRvblRleHQ/OiBzdHJpbmcsXHJcbiAgICBkZW55QnV0dG9uVGV4dD86IHN0cmluZyxcclxuICAgIGNhbmNlbEJ1dHRvblRleHQ/OiBzdHJpbmcsXHJcbiAgICBtb2RlOiBib29sZWFuID0gdHJ1ZSxcclxuICApOiBQcm9taXNlPGFueT57XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuc3dhbFdpdGhNYXRCdXR0b25zRGlhbG9nLmZpcmUoe1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGV4dCxcclxuICAgICAgc2hvd0RlbnlCdXR0b246IHRydWUsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtQnV0dG9uVGV4dCA/IGNvbmZpcm1CdXR0b25UZXh0IDogJ09LJyxcclxuICAgICAgZGVueUJ1dHRvblRleHQ6IGRlbnlCdXR0b25UZXh0ID8gZGVueUJ1dHRvblRleHQgOiAnREVORUdBUicsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbEJ1dHRvblRleHQgPyBjYW5jZWxCdXR0b25UZXh0IDogJ0NBTkNFTEFSJyxcclxuICAgICAgcmV2ZXJzZUJ1dHRvbnM6IG1vZGVcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIHNob3dDb25maXJtKCBcclxuICAgIHRpdGxlPzogc3RyaW5nLCBcclxuICAgIHRleHQ/OiBzdHJpbmcsXHJcbiAgICBpY29uPzogU3dlZXRBbGVydEljb24sIFxyXG4gICAgY29uZmlybUJ1dHRvblRleHQ/OiBzdHJpbmcsXHJcbiAgICBjYW5jZWxCdXR0b25UZXh0Pzogc3RyaW5nLFxyXG4gICl7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuc3dhbFdpdGhNYXRCdXR0b25zQ29uZmlybS5maXJlKHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRleHQsXHJcbiAgICAgIGljb24sXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtQnV0dG9uVGV4dCA/IGNvbmZpcm1CdXR0b25UZXh0IDogJ09LJyxcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsQnV0dG9uVGV4dCA/IGNhbmNlbEJ1dHRvblRleHQgOiAnQ0FOQ0VMQVInLFxyXG4gICAgICByZXZlcnNlQnV0dG9uczogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgfVxyXG5cclxuICBzaG93QmFzaWNFcnJvckZvb3RlciggXHJcbiAgICB0aXRsZT86IHN0cmluZywgXHJcbiAgICB0ZXh0Pzogc3RyaW5nLCBcclxuICAgIGxpbms6IExpbmtTd2VldCB8IEhUTUxFbGVtZW50IHwgc3RyaW5nID0gJycsIFxyXG4gICAgaWNvbj86IFN3ZWV0QWxlcnRJY29uICBcclxuICApe1xyXG5cclxuICAgIGNvbnN0IGZvb3RlcjogTGlua1N3ZWV0IHwgSFRNTEVsZW1lbnQgfCBzdHJpbmcgPSBcclxuICAgICAgbGluayBpbnN0YW5jZW9mIExpbmtTd2VldCA/IGA8YSBocmVmPVwiJHtsaW5rLnJlZGlyZWNUb31cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke2xpbmsudGV4dH08L2E+YCA6IGxpbms7XHJcblxyXG4gICAgICB0aGlzLnN3YWxXaXRoTWF0QnV0dG9uc0Jhc2ljLmZpcmUoe1xyXG4gICAgICBpY29uLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGV4dCxcclxuICAgICAgZm9vdGVyXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=