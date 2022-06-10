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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2kxOG4tY29udHJvbHMvc3JjL2xpYi9zaGFyZWQvbW9kZWxzL29wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBT2xDLE1BQU0sT0FBTyxXQUFZLFNBQVEsUUFBUTtJQUx6Qzs7UUFTYSxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFckMsY0FBUyxHQUFVLEVBQUUsQ0FBQztLQTBDekI7SUF4Q0csUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUNJLE9BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUTtZQUNqQyxJQUFJLENBQUMsV0FBVztlQUNaLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUTtZQUM3QixJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sRUFDNUI7WUFDRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxFQUFFO29CQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FDZjt3QkFDSSxNQUFNLEVBQUUsSUFBSTt3QkFDWixLQUFLLEVBQUUsSUFBSTtxQkFDZCxDQUNKLENBQUE7aUJBQ0o7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQUssSUFDRixPQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVE7WUFDakMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUNwQjtZQUNHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNqQzthQUFJO1lBQ0QsTUFBTSxLQUFLLENBQUMsb0VBQW9FLENBQUMsQ0FBQztTQUNyRjtJQUNMLENBQUM7O3dHQWpEUSxXQUFXOzRGQUFYLFdBQVcsME1BSlYsRUFBRTsyRkFJSCxXQUFXO2tCQUx2QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxFQUFFO2lCQUNmOzhCQU1ZLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFNlbGYsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEkxOG5CYXNlIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEkxOG5PcHRpb25zIGV4dGVuZHMgSTE4bkJhc2UgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAgIFxyXG4gICAgQElucHV0KCkgbGlzdFRtcDogYW55O1xyXG4gICAgQElucHV0KCkgdGV4dFBhdGg6IHN0cmluZyA9ICdvcHRpb24nO1xyXG4gICAgQElucHV0KCkgdmFsdWVQYXRoOiBzdHJpbmcgPSAndmFsdWUnO1xyXG4gICAgQElucHV0KCkgdG9UcmFuc2xhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgXHJcbiAgICBsaXN0RmluYWw6IGFueVtdID0gW107XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RUbXApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RUbXApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93T3B0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgc2hvd09wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RmluYWwgPSBbXTtcclxuICAgICAgICBpZiggXHJcbiAgICAgICAgICAgIHR5cGVvZih0aGlzLmxpc3RUbXApID09PSAnc3RyaW5nJyAmJiBcclxuICAgICAgICAgICAgdGhpcy50b1RyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgJiYgdGhpcy50ZXh0UGF0aCA9PSAnb3B0aW9uJyAmJiBcclxuICAgICAgICAgICAgdGhpcy52YWx1ZVBhdGggPT0gJ3ZhbHVlJyBcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICB0aGlzLl9zcnZUcmFuc2xhdGVQaXBlLmdldCh0aGlzLmxpc3RUbXApLnN1YnNjcmliZShpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IE9iamVjdC5rZXlzKGl0ZW0pLm1hcChrZXkgPT4gaXRlbVtrZXldKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0bXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RGaW5hbC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb246IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgICAgXHJcbiAgICAgICAgfWVsc2UgaWYoXHJcbiAgICAgICAgICAgIHR5cGVvZih0aGlzLmxpc3RUbXApID09PSAnb2JqZWN0JyAmJlxyXG4gICAgICAgICAgICAhdGhpcy50b1RyYW5zbGF0ZVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEZpbmFsID0gdGhpcy5saXN0VG1wO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRXJyb3IgZW4gbGEgZXN0cnVjdHVyYSBkZSBpbnB1dHMhIFZlcmlmaXF1w6lsbyB5IHZ1ZWx2YSBhIGludGVudGFyLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=