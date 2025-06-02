import { $is, $to } from '@leyyo/common';
import { Bind, Fqn } from '@leyyo/core';
import { CastAlias, CastBasic, CastDocCallback, CastDocResponse, CastPriority } from '@leyyo/cast';
import { FQN } from '../internal';
import { textCaseHelper } from '../helper';

@Fqn(FQN)
@CastBasic()
@CastAlias('LabelCase', 'TitleCase')
@Bind('static')
export class HeaderCase {
    static readonly priority = {
        string: 1,
        any: 99,
    } as CastPriority;

    static canBe(value: unknown): boolean {
        return this.exact(value);
    }

    static exact(value: unknown): boolean {
        return $is.text(value) && /^[A-Z][a-z0-9]*( [A-Z]+[a-z0-9]*)*$/g.test(value as string);
    }

    static cast(value: unknown): string {
        let str = $to.text(value);
        if (!str) {
            return str;
        }
        str = str
            .replace(/[.,_?!]/g, '-')
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z$]+[0-9]*|[A-Z]|[0-9]+/g)
            .map((x) => textCaseHelper.firstUpperAll(x))
            .join(' ');
        return str
            .split(' ')
            .map((part) => {
                if (!part.startsWith('$')) {
                    return part;
                }
                while (part.startsWith('$')) {
                    part = part.slice(1);
                }
                return textCaseHelper.firstUpperAt(part);
            })
            .map((part) => {
                if (!part.endsWith('$')) {
                    return part;
                }
                while (part.endsWith('$')) {
                    part = part.substring(0, part.length - 1);
                }
                return part;
            })
            .join(' ');
    }

    static doc(openApi: CastDocCallback): CastDocResponse {
        return openApi(this, { type: 'string', format: 'header-case' });
    }
}
export const LabelCase = HeaderCase;
export const TitleCase = HeaderCase;
