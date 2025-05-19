import {Fqn} from "@leyyo/core";
import {$is, OneOrMore} from "@leyyo/common";
import {TextCaseLike} from "./index.types";
import {FQN_PCK} from "../internal";
import {AllCaps} from "../all-caps";
import {CamelCase} from "../camel";
import {HeaderCase} from "../header";
import {KebabCase} from "../kebab";
import {PascalCase} from "../pascal";
import {RegularCase} from "../regular";
import {SnakeCase} from "../snake";
import {TitleCase} from "../title";
import {CaseType} from "../literals";

@Fqn(FQN_PCK)
class TextCase implements TextCaseLike {

    // region base
    which(value: unknown): Array<CaseType> {
        const result = [] as Array<CaseType>;
        if (AllCaps.is(value)) {
            result.push('all-caps');
        }
        if (CamelCase.is(value)) {
            result.push('camel-case');
        }
        if (HeaderCase.is(value)) {
            result.push('header-case');
        }
        if (KebabCase.is(value)) {
            result.push('kebab-case');
        }
        if (PascalCase.is(value)) {
            result.push('pascal-case');
        }
        if (RegularCase.is(value)) {
            result.push('regular-case');
        }
        if (SnakeCase.is(value)) {
            result.push('snake-case');
        }
        if (TitleCase.is(value)) {
            result.push('title-case');
        }
        return result;
    }
    protected _is(type: CaseType, value: unknown): boolean {
        switch (type) {
            case 'all-caps':
                return AllCaps.is(value);
            case 'camel-case':
                return CamelCase.is(value);
            case 'header-case':
                return HeaderCase.is(value);
            case 'kebab-case':
                return KebabCase.is(value);
            case 'pascal-case':
                return PascalCase.is(value);
            case 'regular-case':
                return RegularCase.is(value);
            case 'snake-case':
                return SnakeCase.is(value);
            case 'title-case':
                return TitleCase.is(value);
            default:
                return false;
        }
    }
    is(type: OneOrMore<CaseType>, value: unknown): boolean {
        if ($is.empty(value)) {
            return false;
        }
        if (Array.isArray(type)) {
            for (const t of type) {
                if (this._is(t, value)) {
                    return true;
                }
            }
            return false;
        }
        return this._is(type, value);
    }
    cast(type: CaseType, value: unknown): string {
        switch (type) {
            case 'all-caps':
                return AllCaps.cast(value);
            case 'camel-case':
                return CamelCase.cast(value);
            case 'header-case':
                return HeaderCase.cast(value);
            case 'kebab-case':
                return KebabCase.cast(value);
            case 'pascal-case':
                return PascalCase.cast(value);
            case 'regular-case':
                return RegularCase.cast(value);
            case 'snake-case':
                return SnakeCase.cast(value);
            case 'title-case':
                return TitleCase.cast(value);
            default:
                return undefined;
        }
    }
    // endregion base

    // region all-caps
    isAllCaps(value: unknown): boolean {
        return AllCaps.is(value);
    }

    toAllCaps(value: unknown): string {
        return AllCaps.cast(value);
    }
    // endregion all-caps

    // region camel-case
    isCamelCase(value: unknown): boolean {
        return CamelCase.is(value);
    }

    toCamelCase(value: unknown): string {
        return CamelCase.cast(value);
    }
    // endregion camel-case

    // region header-case
    isHeaderCase(value: unknown): boolean {
        return HeaderCase.is(value);
    }

    toHeaderCase(value: unknown): string {
        return HeaderCase.cast(value);
    }
    // endregion header-case

    // region kebab-case
    isKebabCase(value: unknown): boolean {
        return KebabCase.is(value);
    }

    toKebabCase(value: unknown): string {
        return KebabCase.cast(value);
    }
    // endregion kebab-case

    // region pascal-case
    isPascalCase(value: unknown): boolean {
        return PascalCase.is(value);
    }

    toPascalCase(value: unknown): string {
        return PascalCase.cast(value);
    }
    // endregion pascal-case

    // region regular-case
    isRegularCase(value: unknown): boolean {
        return RegularCase.is(value);
    }

    toRegularCase(value: unknown): string {
        return RegularCase.cast(value);
    }
    // endregion regular-case

    // region snake-case
    isSnakeCase(value: unknown): boolean {
        return SnakeCase.is(value);
    }

    toSnakeCase(value: unknown): string {
        return SnakeCase.cast(value);
    }
    // endregion snake-case

    // region title-case
    isTitleCase(value: unknown): boolean {
        return TitleCase.is(value);
    }

    toTitleCase(value: unknown): string {
        return TitleCase.cast(value);
    }
    // endregion title-case

}
export const textCase: TextCaseLike = new TextCase();
