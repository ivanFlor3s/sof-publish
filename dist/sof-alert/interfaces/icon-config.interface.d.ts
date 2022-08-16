import { IconColorEnum } from "../enums/icon-color.enum";
import { IconStyleEnum } from "../enums/icon-style.enum";
import { IconEnum } from "../enums/icon.enum";
/**
 * SofAlert icon configuration
 */
export interface IconConfig {
    /**
     * Default: highlightOff
     */
    icon: IconEnum;
    /**
     * Default: filled
     */
    style?: IconStyleEnum;
    /**
     * Default: red
     */
    color?: IconColorEnum;
}
