import { isText } from "@leyyo/common";

const _pattern = /^[a-z$][a-z0-9$]*(?:[A-Z][a-z0-9$]*)*$/;
/**
 * Check value is camel case (fooBar)
 * - first lowercase then all capitalised
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isCamelCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
