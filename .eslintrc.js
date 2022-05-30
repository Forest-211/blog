module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // 允许使用行内样式
        'react-native/no-inline-styles': 0,
        // 缩进4个空格
        indent: ['error', 4, { SwitchCase: 1 }],
        // 末尾分号
        semi: 'error',
        // 不能在class以外使用this
        'class-methods-use-this': 0,
        // 注释和代码不能在同一行
        'no-inline-comments': 'error',
        // 允许使用 单引号和es6的``
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        // 不允许使用var
        'no-var': 2,
        // 禁止分号前后有空格
        'semi-spacing': 2,
        // 检查 Hooks 的使用规则
        'react-hooks/rules-of-hooks': 'error',
        // 检查依赖项的声明
        'react-hooks/exhaustive-deps': 'warn'
    }
};
