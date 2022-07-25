import { Observable } from 'rxjs';
export interface PrefixConfig {
    prefixType: 'number' | 'text';
    prefix?: string;
    prefixDinamic?: {
        controlKeyDependencies: string[];
        prefix$: Observable<string>;
        reduceFn: (arg1: any[]) => string;
    };
}
