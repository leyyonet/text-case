import { TextCaseHelperLike } from "../type.js";
import { isText, setFqn } from "@leyyo/common";
import { PCK } from "../internal.js";
import { CaseType } from "../literal/index.js";
import { isAdaCase } from "./is-ada-case.js";
import { isCamelCase } from "./is-camel-case.js";
import { isCobolCase } from "./is-cobol-case.js";
import { isConstCase } from "./is-const-case.js";
import { isHeaderCase } from "./is-header-case.js";
import { isKebabCase } from "./is-kebab-case.js";
import { isPascalCase } from "./is-pascal-case.js";
import { isRegularCase } from "./is-regular-case.js";
import { isSentenceCase } from "./is-sentence-case.js";
import { isSnakeCase } from "./is-snake-case.js";
import { isTrainCase } from "./is-train-case.js";
import { IsFn } from "@leyyo/type";

const WORD_RE = /[$]?[A-Z]+(?=[A-Z][a-z0-9$])|[$]?[A-Z]?[a-z0-9$]+|[$]+/g;
const PUNCTUATION = /[!"#%&'()*+,-./:;<=>?@[\]^_`{|}~]/;

const isMap: Record<CaseType, IsFn> = {
  "camel-case": isCamelCase,
  "kebab-case": isKebabCase,
  "pascal-case": isPascalCase,
  "snake-case": isSnakeCase,
  "const-case": isConstCase,
  "header-case": isHeaderCase,
  "regular-case": isRegularCase,
  "sentence-case": isSentenceCase,
  "ada-case": isAdaCase,
  "cobol-case": isCobolCase,
  "train-case": isTrainCase,
};
const isEntries = Object.entries(isMap) as Array<[CaseType, IsFn]>;

class TextCaseHelper implements TextCaseHelperLike {
  tokenize(input: string): Array<string> {
    if (!input) {
      return [];
    }
    const out: Array<string> = [];
    input
      .replace(PUNCTUATION, " ")
      .trim()
      .split(" ")
      .filter(Boolean)
      .forEach((part) => {
        const match = part.match(WORD_RE);
        if (match) {
          out.push(...match.map((item) => item.toLowerCase()));
        }
      });
    return out;
  }
  firstUpper(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  detectAny(value: string): Array<CaseType> {
    const types: Array<CaseType> = [];
    if (isText(value)) {
      for (const [type, fnc] of isEntries) {
        if (fnc(value)) {
          types.push(type);
        }
      }
    }
    return types;
  }
  detectFirst(value: string): CaseType | undefined {
    if (isText(value)) {
      for (const [type, fnc] of isEntries) {
        if (fnc(value)) {
          return type;
        }
      }
    }
    return undefined;
  }
}
setFqn(TextCaseHelper, PCK);
export const textCaseHelper: TextCaseHelperLike = new TextCaseHelper();
