import { defineForetell, errorPool, leyyoCommonForetell, literalPool } from "@leyyo/common";
import { PCK } from "../internal.js";
import { leyyoTypeForetell } from "@leyyo/type";

// noinspection JSUnusedGlobalSymbols
export const leyyoTextCaseForetell = defineForetell(PCK)
  .dependency(leyyoCommonForetell, leyyoTypeForetell)
  .add(
    () =>
      errorPool.lazy(
        PCK,
        "InvalidAllCapsError",
        import("../error/invalid-const-case.error.js").then((m) => m.InvalidConstCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidCamelCaseError",
        import("../error/invalid-camel-case.error.js").then((m) => m.InvalidCamelCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidHeaderCaseError",
        import("../error/invalid-header-case.error.js").then((m) => m.InvalidHeaderCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidKebabCaseError",
        import("../error/invalid-kebab-case.error.js").then((m) => m.InvalidKebabCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidPascalCaseError",
        import("../error/invalid-pascal-case.error.js").then((m) => m.InvalidPascalCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidRegularCaseError",
        import("../error/invalid-regular-case.error.js").then((m) => m.InvalidRegularCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidSentenceCaseError",
        import("../error/invalid-sentence-case.error.js").then((m) => m.InvalidSentenceCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidSnakeCaseError",
        import("../error/invalid-snake-case.error.js").then((m) => m.InvalidSnakeCaseError),
        { i18n: true, emit: true },
      ),
  )
  .add(() =>
    literalPool.lazy(
      PCK,
      "CaseType",
      import("../literal/case-type.js").then((m) => m.CaseTypeItems),
      { i18n: true },
    ),
  )
  .end();
