import {TypeOpt} from "@leyyo/core";
import {ScalarItemCast} from "@leyyo/scalar";


export type CamelCaseOpt = TypeOpt;
export type CamelCaseCast = ScalarItemCast<string, CamelCaseOpt>;

export type HeaderCaseOpt = TypeOpt;
export type HeaderCaseCast = ScalarItemCast<string, HeaderCaseOpt>;

export type KebabCaseOpt = TypeOpt;
export type KebabCaseCast = ScalarItemCast<string, KebabCaseOpt>;

export type PascalCaseOpt = TypeOpt;
export type PascalCaseCast = ScalarItemCast<string, PascalCaseOpt>;

export type RegularCaseOpt = TypeOpt;
export type RegularCaseCast = ScalarItemCast<string, RegularCaseOpt>;

export type SnakeCaseOpt = TypeOpt;
export type SnakeCaseCast = ScalarItemCast<string, SnakeCaseOpt>;

export type TitleCaseOpt = TypeOpt;
export type TitleCaseCast = ScalarItemCast<string, TitleCaseOpt>;

export type UpperCaseOpt = TypeOpt;
export type UpperCaseCast = ScalarItemCast<string, UpperCaseOpt>;