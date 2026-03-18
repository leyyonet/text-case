import { ToOpt, typeHelper } from "@leyyo/type";
import { optCheck, OptFn, testCase } from "@leyyo/common";
import {
  toAdaCase,
  toCamelCase,
  toCobolCase,
  toConstCase,
  toHeaderCase,
  toKebabCase,
  toPascalCase,
  toRegularCase,
  toSentenceCase,
  toSnakeCase,
  toTrainCase,
} from "./index.js";
import { CaseType } from "../literal/index.js";
import { InvalidTextCaseError } from "../error/invalid-text-case.error.js";
import { PCK } from "../internal.js";

// noinspection JSUnusedGlobalSymbols
/**
 * Convert value as given case by type
 *
 * @param {any} value
 * @param {CaseType} caseType
 * @param {ToOpt} options - options
 * @return {string} - train case text
 * */
export function toTextCaseOf(value: unknown, caseType: CaseType, options?: ToOpt | OptFn): string {
  switch (caseType) {
    case "camel-case":
      return toCamelCase(value, options);
    case "kebab-case":
      return toKebabCase(value, options);
    case "pascal-case":
      return toPascalCase(value, options);
    case "snake-case":
      return toSnakeCase(value, options);
    case "const-case":
      return toConstCase(value, options);
    case "header-case":
      return toHeaderCase(value, options);
    case "regular-case":
      return toRegularCase(value, options);
    case "sentence-case":
      return toSentenceCase(value, options);
    case "ada-case":
      return toAdaCase(value, options);
    case "cobol-case":
      return toCobolCase(value, options);
    case "train-case":
      return toTrainCase(value, options);
    default: {
      const o = optCheck<ToOpt>(options);
      const errorClass = typeHelper.errorClass(o, InvalidTextCaseError);
      throw new errorClass({
        case: testCase(PCK, "invalid-type"),
        caseType,
        value,
        type: typeof value,
      });
    }
  }
}
