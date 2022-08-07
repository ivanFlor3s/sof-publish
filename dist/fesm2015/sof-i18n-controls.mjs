import * as i0 from '@angular/core';
import { Component, Self, Input, ViewChild, EventEmitter, Output, Optional, NgModule, Inject, Injectable } from '@angular/core';
import * as i1 from 'sof-ng-controls';
import { BaseFormFieldComponent, AutocompleteMaterialControlComponent, DatePickerMaterialControlComponent, DenseTextMaterialControlComponent, NumberMaterialControlComponent, PasswordMaterialControlComponent, PhoneMaterialControlComponent, RadioButtonMaterialControlComponent, SearchBoxMaterialControlComponent, SelectMaterialControlComponent, TextMaterialControlComponent, TextAreaMaterialControlComponent, ValidationTypes, FileUploadMaterialControlComponent, TimePickerMaterialControlComponent, PrefixControlMaterialComponent, CheckboxGroupMaterialControlComponent, DateRangePickerMaterialControlComponent, FormConfigTypes, FormularioService, DocControlComponent, MaterialControlsModule, BadgeComponent, RowOptionsComponent, GridControlComponent, GridControlModule } from 'sof-ng-controls';
import * as i2 from '@angular/forms';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i2$1 from '@ngx-translate/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import * as i2$2 from '@angular/material/grid-list';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i19 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i20 from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import * as i3 from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import * as i2$3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3$1 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import * as i4 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { __awaiter } from 'tslib';
import { lastValueFrom, Subject, firstValueFrom } from 'rxjs';
import { MatInputModule } from '@angular/material/input';

class I18nBase extends BaseFormFieldComponent {
    constructor(controlDir, pipeTranslate, _srvTranslatePipe) {
        super(controlDir);
        this.controlDir = controlDir;
        this.pipeTranslate = pipeTranslate;
        this._srvTranslatePipe = _srvTranslatePipe;
    }
    getFbGroup() {
        var _a;
        return ((_a = this.controlDir.control) === null || _a === void 0 ? void 0 : _a.parent) || new FormGroup({});
    }
}
I18nBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nBase, deps: [{ token: i2.NgControl, self: true }, { token: i2$1.TranslatePipe }, { token: i2$1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nBase.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nBase, selector: "ng-component", inputs: { labelToTranslate: "labelToTranslate", placeholderToTranslate: "placeholderToTranslate" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nBase, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () {
        return [{ type: i2.NgControl, decorators: [{
                        type: Self
                    }] }, { type: i2$1.TranslatePipe }, { type: i2$1.TranslateService }];
    }, propDecorators: { labelToTranslate: [{
                type: Input
            }], placeholderToTranslate: [{
                type: Input
            }] } });

class I18nOptions extends I18nBase {
    constructor() {
        super(...arguments);
        this.textPath = 'option';
        this.valuePath = 'value';
        this.toTranslate = true;
        this.listFinal = [];
    }
    ngOnInit() {
        if (this.listTmp) {
            this.showOptions();
        }
    }
    ngOnChanges(changes) {
        if (this.listTmp) {
            this.showOptions();
        }
    }
    showOptions() {
        this.listFinal = [];
        if (this.toTranslate &&
            this.textPath == 'option' &&
            this.valuePath == 'value') {
            if (typeof (this.listTmp) === 'string') {
                this._srvTranslatePipe.get(this.listTmp).subscribe(item => {
                    Object.keys(item).forEach(key => {
                        if (item.hasOwnProperty(key))
                            this.listFinal.push({
                                option: item[key],
                                value: key
                            });
                    });
                });
            }
            else if (this.listTmp instanceof Array) {
                this._srvTranslatePipe.get(this.listTmp.map(x => x.option)).subscribe(translations => {
                    for (const prop in translations)
                        if (translations.hasOwnProperty(prop))
                            this.listFinal.push(Object.assign(Object.assign({}, this.listTmp.find((x) => x.option == prop)), { option: translations[prop] }));
                });
            }
        }
        else if (typeof (this.listTmp) === 'object' &&
            !this.toTranslate) {
            this.listFinal = this.listTmp;
        }
        else {
            throw Error('Error en la estructura de inputs! Verifiquélo y vuelva a intentar.');
        }
    }
}
I18nOptions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nOptions, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nOptions.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nOptions, selector: "ng-component", inputs: { listTmp: "listTmp", textPath: "textPath", valuePath: "valuePath", toTranslate: "toTranslate" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nOptions, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { listTmp: [{
                type: Input
            }], textPath: [{
                type: Input
            }], valuePath: [{
                type: Input
            }], toTranslate: [{
                type: Input
            }] } });

class I18nAutocompleteComponent extends I18nOptions {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
        this._srvTranslatePipe.onLangChange.subscribe(() => {
            this.showOptions();
        });
    }
}
I18nAutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nAutocompleteComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nAutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nAutocompleteComponent, selector: "app-i18n-autocomplete-control", viewQueries: [{ propertyName: "control", first: true, predicate: AutocompleteMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-autocomplete-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [textPath]=\"textPath\"\r\n    [valuePath]=\"valuePath\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-autocomplete-control>\r\n</ng-container>\r\n", components: [{ type: i1.AutocompleteMaterialControlComponent, selector: "sof-autocomplete-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-autocomplete-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-autocomplete-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [textPath]=\"textPath\"\r\n    [valuePath]=\"valuePath\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-autocomplete-control>\r\n</ng-container>\r\n" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [AutocompleteMaterialControlComponent]
            }] } });

class I18nCardComponent {
    constructor() {
        this.expandable = false;
        this.expanded = true;
        this.onToggleExpand = new EventEmitter();
        this.isSubCard = false;
        this.disabled = false;
    }
}
I18nCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
I18nCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCardComponent, selector: "app-i18n-card", inputs: { titleKey: "titleKey", subTitleKey: "subTitleKey", expandable: "expandable", expanded: "expanded", isSubCard: "isSubCard", disabled: "disabled", customOptions: "customOptions" }, outputs: { onToggleExpand: "onToggleExpand" }, ngImport: i0, template: "<sof-card\r\n  titleText=\"{{titleKey | translate }}\"\r\n  subTitleText=\"{{subTitleKey | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand\"\r\n  [expanded]=\"expanded\"\r\n  [disabled]=\"disabled\"\r\n  [customOptions]=\"customOptions\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>", components: [{ type: i1.CardComponent, selector: "sof-card", inputs: ["titleText", "subTitleText", "expandable", "expanded", "isSubCard", "disabled", "customOptions"], outputs: ["onToggleExpand"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-card', template: "<sof-card\r\n  titleText=\"{{titleKey | translate }}\"\r\n  subTitleText=\"{{subTitleKey | translate }}\"\r\n  [expandable]=\"expandable\"\r\n  [isSubCard]=\"isSubCard\"\r\n  (onToggleExpand)=\"onToggleExpand\"\r\n  [expanded]=\"expanded\"\r\n  [disabled]=\"disabled\"\r\n  [customOptions]=\"customOptions\"\r\n>\r\n  <ng-content select=\"[header]\" header></ng-content>\r\n  <ng-content select=\"[body]\" body></ng-content>\r\n  <ng-content select=\"[footer]\" footer></ng-content>\r\n</sof-card>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { titleKey: [{
                type: Input
            }], subTitleKey: [{
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
            }], customOptions: [{
                type: Input
            }] } });

class I18nCheckboxControlComponent extends I18nBase {
}
I18nCheckboxControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCheckboxControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nCheckboxControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCheckboxControlComponent, selector: "app-i18n-checkbox-control", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-checkbox-control>\r\n</ng-container>", components: [{ type: i1.CheckboxMaterialControlComponent, selector: "sof-checkbox-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCheckboxControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-checkbox-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-checkbox-control>\r\n</ng-container>" }]
        }] });

class I18nDatePickerControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nDatePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDatePickerControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nDatePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nDatePickerControlComponent, selector: "app-i18n-date-picker-control", viewQueries: [{ propertyName: "control", first: true, predicate: DatePickerMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-date-picker-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-date-picker-control>\r\n</ng-container>", components: [{ type: i1.DatePickerMaterialControlComponent, selector: "sof-date-picker-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDatePickerControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-date-picker-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-date-picker-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-date-picker-control>\r\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [DatePickerMaterialControlComponent]
            }] } });

