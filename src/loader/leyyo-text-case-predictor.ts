import { definePredictor, errorPool, literalPool } from "@leyyo/common";
import { PCK } from "../internal.js";

// noinspection JSUnusedGlobalSymbols
export const leyyoTextCasePredictor = definePredictor(PCK)
  .dependency(
    () => import("@leyyo/common").then((m) => m.leyyoCommonPredictor),
    () => import("@leyyo/type").then((m) => m.leyyoTypePredictor),
  )
  .add(
    () =>
      errorPool.lazy(
        PCK,
        "InvalidAdaCaseError",
        import("../error/invalid-ada-case.error.js").then((m) => m.InvalidAdaCaseError),
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
        "InvalidCobolCaseError",
        import("../error/invalid-cobol-case.error.js").then((m) => m.InvalidCobolCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidConstCaseError",
        import("../error/invalid-const-case.error.js").then((m) => m.InvalidConstCaseError),
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
    () =>
      errorPool.lazy(
        PCK,
        "InvalidTextCaseError",
        import("../error/invalid-text-case.error.js").then((m) => m.InvalidTextCaseError),
        { i18n: true, emit: true },
      ),
    () =>
      errorPool.lazy(
        PCK,
        "InvalidTrainCaseError",
        import("../error/invalid-train-case.error.js").then((m) => m.InvalidTrainCaseError),
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
