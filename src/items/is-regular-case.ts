import { isText } from "@leyyo/common";

const _pattern = /^[a-z]+[a-z0-9$]*( [a-z0-9$]*)*$/g;
/**
 * Check value is all caps
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isRegularCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
