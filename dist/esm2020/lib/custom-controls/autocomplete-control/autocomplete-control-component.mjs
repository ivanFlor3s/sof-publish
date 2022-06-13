import { Component } from '@angular/core';
import { AutocompleteControlComponent } from '../../base/autocomplete-control/autocomplete-control.component';
import * as i0 from "@angular/core";
import * as i1 from "../error/error.component";
import * as i2 from "@angular/common";
export class AutocompleteCustomControlComponent extends AutocompleteControlComponent {
}
AutocompleteCustomControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AutocompleteCustomControlComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutocompleteCustomControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: AutocompleteCustomControlComponent, selector: "sof-autocomplete-control", usesInheritance: true, ngImport: i0, template: "\r\n<label>{{label}}\r\n\r\n  <input \r\n    class=\"form-control\" \r\n    list=\"lst\" \r\n    (input)=\"search($event)\"\r\n    [disabled]=\"disabled\"\r\n    [value]=\"getText(value)\"\r\n    [placeholder]=\"placeholder\"\r\n    >\r\n  <datalist id=\"lst\">\r\n      <select>\r\n          <option *ngFor=\"let item of filteredList\">{{getText(item)}}</option>\r\n      </select>\r\n  </datalist>\r\n\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: [""], components: [{ type: i1.ErrorCustomComponent, selector: "sof-error" }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AutocompleteCustomControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'sof-autocomplete-control', template: "\r\n<label>{{label}}\r\n\r\n  <input \r\n    class=\"form-control\" \r\n    list=\"lst\" \r\n    (input)=\"search($event)\"\r\n    [disabled]=\"disabled\"\r\n    [value]=\"getText(value)\"\r\n    [placeholder]=\"placeholder\"\r\n    >\r\n  <datalist id=\"lst\">\r\n      <select>\r\n          <option *ngFor=\"let item of filteredList\">{{getText(item)}}</option>\r\n      </select>\r\n  </datalist>\r\n\r\n</label>\r\n<sof-error [label]=\"label\" [errors]=\"errors\"></sof-error>", styles: [""] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWNvbnRyb2wtY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvYXV0b2NvbXBsZXRlLWNvbnRyb2wvYXV0b2NvbXBsZXRlLWNvbnRyb2wtY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9jdXN0b20tY29udHJvbHMvYXV0b2NvbXBsZXRlLWNvbnRyb2wvYXV0b2NvbXBsZXRlLWNvbnRyb2wtY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQzs7OztBQU85RyxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsNEJBQTRCOzsrSEFBdkUsa0NBQWtDO21IQUFsQyxrQ0FBa0MsdUZDUi9DLGtlQWtCeUQ7MkZEVjVDLGtDQUFrQztrQkFMOUMsU0FBUzsrQkFDRSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYXV0b2NvbXBsZXRlLWNvbnRyb2wvYXV0b2NvbXBsZXRlLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc29mLWF1dG9jb21wbGV0ZS1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLWNvbnRyb2wtY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS1jb250cm9sLWNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVDdXN0b21Db250cm9sQ29tcG9uZW50IGV4dGVuZHMgQXV0b2NvbXBsZXRlQ29udHJvbENvbXBvbmVudCAge1xyXG5cclxufVxyXG4iLCJcclxuPGxhYmVsPnt7bGFiZWx9fVxyXG5cclxuICA8aW5wdXQgXHJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgbGlzdD1cImxzdFwiIFxyXG4gICAgKGlucHV0KT1cInNlYXJjaCgkZXZlbnQpXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICBbdmFsdWVdPVwiZ2V0VGV4dCh2YWx1ZSlcIlxyXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcclxuICAgID5cclxuICA8ZGF0YWxpc3QgaWQ9XCJsc3RcIj5cclxuICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVyZWRMaXN0XCI+e3tnZXRUZXh0KGl0ZW0pfX08L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgPC9kYXRhbGlzdD5cclxuXHJcbjwvbGFiZWw+XHJcbjxzb2YtZXJyb3IgW2xhYmVsXT1cImxhYmVsXCIgW2Vycm9yc109XCJlcnJvcnNcIj48L3NvZi1lcnJvcj4iXX0=