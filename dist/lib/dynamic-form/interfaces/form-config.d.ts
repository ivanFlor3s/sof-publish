export interface FormConfig {
    submitButtonConfig: {
        hidden: boolean;
        text: string;
        materialButtonType: 'raised' | 'outline' | 'text' | 'flat';
        color: 'primary' | 'accent';
    };
    formCustomClass: string;
}
