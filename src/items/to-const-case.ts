import { ToOpt, toTextOf, typeHelper } from "@leyyo/type";
import { optCheck, OptFn } from "@leyyo/common";
import { textCaseHelper } from "./index.js";
import { InvalidConstCaseError } from "../error/index.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as const case (FOO_BAR)
 * - underscored, uppercase
 *
 * @alias AllCaps
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - const case text
 * */
export function toConstCase(value: unknown, options?: ToOpt | OptFn): string {
  const o = optCheck<ToOpt>(options);
  typeHelper.errorClass(o, InvalidConstCaseError);
  return toTextOf(value, "const-case", _lambda, o);
}

/**
 * @param {string} str
 * @return {string}
 * */
function _lambda(str: string): string {
  return textCaseHelper.tokenize(str).join("_").toUpperCase();
}
