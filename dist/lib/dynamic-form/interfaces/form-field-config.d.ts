import { FormConfigTypes } from "../enums/form-config-types";
import { ActionForm } from "./action-form";
import { OptionsFormConfig } from "./option-config";
import { ValidationForm } from "./validation-form";
/**
 * Representa toda la configuracion de un campo
 * @example
 * ```ts
 * {
    key:'email',
    validations:[
        {type:ValidationTypes.Required, customMessage:'Necesitamos tu mail (custom)'},
        {type:ValidationTypes.Email, customMessage:'Esto no es un mail, esto es ESPARTA!!!'},

    ],
    action: [],
    defaultValue:'',
    dissabled: false,
    hidden: false,
    id:1002,
    templateOptions: {
        label: 'Correo',
        placeholder:'Ej: pepito_crack2000@pepaso.com'
    },
    type: FormConfigTypes.Text,
  }
      
 * ```
 */
export interface FormFieldConfig {
    type: FormConfigTypes;
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
}
export interface Emptyfield {
    type: FormConfigTypes.EmptyCol;
    cols: number;
}