class I18nDenseTextControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nDenseTextControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDenseTextControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nDenseTextControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nDenseTextControlComponent, selector: "app-i18n-dense-text-control", viewQueries: [{ propertyName: "control", first: true, predicate: DenseTextMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n    <sof-dense-text-control\r\n      label=\"{{labelToTranslate | translate }}\"\r\n      placeholder=\"{{placeholderToTranslate | translate}}\"\r\n      [formControlName]=\"controlDir.name\"\r\n      [maxLength]=\"maxLength\"\r\n      [noLabel]=\"noLabel\"\r\n      [sideLabel]=\"sideLabel\"\r\n      [readOnly]=\"readOnly\"\r\n    >\r\n    </sof-dense-text-control>\r\n</ng-container>\r\n  ", components: [{ type: i1.DenseTextMaterialControlComponent, selector: "sof-dense-text-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDenseTextControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-dense-text-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n    <sof-dense-text-control\r\n      label=\"{{labelToTranslate | translate }}\"\r\n      placeholder=\"{{placeholderToTranslate | translate}}\"\r\n      [formControlName]=\"controlDir.name\"\r\n      [maxLength]=\"maxLength\"\r\n      [noLabel]=\"noLabel\"\r\n      [sideLabel]=\"sideLabel\"\r\n      [readOnly]=\"readOnly\"\r\n    >\r\n    </sof-dense-text-control>\r\n</ng-container>\r\n  " }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [DenseTextMaterialControlComponent]
            }] } });

class I18nNumberControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nNumberControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nNumberControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nNumberControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nNumberControlComponent, selector: "app-i18n-number-control", viewQueries: [{ propertyName: "control", first: true, predicate: NumberMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-number-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-number-control>\r\n</ng-container>", components: [{ type: i1.NumberMaterialControlComponent, selector: "sof-number-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nNumberControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-number-control', template: "\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-number-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-number-control>\r\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [NumberMaterialControlComponent]
            }] } });

class I18nPasswordControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nPasswordControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPasswordControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nPasswordControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nPasswordControlComponent, selector: "app-i18n-password-control", viewQueries: [{ propertyName: "control", first: true, predicate: PasswordMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-password-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-password-control>\r\n</ng-container>\r\n", components: [{ type: i1.PasswordMaterialControlComponent, selector: "sof-password-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPasswordControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-password-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-password-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-password-control>\r\n</ng-container>\r\n" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [PasswordMaterialControlComponent]
            }] } });

class I18nPhoneControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nPhoneControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPhoneControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nPhoneControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nPhoneControlComponent, selector: "app-i18n-phone-control", viewQueries: [{ propertyName: "control", first: true, predicate: PhoneMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-phone-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-phone-control>\r\n</ng-container>\r\n", components: [{ type: i1.PhoneMaterialControlComponent, selector: "sof-phone-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPhoneControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-phone-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-phone-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-phone-control>\r\n</ng-container>\r\n" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [PhoneMaterialControlComponent]
            }] } });

class I18nRadioButtonComponent extends RadioButtonMaterialControlComponent {
    // = [ {text:'FORM.RADIOTEXT1', value:1},{text: 'FORM.RADIOTEXT2', value: 2}]
    constructor(controlDir, pipeTranslate, _srvTranslatePipe) {
        super(controlDir);
        this.controlDir = controlDir;
        this.pipeTranslate = pipeTranslate;
        this._srvTranslatePipe = _srvTranslatePipe;
        this.radioOptions = [];
    }
    ngOnInit() {
        this.translateOptions();
    }
    translateOptions() {
        this.radioOptions = this.listToTranslate.map(x => {
            return {
                text: this.pipeTranslate.transform(this.getText(x)),
                value: this.getValue(x)
            };
        });
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
        this._srvTranslatePipe.onLangChange.subscribe(() => {
            this.translateOptions();
        });
    }
    getFbGroup() {
        var _a, _b;
        return ((_b = (_a = this.controlDir) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b.parent) || new FormGroup({ 'none': new FormControl() });
    }
}
I18nRadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRadioButtonComponent, deps: [{ token: i2.NgControl, optional: true, self: true }, { token: i2$1.TranslatePipe }, { token: i2$1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nRadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nRadioButtonComponent, selector: "app-i18n-radio-button", inputs: { labelToTranslate: "labelToTranslate", listToTranslate: "listToTranslate" }, viewQueries: [{ propertyName: "control", first: true, predicate: RadioButtonMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n\r\n<ng-container  [formGroup]=\"getFbGroup()\">\r\n  <sof-radio-button-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"!!controlDir ? controlDir.name : 'none'\"\r\n  [list]=\"radioOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  (change)=\"onInput($event)\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-radio-button-control>\r\n</ng-container>\r\n", components: [{ type: i1.RadioButtonMaterialControlComponent, selector: "sof-radio-button-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-radio-button', template: "\r\n\r\n<ng-container  [formGroup]=\"getFbGroup()\">\r\n  <sof-radio-button-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"!!controlDir ? controlDir.name : 'none'\"\r\n  [list]=\"radioOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  (change)=\"onInput($event)\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-radio-button-control>\r\n</ng-container>\r\n" }]
        }], ctorParameters: function () {
        return [{ type: i2.NgControl, decorators: [{
                        type: Optional
                    }, {
                        type: Self
                    }] }, { type: i2$1.TranslatePipe }, { type: i2$1.TranslateService }];
    }, propDecorators: { control: [{
                type: ViewChild,
                args: [RadioButtonMaterialControlComponent]
            }], labelToTranslate: [{
                type: Input
            }], listToTranslate: [{
                type: Input
            }] } });

class I18nSearchBoxControlComponent extends SearchBoxMaterialControlComponent {
    reset(emit = false) {
        this.searchBox.reset(emit);
    }
}
I18nSearchBoxControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nSearchBoxControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nSearchBoxControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nSearchBoxControlComponent, selector: "app-i18n-search-box-control", inputs: { placeholderToTranslate: "placeholderToTranslate" }, viewQueries: [{ propertyName: "searchBox", first: true, predicate: ["searchBox"], descendants: true }], usesInheritance: true, ngImport: i0, template: "     <sof-search-box-control \r\n     #searchBox\r\n     placeholder=\"{{ placeholderToTranslate | translate}}\"\r\n     (onInput)=\"onInputEvent($event)\"\r\n     [disabled]=\"disabled\">\r\n    </sof-search-box-control>", components: [{ type: i1.SearchBoxMaterialControlComponent, selector: "sof-search-box-control", inputs: ["placeholder", "disabled"], outputs: ["onInput"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nSearchBoxControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-search-box-control', template: "     <sof-search-box-control \r\n     #searchBox\r\n     placeholder=\"{{ placeholderToTranslate | translate}}\"\r\n     (onInput)=\"onInputEvent($event)\"\r\n     [disabled]=\"disabled\">\r\n    </sof-search-box-control>" }]
        }], propDecorators: { placeholderToTranslate: [{
                type: Input
            }], searchBox: [{
                type: ViewChild,
                args: ['searchBox']
            }] } });

class I18nSelectControlComponent extends I18nOptions {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
        this._srvTranslatePipe.onLangChange.subscribe(() => {
            this.showOptions();
        });
    }
}
I18nSelectControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nSelectControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nSelectControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nSelectControlComponent, selector: "app-i18n-select-control", viewQueries: [{ propertyName: "control", first: true, predicate: SelectMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-select-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [textPath]=\"textPath\"\r\n    [valuePath]=\"valuePath\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-select-control>\r\n</ng-container>\r\n  ", components: [{ type: i1.SelectMaterialControlComponent, selector: "sof-select-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nSelectControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-select-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-select-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [textPath]=\"textPath\"\r\n    [valuePath]=\"valuePath\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-select-control>\r\n</ng-container>\r\n  " }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [SelectMaterialControlComponent]
            }] } });

class I18nTextControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nTextControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nTextControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nTextControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nTextControlComponent, selector: "app-i18n-text-control", viewQueries: [{ propertyName: "control", first: true, predicate: TextMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-text-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-text-control>\r\n</ng-container>\r\n", components: [{ type: i1.TextMaterialControlComponent, selector: "sof-text-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nTextControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-text-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-text-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-text-control>\r\n</ng-container>\r\n" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [TextMaterialControlComponent]
            }] } });

