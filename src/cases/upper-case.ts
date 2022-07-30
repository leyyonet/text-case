import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {FQN_NAME} from "../internal-component";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {TextCaseLike} from "../index-types";
import {UpperCaseOpt} from "./index-types";
import {AbstractCase} from "../abstract-case";

type O = UpperCaseOpt;

@Fqn(...FQN_NAME)
@AssignCast('UpperCase', 'AllCaps', 'ConstCase')
export class UpperCase extends AbstractCase<O> implements UpperCaseOpt {
    protected readonly _PATTERN = new RegExp(`^([A-Z](?!\d)|\d(?![A-Z]))+(_?([a-z](?!\d)|\d(?![a-z])))*$|^$`, 'g');
    constructor(textCase: TextCaseLike) {
        super(textCase);
    }
    @memoize({})
    is(value: unknown, opt?: O): boolean {
        const str = leyyo.primitive.text(value, opt);
        return (str === null) ? this._PATTERN.test(str) : null;
    }
    protected _cast(values: Array<string>): string {
        return values.join('_').toUpperCase();
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}