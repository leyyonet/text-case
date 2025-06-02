import { $is, $to } from '@leyyo/common';
import { Bind, Fqn } from '@leyyo/core';
import { CastAlias, CastBasic, CastDocCallback, CastDocResponse, CastPriority } from '@leyyo/cast';
import { FQN } from '../internal';

@Fqn(FQN)
@CastBasic()
@CastAlias('Capitalize')
@Bind('static')
export class PascalCase {
    static readonly priority = {
        string: 1,
        any: 99,
    } as CastPriority;

    static exact(value: unknown): boolean {
        return $is.text(value) && /^[$]*[A-Z][a-z0-9$]*(?:[A-Z][a-z0-9$]+)*$/g.test(value as string);
    }

    static cast(value: unknown): string {
        let str = $to.text(value);
        if (!str) {
            return str;
        }
        let count = 0;
        while (str.startsWith('$')) {
            count++;
            str = str.slice(1);
        }
        str = str
            .replace(/[.,_?!]/g, '-')
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z$]+[0-9]*|[A-Z]|[0-9]+/g)
            .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
        if (count < 1) {
            return str;
        }
        return str.padStart(count + str.length, '$');
    }

    static doc(openApi: CastDocCallback): CastDocResponse {
        return openApi(this, { type: 'string', format: 'pascal-case' });
    }
}
export const Capitalize = PascalCase;
