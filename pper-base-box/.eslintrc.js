module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['standard', 'plugin:vue/essential'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    indent: [0, 2],
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-expressions': 'off',
    eqeqeq: 'off',
    'no-array-constructor': 'off',
    'no-throw-literal': 'off',
    'no-duplicate-imports': 'off',
    'import/no-duplicates': 'off',
    camelcase: 'off',
    'no-dupe-keys': 'off',
    'no-useless-escape': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/no-dupe-keys': 'off',
    'space-before-function-paren': 'off'
  }
}
