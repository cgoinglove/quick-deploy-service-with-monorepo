module.exports = {
  extends: ['@repo/eslint-config/node.js'],
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
