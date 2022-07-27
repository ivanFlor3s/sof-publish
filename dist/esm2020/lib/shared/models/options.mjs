import { Component, Input } from '@angular/core';
import { I18nBase } from './base';
import * as i0 from "@angular/core";
export class I18nOptions extends I18nBase {
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
                            this.listFinal.push({ ...this.listTmp.find((x) => x.option == prop), option: translations[prop] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9zaGFyZWQvbW9kZWxzL29wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBT2xDLE1BQU0sT0FBTyxXQUFZLFNBQVEsUUFBUTtJQUx6Qzs7UUFTYSxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFckMsY0FBUyxHQUFVLEVBQUUsQ0FBQztLQWtEekI7SUFoREcsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUNJLElBQUksQ0FBQyxXQUFXO1lBQ2hCLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUTtZQUN6QixJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sRUFDM0I7WUFDRSxJQUFJLE9BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUM1QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDOzRCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQ0FDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7Z0NBQ2pCLEtBQUssRUFBRSxHQUFHOzZCQUNiLENBQUMsQ0FBQztvQkFDWCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sWUFBWSxLQUFLLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ2pGLEtBQUssTUFBTSxJQUFJLElBQUksWUFBWTt3QkFDM0IsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQzs0QkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwSCxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0o7YUFDSSxJQUNELE9BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUTtZQUNqQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ25CO1lBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2pDO2FBQ0k7WUFDRCxNQUFNLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO1NBQ3JGO0lBQ0wsQ0FBQzs7d0dBekRRLFdBQVc7NEZBQVgsV0FBVywwTUFKVixFQUFFOzJGQUlILFdBQVc7a0JBTHZCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLEVBQUU7aUJBQ2Y7OEJBTVksT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgU2VsZiwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSTE4bkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogJydcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSTE4bk9wdGlvbnMgZXh0ZW5kcyBJMThuQmFzZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgXHJcbiAgICBASW5wdXQoKSBsaXN0VG1wOiBhbnk7XHJcbiAgICBASW5wdXQoKSB0ZXh0UGF0aDogc3RyaW5nID0gJ29wdGlvbic7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVBhdGg6IHN0cmluZyA9ICd2YWx1ZSc7XHJcbiAgICBASW5wdXQoKSB0b1RyYW5zbGF0ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBcclxuICAgIGxpc3RGaW5hbDogYW55W10gPSBbXTtcclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdFRtcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdFRtcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dPcHRpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzaG93T3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmxpc3RGaW5hbCA9IFtdO1xyXG4gICAgICAgIGlmICggXHJcbiAgICAgICAgICAgIHRoaXMudG9UcmFuc2xhdGUgJiYgXHJcbiAgICAgICAgICAgIHRoaXMudGV4dFBhdGggPT0gJ29wdGlvbicgJiYgXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVQYXRoID09ICd2YWx1ZScgXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5saXN0VG1wKSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUuZ2V0KHRoaXMubGlzdFRtcCkuc3Vic2NyaWJlKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEZpbmFsLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbVtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5saXN0VG1wIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUuZ2V0KHRoaXMubGlzdFRtcC5tYXAoeCA9PiB4Lm9wdGlvbikpLnN1YnNjcmliZSh0cmFuc2xhdGlvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiB0cmFuc2xhdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbnMuaGFzT3duUHJvcGVydHkocHJvcCkpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RmluYWwucHVzaCh7IC4uLnRoaXMubGlzdFRtcC5maW5kKCh4OiBhbnkpID0+IHgub3B0aW9uID09IHByb3ApLCBvcHRpb246IHRyYW5zbGF0aW9uc1twcm9wXSB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFxyXG4gICAgICAgICAgICB0eXBlb2YodGhpcy5saXN0VG1wKSA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgICAgICAgIXRoaXMudG9UcmFuc2xhdGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0RmluYWwgPSB0aGlzLmxpc3RUbXA7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0Vycm9yIGVuIGxhIGVzdHJ1Y3R1cmEgZGUgaW5wdXRzISBWZXJpZmlxdcOpbG8geSB2dWVsdmEgYSBpbnRlbnRhci4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19