import { assert, beforeAll, describe, it } from "vitest";
import { initTest } from "@leyyo/common";
import { samples } from "./test.helper.js";
import { isSentenceCase, toSentenceCase } from "../src/index.js";

beforeAll(() => initTest());

describe("SentenceCase", () => {
  describe("to", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.strictEqual(toSentenceCase(wordItem.word), wordItem.sentenceCase);
      });
    });
  });

  describe("validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.equal(isSentenceCase(toSentenceCase(wordItem.word)), true);
      });
    });
  });

  describe("not-validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.camelCase, () => {
        assert.equal(isSentenceCase(wordItem.camelCase), false);
      });
    });
  });
});
