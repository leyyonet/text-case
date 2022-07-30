import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {FQN_NAME} from "../internal-component";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {TextCaseLike} from "../index-types";
import {CamelCaseOpt, KebabCaseCast} from "./index-types";
import {AbstractCase} from "../abstract-case";

type O = CamelCaseOpt;

@Fqn(...FQN_NAME)
@AssignCast('KebabCase', 'DashCase')
export class KebabCase extends AbstractCase<O> implements KebabCaseCast {
    protected readonly _PATTERN = new RegExp(`^([a-z](?!\d)|\d(?![a-z]))+(\-?([a-z](?!\d)|\d(?![a-z])))*$|^$`, 'g');
    constructor(textCase: TextCaseLike) {
        super(textCase);
    }
    @memoize({})
    is(value: unknown, opt?: O): boolean {
        const str = leyyo.primitive.string(value, opt);
        return (str === null) ? this._PATTERN.test(str) : null;
    }
    protected _cast(values: Array<string>): string {
        return values.join('-').toLowerCase();
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}