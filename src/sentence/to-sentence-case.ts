import { decoratorPool } from '@leyyo/core';
import { IdPipe, PipeMetadata, PipeOpt, PipeOptExt, PipeParam, pipePool, PipeStored } from '@leyyo/pipe';
import { CallParams } from '@leyyo/http-call';
import { FQN } from '../internal';
import { SentenceCase } from './sentence-case';

type P = CallParams;
type E = string;

export function ToSentenceCase(opt?: PipeOpt): PropertyDecorator;
export function ToSentenceCase(opt?: PipeOpt): ParameterDecorator;
export function ToSentenceCase(opt?: PipeOptExt): ClassDecorator;
export function ToSentenceCase(opt?: PipeOptExt): MethodDecorator;
export function ToSentenceCase(
    opt?: PipeOpt | PipeOptExt,
): PropertyDecorator | ParameterDecorator | MethodDecorator | ClassDecorator {
    return (clazz: object, property?: PropertyKey, index?: number | TypedPropertyDescriptor<unknown>) =>
        deco.process([clazz, property, index], { opt });
}

const deco = decoratorPool
    .newId<PipeStored<P>, PipeMetadata<P, E>, PipeParam>(ToSentenceCase)
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
            return current.changed(SentenceCase.cast(data));
        },
    });
