import { Component, Input, Self, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import { I18nBase } from './base';

@Component({
    template: ''
})


export class I18nOptions extends I18nBase implements OnChanges {

    
    @Input() listTmp: any;
    @Input() textPath: string = 'option';
    @Input() valuePath: string = 'value';
    @Input() toTranslate: boolean = true;
    
    listFinal: any[] = [];
    
    ngOnInit(): void {
        if (this.listTmp) {
            this.showOptions();
        }
    }
    
    ngOnChanges(changes: SimpleChanges): void {
        if (this.listTmp) {
            this.showOptions();
        }
    }
    
    showOptions() {
        this.listFinal = [];
        if ( 
            this.toTranslate && 
            this.textPath == 'option' && 
            this.valuePath == 'value' 
        ) {
            if (typeof(this.listTmp) === 'string') {
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
                            this.listFinal.push({ ...this.listTmp.find((x: any) => x.option == prop), option: translations[prop] });
                });
            }
        }
        else if (
            typeof(this.listTmp) === 'object' &&
            !this.toTranslate
        ) {
            this.listFinal = this.listTmp;
        } 
        else {
            throw Error('Error en la estructura de inputs! Verifiquélo y vuelva a intentar.');
        }
    }
}