class I18nTextAreaControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nTextAreaControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nTextAreaControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nTextAreaControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nTextAreaControlComponent, selector: "app-i18n-textarea-control", inputs: { rowsArea: "rowsArea", resizeable: "resizeable" }, viewQueries: [{ propertyName: "control", first: true, predicate: TextAreaMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n    <sof-text-area-control \r\n        label=\"{{labelToTranslate | translate }}\"\r\n        placeholder=\"{{ placeholderToTranslate | translate}}\"\r\n        [formControlName]=\"controlDir.name\" \r\n        [rowsArea]=\"rowsArea\"\r\n        [resizeable]=\"resizeable\"\r\n        [maxLength]=\"maxLength\"\r\n        [noLabel]=\"noLabel\"\r\n        [sideLabel]=\"sideLabel\"\r\n        [readOnly]=\"readOnly\"\r\n    >\r\n    </sof-text-area-control>\r\n</ng-container>", components: [{ type: i1.TextAreaMaterialControlComponent, selector: "sof-text-area-control", inputs: ["resizeable", "rowsArea"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nTextAreaControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-textarea-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n    <sof-text-area-control \r\n        label=\"{{labelToTranslate | translate }}\"\r\n        placeholder=\"{{ placeholderToTranslate | translate}}\"\r\n        [formControlName]=\"controlDir.name\" \r\n        [rowsArea]=\"rowsArea\"\r\n        [resizeable]=\"resizeable\"\r\n        [maxLength]=\"maxLength\"\r\n        [noLabel]=\"noLabel\"\r\n        [sideLabel]=\"sideLabel\"\r\n        [readOnly]=\"readOnly\"\r\n    >\r\n    </sof-text-area-control>\r\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [TextAreaMaterialControlComponent]
            }], rowsArea: [{
                type: Input
            }], resizeable: [{
                type: Input
            }] } });

class I18nFileUploadControlComponent extends I18nBase {
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
    getMaxSizeValueInValidation(validations) {
        var _a;
        if (validations) {
            return (_a = validations.find(x => x.type == ValidationTypes.MaxFileSize)) === null || _a === void 0 ? void 0 : _a.value;
        }
        else
            return 0;
    }
}
I18nFileUploadControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nFileUploadControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nFileUploadControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nFileUploadControlComponent, selector: "app-i18n-file-upload-control", inputs: { maxSize: "maxSize", multiple: "multiple" }, viewQueries: [{ propertyName: "control", first: true, predicate: FileUploadMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-file-upload-control \r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxSize]=\"maxSize\"\r\n    [multiple]=\"multiple\"\r\n    [readOnly]=\"readOnly\"\r\n    >\r\n  </sof-file-upload-control>\r\n</ng-container>\r\n<!-- Probaron init en AG GRID -->", styles: [""], components: [{ type: i1.FileUploadMaterialControlComponent, selector: "sof-file-upload-control", inputs: ["maxSize"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nFileUploadControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-file-upload-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-file-upload-control \r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxSize]=\"maxSize\"\r\n    [multiple]=\"multiple\"\r\n    [readOnly]=\"readOnly\"\r\n    >\r\n  </sof-file-upload-control>\r\n</ng-container>\r\n<!-- Probaron init en AG GRID -->", styles: [""] }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [FileUploadMaterialControlComponent]
            }], maxSize: [{
                type: Input
            }], multiple: [{
                type: Input
            }] } });

