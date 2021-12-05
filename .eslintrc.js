module.exports = {
  env: {
    node: true,
    'jest/globals': true,
  },
  extends: ['@takamachi/eslint-config/presets/node-typescript-prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest/recommended'],
      settings: {
        jest: {
          version: 27,
        },
      },
    },
  ],
}
