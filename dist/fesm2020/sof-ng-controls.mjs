import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Optional, Self, Input, Output, ViewChild, Directive, HostListener, NgModule, ViewEncapsulation, Inject } from '@angular/core';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i4$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i1$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$3 from '@angular/material/radio';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import * as i2 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i3 from '@angular/material/core';
import { lastValueFrom, Subscription } from 'rxjs';
import * as i2$1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i2$2 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i2$3 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateTime } from 'luxon';
import * as i2$4 from 'ngx-material-timepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDialogModule } from '@angular/material/dialog';
import * as i2$6 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3$1 from 'ngx-material-file-input';
import { FileInput, MaterialFileInputModule } from 'ngx-material-file-input';
import * as i2$5 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4$2 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import * as i1$4 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i2$7 from '@angular/material/grid-list';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i5 from 'ngx-mask';
import { NgxMaskModule } from 'ngx-mask';
import * as i1$5 from 'ag-grid-angular';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import * as i3$2 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i4$3 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import * as i1$6 from '@sweetalert2/ngx-sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

class ControlsService {
    constructor() { }
}
ControlsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ControlsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ControlsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ControlsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ControlsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ControlsComponent, selector: "lib-controls", ngImport: i0, template: `
    <p>
      controls works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-controls',
                    template: `
    <p>
      controls works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class ErrorsConfigurations {
}

class BaseFormFieldComponent {
    constructor(controlDir) {
        this.controlDir = controlDir;
        // tslint:disable-next-line: no-output-native
        this.change = new EventEmitter();
        this.noLabel = false;
        this.sideLabel = false;
        this.disabled = false;
        this.isRequired = false;
        this.onChange = (value) => { };
        this.onTouch = () => { };
        if (controlDir) {
            controlDir.valueAccessor = this;
        }
    }
    get EsInvalido() {
        return (!!this.controlDir && this.controlDir.touched && this.controlDir.invalid) || false;
    }
    ngDoCheck() {
        if (this.controlDir?.control instanceof FormControl) {
            // check if this field is required or not to display a 'required label'
            const validator = this.controlDir.control.errors;
            this.isRequired =
                Boolean(validator && validator.hasOwnProperty('required')) ||
                    Boolean(validator && validator.hasOwnProperty('selectedCount'));
        }
    }
    get hasErrors() {
        return (this.controlDir?.control &&
            this.controlDir?.control.touched &&
            !!this.controlDir?.control.errors) ?? false;
    }
    get errors() {
        return this.controlDir?.control?.errors ?? null;
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    onBlur() {
        this.onTouch();
    }
    changeValue(value) {
        this.setInputValue(value);
        this.onTouch();
        this.onChange(this.value);
        this.change.emit(this.value);
    }
    setInputValue(value) {
        this.value = value;
    }
}
BaseFormFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BaseFormFieldComponent, deps: [{ token: i1.NgControl, optional: true, self: true }], target: i0.ɵɵFactoryTarget.Component });
BaseFormFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: BaseFormFieldComponent, selector: "ng-component", inputs: { info: "info", description: "description", label: "label", placeholder: "placeholder", maxLength: "maxLength", noLabel: "noLabel", sideLabel: "sideLabel" }, outputs: { change: "change" }, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BaseFormFieldComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }]; }, propDecorators: { info: [{
                type: Input
            }], description: [{
                type: Input
            }], label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], change: [{
                type: Output
            }], noLabel: [{
                type: Input
            }], sideLabel: [{
                type: Input
            }] } });

class TextControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
}
TextControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TextControlComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }] });

const defaultErrorMessages = {
    'required': (label) => 'El campo es requerido',
    'maxlength': (label, error) => `El campo no puede ser mayor a ${error.maxlength}`,
    'minlength': (label, error) => label + ' minLength!! ' + error?.requiredLength,
    'cuit': (label) => 'El campo no tiene el formato correcto',
};

class ErrorComponent {
    constructor(config, cd) {
        this.config = config;
        this.cd = cd;
        this.translateFuncion = (param) => param;
        this.controlInvalido = false;
    }
    set errors(value) {
        this.errorsList = value ? Object.keys(value).map(k => this.resolveErrorMessage(k, value[k])) : null;
    }
    get errors() {
        return this.errorsList;
    }
    ngOnChanges(changes) {
        if (changes['controlInvalido']?.currentValue || !!changes['errors']?.currentValue) {
            this.actualizarErrores();
        }
    }
    resolveErrorMessage(errorName, value) {
        const msg = !!value.customMessage ? value.customMessage
            : this.config[errorName] ? this.config[errorName](this.label, value)
                : defaultErrorMessages[errorName] ? defaultErrorMessages[errorName](this.label, value)
                    : '';
        return msg;
    }
    actualizarErrores() {
        this.errorsList = this.errorsList ? this.errorsList.map(e => this.translateFuncion(e)) : null;
    }
}
ErrorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ErrorComponent, deps: [{ token: ErrorsConfigurations }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
ErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ErrorComponent, selector: "sof-error", inputs: { translateFuncion: "translateFuncion", controlInvalido: "controlInvalido", errors: "errors", label: "label" }, usesOnChanges: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ErrorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sof-error',
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: ErrorsConfigurations }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { translateFuncion: [{
                type: Input
            }], controlInvalido: [{
                type: Input
            }], errors: [{
                type: Input
            }], label: [{
                type: Input
            }] } });

class ErrorMaterialComponent extends ErrorComponent {
}
ErrorMaterialComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ErrorMaterialComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ErrorMaterialComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: ErrorMaterialComponent, selector: "sof-error", usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"controlInvalido\">\r\n    <mat-error *ngFor=\"let error of errorsList\">{{error}}</mat-error>\r\n</ng-container>\r\n", styles: [":host{margin-top:-18px;font-size:12px}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$1.MatError, selector: "mat-error", inputs: ["id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ErrorMaterialComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-error', template: "<ng-container *ngIf=\"controlInvalido\">\r\n    <mat-error *ngFor=\"let error of errorsList\">{{error}}</mat-error>\r\n</ng-container>\r\n", styles: [":host{margin-top:-18px;font-size:12px}\n"] }]
        }] });

class TextMaterialControlComponent extends TextControlComponent {
}
TextMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TextMaterialControlComponent, selector: "sof-text-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      #inputRef=\"matInput\"\r\n      matInput\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    />\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-text-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      #inputRef=\"matInput\"\r\n      matInput\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    />\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class TextAreaControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
}
TextAreaControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextAreaControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextAreaControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TextAreaControlComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextAreaControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }] });

class TextAreaMaterialControlComponent extends TextAreaControlComponent {
    constructor() {
        super(...arguments);
        this.resizeable = false;
        this.rowsArea = 2;
    }
}
TextAreaMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextAreaMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextAreaMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TextAreaMaterialControlComponent, selector: "sof-text-area-control", inputs: { resizeable: "resizeable", rowsArea: "rowsArea" }, viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label [ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'active-label': inputRef.focused,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\">{{label}}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n\r\n    <textarea\r\n      [ngClass]=\"{'no-resizeable':!resizeable}\"\r\n      matInput\r\n      #inputRef=\"matInput\"\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [rows]=\"rowsArea\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    >\r\n    </textarea>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}:host mat-form-field textarea.no-resizeable{resize:none}:host mat-label.side-label{margin-bottom:35px}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TextAreaMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-text-area-control', template: "<mat-label [ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'active-label': inputRef.focused,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\">{{label}}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n\r\n    <textarea\r\n      [ngClass]=\"{'no-resizeable':!resizeable}\"\r\n      matInput\r\n      #inputRef=\"matInput\"\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [rows]=\"rowsArea\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    >\r\n    </textarea>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}:host mat-form-field textarea.no-resizeable{resize:none}:host mat-label.side-label{margin-bottom:35px}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }], resizeable: [{
                type: Input
            }], rowsArea: [{
                type: Input
            }] } });

class NumberControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
}
NumberControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NumberControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NumberControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: NumberControlComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NumberControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }] });

class IntegerInputDirective {
    constructor() {
        this.ignoreSpaces = true;
        this.allowedKeyCodes = [
            13,
            8,
            46,
            9,
            35,
            36,
            37,
            39,
            17, //Ctrl
        ];
    }
    validInputCode(code) {
        return this.allowedKeyCodes.indexOf(code) != -1;
    }
    isPasteEvent(event) {
        return event.ctrlKey && event.key == "v";
    }
    //Can be deleted since keydown is triggered before
    onKeypress(event) {
        const notNumbers = /[^0-9]/;
        if (notNumbers.test(event.key) && !this.validInputCode(event.which ? event.which : event.keyCode) && !this.isPasteEvent(event)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    //Can be deleted since keydown is triggered before
    onKeyup(event) {
        const notNumbers = /[^0-9]/;
        if (notNumbers.test(event.key) && !this.validInputCode(event.which ? event.which : event.keyCode) && !this.isPasteEvent(event)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    onKeydown(event) {
        const notNumbers = /[^0-9]/;
        if (notNumbers.test(event.key) && !this.validInputCode(event.which ? event.which : event.keyCode) && !this.isPasteEvent(event)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    //Can be deleted since keydown is triggered before
    onInput(event) {
        const notNumbers = /[^0-9]/;
        if (notNumbers.test(event.data)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    //Can be deleted since keydown is triggered before
    onIonChange(event) {
        event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '');
    }
    onPaste(event) {
        const notNumbers = /[^0-9]/;
        let input = event.clipboardData.getData('text');
        if (this.ignoreSpaces)
            input = input.replaceAll(' ', '');
        if (notNumbers.test(input)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
    onDrop(event) {
        const notNumbers = /[^0-9]/;
        let input = event.dataTransfer.getData("text");
        if (this.ignoreSpaces)
            input = input.replaceAll(' ', '');
        if (notNumbers.test(input)) {
            event.preventDefault();
            event.stopImmediatePropagation();
            return false;
        }
        return true;
    }
}
IntegerInputDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IntegerInputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IntegerInputDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: IntegerInputDirective, selector: "[IntegerInput]", inputs: { ignoreSpaces: "ignoreSpaces" }, host: { listeners: { "keypress": "onKeypress($event)", "keyup": "onKeyup($event)", "keydown": "onKeydown($event)", "input": "onInput($event)", "ionChange": "onIonChange($event)", "paste": "onPaste($event)", "drop": "onDrop($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IntegerInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[IntegerInput]',
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { ignoreSpaces: [{
                type: Input
            }], onKeypress: [{
                type: HostListener,
                args: ['keypress', ['$event']]
            }], onKeyup: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }], onKeydown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], onInput: [{
                type: HostListener,
                args: ['input', ['$event']]
            }], onIonChange: [{
                type: HostListener,
                args: ['ionChange', ['$event']]
            }], onPaste: [{
                type: HostListener,
                args: ['paste', ['$event']]
            }], onDrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }] } });

class NumberMaterialControlComponent extends NumberControlComponent {
}
NumberMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NumberMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NumberMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: NumberMaterialControlComponent, selector: "sof-number-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n      <input \r\n          matInput\r\n          #inputRef=\"matInput\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"placeholder\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          type=\"text\"\r\n          (input)=\"onInput($any($event.target).value)\"\r\n          IntegerInput\r\n          [maxLength]=\"maxLength ? maxLength : 9999\">\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: IntegerInputDirective, selector: "[IntegerInput]", inputs: ["ignoreSpaces"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NumberMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-number-control', template: "<mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n      <input \r\n          matInput\r\n          #inputRef=\"matInput\"\r\n          class=\"form-control\"\r\n          [placeholder]=\"placeholder\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          type=\"text\"\r\n          (input)=\"onInput($any($event.target).value)\"\r\n          IntegerInput\r\n          [maxLength]=\"maxLength ? maxLength : 9999\">\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class CheckboxControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    normalizeValue(value) {
        if (value === '')
            return false;
        if (typeof value == 'string') {
            value = value == 'true';
        }
        return !!value;
    }
    writeValue(value) {
        this.value = this.normalizeValue(value);
    }
}
CheckboxControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CheckboxControlComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }] });