class I18nTimePickerControlComponent extends I18nBase {
    constructor() {
        super(...arguments);
        this.format24hs = false;
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nTimePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nTimePickerControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nTimePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nTimePickerControlComponent, selector: "app-i18n-timer-picker-control", inputs: { format24hs: "format24hs" }, viewQueries: [{ propertyName: "control", first: true, predicate: TimePickerMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n    <sof-time-picker-control  \r\n        label=\"{{ labelToTranslate | translate }}\"\r\n        placeholder=\"{{ placeholderToTranslate | translate}}\"\r\n        [format24hs]=\"format24hs\"\r\n        [formControlName]=\"controlDir.name\"\r\n        [noLabel]=\"noLabel\"\r\n        [sideLabel]=\"sideLabel\"\r\n        [readOnly]=\"readOnly\"\r\n    >\r\n    </sof-time-picker-control>\r\n</ng-container>", components: [{ type: i1.TimePickerMaterialControlComponent, selector: "sof-time-picker-control", inputs: ["format24hs"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nTimePickerControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-timer-picker-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n    <sof-time-picker-control  \r\n        label=\"{{ labelToTranslate | translate }}\"\r\n        placeholder=\"{{ placeholderToTranslate | translate}}\"\r\n        [format24hs]=\"format24hs\"\r\n        [formControlName]=\"controlDir.name\"\r\n        [noLabel]=\"noLabel\"\r\n        [sideLabel]=\"sideLabel\"\r\n        [readOnly]=\"readOnly\"\r\n    >\r\n    </sof-time-picker-control>\r\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [TimePickerMaterialControlComponent]
            }], format24hs: [{
                type: Input
            }] } });

class I18nPrefixControlComponent extends I18nBase {
    constructor() {
        super(...arguments);
        this.inputType = 'number';
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nPrefixControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPrefixControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nPrefixControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nPrefixControlComponent, selector: "app-i18n-prefix-control", inputs: { inputType: "inputType", prefix: "prefix" }, viewQueries: [{ propertyName: "control", first: true, predicate: PrefixControlMaterialComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-prefix-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n\r\n    [prefix]=\"prefix\"\r\n    [inputType]=\"inputType\"\r\n\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-prefix-control>\r\n</ng-container>\r\n", components: [{ type: i1.PrefixControlMaterialComponent, selector: "sof-prefix-control", inputs: ["inputType"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nPrefixControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-prefix-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-prefix-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n\r\n    [prefix]=\"prefix\"\r\n    [inputType]=\"inputType\"\r\n\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [maxLength]=\"maxLength\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-prefix-control>\r\n</ng-container>\r\n" }]
        }], propDecorators: { inputType: [{
                type: Input
            }], prefix: [{
                type: Input
            }], control: [{
                type: ViewChild,
                args: [PrefixControlMaterialComponent]
            }] } });

class I18nCheckboxGroupControlComponent extends CheckboxGroupMaterialControlComponent {
    constructor(controlDir, pipeTranslate, _srvTranslatePipe) {
        super(controlDir);
        this.controlDir = controlDir;
        this.pipeTranslate = pipeTranslate;
        this._srvTranslatePipe = _srvTranslatePipe;
        this.checkOptions = [];
    }
    ngOnInit() {
        this.translateOptions();
    }
    translateOptions() {
        this.checkOptions = this.listToTranslate.map(x => {
            return {
                text: this.pipeTranslate.transform(this.getText(x)),
                value: this.getValue(x)
            };
        });
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
        this._srvTranslatePipe.onLangChange.subscribe(() => {
            this.translateOptions();
        });
    }
    getFbGroup() {
        var _a;
        return ((_a = this.controlDir.control) === null || _a === void 0 ? void 0 : _a.parent) || new FormGroup({});
    }
}
I18nCheckboxGroupControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCheckboxGroupControlComponent, deps: [{ token: i2.NgControl, self: true }, { token: i2$1.TranslatePipe }, { token: i2$1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nCheckboxGroupControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nCheckboxGroupControlComponent, selector: "app-i18n-checkbox-group-control", inputs: { labelToTranslate: "labelToTranslate", listToTranslate: "listToTranslate" }, viewQueries: [{ propertyName: "control", first: true, predicate: CheckboxGroupMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "\r\n\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-group-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"checkOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-checkbox-group-control>\r\n</ng-container>\r\n", components: [{ type: i1.CheckboxGroupMaterialControlComponent, selector: "sof-checkbox-group-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nCheckboxGroupControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-checkbox-group-control', template: "\r\n\r\n<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-checkbox-group-control\r\n  label=\"{{labelToTranslate | translate }}\"\r\n  [formControlName]=\"controlDir.name\"\r\n  [list]=\"checkOptions\"\r\n  textPath=\"text\"\r\n  valuePath=\"value\"\r\n  [noLabel]=\"noLabel\"\r\n  [sideLabel]=\"sideLabel\"\r\n  [readOnly]=\"readOnly\"\r\n  >\r\n    \r\n  </sof-checkbox-group-control>\r\n</ng-container>\r\n" }]
        }], ctorParameters: function () {
        return [{ type: i2.NgControl, decorators: [{
                        type: Self
                    }] }, { type: i2$1.TranslatePipe }, { type: i2$1.TranslateService }];
    }, propDecorators: { control: [{
                type: ViewChild,
                args: [CheckboxGroupMaterialControlComponent]
            }], labelToTranslate: [{
                type: Input
            }], listToTranslate: [{
                type: Input
            }] } });

class I18nDateRangePickerControlComponent extends I18nBase {
    constructor() {
        super(...arguments);
        this.placeholderToTranslate = 'dd/MM/yyyy';
        /**
         * En caso de true, se va a mostrar el calendario al hacer click en cualquier parte del input
         */
        this.openOnClick = false;
        /**
         * En caso de true se va a permitir editar las fechas, caso contrario estaran readonly y solo se podra editar desde el calendario
         */
        this.editable = false;
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nDateRangePickerControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDateRangePickerControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nDateRangePickerControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nDateRangePickerControlComponent, selector: "app-i18n-date-range-picker-control", inputs: { placeholderToTranslate: "placeholderToTranslate", openOnClick: "openOnClick", editable: "editable" }, viewQueries: [{ propertyName: "control", first: true, predicate: DateRangePickerMaterialControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <!--  TODO [placeHolderFromDate]=\"placeholderToTranslate\" \r\n    No paso por pipe porque no se muestra el placeholder del input 1 hasta que se hace click \r\n  -->\r\n  <sof-date-range-picker-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    \r\n    [placeHolderFromDate]=\"placeholderToTranslate\"\r\n    [placeHolderToDate]=\"placeholderToTranslate\"\r\n    [openOnClick]=\"openOnClick\"\r\n    [editable]=\"editable\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-date-range-picker-control>\r\n</ng-container>", components: [{ type: i1.DateRangePickerMaterialControlComponent, selector: "sof-date-range-picker-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDateRangePickerControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-date-range-picker-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <!--  TODO [placeHolderFromDate]=\"placeholderToTranslate\" \r\n    No paso por pipe porque no se muestra el placeholder del input 1 hasta que se hace click \r\n  -->\r\n  <sof-date-range-picker-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    \r\n    [placeHolderFromDate]=\"placeholderToTranslate\"\r\n    [placeHolderToDate]=\"placeholderToTranslate\"\r\n    [openOnClick]=\"openOnClick\"\r\n    [editable]=\"editable\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-date-range-picker-control>\r\n</ng-container>" }]
        }], propDecorators: { control: [{
                type: ViewChild,
                args: [DateRangePickerMaterialControlComponent]
            }], placeholderToTranslate: [{
                type: Input
            }], openOnClick: [{
                type: Input
            }], editable: [{
                type: Input
            }] } });

class I18nDynamicFormComponent {
    constructor(cdRef, fs) {
        this.cdRef = cdRef;
        this.fs = fs;
        // fieldsP: FormFieldConfig[] = []
        this.cols = 2;
        this.enum = FormConfigTypes;
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
    get FormValues() {
        return this.forma.value;
    }
    ngOnInit() {
        this.getRowHeight();
    }
    ngOnChanges(changes) {
        if (!!changes['FieldsValues'] && changes['FieldsValues'].previousValue != changes['FieldsValues'].currentValue) {
            this.SetValues();
        }
    }
    SetValues() {
        if (!!this.forma)
            Object.keys(this.FieldsValues).forEach(key => {
                var _a;
                (_a = this.forma.get(key)) === null || _a === void 0 ? void 0 : _a.setValue(this.FieldsValues[key]);
            });
    }
    ngAfterViewInit() {
        this.forma = this.fs.buildFormGroup(this.fields);
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
I18nDynamicFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDynamicFormComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.FormularioService }], target: i0.ɵɵFactoryTarget.Component });
I18nDynamicFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nDynamicFormComponent, selector: "lib-i18n-dynamic-form", inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight", fields: "fields", FieldsValues: "FieldsValues", formConfig: "formConfig" }, outputs: { submitEvent: "submitEvent", onChangeEvent: "onChangeEvent" }, providers: [FormularioService], usesOnChanges: true, ngImport: i0, template: "<div style=\"display: flex\" *ngIf=\"!!forma\">\r\n    <form\r\n      [formGroup]=\"forma\"\r\n      autocomplete=\"off\"\r\n      [class]=\"formConfig.formCustomClass\"\r\n      (ngSubmit)=\"OnSubmit()\"\r\n    >\r\n    <mat-grid-list [rowHeight]=\"rowHeight\" [cols]=\"cols\" [gutterSize]=\"gutterSize\">\r\n  \r\n      <ng-container\r\n        *ngFor=\"let field of fields\"\r\n        [class.field-container]=\"field.type != enum.EmptyCol && !field.hidden\"\r\n      >\r\n      <mat-grid-tile colspan=\"{{ field.cols }}\" rowspan=\"{{ field.type == enum.EmptyCol && field.subtitle ? 1 : 5 }}\" [class]=\"field.type == enum.EmptyCol && field.subtitle ? 'mh-30px' : ''\">\r\n        <div *ngIf=\"field.type != enum.EmptyCol && !field.hidden\" class=\"{{'mw-100 mh-100 ' + field.templateOptions.customClass || ''}} \">\r\n          <div [ngSwitch]=\"field.type\">\r\n  \r\n            <div *ngSwitchCase=\"'text'\">\r\n              <app-i18n-text-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n              ></app-i18n-text-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'dense-text'\">\r\n              <app-i18n-dense-text-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-dense-text-control>\r\n            </div>\r\n  \r\n  \r\n            <div *ngSwitchCase=\"'checkbox'\">\r\n              <app-i18n-checkbox-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-checkbox-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'text-area'\">\r\n              <app-i18n-textarea-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [rowsArea]=\"field.templateOptions.rowsArea || 2\"\r\n                [resizeable]=\"field.templateOptions.resizeable || false\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-textarea-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'number'\">\r\n              <app-i18n-number-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-number-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'radio'\">\r\n              <app-i18n-radio-button\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [formControlName]=\"field.key\"\r\n                [listToTranslate]=\"field.options?.options || []\"\r\n                [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n                [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-radio-button>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'select'\">\r\n              <app-i18n-select-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n                [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n                [listTmp]=\"field.listKey ?? field.options?.options\"\r\n                [toTranslate]=\"field.toTranslate || false\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-select-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'autocomplete'\">\r\n              <app-i18n-autocomplete-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n                [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n                [listTmp]=\"field.listKey ?? field.options?.options\"\r\n                [toTranslate]=\"field.toTranslate || false\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-autocomplete-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'time'\">\r\n              <app-i18n-timer-picker-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [format24hs]=\"true\"\r\n                [formControlName]=\"field.key\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-timer-picker-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'date'\">\r\n              <app-i18n-date-picker-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-date-picker-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'phone'\">\r\n              <app-i18n-phone-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-phone-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'file'\">\r\n              <app-i18n-file-upload-control\r\n                #fileControl\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [multiple]=\"!!field.templateOptions.multiple\"\r\n                [maxSize]=\"fileControl.getMaxSizeValueInValidation(field.validations)\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-file-upload-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'password'\">\r\n              <app-i18n-password-control\r\n                [labelToTranslate]=\"field.templateOptions.label || ''\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-password-control>\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"'prefix'\">\r\n              <app-i18n-prefix-control\r\n                [labelToTranslate]=\"field.templateOptions.label || ''\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n\r\n                [prefix]=\" field.prefixConfig?.prefix || (field.prefixConfig?.prefixDinamic?.prefix$ | async )  || ''\"\r\n                [inputType]=\"field.prefixConfig?.prefixType ?? 'number'\"\r\n                \r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-prefix-control>\r\n            </div>\r\n            \r\n            <div *ngSwitchCase=\"'checkbox-group'\">\r\n              <app-i18n-checkbox-group-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [formControlName]=\"field.key\"\r\n                [listToTranslate]=\"field.options?.options || []\"\r\n                [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n                [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-checkbox-group-control>\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"'date-range-picker'\">\r\n              <app-i18n-date-range-picker-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [formControlName]=\"field.key\"\r\n                \r\n                [editable]=\"field.dateRangePickerConfig?.editable ?? false\"\r\n                [openOnClick]=\"field.dateRangePickerConfig?.openOnClick ?? true\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-date-range-picker-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'empty-col'\">\r\n            </div>\r\n  \r\n            <div *ngSwitchDefault>\r\n              <h3>Se desconoce el tipo {{ field.type }}</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"field.type == enum.EmptyCol\">\r\n          <div *ngIf=\"field.subtitle\">\r\n            <h2>{{ field.subtitle | translate}}</h2>\r\n          </div>\r\n        </div>\r\n\r\n      </mat-grid-tile>\r\n\r\n\r\n      </ng-container>\r\n    </mat-grid-list>\r\n  \r\n      <div\r\n        [ngSwitch]=\"formConfig.submitButtonConfig.materialButtonType\"\r\n        *ngIf=\"!formConfig.submitButtonConfig.hidden\"\r\n      >\r\n        <button\r\n          *ngSwitchCase=\"'raised'\"\r\n          mat-raised-button\r\n          [color]=\"formConfig.submitButtonConfig.color\"\r\n          type=\"submit\"\r\n        >\r\n          {{ formConfig.submitButtonConfig.text }}\r\n        </button>\r\n  \r\n        <button\r\n        *ngSwitchCase=\"'outline'\"\r\n        mat-stroked-button\r\n        [color]=\"formConfig.submitButtonConfig.color\"\r\n        type=\"submit\"\r\n      >\r\n        {{ formConfig.submitButtonConfig.text }}\r\n      </button>\r\n      <button\r\n        *ngSwitchCase=\"'text'\"\r\n        mat-button\r\n        [color]=\"formConfig.submitButtonConfig.color\"\r\n        type=\"submit\"\r\n      >\r\n        {{ formConfig.submitButtonConfig.text }}\r\n      </button>\r\n      <button\r\n        *ngSwitchCase=\"'flat'\"\r\n        mat-flat-button\r\n        [color]=\"formConfig.submitButtonConfig.color\"\r\n        type=\"submit\"\r\n      >\r\n        {{ formConfig.submitButtonConfig.text }}\r\n      </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n", styles: [".field-container{padding:10px;margin:10px 0}form{width:100%}.mw-100{max-width:100%;width:100%}.mh-100{max-height:100%;height:100%}.mh-30px{height:30px!important;left:-40%!important}mat-grid-tile.mat-grid-tile{overflow:visible}\n"], components: [{ type: i2$2.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { type: i2$2.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }, { type: I18nTextControlComponent, selector: "app-i18n-text-control" }, { type: I18nDenseTextControlComponent, selector: "app-i18n-dense-text-control" }, { type: I18nCheckboxControlComponent, selector: "app-i18n-checkbox-control" }, { type: I18nTextAreaControlComponent, selector: "app-i18n-textarea-control", inputs: ["rowsArea", "resizeable"] }, { type: I18nNumberControlComponent, selector: "app-i18n-number-control" }, { type: I18nRadioButtonComponent, selector: "app-i18n-radio-button", inputs: ["labelToTranslate", "listToTranslate"] }, { type: I18nSelectControlComponent, selector: "app-i18n-select-control" }, { type: I18nAutocompleteComponent, selector: "app-i18n-autocomplete-control" }, { type: I18nTimePickerControlComponent, selector: "app-i18n-timer-picker-control", inputs: ["format24hs"] }, { type: I18nDatePickerControlComponent, selector: "app-i18n-date-picker-control" }, { type: I18nPhoneControlComponent, selector: "app-i18n-phone-control" }, { type: I18nFileUploadControlComponent, selector: "app-i18n-file-upload-control", inputs: ["maxSize", "multiple"] }, { type: I18nPasswordControlComponent, selector: "app-i18n-password-control" }, { type: I18nPrefixControlComponent, selector: "app-i18n-prefix-control", inputs: ["inputType", "prefix"] }, { type: I18nCheckboxGroupControlComponent, selector: "app-i18n-checkbox-group-control", inputs: ["labelToTranslate", "listToTranslate"] }, { type: I18nDateRangePickerControlComponent, selector: "app-i18n-date-range-picker-control", inputs: ["placeholderToTranslate", "openOnClick", "editable"] }, { type: i19.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i20.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i20.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i20.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i20.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i20.NgSwitchDefault, selector: "[ngSwitchDefault]" }], pipes: { "async": i20.AsyncPipe, "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDynamicFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-i18n-dynamic-form', providers: [FormularioService], template: "<div style=\"display: flex\" *ngIf=\"!!forma\">\r\n    <form\r\n      [formGroup]=\"forma\"\r\n      autocomplete=\"off\"\r\n      [class]=\"formConfig.formCustomClass\"\r\n      (ngSubmit)=\"OnSubmit()\"\r\n    >\r\n    <mat-grid-list [rowHeight]=\"rowHeight\" [cols]=\"cols\" [gutterSize]=\"gutterSize\">\r\n  \r\n      <ng-container\r\n        *ngFor=\"let field of fields\"\r\n        [class.field-container]=\"field.type != enum.EmptyCol && !field.hidden\"\r\n      >\r\n      <mat-grid-tile colspan=\"{{ field.cols }}\" rowspan=\"{{ field.type == enum.EmptyCol && field.subtitle ? 1 : 5 }}\" [class]=\"field.type == enum.EmptyCol && field.subtitle ? 'mh-30px' : ''\">\r\n        <div *ngIf=\"field.type != enum.EmptyCol && !field.hidden\" class=\"{{'mw-100 mh-100 ' + field.templateOptions.customClass || ''}} \">\r\n          <div [ngSwitch]=\"field.type\">\r\n  \r\n            <div *ngSwitchCase=\"'text'\">\r\n              <app-i18n-text-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n              ></app-i18n-text-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'dense-text'\">\r\n              <app-i18n-dense-text-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-dense-text-control>\r\n            </div>\r\n  \r\n  \r\n            <div *ngSwitchCase=\"'checkbox'\">\r\n              <app-i18n-checkbox-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-checkbox-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'text-area'\">\r\n              <app-i18n-textarea-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [rowsArea]=\"field.templateOptions.rowsArea || 2\"\r\n                [resizeable]=\"field.templateOptions.resizeable || false\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-textarea-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'number'\">\r\n              <app-i18n-number-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-number-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'radio'\">\r\n              <app-i18n-radio-button\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [formControlName]=\"field.key\"\r\n                [listToTranslate]=\"field.options?.options || []\"\r\n                [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n                [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-radio-button>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'select'\">\r\n              <app-i18n-select-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n                [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n                [listTmp]=\"field.listKey ?? field.options?.options\"\r\n                [toTranslate]=\"field.toTranslate || false\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-select-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'autocomplete'\">\r\n              <app-i18n-autocomplete-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n                [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n                [listTmp]=\"field.listKey ?? field.options?.options\"\r\n                [toTranslate]=\"field.toTranslate || false\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-autocomplete-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'time'\">\r\n              <app-i18n-timer-picker-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [format24hs]=\"true\"\r\n                [formControlName]=\"field.key\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-timer-picker-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'date'\">\r\n              <app-i18n-date-picker-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-date-picker-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'phone'\">\r\n              <app-i18n-phone-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-phone-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'file'\">\r\n              <app-i18n-file-upload-control\r\n                #fileControl\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [multiple]=\"!!field.templateOptions.multiple\"\r\n                [maxSize]=\"fileControl.getMaxSizeValueInValidation(field.validations)\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-file-upload-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'password'\">\r\n              <app-i18n-password-control\r\n                [labelToTranslate]=\"field.templateOptions.label || ''\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-password-control>\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"'prefix'\">\r\n              <app-i18n-prefix-control\r\n                [labelToTranslate]=\"field.templateOptions.label || ''\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n\r\n                [prefix]=\" field.prefixConfig?.prefix || (field.prefixConfig?.prefixDinamic?.prefix$ | async )  || ''\"\r\n                [inputType]=\"field.prefixConfig?.prefixType ?? 'number'\"\r\n                \r\n                [formControlName]=\"field.key\"\r\n                [maxLength]=\"field.templateOptions.maxLength || ''\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-prefix-control>\r\n            </div>\r\n            \r\n            <div *ngSwitchCase=\"'checkbox-group'\">\r\n              <app-i18n-checkbox-group-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [formControlName]=\"field.key\"\r\n                [listToTranslate]=\"field.options?.options || []\"\r\n                [textPath]=\"field.options?.config?.textPath || 'text'\"\r\n                [valuePath]=\"field.options?.config?.valuePath || 'value'\"\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-checkbox-group-control>\r\n            </div>\r\n\r\n            <div *ngSwitchCase=\"'date-range-picker'\">\r\n              <app-i18n-date-range-picker-control\r\n                [labelToTranslate]=\"field.templateOptions.label\"\r\n                [formControlName]=\"field.key\"\r\n                \r\n                [editable]=\"field.dateRangePickerConfig?.editable ?? false\"\r\n                [openOnClick]=\"field.dateRangePickerConfig?.openOnClick ?? true\"\r\n                [placeholderToTranslate]=\"field.templateOptions.placeholder || ''\"\r\n\r\n                [noLabel]=\"field.templateOptions.noLabel\"\r\n                [sideLabel]=\"field.templateOptions.sideLabel\"\r\n                [readOnly]=\"field.templateOptions.readOnly\"\r\n                ></app-i18n-date-range-picker-control>\r\n            </div>\r\n  \r\n            <div *ngSwitchCase=\"'empty-col'\">\r\n            </div>\r\n  \r\n            <div *ngSwitchDefault>\r\n              <h3>Se desconoce el tipo {{ field.type }}</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div *ngIf=\"field.type == enum.EmptyCol\">\r\n          <div *ngIf=\"field.subtitle\">\r\n            <h2>{{ field.subtitle | translate}}</h2>\r\n          </div>\r\n        </div>\r\n\r\n      </mat-grid-tile>\r\n\r\n\r\n      </ng-container>\r\n    </mat-grid-list>\r\n  \r\n      <div\r\n        [ngSwitch]=\"formConfig.submitButtonConfig.materialButtonType\"\r\n        *ngIf=\"!formConfig.submitButtonConfig.hidden\"\r\n      >\r\n        <button\r\n          *ngSwitchCase=\"'raised'\"\r\n          mat-raised-button\r\n          [color]=\"formConfig.submitButtonConfig.color\"\r\n          type=\"submit\"\r\n        >\r\n          {{ formConfig.submitButtonConfig.text }}\r\n        </button>\r\n  \r\n        <button\r\n        *ngSwitchCase=\"'outline'\"\r\n        mat-stroked-button\r\n        [color]=\"formConfig.submitButtonConfig.color\"\r\n        type=\"submit\"\r\n      >\r\n        {{ formConfig.submitButtonConfig.text }}\r\n      </button>\r\n      <button\r\n        *ngSwitchCase=\"'text'\"\r\n        mat-button\r\n        [color]=\"formConfig.submitButtonConfig.color\"\r\n        type=\"submit\"\r\n      >\r\n        {{ formConfig.submitButtonConfig.text }}\r\n      </button>\r\n      <button\r\n        *ngSwitchCase=\"'flat'\"\r\n        mat-flat-button\r\n        [color]=\"formConfig.submitButtonConfig.color\"\r\n        type=\"submit\"\r\n      >\r\n        {{ formConfig.submitButtonConfig.text }}\r\n      </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n", styles: [".field-container{padding:10px;margin:10px 0}form{width:100%}.mw-100{max-width:100%;width:100%}.mh-100{max-height:100%;height:100%}.mh-30px{height:30px!important;left:-40%!important}mat-grid-tile.mat-grid-tile{overflow:visible}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.FormularioService }]; }, propDecorators: { cols: [{
                type: Input
            }], gutterSize: [{
                type: Input
            }], rowHeight: [{
                type: Input
            }], fields: [{
                type: Input
            }], FieldsValues: [{
                type: Input
            }], submitEvent: [{
                type: Output
            }], onChangeEvent: [{
                type: Output
            }], formConfig: [{
                type: Input
            }] } });

