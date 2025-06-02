import { decoratorPool } from '@leyyo/core';
import { IdPipe, PipeMetadata, PipeOpt, PipeOptExt, PipeParam, pipePool, PipeStored } from '@leyyo/pipe';
import { CallParams } from '@leyyo/http-call';
import { FQN } from '../internal';
import { SnakeCase } from './snake-case';

type P = CallParams;
type E = string;

export function ToSnakeCase(opt?: PipeOpt): PropertyDecorator;
export function ToSnakeCase(opt?: PipeOpt): ParameterDecorator;
export function ToSnakeCase(opt?: PipeOptExt): ClassDecorator;
export function ToSnakeCase(opt?: PipeOptExt): MethodDecorator;
export function ToSnakeCase(
    opt?: PipeOpt | PipeOptExt,
): PropertyDecorator | ParameterDecorator | MethodDecorator | ClassDecorator {
    return (clazz: object, property?: PropertyKey, index?: number | TypedPropertyDescriptor<unknown>) =>
        deco.process([clazz, property, index], { opt });
}

const deco = decoratorPool
    .newId<PipeStored<P>, PipeMetadata<P, E>, PipeParam>(ToSnakeCase)
    .fqn(FQN)
    .targets('field', 'parameter', 'class', 'method')
    .keywords(IdPipe)
    .processor((ins, p) => {
        const opt = pipePool.options(ins, p.opt);
        const params = {} as P;
        ins.set({ opt, params });
    })
    .metadata({
        is: (data) => typeof data === 'string' && data !== '',
        transforms: (data, current) => {
            return current.changed(SnakeCase.cast(data));
        },
    });
export const ToDecamelize = ToSnakeCase;
