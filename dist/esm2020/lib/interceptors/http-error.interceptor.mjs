import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../services/alert-abstract.service";
export const maxRetries = 1;
export const delayMs = 2000;
export class ErrorInterceptor {
    constructor(alertSrv) {
        this.alertSrv = alertSrv;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(catchError((error) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
                console.log('Error en el cliente');
                errorMsg = `Error: ${error.error.message}`;
            }
            else {
                console.log('Error en el servidor');
                errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            }
            this.alertSrv.show(errorMsg, 'error');
            return throwError(() => new Error(errorMsg));
        }));
    }
}
ErrorInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ErrorInterceptor, deps: [{ token: i1.BaseAlertService }], target: i0.ɵɵFactoryTarget.Injectable });
ErrorInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ErrorInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: ErrorInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.BaseAlertService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3NvZi1zaGFyZWQvc3JjL2xpYi9pbnRlcmNlcHRvcnMvaHR0cC1lcnJvci5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBd0MsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBNkIsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUl0RSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFHNUIsTUFBTSxPQUFPLGdCQUFnQjtJQUN6QixZQUFvQixRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtJQUFFLENBQUM7SUFFakQsU0FBUyxDQUFDLE9BQTZCLEVBQUUsSUFBaUI7UUFDdEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQ0QsVUFBVSxDQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3BDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLEtBQUssQ0FBQyxLQUFLLFlBQVksVUFBVSxFQUFFO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ25DLFFBQVEsR0FBRyxVQUFVLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNwQyxRQUFRLEdBQUcsZUFBZSxLQUFLLENBQUMsTUFBTSxlQUFlLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN4RTtZQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUNyQyxPQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBRSxRQUFRLENBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUNMLENBQUE7SUFDVCxDQUFDOzs2R0FwQlEsZ0JBQWdCO2lIQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uLCB0aHJvd0Vycm9yfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHttZXJnZU1hcCwgZGVsYXksIHJldHJ5V2hlbiwgY2F0Y2hFcnJvcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBCYXNlQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWxlcnQtYWJzdHJhY3Quc2VydmljZSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1heFJldHJpZXMgPSAxO1xyXG5leHBvcnQgY29uc3QgZGVsYXlNcyA9IDIwMDA7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTcnY6IEJhc2VBbGVydFNlcnZpY2Upe31cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcclxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZXJyb3JNc2cgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBlbCBjbGllbnRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTXNnID0gYEVycm9yOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW4gZWwgc2Vydmlkb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNc2cgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9LCAgTWVzc2FnZTogJHtlcnJvci5tZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTcnYuc2hvdyhlcnJvck1zZywgJ2Vycm9yJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcigoKSA9PiBuZXcgRXJyb3IoIGVycm9yTXNnICkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=