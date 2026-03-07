import { assert, beforeAll, describe, it } from "vitest";
import { initTest } from "@leyyo/common";
import { samples } from "./test.helper.js";
import { isCamelCase, toCamelCase } from "../src/index.js";

beforeAll(() => initTest());

describe("CamelCase", () => {
  describe("to", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.strictEqual(toCamelCase(wordItem.word), wordItem.camelCase);
      });
    });
  });

  describe("validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.equal(isCamelCase(toCamelCase(wordItem.word)), true);
      });
    });
  });

  describe("not-validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.allCaps, () => {
        assert.equal(isCamelCase(wordItem.allCaps), false);
      });
    });
  });
});
