import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'node:path';

import { RegularCase } from '../src';
import { TextCaseItem } from './index.types';

const fullPath = path.normalize(process.env.PWD + '/test/samples.json');
console.log(fullPath);
const samples = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Array<TextCaseItem>;

describe('RegularCase', () => {
    describe('cast', () => {
        samples.forEach((wordItem) => {
            it(wordItem.word, () => {
                assert.strictEqual(RegularCase.cast(wordItem.word), wordItem.regularCase);
            });
        });
    });

    describe('validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.regularCase, () => {
                assert.equal(RegularCase.exact(RegularCase.cast(wordItem.word)), true);
            });
        });
    });

    describe('not-validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.headerCase, () => {
                assert.equal(RegularCase.exact(wordItem.headerCase), false);
            });
        });
    });
});
