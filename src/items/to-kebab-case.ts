import { ToOpt, toTextOf, typeHelper } from "@leyyo/type";
import { optCheck, OptFn } from "@leyyo/common";
import { InvalidConstCaseError, InvalidKebabCaseError } from "../error/index.js";
import { textCaseHelper } from "./index.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as kebab case (foo-bar)
 * - hyphenated, lowercase
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - kebab case text
 * */
export function toKebabCase(value: unknown, options?: ToOpt | OptFn): string {
  const o = optCheck<ToOpt>(options);
  typeHelper.errorClass(o, InvalidKebabCaseError);
  return toTextOf(value, "kebab-case", _lambda, o);
}

/**
 * @param {string} str
 * @return {string}
 * */
function _lambda(str: string): string {
  return textCaseHelper.tokenize(str).join("-");
}
