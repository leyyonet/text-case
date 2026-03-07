import { isText } from "@leyyo/common";

const _pattern = /^[A-Z$][A-Z0-9$]*(?:_[A-Z0-9$]+)*$/g;
/**
 * Check value is all caps
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isConstCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
