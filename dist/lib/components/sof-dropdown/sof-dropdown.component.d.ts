import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SofDropdownComponent implements OnInit {
    /**
     * El componente tiene un input ```collapsed``` que por default tiene el valor en ```false```
        - collapsed en false, indica que el contenido no esta collapsado por lo que la primera vez que se muestre el componente se va a mostrar todo el contenido
        - collapsed en true, se renderiza el componente con el contenido oculto
     */
    collapsed: boolean;
    constructor();
    ngOnInit(): void;
    toggleExpand(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SofDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SofDropdownComponent, "sh-sof-dropdown", never, { "collapsed": "collapsed"; }, {}, never, ["[headerClickeable]", "[header]", "[content]"]>;
}
