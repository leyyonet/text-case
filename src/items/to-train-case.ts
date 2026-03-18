import { ToOpt, toTextOf, typeHelper } from "@leyyo/type";
import { optCheck, OptFn } from "@leyyo/common";
import { textCaseHelper } from "./index.js";
import { InvalidHeaderCaseError, InvalidPascalCaseError } from "../error/index.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as train case (Foo-Bar)
 * - hyphenated, capitalised
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - train case text
 * */
export function toTrainCase(value: unknown, options?: ToOpt | OptFn): string {
  const o = optCheck<ToOpt>(options);
  typeHelper.errorClass(o, InvalidHeaderCaseError);
  return toTextOf(value, "train-case", _lambda, o);
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
  return tokens.map((token) => textCaseHelper.firstUpper(token)).join("-");
}
