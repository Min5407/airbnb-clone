module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
