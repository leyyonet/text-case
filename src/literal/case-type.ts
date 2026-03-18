// noinspection JSUnusedGlobalSymbols

/**
 * Case Type Items
 * */
export const CaseTypeItems = [
  /*
   * Ada Case (Foo_Bar)
   * - underscored, capitalised
   * */
  "ada-case",

  /*
   * Camel Case (fooBar)
   * - first lowercase then all capitalised
   * */
  "camel-case",

  /*
   * Cobol Case (FOO-BAR)
   * - hyphenated, uppercase
   * */
  "cobol-case",

  /*
   * Const Case (FOO_BAR)
   * - underscored, uppercase
   * */
  "const-case",

  /*
   * Header Case (Foo Bar)
   * - spaced, all capitalised
   * */
  "header-case",

  /*
   * Kebab Case (foo-bar)
   * - hyphenated, lowercase
   * */
  "kebab-case",

  /*
   * Pascal Case (FooBar)
   * - all capitalised
   * */
  "pascal-case",

  /*
   * Regular Case (foo bar)
   * - spaced, lowercase
   * */
  "regular-case",

  /*
   * Sentence Case (Foo bar)
   * - spaced, first capitalised
   * */
  "sentence-case",

  /*
   * Snake Case (foo_bar)
   * - underscored, lowercase
   * */
  "snake-case",

  /*
   * Train Case (Foo-Bar)
   * - hyphenated, capitalised
   * */
  "train-case",
] as const;
/**
 * Case Types
 * */
export type CaseType = (typeof CaseTypeItems)[number];
