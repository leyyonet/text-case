import { TextCaseHelperLike } from "./index.types.js";
import { setFqn } from "@leyyo/common";
import { PCK } from "../internal.js";

export class TextCaseHelper implements TextCaseHelperLike {
  clearPunctuation(str: string): string {
    return str.replace(/[.,/#?!%^&*;:{}=_`~()]/g, "-").trim();
  }
  firstUpperAt(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  firstUpperAll(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
  lowerUpperAt(value: string): string {
    return value.charAt(0).toLowerCase() + value.slice(1);
  }
  lowerUpperAll(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
setFqn(TextCaseHelper, PCK);
export const textCaseHelper: TextCaseHelperLike = new TextCaseHelper();
