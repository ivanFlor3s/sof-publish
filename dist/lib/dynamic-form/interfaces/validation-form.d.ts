import { ValidationTypes } from "../../validations/validation-types";
import { ConditionForm } from "./condition-form";
/**
 * Representa las configuraciones para la validacion del campo
 * @remarkable
 * Estas validaciones se aplican sobre el campo
 * @example
 * ```ts
 * {
        type:ValidationTypes.Pattern,
        value:'([a-zA-Z ]){2,30}',
        customMessage:'Este no es un apellido'
    }
    ```
 */
export interface ValidationForm {
    /**
     * Tipo de validacion
     * @example
     * ```ts
     * type: ValdationTypes.Required
     * ```
     * @see ValidationTypes
     */
    type: ValidationTypes;
    /**
     * Es elvalor que se va usar para la validacion
     * @remark
     * El uso del value puede depender vada tipo de validacion
     * @example
     * Valido que el valor sea como mayor que 4
     * ```ts
     * {
        type:ValidationTypes.Min,
        value: 4,
        customMessage:'No es mayor que 4'
        }
     * ```
     */
    value?: any;
    conditions?: ConditionForm[];
    func?: (value: unknown, setError: (error: string) => {}, clearError: (error: string) => {}) => {};
    fieldTarget?: string;
    /**
     * Mensaje que se va a mostrar en el caso de que la validacion de error en el campo
     */
    customMessage?: string;
}
