import { Fqn } from '@leyyo/core';
import { $is, OneOrMore } from '@leyyo/common';
import { TextCaseLike } from './index.types';
import { FQN } from '../internal';
import { AllCaps } from '../all-caps';
import { CamelCase } from '../camel';
import { HeaderCase } from '../header';
import { KebabCase } from '../kebab';
import { PascalCase } from '../pascal';
import { RegularCase } from '../regular';
import { SnakeCase } from '../snake';
import { SentenceCase } from '../sentence';
import { CaseType } from '../literals';

@Fqn(FQN)
class TextCase implements TextCaseLike {
    // region base
    which(value: unknown): Array<CaseType> {
        const result = [] as Array<CaseType>;
        if (AllCaps.exact(value)) {
            result.push('all-caps');
        }
        if (CamelCase.exact(value)) {
            result.push('camel-case');
        }
        if (HeaderCase.exact(value)) {
            result.push('header-case');
        }
        if (KebabCase.exact(value)) {
            result.push('kebab-case');
        }
        if (PascalCase.exact(value)) {
            result.push('pascal-case');
        }
        if (RegularCase.exact(value)) {
            result.push('regular-case');
        }
        if (SnakeCase.exact(value)) {
            result.push('snake-case');
        }
        if (SentenceCase.exact(value)) {
            result.push('sentence-case');
        }
        return result;
    }
    protected _is(type: CaseType, value: unknown): boolean {
        switch (type) {
            case 'all-caps':
                return AllCaps.exact(value);
            case 'camel-case':
                return CamelCase.exact(value);
            case 'header-case':
                return HeaderCase.exact(value);
            case 'kebab-case':
                return KebabCase.exact(value);
            case 'pascal-case':
                return PascalCase.exact(value);
            case 'regular-case':
                return RegularCase.exact(value);
            case 'snake-case':
                return SnakeCase.exact(value);
            case 'sentence-case':
                return SentenceCase.exact(value);
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
            case 'sentence-case':
                return SentenceCase.cast(value);
            default:
                return undefined;
        }
    }
    // endregion base

    // region all-caps
    isAllCaps(value: unknown): boolean {
        return AllCaps.exact(value);
    }

    toAllCaps(value: unknown): string {
        return AllCaps.cast(value);
    }
    // endregion all-caps

    // region camel-case
    isCamelCase(value: unknown): boolean {
        return CamelCase.exact(value);
    }

    toCamelCase(value: unknown): string {
        return CamelCase.cast(value);
    }
    // endregion camel-case

    // region header-case
    isHeaderCase(value: unknown): boolean {
        return HeaderCase.exact(value);
    }

    toHeaderCase(value: unknown): string {
        return HeaderCase.cast(value);
    }
    // endregion header-case

    // region kebab-case
    isKebabCase(value: unknown): boolean {
        return KebabCase.exact(value);
    }

    toKebabCase(value: unknown): string {
        return KebabCase.cast(value);
    }
    // endregion kebab-case

    // region pascal-case
    isPascalCase(value: unknown): boolean {
        return PascalCase.exact(value);
    }

    toPascalCase(value: unknown): string {
        return PascalCase.cast(value);
    }
    // endregion pascal-case

    // region regular-case
    isRegularCase(value: unknown): boolean {
        return RegularCase.exact(value);
    }

    toRegularCase(value: unknown): string {
        return RegularCase.cast(value);
    }
    // endregion regular-case

    // region snake-case
    isSnakeCase(value: unknown): boolean {
        return SnakeCase.exact(value);
    }

    toSnakeCase(value: unknown): string {
        return SnakeCase.cast(value);
    }
    // endregion snake-case

    // region sentence-case
    isSentenceCase(value: unknown): boolean {
        return SentenceCase.exact(value);
    }

    toSentenceCase(value: unknown): string {
        return SentenceCase.cast(value);
    }
    // endregion sentence-case
}
export const textCase: TextCaseLike = new TextCase();
