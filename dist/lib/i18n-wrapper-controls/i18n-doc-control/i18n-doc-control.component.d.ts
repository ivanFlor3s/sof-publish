import { AfterViewInit, EventEmitter } from '@angular/core';
import { DocControlComponent } from 'sof-ng-controls';
import { TypeDocuments } from 'sof-ng-controls/lib/material-controls/doc-control/type.enum';
import { I18nBase } from '../../shared/models/base';
import * as i0 from "@angular/core";
export declare class I18nDocControlComponent extends I18nBase implements AfterViewInit {
    type: TypeDocuments;
    minLength: EventEmitter<number>;
    control: DocControlComponent;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<I18nDocControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<I18nDocControlComponent, "app-i18n-doc-control", never, { "type": "type"; }, { "minLength": "minLength"; }, never, never>;
}
