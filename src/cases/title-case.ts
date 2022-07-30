import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {FQN_NAME} from "../internal-component";
import {RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {TextCaseLike} from "../index-types";
import {TitleCaseCast} from "./index-types";
import {AbstractCase} from "../abstract-case";

type O = TitleCaseCast;

@Fqn(...FQN_NAME)
@AssignCast('TitleCase', 'LabelCase')
export class TitleCase extends AbstractCase<O> implements TitleCaseCast {
    constructor(textCase: TextCaseLike) {
        super(textCase);
    }
    @memoize({})
    is(value: unknown, opt?: O): boolean {
        return this.cast(value, opt) === value;
    }
    protected _cast(values: Array<string>): string {
        return values.map((part, index) => (index === 0) ? this._toFirstUpper(part) : part.toLowerCase()).join(' ');
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}