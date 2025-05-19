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
import {PascalCase} from "./pascal-case";

type H = Placeholder;
type P = CallParams;
type E = string;

/**
 * Data must be pascal case
 *
 * Conditions
 * - string
 *
 * Relations
 */
export function IsPascalCase(opt?: ValidatorOpt): PropertyDecorator;
export function IsPascalCase(opt?: ValidatorOpt): ParameterDecorator;
export function IsPascalCase(opt?: ValidatorOptExt): ClassDecorator;
export function IsPascalCase(opt?: ValidatorOptExt): MethodDecorator;
export function IsPascalCase(opt?: ValidatorOpt | ValidatorOptExt): PropertyDecorator | ParameterDecorator | ClassDecorator | MethodDecorator {
    return (clazz: object, property?: PropertyKey, index?: number) =>
        deco.process([clazz, property, index], {opt});
}

const deco = decoratorPool.newId<ValidatorStored<P>, ValidatorMetadata<P, H, E>, ValidatorParam>(IsPascalCase)
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
        error: '{{field}} must be pascal case',
        is: (data) => typeof data === 'string',
        validates: (data, current) => {

            if (!PascalCase.is(data)) {
                return current.failed({});
            }

            return current.ignored();
        }
    });