class CheckboxMaterialControlComponent extends CheckboxControlComponent {
}
CheckboxMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CheckboxMaterialControlComponent, selector: "sof-checkbox-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-checkbox matInput\r\ncolor=\"primary\"\r\n    class=\"form-control\"\r\n    [checked]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"checkbox\"\r\n    (input)=\"onInput($any($event.target).checked)\">\r\n    {{label}}\r\n</mat-checkbox>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [".required-label:after{content:\"*\";color:red}\n"], components: [{ type: i1$2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: ErrorMaterialComponent, selector: "sof-error" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-checkbox-control', template: "<mat-checkbox matInput\r\ncolor=\"primary\"\r\n    class=\"form-control\"\r\n    [checked]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"checkbox\"\r\n    (input)=\"onInput($any($event.target).checked)\">\r\n    {{label}}\r\n</mat-checkbox>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [".required-label:after{content:\"*\";color:red}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class RadioButtonControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.valuePath = 'value';
        this.textPath = 'text';
    }
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
    getValue(item) {
        let val = item;
        const pathArray = this.valuePath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
    getText(item) {
        let val = item;
        const pathArray = this.textPath.split('.');
        // console.log(pathArray)
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
}
RadioButtonControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RadioButtonControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RadioButtonControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: RadioButtonControlComponent, selector: "ng-component", inputs: { list: "list", valuePath: "valuePath", textPath: "textPath" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RadioButtonControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { list: [{
                type: Input
            }], valuePath: [{
                type: Input
            }], textPath: [{
                type: Input
            }] } });

class RadioButtonMaterialControlComponent extends RadioButtonControlComponent {
}
RadioButtonMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RadioButtonMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
RadioButtonMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: RadioButtonMaterialControlComponent, selector: "sof-radio-button-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label [ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\">{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-radio-group style=\"margin-right: 10px;\"\r\n    matInput\r\n    [disabled]=\"disabled\"\r\n    [name]=\"label\" \r\n    [value]=\"value\" \r\n    [ngClass]=\"{'required-label': isRequired}\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [ngClass]=\"{ 'no-label': noLabel }\"\r\n    [ngClass]=\"{ 'side-label': sideLabel }\"\r\n    >\r\n    <mat-radio-button\r\n      *ngFor=\"let item of list; let i=index\"\r\n      [checked]=\"getValue(item) === value\" \r\n      [value]=\"getValue(item)\">\r\n      {{getText(item)}}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{white-space:break-spaces}:host mat-label *{align-self:flex-start}:host sof-error{margin-top:0}:host mat-radio-group{display:flex;justify-content:flex-start;flex-wrap:wrap;gap:22px}:host mat-radio-group:not(.side-label){margin-top:25px}\n"], components: [{ type: i1$3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1$3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RadioButtonMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-radio-button-control', template: "<mat-label [ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\">{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-radio-group style=\"margin-right: 10px;\"\r\n    matInput\r\n    [disabled]=\"disabled\"\r\n    [name]=\"label\" \r\n    [value]=\"value\" \r\n    [ngClass]=\"{'required-label': isRequired}\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [ngClass]=\"{ 'no-label': noLabel }\"\r\n    [ngClass]=\"{ 'side-label': sideLabel }\"\r\n    >\r\n    <mat-radio-button\r\n      *ngFor=\"let item of list; let i=index\"\r\n      [checked]=\"getValue(item) === value\" \r\n      [value]=\"getValue(item)\">\r\n      {{getText(item)}}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{white-space:break-spaces}:host mat-label *{align-self:flex-start}:host sof-error{margin-top:0}:host mat-radio-group{display:flex;justify-content:flex-start;flex-wrap:wrap;gap:22px}:host mat-radio-group:not(.side-label){margin-top:25px}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class SelectControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.valuePath = 'value';
        this.textPath = 'text';
    }
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
    getValue(item) {
        let val = item;
        const pathArray = this.valuePath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
    getText(item) {
        let val = item;
        const pathArray = this.textPath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
}
SelectControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
SelectControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: SelectControlComponent, selector: "ng-component", inputs: { list: "list", valuePath: "valuePath", textPath: "textPath" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { list: [{
                type: Input
            }], valuePath: [{
                type: Input
            }], textPath: [{
                type: Input
            }] } });

class SelectMaterialControlComponent extends SelectControlComponent {
}
SelectMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
SelectMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: SelectMaterialControlComponent, selector: "sof-select-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n<mat-label\r\n[ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'active-label': inputRef.focused,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\"\r\n>{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <mat-select\r\n      matSelect\r\n      #inputRef=\"matSelect\"\r\n      [disabled]=\"disabled\"\r\n      [(value)]=\"value\"\r\n      (selectionChange)=\"onInput($event.value)\"\r\n      [placeholder]=\"placeholder\"> \r\n      <mat-option \r\n        *ngFor=\"let item of list; let i=index\"\r\n        [value]=\"getValue(item)\">\r\n        {{getText(item)}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SelectMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-select-control', template: "\r\n<mat-label\r\n[ngClass]=\"{\r\n  'required-label': isRequired,\r\n  'text-error': EsInvalido,\r\n  'active-label': inputRef.focused,\r\n  'no-label': noLabel,\r\n  'side-label': sideLabel\r\n}\"\r\n>{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <mat-select\r\n      matSelect\r\n      #inputRef=\"matSelect\"\r\n      [disabled]=\"disabled\"\r\n      [(value)]=\"value\"\r\n      (selectionChange)=\"onInput($event.value)\"\r\n      [placeholder]=\"placeholder\"> \r\n      <mat-option \r\n        *ngFor=\"let item of list; let i=index\"\r\n        [value]=\"getValue(item)\">\r\n        {{getText(item)}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class AutocompleteControlComponent extends BaseFormFieldComponent {
    constructor(controlDir, httpClient) {
        super(controlDir);
        this.controlDir = controlDir;
        this.httpClient = httpClient;
        //Delay para filtrar
        this.debounce = 300;
        this.valuePath = 'value';
        this.textPath = 'text';
    }
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
    getValue(item) {
        if (!item)
            return null;
        let val = item;
        const pathArray = this.valuePath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
    getText(item) {
        if (!item)
            return '';
        let val = item;
        const pathArray = this.textPath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
    search(e) {
        if (!!e.inputType || !e.target.value) {
            this.changeValue(null);
            clearTimeout(this.timeoutObj);
            this.timeoutObj = setTimeout(async () => {
                const results = await this.filter(e.target.value);
                this.filteredList = results;
            }, !!this.list ? 0 : this.debounce);
        }
        else
            this.onSelection(e.target.value);
    }
    async filter(filter) {
        if (!filter?.trim())
            return [];
        if (!!this.list)
            return await this.inMemorySearch(filter);
        else if (!!this.filterFn)
            return await this.functionSearch(filter);
        else if (!!this.filterEndPoint)
            return await this.endpointSearch(filter);
        else
            return [];
    }
    async inMemorySearch(filter) {
        const inputArray = filter.split(' ').map(x => x.trim()).filter(x => !!x).map(x => this.normalizeString(x));
        return this.list.filter(x => inputArray.every(f => this.normalizeString(this.getText(x)).includes(f)));
    }
    normalizeString(x) {
        return x.toLowerCase().normalize('NFD'); //.replace(/\p(Diacritic)/gu, "");
    }
    async functionSearch(filter) {
        return this.filterFn(filter);
    }
    async endpointSearch(filter) {
        return await lastValueFrom(this.httpClient.get(`${this.filterEndPoint}${encodeURI(filter.trim())}`));
    }
    onSelection(selectedText) {
        const selected = this.filteredList.find(x => this.getText(x) == selectedText);
        this.changeValue(selected);
    }
}
AutocompleteControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AutocompleteControlComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2$1.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: AutocompleteControlComponent, selector: "ng-component", inputs: { debounce: "debounce", valuePath: "valuePath", textPath: "textPath", list: "list", filterFn: "filterFn", filterEndPoint: "filterEndPoint" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AutocompleteControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i2$1.HttpClient }]; }, propDecorators: { debounce: [{
                type: Input
            }], valuePath: [{
                type: Input
            }], textPath: [{
                type: Input
            }], list: [{
                type: Input
            }], filterFn: [{
                type: Input
            }], filterEndPoint: [{
                type: Input
            }] } });

class AutocompleteMaterialControlComponent extends AutocompleteControlComponent {
}
AutocompleteMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AutocompleteMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutocompleteMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: AutocompleteMaterialControlComponent, selector: "sof-autocomplete-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input type=\"text\"\r\n      #inputRef = matInput\r\n      [placeholder]=\"placeholder\"\r\n      matInput\r\n      [value]=\"getText(value)\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"search($event)\"\r\n      [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSelection($event.option.value)\">\r\n      <mat-option *ngFor=\"let item of filteredList\" [value]=\"getText(item)\">{{getText(item)}}</mat-option>\r\n    </mat-autocomplete>\r\n\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>\r\n\r\n", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2$2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2$2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AutocompleteMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-autocomplete-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input type=\"text\"\r\n      #inputRef = matInput\r\n      [placeholder]=\"placeholder\"\r\n      matInput\r\n      [value]=\"getText(value)\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"search($event)\"\r\n      [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onSelection($event.option.value)\">\r\n      <mat-option *ngFor=\"let item of filteredList\" [value]=\"getText(item)\">{{getText(item)}}</mat-option>\r\n    </mat-autocomplete>\r\n\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>\r\n\r\n", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class DatePickerControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    writeValue(value) {
        this.value = this.normalizeValue(value);
    }
    normalizeValue(value) {
        if (value == '')
            return null;
        if (typeof value == 'string') {
            value = DateTime.fromISO(value);
        }
        return value;
    }
    getDateString(value) {
        return !!value ? `${value.toISODate()}` : '';
    }
}
DatePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DatePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DatePickerControlComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }] });

class DatePickerMaterialControlComponent extends DatePickerControlComponent {
}
DatePickerMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DatePickerMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DatePickerMaterialControlComponent, selector: "sof-date-picker-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n          <input matInput\r\n          #inputRef=\"matInput\"\r\n          class=\"form-control\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          [matDatepicker]=\"picker\"\r\n          (dateChange)=\"onInput($any($event.target).value)\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2$3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { type: i2$3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2$3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i1$1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DatePickerMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-date-picker-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n          <input matInput\r\n          #inputRef=\"matInput\"\r\n          class=\"form-control\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          [matDatepicker]=\"picker\"\r\n          (dateChange)=\"onInput($any($event.target).value)\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class TimePickerControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        // console.log(value)
        this.changeValue(value);
    }
    get Hour() {
        return Number(this.value.split(':')[0] && 0);
    }
    get Minute() {
        return Number(this.value.split(':')[1] && 0);
    }
    getValue() {
        return { hour: this.Hour, minute: this.Minute };
    }
}
TimePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TimePickerControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TimePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TimePickerControlComponent, selector: "ng-component", inputs: { DefaultValue: "DefaultValue" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TimePickerControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { DefaultValue: [{
                type: Input
            }] } });

class TimePickerMaterialControlComponent extends TimePickerControlComponent {
    constructor() {
        super(...arguments);
        this.themes = {
            container: {
                bodyBackgroundColor: '#424242',
            }
        };
        this.format24hs = false;
    }
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    normalizeValue(value) {
        if (!value)
            return null;
        const minutes = Number(value.split(':')[1].substring(0, 2));
        if (value.includes('AM')) {
            // console.log('normaliceAM :>> ', value);
            const hours = Number(value.split(':')[0]);
            value = `${hours}:${minutes}`;
        }
        if (value.includes('PM')) {
            // console.log('normalicePM :>> ', value);
            let hours = Number(value.split(':')[0]) + 12;
            if (hours >= 24) {
                hours -= 24;
            }
            value = `${hours}:${minutes}`;
        }
        return value;
    }
}
TimePickerMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TimePickerMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
TimePickerMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: TimePickerMaterialControlComponent, selector: "sof-time-picker-control", inputs: { format24hs: "format24hs" }, viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    matInput\r\n    #inputRef=\"matInput\"\r\n    [placeholder]=\"placeholder\"\r\n    aria-label=\"12hr format\"\r\n    [ngxTimepicker]=\"picker\"\r\n    [format]=\"format24hs ? 24 : 12\"\r\n    readonly\r\n    [disabled]=\"disabled\"\r\n    [value]=\"value\"\r\n  />\r\n  <ngx-material-timepicker\r\n    #picker\r\n    (timeSet)=\"onInput($event)\"\r\n  ></ngx-material-timepicker>\r\n  </mat-form-field>\r\n\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2$4.NgxMaterialTimepickerComponent, selector: "ngx-material-timepicker", inputs: ["ESC", "hoursOnly", "ngxMaterialTimepickerTheme", "format", "minutesGap", "cancelBtnTmpl", "editableHintTmpl", "confirmBtnTmpl", "enableKeyboardInput", "preventOverlayClick", "disableAnimation", "appendToInput", "defaultTime", "timepickerClass", "theme", "min", "max"], outputs: ["timeSet", "opened", "closed", "hourSelected", "timeChanged"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2$4.TimepickerDirective, selector: "[ngxTimepicker]", inputs: ["format", "value", "min", "max", "ngxTimepicker", "disabled", "disableClick"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: TimePickerMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-time-picker-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    matInput\r\n    #inputRef=\"matInput\"\r\n    [placeholder]=\"placeholder\"\r\n    aria-label=\"12hr format\"\r\n    [ngxTimepicker]=\"picker\"\r\n    [format]=\"format24hs ? 24 : 12\"\r\n    readonly\r\n    [disabled]=\"disabled\"\r\n    [value]=\"value\"\r\n  />\r\n  <ngx-material-timepicker\r\n    #picker\r\n    (timeSet)=\"onInput($event)\"\r\n  ></ngx-material-timepicker>\r\n  </mat-form-field>\r\n\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }], format24hs: [{
                type: Input
            }] } });

class FileUploadControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.multiple = false;
    }
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    writeValue(value) {
        value = this.normalizeValue(value);
        if (value) {
            this.value = value || [];
        }
        else {
            this.value = [];
        }
    }
    normalizeValue(value) {
        if (value instanceof FileList)
            value = Array.from(value);
        return value;
    }
    ;
    getDisplayFileInfo() {
        if (!this.value || this.value.length == 0)
            return '';
        if (!!this.value.length)
            return Array.prototype.map.call(this.value, x => `${x.name}`).join(', ');
        //o Array.from(this.value).map(x => `${x.name}`).join(', ')
        else
            return `${this.value.name}`;
    }
}
FileUploadControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
FileUploadControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FileUploadControlComponent, selector: "ng-component", inputs: { multiple: "multiple", accept: "accept" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { multiple: [{
                type: Input
            }], accept: [{
                type: Input
            }] } });

class DataValidators {
    static cuitValidator(customMessage) {
        return (control) => {
            const value = control.value ? control.value.toString() : null;
            if (value) {
                if (!value.match(/^(23)|(27)|(20)|(30)/)) {
                    return { cuit: { currentValue: value, customMessage } };
                }
            }
            return null;
        };
    }
    static email(customMessage) {
        return (control) => {
            if (!!Validators.email(control))
                return { email: { email: true, customMessage } };
            return null;
        };
    }
}

class DateTimeValidators {
    static maxDate(max, customMessage) {
        return (control) => {
            if (!!control.value && control.value > max)
                return { maxDate: { maxDate: max, customMessage } };
            return null;
        };
    }
    static minDate(min, customMessage) {
        return (control) => {
            if (!!control.value && control.value < min)
                return { minDate: { minDate: min, customMessage } };
            return null;
        };
    }
    static afterOrEqualTo(formFieldName, customMessage) {
        return (control) => {
            const formField = control?.parent?.get(formFieldName);
            if (!!formField && !!formField.value && !!DateTimeValidators.minDate(formField.value)(control))
                return { afterOrEqualTo: { minDate: formField.value, customMessage } };
            return null;
        };
    }
    static beforeOrEqualTo(formFieldName, customMessage) {
        return (control) => {
            const formField = control?.parent?.get(formFieldName);
            if (!!formField && !!formField.value && !!DateTimeValidators.maxDate(formField.value)(control))
                return { beforeOrEqualTo: { maxDate: formField.value, customMessage } };
            return null;
        };
    }
}

class FileValidators {
    static maxFileSize(maxBytes, customMessage) {
        return (control) => {
            if (!!control && !!control.value) {
                if (control.value instanceof Array) {
                    const overSizedFiles = control.value.filter((x) => x.size > maxBytes);
                    console.log('over size files', overSizedFiles);
                    console.log('maxBytes', maxBytes, control.value.map((x) => x.size));
                    if (overSizedFiles.length > 0)
                        return { maxFileSize: { maxFileSize: maxBytes, actualSize: overSizedFiles.map(x => x.size), files: overSizedFiles, customMessage } };
                }
                else if (control.value instanceof File && control.value.size > maxBytes)
                    return { maxFileSize: { maxFileSize: maxBytes, actualSize: control.value.size, files: control.value, customMessage } };
            }
            return null;
        };
    }
    static acceptedFileTypes(fileTypes, customMessage) {
        return (control) => {
            if (!!control && !!control.value) {
                if (control.value instanceof Array) {
                    const wrongTypeFiles = control.value.filter((x) => !fileTypes.some(t => x.type.match(t)));
                    if (!!wrongTypeFiles)
                        return { acceptedFileTypes: { acceptedFileTypes: fileTypes, actualTypes: wrongTypeFiles.map(x => x.type), files: wrongTypeFiles, customMessage } };
                }
                else if (control.value instanceof File && !fileTypes.some(t => control.value.type.match(t)))
                    return { acceptedFileTypes: { acceptedFileTypes: fileTypes, actualTypes: control.value.type, files: control.value, customMessage } };
            }
            return null;
        };
    }
}

class NumberValidators {
    static min(minValue, customMessage) {
        return (control) => {
            if (!!Validators.min(minValue)(control))
                return { min: { min: minValue, customMessage } };
            return null;
        };
    }
    static max(maxValue, customMessage) {
        return (control) => {
            if (!!Validators.max(maxValue)(control))
                return { max: { max: maxValue, customMessage } };
            return null;
        };
    }
    static lessOrEqualTo(formFieldName, customMessage) {
        return (control) => {
            const formField = control?.parent?.get(formFieldName);
            if (!!formField && !!formField.value && !!Validators.max(formField.value)(control))
                return { lessOrEqualTo: { lessOrEqualTo: formField.value, customMessage } };
            return null;
        };
    }
    static moreOrEqualTo(formFieldName, customMessage) {
        return (control) => {
            const formField = control?.parent?.get(formFieldName);
            if (!!formField && !!formField.value && !!Validators.min(formField.value)(control))
                return { moreOrEqualTo: { moreOrEqualTo: formField.value, customMessage } };
            return null;
        };
    }
}

