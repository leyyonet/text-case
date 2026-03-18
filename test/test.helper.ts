import * as fs from "node:fs";
import path from "node:path";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const fullPath = path.normalize(__dirname + "/samples.json");
export const samples = JSON.parse(fs.readFileSync(fullPath, "utf8")) as Array<TextCaseItem>;

export interface TextCaseItem {
  word: string;
  camelCase: string;
  pascalCase: string;

  headerCase: string;
  kebabCase: string;
  regularCase: string;
  snakeCase: string;
  sentenceCase: string;
  allCaps: string;
}
