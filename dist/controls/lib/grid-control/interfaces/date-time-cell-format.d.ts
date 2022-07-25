import { LocaleOptions } from "luxon";
/**
 * Same as Luxon's DateTime.toFormat parameters
 */
export interface DateTimeCellFormat {
    /**
     * [Formatting with tokens](https://moment.github.io/luxon/#/formatting?id=formatting-with-tokens-strings-for-cthulhu)
     *
     * [Table of tokens](https://moment.github.io/luxon/#/formatting?id=table-of-tokens)
     *
     * Overrides {@link toLocale}
     */
    toFormat: string;
    /**
     * [luxon/DateTime.FORMAT_PRESET](https://moment.github.io/luxon/#/formatting?id=presets)
     *
     * or
     *
     * [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
     * constructor options and configuration options
     */
    toLocale: Intl.DateTimeFormatOptions;
    /**
     * opts to override the configuration options on this DateTime
     */
    opts?: LocaleOptions | undefined;
}
