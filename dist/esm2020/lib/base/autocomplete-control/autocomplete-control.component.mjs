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
        /**
         * Delay para filtrar
         */
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
AutocompleteControlComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AutocompleteControlComponent, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
AutocompleteControlComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: AutocompleteControlComponent, selector: "ng-component", inputs: { debounce: "debounce", valuePath: "valuePath", textPath: "textPath", list: "list", filterFn: "filterFn", filterEndPoint: "filterEndPoint" }, usesInheritance: true, ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: AutocompleteControlComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29udHJvbHMvc3JjL2xpYi9iYXNlL2F1dG9jb21wbGV0ZS1jb250cm9sL2F1dG9jb21wbGV0ZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFLckMsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHNCQUFzQjtJQUV4RSxZQUNzQyxVQUFxQixFQUNqRCxVQUFzQjtRQUM5QixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFGa0IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNqRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeUM5Qjs7V0FFRztRQUNNLGFBQVEsR0FBVyxHQUFHLENBQUM7UUFFdkIsY0FBUyxHQUFXLE9BQU8sQ0FBQztRQUM1QixhQUFRLEdBQVcsTUFBTSxDQUFDO0lBN0NyQyxDQUFDO0lBRUMsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRVEsVUFBVSxDQUFDLEtBQVU7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFTO1FBQ2hCLElBQUksQ0FBQyxJQUFJO1lBQ1AsT0FBTyxJQUFJLENB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ZW50LCBJbnB1dCwgT3B0aW9uYWwsIFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCYXNlRm9ybUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9iYXNlLWZvcm0tY29udHJvbC9iYXNlLWZvcm0tY29udHJvbCc7XHJcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlQ29udHJvbENvbXBvbmVudCBleHRlbmRzIEJhc2VGb3JtRmllbGRDb21wb25lbnQgIHtcclxuXHJcbmNvbnN0cnVjdG9yKFxyXG4gIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG92ZXJyaWRlIGNvbnRyb2xEaXI6IE5nQ29udHJvbCxcclxuICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcclxuICBzdXBlcihjb250cm9sRGlyKTtcclxufVxyXG5cclxuICBvbklucHV0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8ICcnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBnZXRWYWx1ZShpdGVtOiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKCFpdGVtKVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIFxyXG4gICAgbGV0IHZhbCA9IGl0ZW07XHJcbiAgICBjb25zdCBwYXRoQXJyYXkgPSB0aGlzLnZhbHVlUGF0aC5zcGxpdCgnLicpO1xyXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHBhdGhBcnJheSlcclxuICAgICAgdmFsID0gdmFsW3Byb3BdO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG4gIFxyXG4gIGdldFRleHQoaXRlbTogYW55KTogYW55IHtcclxuICAgIGlmICghaXRlbSlcclxuICAgICAgcmV0dXJuICcnO1xyXG5cclxuICAgIGxldCB2YWwgPSBpdGVtO1xyXG4gICAgY29uc3QgcGF0aEFycmF5ID0gdGhpcy50ZXh0UGF0aC5zcGxpdCgnLicpO1xyXG4gICAgZm9yIChjb25zdCBwcm9wIG9mIHBhdGhBcnJheSlcclxuICAgICAgdmFsID0gdmFsW3Byb3BdO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGF5IHBhcmEgZmlsdHJhclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRlYm91bmNlOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlUGF0aDogc3RyaW5nID0gJ3ZhbHVlJztcclxuICBASW5wdXQoKSB0ZXh0UGF0aDogc3RyaW5nID0gJ3RleHQnO1xyXG5cclxuICAvKipcclxuICAgKiBCdXNxdWVkYSBlbiBtZW1vcmlhXHJcbiAgICovXHJcbiAgQElucHV0KCkgbGlzdD86IGFueVtdO1xyXG4gIC8vIEBJbnB1dCgpIHNlYXJjaFBhdGhzOiBzdHJpbmdbXSA9IFsndGV4dCddO1xyXG5cclxuICAvKipcclxuICAgKiBCdXNxdWVkYSB1c2FkbyB1bmEgZnVuY2lvbiBkZWZpbmlkYSBlbiBlbCBjb21wb25lbnRlXHJcbiAgICovXHJcbiAgQElucHV0KCkgZmlsdGVyRm4hOiAoZmlsdGVyVGV4dDogc3RyaW5nKSA9PiBhbnlbXSB8IFByb21pc2U8YW55W10+O1xyXG5cclxuICAvKipcclxuICAgKiBCdXNxdWVkYSB1c2FuZG8gdW4gZW5kcG9pbnRcclxuICAgKi9cclxuICBASW5wdXQoKSBmaWx0ZXJFbmRQb2ludCE6IHN0cmluZztcclxuXHJcbiAgdGltZW91dE9iajogYW55O1xyXG4gIGZpbHRlcmVkTGlzdCE6IGFueVtdO1xyXG4gIHNlYXJjaChlOiBhbnkpIHtcclxuICAgIGlmICghIWUuaW5wdXRUeXBlIHx8ICFlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKG51bGwpO1xyXG5cclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dE9iaik7XHJcbiAgICAgIHRoaXMudGltZW91dE9iaiA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLmZpbHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSByZXN1bHRzO1xyXG4gICAgICB9LCAhIXRoaXMubGlzdCA/IDAgOiB0aGlzLmRlYm91bmNlKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5vblNlbGVjdGlvbihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmaWx0ZXIoZmlsdGVyOiBzdHJpbmcpOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICBpZiAoIWZpbHRlcj8udHJpbSgpKVxyXG4gICAgICByZXR1cm4gW107XHJcbiAgICBcclxuICAgIGlmICghIXRoaXMubGlzdClcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaW5NZW1vcnlTZWFyY2goZmlsdGVyKTtcclxuICAgIGVsc2UgaWYgKCEhdGhpcy5maWx0ZXJGbilcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZnVuY3Rpb25TZWFyY2goZmlsdGVyKTtcclxuICAgIGVsc2UgaWYgKCEhdGhpcy5maWx0ZXJFbmRQb2ludClcclxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZW5kcG9pbnRTZWFyY2goZmlsdGVyKTtcclxuICAgIGVsc2VcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaW5NZW1vcnlTZWFyY2goZmlsdGVyOiBzdHJpbmcpOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICBjb25zdCBpbnB1dEFycmF5ID0gZmlsdGVyLnNwbGl0KCcgJykubWFwKHggPT4geC50cmltKCkpLmZpbHRlcih4ID0+ICEheCkubWFwKHggPT4gdGhpcy5ub3JtYWxpemVTdHJpbmcoeCkpO1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdCEuZmlsdGVyKHggPT4gaW5wdXRBcnJheS5ldmVyeShmID0+IHRoaXMubm9ybWFsaXplU3RyaW5nKCB0aGlzLmdldFRleHQoeCkgKS5pbmNsdWRlcyhmKSkpXHJcbiAgfVxyXG5cclxuICBub3JtYWxpemVTdHJpbmcoeDogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB4LnRvTG93ZXJDYXNlKCkubm9ybWFsaXplKCdORkQnKTsgLy8ucmVwbGFjZSgvXFxwKERpYWNyaXRpYykvZ3UsIFwiXCIpO1xyXG4gIH1cclxuICBcclxuICBhc3luYyBmdW5jdGlvblNlYXJjaChmaWx0ZXI6IHN0cmluZyk6IFByb21pc2U8YW55W10+IHtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlckZuKGZpbHRlcik7XHJcbiAgfVxyXG5cclxuICBhc3luYyBlbmRwb2ludFNlYXJjaChmaWx0ZXI6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgbGFzdFZhbHVlRnJvbSh0aGlzLmh0dHBDbGllbnQuZ2V0KGAke3RoaXMuZmlsdGVyRW5kUG9pbnR9JHtlbmNvZGVVUkkoZmlsdGVyLnRyaW0oKSl9YCkpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb24oc2VsZWN0ZWRUZXh0OiBhbnkpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5maWx0ZXJlZExpc3QuZmluZCh4ID0+IHRoaXMuZ2V0VGV4dCh4KSA9PSBzZWxlY3RlZFRleHQpO1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZShzZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=