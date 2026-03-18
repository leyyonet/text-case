import { isText } from "@leyyo/common";

const _pattern = /^[A-Z$][a-z0-9$]*(?:-[A-Z][a-z0-9$]*)*$/;
/**
 * Check value is train case (Foo-Bar)
 * - hyphenated, capitalised
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isTrainCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