class RequiredValidators {
    static required(customMessage) {
        return (control) => {
            if (!!Validators.required(control))
                return { required: { required: true, customMessage } };
            return null;
        };
    }
    static requiredTrue(customMessage) {
        return (control) => {
            if (!!Validators.requiredTrue(control))
                return { requiredTrue: { requiredTrue: true, customMessage } };
            return null;
        };
    }
    static requiredIfFieldIsEmpty(ifEmptyField, customMessage) {
        return (control) => {
            const emptyField = control.parent?.get(ifEmptyField);
            if (!!emptyField && !emptyField.value && !!Validators.required(control))
                return { requiredIfFieldIsEmpty: { requiredIfFieldIsEmpty: true, customMessage } };
            return null;
        };
    }
    static requiredIfFieldIsIn(formFieldName, values, customMessage) {
        return (control) => {
            const formField = control?.parent?.get(formFieldName);
            if (!!formField && values.find(x => x == formField.value) && !!Validators.required(control))
                return { requiredIfFieldIsIn: { values: values, customMessage } };
            return null;
        };
    }
    static requiredIfFieldIsNotEmpty(ifNotEmptyField, customMessage) {
        return (control) => {
            const emptyField = control.parent?.get(ifNotEmptyField);
            if (!!emptyField && !!emptyField.value && !!Validators.required(control))
                return { requiredIfFieldIsNotEmpty: { requiredIfFieldIsNotEmpty: true, customMessage } };
            return null;
        };
    }
    //https://medium.com/ngx/3-ways-to-implement-conditional-validation-of-reactive-forms-c59ed6fc3325
    static requiredIf(predicate, customMessage) {
        return (control) => {
            if (predicate() && !!Validators.required(control))
                return { requiredIf: { requiredIf: true, customMessage } };
            return null;
        };
    }
    static fieldRequiredIfFieldEmpty(requiredField, ifEmptyField, customMessage) {
        return (formGroup) => {
            const field = formGroup.get(requiredField);
            const emptyField = formGroup.get(ifEmptyField);
            if (!!field && !!emptyField)
                if (!field.value && !emptyField.value) {
                    let errors = field.errors;
                    if (!errors)
                        errors = {};
                    errors['fieldRequiredIfFieldEmpty'] = { fieldRequiredIfFieldEmpty: { fieldRequiredIfFieldEmpty: true, customMessage } };
                    field.setErrors(errors);
                }
                else {
                    let errors = field.errors;
                    if (!!errors && errors.hasOwnProperty('required')) {
                        delete errors['fieldRequiredIfFieldEmpty'];
                        field.setErrors(errors);
                    }
                }
            return null;
        };
    }
}

class TextValidators {
    static minLength(minLength, customMessage) {
        return (control) => {
            if (!!Validators.minLength(minLength)(control))
                return { minLength: { minLength: minLength, customMessage } };
            return null;
        };
    }
    static maxLength(maxLength, customMessage) {
        return (control) => {
            if (!!Validators.maxLength(maxLength)(control))
                return { maxLength: { maxLength: maxLength, customMessage } };
            return null;
        };
    }
    static pattern(pattern, customMessage) {
        return (control) => {
            if (!!Validators.pattern(pattern)(control))
                return { pattern: { pattern: pattern, customMessage } };
            return null;
        };
    }
}

/**
 * Todos los disntintos tipos de validacion
 */
var ValidationTypes;
(function (ValidationTypes) {
    ValidationTypes["Required"] = "required";
    ValidationTypes["Min"] = "min";
    ValidationTypes["Max"] = "max";
    ValidationTypes["Function"] = "function";
    ValidationTypes["MinLength"] = "minLength";
    ValidationTypes["MaxLength"] = "maxLength";
    ValidationTypes["Pattern"] = "pattern";
    ValidationTypes["MinDate"] = "minDate";
    ValidationTypes["MaxDate"] = "maxDate";
    ValidationTypes["AfterOrEqualTo"] = "afterOrEqualTo";
    ValidationTypes["BeforeOrEqualTo"] = "beforeOrEqualTo";
    ValidationTypes["MaxFileSize"] = "maxFileSize";
    ValidationTypes["AcceptedTypes"] = "AcceptedTypes";
    ValidationTypes["Email"] = "email";
    // Cross Field Validations (requires fieldTarget)
    ValidationTypes["RequiredIf"] = "requiredIf";
    ValidationTypes["RequiredIfFieldIsEmpty"] = "requiredIfFieldIsEmpty";
    ValidationTypes["RequiredIfFieldIsNotEmpty"] = "requiredIfFieldIsNotEmpty";
    ValidationTypes["LessOrEqualTo"] = "lessOrEqualTo";
    ValidationTypes["MoreOrEqualTo"] = "moreOrEqualTo";
})(ValidationTypes || (ValidationTypes = {}));

class ValidationsModule {
}
ValidationsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ValidationsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ValidationsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ValidationsModule, imports: [CommonModule] });
ValidationsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ValidationsModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ValidationsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class FileUploadMaterialControlComponent extends FileUploadControlComponent {
    ngOnInit() {
        document.querySelectorAll('ngx-mat-file-input[data-selector="mat-input-file"] input[type="file"]').forEach(e => e.addEventListener('focus', e => {
            document.getElementById('mat-input-file')?.classList.remove('cdk-focused', 'cdk-keyboard-focused', 'mat-form-field-should-float');
            this.Field._changeDetectorRef._cdRefInjectingView[0]?.classList.remove('mat-form-field-should-float');
            this.Field._changeDetectorRef._cdRefInjectingView[0]?.classList.add('mat-form-field-hide-placeholder');
        }));
    }
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
        if (this.multiple && value.length > 0) {
            this.Field._changeDetectorRef._cdRefInjectingView[0].style.display = 'none';
        }
        else if (value && !this.multiple) {
            this.Field._changeDetectorRef._cdRefInjectingView[0].style.display = 'none';
        }
    }
    getMaxSizeValueInValidation(validations) {
        if (validations) {
            return validations.find(x => x.type == ValidationTypes.MaxFileSize)?.value;
        }
        else
            return 0;
    }
    getFileInputFromValue() {
        if (this.value instanceof File)
            return new FileInput([this.value]);
        else
            return new FileInput(this.value);
    }
    getFilesName() {
        const files = this.getFileInputFromValue();
        return files.fileNames ? files.fileNames.split(',') : [];
    }
    deleteItem(key) {
        if (this.multiple) {
            this.value = this.value.filter((f) => f.name != key);
        }
        else {
            this.value = null;
        }
        if (!this.value || this.value.length < 1) {
            this.Field._changeDetectorRef._cdRefInjectingView[0].style.display = 'inline-block';
        }
    }
}
FileUploadMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
FileUploadMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FileUploadMaterialControlComponent, selector: "sof-file-upload-control", inputs: { maxSize: "maxSize" }, viewQueries: [{ propertyName: "Field", first: true, predicate: ["field"], descendants: true }, { propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-form-field  appearance=\"outline\" #field >\r\n  <mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido\r\n  }\">\r\n  <mat-icon matSuffix>attachment</mat-icon>\r\n  {{ label }}\r\n  </mat-label>\r\n\r\n  <ngx-mat-file-input \r\n    data-selector=\"mat-input-file\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [disabled]=\"disabled\"\r\n    type=\"file\"\r\n    [multiple]=\"!!multiple\"\r\n    [value]=\"getFileInputFromValue()\"\r\n    [accept]=\"accept\"\r\n    (change)=\"onInput( !!multiple ? $any($event.target).files : $any($event.target).files[0] )\">\r\n  </ngx-mat-file-input>\r\n\r\n  \r\n</mat-form-field>\r\n\r\n<div  *ngIf=\"getFilesName().length > 0\" class=\"row\">\r\n  <div>\r\n    <mat-chip-list *ngFor=\"let file of getFilesName()\">\r\n      <mat-chip >\r\n        {{ file }}\r\n        <button matChipRemove (click)=\"deleteItem(file)\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </mat-chip>\r\n    </mat-chip-list>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [":host{display:flex;flex-direction:column}:host mat-label{display:flex;justify-content:center;align-items:center;font-size:1rem}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}:host mat-icon{transform:rotate(270deg);font-size:1.5em;margin-right:.5em}:host .row{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2$5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i3$1.FileInputComponent, selector: "ngx-mat-file-input", inputs: ["autofilled", "valuePlaceholder", "accept", "errorStateMatcher", "value", "multiple", "placeholder", "required", "disabled"] }, { type: i4$2.MatChipList, selector: "mat-chip-list", inputs: ["errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1$1.MatSuffix, selector: "[matSuffix]" }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4$2.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i4$2.MatChipRemove, selector: "[matChipRemove]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-file-upload-control', template: "<mat-form-field  appearance=\"outline\" #field >\r\n  <mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido\r\n  }\">\r\n  <mat-icon matSuffix>attachment</mat-icon>\r\n  {{ label }}\r\n  </mat-label>\r\n\r\n  <ngx-mat-file-input \r\n    data-selector=\"mat-input-file\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [disabled]=\"disabled\"\r\n    type=\"file\"\r\n    [multiple]=\"!!multiple\"\r\n    [value]=\"getFileInputFromValue()\"\r\n    [accept]=\"accept\"\r\n    (change)=\"onInput( !!multiple ? $any($event.target).files : $any($event.target).files[0] )\">\r\n  </ngx-mat-file-input>\r\n\r\n  \r\n</mat-form-field>\r\n\r\n<div  *ngIf=\"getFilesName().length > 0\" class=\"row\">\r\n  <div>\r\n    <mat-chip-list *ngFor=\"let file of getFilesName()\">\r\n      <mat-chip >\r\n        {{ file }}\r\n        <button matChipRemove (click)=\"deleteItem(file)\">\r\n          <mat-icon>cancel</mat-icon>\r\n        </button>\r\n      </mat-chip>\r\n    </mat-chip-list>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n", styles: [":host{display:flex;flex-direction:column}:host mat-label{display:flex;justify-content:center;align-items:center;font-size:1rem}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-form-field.error-field div div div.mat-form-field-outline{color:red}:host mat-icon{transform:rotate(270deg);font-size:1.5em;margin-right:.5em}:host .row{width:100%}\n"] }]
        }], propDecorators: { maxSize: [{
                type: Input
            }], Field: [{
                type: ViewChild,
                args: ['field', { static: false }]
            }], errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class PhoneControlComponent extends BaseFormFieldComponent {
    onInput(value) {
        // console.log(value)
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
}
PhoneControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PhoneControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PhoneControlComponent, selector: "ng-component", inputs: { DefaultValue: "DefaultValue" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { DefaultValue: [{
                type: Input
            }] } });

class PhoneMaterialControlComponent extends PhoneControlComponent {
}
PhoneMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PhoneMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PhoneMaterialControlComponent, selector: "sof-phone-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n      <input\r\n          #inputRef=\"matInput\"\r\n          matInput\r\n          class=\"form-control\"\r\n          [placeholder]=\"placeholder\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          type=\"tel\"\r\n          (input)=\"onInput($any($event.target).value)\"\r\n          [maxLength]=\"maxLength ? maxLength : 9999\">\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PhoneMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-phone-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n      <input\r\n          #inputRef=\"matInput\"\r\n          matInput\r\n          class=\"form-control\"\r\n          [placeholder]=\"placeholder\"\r\n          [value]=\"value\"\r\n          [disabled]=\"disabled\"\r\n          type=\"tel\"\r\n          (input)=\"onInput($any($event.target).value)\"\r\n          [maxLength]=\"maxLength ? maxLength : 9999\">\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class PasswordControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.show = false;
        this.showEye = true;
    }
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
}
PasswordControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PasswordControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PasswordControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PasswordControlComponent, selector: "ng-component", inputs: { DefaultValue: "DefaultValue" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PasswordControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { DefaultValue: [{
                type: Input
            }] } });

class PasswordMaterialControlComponent extends PasswordControlComponent {
}
PasswordMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PasswordMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PasswordMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PasswordMaterialControlComponent, selector: "sof-password-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n    <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      matInput\r\n      #inputRef=\"matInput\"\r\n      [type]=\"show ? 'text' : 'password'\"\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    />\r\n\r\n    <mat-icon *ngIf=\"showEye\" matSuffix (click)=\"show = !show\">\r\n      {{ show ? \"visibility_off\" : \"visibility\" }}\r\n    </mat-icon>\r\n  </mat-form-field>\r\n\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2$5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$1.MatSuffix, selector: "[matSuffix]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PasswordMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-password-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'active-label': inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n  >{{ label }}</mat-label\r\n>\r\n<div class=\"input-container\">\r\n    <mat-form-field appearance=\"outline\" \r\n      [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      matInput\r\n      #inputRef=\"matInput\"\r\n      [type]=\"show ? 'text' : 'password'\"\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [maxLength]=\"maxLength ? maxLength : 9999\"\r\n    />\r\n\r\n    <mat-icon *ngIf=\"showEye\" matSuffix (click)=\"show = !show\">\r\n      {{ show ? \"visibility_off\" : \"visibility\" }}\r\n    </mat-icon>\r\n  </mat-form-field>\r\n\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class CardComponent {
    constructor() {
        this.subTitleText = '';
        this.expandable = false;
        this.expanded = true;
        this.onToggleExpand = new EventEmitter();
        this.isSubCard = false;
        this.disabled = false;
    }
    toggleExpand() {
        this.expanded = !this.expanded;
        this.onToggleExpand.emit({ expanded: this.expanded });
    }
}
CardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CardComponent, selector: "sof-card", inputs: { titleText: "titleText", subTitleText: "subTitleText", expandable: "expandable", expanded: "expanded", isSubCard: "isSubCard", disabled: "disabled" }, outputs: { onToggleExpand: "onToggleExpand" }, ngImport: i0, template: "<mat-card [class.collapsed]=\"!expanded || disabled\" [class.mat-sub-card]=\"isSubCard\" [class.mat-elevation-z7]=\"!isSubCard\">\r\n\r\n  <mat-card-title class=\"mat-card-title-content\">\r\n    <ng-content select=\"[header]\" *ngIf=\"(!expandable || expanded) && !disabled\"></ng-content>\r\n    \r\n    <button mat-stroked-button color=\"primary\" aria-label=\"Expandir\" *ngIf=\"expandable\" (click)=\"toggleExpand()\" [disabled]=\"disabled\">\r\n      <mat-icon class=\"material-icons-outlined\">\r\n        {{expanded && !disabled ? 'expand_less' : 'expand_more'}}\r\n      </mat-icon>\r\n    </button>\r\n  </mat-card-title>\r\n\r\n  <mat-card-title>{{titleText}}</mat-card-title>\r\n\r\n  <mat-card-subtitle>{{subTitleText}}</mat-card-subtitle>\r\n\r\n  <div class=\"body\">\r\n    <ng-content select=\"[body]\"></ng-content>\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <ng-content select=\"[footer]\"></ng-content>\r\n  </div>\r\n\r\n</mat-card>", styles: ["mat-card{padding:40px 21px 32px}.mat-card-title-content{display:inline-flex;justify-content:flex-end;float:right;max-height:1.44em;gap:12px}mat-card>.mat-card-title-content{margin-top:-12px}.body{margin:32px 0}mat-card:not(.collapsed)>*:not(mat-card-title){transition:all .5s ease-in-out}mat-card.collapsed>*:not(mat-card-title){height:0px;margin:0;padding:0;overflow:hidden;opacity:0;transition:all .5s ease-in-out}.mat-sub-card{padding:26px 15px 23px}.mat-sub-card>mat-card-title:not(.mat-card-title-content){font-size:1.25em}\n"], components: [{ type: i1$4.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2$6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2$5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1$4.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$4.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-card', template: "<mat-card [class.collapsed]=\"!expanded || disabled\" [class.mat-sub-card]=\"isSubCard\" [class.mat-elevation-z7]=\"!isSubCard\">\r\n\r\n  <mat-card-title class=\"mat-card-title-content\">\r\n    <ng-content select=\"[header]\" *ngIf=\"(!expandable || expanded) && !disabled\"></ng-content>\r\n    \r\n    <button mat-stroked-button color=\"primary\" aria-label=\"Expandir\" *ngIf=\"expandable\" (click)=\"toggleExpand()\" [disabled]=\"disabled\">\r\n      <mat-icon class=\"material-icons-outlined\">\r\n        {{expanded && !disabled ? 'expand_less' : 'expand_more'}}\r\n      </mat-icon>\r\n    </button>\r\n  </mat-card-title>\r\n\r\n  <mat-card-title>{{titleText}}</mat-card-title>\r\n\r\n  <mat-card-subtitle>{{subTitleText}}</mat-card-subtitle>\r\n\r\n  <div class=\"body\">\r\n    <ng-content select=\"[body]\"></ng-content>\r\n  </div>\r\n\r\n  <div class=\"footer\">\r\n    <ng-content select=\"[footer]\"></ng-content>\r\n  </div>\r\n\r\n</mat-card>", styles: ["mat-card{padding:40px 21px 32px}.mat-card-title-content{display:inline-flex;justify-content:flex-end;float:right;max-height:1.44em;gap:12px}mat-card>.mat-card-title-content{margin-top:-12px}.body{margin:32px 0}mat-card:not(.collapsed)>*:not(mat-card-title){transition:all .5s ease-in-out}mat-card.collapsed>*:not(mat-card-title){height:0px;margin:0;padding:0;overflow:hidden;opacity:0;transition:all .5s ease-in-out}.mat-sub-card{padding:26px 15px 23px}.mat-sub-card>mat-card-title:not(.mat-card-title-content){font-size:1.25em}\n"] }]
        }], propDecorators: { titleText: [{
                type: Input
            }], subTitleText: [{
                type: Input
            }], expandable: [{
                type: Input
            }], expanded: [{
                type: Input
            }], onToggleExpand: [{
                type: Output
            }], isSubCard: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class SearchBoxMaterialControlComponent {
    constructor() {
        this.onInput = new EventEmitter();
    }
    onInputEvent(val) {
        this.onInput.emit(val);
    }
    reset(emit = false) {
        this.input.nativeElement.value = '';
        if (emit)
            this.onInput.emit(this.input.nativeElement.value);
    }
}
SearchBoxMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SearchBoxMaterialControlComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchBoxMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: SearchBoxMaterialControlComponent, selector: "sof-search-box-control", inputs: { placeholder: "placeholder", disabled: "disabled" }, outputs: { onInput: "onInput" }, viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }, { propertyName: "input", first: true, predicate: ["input"], descendants: true }], ngImport: i0, template: "<mat-form-field appearance=\"outline\"\r\nclass=\"dense\">\r\n  <span matPrefix>\r\n    <mat-icon aria-hidden=\"false\" aria-label=\"Busqueda\" class=\"material-symbols-outlined\">search</mat-icon>\r\n    &nbsp;\r\n  </span>\r\n  <input\r\n    #input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInputEvent($any($event.target).value)\"\r\n  />\r\n</mat-form-field>", styles: ["mat-form-field.dense{font-size:16px;line-height:0px}mat-form-field.dense .mat-form-field-wrapper{padding-bottom:0;margin:0}mat-form-field.dense .mat-form-field-wrapper .mat-form-field-infix{border-top:.5em solid transparent}mat-form-field.dense.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}mat-form-field.dense .mat-form-field-wrapper .mat-form-field-prefix{top:-.1em}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2$5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1$1.MatPrefix, selector: "[matPrefix]" }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: SearchBoxMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-search-box-control', encapsulation: ViewEncapsulation.None, template: "<mat-form-field appearance=\"outline\"\r\nclass=\"dense\">\r\n  <span matPrefix>\r\n    <mat-icon aria-hidden=\"false\" aria-label=\"Busqueda\" class=\"material-symbols-outlined\">search</mat-icon>\r\n    &nbsp;\r\n  </span>\r\n  <input\r\n    #input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInputEvent($any($event.target).value)\"\r\n  />\r\n</mat-form-field>", styles: ["mat-form-field.dense{font-size:16px;line-height:0px}mat-form-field.dense .mat-form-field-wrapper{padding-bottom:0;margin:0}mat-form-field.dense .mat-form-field-wrapper .mat-form-field-infix{border-top:.5em solid transparent}mat-form-field.dense.mat-form-field-appearance-outline .mat-form-field-infix{padding:.5em 0}mat-form-field.dense .mat-form-field-wrapper .mat-form-field-prefix{top:-.1em}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], onInput: [{
                type: Output
            }], errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }], input: [{
                type: ViewChild,
                args: ['input']
            }] } });

