/**
 * Representa la configuracion de las opciones, como obtener los datos y de donde obtenerlos
 */
export interface OptionsFormConfig {
    config?: {
        /**
         * Es la ruta de donde vamos a obtener el texto a mostrar en la opcion de un select
         */
        textPath: string;
        /**
         * Es la ruta de donde vamos a obtener el value de cada opcion
         */
        valuePath: string;
    };
    /**
     * Definicion de las opciones
     * @example
     * ```ts
     * options: [
                    { option: 'Marron', value: 'Marron' },
                    { option: 'Verde', value: 'Verde' },
                    { option: 'Azul', value: 'Azul' },
                    { option: 'Negro', value: 'Negro' },
                  ],
     * ```
     */
    options?: any[];
    /**
     * Representa la url a donde se va a a enviar una consulta.
     * @remarks
     * La respuesta obtenida se va a convertir en las opciones
     * @example
     * Relleno los valores con un resultado de la consulta a un url determinada
     * ```
     * options: {
        config: {
          textPath: 'name.common',
          valuePath: 'flags.png',
        },
        url: 'https://restcountries.com/v3.1/all',
        options: [],
      },
     * ```
     */
    url?: string;
}
