import { IconColorEnum } from "../enums/icon-color.enum";
import { IconStyleEnum } from "../enums/icon-style.enum";
import { IconEnum } from "../enums/icon.enum";
import { IconConfig } from "../interfaces/icon-config.interface";

/**
 * SofAlert predefined icon configurations
 * 
 * Agregar a medida que vayan surgiendo iconos con configuraciones genericas repetidas
 * 
 * // ToDo: Ver si es mejor poner el color y estilo en el nombre
 *
 * Si hay casos especificos del proyecto, mejor extender la clase
 * 
 * @example
 * export class CustomSofAlertIcons extends IconsDefaultConfigs {
 *   static person = { icon: IconEnum.person, style: IconStyleEnum.outlined, color: IconColorEnum.primary } as IconConfig;
 * }
 */
export class IconsDefaultConfigs {
    static cancel = { icon: IconEnum.cancel, style: IconStyleEnum.outlined, color: IconColorEnum.red } as IconConfig;
    static highlightOff = { icon: IconEnum.highlightOff, style: IconStyleEnum.outlined, color: IconColorEnum.red } as IconConfig;
    static errorOutline = { icon: IconEnum.errorOutline, style: IconStyleEnum.outlined, color: IconColorEnum.orange } as IconConfig;
    static person = { icon: IconEnum.person, style: IconStyleEnum.outlined, color: IconColorEnum.primary } as IconConfig;
}