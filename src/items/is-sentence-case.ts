import { isText } from "@leyyo/common";

const _pattern = /^[A-Z$][a-z0-9$]*(?: [a-z0-9$]+)*$/;

/**
 * Check value is sentence case (Foo bar)
 * - spaced, first capitalised
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isSentenceCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
