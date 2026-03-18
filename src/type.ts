import { CaseType } from "./literal/index.js";

export interface TextCaseHelperLike {
  tokenize(value: string): Array<string>;
  firstUpper(value: string): string;
  detectAny(value: string): Array<CaseType>;
  detectFirst(value: string): CaseType | undefined;
}
