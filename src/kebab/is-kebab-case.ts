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
import {CallParams} from "@leyyo/http-call";
import {FQN_PCK} from "../internal";
import {KebabCase} from "./kebab-case";

type H = Placeholder;
type P = CallParams;
type E = string;

/**
 * Data must be kebab case
 *
 * Conditions
 * - string
 *
 * Relations
 */
export function IsKebabCase(opt?: ValidatorOpt): PropertyDecorator;
export function IsKebabCase(opt?: ValidatorOpt): ParameterDecorator;
export function IsKebabCase(opt?: ValidatorOptExt): ClassDecorator;
export function IsKebabCase(opt?: ValidatorOptExt): MethodDecorator;
export function IsKebabCase(opt?: ValidatorOpt | ValidatorOptExt): PropertyDecorator | ParameterDecorator | ClassDecorator | MethodDecorator {
    return (clazz: object, property?: PropertyKey, index?: number) =>
        deco.process([clazz, property, index], {opt});
}

const deco = decoratorPool.newId<ValidatorStored<P>, ValidatorMetadata<P, H, E>, ValidatorParam>(IsKebabCase)
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
        error: '{{field}} must be kebab case',
        is: (data) => typeof data === 'string',
        validates: (data, current) => {

            if (!KebabCase.is(data)) {
                return current.failed({});
            }

            return current.ignored();
        }
    });