class DenseTextMaterialControlComponent extends TextControlComponent {
}
DenseTextMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DenseTextMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DenseTextMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DenseTextMaterialControlComponent, selector: "sof-dense-text-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\"\r\n    class=\"dense\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [maxLength]=\"maxLength ? maxLength : 9999\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n\r\n", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DenseTextMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-dense-text-control', encapsulation: ViewEncapsulation.None, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<mat-form-field appearance=\"outline\"\r\n    class=\"dense\"\r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n  <input\r\n    #inputRef=\"matInput\"\r\n    matInput\r\n    class=\"form-control\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [disabled]=\"disabled\"\r\n    type=\"text\"\r\n    (input)=\"onInput($any($event.target).value)\"\r\n    [maxLength]=\"maxLength ? maxLength : 9999\"\r\n  />\r\n</mat-form-field>\r\n<sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n\r\n", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class DocControlComponent extends TextControlComponent {
    constructor() {
        super(...arguments);
        this.type = 'DNI';
        this.minLength = new EventEmitter();
    }
    ngOnInit() {
        this.setMask();
    }
    ngOnChanges(changes) {
        if (changes) {
            setTimeout(() => { this.value = null; }, 0);
            this.setMask();
        }
    }
    setMask() {
        switch (this.type) {
            case 'DNI':
                this.customMask = '0.000.000||00.000.000';
                this.minLength.emit(9);
                break;
            case 'CUIL':
                this.customMask = '00-0.000.000-0||00-00.000.000-0';
                this.minLength.emit(14);
                break;
            case 'PASAPORTE':
                this.customMask = 'SSS000';
                this.minLength.emit(6);
                break;
            default:
                this.customMask = '00.000.000||0.000.000';
                this.minLength.emit(9);
                break;
        }
    }
}
DocControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DocControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
DocControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DocControlComponent, selector: "sof-doc-control", inputs: { type: "type" }, outputs: { minLength: "minLength" }, viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      #inputRef=\"matInput\"\r\n      matInput\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [mask]=\"customMask\"\r\n    />\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n  </div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i5.MaskDirective, selector: "input[mask], textarea[mask]", inputs: ["mask", "specialCharacters", "patterns", "prefix", "suffix", "thousandSeparator", "decimalMarker", "dropSpecialCharacters", "hiddenInput", "showMaskTyped", "placeHolderCharacter", "shownMaskExpression", "showTemplate", "clearIfNotMatch", "validation", "separatorLimit", "allowNegativeNumbers", "leadZeroDateTime", "triggerOnMaskChange"], outputs: ["maskFilled"], exportAs: ["mask", "ngxMask"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DocControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-doc-control', template: "<mat-label\r\n  [ngClass]=\"{\r\n    'required-label': isRequired, \r\n    'text-error': EsInvalido,\r\n    'active-label':inputRef.focused,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\"\r\n>{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n  <mat-form-field appearance=\"outline\" \r\n    [ngClass]=\"{ 'error-field': EsInvalido }\">\r\n    <input\r\n      #inputRef=\"matInput\"\r\n      matInput\r\n      class=\"form-control\"\r\n      [placeholder]=\"placeholder\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      type=\"text\"\r\n      (input)=\"onInput($any($event.target).value)\"\r\n      [mask]=\"customMask\"\r\n    />\r\n  </mat-form-field>\r\n  <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n  </div>", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{flex-grow:0}:host mat-label.side-label{margin-bottom:15px}:host *{align-self:center}:host mat-form-field{flex-grow:1}:host .input-container *{width:100%}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }], type: [{
                type: Input
            }], minLength: [{
                type: Output
            }] } });

class CheckboxGroupControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.valuePath = 'value';
        this.textPath = 'text';
    }
    onInput(item, checked) {
        if (!this.value)
            this.value = {};
        this.value[this.getValue(item)] = checked;
        this.changeValue(this.value);
        //Setear el error de IsRequired ya que solo salta con null y '', y no con {}
        //Mantiene el customMessage original
        if (!Object.keys(this.value).some(prop => this.value[prop] == true))
            if (this.controlDir?.control instanceof FormControl)
                if (!!this.controlDir.control.validator) {
                    const validator = this.controlDir.control.validator({});
                    if (!!validator && !!validator["required"])
                        this.controlDir.control.setErrors({ ...this.controlDir.control.errors, required: validator["required"] });
                }
    }
    writeValue(value) {
        if (value) {
            this.value = value || {};
        }
        else {
            this.value = {};
        }
    }
    getChecked(item) {
        return !!this.value ? this.value[this.getValue(item)] : false;
    }
    getValue(item) {
        let val = item;
        const pathArray = this.valuePath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
    getText(item) {
        let val = item;
        const pathArray = this.textPath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
}
CheckboxGroupControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxGroupControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxGroupControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CheckboxGroupControlComponent, selector: "ng-component", inputs: { list: "list", valuePath: "valuePath", textPath: "textPath" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxGroupControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { list: [{
                type: Input
            }], valuePath: [{
                type: Input
            }], textPath: [{
                type: Input
            }] } });

class CheckboxGroupMaterialControlComponent extends CheckboxGroupControlComponent {
}
CheckboxGroupMaterialControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxGroupMaterialControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
CheckboxGroupMaterialControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: CheckboxGroupMaterialControlComponent, selector: "sof-checkbox-group-control", viewQueries: [{ propertyName: "errorControl", first: true, predicate: ErrorMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\">{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n    <div class=\"checkbox-group\"\r\n    [ngClass]=\"{ 'no-label': noLabel }\"\r\n    [ngClass]=\"{ 'side-label': sideLabel }\"\r\n    >\r\n        <mat-checkbox matInput\r\n            *ngFor=\"let item of list; let i=index\"\r\n            color=\"primary\"\r\n            class=\"form-control\"\r\n            [checked]=\"getChecked(item)\"\r\n            [disabled]=\"disabled\"\r\n            type=\"checkbox\"\r\n            (input)=\"onInput(item, $any($event.target).checked)\">\r\n            {{getText(item)}}\r\n        </mat-checkbox>\r\n    </div>\r\n    <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>\r\n", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{white-space:break-spaces}:host mat-label *{align-self:flex-start}:host sof-error{margin-top:0}:host .checkbox-group{display:flex;justify-content:flex-start;flex-wrap:wrap;gap:22px}:host .checkbox-group:not(.side-label){margin-top:25px}\n"], components: [{ type: i1$2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: ErrorMaterialComponent, selector: "sof-error" }], directives: [{ type: i1$1.MatLabel, selector: "mat-label" }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CheckboxGroupMaterialControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-checkbox-group-control', template: "<mat-label [ngClass]=\"{\r\n    'required-label': isRequired,\r\n    'text-error': EsInvalido,\r\n    'no-label': noLabel,\r\n    'side-label': sideLabel\r\n  }\">{{label}}</mat-label>\r\n<div class=\"input-container\">\r\n    <div class=\"checkbox-group\"\r\n    [ngClass]=\"{ 'no-label': noLabel }\"\r\n    [ngClass]=\"{ 'side-label': sideLabel }\"\r\n    >\r\n        <mat-checkbox matInput\r\n            *ngFor=\"let item of list; let i=index\"\r\n            color=\"primary\"\r\n            class=\"form-control\"\r\n            [checked]=\"getChecked(item)\"\r\n            [disabled]=\"disabled\"\r\n            type=\"checkbox\"\r\n            (input)=\"onInput(item, $any($event.target).checked)\">\r\n            {{getText(item)}}\r\n        </mat-checkbox>\r\n    </div>\r\n    <sof-error [controlInvalido]=\"EsInvalido\" [label]=\"label\" [errors]=\"errors\"></sof-error>\r\n</div>\r\n", styles: [":host{display:flex;flex-wrap:wrap}:host mat-label.active-label{color:#673ab7}:host mat-label.text-error{color:red}:host mat-label.required-label:after{content:\"*\";color:red}:host mat-label.no-label{visibility:hidden}:host mat-label.no-label.side-label{display:none}:host mat-label.side-label{margin-right:30px}:host mat-label:not(.side-label){width:100%}:host .input-container{display:flex;flex-direction:column;flex-grow:1}:host mat-label{white-space:break-spaces}:host mat-label *{align-self:flex-start}:host sof-error{margin-top:0}:host .checkbox-group{display:flex;justify-content:flex-start;flex-wrap:wrap;gap:22px}:host .checkbox-group:not(.side-label){margin-top:25px}\n"] }]
        }], propDecorators: { errorControl: [{
                type: ViewChild,
                args: [ErrorMaterialComponent]
            }] } });

class MaterialControlsModule {
}
MaterialControlsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaterialControlsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialControlsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaterialControlsModule, declarations: [TextMaterialControlComponent,
        TextAreaMaterialControlComponent,
        NumberMaterialControlComponent,
        CheckboxMaterialControlComponent,
        RadioButtonMaterialControlComponent,
        SelectMaterialControlComponent,
        AutocompleteMaterialControlComponent,
        TimePickerMaterialControlComponent,
        DatePickerMaterialControlComponent,
        FileUploadMaterialControlComponent,
        ErrorMaterialComponent,
        PhoneMaterialControlComponent,
        PasswordMaterialControlComponent,
        CardComponent,
        SearchBoxMaterialControlComponent,
        DenseTextMaterialControlComponent,
        DocControlComponent,
        IntegerInputDirective,
        CheckboxGroupMaterialControlComponent], imports: [CommonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        MatSelectModule,
        MatAutocompleteModule,
        NgxMaterialTimepickerModule,
        MatDatepickerModule,
        MatButtonModule,
        MatLuxonDateModule,
        MaterialFileInputModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        HttpClientModule,
        MatIconModule,
        MatChipsModule, i5.NgxMaskModule], exports: [TextMaterialControlComponent,
        TextAreaMaterialControlComponent,
        NumberMaterialControlComponent,
        CheckboxMaterialControlComponent,
        RadioButtonMaterialControlComponent,
        SelectMaterialControlComponent,
        AutocompleteMaterialControlComponent,
        TimePickerMaterialControlComponent,
        DatePickerMaterialControlComponent,
        FileUploadMaterialControlComponent,
        PhoneMaterialControlComponent,
        PasswordMaterialControlComponent,
        CardComponent,
        SearchBoxMaterialControlComponent,
        DenseTextMaterialControlComponent,
        DocControlComponent,
        CheckboxGroupMaterialControlComponent,
        ErrorMaterialComponent] });
MaterialControlsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaterialControlsModule, providers: [
        {
            provide: MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'primary' }
        }
    ], imports: [[
            CommonModule,
            MatInputModule,
            MatFormFieldModule,
            FormsModule,
            MatCheckboxModule,
            MatRadioModule,
            MatDialogModule,
            MatSelectModule,
            MatAutocompleteModule,
            NgxMaterialTimepickerModule,
            MatDatepickerModule,
            MatButtonModule,
            MatLuxonDateModule,
            MaterialFileInputModule,
            MatIconModule,
            MatCardModule,
            MatGridListModule,
            HttpClientModule,
            MatIconModule,
            MatChipsModule,
            NgxMaskModule.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaterialControlsModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        {
                            provide: MAT_RADIO_DEFAULT_OPTIONS,
                            useValue: { color: 'primary' }
                        }
                    ],
                    declarations: [
                        TextMaterialControlComponent,
                        TextAreaMaterialControlComponent,
                        NumberMaterialControlComponent,
                        CheckboxMaterialControlComponent,
                        RadioButtonMaterialControlComponent,
                        SelectMaterialControlComponent,
                        AutocompleteMaterialControlComponent,
                        TimePickerMaterialControlComponent,
                        DatePickerMaterialControlComponent,
                        FileUploadMaterialControlComponent,
                        ErrorMaterialComponent,
                        PhoneMaterialControlComponent,
                        PasswordMaterialControlComponent,
                        CardComponent,
                        SearchBoxMaterialControlComponent,
                        DenseTextMaterialControlComponent,
                        DocControlComponent,
                        IntegerInputDirective,
                        CheckboxGroupMaterialControlComponent,
                    ],
                    imports: [
                        CommonModule,
                        MatInputModule,
                        MatFormFieldModule,
                        FormsModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatDialogModule,
                        MatSelectModule,
                        MatAutocompleteModule,
                        NgxMaterialTimepickerModule,
                        MatDatepickerModule,
                        MatButtonModule,
                        MatLuxonDateModule,
                        MaterialFileInputModule,
                        MatIconModule,
                        MatCardModule,
                        MatGridListModule,
                        HttpClientModule,
                        MatIconModule,
                        MatChipsModule,
                        NgxMaskModule.forRoot()
                    ],
                    exports: [
                        TextMaterialControlComponent,
                        TextAreaMaterialControlComponent,
                        NumberMaterialControlComponent,
                        CheckboxMaterialControlComponent,
                        RadioButtonMaterialControlComponent,
                        SelectMaterialControlComponent,
                        AutocompleteMaterialControlComponent,
                        TimePickerMaterialControlComponent,
                        DatePickerMaterialControlComponent,
                        FileUploadMaterialControlComponent,
                        PhoneMaterialControlComponent,
                        PasswordMaterialControlComponent,
                        CardComponent,
                        SearchBoxMaterialControlComponent,
                        DenseTextMaterialControlComponent,
                        DocControlComponent,
                        CheckboxGroupMaterialControlComponent,
                        ErrorMaterialComponent,
                    ]
                }]
        }] });

/**
 * Representa el tipo de una accion
 */
var ActionFormTypes;
(function (ActionFormTypes) {
    ActionFormTypes[ActionFormTypes["Hide"] = 0] = "Hide";
    ActionFormTypes[ActionFormTypes["Show"] = 1] = "Show";
    ActionFormTypes[ActionFormTypes["Reset"] = 2] = "Reset";
    ActionFormTypes[ActionFormTypes["Dissable"] = 3] = "Dissable";
    ActionFormTypes[ActionFormTypes["Enable"] = 4] = "Enable";
    ActionFormTypes[ActionFormTypes["SetValue"] = 5] = "SetValue";
    ActionFormTypes[ActionFormTypes["FillOptions"] = 6] = "FillOptions";
})(ActionFormTypes || (ActionFormTypes = {}));

/**
 * Representa el tipo de campo de un formulario
 */
var FormConfigTypes;
(function (FormConfigTypes) {
    FormConfigTypes["Text"] = "text";
    FormConfigTypes["DenseText"] = "dense-text";
    FormConfigTypes["TextArea"] = "text-area";
    FormConfigTypes["Number"] = "number";
    FormConfigTypes["Checkbox"] = "checkbox";
    FormConfigTypes["Radio"] = "radio";
    FormConfigTypes["Select"] = "select";
    FormConfigTypes["Autocomplete"] = "autocomplete";
    FormConfigTypes["Time"] = "time";
    FormConfigTypes["Date"] = "date";
    FormConfigTypes["File"] = "file";
    FormConfigTypes["Phone"] = "phone";
    FormConfigTypes["Password"] = "password";
    FormConfigTypes["EmptyCol"] = "empty-col";
    FormConfigTypes["CheckboxGroup"] = "checkbox-group";
})(FormConfigTypes || (FormConfigTypes = {}));

class FormularioService {
    constructor(fb, http) {
        this.fb = fb;
        this.http = http;
        console.log('Inicio servicio form');
        this.subs = new Subscription();
    }
    buildFormGroup(fields) {
        const formGroup = this.fb.group({});
        fields.forEach((field) => {
            if (field.type == FormConfigTypes.EmptyCol && field['key']) {
                console.error('Ver FielsConfig en: ', field['key']);
                throw new Error('No se puede poner type:EmptyCol a un control que tiene que formar parte del formulario');
            }
            if (field.type != FormConfigTypes.EmptyCol) {
                formGroup.addControl(field.key, new FormControl({
                    value: field.defaultValue || '',
                    disabled: field.dissabled,
                }));
            }
        });
        fields.forEach((field) => {
            if (field.type != FormConfigTypes.EmptyCol) {
                field = field;
                this.realizarRequestToUrl(formGroup, field);
                const sub = this.procesarAcciones(fields.filter(f => f.type != FormConfigTypes.EmptyCol), field, formGroup);
                if (sub) {
                    this.subs.add(sub);
                }
                this.setValidations(formGroup.get(field.key), field.validations, formGroup);
            }
        });
        return formGroup;
    }
    procesarAcciones(fields, field, form) {
        if (field.action.length == 0)
            return null;
        return form.get(field.key)?.valueChanges.subscribe((newValue) => {
            field.action.forEach((action) => {
                const fieldTarget = this.getFieldTargetFromFields(action.fieldTarget, fields);
                const formControlTarget = form.get(action.fieldTarget);
                if (!formControlTarget)
                    throw new Error('No se encontro el formControl');
                switch (action.type) {
                    case ActionFormTypes.Hide:
                        this.procesarHide(newValue, fieldTarget, action, formControlTarget);
                        break;
                    case ActionFormTypes.Show:
                        this.procesarShow(newValue, fieldTarget, action, formControlTarget);
                        break;
                    case ActionFormTypes.Reset:
                        this.procesarReset(newValue, formControlTarget);
                        break;
                    case ActionFormTypes.Dissable:
                        this.procesarDisable(newValue, formControlTarget, action);
                        break;
                    case ActionFormTypes.Enable:
                        this.procesarEnable(newValue, formControlTarget, action);
                        break;
                    case ActionFormTypes.SetValue:
                        this.procesarSetValue(newValue, formControlTarget, action);
                        break;
                    case ActionFormTypes.FillOptions:
                        this.procesarFillOptions(newValue, formControlTarget, fieldTarget, action);
                        break;
                    default:
                        throw new Error('No se reconoce el type de la accion: ' + action.type);
                }
            });
        });
    }
    realizarRequestToUrl(form, field) {
        if (!field.options?.url) {
            return;
        }
        console.log('consulto en: ' + field.key);
        console.log(field.options.url);
        form.get(field.key).disable();
        this.http.get(field.options?.url).subscribe((res) => {
            field.options.options = res;
            form.get(field.key).enable();
        });
    }
    getFieldTargetFromFields(fieldTarget, fields) {
        const ft = fields.find((x) => x.key == fieldTarget);
        if (!ft)
            throw new Error('No se enctontro el field');
        return ft;
    }
    procesarFillOptions(newValue, formControlTarget, fieldTarget, action) {
        //Rellenar opciones
        //URL https://apis.datos.gob.ar/georef/api/municipios?provincia=tucuman
        formControlTarget.reset('');
        if (action.fillConfig?.url && newValue) {
            formControlTarget.disable();
            this.http
                .get(`${action.fillConfig.url}${newValue}`)
                .subscribe((res) => {
                let val = res;
                const pathArray = action.dataPath.split('.');
                for (const prop of pathArray)
                    val = val[prop];
                fieldTarget.options.options = val;
                formControlTarget.enable();
            });
        }
        else if (!!action.fillConfig?.fillFn) {
            const options = action.fillConfig?.fillFn(newValue);
            if (options instanceof Promise)
                options.then(x => fieldTarget.options.options = x);
            else
                fieldTarget.options.options = options;
        }
        else {
            fieldTarget.options = action.fillConfig?.fillOptionsConfig?.find((x) => x.onValue == newValue)?.optionsConfig;
        }
    }
    procesarHide(newValue, fieldTarget, action, formControlTarget) {
        formControlTarget.reset('');
        fieldTarget.hidden = newValue == action.value;
    }
    procesarShow(newValue, fieldTarget, action, formControlTarget) {
        formControlTarget.reset('');
        fieldTarget.hidden = !(newValue == action.value);
    }
    procesarReset(newValue, formControlTarget) {
        if (formControlTarget?.value != '' && newValue !== '') {
            formControlTarget.reset('');
        }
    }
    procesarDisable(newValue, formControlTarget, action) {
        if (newValue == action.value) {
            formControlTarget.disable();
        }
        else
            formControlTarget.enable();
    }
    procesarEnable(newValue, formControlTarget, action) {
        if (newValue == action.value) {
            formControlTarget.enable();
        }
        else
            formControlTarget.disable();
    }
    procesarSetValue(newValue, formControlTarget, action) {
        if (!action.newValue)
            throw new Error('La accion debe tener un nuevo valor para setear');
        if (newValue == action.value) {
            formControlTarget.setValue(action.newValue);
        }
    }
    ngOnDestroy() {
        console.log('Me caigo a pedazos!!!!');
        this.subs.unsubscribe();
    }
    setValidations(control, validations, f) {
        for (let validation of validations) {
            switch (validation.type) {
                // Single Fields Validations
                case ValidationTypes.Required:
                    this.setRequiredValidation(control, validation.customMessage);
                    break;
                case ValidationTypes.Function:
                    this.setFuncValidation(control, validation.func, validation.customMessage);
                    break;
                case ValidationTypes.Min:
                    this.setMinValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.Max:
                    this.setMaxValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MinLength:
                    this.setMinLengthValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MaxLength:
                    this.setMaxLengthValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.Pattern:
                    this.setPatternValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MinDate:
                    this.setMinDateValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MaxDate:
                    this.setMaxDateValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.MaxFileSize:
                    this.setMaxFileSizeValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.AcceptedTypes:
                    this.setAcceptedTypesValidation(control, validation.value, validation.customMessage);
                    break;
                case ValidationTypes.Email:
                    this.setEmailValidation(control, validation.customMessage);
                    break;
                // Cross Fields Validations
                case ValidationTypes.RequiredIf:
                    this.setRequiredIfValidation(control, validation.conditions, f, validation.customMessage);
                    break;
                case ValidationTypes.RequiredIfFieldIsEmpty:
                    this.setRequiredIfFieldIsEmptyValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.RequiredIfFieldIsNotEmpty:
                    this.setRequiredIfFieldIsNotEmptyValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.LessOrEqualTo:
                    this.setLessOrEqualToValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.MoreOrEqualTo:
                    this.setMoreOrEqualToValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.AfterOrEqualTo:
                    this.setAfterOrEqualToValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
                case ValidationTypes.BeforeOrEqualTo:
                    this.setBeforeOrEqualToValidation(control, validation.fieldTarget, f, validation.customMessage);
                    break;
            }
        }
    }
    // Single Fields Validations
    setRequiredValidation(control, customMessage) {
        control.addValidators(RequiredValidators.required(customMessage));
    }
    setMinValidation(control, minValue, customMessage) {
        if (!minValue) {
            throw new Error('minValue must be declared');
        }
        control.addValidators(NumberValidators.min(minValue, customMessage));
    }
    setMaxValidation(control, maxValue, customMessage) {
        if (!maxValue) {
            throw new Error('maxValue must be declared');
        }
        control.addValidators(NumberValidators.max(maxValue, customMessage));
    }
    setMinLengthValidation(control, minLength, customMessage) {
        if (!minLength) {
            throw new Error('minLength must be declared');
        }
        control.addValidators(TextValidators.minLength(minLength, customMessage));
    }
    setMaxLengthValidation(control, maxLength, customMessage) {
        if (!maxLength) {
            throw new Error('maxLength must be declared');
        }
        control.addValidators(TextValidators.maxLength(maxLength, customMessage));
    }
    setPatternValidation(control, pattern, customMessage) {
        if (!pattern) {
            throw new Error('pattern must be declared');
        }
        control.addValidators(TextValidators.pattern(pattern, customMessage));
    }
    setMinDateValidation(control, minDate, customMessage) {
        if (!minDate) {
            throw new Error('minDate must be declared');
        }
        control.addValidators(DateTimeValidators.minDate(minDate, customMessage));
    }
    setMaxDateValidation(control, maxDate, customMessage) {
        if (!maxDate) {
            throw new Error('maxDate must be declared');
        }
        control.addValidators(DateTimeValidators.minDate(maxDate, customMessage));
    }
    setMaxFileSizeValidation(control, maxSize, customMessage) {
        if (!maxSize) {
            throw new Error('maxSize must be declared');
        }
        control.addValidators(FileValidators.maxFileSize(maxSize, customMessage));
    }
    setAcceptedTypesValidation(control, acceptedTypes, customMessage) {
        if (!acceptedTypes) {
            throw new Error('acceptedTypes must be declared');
        }
        control.addValidators(FileValidators.acceptedFileTypes(acceptedTypes, customMessage));
    }
    setEmailValidation(control, customMessage) {
        control.addValidators(DataValidators.email(customMessage));
    }
    // Cross Fields Validations
    setFuncValidation(control, func, customMessage) {
        if (!func) {
            throw new Error('func must be declared');
        }
        const setError = (error) => {
            control.setErrors(control.errors
                ? { ...control.errors, [error]: { [error]: true, customMessage } }
                : { [error]: { [error]: true, customMessage } });
        };
        control.valueChanges.subscribe((val) => {
            func(val, setError);
        });
    }
    setRequiredIfValidation(control, conditions, f, customMessage) {
        if (!conditions) {
            throw new Error('conditions must be declared');
        }
        for (let condition of conditions) {
            if (!f.get(condition.field)) {
                throw new Error('field not found');
            }
            f.get(condition.field)?.valueChanges.subscribe((val) => {
                if (val == condition.value) {
                    control.addValidators(RequiredValidators.required(customMessage));
                }
                else {
                    control.removeValidators(RequiredValidators.required(customMessage));
                }
            });
        }
    }
    setRequiredIfFieldIsEmptyValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(RequiredValidators.requiredIfFieldIsEmpty(fieldTarget, customMessage));
    }
    setRequiredIfFieldIsNotEmptyValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(RequiredValidators.requiredIfFieldIsNotEmpty(fieldTarget, customMessage));
    }
    setLessOrEqualToValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(NumberValidators.lessOrEqualTo(fieldTarget, customMessage));
    }
    setMoreOrEqualToValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(NumberValidators.moreOrEqualTo(fieldTarget, customMessage));
    }
    setAfterOrEqualToValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(DateTimeValidators.afterOrEqualTo(fieldTarget, customMessage));
    }
    setBeforeOrEqualToValidation(control, fieldTarget, f, customMessage) {
        this.checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f);
        control.addValidators(DateTimeValidators.beforeOrEqualTo(fieldTarget, customMessage));
    }
    checkTargetAndSubscribeToRefreshValidations(control, fieldTarget, f) {
        if (!fieldTarget)
            throw new Error('formControlTarget must be declared');
        const formControlTarget = f.get(fieldTarget);
        if (!formControlTarget)
            throw new Error(`${fieldTarget} formControl not exists`);
        this.subs.add(formControlTarget.valueChanges.subscribe((val) => control.updateValueAndValidity({ emitEvent: false })));
    }
}
FormularioService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormularioService, deps: [{ token: i1.FormBuilder }, { token: i2$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
FormularioService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormularioService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FormularioService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2$1.HttpClient }]; } });

