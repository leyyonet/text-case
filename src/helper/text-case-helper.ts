import { Fqn } from '@leyyo/core';

import { TextCaseHelperLike } from './index.types';
import { FQN } from '../internal';

@Fqn(FQN)
export class TextCaseHelper implements TextCaseHelperLike {
    firstUpperAt(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    firstUpperAll(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    lowerUpperAt(value: string): string {
        return value.charAt(0).toLowerCase() + value.slice(1);
    }
    lowerUpperAll(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
}
export const textCaseHelper: TextCaseHelperLike = new TextCaseHelper();
