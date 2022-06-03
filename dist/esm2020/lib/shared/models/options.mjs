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
    showOptions() {
        this.listFinal = [];
        if (typeof (this.listTmp) === 'string' &&
            this.toTranslate
            && this.textPath == 'option' &&
            this.valuePath == 'value') {
            this._srvTranslatePipe.get(this.listTmp).subscribe(item => {
                const tmp = Object.keys(item).map(key => item[key]);
                for (const item of tmp) {
                    this.listFinal.push({
                        option: item,
                        value: item
                    });
                }
            });
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
I18nOptions.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: I18nOptions, selector: "ng-component", inputs: { listTmp: "listTmp", textPath: "textPath", valuePath: "valuePath", toTranslate: "toTranslate" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9zaGFyZWQvbW9kZWxzL29wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBT2xDLE1BQU0sT0FBTyxXQUFZLFNBQVEsUUFBUTtJQUx6Qzs7UUFRYSxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFckMsY0FBUyxHQUFVLEVBQUUsQ0FBQztLQW9DekI7SUFsQ0csUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFDSSxPQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVE7WUFDakMsSUFBSSxDQUFDLFdBQVc7ZUFDWixJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVE7WUFDN0IsSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLEVBQzVCO1lBQ0csSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsRUFBRTtvQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ2Y7d0JBQ0ksTUFBTSxFQUFFLElBQUk7d0JBQ1osS0FBSyxFQUFFLElBQUk7cUJBQ2QsQ0FDSixDQUFBO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFLLElBQ0YsT0FBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxRQUFRO1lBQ2pDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFDcEI7WUFDRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDakM7YUFBSTtZQUNELE1BQU0sS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7U0FDckY7SUFDTCxDQUFDOzt3R0ExQ1EsV0FBVzs0RkFBWCxXQUFXLHFMQUpWLEVBQUU7MkZBSUgsV0FBVztrQkFMdkIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsRUFBRTtpQkFDZjs4QkFLWSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBTZWxmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSTE4bkJhc2UgfSBmcm9tICcuL2Jhc2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogJydcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSTE4bk9wdGlvbnMgZXh0ZW5kcyBJMThuQmFzZSB7XHJcbiAgICBcclxuICAgIEBJbnB1dCgpIGxpc3RUbXA6IGFueTtcclxuICAgIEBJbnB1dCgpIHRleHRQYXRoOiBzdHJpbmcgPSAnb3B0aW9uJztcclxuICAgIEBJbnB1dCgpIHZhbHVlUGF0aDogc3RyaW5nID0gJ3ZhbHVlJztcclxuICAgIEBJbnB1dCgpIHRvVHJhbnNsYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBsaXN0RmluYWw6IGFueVtdID0gW107XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RUbXApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93T3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLmxpc3RGaW5hbCA9IFtdO1xyXG4gICAgICAgIGlmKCBcclxuICAgICAgICAgICAgdHlwZW9mKHRoaXMubGlzdFRtcCkgPT09ICdzdHJpbmcnICYmIFxyXG4gICAgICAgICAgICB0aGlzLnRvVHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAmJiB0aGlzLnRleHRQYXRoID09ICdvcHRpb24nICYmIFxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlUGF0aCA9PSAndmFsdWUnIFxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHRoaXMuX3NydlRyYW5zbGF0ZVBpcGUuZ2V0KHRoaXMubGlzdFRtcCkuc3Vic2NyaWJlKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gT2JqZWN0LmtleXMoaXRlbSkubWFwKGtleSA9PiBpdGVtW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEZpbmFsLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pOyAgICBcclxuICAgICAgICB9ZWxzZSBpZihcclxuICAgICAgICAgICAgdHlwZW9mKHRoaXMubGlzdFRtcCkgPT09ICdvYmplY3QnICYmXHJcbiAgICAgICAgICAgICF0aGlzLnRvVHJhbnNsYXRlXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0RmluYWwgPSB0aGlzLmxpc3RUbXA7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFcnJvciBlbiBsYSBlc3RydWN0dXJhIGRlIGlucHV0cyEgVmVyaWZpcXXDqWxvIHkgdnVlbHZhIGEgaW50ZW50YXIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==