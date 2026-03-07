import { assert, beforeAll, describe, it } from "vitest";
import { initTest } from "@leyyo/common";
import { samples } from "./test.helper.js";
import { isHeaderCase, toHeaderCase } from "../src/index.js";

beforeAll(() => initTest());

describe("HeaderCase", () => {
  describe("to", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.strictEqual(toHeaderCase(wordItem.word), wordItem.headerCase);
      });
    });
  });

  describe("validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.equal(isHeaderCase(toHeaderCase(wordItem.word)), true);
      });
    });
  });

  describe("not-validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.camelCase, () => {
        assert.equal(isHeaderCase(wordItem.camelCase), false);
      });
    });
  });
});
