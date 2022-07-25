import * as i0 from "@angular/core";
export declare class IntegerInputDirective {
    ignoreSpaces: boolean;
    private allowedKeyCodes;
    constructor();
    private validInputCode;
    private isPasteEvent;
    onKeypress(event: any): boolean;
    onKeyup(event: any): boolean;
    onKeydown(event: any): boolean;
    onInput(event: any): boolean;
    onIonChange(event: any): void;
    onPaste(event: any): boolean;
    onDrop(event: any): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegerInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IntegerInputDirective, "[IntegerInput]", never, { "ignoreSpaces": "ignoreSpaces"; }, {}, never>;
}
