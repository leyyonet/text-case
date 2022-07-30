import {leyyo} from "@leyyo/core";
import {Bind, Fqn} from "@leyyo/fqn";
import {COMPONENT_NAME, FQN_NAME} from "./internal-component";
import {
    CamelCase,
    CamelCaseCast,
    CamelCaseOpt,
    HeaderCase,
    HeaderCaseCast,
    HeaderCaseOpt,
    KebabCase,
    KebabCaseCast,
    KebabCaseOpt,
    PascalCase,
    PascalCaseCast,
    PascalCaseOpt,
    RegularCase,
    RegularCaseCast,
    RegularCaseOpt,
    SnakeCase,
    SnakeCaseCast,
    SnakeCaseOpt,
    TitleCase,
    TitleCaseCast,
    TitleCaseOpt,
    UpperCase,
    UpperCaseCast,
    UpperCaseOpt
} from "./cases";
import {scalar} from "@leyyo/scalar";
import {TextCaseLike} from "./index-types";

// noinspection JSUnusedGlobalSymbols
@Fqn(...FQN_NAME)
@Bind()
export class TextCase implements TextCaseLike {
    // region property
    protected readonly _camel: CamelCaseCast;
    protected readonly _header: HeaderCaseCast;
    protected readonly _kebab: KebabCaseCast;
    protected readonly _pascal: PascalCaseCast;
    protected readonly _regular: RegularCaseCast;
    protected readonly _snake: SnakeCaseCast;
    protected readonly _title: TitleCaseCast;
    protected readonly _upper: UpperCaseCast;
    // endregion property
    // region methods
    constructor() {
        leyyo.component.add(COMPONENT_NAME);
        this._camel = new CamelCase(this);
        console.log(this._camel.is);
        this._header = new HeaderCase(this);
        this._kebab = new KebabCase(this);
        this._pascal = new PascalCase(this);
        this._regular = new RegularCase(this);
        this._snake = new SnakeCase(this);
        this._title = new TitleCase(this);
        this._upper = new UpperCase(this);
    }

    initialize(): void {
        scalar.initialize();
    }

    // endregion methods
    // region camel
    get camel(): CamelCaseCast {
        return this._camel;
    }

    isCamel(value: unknown, opt?: CamelCaseOpt): boolean {
        return this._camel.is(value, opt);
    }

    toCamel(value: unknown, opt?: CamelCaseOpt): string {
        return this._camel.cast(value, opt);
    }

    isCamelize(value: unknown, opt?: CamelCaseOpt): boolean {
        return this._camel.is(value, opt);
    }

    toCamelize(value: unknown, opt?: CamelCaseOpt): string {
        return this._camel.cast(value, opt);
    }

    // endregion camel
    // region header
    get header(): HeaderCaseCast {
        return this._header;
    }

    isHeader(value: unknown, opt?: HeaderCaseOpt): boolean {
        return this._header.is(value, opt);
    }

    toHeader(value: unknown, opt?: HeaderCaseOpt): string {
        return this._header.cast(value, opt);
    }

    // endregion header
    // region kebab
    get kebab(): KebabCaseCast {
        return this._kebab;
    }

    isKebab(value: unknown, opt?: KebabCaseOpt): boolean {
        return this._kebab.is(value, opt);
    }

    toKebab(value: unknown, opt?: KebabCaseOpt): string {
        return this._kebab.cast(value, opt);
    }

    isDash(value: unknown, opt?: KebabCaseOpt): boolean {
        return this._kebab.is(value, opt);
    }

    toDash(value: unknown, opt?: KebabCaseOpt): string {
        return this._kebab.cast(value, opt);
    }

    // endregion kebab
    // region pascal
    get pascal(): PascalCaseCast {
        return this._pascal;
    }

    isPascal(value: unknown, opt?: PascalCaseOpt): boolean {
        return this._pascal.is(value, opt);
    }

    toPascal(value: unknown, opt?: PascalCaseOpt): string {
        return this._pascal.cast(value, opt);
    }

    isCapitalize(value: unknown, opt?: PascalCaseOpt): boolean {
        return this._pascal.is(value, opt);
    }

    toCapitalize(value: unknown, opt?: PascalCaseOpt): string {
        return this._pascal.cast(value, opt);
    }

    // endregion pascal
    // region regular
    get regular(): RegularCaseCast {
        return this._regular;
    }

    isRegular(value: unknown, opt?: RegularCaseOpt): boolean {
        return this._regular.is(value, opt);
    }

    toRegular(value: unknown, opt?: RegularCaseOpt): string {
        return this._regular.cast(value, opt);
    }

    isHumanize(value: unknown, opt?: RegularCaseOpt): boolean {
        return this._regular.is(value, opt);
    }

    toHumanize(value: unknown, opt?: RegularCaseOpt): string {
        return this._regular.cast(value, opt);
    }

    // endregion regular
    // region snake
    get snake(): SnakeCaseCast {
        return this._snake;
    }

    isSnake(value: unknown, opt?: SnakeCaseOpt): boolean {
        return this._snake.is(value, opt);
    }

    toSnake(value: unknown, opt?: SnakeCaseOpt): string {
        return this._snake.cast(value, opt);
    }

    isDecamelize(value: unknown, opt?: SnakeCaseOpt): boolean {
        return this._snake.is(value, opt);
    }

    toDecamelize(value: unknown, opt?: SnakeCaseOpt): string {
        return this._snake.cast(value, opt);
    }

    isUnderscore(value: unknown, opt?: SnakeCaseOpt): boolean {
        return this._snake.is(value, opt);
    }

    toUnderscore(value: unknown, opt?: SnakeCaseOpt): string {
        return this._snake.cast(value, opt);
    }

    // endregion snake
    // region title
    get title(): TitleCaseCast {
        return this._title;
    }

    isTitle(value: unknown, opt?: TitleCaseOpt): boolean {
        return this._title.is(value, opt);
    }

    toTitle(value: unknown, opt?: TitleCaseOpt): string {
        return this._title.cast(value, opt);
    }

    isLabel(value: unknown, opt?: HeaderCaseOpt): boolean {
        return this._header.is(value, opt);
    }

    toLabel(value: unknown, opt?: HeaderCaseOpt): string {
        return this._header.cast(value, opt);
    }

    // endregion title
    // region upper
    get upper(): UpperCaseCast {
        return this._upper;
    }

    isUpper(value: unknown, opt?: UpperCaseOpt): boolean {
        return this._upper.is(value, opt);
    }

    toUpper(value: unknown, opt?: UpperCaseOpt): string {
        return this._upper.cast(value, opt);
    }

    isAllCaps(value: unknown, opt?: UpperCaseOpt): boolean {
        return this._upper.is(value, opt);
    }

    toAllCaps(value: unknown, opt?: UpperCaseOpt): string {
        return this._upper.cast(value, opt);
    }

    isConstant(value: unknown, opt?: UpperCaseOpt): boolean {
        return this._upper.is(value, opt);
    }

    toConstant(value: unknown, opt?: UpperCaseOpt): string {
        return this._upper.cast(value, opt);
    }

    // endregion upper
}

export const textCase: TextCaseLike = new TextCase();