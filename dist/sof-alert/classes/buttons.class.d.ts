import { ButtonConfig } from "./button-config.class";
/**
 * SofAlert predefined buttons
 *
 * Agregar los botones que se vayan utilizando
 *
 * Mantener nombres en PascalCase para diferenciarlos de las propiedades de ButtonConfig
 *
 * Si hay casos especificos del proyecto, mejor extender la clase
 *
 * @example
 * export class CustomSofAlertButtons extends Buttons {
 *   static CrearPaciente = new ButtonConfig('BUTTONS.CREAR-PACIENTE')
 * }
 */
export declare class Buttons {
    /**
     * Translation Key: BUTTONS.CANCELAR
     */
    static Cancel: ButtonConfig;
    /**
     * Translation Key: BUTTONS.GUARDAR
     */
    static Save: ButtonConfig;
    /**
     * Translation Key: BUTTONS.SI-ACTION
     */
    static YesAction: ButtonConfig;
    /**
     * Translation Key: BUTTONS.VOLVER
     */
    static Return: ButtonConfig;
}