class DynFormComponent {
    constructor(cdRef, fs) {
        this.cdRef = cdRef;
        this.fs = fs;
        this.fieldsP = [];
        this.enum = FormConfigTypes;
        this.cols = 2;
        this.gutterSize = '1em';
        this.rowHeight = '130px';
        this.submitEvent = new EventEmitter();
        this.onChangeEvent = new EventEmitter();
        this.formConfig = {
            formCustomClass: '',
            submitButtonConfig: {
                text: 'SUBMIT',
                color: 'primary',
                hidden: false,
                materialButtonType: 'raised'
            }
        };
    }
    ngOnChanges(changes) {
        if (!!changes['FieldsValues'] && changes['FieldsValues'].previousValue != changes['FieldsValues'].currentValue) {
            this.SetValues();
        }
    }
    get FormValues() {
        return this.forma.value;
    }
    ngOnInit() {
        this.getRowHeight();
    }
    SetValues() {
        if (!!this.forma) {
            if (!!this.FieldsValues)
                Object.keys(this.FieldsValues).forEach(key => {
                    this.forma.get(key)?.setValue(this.FieldsValues[key]);
                });
            else
                this.forma.reset();
        }
    }
    ngAfterViewInit() {
        this.forma = this.fs.buildFormGroup(this.fields);
        console.log(this.forma);
        this.fieldsP = this.fields;
        this.valueChanges = this.forma.valueChanges.subscribe(v => {
            this.onChangeEvent.emit(this.forma.value);
        });
        if (!!this.FieldsValues)
            this.SetValues();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    ngOnDestroy() {
        this.valueChanges.unsubscribe();
        this.fs.ngOnDestroy();
    }
    OnSubmit() {
        console.log(this.forma);
        this.forma.markAllAsTouched();
        this.submitEvent.emit(this.FormValues);
    }
    getRowHeight() {
        var matchesNumber = this.rowHeight.match(/(\d+)/);
        let matchesString = this.rowHeight.replace(/[0-9]/g, '');
        this.rowHeight = (Number(matchesNumber[0]) / 5).toString() + matchesString;
        console.log(this.rowHeight);
        return this.rowHeight;
    }
}
DynFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DynFormComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: FormularioService }], target: i0.ɵɵFactoryTarget.Component });
DynFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: DynFormComponent, selector: "app-dyn-form", inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight", fields: "fields", FieldsValues: "FieldsValues", formConfig: "formConfig" }, outputs: { submitEvent: "submitEvent", onChangeEvent: "onChangeEvent" }, providers: [FormularioService], usesOnChanges: true, ngImport: i0, template: "<div style=\"display: flex\" *ngIf=\"!!forma\">\r\n  <form\r\n    [formGroup]=\"forma\"\r\n    autocomplete=\"off\"\r\n    [class]=\"formConfig.formCustomClass\"\r\n    (ngSubmit)=\"OnSubmit()\"\r\n  >\r\n  <mat-grid-list [rowHeight]=\"rowHeight\" [cols]=\"cols\" [gutterSize]=\"gutterSize\">\r\n\r\n    <ng-container\r\n      *ngFor=\"let field of fields\"\r\n      [class.field-container]=\"field.type != enum.EmptyCol && !field.hidden\"\r\n    >\r\n\r\n    <mat-grid-tile colspan=\"{{  field.cols  }}\" rowspan=\"{{ field.type == enum.EmptyCol && field.subtitle ? 1 : 5 }}\" [class]=\"field.type === enum.EmptyCol && field.subtitle ? 'mh-30px' : ''\">\r\n\r\n      <div *ngIf=\"field.type != enum.EmptyCol && !field.hidden\" class=\"{{'mw-100 mh-100 ' + field.templateOptions.customClass || ''}} \">\r\n        <div [ngSwitch]=\"field.type\">\r\n  \r\n          <div *ngSwitchCase=\"'text'\">\r\n            <sof-text-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-text-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'dense-text'\">\r\n            <sof-dense-text-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-dense-text-control>\r\n          </div>\r\n  \r\n  \r\n          <div *ngSwitchCase=\"'checkbox'\">\r\n            <sof-checkbox-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-checkbox-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'text-area'\">\r\n            <sof-text-area-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [rowsArea]=\"field.templateOptions.rowsArea || 2\"\r\n              [resizeable]=\"field.templateOptions.resizeable || false\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-text-area-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'number'\">\r\n            <sof-number-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-number-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'radio'\">\r\n            <sof-radio-button-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [list]=\"field.options?.options || []\"\r\n              [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n              [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-radio-button-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'select'\">\r\n            <sof-select-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n              [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n              [list]=\"field.options?.options || []\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-select-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'autocomplete'\">\r\n            <sof-autocomplete-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n              [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n              [list]=\"field.options?.options || []\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-autocomplete-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'time'\">\r\n            <sof-time-picker-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [format24hs]=\"true\"\r\n              [formControlName]=\"field.key\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-time-picker-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'date'\">\r\n            <sof-date-picker-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n            ></sof-date-picker-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'phone'\">\r\n            <sof-phone-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-phone-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'file'\">\r\n            <sof-file-upload-control\r\n              #fileControl\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [multiple]=\"!!field.templateOptions.multiple\"\r\n              [maxSize]=\"\r\n                fileControl.getMaxSizeValueInValidation(field.validations)\r\n              \"\r\n            ></sof-file-upload-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'password'\">\r\n            <sof-password-control\r\n              [label]=\"field.templateOptions.label || ''\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-password-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'empty-col'\">\r\n            <div *ngIf=\"field.subtitle\">\r\n              <p>{{ field.subtitle }}</p>\r\n            </div>\r\n          </div>\r\n          \r\n          <div *ngSwitchCase=\"'checkbox-group'\">\r\n            <sof-checkbox-group-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [list]=\"field.options?.options || []\"\r\n              [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n              [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-checkbox-group-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchDefault>\r\n            <h3>Se desconoce el tipo {{ field.type }}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div *ngIf=\"field.type === enum.EmptyCol\">\r\n        <div *ngIf=\"field.subtitle\">\r\n          <h2>{{ field.subtitle }}</h2>\r\n        </div>\r\n      </div>\r\n    </mat-grid-tile>\r\n\r\n    </ng-container>\r\n  </mat-grid-list>\r\n\r\n    <div\r\n      [ngSwitch]=\"formConfig.submitButtonConfig.materialButtonType\"\r\n      *ngIf=\"!formConfig.submitButtonConfig.hidden\"\r\n    >\r\n      <button\r\n        *ngSwitchCase=\"'raised'\"\r\n        mat-raised-button\r\n        [color]=\"formConfig.submitButtonConfig.color\"\r\n        type=\"submit\"\r\n      >\r\n        {{ formConfig.submitButtonConfig.text }}\r\n      </button>\r\n\r\n      <button\r\n      *ngSwitchCase=\"'outline'\"\r\n      mat-stroked-button\r\n      [color]=\"formConfig.submitButtonConfig.color\"\r\n      type=\"submit\"\r\n    >\r\n      {{ formConfig.submitButtonConfig.text }}\r\n    </button>\r\n    <button\r\n      *ngSwitchCase=\"'text'\"\r\n      mat-button\r\n      [color]=\"formConfig.submitButtonConfig.color\"\r\n      type=\"submit\"\r\n    >\r\n      {{ formConfig.submitButtonConfig.text }}\r\n    </button>\r\n    <button\r\n      *ngSwitchCase=\"'flat'\"\r\n      mat-flat-button\r\n      [color]=\"formConfig.submitButtonConfig.color\"\r\n      type=\"submit\"\r\n    >\r\n      {{ formConfig.submitButtonConfig.text }}\r\n    </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n", styles: [".field-container{padding:10px;margin:10px 0}form{width:100%}.mw-100{max-width:100%;width:100%}.mh-100{max-height:100%;height:100%}.mh-30px{height:30px!important;left:-40%!important}lib-field-form{width:100%!important}mat-grid-tile.mat-grid-tile{overflow:visible}\n"], components: [{ type: i2$7.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { type: i2$7.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { type: TextMaterialControlComponent, selector: "sof-text-control" }, { type: DenseTextMaterialControlComponent, selector: "sof-dense-text-control" }, { type: CheckboxMaterialControlComponent, selector: "sof-checkbox-control" }, { type: TextAreaMaterialControlComponent, selector: "sof-text-area-control", inputs: ["resizeable", "rowsArea"] }, { type: NumberMaterialControlComponent, selector: "sof-number-control" }, { type: RadioButtonMaterialControlComponent, selector: "sof-radio-button-control" }, { type: SelectMaterialControlComponent, selector: "sof-select-control" }, { type: AutocompleteMaterialControlComponent, selector: "sof-autocomplete-control" }, { type: TimePickerMaterialControlComponent, selector: "sof-time-picker-control", inputs: ["format24hs"] }, { type: DatePickerMaterialControlComponent, selector: "sof-date-picker-control" }, { type: PhoneMaterialControlComponent, selector: "sof-phone-control" }, { type: FileUploadMaterialControlComponent, selector: "sof-file-upload-control", inputs: ["maxSize"] }, { type: PasswordMaterialControlComponent, selector: "sof-password-control" }, { type: CheckboxGroupMaterialControlComponent, selector: "sof-checkbox-group-control" }, { type: i2$6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i4.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.NgSwitchDefault, selector: "[ngSwitchDefault]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DynFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-dyn-form', providers: [FormularioService], encapsulation: ViewEncapsulation.None, template: "<div style=\"display: flex\" *ngIf=\"!!forma\">\r\n  <form\r\n    [formGroup]=\"forma\"\r\n    autocomplete=\"off\"\r\n    [class]=\"formConfig.formCustomClass\"\r\n    (ngSubmit)=\"OnSubmit()\"\r\n  >\r\n  <mat-grid-list [rowHeight]=\"rowHeight\" [cols]=\"cols\" [gutterSize]=\"gutterSize\">\r\n\r\n    <ng-container\r\n      *ngFor=\"let field of fields\"\r\n      [class.field-container]=\"field.type != enum.EmptyCol && !field.hidden\"\r\n    >\r\n\r\n    <mat-grid-tile colspan=\"{{  field.cols  }}\" rowspan=\"{{ field.type == enum.EmptyCol && field.subtitle ? 1 : 5 }}\" [class]=\"field.type === enum.EmptyCol && field.subtitle ? 'mh-30px' : ''\">\r\n\r\n      <div *ngIf=\"field.type != enum.EmptyCol && !field.hidden\" class=\"{{'mw-100 mh-100 ' + field.templateOptions.customClass || ''}} \">\r\n        <div [ngSwitch]=\"field.type\">\r\n  \r\n          <div *ngSwitchCase=\"'text'\">\r\n            <sof-text-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-text-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'dense-text'\">\r\n            <sof-dense-text-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-dense-text-control>\r\n          </div>\r\n  \r\n  \r\n          <div *ngSwitchCase=\"'checkbox'\">\r\n            <sof-checkbox-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-checkbox-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'text-area'\">\r\n            <sof-text-area-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [rowsArea]=\"field.templateOptions.rowsArea || 2\"\r\n              [resizeable]=\"field.templateOptions.resizeable || false\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-text-area-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'number'\">\r\n            <sof-number-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-number-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'radio'\">\r\n            <sof-radio-button-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [list]=\"field.options?.options || []\"\r\n              [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n              [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-radio-button-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'select'\">\r\n            <sof-select-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n              [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n              [list]=\"field.options?.options || []\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-select-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'autocomplete'\">\r\n            <sof-autocomplete-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n              [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n              [list]=\"field.options?.options || []\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-autocomplete-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'time'\">\r\n            <sof-time-picker-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [format24hs]=\"true\"\r\n              [formControlName]=\"field.key\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-time-picker-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'date'\">\r\n            <sof-date-picker-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n            ></sof-date-picker-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'phone'\">\r\n            <sof-phone-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-phone-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'file'\">\r\n            <sof-file-upload-control\r\n              #fileControl\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [multiple]=\"!!field.templateOptions.multiple\"\r\n              [maxSize]=\"\r\n                fileControl.getMaxSizeValueInValidation(field.validations)\r\n              \"\r\n            ></sof-file-upload-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'password'\">\r\n            <sof-password-control\r\n              [label]=\"field.templateOptions.label || ''\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-password-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchCase=\"'empty-col'\">\r\n            <div *ngIf=\"field.subtitle\">\r\n              <p>{{ field.subtitle }}</p>\r\n            </div>\r\n          </div>\r\n          \r\n          <div *ngSwitchCase=\"'checkbox-group'\">\r\n            <sof-checkbox-group-control\r\n              [label]=\"field.templateOptions.label\"\r\n              [placeholder]=\"field.templateOptions.placeholder || ''\"\r\n              [formControlName]=\"field.key\"\r\n              [list]=\"field.options?.options || []\"\r\n              [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n              [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n              [noLabel]=\"field.templateOptions.noLabel\"\r\n              [sideLabel]=\"field.templateOptions.sideLabel\"\r\n            ></sof-checkbox-group-control>\r\n          </div>\r\n  \r\n          <div *ngSwitchDefault>\r\n            <h3>Se desconoce el tipo {{ field.type }}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      <div *ngIf=\"field.type === enum.EmptyCol\">\r\n        <div *ngIf=\"field.subtitle\">\r\n          <h2>{{ field.subtitle }}</h2>\r\n        </div>\r\n      </div>\r\n    </mat-grid-tile>\r\n\r\n    </ng-container>\r\n  </mat-grid-list>\r\n\r\n    <div\r\n      [ngSwitch]=\"formConfig.submitButtonConfig.materialButtonType\"\r\n      *ngIf=\"!formConfig.submitButtonConfig.hidden\"\r\n    >\r\n      <button\r\n        *ngSwitchCase=\"'raised'\"\r\n        mat-raised-button\r\n        [color]=\"formConfig.submitButtonConfig.color\"\r\n        type=\"submit\"\r\n      >\r\n        {{ formConfig.submitButtonConfig.text }}\r\n      </button>\r\n\r\n      <button\r\n      *ngSwitchCase=\"'outline'\"\r\n      mat-stroked-button\r\n      [color]=\"formConfig.submitButtonConfig.color\"\r\n      type=\"submit\"\r\n    >\r\n      {{ formConfig.submitButtonConfig.text }}\r\n    </button>\r\n    <button\r\n      *ngSwitchCase=\"'text'\"\r\n      mat-button\r\n      [color]=\"formConfig.submitButtonConfig.color\"\r\n      type=\"submit\"\r\n    >\r\n      {{ formConfig.submitButtonConfig.text }}\r\n    </button>\r\n    <button\r\n      *ngSwitchCase=\"'flat'\"\r\n      mat-flat-button\r\n      [color]=\"formConfig.submitButtonConfig.color\"\r\n      type=\"submit\"\r\n    >\r\n      {{ formConfig.submitButtonConfig.text }}\r\n    </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n", styles: [".field-container{padding:10px;margin:10px 0}form{width:100%}.mw-100{max-width:100%;width:100%}.mh-100{max-height:100%;height:100%}.mh-30px{height:30px!important;left:-40%!important}lib-field-form{width:100%!important}mat-grid-tile.mat-grid-tile{overflow:visible}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: FormularioService }]; }, propDecorators: { cols: [{
                type: Input
            }], gutterSize: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], fields: [{
                type: Input
            }], submitEvent: [{
                type: Output
            }], onChangeEvent: [{
                type: Output
            }], FieldsValues: [{
                type: Input
            }], formConfig: [{
                type: Input
            }] } });

class DynamicFormModule {
}
DynamicFormModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DynamicFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DynamicFormModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DynamicFormModule, declarations: [DynFormComponent], imports: [CommonModule,
        ReactiveFormsModule,
        MaterialControlsModule,
        MatButtonModule,
        MatGridListModule], exports: [DynFormComponent] });
DynamicFormModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DynamicFormModule, providers: [], imports: [[
            CommonModule,
            ReactiveFormsModule,
            MaterialControlsModule,
            MatButtonModule,
            MatGridListModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DynamicFormModule, decorators: [{
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

// Example locale file for English, give this to your locale team to translate
const AG_GRID_LOCALE_ES = {
    inRangeStart: 'desde',
    inRangeEnd: 'a',
    // Enterprise Menu Aggregation and Status Bar
    sum: 'Sum',
    min: 'Min',
    max: 'Max',
    none: 'None',
    count: 'Count',
    avg: 'Average',
    filteredRows: 'Filtrado',
    selectedRows: 'Seleccionado',
    totalRows: 'Total Filas',
    totalAndFilteredRows: 'Filas',
    more: 'Mas',
    to: '-',
    of: 'de',
    page: 'Pagina',
    nextPage: 'Siguiente',
    lastPage: 'Anterior',
    firstPage: 'Primera pagina',
    previousPage: 'Pagina previa',
    // Row Drag
    rowDragRows: 'rows',
    // Other
    loadingOoo: 'Cargando...',
    noRowsToShow: 'No hay filas para mostrar',
    enabled: 'Habilitado',
    // Number Format (Status Bar, Pagination Panel)
    thousandSeparator: ',',
    decimalSeparator: '.',
};

const AG_GRID_LOCALE_EN = {
    // Set Filter
    selectAll: '(Select All)',
    selectAllSearchResults: '(Select All Search Results)',
    searchOoo: 'Search...',
    blanks: '(Blanks)',
    noMatches: 'No matches',
    // Number Filter & Text Filter
    filterOoo: 'Filter...',
    equals: 'Equals',
    notEqual: 'Not equal',
    blank: 'Blank',
    notBlank: 'Not blank',
    empty: 'Choose One',
    // Row Drag
    rowDragRows: 'rows',
    // Other
    loadingOoo: 'Loading...',
    noRowsToShow: 'No Rows To Show',
    enabled: 'Enabled',
    // Menu
    pinColumn: 'Pin Column',
    pinLeft: 'Pin Left',
    pinRight: 'Pin Right',
    noPin: 'No Pin',
    valueAggregation: 'Value Aggregation',
    autosizeThiscolumn: 'Autosize This Column',
    autosizeAllColumns: 'Autosize All Columns',
    groupBy: 'Group by',
    ungroupBy: 'Un-Group by',
    addToValues: 'Add ${variable} to values',
    removeFromValues: 'Remove ${variable} from values',
    addToLabels: 'Add ${variable} to labels',
    removeFromLabels: 'Remove ${variable} from labels',
    resetColumns: 'Reset Columns',
    expandAll: 'Expand All',
    collapseAll: 'Close All',
    copy: 'Copy',
    ctrlC: 'Ctrl+C',
    copyWithHeaders: 'Copy With Headers',
    copyWithHeaderGroups: 'Copy With Header Groups',
    paste: 'Paste',
    ctrlV: 'Ctrl+V',
    export: 'Export',
    csvExport: 'CSV Export',
    excelExport: 'Excel Export',
    // Enterprise Menu Aggregation and Status Bar
    sum: 'Sum',
    min: 'Min',
    max: 'Max',
    none: 'None',
    count: 'Count',
    avg: 'Average',
    filteredRows: 'Filtered',
    selectedRows: 'Selected',
    totalRows: 'Total Rows',
    totalAndFilteredRows: 'Rows',
    more: 'More',
    to: 'to',
    of: 'of',
    page: 'Page',
    nextPage: 'Next Page',
    lastPage: 'Last Page',
    firstPage: 'First Page',
    previousPage: 'Previous Page',
    // Pivoting
    pivotColumnGroupTotals: 'Total',
    // Number Format (Status Bar, Pagination Panel)
    thousandSeparator: ',',
    decimalSeparator: '.'
};

class PageSizeComponent {
    constructor() {
        this.pageSize = 10;
        this.previusPageSize = this.pageSize;
        this.sizeChangeEvent = new EventEmitter();
    }
    ngOnInit() {
    }
    onSizeChange() {
        if (this.previusPageSize != this.pageSize) {
            this.sizeChangeEvent.emit(this.pageSize);
            this.previusPageSize = this.pageSize;
        }
    }
}
PageSizeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PageSizeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PageSizeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: PageSizeComponent, selector: "app-page-size", inputs: { pageSize: "pageSize", pageSizeText: "pageSizeText" }, outputs: { sizeChangeEvent: "sizeChangeEvent" }, ngImport: i0, template: "<div class=\"form-custom-group\">\r\n  <label for=\"size\">{{ pageSizeText }}</label>\r\n  <mat-form-field>\r\n    <input\r\n      id=\"size\"\r\n      type=\"number\"\r\n      matInput\r\n      [(ngModel)]=\"pageSize\"\r\n      (blur)=\"onSizeChange()\"\r\n    />\r\n  </mat-form-field>\r\n</div>\r\n", styles: [":host{display:block;background-color:transparent;height:0px}:host .form-custom-group{margin-left:20px;display:flex;align-items:center;position:relative;top:-60px;z-index:100;width:40%}:host .form-custom-group label{margin-right:20px}:host .form-custom-group mat-form-field{width:40px}.mat-form-field-infix{border-top:none!important}\n"], components: [{ type: i1$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }], directives: [{ type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i4$1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PageSizeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-page-size', template: "<div class=\"form-custom-group\">\r\n  <label for=\"size\">{{ pageSizeText }}</label>\r\n  <mat-form-field>\r\n    <input\r\n      id=\"size\"\r\n      type=\"number\"\r\n      matInput\r\n      [(ngModel)]=\"pageSize\"\r\n      (blur)=\"onSizeChange()\"\r\n    />\r\n  </mat-form-field>\r\n</div>\r\n", styles: [":host{display:block;background-color:transparent;height:0px}:host .form-custom-group{margin-left:20px;display:flex;align-items:center;position:relative;top:-60px;z-index:100;width:40%}:host .form-custom-group label{margin-right:20px}:host .form-custom-group mat-form-field{width:40px}.mat-form-field-infix{border-top:none!important}\n"] }]
        }], propDecorators: { pageSize: [{
                type: Input
            }], sizeChangeEvent: [{
                type: Output
            }], pageSizeText: [{
                type: Input
            }] } });

class GridControlComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.gridReady = new EventEmitter();
        this.gridRowOptions = false;
        this.gridColDefsRaw = [];
        this.gridPaginationPageSize = 10;
        this.gridPagination = true;
        /**
         * @summary gridRowSelection indica el tipo de seleccion en la grilla
         * @param single solo se puede seleccionar una fila a la vez
         * @param multiple se pueden seleccionar varias filas
         */
        this.gridRowSelection = 'single';
        this.localeText = AG_GRID_LOCALE_EN;
        this.gridAnimateRows = false;
        this.gridPageSizeEditable = true;
        this.gridPageSizeText = "Filas por pagina";
        this.gridChecboxesToSelection = true;
        this.rowId = 'id';
        this.getRowId = (params) => {
            return params.data[this.rowId];
        };
    }
    ngOnInit() {
        this.transformColumnRaws();
    }
    ngOnChanges(changes) {
        /**
         * Espero a que cambie el input de locale para cambiar la propiedad
         * localeText y volver a renderizar ag-grid con este nuevo locale
         */
        const currentLocale = changes['localeText']?.currentValue;
        if (currentLocale && currentLocale != changes['localeText'].previousValue) {
            this.changeLocale(currentLocale);
        }
    }
    /**
     * Cambia el localeText en la grilla
     * @param locale objeto con las traducciones que necesito en la configuracion de la grilla
     * @example
     * ```ts
     * {
       * of: 'de',
        page: 'Pagina',
        nextPage: 'Siguiente',
        lastPage: 'Anterior',
        firstPage: 'Primera pagina',
        previousPage: 'Pagina previa',
      }
     * ```
     */
    changeLocale(locale) {
        if (locale) {
            this.localeText = locale;
        }
        else {
            this.localeText = (this.localeText == AG_GRID_LOCALE_EN)
                ? AG_GRID_LOCALE_ES : AG_GRID_LOCALE_EN;
        }
        this.doRerender();
    }
    /**
     * Metodo para volver a renderizar la grilla con un ngif en el componente de ag-grid
     */
    doRerender() {
        this.rerender = true;
        this._cdRef.detectChanges();
        this.rerender = false;
    }
    transformColumnRaws() {
        const columnDefs = this.gridColDefsRaw.map((x, i) => {
            //Agrego checkbox selection en primer columna
            if (i == 0 && this.gridChecboxesToSelection) {
                const firstColDef = typeof (x) == 'string' ?
                    this.normaliseStringToColDef(x) : this.normaliseColDef(x);
                firstColDef.headerCheckboxSelection = true;
                firstColDef.checkboxSelection = true;
                return firstColDef;
            }
            else {
                return typeof (x) == 'string' ?
                    this.normaliseStringToColDef(x) : this.normaliseColDef(x);
            }
        });
        this.gridColDefs = columnDefs;
    }
    /**
     * Si flex y width estan definidos, flex tiene mas prioridad e ignora el width
     *
     * De ambos, solo el width se normaliza (200)
     * @summary la Normalizacion de una columna consiste en dejar parametros por default(width, soertable, flex,...)
     */
    normaliseColDef(param) {
        const cd = param;
        cd.suppressMovable = true;
        cd.width = param.width ?? 200;
        cd.minWidth = param.minWidth ?? 150;
        cd.sortable = true;
        cd.resizable = param.resizable ?? false;
        cd.flex = param.flex;
        return cd;
    }
    normaliseStringToColDef(param) {
        const cd = { field: param };
        this.normaliseColDef(cd);
        return cd;
    }
    onGridReady() {
        this.gridApi = this.grid.api;
        this.gridReady.emit(this.gridApi);
    }
    sizeChanged(size) {
        this.grid.api.paginationSetPageSize(size);
    }
}
GridControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridControlComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
GridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: GridControlComponent, selector: "sof-grid-control", inputs: { gridRowOptions: "gridRowOptions", gridRowData: "gridRowData", gridColDefsRaw: "gridColDefsRaw", gridPaginationPageSize: "gridPaginationPageSize", gridPagination: "gridPagination", gridRowSelection: "gridRowSelection", localeText: "localeText", gridAnimateRows: "gridAnimateRows", gridPageSizeEditable: "gridPageSizeEditable", gridPageSizeText: "gridPageSizeText", gridChecboxesToSelection: "gridChecboxesToSelection", rowId: "rowId" }, outputs: { gridReady: "gridReady" }, viewQueries: [{ propertyName: "grid", first: true, predicate: AgGridAngular, descendants: true }], usesOnChanges: true, ngImport: i0, template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n        [getRowId]=\"getRowId\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n</ng-container>\r\n", styles: [""], components: [{ type: i1$5.AgGridAngular, selector: "ag-grid-angular", inputs: ["statusBar", "sideBar", "suppressContextMenu", "preventDefaultOnContextMenu", "allowContextMenuWithControlKey", "suppressMenuHide", "enableBrowserTooltips", "tooltipShowDelay", "tooltipHideDelay", "tooltipMouseTrack", "popupParent", "copyHeadersToClipboard", "copyGroupHeadersToClipboard", "clipboardDelimiter", "suppressCopyRowsToClipboard", "suppressCopySingleCellRanges", "suppressLastEmptyLineOnPaste", "suppressClipboardPaste", "suppressClipboardApi", "columnDefs", "defaultColDef", "defaultColGroupDef", "columnTypes", "maintainColumnOrder", "suppressFieldDotNotation", "deltaColumnMode", "applyColumnDefOrder", "immutableColumns", "suppressSetColumnStateEvents", "suppressColumnStateEvents", "colWidth", "minColWidth", "maxColWidth", "headerHeight", "groupHeaderHeight", "floatingFiltersHeight", "pivotHeaderHeight", "pivotGroupHeaderHeight", "allowDragFromColumnsToolPanel", "suppressMovableColumns", "suppressColumnMoveAnimation", "suppressDragLeaveHidesColumns", "colResizeDefault", "suppressAutoSize", "autoSizePadding", "skipHeaderOnAutoSize", "components", "frameworkComponents", "editType", "singleClickEdit", "suppressClickEdit", "readOnlyEdit", "stopEditingWhenCellsLoseFocus", "enterMovesDown", "enterMovesDownAfterEdit", "undoRedoCellEditing", "undoRedoCellEditingLimit", "stopEditingWhenGridLosesFocus", "defaultCsvExportParams", "suppressCsvExport", "defaultExcelExportParams", "suppressExcelExport", "excelStyles", "defaultExportParams", "quickFilterText", "cacheQuickFilter", "excludeChildrenWhenTreeDataFiltering", "enableCharts", "chartThemes", "customChartThemes", "chartThemeOverrides", "loadingCellRenderer", "loadingCellRendererFramework", "loadingCellRendererParams", "loadingCellRendererSelector", "localeText", "masterDetail", "keepDetailRows", "keepDetailRowsCount", "detailCellRenderer", "detailCellRendererFramework", "detailCellRendererParams", "detailRowHeight", "detailRowAutoHeight", "context", "alignedGrids", "tabIndex", "rowBuffer", "valueCache", "valueCacheNeverExpires", "enableCellExpressions", "suppressParentsInRowNodes", "suppressTouch", "suppressFocusAfterRefresh", "suppressAsyncEvents", "suppressBrowserResizeObserver", "suppressPropertyNamesCheck", "suppressChangeDetection", "debug", "overlayLoadingTemplate", "loadingOverlayComponent", "loadingOverlayComponentFramework", "loadingOverlayComponentParams", "suppressLoadingOverlay", "overlayNoRowsTemplate", "noRowsOverlayComponent", "noRowsOverlayComponentFramework", "noRowsOverlayComponentParams", "suppressNoRowsOverlay", "pagination", "paginationPageSize", "paginationAutoPageSize", "paginateChildRows", "suppressPaginationPanel", "pivotMode", "pivotPanelShow", "pivotColumnGroupTotals", "pivotRowTotals", "pivotSuppressAutoColumn", "suppressExpandablePivotGroups", "functionsReadOnly", "aggFuncs", "suppressAggFuncInHeader", "suppressAggAtRootLevel", "aggregateOnlyChangedColumns", "suppressAggFilteredOnly", "removePivotHeaderRowWhenSingleValueColumn", "animateRows", "enableCellChangeFlash", "cellFlashDelay", "cellFadeDelay", "domLayout", "ensureDomOrder", "enableRtl", "suppressColumnVirtualisation", "suppressMaxRenderedRowRestriction", "suppressRowVirtualisation", "rowDragManaged", "suppressRowDrag", "suppressMoveWhenRowDragging", "rowDragEntireRow", "rowDragMultiRow", "fullWidthCellRenderer", "fullWidthCellRendererFramework", "fullWidthCellRendererParams", "embedFullWidthRows", "deprecatedEmbedFullWidthRows", "groupDisplayType", "groupDefaultExpanded", "autoGroupColumnDef", "groupMaintainOrder", "groupSelectsChildren", "groupAggFiltering", "groupIncludeFooter", "groupIncludeTotalFooter", "groupSuppressBlankHeader", "groupSelectsFiltered", "showOpenedGroup", "groupRemoveSingleChildren", "groupRemoveLowestSingleChildren", "groupHideOpenParents", "rowGroupPanelShow", "groupRowRenderer", "groupRowRendererFramework", "groupRowRendererParams", "suppressMakeColumnVisibleAfterUnGroup", "treeData", "groupRowInnerRenderer", "groupRowInnerRendererFramework", "groupMultiAutoColumn", "groupUseEntireRow", "groupSuppressAutoColumn", "rememberGroupStateWhenNewData", "pinnedTopRowData", "pinnedBottomRowData", "rowModelType", "rowData", "immutableData", "asyncTransactionWaitMillis", "suppressModelUpdateAfterUpdateTransaction", "deltaRowDataMode", "batchUpdateWaitMillis", "datasource", "cacheOverflowSize", "infiniteInitialRowCount", "serverSideStoreType", "cacheBlockSize", "maxBlocksInCache", "maxConcurrentDatasourceRequests", "blockLoadDebounceMillis", "purgeClosedRowNodes", "serverSideDatasource", "serverSideSortingAlwaysResets", "serverSideFilteringAlwaysResets", "suppressEnterpriseResetOnNewColumns", "viewportDatasource", "viewportRowModelPageSize", "viewportRowModelBufferSize", "alwaysShowHorizontalScroll", "alwaysShowVerticalScroll", "debounceVerticalScrollbar", "suppressHorizontalScroll", "suppressScrollOnNewData", "suppressScrollWhenPopupsAreOpen", "suppressAnimationFrame", "suppressMiddleClickScrolls", "suppressPreventDefaultOnMouseWheel", "scrollbarWidth", "rowSelection", "rowMultiSelectWithClick", "suppressRowDeselection", "suppressRowClickSelection", "suppressCellSelection", "suppressCellFocus", "suppressMultiRangeSelection", "enableCellTextSelection", "enableRangeSelection", "enableRangeHandle", "enableFillHandle", "fillHandleDirection", "suppressClearOnFillReduction", "sortingOrder", "accentedSort", "unSortIcon", "suppressMultiSort", "alwaysMultiSort", "multiSortKey", "suppressMaintainUnsortedOrder", "icons", "rowHeight", "rowStyle", "rowClass", "rowClassRules", "suppressRowHoverHighlight", "suppressRowTransform", "columnHoverHighlight", "deltaSort", "treeDataDisplayType", "angularCompileRows", "angularCompileFilters", "functionsPassive", "enableGroupEdit", "getContextMenuItems", "getMainMenuItems", "postProcessPopup", "processCellForClipboard", "processHeaderForClipboard", "processGroupHeaderForClipboard", "processCellFromClipboard", "sendToClipboard", "processDataFromClipboard", "isExternalFilterPresent", "doesExternalFilterPass", "getChartToolbarItems", "createChartContainer", "navigateToNextHeader", "tabToNextHeader", "navigateToNextCell", "tabToNextCell", "suppressKeyboardEvent", "localeTextFunc", "getLocaleText", "getDocument", "paginationNumberFormatter", "groupRowAggNodes", "getGroupRowAgg", "isGroupOpenByDefault", "initialGroupOrderComparator", "defaultGroupOrderComparator", "processSecondaryColDef", "processSecondaryColGroupDef", "getDataPath", "defaultGroupSortComparator", "getChildCount", "getServerSideStoreParams", "isServerSideGroupOpenByDefault", "isApplyServerSideTransaction", "isServerSideGroup", "getServerSideGroupKey", "getBusinessKeyForNode", "getRowNodeId", "getRowId", "resetRowDataOnUpdate", "processRowPostCreate", "isRowSelectable", "isRowMaster", "fillOperation", "postSort", "postSortRows", "getRowStyle", "getRowClass", "getRowHeight", "isFullWidthCell", "isFullWidthRow", "gridOptions", "modules"], outputs: ["toolPanelVisibleChanged", "pasteStart", "pasteEnd", "columnVisible", "columnPinned", "columnResized", "columnMoved", "columnValueChanged", "columnPivotModeChanged", "columnPivotChanged", "columnGroupOpened", "newColumnsLoaded", "gridColumnsChanged", "displayedColumnsChanged", "virtualColumnsChanged", "columnEverythingChanged", "componentStateChanged", "cellValueChanged", "cellEditRequest", "rowValueChanged", "cellEditingStarted", "cellEditingStopped", "rowEditingStarted", "rowEditingStopped", "filterOpened", "filterChanged", "filterModified", "chartCreated", "chartRangeSelectionChanged", "chartOptionsChanged", "chartDestroyed", "cellKeyDown", "cellKeyPress", "gridReady", "firstDataRendered", "gridSizeChanged", "modelUpdated", "virtualRowRemoved", "viewportChanged", "bodyScroll", "bodyScrollEnd", "dragStarted", "dragStopped", "paginationChanged", "rowDragEnter", "rowDragMove", "rowDragLeave", "rowDragEnd", "columnRowGroupChanged", "rowGroupOpened", "expandOrCollapseAll", "pinnedRowDataChanged", "rowDataChanged", "rowDataUpdated", "asyncTransactionsFlushed", "cellClicked", "cellDoubleClicked", "cellFocused", "cellMouseOver", "cellMouseOut", "cellMouseDown", "rowClicked", "rowDoubleClicked", "rowSelected", "selectionChanged", "cellContextMenu", "rangeSelectionChanged", "sortChanged", "columnRowGroupChangeRequest", "columnPivotChangeRequest", "columnValueChangeRequest", "columnAggFuncChangeRequest"] }, { type: PageSizeComponent, selector: "app-page-size", inputs: ["pageSize", "pageSizeText"], outputs: ["sizeChangeEvent"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-grid-control', template: "\r\n<ng-container *ngIf=\"!rerender && (gridRowData && gridColDefs)\">\r\n    <ag-grid-angular\r\n        style=\"width: 100%;\"\r\n        class=\"ag-theme-material\"\r\n        [rowData]=\"gridRowData\"\r\n        [columnDefs]=\"gridColDefs\"\r\n        [pagination]=\"gridPagination\"\r\n        [paginationPageSize]=\"gridPaginationPageSize\"\r\n        [rowSelection]=\"gridRowSelection\"\r\n        (gridReady)=\"onGridReady()\"\r\n        [suppressRowClickSelection]=\"true\"\r\n        [domLayout]=\"'autoHeight'\"\r\n        [localeText]=\"localeText\"\r\n        [animateRows]=\"gridAnimateRows\"\r\n        [getRowId]=\"getRowId\"\r\n    >\r\n    </ag-grid-angular>\r\n    <app-page-size *ngIf=\"gridPageSizeEditable\" \r\n    [pageSizeText]=\"gridPageSizeText\" \r\n    (sizeChangeEvent)=\"sizeChanged($event)\" ></app-page-size>\r\n</ng-container>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { gridReady: [{
                type: Output
            }], gridRowOptions: [{
                type: Input
            }], gridRowData: [{
                type: Input
            }], gridColDefsRaw: [{
                type: Input
            }], gridPaginationPageSize: [{
                type: Input
            }], gridPagination: [{
                type: Input
            }], gridRowSelection: [{
                type: Input
            }], localeText: [{
                type: Input
            }], gridAnimateRows: [{
                type: Input
            }], gridPageSizeEditable: [{
                type: Input
            }], gridPageSizeText: [{
                type: Input
            }], grid: [{
                type: ViewChild,
                args: [AgGridAngular]
            }], gridChecboxesToSelection: [{
                type: Input
            }], rowId: [{
                type: Input
            }] } });

