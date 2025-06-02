import { strict as assert } from 'assert';
import fs from 'fs';
import path from 'node:path';

import { AllCaps } from '../src';
import { TextCaseItem } from './index.types';

const fullPath = path.normalize(process.env.PWD + '/test/samples.json');
const samples = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Array<TextCaseItem>;

describe('AllCaps', () => {
    describe('cast', () => {
        samples.forEach((wordItem) => {
            it(wordItem.word, () => {
                assert.strictEqual(AllCaps.cast(wordItem.word), wordItem.allCaps);
            });
        });
    });

    describe('validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.allCaps, () => {
                assert.equal(AllCaps.exact(AllCaps.cast(wordItem.word)), true);
            });
        });
    });

    describe('not-validated', () => {
        samples.forEach((wordItem) => {
            it(wordItem.camelCase, () => {
                assert.equal(AllCaps.exact(wordItem.camelCase), false);
            });
        });
    });
});
