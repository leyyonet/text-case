import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'node:path';

import { SnakeCase } from '../src';
import { TextCaseItem } from './index.types';

const fullPath = path.normalize(process.env.PWD + '/test/samples.json');
console.log(fullPath);
const samples = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Array<TextCaseItem>;

describe('SnakeCase', () => {
    describe('cast', () => {
        samples.forEach((wordItem) => {
            it(wordItem.word, () => {
                assert.strictEqual(SnakeCase.cast(wordItem.word), wordItem.snakeCase);
            });
        });
    });

    describe('validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.snakeCase, () => {
                assert.equal(SnakeCase.exact(SnakeCase.cast(wordItem.word)), true);
            });
        });
    });
    describe('not-validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.headerCase, () => {
                assert.equal(SnakeCase.exact(wordItem.headerCase), false);
            });
        });
    });
});
