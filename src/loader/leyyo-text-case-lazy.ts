import { defineLazy, leyyoCommonLazy } from "@leyyo/common";
import { PCK } from "../internal.js";
import { leyyoTypeLazy } from "@leyyo/type";

// noinspection JSUnusedGlobalSymbols
export const leyyoTextCaseLazy = defineLazy(PCK)
  .dependency(
    () => import("@leyyo/common").then((m) => m.leyyoCommonLazy),
    () => import("@leyyo/type").then((m) => m.leyyoTypeLazy),
  )
  .add(
    // errors
    () => import("../error/invalid-ada-case.error.js").then((m) => m.InvalidAdaCaseError),
    () => import("../error/invalid-camel-case.error.js").then((m) => m.InvalidCamelCaseError),
    () => import("../error/invalid-cobol-case.error.js").then((m) => m.InvalidCobolCaseError),
    () => import("../error/invalid-const-case.error.js").then((m) => m.InvalidConstCaseError),
    () => import("../error/invalid-header-case.error.js").then((m) => m.InvalidHeaderCaseError),
    () => import("../error/invalid-kebab-case.error.js").then((m) => m.InvalidKebabCaseError),
    () => import("../error/invalid-pascal-case.error.js").then((m) => m.InvalidPascalCaseError),
    () => import("../error/invalid-regular-case.error.js").then((m) => m.InvalidRegularCaseError),
    () => import("../error/invalid-sentence-case.error.js").then((m) => m.InvalidSentenceCaseError),
    () => import("../error/invalid-snake-case.error.js").then((m) => m.InvalidSnakeCaseError),
    () => import("../error/invalid-text-case.error.js").then((m) => m.InvalidTextCaseError),
    () => import("../error/invalid-train-case.error.js").then((m) => m.InvalidTrainCaseError),
    // literals
    () => import("../literal/case-type.js").then((m) => m.CaseTypeItems),
    // items
    () => import("../items/text-case-helper.js").then((m) => m.textCaseHelper),
    () => import("../items/to-text-case-of.js").then((m) => m.toTextCaseOf),
    // is
    () => import("../items/is-ada-case.js").then((m) => m.isAdaCase),
    () => import("../items/is-camel-case.js").then((m) => m.isCamelCase),
    () => import("../items/is-cobol-case.js").then((m) => m.isCobolCase),
    () => import("../items/is-const-case.js").then((m) => m.isConstCase),
    () => import("../items/is-header-case.js").then((m) => m.isHeaderCase),
    () => import("../items/is-kebab-case.js").then((m) => m.isKebabCase),
    () => import("../items/is-pascal-case.js").then((m) => m.isPascalCase),
    () => import("../items/is-regular-case.js").then((m) => m.isRegularCase),
    () => import("../items/is-sentence-case.js").then((m) => m.isSentenceCase),
    () => import("../items/is-snake-case.js").then((m) => m.isSnakeCase),
    () => import("../items/is-train-case.js").then((m) => m.isTrainCase),
    // to
    () => import("../items/to-ada-case.js").then((m) => m.toAdaCase),
    () => import("../items/to-camel-case.js").then((m) => m.toCamelCase),
    () => import("../items/to-cobol-case.js").then((m) => m.toCobolCase),
    () => import("../items/to-const-case.js").then((m) => m.toConstCase),
    () => import("../items/to-header-case.js").then((m) => m.toHeaderCase),
    () => import("../items/to-kebab-case.js").then((m) => m.toKebabCase),
    () => import("../items/to-pascal-case.js").then((m) => m.toPascalCase),
    () => import("../items/to-regular-case.js").then((m) => m.toRegularCase),
    () => import("../items/to-sentence-case.js").then((m) => m.toSentenceCase),
    () => import("../items/to-snake-case.js").then((m) => m.toSnakeCase),
    () => import("../items/to-train-case.js").then((m) => m.toTrainCase),
  )
  .end();
