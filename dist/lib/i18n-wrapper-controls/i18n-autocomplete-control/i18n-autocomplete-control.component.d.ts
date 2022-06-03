import { AfterViewInit } from '@angular/core';
import { AutocompleteMaterialControlComponent } from 'sof-ng-controls';
import { I18nOptions } from '../../shared/models/options';
import * as i0 from "@angular/core";
export declare class I18nAutocompleteComponent extends I18nOptions implements AfterViewInit {
    control: AutocompleteMaterialControlComponent;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nAutocompleteComponent, "app-i18n-autocomplete-control", never, {}, {}, never, never>;
}