class I18nDocControlComponent extends I18nBase {
    constructor() {
        super(...arguments);
        this.minLength = new EventEmitter();
    }
    ngAfterViewInit() {
        this.control.errorControl.translateFuncion = (param) => {
            return this.pipeTranslate.transform(param);
        };
    }
}
I18nDocControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDocControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nDocControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nDocControlComponent, selector: "app-i18n-doc-control", inputs: { type: "type" }, outputs: { minLength: "minLength" }, viewQueries: [{ propertyName: "control", first: true, predicate: DocControlComponent, descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-doc-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [type]=\"type\"\r\n    (minLength)=\"minLength.emit($event)\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-doc-control>\r\n</ng-container>", components: [{ type: i1.DocControlComponent, selector: "sof-doc-control", inputs: ["type"], outputs: ["minLength"] }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nDocControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-doc-control', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-doc-control\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [type]=\"type\"\r\n    (minLength)=\"minLength.emit($event)\"\r\n    [noLabel]=\"noLabel\"\r\n    [sideLabel]=\"sideLabel\"\r\n    [readOnly]=\"readOnly\"\r\n  >\r\n  </sof-doc-control>\r\n</ng-container>" }]
        }], propDecorators: { type: [{
                type: Input
            }], minLength: [{
                type: Output
            }], control: [{
                type: ViewChild,
                args: [DocControlComponent]
            }] } });

