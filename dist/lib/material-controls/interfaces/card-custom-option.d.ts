export interface CardCustomOptions {
    /**
     * Background color de la card
     * @example
     * ```ts
     * demoCustomCardOptions:CardCustomOptions = {
        bgHexColor:'#f2ffff',
        ...
     }
     * ```
     */
    bgCardColor?: string;
    /**
     * Font size del titulo en la card
     * @example
     * ```ts
     * demoCustomCardOptions:CardCustomOptions = {
        fontTitleSize:'15px'
        ...
     }
     * ```
     */
    fontTitleSize?: string;
    /**
     * Border radius de la card
     * @example
     * ```ts
     * demoCustomCardOptions:CardCustomOptions = {
        borderRadius:'15px'
        ...
     }
     * ```
     */
    borderRadius?: string;
}
