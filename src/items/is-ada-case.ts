import { isText } from "@leyyo/common";

const _pattern = /^[A-Z$][a-z0-9$]*(?:_[A-Z][a-z0-9$]*)*$/;
/**
 * Check value is ada case (Foo_Bar)
 * - underscored, capitalised
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isAdaCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
