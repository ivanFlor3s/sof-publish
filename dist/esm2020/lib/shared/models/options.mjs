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
                    const tmp = Object.keys(item).map(key => item[key]);
                    for (const item of tmp) {
                        this.listFinal.push({
                            option: item,
                            value: item
                        });
                    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9zaGFyZWQvbW9kZWxzL29wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBT2xDLE1BQU0sT0FBTyxXQUFZLFNBQVEsUUFBUTtJQUx6Qzs7UUFTYSxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFckMsY0FBUyxHQUFVLEVBQUUsQ0FBQztLQW9EekI7SUFsREcsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUNJLElBQUksQ0FBQyxXQUFXO1lBQ2hCLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUTtZQUN6QixJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sRUFDM0I7WUFDRSxJQUFJLE9BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3BELEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxFQUFFO3dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDZjs0QkFDSSxNQUFNLEVBQUUsSUFBSTs0QkFDWixLQUFLLEVBQUUsSUFBSTt5QkFDZCxDQUNKLENBQUM7cUJBQ0w7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDTjtpQkFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksS0FBSyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUNqRixLQUFLLE1BQU0sSUFBSSxJQUFJLFlBQVk7d0JBQzNCLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7NEJBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEgsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO2FBQ0ksSUFDRCxPQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVE7WUFDakMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUNuQjtZQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNqQzthQUNJO1lBQ0QsTUFBTSxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQztTQUNyRjtJQUNMLENBQUM7O3dHQTNEUSxXQUFXOzRGQUFYLFdBQVcsME1BSlYsRUFBRTsyRkFJSCxXQUFXO2tCQUx2QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxFQUFFO2lCQUNmOzhCQU1ZLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFNlbGYsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEkxOG5CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEkxOG5PcHRpb25zIGV4dGVuZHMgSTE4bkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAgIFxyXG4gICAgQElucHV0KCkgbGlzdFRtcDogYW55O1xyXG4gICAgQElucHV0KCkgdGV4dFBhdGg6IHN0cmluZyA9ICdvcHRpb24nO1xyXG4gICAgQElucHV0KCkgdmFsdWVQYXRoOiBzdHJpbmcgPSAndmFsdWUnO1xyXG4gICAgQElucHV0KCkgdG9UcmFuc2xhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgXHJcbiAgICBsaXN0RmluYWw6IGFueVtdID0gW107XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RUbXApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RUbXApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvd09wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RmluYWwgPSBbXTtcclxuICAgICAgICBpZiAoIFxyXG4gICAgICAgICAgICB0aGlzLnRvVHJhbnNsYXRlICYmIFxyXG4gICAgICAgICAgICB0aGlzLnRleHRQYXRoID09ICdvcHRpb24nICYmIFxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlUGF0aCA9PSAndmFsdWUnIFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKHRoaXMubGlzdFRtcCkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcnZUcmFuc2xhdGVQaXBlLmdldCh0aGlzLmxpc3RUbXApLnN1YnNjcmliZShpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBPYmplY3Qua2V5cyhpdGVtKS5tYXAoa2V5ID0+IGl0ZW1ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RGaW5hbC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjogaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubGlzdFRtcCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zcnZUcmFuc2xhdGVQaXBlLmdldCh0aGlzLmxpc3RUbXAubWFwKHggPT4geC5vcHRpb24pKS5zdWJzY3JpYmUodHJhbnNsYXRpb25zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gdHJhbnNsYXRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNsYXRpb25zLmhhc093blByb3BlcnR5KHByb3ApKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEZpbmFsLnB1c2goeyAuLi50aGlzLmxpc3RUbXAuZmluZCgoeDogYW55KSA9PiB4Lm9wdGlvbiA9PSBwcm9wKSwgb3B0aW9uOiB0cmFuc2xhdGlvbnNbcHJvcF0gfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChcclxuICAgICAgICAgICAgdHlwZW9mKHRoaXMubGlzdFRtcCkgPT09ICdvYmplY3QnICYmXHJcbiAgICAgICAgICAgICF0aGlzLnRvVHJhbnNsYXRlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEZpbmFsID0gdGhpcy5saXN0VG1wO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFcnJvciBlbiBsYSBlc3RydWN0dXJhIGRlIGlucHV0cyEgVmVyaWZpcXXDqWxvIHkgdnVlbHZhIGEgaW50ZW50YXIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==