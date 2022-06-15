import { FieldControlType, FormConfigTypes } from "../enums/form-config-types";
import { ActionForm } from "./action-form";
import { OptionsFormConfig } from "./option-config";
import { ValidationForm } from "./validation-form";
export declare type FormFieldConfig = (FieldConfig | Emptyfield);
export interface FieldConfig {
    type: FieldControlType;
    id: number;
    /**
     * Representa el nombre del control que va a tomar el campo
     */
    key: string;
    /**
     * Configuracion visual del campo
     * templateOptions: {
          label: 'Nombre',
          placeholder: 'Ingrese nombre',
          customClass:'formControl'
        }
      */
    templateOptions: {
        label: string;
        placeholder?: string;
        customClass?: string;
        /**
         * Tiene valor en un campo text-area: Es el numero de filas que va a tener
         */
        rowsArea?: number;
        /**
         * Tiene valor en un campo text-area: Determina si es que el text area va a tener un tamaño modificable
         */
        resizeable?: boolean;
        /**
         * Propiedad para saber si un campo fileUpload puede tener mas de un archivo
         * @example
         * ```ts
         * templateOptions: {
                  label: 'Estudios',
                  placeholder:'Ingrese aqui cualquier otra dato relevante.',
                  multiple: true
              }
          * ```
          */
        multiple?: boolean;
    };
    /**
     * Reperesenta el valor por defecto que va a tener el campo
     */
    defaultValue: any;
    action: ActionForm[];
    options?: OptionsFormConfig;
    validations: ValidationForm[];
    /**
     * Dependiendo del valor se va mostrar o esconder el campo
     */
    hidden: boolean;
    /**
     * Dependiendo del valor se va poner como dissable el campo
     */
    dissabled: boolean;
    /**
     * Cantidad de columnas que va a ocupar el control
     */
    cols: number;
    subtitle?: string;
}
export interface Emptyfield {
    type: FormConfigTypes.EmptyCol;
    cols: number;
    subtitle?: string;
}
