import memoize from 'memoizee-decorator';
import {AbstractScalar, scalar, StringOpt} from "@leyyo/scalar";
import {leyyo, TypeOpt} from "@leyyo/core";
import {Fqn} from "@leyyo/fqn";
import {TextCaseLike} from "./index-types";
import {FQN_NAME} from "./internal-component";

@Fqn(...FQN_NAME)
export abstract class AbstractCase<O extends TypeOpt = StringOpt> extends AbstractScalar<string, O> {
    protected readonly _textCase: TextCaseLike;
    protected constructor(textCase: TextCaseLike) {
        super(scalar);
        this._textCase = textCase;
    }
    protected _parse(value: unknown, opt?: StringOpt): Array<string> {
        const list = [];
        let text = leyyo.primitive.text(value, opt);
        if (!text) {
            return list;
        }
        if (!/^([a-zA-Z\d\-]+$)/i.test(text)) {
            text = text.replace(/[^a-z\d]/gmi, '-');
        }
        text = text.replace(/-+/g, '-');
        if (!text || text === '-') {
            return list;
        }
        if (!/[a-z]/.test(text) && /[A-Z\d\-]/.test(text)) {
            return text.split('-').filter(part => part !== '');
        }
        if (!/[A-Z]/.test(text) && /[a-z\d\-]/.test(text)) {
            return text.split('-').filter(part => part !== '');
        }
        let index = 0;
        let prevUpper = false;
        list.push('');
        for (const chr of text) {
            if (chr === '-') {
                list.push('');
                index++
            } else {
                const isUppercase = chr.toUpperCase() === chr;
                if (isUppercase && !prevUpper) {
                    list.push('');
                    index++
                }
                list[index] += chr;
                prevUpper = isUppercase;
            }
        }
        return list.filter(part => part !== '');
    }
    protected _toFirstUpper(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    protected abstract _cast(values: Array<string>): string;

    @memoize({})
    cast(value: unknown, opt?: O): string {
        let str = leyyo.primitive.text(value, opt);
        if (str) {
            const values = this._parse(str, opt);
            if (values.length > 0) {
                return this._scalar.string.ly_validate(this._cast(values), opt);
            }
        }
        return this._scalar.string.ly_validate(null, opt);
    }
}