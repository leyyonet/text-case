import {$to, Dict} from '@leyyo/common';
import { Bind, Fqn } from '@leyyo/core';
import { AssignType, CastApiDocResponse, CastPriority } from '@leyyo/cast';
import { AbstractCase } from '../abstract';
import { FQN_PCK } from '../internal';

@Fqn(FQN_PCK)
@AssignType('Capitalize')
@Bind('static')
export class PascalCase extends AbstractCase {
    protected static readonly _PATTERN = /^[A-Z]+([A-Z]*([a-z]|\d(?![a-z]))*)+$|^$/;
    static readonly priority = {
        string: 1,
        any: 99,
    } as CastPriority;

    static is(value: unknown): boolean {
        const str = $to.text(value);
        return str ? this._PATTERN.test(str) : false;
    }

    protected static _cast(values: Array<string>): string {
        return values.map(part => this._toFirstUpper(part)).join('');
    }

    static doc(_target: unknown, _property: PropertyKey, _openApi: Dict): CastApiDocResponse {
        return { type: 'string', format: 'pascal-case' };
    }
}
