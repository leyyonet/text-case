import {decoratorPool} from "@leyyo/core";
import {IdPipe, PipeMetadata, PipeOpt, PipeOptExt, PipeParam, pipePool, PipeStored} from "@leyyo/pipe";
import {CallParams, CallValue, CallValuePro} from "@leyyo/call";
import {FQN_PCK} from "../internal";
import {CaseType} from "../literals";
import {textCase} from "./text-case";

interface P extends CallParams {
    type?: CallValuePro<CaseType>;
}
type E = string;

export function ToTextCase(type: CallValue<CaseType>, opt?: PipeOpt): PropertyDecorator;
export function ToTextCase(type: CallValue<CaseType>, opt?: PipeOpt): ParameterDecorator;
export function ToTextCase(type: CallValue<CaseType>, opt?: PipeOptExt): ClassDecorator;
export function ToTextCase(type: CallValue<CaseType>, opt?: PipeOptExt): MethodDecorator;
export function ToTextCase(params: CallValue<CaseType>, opt?: PipeOpt | PipeOptExt): PropertyDecorator | ParameterDecorator | MethodDecorator | ClassDecorator {
    return (clazz: object, property?: PropertyKey, index?: number | TypedPropertyDescriptor<any>) =>
        deco.process([clazz, property, index], {params, opt});
}


const deco = decoratorPool.newId<PipeStored<P>, PipeMetadata<P, E>, PipeParam>(ToTextCase)
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
            return current.changed(textCase.cast(current.config.type, data));
        }
    });
