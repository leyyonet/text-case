import {ToOpt, toTextOf, typeHelper} from "@leyyo/type";
import { optCheck, OptFn } from "@leyyo/common";
import { textCaseHelper } from "../items/index.js";
import {InvalidCamelCaseError, InvalidSentenceCaseError} from "../error/index.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as ALL_CAPS
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - all caps text
 * */
export function toSentenceCase(value: unknown, options?: ToOpt | OptFn): string {
    const o = optCheck<ToOpt>(options);
    typeHelper.errorClass(o, InvalidCamelCaseError);
    return toTextOf(value, 'sentence-case', _lambda, o);
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
    return textCaseHelper.firstUpper(tokens.shift()) + tokens.join(' ');
}
