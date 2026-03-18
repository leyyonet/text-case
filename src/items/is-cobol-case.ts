import { isText } from "@leyyo/common";

const _pattern = /^[A-Z$][A-Z0-9$]*(?:-[A-Z0-9$]+)*$/;
/**
 * Check value is cobol case (FOO-BAR)
 * - hyphenated, uppercase
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isCobolCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
