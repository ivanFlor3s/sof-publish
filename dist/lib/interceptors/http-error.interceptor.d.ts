import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseAlertService } from '../services/alert-abstract.service';
import * as i0 from "@angular/core";
export declare const maxRetries = 1;
export declare const delayMs = 2000;
export declare class ErrorInterceptor implements HttpInterceptor {
    private alertSrv;
    constructor(alertSrv: BaseAlertService);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorInterceptor>;
}
