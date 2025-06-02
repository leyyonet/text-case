import { Loader } from '@leyyo/injection';
import { Fqn } from '@leyyo/core';
import { FQN } from './internal';
import { AllCaps, IsAllCaps, ToAllCaps } from './all-caps';
import { CamelCase, IsCamelCase, ToCamelCase } from './camel';
import { HeaderCase, IsHeaderCase, ToHeaderCase } from './header';
import { IsKebabCase, KebabCase, ToKebabCase } from './kebab';
import { IsPascalCase, PascalCase, ToPascalCase } from './pascal';
import { IsRegularCase, RegularCase, ToRegularCase } from './regular';
import { IsSnakeCase, SnakeCase, ToSnakeCase } from './snake';
import { IsSentenceCase, SentenceCase, ToSentenceCase } from './sentence';
import { IsTextCase, textCase, ToTextCase } from './base';
import { CaseTypeItems } from './literals';

@Loader(
    textCase,
    CaseTypeItems,
    IsTextCase,
    ToTextCase,
    AllCaps,
    IsAllCaps,
    ToAllCaps,
    CamelCase,
    IsCamelCase,
    ToCamelCase,
    HeaderCase,
    IsHeaderCase,
    ToHeaderCase,
    KebabCase,
    IsKebabCase,
    ToKebabCase,
    PascalCase,
    IsPascalCase,
    ToPascalCase,
    RegularCase,
    IsRegularCase,
    ToRegularCase,
    SnakeCase,
    IsSnakeCase,
    ToSnakeCase,
    SentenceCase,
    IsSentenceCase,
    ToSentenceCase,
)
@Fqn(FQN)
export class TextCaseLoader {}
