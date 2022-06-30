import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class LoadingService {
    constructor() {
        this.loadingSub = new BehaviorSubject(false);
        this.loadingMap = new Map();
    }
    setLoading(loading, url) {
        if (!url) {
            throw new Error('Debe enviar la ulr para poder identificar cual peticion se esta realizando');
        }
        if (loading === true) {
            this.loadingMap.set(url, loading);
            this.loadingSub.next(true);
        }
        else if (loading === false && this.loadingMap.has(url)) {
            this.loadingMap.delete(url);
        }
        if (this.loadingMap.size === 0) {
            this.loadingSub.next(false);
        }
    }
}
LoadingService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoadingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoadingService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoadingService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LoadingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc29mLXNoYXJlZC9zcmMvbGliL3NlcnZpY2VzL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBS3JDLE1BQU0sT0FBTyxjQUFjO0lBS3pCO1FBSkEsZUFBVSxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUUzRSxlQUFVLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDO0lBRTlDLENBQUM7SUFHakIsVUFBVSxDQUFDLE9BQWdCLEVBQUUsR0FBVztRQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1NBQy9GO1FBQ0QsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjthQUFLLElBQUksT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7MkdBckJVLGNBQWM7K0dBQWQsY0FBYyxjQUZiLE1BQU07MkZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRpbmdTZXJ2aWNlIHtcclxuICBsb2FkaW5nU3ViOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgbG9hZGluZ01hcDogTWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiBcclxuICBzZXRMb2FkaW5nKGxvYWRpbmc6IGJvb2xlYW4sIHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIXVybCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlYmUgZW52aWFyIGxhIHVsciBwYXJhIHBvZGVyIGlkZW50aWZpY2FyIGN1YWwgcGV0aWNpb24gc2UgZXN0YSByZWFsaXphbmRvJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobG9hZGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmxvYWRpbmdNYXAuc2V0KHVybCwgbG9hZGluZyk7XHJcbiAgICAgIHRoaXMubG9hZGluZ1N1Yi5uZXh0KHRydWUpO1xyXG4gICAgfWVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHRoaXMubG9hZGluZ01hcC5oYXModXJsKSkge1xyXG4gICAgICB0aGlzLmxvYWRpbmdNYXAuZGVsZXRlKHVybCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sb2FkaW5nTWFwLnNpemUgPT09IDApIHtcclxuICAgICAgdGhpcy5sb2FkaW5nU3ViLm5leHQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==