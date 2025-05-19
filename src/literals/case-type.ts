// noinspection JSUnusedGlobalSymbols

/**
 * Case Type Items
 * */
export const CaseTypeItems = [
    /*
    * All Caps
    * @sample: FOO_BAR
    * */
    'all-caps',

    /*
    * Camel Case
    * @sample: fooBar
    * */
    'camel-case',

    /*
    * Header Case
    * @sample: Foo Bar
    * */
    'header-case',

    /*
    * Kebab Case
    * @sample: foo-bar
    * */
    'kebab-case',

    /*
    * Pascal Case
    * @sample: PascalCase
    * */
    'pascal-case',

    /*
    * Regular Case
    * @sample: foo bar
    * */
    'regular-case',

    /*
    * Snake Case
    * @sample: foo_bar
    * */
    'snake-case',

    /*
    * Title Case
    * @sample: Foo bar
    * */
    'title-case',

] as const;
/**
 * Case Types
 * */
export type CaseType = typeof CaseTypeItems[number];
