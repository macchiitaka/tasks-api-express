module.exports = {
  env: {
    node: true,
    'jest/globals': true,
  },
  extends: [
    '@takamachi/eslint-config/presets/node-typescript-prettier',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
}
