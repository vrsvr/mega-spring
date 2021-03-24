module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/valid-template-root': 'off',
    'no-undef': 'off',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'] }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 50,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
};
