import {$is, $to} from '@leyyo/common';
import { Bind, Fqn } from '@leyyo/core';
import { CastBasic, CastDocCallback, CastDocResponse, CastPriority } from '@leyyo/cast';
import { FQN } from '../internal';

@Fqn(FQN)
@CastBasic()
@Bind('static')
export class AllCaps {

    static readonly priority = {
        string: 1,
        any: 99,
    } as CastPriority;

    static exact(value: unknown): boolean {
        return $is.text(value) && /^[$]*[A-Z$]+[A-Z0-9$]*(_[A-Z0-9$]+)*$/g.test(value as string);
    }

    static cast(value: unknown): string {
        const str = $to.text(value);
        if (!str) {
            return str;
        }
        return str
            .replace(/[.,_?!]/g, '-')
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z$]+[0-9]*|[A-Z]|[0-9]+/g)
            .map((x) => x.toUpperCase())
            .join('_');
    }

    static doc(openApi: CastDocCallback): CastDocResponse {
        return openApi(this, { type: 'string', format: 'all-caps' });
    }
}
