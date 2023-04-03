
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    //强制使用单引号
    quotes: ["error", "single"],
    //强制不使用分号结尾
    semi: ["error", "never"],
    // 强制使用===和!==
    eqeqeq: ["error", 'always'],
    // 禁用 arguments.caller 或 arguments.callee
    "no-caller": ["error", 'always'],
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    "no-eq-null": ['error', 'always'],
    // 禁用 eval()
    "no-eval": ['error', 'always'],
    // 禁用魔术数字
    "no-magic-numbers": ['error', 'always'],
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    "no-new-wrappers": ['error', 'always'],
    // 禁止使用多个空格
    "no-multi-spaces": ['error', 'always'],
    // 禁止使用多行字符串
    "no-multi-str": ['error', 'always'],
    // 禁用不必要的 return await
    "no-return-await": ['error', 'always'],
    // 禁用逗号操作符
    "no-sequences": ['error', 'always'],
    // 禁止抛出异常字面量
    "no-throw-literal": ['error', 'always'],
    // 强制在 parseInt() 使用基数参数
    "radix": ['error', 'always'],
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    "vars-on-top": ['error', 'always'],
    // 强制在逗号前后使用一致的空格
    "comma-spacing": ["error", { "before": false, "after": true }],
    // 要求箭头函数体使用大括号
    "arrow-body-style": ['error', 'always'],
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": ['error', 'always'],
    // 禁止重复模块导入
    "no-duplicate-imports": 'error',
    // 禁止在对象中使用不必要的计算属性
    "no-useless-computed-key": 'error',
    // no-var
    "no-var": 'error',
    // 要求使用剩余参数而不是 arguments
    "prefer-rest-params": 'error'
  }
}
