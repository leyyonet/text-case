import {
    CamelCaseCast,
    CamelCaseOpt,
    HeaderCaseCast,
    HeaderCaseOpt,
    KebabCaseCast,
    KebabCaseOpt,
    PascalCaseCast,
    PascalCaseOpt,
    RegularCaseCast,
    RegularCaseOpt,
    SnakeCaseCast,
    SnakeCaseOpt,
    TitleCaseCast,
    TitleCaseOpt, UpperCaseCast, UpperCaseOpt
} from "./cases";

export interface TextCaseLike {

    // region methods
    initialize(): void;

    // endregion methods
    // region camel
    get camel(): CamelCaseCast;

    isCamel(value: unknown, opt?: CamelCaseOpt): boolean;

    toCamel(value: unknown, opt?: CamelCaseOpt): string;

    isCamelize(value: unknown, opt?: CamelCaseOpt): boolean;

    toCamelize(value: unknown, opt?: CamelCaseOpt): string;

    // endregion camel
    // region header
    get header(): HeaderCaseCast;

    isHeader(value: unknown, opt?: HeaderCaseOpt): boolean;

    toHeader(value: unknown, opt?: HeaderCaseOpt): string;

    isLabel(value: unknown, opt?: HeaderCaseOpt): boolean;

    toLabel(value: unknown, opt?: HeaderCaseOpt): string;

    // endregion header
    // region kebab
    get kebab(): KebabCaseCast;

    isKebab(value: unknown, opt?: KebabCaseOpt): boolean;

    toKebab(value: unknown, opt?: KebabCaseOpt): string;

    isDash(value: unknown, opt?: KebabCaseOpt): boolean;

    toDash(value: unknown, opt?: KebabCaseOpt): string;

    // endregion kebab
    // region pascal
    get pascal(): PascalCaseCast;

    isPascal(value: unknown, opt?: PascalCaseOpt): boolean;

    toPascal(value: unknown, opt?: PascalCaseOpt): string;

    isCapitalize(value: unknown, opt?: PascalCaseOpt): boolean;

    toCapitalize(value: unknown, opt?: PascalCaseOpt): string;

    // endregion pascal
    // region regular
    get regular(): RegularCaseCast;

    isRegular(value: unknown, opt?: RegularCaseOpt): boolean;

    toRegular(value: unknown, opt?: RegularCaseOpt): string;

    isHumanize(value: unknown, opt?: RegularCaseOpt): boolean;

    toHumanize(value: unknown, opt?: RegularCaseOpt): string;

    // endregion regular
    // region snake
    get snake(): SnakeCaseCast;

    isSnake(value: unknown, opt?: SnakeCaseOpt): boolean;

    toSnake(value: unknown, opt?: SnakeCaseOpt): string;

    isDecamelize(value: unknown, opt?: SnakeCaseOpt): boolean;

    toDecamelize(value: unknown, opt?: SnakeCaseOpt): string;

    isUnderscore(value: unknown, opt?: SnakeCaseOpt): boolean;

    toUnderscore(value: unknown, opt?: SnakeCaseOpt): string;

    // endregion snake
    // region title
    get title(): TitleCaseCast;

    isTitle(value: unknown, opt?: TitleCaseOpt): boolean;

    toTitle(value: unknown, opt?: TitleCaseOpt): string;

    // endregion title
    // region upper
    get upper(): UpperCaseCast;

    isUpper(value: unknown, opt?: UpperCaseOpt): boolean;

    toUpper(value: unknown, opt?: UpperCaseOpt): string;

    isAllCaps(value: unknown, opt?: UpperCaseOpt): boolean;

    toAllCaps(value: unknown, opt?: UpperCaseOpt): string;

    isConstant(value: unknown, opt?: UpperCaseOpt): boolean;

    toConstant(value: unknown, opt?: UpperCaseOpt): string;

    // endregion upper
}
export interface SampleItem {
    word: string;
    camelCase: string;
    headerCase: string;
    kebabCase: string;
    pascalCase: string;
    regularCase: string;
    snakeCase: string;
    titleCase: string;
    upperCase: string;
}