function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
class SharedModule {
}
SharedModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SharedModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedModule, imports: [CommonModule,
        MaterialControlsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatLuxonDateModule,
        TranslateModule,
        HttpClientModule], exports: [CommonModule,
        MaterialControlsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatLuxonDateModule,
        TranslateModule,
        HttpClientModule] });
SharedModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedModule, imports: [[
            CommonModule,
            MaterialControlsModule,
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule,
            MatLuxonDateModule,
            TranslateModule,
            HttpClientModule
        ], CommonModule,
        MaterialControlsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatLuxonDateModule,
        TranslateModule,
        HttpClientModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MaterialControlsModule,
                        ReactiveFormsModule,
                        FormsModule,
                        HttpClientModule,
                        MatLuxonDateModule,
                        TranslateModule,
                        HttpClientModule
                    ],
                    exports: [
                        CommonModule,
                        MaterialControlsModule,
                        ReactiveFormsModule,
                        FormsModule,
                        HttpClientModule,
                        MatLuxonDateModule,
                        TranslateModule,
                        HttpClientModule
                    ]
                }]
        }] });

class LangComponent extends I18nOptions {
    constructor(translate, controlDir, _adapter, _locale, pipeTranslate) {
        super(controlDir, pipeTranslate, translate);
        this.translate = translate;
        this.controlDir = controlDir;
        this._adapter = _adapter;
        this._locale = _locale;
        this.pipeTranslate = pipeTranslate;
        this.activedLang = 'es';
        translate.addLangs(['es', 'en']);
        translate.setDefaultLang(this.activedLang);
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/es|en/) ? browserLang : this.activedLang);
    }
    changeLang(lang) {
        this.activedLang = lang;
        this.translate.use(lang);
        //DatePicker
        this._locale = lang;
        this._adapter.setLocale(this._locale);
    }
}
LangComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LangComponent, deps: [{ token: i2$1.TranslateService }, { token: i2.NgControl, self: true }, { token: i3.DateAdapter }, { token: MAT_DATE_LOCALE }, { token: i2$1.TranslatePipe }], target: i0.ɵɵFactoryTarget.Component });
LangComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: LangComponent, selector: "app-lang", usesInheritance: true, ngImport: i0, template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-select-control\r\n    #langSelect\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    textPath=\"option\"\r\n    valuePath=\"value\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    (change)=\"changeLang(langSelect.value)\"\r\n  >\r\n  </sof-select-control>\r\n</ng-container>", styles: [""], components: [{ type: i1.SelectMaterialControlComponent, selector: "sof-select-control" }], directives: [{ type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: LangComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-lang', template: "<ng-container [formGroup]=\"getFbGroup()\">\r\n  <sof-select-control\r\n    #langSelect\r\n    label=\"{{labelToTranslate | translate }}\"\r\n    placeholder=\"{{placeholderToTranslate | translate}}\"\r\n    textPath=\"option\"\r\n    valuePath=\"value\"\r\n    [formControlName]=\"controlDir.name\"\r\n    [list]=\"listFinal\"\r\n    (change)=\"changeLang(langSelect.value)\"\r\n  >\r\n  </sof-select-control>\r\n</ng-container>", styles: [""] }]
        }], ctorParameters: function () {
        return [{ type: i2$1.TranslateService }, { type: i2.NgControl, decorators: [{
                        type: Self
                    }] }, { type: i3.DateAdapter }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [MAT_DATE_LOCALE]
                    }] }, { type: i2$1.TranslatePipe }];
    } });

class I18nWrapperModule {
}
I18nWrapperModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18nWrapperModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, declarations: [LangComponent,
        I18nTextControlComponent,
        I18nNumberControlComponent,
        I18nPrefixControlComponent,
        I18nCheckboxControlComponent,
        I18nDenseTextControlComponent,
        I18nCardComponent,
        I18nDatePickerControlComponent,
        I18nPasswordControlComponent,
        I18nCardComponent,
        I18nPhoneControlComponent,
        I18nSelectControlComponent,
        I18nSearchBoxControlComponent,
        I18nAutocompleteComponent,
        I18nFileUploadControlComponent,
        I18nRadioButtonComponent,
        I18nTimePickerControlComponent,
        I18nTextAreaControlComponent,
        I18nDynamicFormComponent,
        I18nDocControlComponent,
        I18nCheckboxGroupControlComponent,
        I18nDateRangePickerControlComponent], imports: [CommonModule,
        SharedModule,
        MatGridListModule,
        MatButtonModule], exports: [TranslatePipe,
        LangComponent,
        I18nTextControlComponent,
        I18nNumberControlComponent,
        I18nCheckboxControlComponent,
        I18nPasswordControlComponent,
        I18nDenseTextControlComponent,
        I18nCardComponent,
        I18nDatePickerControlComponent,
        I18nPhoneControlComponent,
        I18nSelectControlComponent,
        I18nSearchBoxControlComponent,
        I18nAutocompleteComponent,
        I18nFileUploadControlComponent,
        I18nRadioButtonComponent,
        I18nTimePickerControlComponent,
        I18nTextAreaControlComponent,
        I18nDynamicFormComponent,
        I18nDocControlComponent,
        I18nCheckboxGroupControlComponent,
        I18nDateRangePickerControlComponent,
        I18nPrefixControlComponent] });
