/**
 * SofAlert button config
 */
export class ButtonConfig {
    /**
     * Translation key
     */
    labelKey: string;

    /**
     * Material button type. Default: basic
     */
    type: 'basic' | 'raised' | 'stroked' | 'flat' = 'basic';

    public constructor(label: string) {
        this.labelKey = label;
    }

    public get basic(): ButtonConfig {
        this.type = "basic";
        return this;
    }

    public get raised(): ButtonConfig {
        this.type = "raised";
        return this;
    }

    public get stroked(): ButtonConfig {
        this.type = "stroked";
        return this;
    }

    public get flat(): ButtonConfig {
        this.type = "flat";
        return this;
    }

}
