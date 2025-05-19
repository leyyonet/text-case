import {CaseType} from "../literals";
import {OneOrMore} from "@leyyo/common";

export interface TextCaseLike {

    // region base
    which(value: unknown): Array<CaseType>;
    is(type: OneOrMore<CaseType>, value: unknown): boolean;
    cast(type: CaseType, value: unknown): string;
    // endregion base

    // region all-caps
    isAllCaps(value: unknown): boolean;
    toAllCaps(value: unknown): string;
    // endregion all-caps

    // region camel-case
    isCamelCase(value: unknown): boolean;
    toCamelCase(value: unknown): string;
    // endregion camel-case

    // region header-case
    isHeaderCase(value: unknown): boolean;
    toHeaderCase(value: unknown): string;
    // endregion header-case

    // region kebab-case
    isKebabCase(value: unknown): boolean;
    toKebabCase(value: unknown): string;
    // endregion kebab-case

    // region pascal-case
    isPascalCase(value: unknown): boolean;
    toPascalCase(value: unknown): string;
    // endregion pascal-case

    // region regular-case
    isRegularCase(value: unknown): boolean;
    toRegularCase(value: unknown): string;
    // endregion regular-case

    // region snake-case
    isSnakeCase(value: unknown): boolean;
    toSnakeCase(value: unknown): string;
    // endregion snake-case

    // region title-case
    isTitleCase(value: unknown): boolean;
    toTitleCase(value: unknown): string;
    // endregion title-case
}
