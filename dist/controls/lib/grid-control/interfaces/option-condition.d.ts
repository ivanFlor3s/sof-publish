export interface OptionCondition {
    /**
     * Parametro contra elque voy a comparar
     */
    compareToParam: string;
    /**
     * Array de valores contra el que valido el valor del parametro
     */
    values: string[];
}
