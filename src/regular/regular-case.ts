import { Dict } from '@leyyo/common';
import { Bind, Fqn } from '@leyyo/core';
import { AssignType, CastApiDocResponse, CastPriority } from '@leyyo/cast';
import { AbstractCase } from '../abstract';
import { FQN_PCK } from '../internal';

@Fqn(FQN_PCK)
@AssignType('Humanize')
@Bind('static')
export class RegularCase extends AbstractCase {
    static readonly priority = {
        string: 1,
        any: 99,
    } as CastPriority;

    static is(value: unknown): boolean {
        return value && this.cast(value) === value;
    }

    protected static _cast(values: Array<string>): string {
        return values.map((part) => part.toLowerCase()).join(' ');
    }

    static doc(_target: unknown, _property: PropertyKey, _openApi: Dict): CastApiDocResponse {
        return { type: 'string' };
    }
}
