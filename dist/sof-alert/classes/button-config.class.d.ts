/**
 * SofAlert button config
 */
export declare class ButtonConfig {
    /**
     * Translation key
     */
    labelKey: string;
    /**
     * Material button type. Default: basic
     */
    type: 'basic' | 'raised' | 'stroked' | 'flat';
    constructor(label: string);
    get basic(): ButtonConfig;
    get raised(): ButtonConfig;
    get stroked(): ButtonConfig;
    get flat(): ButtonConfig;
}
