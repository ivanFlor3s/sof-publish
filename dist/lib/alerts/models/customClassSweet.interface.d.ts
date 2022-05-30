export interface Dialog {
    confirmButton: string;
    cancelButton: string;
    denyButton: string;
}
export interface Confirm {
    confirmButton: string;
    cancelButton: string;
}
export declare class CustomClassSweet {
    basic: string;
    dialog: Dialog;
    confirm: Confirm;
}
