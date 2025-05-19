import {Loader} from "@leyyo/core";
import {Fqn} from "@leyyo/core";
import {FQN_PCK} from "./internal";
import {AllCaps, IsAllCaps, ToAllCaps} from "./all-caps";
import {CamelCase, IsCamelCase, ToCamelCase} from "./camel";
import {HeaderCase, IsHeaderCase, ToHeaderCase} from "./header";
import {IsKebabCase, KebabCase, ToKebabCase} from "./kebab";
import {IsPascalCase, PascalCase, ToPascalCase} from "./pascal";
import {IsRegularCase, RegularCase, ToRegularCase} from "./regular";
import {IsSnakeCase, SnakeCase, ToSnakeCase} from "./snake";
import {IsTitleCase, TitleCase, ToTitleCase} from "./title";
import {IsTextCase, textCase, ToTextCase} from "./base";
import {CaseTypeItems} from "./literals";

@Loader(
    textCase, CaseTypeItems, IsTextCase, ToTextCase,
    AllCaps, IsAllCaps, ToAllCaps,
    CamelCase, IsCamelCase, ToCamelCase,
    HeaderCase, IsHeaderCase, ToHeaderCase,
    KebabCase, IsKebabCase, ToKebabCase,
    PascalCase, IsPascalCase, ToPascalCase,
    RegularCase, IsRegularCase, ToRegularCase,
    SnakeCase, IsSnakeCase, ToSnakeCase,
    TitleCase, IsTitleCase, ToTitleCase)
@Fqn(FQN_PCK)
export class TextCaseLoader {}
