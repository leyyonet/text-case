import { decoratorPool } from '@leyyo/core';
import {
    IdValidator,
    Placeholder,
    ValidatorMetadata,
    ValidatorOpt,
    ValidatorOptExt,
    ValidatorParam,
    validatorPool,
    ValidatorStored,
} from '@leyyo/validator';
import { CallParams } from '@leyyo/http-call';
import { FQN } from '../internal';
import { HeaderCase } from './header-case';

type H = Placeholder;
type P = CallParams;
type E = string;

/**
 * Data must be header case
 *
 * Conditions
 * - string
 *
 * Relations
 */
export function IsHeaderCase(opt?: ValidatorOpt): PropertyDecorator;
export function IsHeaderCase(opt?: ValidatorOpt): ParameterDecorator;
export function IsHeaderCase(opt?: ValidatorOptExt): ClassDecorator;
export function IsHeaderCase(opt?: ValidatorOptExt): MethodDecorator;
export function IsHeaderCase(
    opt?: ValidatorOpt | ValidatorOptExt,
): PropertyDecorator | ParameterDecorator | ClassDecorator | MethodDecorator {
    return (clazz: object, property?: PropertyKey, index?: number) => deco.process([clazz, property, index], { opt });
}

const deco = decoratorPool
    .newId<ValidatorStored<P>, ValidatorMetadata<P, H, E>, ValidatorParam>(IsHeaderCase)
    .fqn(FQN)
    .targets('field', 'parameter')
    .keywords(IdValidator)
    .keywords('ph:field', 'ph:deco', 'ph:data')
    .processor((ins, p) => {
        const opt = validatorPool.options(ins, p.opt);
        const params = {} as P;
        ins.set({ opt, params });
    })
    .metadata({
        error: '{{field}} must be header case',
        is: (data) => typeof data === 'string',
        validates: (data, current) => {
            if (!HeaderCase.exact(data)) {
                return current.failed({});
            }

            return current.ignored();
        },
    });
export const IsLabelCase = IsHeaderCase;
export const IsTitleCase = IsHeaderCase;
