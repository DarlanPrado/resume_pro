// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// used config from NuxtUI https://github.com/nuxt/ui/blob/dev/.eslintrc.cjs

export default withNuxt(
  {
    rules: {
      // General
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'space-before-blocks': ['error', 'always'],
      'space-infix-ops': ['error', { int32Hint: false }],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'no-trailing-spaces': ['error'],

      '@typescript-eslint/type-annotation-spacing': 'error',

      // Vuejs
      'vue/multi-word-component-names': 0,
      'vue/html-indent': ['error', 2],
      'vue/comma-spacing': ['error', { before: false, after: true }],
      'vue/script-indent': ['error', 2, { baseIndent: 0 }],
      'vue/keyword-spacing': ['error', { before: true, after: true }],
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      'vue/arrow-spacing': ['error', { before: true, after: true }],
      'vue/array-bracket-spacing': ['error', 'never'],
      'vue/block-spacing': ['error', 'always'],
      'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
      'vue/space-infix-ops': ['error', { int32Hint: false }],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 5
          }
        }
      ]
    }
  }
)