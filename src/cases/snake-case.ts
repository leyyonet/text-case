import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {FQN_NAME} from "../internal-component";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {TextCaseLike} from "../index-types";
import {SnakeCaseCast, SnakeCaseOpt} from "./index-types";
import {AbstractCase} from "../abstract-case";

type O = SnakeCaseOpt;

@Fqn(...FQN_NAME)
@AssignCast('SnakeCase', 'Underscore', 'Decamelize')
export class SnakeCase extends AbstractCase<O> implements SnakeCaseCast {
    protected readonly _PATTERN = new RegExp(`^([a-z](?!\d)|\d(?![a-z]))+(_?([a-z](?!\d)|\d(?![a-z])))*$|^$`, 'g');
    constructor(textCase: TextCaseLike) {
        super(textCase);
    }
    @memoize({})
    is(value: unknown, opt?: O): boolean {
        const str = leyyo.primitive.string(value, opt);
        return (str === null) ? this._PATTERN.test(str) : null;
    }
    protected _cast(values: Array<string>): string {
        return values.join('_').toLowerCase();
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}