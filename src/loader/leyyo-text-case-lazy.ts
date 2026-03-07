import { defineLazy, leyyoCommonLazy } from "@leyyo/common";
import { PCK } from "./internal.js";
import { leyyoTypeLazy } from "@leyyo/type";

// noinspection JSUnusedGlobalSymbols
export const leyyoTextCaseLazy = defineLazy(PCK)
  .dependency(leyyoCommonLazy, leyyoTypeLazy)
  // literals
  .add(() => import("./literal/case-type.js").then((m) => m.CaseTypeItems))
  .end();
