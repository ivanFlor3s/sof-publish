import { Component } from '@angular/core';
import { FileUploadControlComponent } from '../../base/file-upload-control/file-upload-control.component';
import * as i0 from "@angular/core";
import * as i1 from "../error/error.component";
import * as i2 from "@angular/common";
export class FileUploadCustomControlComponent extends FileUploadControlComponent {
}
FileUploadCustomControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: FileUploadCustomControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
FileUploadCustomControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: FileUploadCustomControlComponent, selector: "sof-file-upload-control", usesInheritance: true, ngImport: i0, template: "<label>{{label}}\r\n  {{getDisplayFileInfo()}}\r\n  <button type=\"button\" (click)=\"fileInput.click(); $event.preventDefault()\" *ngIf=\"!value || value.length == 0\">\r\n    Seleccionar Archivo{{!!multiple ? 's' : ''}}\r\n  </button>\r\n  <input #fileInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    type=\"file\"\r\n    [attr.multiple]=\"!!multiple ? true : null\"\r\n    [accept]=\"accept\"\r\n    (change)=\"onInput( !!multiple ? $any($event.target).files : $any($event.target).files[0] )\">\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: ["input[type=file]{opacity:0;width:0px}\n"], components: [{ type: i1.ErrorCustomComponent, selector: "sof-error" }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: FileUploadCustomControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-file-upload-control', template: "<label>{{label}}\r\n  {{getDisplayFileInfo()}}\r\n  <button type=\"button\" (click)=\"fileInput.click(); $event.preventDefault()\" *ngIf=\"!value || value.length == 0\">\r\n    Seleccionar Archivo{{!!multiple ? 's' : ''}}\r\n  </button>\r\n  <input #fileInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    type=\"file\"\r\n    [attr.multiple]=\"!!multiple ? true : null\"\r\n    [accept]=\"accept\"\r\n    (change)=\"onInput( !!multiple ? $any($event.target).files : $any($event.target).files[0] )\">\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: ["input[type=file]{opacity:0;width:0px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtY29udHJvbC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2N1c3RvbS1jb250cm9scy9maWxlLXVwbG9hZC1jb250cm9sL2ZpbGUtdXBsb2FkLWNvbnRyb2wtY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvZmlsZS11cGxvYWQtY29udHJvbC9maWxlLXVwbG9hZC1jb250cm9sLWNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOERBQThELENBQUM7Ozs7QUFPMUcsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLDBCQUEwQjs7NkhBQW5FLGdDQUFnQztpSEFBaEMsZ0NBQWdDLHNGQ1I3Qyw4bkJBY3lEOzJGRE41QyxnQ0FBZ0M7a0JBTDVDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9maWxlLXVwbG9hZC1jb250cm9sL2ZpbGUtdXBsb2FkLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLWZpbGUtdXBsb2FkLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLXVwbG9hZC1jb250cm9sLWNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9maWxlLXVwbG9hZC1jb250cm9sLWNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkQ3VzdG9tQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEZpbGVVcGxvYWRDb250cm9sQ29tcG9uZW50ICB7XHJcblxyXG59XHJcbiIsIjxsYWJlbD57e2xhYmVsfX1cclxuICB7e2dldERpc3BsYXlGaWxlSW5mbygpfX1cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZmlsZUlucHV0LmNsaWNrKCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgKm5nSWY9XCIhdmFsdWUgfHwgdmFsdWUubGVuZ3RoID09IDBcIj5cclxuICAgIFNlbGVjY2lvbmFyIEFyY2hpdm97eyEhbXVsdGlwbGUgPyAncycgOiAnJ319XHJcbiAgPC9idXR0b24+XHJcbiAgPGlucHV0ICNmaWxlSW5wdXRcclxuICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgdHlwZT1cImZpbGVcIlxyXG4gICAgW2F0dHIubXVsdGlwbGVdPVwiISFtdWx0aXBsZSA/IHRydWUgOiBudWxsXCJcclxuICAgIFthY2NlcHRdPVwiYWNjZXB0XCJcclxuICAgIChjaGFuZ2UpPVwib25JbnB1dCggISFtdWx0aXBsZSA/ICRhbnkoJGV2ZW50LnRhcmdldCkuZmlsZXMgOiAkYW55KCRldmVudC50YXJnZXQpLmZpbGVzWzBdIClcIj5cclxuPC9sYWJlbD5cclxuPHNvZi1lcnJvciBbbGFiZWxdPVwibGFiZWxcIiBbZXJyb3JzXT1cImVycm9yc1wiPjwvc29mLWVycm9yPiJdfQ==