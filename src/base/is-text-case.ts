import {decoratorPool} from "@leyyo/core";
import {
    IdValidator,
    Placeholder,
    ValidatorMetadata,
    ValidatorOpt,
    ValidatorOptExt,
    ValidatorParam,
    validatorPool,
    ValidatorStored
} from "@leyyo/validator";
import {callParam, CallParams, CallValue, CallValuePro} from "@leyyo/http-call";
import {$assert, $dev, OneOrMore} from "@leyyo/common";
import {FQN_PCK} from "../internal";
import {CaseType, CaseTypeItems} from "../literals";
import {textCase} from "./text-case";

type H = Placeholder;
interface P extends CallParams {
    type?: CallValuePro<OneOrMore<CaseType>>;
}
type E = string;

/**
 * Data must be camel case
 *
 * Conditions
 * - string
 *
 * Relations
 */
export function IsTextCase(type: CallValue<OneOrMore<CaseType>>, opt?: ValidatorOpt): PropertyDecorator;
export function IsTextCase(type: CallValue<OneOrMore<CaseType>>, opt?: ValidatorOpt): ParameterDecorator;
export function IsTextCase(type: CallValue<OneOrMore<CaseType>>, opt?: ValidatorOptExt): ClassDecorator;
export function IsTextCase(type: CallValue<OneOrMore<CaseType>>, opt?: ValidatorOptExt): MethodDecorator;
export function IsTextCase(params: CallValue<OneOrMore<CaseType>>, opt?: ValidatorOpt | ValidatorOptExt): PropertyDecorator | ParameterDecorator | ClassDecorator | MethodDecorator {
    return (clazz: object, property?: PropertyKey, index?: number) =>
        deco.process([clazz, property, index], {params, opt});
}

const deco = decoratorPool.newId<ValidatorStored<P>, ValidatorMetadata<P, H, E>, ValidatorParam>(IsTextCase)
    .fqn(FQN_PCK)
    .targets('field', 'parameter')
    .keywords(IdValidator)
    .keywords('ph:field', 'ph:deco', 'ph:data')
    .processor((ins, p) => {
        const opt = validatorPool.options(ins, p.opt);
        const params = callParam.get<P>(ins, p.params, {
            type: {
                type: ['string'], primary: true,
                cast: v => {
                    if (Array.isArray(v)) {
                        $assert.literalArray(v, CaseTypeItems, () => $dev.desc(ins, {field: 'type'}));
                        return v;
                    }
                    else {
                        $assert.literal(v, CaseTypeItems, () => $dev.desc(ins, {field: 'type'}));
                        return [v];
                    }
                }
            }
        });
        ins.set({opt, params});
    })
    .metadata({
        error: '{{field}} must be camel case',
        is: (data) => typeof data === 'string',
        validates: (data, current) => {
            const types = current.config.type as Array<CaseType>;
            if (!textCase.is(types, data)) {
                return current.failed({});
            }

            return current.ignored();
        }
    });
