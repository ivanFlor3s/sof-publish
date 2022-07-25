import { ActionFormTypes } from "../enums/action-form-types";
import { OptionsFormConfig } from "./option-config";
/**
 * Representa la configuracion de una accion dentro del formulario
 *

 * @example Configuro una accion que oculte el campo de embarazada cuando
  el valor del campo que tiene esta accion es verdadero
 * ```ts
 * {
 *   fieldTarget:'estaEmbarazada';
 *   value: true;
 *   type: ActionFormTypes.Hide;
 * }
 * ```
 */
export interface ActionForm {
    /**
     * Key del formConfig al que debe estarapuntada la accion
     * @example
     * Dependiendo el valor del campo debo hacer algo sobre el campo de key "genero"
     * ```ts
     * {
     *   fieldTarget: 'genero';
     * ...
     * }
     * ```
     */
    fieldTarget: string;
    /**
     * Es el valor que se va a tener en cuenta para ejecutar la accion
     * @example
     * Necesito que mi campo solo ejecute la accion cuando tenga un valor true
     * ```ts
     * {
     *   value: true;
     * ...
     * }
     * ```
     */
    value: any;
    /**
     * Propiedad opcional que se usa para la accion de 'setValue'
     * @remark
     * Es el nuevo valor que se va a setear en el campo apuntado
     */
    newValue?: any;
    /**
     * Tipo de accion
     * @see ActionFormTypes
     */
    type: ActionFormTypes;
    /**
     * Dato necesario para obtener datos de una consulta a una API
     * @remark
     * La ruta se envia como un parametro para obtener la data respuesta dentro del subscribe
     */
    dataPath?: string;
    /**
     * Datos necesarios para la accion de fillOptions
     */
    fillConfig?: {
        /**
         * Representa la URL a donde se va a hacer la consulta
         * @example
         * ```ts
         * ...
         * this.http.get(url).subscribe(()=>...)
         * ```
         */
        url?: string;
        /**
         * Configuracion en caso de que los valores de relleno dependan del valor que tome el campo
         * @example
         * Tenemos un campo select con las opciones de Objeto y un segundo select Fabricante cuyas opciones dependen de que valor tenga el campo objeto
         * ```ts
         * fillOptionsConfig:
         * [{
         *   onValue:'Celular',
         *   optionsConfig:{
         *     config:{
         *       textPath:'text',
         *       valuePath: 'value'
         *     },
         *     options:['Samsung','Xiaomi','Motorola']
         *   }
         * },
         * {
         *   onValue:'Auto',
         *   optionsConfig:{
         *     config:{
         *       textPath:'text',
         *       valuePath: 'value'
         *     },
         *     options:['Toyota','Chevrolet','Ford']
         *   }
         * }]
         * ```
         */
        fillOptionsConfig?: {
            onValue: any;
            optionsConfig: OptionsFormConfig;
        }[];
        fillFn?: (val: any) => any[] | Promise<any[]>;
    };
}
