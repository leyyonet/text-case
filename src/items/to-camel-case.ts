import { ToOpt, toTextOf, typeHelper } from "@leyyo/type";
import { optCheck, OptFn } from "@leyyo/common";
import { textCaseHelper } from "./index.js";
import { InvalidCamelCaseError } from "../error/index.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as camel case (fooBar)
 * - first lowercase then all capitalised
 *
 * @alias Camelize
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - camel case text
 * */
export function toCamelCase(value: unknown, options?: ToOpt | OptFn): string {
  const o = optCheck<ToOpt>(options);
  typeHelper.errorClass(o, InvalidCamelCaseError);
  return toTextOf(value, "camel-case", _lambda, o);
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
  return tokens.shift() + tokens.map((item) => textCaseHelper.firstUpper(item)).join("");
}
