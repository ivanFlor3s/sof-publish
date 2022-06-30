import { Injectable } from "@angular/core";
import { finalize } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/loading.service";
export class LoadingInterceptor {
    constructor(_loading) {
        this._loading = _loading;
    }
    intercept(request, next) {
        this._loading.setLoading(true, request.url);
        return next.handle(request)
            .pipe(finalize(() => this._loading.setLoading(false, request.url)));
    }
}
LoadingInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoadingInterceptor, deps: [{ token: i1.LoadingService }], target: i0.ɵɵFactoryTarget.Injectable });
LoadingInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoadingInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoadingInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.LoadingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZi1zaGFyZWQvc3JjL2xpYi9pbnRlcmNlcHRvcnMvbG9hZGluZy5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSTFDLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsUUFBd0I7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7SUFBRSxDQUFDO0lBRS9DLFNBQVMsQ0FBQyxPQUE2QixFQUFFLElBQWlCO1FBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OytHQVBVLGtCQUFrQjttSEFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBMb2FkaW5nU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2FkaW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkaW5nOiBMb2FkaW5nU2VydmljZSl7fVxyXG5cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgdGhpcy5fbG9hZGluZy5zZXRMb2FkaW5nKHRydWUsIHJlcXVlc3QudXJsKTtcclxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KVxyXG4gICAgLnBpcGUoZmluYWxpemUoKCkgPT4gdGhpcy5fbG9hZGluZy5zZXRMb2FkaW5nKGZhbHNlLCByZXF1ZXN0LnVybCkpKTtcclxuICB9XHJcblxyXG59Il19