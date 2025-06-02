import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'node:path';

import { CamelCase } from '../src';
import { TextCaseItem } from './index.types';

const fullPath = path.normalize(process.env.PWD + '/test/samples.json');
console.log(fullPath);
const samples = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Array<TextCaseItem>;

describe('CamelCase', () => {
    describe('cast', () => {
        samples.forEach((wordItem) => {
            it(wordItem.word, () => {
                assert.strictEqual(CamelCase.cast(wordItem.word), wordItem.camelCase);
            });
        });
    });

    describe('validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.camelCase, () => {
                assert.equal(CamelCase.exact(CamelCase.cast(wordItem.word)), true);
            });
        });
    });
    describe('not-validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.headerCase, () => {
                assert.equal(CamelCase.exact(wordItem.headerCase), false);
            });
        });
    });
});
