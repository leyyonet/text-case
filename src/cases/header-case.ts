import memoize from 'memoizee-decorator';
import {AbstractCase} from "../abstract-case";
import {Fqn} from "@leyyo/fqn";
import {FQN_NAME} from "../internal-component";
import {RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {TextCaseLike} from "../index-types";
import {HeaderCaseCast, HeaderCaseOpt} from "./index-types";

type O = HeaderCaseOpt;

@Fqn(...FQN_NAME)
@AssignCast('HeaderCase')
export class HeaderCase extends AbstractCase<O> implements HeaderCaseCast {
    constructor(textCase: TextCaseLike) {
        super(textCase);
    }
    @memoize({})
    is(value: unknown, opt?: O): boolean {
        return this.cast(value, opt) === value;
    }
    protected _cast(values: Array<string>): string {
        return values.map(part => this._toFirstUpper(part)).join(' ');
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}