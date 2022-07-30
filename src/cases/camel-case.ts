import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {FQN_NAME} from "../internal-component";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {TextCaseLike} from "../index-types";
import {CamelCaseCast, CamelCaseOpt} from "./index-types";
import {AbstractCase} from "../abstract-case";

type O = CamelCaseOpt;

@Fqn(...FQN_NAME)
@AssignCast('CamelCase', 'Camelize')
export class CamelCase extends AbstractCase<O> implements CamelCaseCast {
    protected readonly _PATTERN = /^[a-z]+([A-Z]*([a-z]|\d(?![a-z]))*)+$|^$/;
    constructor(textCase: TextCaseLike) {
        super(textCase);
    }
    @memoize({})
    is(value: unknown, opt?: O): boolean {
        const str = leyyo.primitive.string(value, opt);
        return (str === null) ? this._PATTERN.test(str) : null;
    }
    protected _cast(values: Array<string>): string {
        return values.map((part, index) => (index > 0) ? this._toFirstUpper(part) : part.toLowerCase()).join('');
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}
