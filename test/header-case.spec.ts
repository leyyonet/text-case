import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'node:path';

import { HeaderCase } from '../src';
import { TextCaseItem } from './index.types';

const fullPath = path.normalize(process.env.PWD + '/test/samples.json');
console.log(fullPath);
const samples = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Array<TextCaseItem>;

describe('HeaderCase', () => {
    describe('cast', () => {
        samples.forEach((wordItem) => {
            it(wordItem.word, () => {
                assert.strictEqual(HeaderCase.cast(wordItem.word), wordItem.headerCase);
            });
        });
    });

    describe('validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.headerCase, () => {
                assert.equal(HeaderCase.exact(HeaderCase.cast(wordItem.word)), true);
            });
        });
    });
    describe('not-validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.kebabCase, () => {
                assert.equal(HeaderCase.exact(wordItem.kebabCase), false);
            });
        });
    });
});
