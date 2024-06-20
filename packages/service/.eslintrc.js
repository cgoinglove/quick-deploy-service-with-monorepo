module.exports = {
  extends: ["@repo/eslint-config/node.js"],
  overrides: [
    {
      files: ["*.entity.ts", "*.repository.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" },
        ],
      },
    },
  ],
};
