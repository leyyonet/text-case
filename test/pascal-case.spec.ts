import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'node:path';

import { PascalCase } from '../src';
import { TextCaseItem } from './index.types';

const fullPath = path.normalize(process.env.PWD + '/test/samples.json');
const samples = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Array<TextCaseItem>;

describe('PascalCase', () => {
    describe('cast', () => {
        samples.forEach((wordItem) => {
            it(wordItem.word, () => {
                assert.strictEqual(PascalCase.cast(wordItem.word), wordItem.pascalCase);
            });
        });
    });

    describe('validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.pascalCase, () => {
                assert.equal(PascalCase.exact(PascalCase.cast(wordItem.word)), true);
            });
        });
    });
    describe('not-validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.kebabCase, () => {
                assert.equal(PascalCase.exact(wordItem.kebabCase), false);
            });
        });
    });
});
