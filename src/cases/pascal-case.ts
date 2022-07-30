import memoize from 'memoizee-decorator';
import {Fqn} from "@leyyo/fqn";
import {FQN_NAME} from "../internal-component";
import {leyyo, RecLike} from "@leyyo/core";
import {AssignCast, CastApiDocResponse} from "@leyyo/cast";
import {TextCaseLike} from "../index-types";
import {PascalCaseOpt} from "./index-types";
import {AbstractCase} from "../abstract-case";

type O = PascalCaseOpt;

@Fqn(...FQN_NAME)
@AssignCast('PascalCase', 'Capitalize')
export class PascalCase extends AbstractCase<O> implements PascalCaseOpt {
    protected readonly _PATTERN = /^[A-Z]+([A-Z]*([a-z]|\d(?![a-z]))*)+$|^$/;
    constructor(textCase: TextCaseLike) {
        super(textCase);
    }
    @memoize({})
    is(value: unknown, opt?: O): boolean {
        const str = leyyo.primitive.string(value, opt);
        return (str === null) ? this._PATTERN.test(str) : null;
    }
    protected _cast(values: Array<string>): string {
        return values.map(part => this._toFirstUpper(part)).join('');
    }
    docCast(target: unknown, property: PropertyKey, openApi: RecLike, opt?: O): CastApiDocResponse {
        return this._scalar.string.ly_apiDoc(target, property, openApi, {}, opt);
    }
}