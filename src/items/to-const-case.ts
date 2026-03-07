import {ToOpt, toTextOf, typeHelper} from "@leyyo/type";
import { optCheck, OptFn } from "@leyyo/common";
import { textCaseHelper } from "../items/index.js";
import {InvalidAllCapsError} from "../error/index.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as ALL_CAPS
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - all caps text
 * */
export function toConstCase(value: unknown, options?: ToOpt | OptFn): string {
  const o = optCheck<ToOpt>(options);
  typeHelper.errorClass(o, InvalidAllCapsError);
  return toTextOf(value, 'const-case', _lambda, o);
}

/**
 * @param {string} str
 * @return {string}
 * */
function _lambda(str: string): string {
  return textCaseHelper.tokenize(str).join("_").toUpperCase();
}
