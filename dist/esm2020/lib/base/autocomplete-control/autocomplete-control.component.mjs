import { Component, Input, Optional, Self } from '@angular/core';
import { BaseFormFieldComponent } from '../../base/base-form-control/base-form-control';
import { lastValueFrom } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common/http";
export class AutocompleteControlComponent extends BaseFormFieldComponent {
    constructor(controlDir, httpClient) {
        super(controlDir);
        this.controlDir = controlDir;
        this.httpClient = httpClient;
        //Delay para filtrar
        this.debounce = 300;
        this.valuePath = 'value';
        this.textPath = 'text';
    }
    onInput(value) {
        this.changeValue(value);
    }
    writeValue(value) {
        if (value) {
            this.value = value || '';
        }
        else {
            this.value = '';
        }
    }
    getValue(item) {
        if (!item)
            return null;
        let val = item;
        const pathArray = this.valuePath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
    getText(item) {
        if (!item)
            return '';
        let val = item;
        const pathArray = this.textPath.split('.');
        for (const prop of pathArray)
            val = val[prop];
        return val;
    }
    search(e) {
        if (!!e.inputType || !e.target.value) {
            this.changeValue(null);
            clearTimeout(this.timeoutObj);
            this.timeoutObj = setTimeout(async () => {
                const results = await this.filter(e.target.value);
                this.filteredList = results;
            }, !!this.list ? 0 : this.debounce);
        }
        else
            this.onSelection(e.target.value);
    }
    async filter(filter) {
        if (!filter?.trim())
            return [];
        if (!!this.list)
            return await this.inMemorySearch(filter);
        else if (!!this.filterFn)
            return await this.functionSearch(filter);
        else if (!!this.filterEndPoint)
            return await this.endpointSearch(filter);
        else
            return [];
    }
    async inMemorySearch(filter) {
        const inputArray = filter.split(' ').map(x => x.trim()).filter(x => !!x).map(x => this.normalizeString(x));
        return this.list.filter(x => inputArray.every(f => this.normalizeString(this.getText(x)).includes(f)));
    }
    normalizeString(x) {
        return x.toLowerCase().normalize('NFD'); //.replace(/\p(Diacritic)/gu, "");
    }
    async functionSearch(filter) {
        return this.filterFn(filter);
    }
    async endpointSearch(filter) {
        return await lastValueFrom(this.httpClient.get(`${this.filterEndPoint}${encodeURI(filter.trim())}`));
    }
    onSelection(selectedText) {
        const selected = this.filteredList.find(x => this.getText(x) == selectedText);
        this.changeValue(selected);
    }
}
AutocompleteControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AutocompleteControlComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: AutocompleteControlComponent, selector: "ng-component", inputs: { debounce: "debounce", valuePath: "valuePath", textPath: "textPath", list: "list", filterFn: "filterFn", filterEndPoint: "filterEndPoint" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: AutocompleteControlComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i2.HttpClient }]; }, propDecorators: { debounce: [{
                type: Input
            }], valuePath: [{
                type: Input
            }], textPath: [{
                type: Input
            }], list: [{
                type: Input
            }], filterFn: [{
                type: Input
            }], filterEndPoint: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9iYXNlL2F1dG9jb21wbGV0ZS1jb250cm9sL2F1dG9jb21wbGV0ZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFLckMsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHNCQUFzQjtJQUV4RSxZQUNzQyxVQUFxQixFQUNqRCxVQUFzQjtRQUM5QixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFGa0IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNqRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeUM5QixvQkFBb0I7UUFDWCxhQUFRLEdBQVcsR0FBRyxDQUFDO1FBRXZCLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFDNUIsYUFBUSxHQUFXLE1BQU0sQ0FBQztJQTNDckMsQ0FBQztJQUVDLE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVRLFVBQVUsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsSUFBUztRQUNoQixJQUFJLENBQUMsSUFBSTtZQUNQLE9BQU8sSUFBSSxD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bmVudCwgSW5wdXQsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmFzZUZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYmFzZS1mb3JtLWNvbnRyb2wvYmFzZS1mb3JtLWNvbnRyb2wnO1xyXG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50ICB7XHJcblxyXG5jb25zdHJ1Y3RvcihcclxuICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBvdmVycmlkZSBjb250cm9sRGlyOiBOZ0NvbnRyb2wsXHJcbiAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XHJcbiAgc3VwZXIoY29udHJvbERpcik7XHJcbn1cclxuXHJcbiAgb25JbnB1dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZ2V0VmFsdWUoaXRlbTogYW55KTogYW55IHtcclxuICAgIGlmICghaXRlbSlcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICBcclxuICAgIGxldCB2YWwgPSBpdGVtO1xyXG4gICAgY29uc3QgcGF0aEFycmF5ID0gdGhpcy52YWx1ZVBhdGguc3BsaXQoJy4nKTtcclxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBwYXRoQXJyYXkpXHJcbiAgICAgIHZhbCA9IHZhbFtwcm9wXTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuICBcclxuICBnZXRUZXh0KGl0ZW06IGFueSk6IGFueSB7XHJcbiAgICBpZiAoIWl0ZW0pXHJcbiAgICAgIHJldHVybiAnJztcclxuXHJcbiAgICBsZXQgdmFsID0gaXRlbTtcclxuICAgIGNvbnN0IHBhdGhBcnJheSA9IHRoaXMudGV4dFBhdGguc3BsaXQoJy4nKTtcclxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBwYXRoQXJyYXkpXHJcbiAgICAgIHZhbCA9IHZhbFtwcm9wXTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG5cclxuICAvL0RlbGF5IHBhcmEgZmlsdHJhclxyXG4gIEBJbnB1dCgpIGRlYm91bmNlOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlUGF0aDogc3RyaW5nID0gJ3ZhbHVlJztcclxuICBASW5wdXQoKSB0ZXh0UGF0aDogc3RyaW5nID0gJ3RleHQnO1xyXG5cclxuICAvL0J1c3F1ZWRhIGVuIG1lbW9yaWFcclxuICBASW5wdXQoKSBsaXN0ITogYW55W107XHJcbiAgLy8gQElucHV0KCkgc2VhcmNoUGF0aHM6IHN0cmluZ1tdID0gWyd0ZXh0J107XHJcblxyXG4gIC8vQnVzcXVlZGEgdXNhZG8gdW5hIGZ1bmNpb24gZGVmaW5pZGEgZW4gZWwgY29tcG9uZW50ZVxyXG4gIEBJbnB1dCgpIGZpbHRlckZuITogKGZpbHRlclRleHQ6IHN0cmluZykgPT4gYW55W107XHJcblxyXG4gIC8vQnVzcXVlZGEgdXNhbmRvIHVuIGVuZHBvaW50XHJcbiAgQElucHV0KCkgZmlsdGVyRW5kUG9pbnQhOiBzdHJpbmc7XHJcblxyXG4gIHRpbWVvdXRPYmo6IGFueTtcclxuICBmaWx0ZXJlZExpc3QhOiBhbnlbXTtcclxuICBzZWFyY2goZTogYW55KSB7XHJcbiAgICBpZiAoISFlLmlucHV0VHlwZSB8fCAhZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShudWxsKTtcclxuXHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRPYmopO1xyXG4gICAgICB0aGlzLnRpbWVvdXRPYmogPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgdGhpcy5maWx0ZXIoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gcmVzdWx0cztcclxuICAgICAgfSwgISF0aGlzLmxpc3QgPyAwIDogdGhpcy5kZWJvdW5jZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMub25TZWxlY3Rpb24oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmlsdGVyKGZpbHRlcjogc3RyaW5nKTogUHJvbWlzZTxhbnlbXT4ge1xyXG4gICAgaWYgKCFmaWx0ZXI/LnRyaW0oKSlcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgXHJcbiAgICBpZiAoISF0aGlzLmxpc3QpXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmluTWVtb3J5U2VhcmNoKGZpbHRlcik7XHJcbiAgICBlbHNlIGlmICghIXRoaXMuZmlsdGVyRm4pXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZ1bmN0aW9uU2VhcmNoKGZpbHRlcik7XHJcbiAgICBlbHNlIGlmICghIXRoaXMuZmlsdGVyRW5kUG9pbnQpXHJcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmVuZHBvaW50U2VhcmNoKGZpbHRlcik7XHJcbiAgICBlbHNlXHJcbiAgICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGluTWVtb3J5U2VhcmNoKGZpbHRlcjogc3RyaW5nKTogUHJvbWlzZTxhbnlbXT4ge1xyXG4gICAgY29uc3QgaW5wdXRBcnJheSA9IGZpbHRlci5zcGxpdCgnICcpLm1hcCh4ID0+IHgudHJpbSgpKS5maWx0ZXIoeCA9PiAhIXgpLm1hcCh4ID0+IHRoaXMubm9ybWFsaXplU3RyaW5nKHgpKTtcclxuICAgIHJldHVybiB0aGlzLmxpc3QuZmlsdGVyKHggPT4gaW5wdXRBcnJheS5ldmVyeShmID0+IHRoaXMubm9ybWFsaXplU3RyaW5nKCB0aGlzLmdldFRleHQoeCkgKS5pbmNsdWRlcyhmKSkpXHJcbiAgfVxyXG5cclxuICBub3JtYWxpemVTdHJpbmcoeDogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB4LnRvTG93ZXJDYXNlKCkubm9ybWFsaXplKCdORkQnKTsgLy8ucmVwbGFjZSgvXFxwKERpYWNyaXRpYykvZ3UsIFwiXCIpO1xyXG4gIH1cclxuICBcclxuICBhc3luYyBmdW5jdGlvblNlYXJjaChmaWx0ZXI6IHN0cmluZyk6IFByb21pc2U8YW55W10+IHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlckZuKGZpbHRlcik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBlbmRwb2ludFNlYXJjaChmaWx0ZXI6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuZmlsdGVyRW5kUG9pbnR9JHtlbmNvZGVVUkkoZmlsdGVyLnRyaW0oKSl9YCkpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb24oc2VsZWN0ZWRUZXh0OiBhbnkpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5maWx0ZXJlZExpc3QuZmluZCh4ID0+IHRoaXMuZ2V0VGV4dCh4KSA9PSBzZWxlY3RlZFRleHQpO1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZShzZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=