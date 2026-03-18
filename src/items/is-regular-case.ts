import { isText } from "@leyyo/common";

const _pattern = /^[a-z$][a-z0-9$]*(?: [a-z0-9$]+)*$/;
/**
 * Check value is regular case (foo bar)
 * - spaced, lowercase
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isRegularCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
