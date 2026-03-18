import { isText } from "@leyyo/common";

const _pattern = /^[a-z$][a-z0-9$]*(?:-[a-z0-9$]+)*$/;
/**
 * Check value is kebab case (foo-bar)
 * - hyphenated, lowercase
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isKebabCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
