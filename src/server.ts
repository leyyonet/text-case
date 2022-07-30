import {describe, it} from "@leyyo/core";
import {SampleItem} from "./index-types";
import assert from "assert";
import {textCase} from "./text-case";
import * as fs from 'fs';

const samples = JSON.parse(fs.readFileSync(__dirname + '/assets/samples.json','utf8')) as Array<SampleItem>;
describe('#camel', () => {
    samples.forEach(wordItem => {
        it(wordItem.word, () => {
            assert.strictEqual(textCase.camel.cast(wordItem.word), wordItem.camelCase);
        });
    });
});
describe('#header', () => {
    samples.forEach(wordItem => {
        it(wordItem.word, () => {
            assert.strictEqual(textCase.header.cast(wordItem.word), wordItem.headerCase);
        });
    });
});
describe('#kebab', () => {
    samples.forEach(wordItem => {
        it(wordItem.word, () => {
            assert.strictEqual(textCase.kebab.cast(wordItem.word), wordItem.kebabCase);
        });
    });
});
describe('#pascal', () => {
    samples.forEach(wordItem => {
        it(wordItem.word, () => {
            assert.strictEqual(textCase.pascal.cast(wordItem.word), wordItem.pascalCase);
        });
    });
});
describe('#regular', () => {
    samples.forEach(wordItem => {
        it(wordItem.word, () => {
            assert.strictEqual(textCase.regular.cast(wordItem.word), wordItem.regularCase);
        });
    });
});
describe('#snake', () => {
    samples.forEach(wordItem => {
        it(wordItem.word, () => {
            assert.strictEqual(textCase.snake.cast(wordItem.word), wordItem.snakeCase);
        });
    });
});
describe('#title', () => {
    samples.forEach(wordItem => {
        it(wordItem.word, () => {
            assert.strictEqual(textCase.title.cast(wordItem.word), wordItem.titleCase);
        });
    });
});
describe('#upper', () => {
    samples.forEach(wordItem => {
        it(wordItem.word, () => {
            assert.strictEqual(textCase.upper.cast(wordItem.word), wordItem.upperCase);
        });
    });
});
