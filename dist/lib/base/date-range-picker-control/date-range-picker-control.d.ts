import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';
import { BaseFormFieldComponent } from '../base-form-control/base-form-control';
import * as i0 from "@angular/core";
export declare class DateRangePickerControlComponent extends BaseFormFieldComponent implements OnInit, OnDestroy {
    private fb;
    controlDir: NgControl;
    editable: boolean;
    openOnClick: boolean;
    placeHolderFromDate: string;
    placeHolderToDate: string;
    rangeForm: FormGroup;
    changesSub: Subscription;
    constructor(fb: FormBuilder, controlDir: NgControl);
    ngOnInit(): void;
    buildAndLoadForm(): void;
    togglePicker(picker: MatDateRangePicker<any>): void;
    listenChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerControlComponent, [null, { optional: true; self: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerControlComponent, "ng-component", never, { "editable": "editable"; "openOnClick": "openOnClick"; "placeHolderFromDate": "placeHolderFromDate"; "placeHolderToDate": "placeHolderToDate"; }, {}, never, never>;
}
