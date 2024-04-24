const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    'eslint-config-turbo',
    './base.js',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  overrides: [
    {
      files: ['*.entity.ts', '*.repository.ts'], // TypeORM 엔티티와 리포지터리 파일들을 위한 특별한 설정
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
      },
    },
  ],
};
