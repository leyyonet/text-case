import { ToOpt, toTextOf, typeHelper } from "@leyyo/type";
import { optCheck, OptFn } from "@leyyo/common";
import { textCaseHelper } from "./index.js";
import { InvalidHeaderCaseError, InvalidPascalCaseError } from "../error/index.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as ada case (Foo_Bar)
 * - underscored, capitalised
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - ada case text
 * */
export function toAdaCase(value: unknown, options?: ToOpt | OptFn): string {
  const o = optCheck<ToOpt>(options);
  typeHelper.errorClass(o, InvalidHeaderCaseError);
  return toTextOf(value, "ada-case", _lambda, o);
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
  return tokens.map((token) => textCaseHelper.firstUpper(token)).join("_");
}
