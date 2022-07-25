import { OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { TextControlComponent } from '../../base/text-control/text-control.component';
import { ErrorMaterialComponent } from '../error/error.component';
import { TypeDocuments } from './type.enum';
import * as i0 from "@angular/core";
export declare class DocControlComponent extends TextControlComponent implements OnInit, OnChanges {
    errorControl: ErrorMaterialComponent;
    type: TypeDocuments;
    minLength: EventEmitter<number>;
    customMask: any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setMask(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DocControlComponent, "sof-doc-control", never, { "type": "type"; }, { "minLength": "minLength"; }, never, never>;
}
