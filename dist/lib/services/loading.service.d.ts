import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoadingService {
    loadingSub: BehaviorSubject<boolean>;
    loadingMap: Map<string, boolean>;
    constructor();
    setLoading(loading: boolean, url: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadingService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadingService>;
}