class RowOptionsComponent {
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
RowOptionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: RowOptionsComponent, selector: "app-row-options", ngImport: i0, template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon  matTooltip=\"Opciones\">\r\n      more_vert\r\n  </mat-icon>\r\n</button>\r\n<div >\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let opt of options\" (click)=\"accionar(opt)\" >{{ opt.option }}</button>\r\n  </mat-menu>\r\n</div>\r\n", styles: [":host{display:flex;height:100%;width:100%}:host mat-icon{margin:auto 0}:host div.options-card{position:relative;z-index:999;background:white;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}\n"], components: [{ type: i2$6.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2$5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i3$2.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i3$2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i3$2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i4$3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RowOptionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-row-options', template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon  matTooltip=\"Opciones\">\r\n      more_vert\r\n  </mat-icon>\r\n</button>\r\n<div >\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item *ngFor=\"let opt of options\" (click)=\"accionar(opt)\" >{{ opt.option }}</button>\r\n  </mat-menu>\r\n</div>\r\n", styles: [":host{display:flex;height:100%;width:100%}:host mat-icon{margin:auto 0}:host div.options-card{position:relative;z-index:999;background:white;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038}\n"] }]
        }], ctorParameters: function () { return []; } });

class BadgeComponent {
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
BadgeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BadgeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: BadgeComponent, selector: "app-budge", ngImport: i0, template: "<div class=\"badge-container\">\r\n  <span *ngIf=\"config\" \r\n      class=\"badge-text\" \r\n      [style.background-color]=\"config.badgeColor\"\r\n      [style.color]=\"config.badgeTextColor\"\r\n      >{{config.text}}</span>\r\n</div>\r\n", styles: [".badge-text{padding:4px 16px;border-radius:10px}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-budge', template: "<div class=\"badge-container\">\r\n  <span *ngIf=\"config\" \r\n      class=\"badge-text\" \r\n      [style.background-color]=\"config.badgeColor\"\r\n      [style.color]=\"config.badgeTextColor\"\r\n      >{{config.text}}</span>\r\n</div>\r\n", styles: [".badge-text{padding:4px 16px;border-radius:10px}\n"] }]
        }] });

class LuxonDateTimeRendererComponent {
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
        if (!!config?.toFormat)
            this.cellValue = params.value.toFormat(config.toFormat, config.opts);
        else if (!!config?.toLocale)
            this.cellValue = params.value.toLocaleString(config.toLocale, config.opts);
        else
            this.cellValue = params.value.toLocaleString(DateTime.DATETIME_SHORT, config?.opts);
    }
}
LuxonDateTimeRendererComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LuxonDateTimeRendererComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LuxonDateTimeRendererComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: LuxonDateTimeRendererComponent, selector: "app-luxon-datetime-renderer", ngImport: i0, template: "{{cellValue}}", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LuxonDateTimeRendererComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-luxon-datetime-renderer', template: "{{cellValue}}", styles: [""] }]
        }], ctorParameters: function () { return []; } });

class GridControlModule {
}
GridControlModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridControlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridControlModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridControlModule, declarations: [GridControlComponent,
        RowOptionsComponent,
        BadgeComponent,
        PageSizeComponent,
        LuxonDateTimeRendererComponent], imports: [CommonModule,
        MaterialControlsModule, FormsModule,
        MatIconModule, i1$5.AgGridModule, MatButtonModule,
        MatMenuModule,
        MatInputModule,
        MatTooltipModule], exports: [GridControlComponent,
        RowOptionsComponent,
        BadgeComponent,
        PageSizeComponent,
        LuxonDateTimeRendererComponent] });
GridControlModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridControlModule, imports: [[
            CommonModule,
            MaterialControlsModule, FormsModule,
            MatIconModule,
            AgGridModule.withComponents(RowOptionsComponent),
            MatButtonModule,
            MatMenuModule,
            MatInputModule,
            MatTooltipModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridControlModule, decorators: [{
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

class LinkSweet {
    constructor(text, redirecTo) {
        this._redirecTo = redirecTo;
        this._text = text;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
    get redirecTo() {
        return this._redirecTo;
    }
    set redirecTo(value) {
        this._redirecTo = value;
    }
}

class CustomClassSweet {
}

class AlertService {
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
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertService, deps: [{ token: 'customClass' }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: CustomClassSweet, decorators: [{
                    type: Inject,
                    args: ['customClass']
                }] }]; } });

//To implement in style.scss or angular.json
/* @import 'node_modules/sof-ng-controls/assets/alerts/scss/alert.global.scss'; */
class AlertModule {
    static forRoot(customClass) {
        return {
            ngModule: AlertModule,
            providers: [
                AlertModule,
                {
                    provide: 'customClass',
                    useValue: customClass
                }
            ]
        };
    }
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertModule, imports: [i1$6.SweetAlert2Module] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertModule, providers: [
        AlertService
    ], imports: [[
            SweetAlert2Module.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        SweetAlert2Module.forRoot()
                    ],
                    declarations: [],
                    providers: [
                        AlertService
                    ],
                    schemas: []
                }]
        }] });

class ControlsModule {
    static forRoot(libConfiguration, customClass) {
        AlertModule.forRoot(customClass);
        return {
            ngModule: ControlsModule,
            providers: [
                {
                    provide: ErrorsConfigurations,
                    useValue: libConfiguration,
                },
                {
                    provide: 'customClass',
                    useValue: customClass
                }
            ],
        };
    }
}
ControlsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ControlsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsModule, declarations: [ControlsComponent], exports: [ControlsComponent,
        MaterialControlsModule,
        DynamicFormModule,
        GridControlModule,
        AlertModule] });
ControlsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsModule, imports: [[], MaterialControlsModule,
        DynamicFormModule,
        GridControlModule,
        AlertModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ControlsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ControlsComponent,
                    ],
                    imports: [],
                    exports: [
                        ControlsComponent,
                        MaterialControlsModule,
                        DynamicFormModule,
                        GridControlModule,
                        AlertModule
                    ]
                }]
        }] });

class GridHandlerService {
    constructor() {
        this.rowData = [];
        this.dataId = 'id';
    }
    get RowData() {
        return this.rowData;
    }
    get isSelectedRows() {
        return this.gridApi?.getSelectedNodes().length > 0;
    }
    get selectedRows() {
        return this.gridApi?.getSelectedNodes();
    }
    setConfigs(gridApiParam, rowDataParam, dataIdParam) {
        this.gridApi = gridApiParam;
        this.rowData = rowDataParam;
        this.dataId = dataIdParam;
    }
    addRow(objToAdd) {
        if (this.rowData.length > 0) {
            const indexRepeat = this.rowData.findIndex((row) => row[this.dataId] === objToAdd[this.dataId]);
            if (indexRepeat === -1)
                this.finalTransaction([...this.rowData, objToAdd]);
        }
        else {
            this.finalTransaction([...this.rowData, objToAdd]);
        }
    }
    updateRowState(obj, action, column = 'Estado') {
        const indexObj = this.rowData.findIndex((row) => row[this.dataId] === obj[this.dataId]);
        if (indexObj === -1)
            return;
        this.rowData[indexObj][column] = action;
        this.finalTransaction(this.rowData);
    }
    updateDataState(action) {
        let newRowData = this.rowData.map((row) => { return { ...row, Estado: action }; });
        this.finalTransaction(newRowData);
    }
    deleteRowsSelected() {
        if (this.selectedRows.length > 0)
            this.selectedRows.forEach((node) => {
                let newRowData = this.rowData.filter((row) => row[this.dataId] !== node.id);
                this.finalTransaction(newRowData);
            });
    }
    finalTransaction(data) {
        this.rowData = data;
        this.gridApi.setRowData(this.rowData);
        this.gridApi.redrawRows();
    }
}
GridHandlerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridHandlerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
GridHandlerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridHandlerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GridHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of controls
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AG_GRID_LOCALE_EN, AG_GRID_LOCALE_ES, ActionFormTypes, AlertModule, AlertService, AutocompleteMaterialControlComponent, BadgeComponent, BaseFormFieldComponent, CardComponent, CheckboxGroupMaterialControlComponent, CheckboxMaterialControlComponent, ControlsComponent, ControlsModule, ControlsService, CustomClassSweet, DataValidators, DatePickerMaterialControlComponent, DateTimeValidators, DenseTextMaterialControlComponent, DocControlComponent, DynFormComponent, DynamicFormModule, ErrorMaterialComponent, ErrorsConfigurations, FileUploadMaterialControlComponent, FileValidators, FormConfigTypes, FormularioService, GridControlComponent, GridControlModule, GridHandlerService, LinkSweet, LuxonDateTimeRendererComponent, MaterialControlsModule, NumberMaterialControlComponent, NumberValidators, PageSizeComponent, PasswordMaterialControlComponent, PhoneMaterialControlComponent, RadioButtonMaterialControlComponent, RequiredValidators, RowOptionsComponent, SearchBoxMaterialControlComponent, SelectMaterialControlComponent, TextAreaMaterialControlComponent, TextMaterialControlComponent, TextValidators, TimePickerMaterialControlComponent, ValidationTypes, ValidationsModule, defaultErrorMessages };
//# sourceMappingURL=sof-ng-controls.mjs.map
