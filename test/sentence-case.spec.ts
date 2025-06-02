import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'node:path';

import { SentenceCase } from '../src';
import { TextCaseItem } from './index.types';

const fullPath = path.normalize(process.env.PWD + '/test/samples.json');
console.log(fullPath);
const samples = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Array<TextCaseItem>;

describe('SentenceCase', () => {
    describe('cast', () => {
        samples.forEach((wordItem) => {
            it(wordItem.word, () => {
                assert.strictEqual(SentenceCase.cast(wordItem.word), wordItem.sentenceCase);
            });
        });
    });

    describe('validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.sentenceCase, () => {
                assert.equal(SentenceCase.exact(SentenceCase.cast(wordItem.word)), true);
            });
        });
    });

    describe('not-validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.kebabCase, () => {
                assert.equal(SentenceCase.exact(wordItem.kebabCase), false);
            });
        });
    });
});
