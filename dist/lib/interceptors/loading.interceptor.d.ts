import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingService } from "../services/loading.service";
import * as i0 from "@angular/core";
export declare class LoadingInterceptor implements HttpInterceptor {
    private _loading;
    constructor(_loading: LoadingService);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadingInterceptor>;
}
