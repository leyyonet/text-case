import { isText } from "@leyyo/common";

const _pattern = /^[A-Z$][A-Z0-9$]*(?:_[A-Z0-9$]+)*$/;
/**
 * Check value is const case (FOO_BAR)
 * - underscored, uppercase
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isConstCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
