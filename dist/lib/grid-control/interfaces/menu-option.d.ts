import { OptionCondition } from "./option-condition";
export interface MenuOptionConfig<T> {
    /**
     * texto dela opcion que se muestra en el menu
     */
    option: string;
    /**
     * Condicion que se va validar  para mostrar o no la
     * opcion entre las opciones filtrdas, en caso de que no exista siempre se va amostrar la opcion
     */
    condicion?: OptionCondition;
    /**
     * metodo al cual llama al seleccionar la opcion, recibe los datos de la file
     * ej: actionFn: this.edit.bind(this)
     */
    actionFn: (rowData: T) => void | Promise<void>;
}
