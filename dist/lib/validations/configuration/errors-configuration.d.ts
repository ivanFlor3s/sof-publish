export declare class ErrorsConfigurations {
    [key: string]: FormatErrorFunction;
}
export interface ErrorMessage {
    error: string;
}
export declare type FormatErrorFunction = (label?: string, error?: any) => string;
