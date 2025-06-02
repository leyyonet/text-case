import { $is, $to } from '@leyyo/common';
import { Bind, Fqn } from '@leyyo/core';
import { CastAlias, CastBasic, CastDocCallback, CastDocResponse, CastPriority } from '@leyyo/cast';
import { FQN } from '../internal';
import { textCaseHelper } from '../helper';

@Fqn(FQN)
@CastBasic()
@CastAlias('Camelize')
@Bind('static')
export class CamelCase {
    static readonly priority = {
        string: 1,
        any: 99,
    } as CastPriority;

    static exact(value: unknown): boolean {
        return $is.text(value) && /^[a-z$]+[a-z0-9$]*(?:[A-Z][a-z0-9$]+)*$/g.test(value as string);
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
            .join('');
        return textCaseHelper.lowerUpperAt(str);
    }

    static doc(openApi: CastDocCallback): CastDocResponse {
        return openApi(this, { type: 'string', format: 'camel-case' });
    }
}
export const Camelize = CamelCase;
