import {Fqn} from "@leyyo/core";
import {$to} from "@leyyo/common";
import {FQN_PCK} from "../internal";

@Fqn(FQN_PCK)
export abstract class AbstractCase {

    protected static _parse(text: string): Array<string> {
        const list = [];
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
    protected static _toFirstUpper(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
    protected static _cast(values: Array<string>): string {
        return values.join('');
    }

    static cast(value: unknown): string {
        let str = $to.text(value);
        if (str) {
            const values = this._parse(str);
            if (values.length > 0) {
                return this._cast(values);
            }
        }
        return undefined;
    }
}
