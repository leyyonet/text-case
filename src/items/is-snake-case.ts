import { isText } from "@leyyo/common";

const _pattern = /^[a-z$][a-z0-9$]*(?:_[a-z0-9$]+)*$/;
/**
 * Check value is snake case (foo_bar)
 * - underscored, lowercase
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isSnakeCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
