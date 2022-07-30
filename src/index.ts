// noinspection JSUnusedGlobalSymbols

export * from './abstract-case';
export * from './index-types';
export * from './index-errors';
export * from './text-case';

import {textCase} from "./text-case";

export const camelCase = textCase.camel;
export const headerCase = textCase.header;
export const kebabCase = textCase.kebab;
export const pascalCase = textCase.pascal;
export const regularCase = textCase.regular;
export const snakeCase = textCase.snake;
export const titleCase = textCase.title;
export const upperCase = textCase.upper;