I18nWrapperModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, providers: [], imports: [[
            CommonModule,
            SharedModule,
            MatGridListModule,
            MatButtonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nWrapperModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [],
                    imports: [
                        CommonModule,
                        SharedModule,
                        MatGridListModule,
                        MatButtonModule
                    ],
                    declarations: [
                        LangComponent,
                        I18nTextControlComponent,
                        I18nNumberControlComponent,
                        I18nPrefixControlComponent,
                        I18nCheckboxControlComponent,
                        I18nDenseTextControlComponent,
                        I18nCardComponent,
                        I18nDatePickerControlComponent,
                        I18nPasswordControlComponent,
                        I18nCardComponent,
                        I18nPhoneControlComponent,
                        I18nSelectControlComponent,
                        I18nSearchBoxControlComponent,
                        I18nAutocompleteComponent,
                        I18nFileUploadControlComponent,
                        I18nRadioButtonComponent,
                        I18nTimePickerControlComponent,
                        I18nTextAreaControlComponent,
                        I18nDynamicFormComponent,
                        I18nDocControlComponent,
                        I18nCheckboxGroupControlComponent,
                        I18nDateRangePickerControlComponent
                    ],
                    exports: [
                        TranslatePipe,
                        LangComponent,
                        I18nTextControlComponent,
                        I18nNumberControlComponent,
                        I18nCheckboxControlComponent,
                        I18nPasswordControlComponent,
                        I18nDenseTextControlComponent,
                        I18nCardComponent,
                        I18nDatePickerControlComponent,
                        I18nPhoneControlComponent,
                        I18nSelectControlComponent,
                        I18nSearchBoxControlComponent,
                        I18nAutocompleteComponent,
                        I18nFileUploadControlComponent,
                        I18nRadioButtonComponent,
                        I18nTimePickerControlComponent,
                        I18nTextAreaControlComponent,
                        I18nDynamicFormComponent,
                        I18nDocControlComponent,
                        I18nCheckboxGroupControlComponent,
                        I18nDateRangePickerControlComponent,
                        I18nPrefixControlComponent
                    ],
                }]
        }] });

class I18nBadgeControlComponent extends BadgeComponent {
}
I18nBadgeControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nBadgeControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nBadgeControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nBadgeControlComponent, selector: "app-i18n-badge-control", usesInheritance: true, ngImport: i0, template: "<div class=\"badge-container\">\r\n    <span *ngIf=\"config\"  \r\n        class=\"badge\" \r\n        [style.background-color]=\"config.badgeColor\"\r\n        [style.color]=\"config.badgeTextColor\"\r\n        >{{config.text | translate}}</span>\r\n  </div>", styles: [".badge{padding:4px 16px;border-radius:10px}\n"], directives: [{ type: i20.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nBadgeControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-badge-control', template: "<div class=\"badge-container\">\r\n    <span *ngIf=\"config\"  \r\n        class=\"badge\" \r\n        [style.background-color]=\"config.badgeColor\"\r\n        [style.color]=\"config.badgeTextColor\"\r\n        >{{config.text | translate}}</span>\r\n  </div>", styles: [".badge{padding:4px 16px;border-radius:10px}\n"] }]
        }] });

class I18nRowOptionsComponent extends RowOptionsComponent {
}
I18nRowOptionsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRowOptionsComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
I18nRowOptionsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nRowOptionsComponent, selector: "app-i18n-row-options", usesInheritance: true, ngImport: i0, template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon matTooltip=\"{{'GRID.MENU.TYPEHEAD-OPTIONS'|translate}}\"> more_vert </mat-icon>\r\n</button>\r\n<div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button\r\n      mat-menu-item\r\n      *ngFor=\"let opt of options\"\r\n      (click)=\"accionar(opt)\"\r\n    >\r\n      {{ opt.option | translate }}\r\n    </button>\r\n  </mat-menu>\r\n</div>\r\n", components: [{ type: i19.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2$3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i3$1.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { type: i3$1.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }], directives: [{ type: i3$1.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }, { type: i4.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { type: i20.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "translate": i2$1.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nRowOptionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-row-options', template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon matTooltip=\"{{'GRID.MENU.TYPEHEAD-OPTIONS'|translate}}\"> more_vert </mat-icon>\r\n</button>\r\n<div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button\r\n      mat-menu-item\r\n      *ngFor=\"let opt of options\"\r\n      (click)=\"accionar(opt)\"\r\n    >\r\n      {{ opt.option | translate }}\r\n    </button>\r\n  </mat-menu>\r\n</div>\r\n", styles: [] }]
        }] });

