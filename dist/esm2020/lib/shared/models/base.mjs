import { BaseFormFieldComponent } from 'sof-ng-controls';
import { Component, Input, Self } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngx-translate/core";
export class I18nBase extends BaseFormFieldComponent {
    constructor(controlDir, pipeTranslate, _srvTranslatePipe) {
        super(controlDir);
        this.controlDir = controlDir;
        this.pipeTranslate = pipeTranslate;
        this._srvTranslatePipe = _srvTranslatePipe;
    }
    getFbGroup() {
        return this.controlDir.control?.parent || new FormGroup({});
    }
}
I18nBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nBase, deps: [{ token: i1.NgControl, self: true }, { token: i2.TranslatePipe }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nBase.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nBase, selector: "ng-component", inputs: { labelToTranslate: "labelToTranslate", placeholderToTranslate: "placeholderToTranslate" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nBase, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Self
                }] }, { type: i2.TranslatePipe }, { type: i2.TranslateService }]; }, propDecorators: { labelToTranslate: [{
                type: Input
            }], placeholderToTranslate: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9zaGFyZWQvbW9kZWxzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFnQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFPdEQsTUFBTSxPQUFPLFFBQVMsU0FBUSxzQkFBc0I7SUFLbEQsWUFDMEIsVUFBcUIsRUFDbkMsYUFBNEIsRUFDL0IsaUJBQW1DO1FBRTFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUpNLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDbkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUc1QyxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBbUIsSUFBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDOztxR0FmVSxRQUFRO3lGQUFSLFFBQVEsK0tBSFQsRUFBRTsyRkFHRCxRQUFRO2tCQUpwQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOzswQkFRSSxJQUFJO3VHQUpFLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxzQkFBc0I7c0JBQTlCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50LCBUZXh0TWF0ZXJpYWxDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnc29mLW5nLWNvbnRyb2xzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSTE4bkJhc2UgZXh0ZW5kcyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50ICB7XHJcblxyXG4gIEBJbnB1dCgpIGxhYmVsVG9UcmFuc2xhdGUhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJUb1RyYW5zbGF0ZSE6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAU2VsZigpIHB1YmxpYyBvdmVycmlkZSBjb250cm9sRGlyOiBOZ0NvbnRyb2wsIFxyXG4gICAgcHJvdGVjdGVkIHBpcGVUcmFuc2xhdGU6IFRyYW5zbGF0ZVBpcGUsXHJcbiAgICBwdWJsaWMgX3NydlRyYW5zbGF0ZVBpcGU6IFRyYW5zbGF0ZVNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGNvbnRyb2xEaXIpO1xyXG4gIH1cclxuICBcclxuICBnZXRGYkdyb3VwKCk6IEZvcm1Hcm91cCAge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbERpci5jb250cm9sPy5wYXJlbnQgYXMgRm9ybUdyb3VwfHwgbmV3IEZvcm1Hcm91cCh7fSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=