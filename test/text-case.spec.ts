import { strict as assert } from 'assert';

import { textCase } from '../src';

describe('TextCase', () => {
    describe('which', () => {
        it(`'basic' are ['camel-case', 'kebab-case', 'regular-case', 'snake-case']`, () => {
            assert.deepEqual(textCase.which('basic'), ['camel-case', 'kebab-case', 'regular-case', 'snake-case']);
        });

        it(`'Basic' are ['header-case', 'pascal-case', 'sentence-case']`, () => {
            assert.deepEqual(textCase.which('Basic'), ['header-case', 'pascal-case', 'sentence-case']);
        });

        it(`'BASIC' is ['all-caps']`, () => {
            assert.deepEqual(textCase.which('BASIC'), ['all-caps']);
        });
    });

    describe('is', () => {
        it(`'basic' in ['camel-case', 'kebab-case', 'regular-case', 'snake-case']`, () => {
            assert.equal(textCase.is(['camel-case', 'kebab-case', 'regular-case', 'snake-case'], 'basic'), true);
        });

        it(`'basic' not in ['pascal-case', 'header-case', 'sentence-case', 'all-caps']`, () => {
            assert.equal(textCase.is(['pascal-case', 'header-case', 'sentence-case', 'all-caps'], 'basic'), false);
        });

        it(`'Basic' in ['header-case', 'pascal-case', 'sentence-case']`, () => {
            assert.equal(textCase.is(['header-case', 'pascal-case', 'sentence-case'], 'Basic'), true);
        });

        it(`'Basic' not in ['regular-case', 'kebab-case', 'snake-case']`, () => {
            assert.equal(textCase.is(['regular-case', 'kebab-case', 'snake-case'], 'Basic'), false);
        });

        it(`'BASIC' in ['all-caps']`, () => {
            assert.equal(textCase.is(['all-caps'], 'BASIC'), true);
        });

        it(`'BASIC' not in ['camel-case']`, () => {
            assert.equal(textCase.is(['camel-case'], 'BASIC'), false);
        });
    });
});
