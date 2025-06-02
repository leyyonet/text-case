import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'node:path';

import { KebabCase } from '../src';
import { TextCaseItem } from './index.types';

const fullPath = path.normalize(process.env.PWD + '/test/samples.json');
const samples = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Array<TextCaseItem>;

describe('KebabCase', () => {
    describe('cast', () => {
        samples.forEach((wordItem) => {
            it(wordItem.word, () => {
                assert.strictEqual(KebabCase.cast(wordItem.word), wordItem.kebabCase);
            });
        });
    });

    describe('validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.kebabCase, () => {
                assert.equal(KebabCase.exact(KebabCase.cast(wordItem.word)), true);
            });
        });
    });
    describe('not-validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.pascalCase, () => {
                assert.equal(KebabCase.exact(wordItem.pascalCase), false);
            });
        });
    });
});
