import { isText } from "../common/src/index.js";

const _pattern = /^[$]*[A-Z$]+[A-Z0-9$]*(_[A-Z0-9$]+)*$/g;
/**
 * Check value is all caps
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isAllCaps(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