class I18nGridControlComponent {
    constructor(pipeTranslate, _srvTranslatePipe) {
        this.pipeTranslate = pipeTranslate;
        this._srvTranslatePipe = _srvTranslatePipe;
        this.onGridApi = new EventEmitter();
        this.pageChangeEvent = new EventEmitter();
        this.onMemorySearch = true;
        this.i18nGridPaginationPageSize = 10;
        this.i18nGridPagination = true;
        /**
         * @summary gridRowSelection indica el tipo de seleccion en la grilla
         * @param single solo se puede seleccionar una fila a la vez
         * @param multiple se pueden seleccionar varias filas
         */
        this.i18nGridRowSelection = 'single';
        /**
         * Animacion de las filas en ordenamiento
         */
        this.i18nGridAnimateRows = false;
        /**
         * En caso de que sea verdadera se encarga de mostrar el campo de page size editable,
         * caso contrario esconde el campo
         */
        this.i18nGridPageSizeEditable = true;
        /**
         * Texto que se muestra como label el input pageSize
         */
        this.i18nGridPageSizeText = 'Paginas por fila';
        /**
         * En caso de que sea verdadero va a mostrar los checkboxes en la primer columna
         * caso contrario no se van a agregar las checkboxes
         */
        this.i18nGridCheckboxesToSelection = false;
    }
    get PageSizeText() {
        return this.pipeTranslate.transform(this.i18nGridPageSizeText) || '';
    }
    ngOnInit() {
        this.changeLocaleOnLangeChanged();
        this.transformLocale();
    }
    ngAfterViewInit() {
        this.transformI18nColumnRaws();
    }
    changeLocaleOnLangeChanged() {
        this.listenerToLangChange$ = this._srvTranslatePipe.onLangChange.subscribe((res) => {
            this.transformLocale();
            this.transformI18nColumnRaws();
        });
    }
    transformLocale() {
        return __awaiter(this, void 0, void 0, function* () {
            //Extraigo las variables para mandar al localeText de la grilla
            const { of, to, page, noRowsToShow } = yield lastValueFrom(this._srvTranslatePipe.get('GRID'));
            if (!of || !to || !page || !noRowsToShow) {
                throw new Error('No estan definidas las traducciones para las opciones de la grilla');
            }
            this.gridControl.localeText = { of, to, page, noRowsToShow };
            this.gridControl.doRerender();
        });
    }
    transformI18nColumnRaws() {
        return __awaiter(this, void 0, void 0, function* () {
            //To promise deprecated => Reemplazo con "lastValueFrom"
            //https://indepth.dev/posts/1287/rxjs-heads-up-topromise-is-being-deprecated
            //Espero a tener las traducciones
            yield lastValueFrom(this._srvTranslatePipe.get('GRID'));
            //Recorro columnas para setearles la funcion que va a devolver la traduccion
            const columnDefs = this.i18nGridColDefsRaw.map((x) => {
                x.headerValueGetter = () => {
                    const translate = this.pipeTranslate.transform(x.headerName);
                    return translate;
                };
                return x;
            });
            //Seteo columnas en GridControl
            this.gridControl.gridColDefsRaw = columnDefs;
            //Normalizo las colDefs que pase
            this.gridControl.transformColumnRaws();
        });
    }
    ngOnDestroy() {
        this.listenerToLangChange$.unsubscribe();
    }
}
I18nGridControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nGridControlComponent, deps: [{ token: i2$1.TranslatePipe }, { token: i2$1.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
I18nGridControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nGridControlComponent, selector: "app-i18n-grid-control", inputs: { i18nRowId: "i18nRowId", onMemorySearch: "onMemorySearch", totalItems: "totalItems", i18nGridRowData: "i18nGridRowData", i18nGridColDefsRaw: "i18nGridColDefsRaw", i18nGridPaginationPageSize: "i18nGridPaginationPageSize", i18nGridPagination: "i18nGridPagination", i18nGridRowSelection: "i18nGridRowSelection", i18nGridAnimateRows: "i18nGridAnimateRows", i18nGridPageSizeEditable: "i18nGridPageSizeEditable", i18nGridPageSizeText: "i18nGridPageSizeText", i18nGridCheckboxesToSelection: "i18nGridCheckboxesToSelection", isRowSelectableFn: "isRowSelectableFn" }, outputs: { onGridApi: "onGridApi", pageChangeEvent: "pageChangeEvent" }, viewQueries: [{ propertyName: "gridControl", first: true, predicate: GridControlComponent, descendants: true }], ngImport: i0, template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n    [rowId]=\"i18nRowId\"\r\n    [isRowSelectableFn]=\"isRowSelectableFn\"\r\n    [onMemorySearch]=\"onMemorySearch\"\r\n    [totalItems]=\"totalItems\"\r\n    (pageChangeEvent)=\"pageChangeEvent.emit($event)\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""], components: [{ type: i1.GridControlComponent, selector: "sof-grid-control", inputs: ["totalItems", "onMemorySearch", "gridRowOptions", "gridRowData", "gridColDefsRaw", "gridPaginationPageSize", "gridPagination", "gridRowSelection", "localeText", "gridAnimateRows", "gridPageSizeEditable", "gridPageSizeText", "gridChecboxesToSelection", "rowId", "isRowSelectableFn"], outputs: ["gridReady", "pageChangeEvent"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nGridControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-i18n-grid-control', template: "\r\n  <sof-grid-control\r\n    [gridRowData]=\"i18nGridRowData\"\r\n    [gridColDefsRaw]=\"[]\"\r\n    [gridPaginationPageSize]=\"i18nGridPaginationPageSize\"\r\n    [gridPagination]=\"i18nGridPagination\"\r\n    [gridRowSelection]=\"i18nGridRowSelection\"\r\n    [gridAnimateRows]=\"i18nGridAnimateRows\"\r\n    [gridPageSizeEditable]=\"i18nGridPageSizeEditable\"\r\n    [gridPageSizeText]=\"PageSizeText\"\r\n    [gridChecboxesToSelection]=\"i18nGridCheckboxesToSelection\"\r\n    (gridReady)=\"onGridApi.emit($event)\"\r\n    [rowId]=\"i18nRowId\"\r\n    [isRowSelectableFn]=\"isRowSelectableFn\"\r\n    [onMemorySearch]=\"onMemorySearch\"\r\n    [totalItems]=\"totalItems\"\r\n    (pageChangeEvent)=\"pageChangeEvent.emit($event)\"\r\n  >\r\n  \r\n  </sof-grid-control>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i2$1.TranslatePipe }, { type: i2$1.TranslateService }]; }, propDecorators: { onGridApi: [{
                type: Output
            }], pageChangeEvent: [{
                type: Output
            }], i18nRowId: [{
                type: Input
            }], onMemorySearch: [{
                type: Input
            }], totalItems: [{
                type: Input
            }], gridControl: [{
                type: ViewChild,
                args: [GridControlComponent]
            }], i18nGridRowData: [{
                type: Input
            }], i18nGridColDefsRaw: [{
                type: Input
            }], i18nGridPaginationPageSize: [{
                type: Input
            }], i18nGridPagination: [{
                type: Input
            }], i18nGridRowSelection: [{
                type: Input
            }], i18nGridAnimateRows: [{
                type: Input
            }], i18nGridPageSizeEditable: [{
                type: Input
            }], i18nGridPageSizeText: [{
                type: Input
            }], i18nGridCheckboxesToSelection: [{
                type: Input
            }], isRowSelectableFn: [{
                type: Input
            }] } });

class I18GridControlModule {
}
I18GridControlModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18GridControlModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18GridControlModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18GridControlModule, declarations: [I18nGridControlComponent,
        I18nBadgeControlComponent,
        I18nRowOptionsComponent], imports: [GridControlModule,
        SharedModule,
        MatButtonModule,
        MatMenuModule,
        MatInputModule,
        MatTooltipModule,
        MatIconModule], exports: [I18nGridControlComponent,
        I18nBadgeControlComponent,
        I18nRowOptionsComponent] });
I18GridControlModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18GridControlModule, providers: [], imports: [[
            GridControlModule,
            SharedModule,
            MatButtonModule,
            MatMenuModule,
            MatInputModule,
            MatTooltipModule,
            MatIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18GridControlModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        GridControlModule,
                        SharedModule,
                        MatButtonModule,
                        MatMenuModule,
                        MatInputModule,
                        MatTooltipModule,
                        MatIconModule
                    ],
                    exports: [
                        I18nGridControlComponent,
                        I18nBadgeControlComponent,
                        I18nRowOptionsComponent,
                    ],
                    declarations: [
                        I18nGridControlComponent,
                        I18nBadgeControlComponent,
                        I18nRowOptionsComponent
                    ],
                    providers: [],
                }]
        }] });

class I18nControlsModule {
}
I18nControlsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nControlsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
I18nControlsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nControlsModule, exports: [I18nWrapperModule, I18GridControlModule] });
I18nControlsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nControlsModule, imports: [[], I18nWrapperModule, I18GridControlModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: I18nControlsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [I18nWrapperModule, I18GridControlModule],
                }]
        }] });

class MyCustomPaginatorIntl {
    constructor(translateService) {
        this.translateService = translateService;
        this.changes = new Subject();
        this.firstPageLabel = ``;
        this.itemsPerPageLabel = '';
        this.lastPageLabel = ``;
        this.ItemsOfLabel = '';
        this.nextPageLabel = '';
        this.previousPageLabel = '';
        this.onInit();
    }
    onInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const loadLabels = () => __awaiter(this, void 0, void 0, function* () {
                const labels = yield firstValueFrom(this.translateService.get('GRID'));
                this.itemsPerPageLabel = labels['PAGE-SIZETEXT'];
                this.ItemsOfLabel = labels['of'];
            });
            yield loadLabels();
            this.translateService.onLangChange.subscribe((_) => __awaiter(this, void 0, void 0, function* () { return yield loadLabels(); }));
        });
    }
    getRangeLabel(page, pageSize, length) {
        if (length === 0) {
            return `0 - ${length} ${this.ItemsOfLabel} ${length}`;
        }
        const itemTo = (page + 1) * pageSize;
        const itemFrom = ((page + 1) * pageSize) - pageSize + 1;
        return `${itemFrom} - ${itemTo > length ? length : itemTo} ${this.ItemsOfLabel} ${length}`;
    }
}
MyCustomPaginatorIntl.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: MyCustomPaginatorIntl, deps: [{ token: i2$1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable });
MyCustomPaginatorIntl.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: MyCustomPaginatorIntl });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: MyCustomPaginatorIntl, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2$1.TranslateService }]; } });

/*
 * Public API Surface of i18n-controls
 */

/**
 * Generated bundle index. Do not edit.
 */

export { I18GridControlModule, I18nAutocompleteComponent, I18nBadgeControlComponent, I18nCardComponent, I18nCheckboxControlComponent, I18nCheckboxGroupControlComponent, I18nControlsModule, I18nDatePickerControlComponent, I18nDateRangePickerControlComponent, I18nDenseTextControlComponent, I18nDocControlComponent, I18nDynamicFormComponent, I18nFileUploadControlComponent, I18nGridControlComponent, I18nNumberControlComponent, I18nPasswordControlComponent, I18nPhoneControlComponent, I18nPrefixControlComponent, I18nRadioButtonComponent, I18nRowOptionsComponent, I18nSearchBoxControlComponent, I18nSelectControlComponent, I18nTextAreaControlComponent, I18nTextControlComponent, I18nTimePickerControlComponent, I18nWrapperModule, LangComponent, MyCustomPaginatorIntl };
//# sourceMappingURL=sof-i18n-controls.mjs.map
