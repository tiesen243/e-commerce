/** @type {import('eslint').Linter.Config} */
const config = {
  extends: 'next/core-web-vitals',
  plugins: ['@next/next', 'prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
  },
}

module.exports = config
