module.exports = {
  "*.{ts,tsx}": [
    () => "tsc --noEmit",
    "prettier --write",
    "eslint --max-warnings 0 --fix",
  ],
};
