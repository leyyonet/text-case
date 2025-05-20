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
import {AllCaps} from "./all-caps";

type H = Placeholder;
type P = CallParams;
type E = string;

/**
 * Data must be all caps
 *
 * Conditions
 * - string
 *
 * Relations
 */
export function IsAllCaps(opt?: ValidatorOpt): PropertyDecorator;
export function IsAllCaps(opt?: ValidatorOpt): ParameterDecorator;
export function IsAllCaps(opt?: ValidatorOptExt): ClassDecorator;
export function IsAllCaps(opt?: ValidatorOptExt): MethodDecorator;
export function IsAllCaps(opt?: ValidatorOpt | ValidatorOptExt): PropertyDecorator | ParameterDecorator | ClassDecorator | MethodDecorator {
    return (clazz: object, property?: PropertyKey, index?: number) =>
        deco.process([clazz, property, index], {opt});
}

const deco = decoratorPool.newId<ValidatorStored<P>, ValidatorMetadata<P, H, E>, ValidatorParam>(IsAllCaps)
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
        error: '{{field}} must be all caps',
        is: (data) => typeof data === 'string',
        validates: (data, current) => {

            if (!AllCaps.is(data)) {
                return current.failed({});
            }

            return current.ignored();
        }
    });
