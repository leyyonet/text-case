import { assert, beforeAll, describe, it } from "vitest";
import { initTest } from "@leyyo/common";
import { samples } from "./test.helper.js";
import { isSnakeCase, toSnakeCase } from "../src/index.js";

beforeAll(() => initTest());

describe("SnakeCase", () => {
  describe("to", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.strictEqual(toSnakeCase(wordItem.word), wordItem.allCaps);
      });
    });
  });

  describe("validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.equal(isSnakeCase(toSnakeCase(wordItem.word)), true);
      });
    });
  });

  describe("not-validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.camelCase, () => {
        assert.equal(isSnakeCase(wordItem.camelCase), false);
      });
    });
  });
});
