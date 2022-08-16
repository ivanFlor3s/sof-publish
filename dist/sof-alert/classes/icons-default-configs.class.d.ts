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
export declare class IconsDefaultConfigs {
    static cancel: IconConfig;
    static highlightOff: IconConfig;
    static errorOutline: IconConfig;
    static person: IconConfig;
}
