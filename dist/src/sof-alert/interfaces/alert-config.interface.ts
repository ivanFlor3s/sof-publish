import { Emptyfield } from "sof-ng-controls";
import { i18nFormFieldsConfig } from "../../public-api";
import { ButtonConfig } from "../classes/button-config.class";
import { IconConfig } from "./icon-config.interface";

/**
 * SofAlert configuration
 */
export interface AlertConfig {
    icon: IconConfig;

    /**
     * Text tranlation key
     */
    text: string;

    /**
     * Text translation parameters object
     */
    textParams?: any;

    /**
     * Buttons configs or predefined configs from Buttons
     */
    buttons: (ButtonConfig | Partial<ButtonConfig>)[];

    /**
     * Buttons translation parameters object
     */
    buttonsParams?: any;

    /**
     * If true, skips the uppercase pipe in buttons labels
     */
    buttonsSkipToUppercase?: boolean;

    /**
     * DymForm fields configuration for inputs
     */
    inputsFormFields?: (i18nFormFieldsConfig | Emptyfield)[];

    /**
     * DymForm rows height. Default: 40px
     */
    formRowsHeight?: string;

    width?: string;
}