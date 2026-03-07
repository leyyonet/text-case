import { assert, beforeAll, describe, it } from "vitest";
import { initTest } from "@leyyo/common";
import { samples } from "./test.helper.js";
import { isPascalCase, toPascalCase } from "../src/index.js";

beforeAll(() => initTest());

describe("PascalCase", () => {
  describe("to", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.strictEqual(toPascalCase(wordItem.word), wordItem.pascalCase);
      });
    });
  });

  describe("validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.word, () => {
        assert.equal(isPascalCase(toPascalCase(wordItem.word)), true);
      });
    });
  });

  describe("not-validated", () => {
    samples.forEach((wordItem) => {
      it(wordItem.camelCase, () => {
        assert.equal(isPascalCase(wordItem.camelCase), false);
      });
    });
  });
});
