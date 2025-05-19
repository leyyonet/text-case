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
import {CallParams} from "@leyyo/call";
import {FQN_PCK} from "../internal";
import {CamelCase} from "./camel-case";

type H = Placeholder;
type P = CallParams;
type E = string;

/**
 * Data must be camel case
 *
 * Conditions
 * - string
 *
 * Relations
 */
export function IsCamelCase(opt?: ValidatorOpt): PropertyDecorator;
export function IsCamelCase(opt?: ValidatorOpt): ParameterDecorator;
export function IsCamelCase(opt?: ValidatorOptExt): ClassDecorator;
export function IsCamelCase(opt?: ValidatorOptExt): MethodDecorator;
export function IsCamelCase(opt?: ValidatorOpt | ValidatorOptExt): PropertyDecorator | ParameterDecorator | ClassDecorator | MethodDecorator {
    return (clazz: object, property?: PropertyKey, index?: number) =>
        deco.process([clazz, property, index], {opt});
}

const deco = decoratorPool.newId<ValidatorStored<P>, ValidatorMetadata<P, H, E>, ValidatorParam>(IsCamelCase)
    .fqn(FQN_PCK)
    .targets('field', 'parameter')
    .keywords(IdValidator)
    .keywords('ph:field', 'ph:deco', 'ph:data')
    .processor((ins, p) => {
        const opt = validatorPool.options(ins, p.opt);
        const params = {} as P;
        ins.set({opt, params});
    })
    .metadata({
        error: '{{field}} must be camel case',
        is: (data) => typeof data === 'string',
        validates: (data, current) => {

            if (!CamelCase.is(data)) {
                return current.failed({});
            }

            return current.ignored();
        }
    });
