// noinspection JSUnusedGlobalSymbols
import { optCheck, OptFn } from "@leyyo/common";
import { ToOpt, toTextOf, typeHelper } from "@leyyo/type";
import { InvalidSnakeCaseError } from "../error/index.js";
import { textCaseHelper } from "./index.js";

/**
 * Convert value as snake case (foo_bar)
 * - underscored, lowercase
 *
 * @param {any} value
 * @param {ToOpt} options - options
 * @return {string} - snake case text
 * */
export function toSnakeCase(value: unknown, options?: ToOpt | OptFn): string {
  const o = optCheck<ToOpt>(options);
  typeHelper.errorClass(o, InvalidSnakeCaseError);
  return toTextOf(value, "snake-case", _lambda, o);
}

/**
 * @param {string} str
 * @return {string}
 * */
function _lambda(str: string): string {
  return textCaseHelper.tokenize(str).join("_");
}
