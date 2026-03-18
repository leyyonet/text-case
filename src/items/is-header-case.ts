import { isText } from "@leyyo/common";

const _pattern = /^[A-Z$][a-z0-9$]*(?: [A-Z][a-z0-9$]*)*$/;
/**
 * Check value is header case (Foo Bar)
 * - spaced, all capitalised
 *
 * @param {any} value
 * @return {boolean}
 * */
export function isHeaderCase(value: unknown): boolean {
  return isText(value) && _pattern.test(value as string);
}
