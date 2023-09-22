/**
 * @type {import('prettier').Options}
 */
exports.sharedConfig = {
  arrowParens: "avoid",
  bracketSpacing: true,
  jsxSingleQuote: false,
  printWidth: 120,
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  // Used by `@trivago/prettier-plugin-sort-imports` prettier plugin
  importOrder: ["^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
