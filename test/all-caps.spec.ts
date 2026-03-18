import { assert, beforeAll, describe, it } from "vitest";
import { initTest } from "@leyyo/common";
import { samples } from "./test.helper.js";
import { isConstCase, toConstCase } from "../src/index.js";

beforeAll(() => initTest());

describe.skip("AllCaps", () => {
  describe("to", () => {
    samples.forEach((wordItem) => {
      it(`to('${wordItem.word}')`, () => {
        assert.strictEqual(toConstCase(wordItem.word), wordItem.allCaps);
      });
    });
  });

  describe("validated", () => {
    samples.forEach((wordItem) => {
      it(`is(to('${wordItem.word}'))`, () => {
        assert.equal(isConstCase(toConstCase(wordItem.word)), true);
      });
    });
  });

  describe("is", () => {
    samples.forEach((wordItem) => {
      it(`is('${wordItem.allCaps}')`, () => {
        assert.equal(isConstCase(wordItem.allCaps), false);
      });
    });
  });
});
