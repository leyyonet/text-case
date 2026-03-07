import {ToOpt, toTextOf, typeHelper} from "@leyyo/type";
import { optCheck, OptFn } from "@leyyo/common";
import {InvalidPascalCaseError, InvalidRegularCaseError} from "../error/index.js";
import {textCaseHelper} from "../items/index.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as ALL_CAPS
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - all caps text
 * */
export function toRegularCase(value: unknown, options?: ToOpt | OptFn): string {
    const o = optCheck<ToOpt>(options);
    typeHelper.errorClass(o, InvalidPascalCaseError);
    return toTextOf(value, 'header-case', _lambda, o);
}

/**
 * @param {string} str
 * @return {string}
 * */
function _lambda(str: string): string {
    const tokens = textCaseHelper.tokenize(str);
    if (!tokens.length) {
        return undefined;
    }
    return tokens.join(' ');
}
