import { AfterViewInit } from '@angular/core';
import { DateRangePickerMaterialControlComponent } from 'sof-ng-controls';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
export declare class I18nDateRangePickerControlComponent extends I18nBase implements AfterViewInit {
    control: DateRangePickerMaterialControlComponent;
    placeholderToTranslate: string;
    /**
     * En caso de true, se va a mostrar el calendario al hacer click en cualquier parte del input
     */
    openOnClick: boolean;
    /**
     * En caso de true se va a permitir editar las fechas, caso contrario estaran readonly y solo se podra editar desde el calendario
     */
    editable: boolean;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nDateRangePickerControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nDateRangePickerControlComponent, "app-i18n-date-range-picker-control", never, { "placeholderToTranslate": "placeholderToTranslate"; "openOnClick": "openOnClick"; "editable": "editable"; }, {}, never, never>;
}
