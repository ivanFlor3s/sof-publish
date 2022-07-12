import { Component, Input } from '@angular/core';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import * as i0 from "@angular/core";
export class FileUploadControlComponent extends BaseFormFieldComponent {
    constructor() {
        super(...arguments);
        this.multiple = false;
    }
    onInput(value) {
        value = this.normalizeValue(value);
        this.changeValue(value);
    }
    writeValue(value) {
        value = this.normalizeValue(value);
        if (value) {
            this.value = value || [];
        }
        else {
            this.value = [];
        }
    }
    normalizeValue(value) {
        if (value instanceof FileList)
            value = Array.from(value);
        return value;
    }
    ;
    getDisplayFileInfo() {
        if (!this.value || this.value.length == 0)
            return '';
        if (!!this.value.length)
            return Array.prototype.map.call(this.value, x => `${x.name}`).join(', ');
        //o Array.from(this.value).map(x => `${x.name}`).join(', ')
        else
            return `${this.value.name}`;
    }
}
FileUploadControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
FileUploadControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FileUploadControlComponent, selector: "ng-component", inputs: { multiple: "multiple", accept: "accept" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FileUploadControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { multiple: [{
                type: Input
            }], accept: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb250cm9scy9zcmMvbGliL2Jhc2UvZmlsZS11cGxvYWQtY29udHJvbC9maWxlLXVwbG9hZC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQzs7QUFLeEYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHNCQUFzQjtJQUh0RTs7UUFLVyxhQUFRLEdBQVksS0FBSyxDQUFDO0tBbUNwQztJQWhDQyxPQUFPLENBQUMsS0FBVTtRQUNoQixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFUSxVQUFVLENBQUMsS0FBVTtRQUM1QixLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0lBRVMsY0FBYyxDQUFDLEtBQVU7UUFDakMsSUFBSSxLQUFLLFlBQVksUUFBUTtZQUMzQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFBQSxDQUFDO0lBRUYsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUM7UUFFWixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDckIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLDJEQUEyRDs7WUFFL0QsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7d0hBcENVLDBCQUEwQjs0R0FBMUIsMEJBQTBCLCtIQUYzQixFQUFFOzRGQUVELDBCQUEwQjtrQkFIdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFHVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtRmllbGRDb21wb25lbnQgIHtcclxuXHJcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhY2NlcHQhOiBzdHJpbmc7XHJcblxyXG4gIG9uSW5wdXQodmFsdWU6IGFueSkge1xyXG4gICAgdmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdmFsdWUgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZpbGVMaXN0KVxyXG4gICAgICB2YWx1ZSA9IEFycmF5LmZyb20odmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH07XHJcbiAgXHJcbiAgZ2V0RGlzcGxheUZpbGVJbmZvKCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZS5sZW5ndGggPT0gMClcclxuICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgIGlmICghIXRoaXMudmFsdWUubGVuZ3RoKVxyXG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHRoaXMudmFsdWUsIHggPT4gYCR7eC5uYW1lfWApLmpvaW4oJywgJyk7IFxyXG4gICAgICAgICAgLy9vIEFycmF5LmZyb20odGhpcy52YWx1ZSkubWFwKHggPT4gYCR7eC5uYW1lfWApLmpvaW4oJywgJylcclxuICAgIGVsc2VcclxuICAgICAgcmV0dXJuIGAke3RoaXMudmFsdWUubmFtZX1gO1xyXG4gIH1cclxufVxyXG4iXX0=