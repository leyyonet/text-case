import {decoratorPool} from "@leyyo/core";
import {IdPipe, PipeMetadata, PipeOpt, PipeOptExt, PipeParam, pipePool, PipeStored} from "@leyyo/pipe";
import {CallParams} from "@leyyo/http-call";
import {FQN_PCK} from "../internal";
import {RegularCase} from "./regular-case";

type P = CallParams;
type E = string;

export function ToRegularCase(opt?: PipeOpt): PropertyDecorator;
export function ToRegularCase(opt?: PipeOpt): ParameterDecorator;
export function ToRegularCase(opt?: PipeOptExt): ClassDecorator;
export function ToRegularCase(opt?: PipeOptExt): MethodDecorator;
export function ToRegularCase(opt?: PipeOpt | PipeOptExt): PropertyDecorator | ParameterDecorator | MethodDecorator | ClassDecorator {
    return (clazz: object, property?: PropertyKey, index?: number | TypedPropertyDescriptor<any>) =>
        deco.process([clazz, property, index], {opt});
}


const deco = decoratorPool.newId<PipeStored<P>, PipeMetadata<P, E>, PipeParam>(ToRegularCase)
    .fqn(FQN_PCK)
    .targets('field', 'parameter', 'class', 'method')
    .keywords(IdPipe)
    .processor((ins, p) => {
        const opt = pipePool.options(ins, p.opt);
        const params = {} as P;
        ins.set({opt, params});
    })
    .metadata({
        is: data => typeof data === 'string' && data !== '',
        transforms: (data, current) => {
            return current.changed(RegularCase.cast(data));
        }
    });
