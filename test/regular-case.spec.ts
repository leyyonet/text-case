import { assert, beforeAll, describe, it } from "vitest";
import { initTest } from "@leyyo/common";
import { samples } from "./test.helper.js";
import { isRegularCase, toRegularCase } from "../src/index.js";

beforeAll(() => initTest());

describe.skip("RegularCase", () => {
  describe("to", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.strictEqual(toRegularCase(wordItem.word), wordItem.regularCase);
      });
    });
  });

  describe("validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.equal(isRegularCase(toRegularCase(wordItem.word)), true);
      });
    });
  });

  describe("not-validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.camelCase, () => {
        assert.equal(isRegularCase(wordItem.camelCase), false);
      });
    });
  });
});
