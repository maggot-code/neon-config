/*
 * @FilePath: /neon-config/eslint/share.js
 * @Author: maggot-code
 * @Date: 2022-06-12 05:22:50
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-12 23:55:15
 * @Description: 
 */
module.exports = {
    parserOptions: {
        ecmaVersion: 2022,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    env: {
        es2021: true,
        node: true
    },
    plugins: [],
    globals: {
        window: 'readonly'
    },
    // [<type>, <state>]
    // off = ['error', 'never']
    rules: {
        'for-direction': ['error'],
        'no-async-promise-executor': ['error'],
        'no-await-in-loop': ['error'],
        'no-compare-neg-zero': ['error'],
        'no-cond-assign': ['error'],
        'no-control-regex': ['error'],
        'no-dupe-args': ['error'],
        'no-dupe-keys': ['error'],
        'no-duplicate-case': ['error'],
        'no-empty-character-class': ['error'],
        'no-ex-assign': ['error'],
        'no-extra-boolean-cast': ['error'],
        'no-extra-semi': ['error'],
        'no-func-assign': ['error'],
        'no-invalid-regexp': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-misleading-character-class': ['error'],
        'no-obj-calls': ['error'],
        'no-prototype-builtins': ['error'],
        'no-regex-spaces': ['error'],
        'no-sparse-arrays': ['error'],
        'no-template-curly-in-string': ['error'],
        'no-unexpected-multiline': ['error'],
        'no-unreachable': ['error'],
        'no-unsafe-finally': ['error'],
        'no-unsafe-negation': ['error'],
        'use-isnan': ['error'],
        'no-extra-parens': ['error', 'functions'],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'getter-return': ['error', { allowImplicit: true }],
        'no-constant-condition': ['error', { checkLoops: false }],
        'valid-typeof': ['error', { requireStringLiterals: true }],

        'no-console': 'off',
        'no-debugger': 'off',
        'no-inner-declarations': 'off',
        'require-atomic-updates': 'off',

        // < 最佳实践 >
        'complexity': ['off', 11],
        'no-alert': ['warn'],
        'no-multi-str': ['warn'],
        'no-caller': ['error'],
        'no-eq-null': ['error'],
        'no-octal': ['error'],
        'no-octal-escape': ['error'],
        'no-self-compare': ['error'],
        'no-new': ['error'],
        'no-new-wrappers': ['error'],
        'no-eval': ['error'],
        'no-implied-eval': ['error'],
        'no-sequences': ['error'],
        'no-throw-literal': ['error'],
        'no-unmodified-loop-condition': ['error'],
        // [ 禁止扩展原生类型 ]
        'no-extend-native': ['error'],
        'no-extra-bind': ['error'],
        'no-iterator': ['error'],
        'no-case-declarations': ['error'],
        'block-scoped-var': ['error'],
        'no-empty-pattern': ['error'],
        'no-fallthrough': ['error'],
        'no-proto': ['error'],
        'no-redeclare': ['error'],
        'no-useless-return': ['error'],
        'no-useless-call': ['error'],
        'no-void': ['error'],
        'no-with': ['error'],
        'vars-on-top': ['error'],
        'no-floating-decimal': ['error'],
        'dot-location': ['error', 'property'],
        'curly': ['error', 'multi-line'],
        'eqeqeq': ['error', 'smart'],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-else-return': ['error', { allowElseIf: false }],
        'dot-notation': ['error', { allowKeywords: true }],
        'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: true }],
        'array-callback-return': ['error', { allowImplicit: true }],
        'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
        // [ 禁止使用对原生对象或只读的全局对象进行赋值 ]
        'no-global-assign': ['error', { exceptions: [] }],

        'class-methods-use-this': 'off',
        'consistent-return': 'off',
        'default-case': 'off',
        'guard-for-in': 'off',
        'max-classes-per-file': 'off',
        'no-empty-function': 'off',
        'no-extra-label': 'off',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'off',
        'no-invalid-this': 'off',
        'no-lone-blocks': 'off',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-new-func': 'off',
        'no-param-reassign': 'off',
        'no-restricted-properties': 'off',
        'no-return-assign': 'off',
        'no-return-await': 'off',
        'no-script-url': 'off',
        'no-self-assign': 'off',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'off',
        'no-useless-catch': 'off',
        'no-useless-concat': 'off',
        'no-useless-escape': 'off',
        'no-warning-comments': 'off',
        'prefer-named-capture-group': 'off',
        'prefer-promise-reject-errors': 'off',
        'radix': 'off',
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        'wrap-iife': 'off',
        'yoda': 'off',

        // < 变量声明相关 >
        // [ 禁止出现未使用过的变量 ]
        'no-shadow-restricted-names': ['error'],
        'no-undef-init': ['error'],
        'no-undefined': ['error'],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],

        'init-declarations': 'off',
        'no-delete-var': 'off',
        'no-label-var': 'off',
        'no-restricted-globals': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',

        // < NodeJS 或者 CommonJS 相关 >
        'no-buffer-constructor': 'off',
        'no-path-concat': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'off',
        'no-restricted-modules': 'off',
        'no-sync': 'off',

        // < 代码风格相关 >
        'eol-last': ['error'],
        'new-parens': ['error'],
        'no-new-object': ['error'],
        'no-whitespace-before-property': ['error'],
        'no-array-constructor': ['error'],
        'block-spacing': ['error', 'always'],
        'comma-style': ['error', 'last'],
        'comma-spacing': ['error', { before: false, after: true }],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
        'quote-props': ['error', 'consistent-as-needed'],
        // [ 禁止空格和tab的混合缩进使用 ]
        'no-mixed-spaces-and-tabs': ['error'],
        // [ 强制在大括号中使用一致的空格 ]
        'object-curly-spacing': ['error', 'always'],
        // [ 强制操作符使用一致的换行符 ]
        'operator-linebreak': ['error', 'before'],
        // [ 强制大括号内换行符的一致性 ]
        'object-curly-newline': ['error', { multiline: true, consistent: true }],
        // [ 不允许多个空行 ]
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
        // [ 强制分号之前和之后使用一致的空格 ]
        'semi-spacing': ['error', { before: false, after: true }],
        // [ 强制使用一致的缩进 ]
        'indent': ['error', 4, { SwitchCase: 1 }],
        // [ 强制一行最大长度 ]
        'max-len': ['error', { code: 120, tabWidth: 4, ignoreComments: true, ignoreTrailingComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],

        'array-bracket-newline': 'off',
        'array-bracket-spacing': 'off',
        'array-element-newline': 'off',
        'brace-style': 'off',
        'camelcase': 'off',
        'capitalized-comments': 'off',
        'comma-dangle': 'off',
        'computed-property-spacing': 'off',
        'consistent-this': 'off',
        'func-call-spacing': 'off',
        'func-name-matching': 'off',
        'func-names': 'off',
        'func-style': 'off',
        'function-paren-newline': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': 'off',
        'jsx-quotes': 'off',
        'line-comment-position': 'off',
        'linebreak-style': 'off',
        'lines-around-comment': 'off',
        'lines-between-class-members': 'off',
        'max-depth': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'multiline-comment-style': 'off',
        'multiline-ternary': 'off',
        'newline-per-chained-call': 'off',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'off',
        'no-mixed-operators': 'off',
        'no-multi-assign': 'off',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-tabs': 'off',
        'no-ternary': 'off',
        'no-trailing-spaces': 'off',
        'no-underscore-dangle': 'off',
        'nonblock-statement-body-position': 'off',
        'object-property-newline': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': 'off',
        'operator-assignment': 'off',
        'padded-blocks': 'off',
        'padding-line-between-statements': 'off',
        'prefer-object-spread': 'off',
        'quotes': 'off',
        'semi': 'off',
        'semi-style': 'off',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': 'off',
        'space-in-parens': 'off',
        'space-infix-ops': 'off',
        'space-unary-ops': 'off',
        'spaced-comment': 'off',
        'switch-colon-spacing': 'off',
        'template-tag-spacing': 'off',
        'unicode-bom': 'off',
        'wrap-regex': 'off',

        // < ES6(ES205)规范 相关 >
        'no-var': ['error'],
        'constructor-super': ['error'],
        'no-class-assign': ['error'],
        'no-const-assign': ['error'],
        'no-this-before-super': ['error'],
        'no-new-symbol': ['error'],
        'no-useless-rename': ['error'],
        'no-dupe-class-members': ['error'],
        'arrow-parens': ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread': ['error'],
        'prefer-template': ['error'],
        'symbol-description': ['error'],
        'arrow-spacing': ['error', { before: true, after: true }],
        'no-duplicate-imports': ['error', { includeExports: true }], 
        'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],

        'arrow-body-style': 'off',
        'generator-star-spacing': 'off',
        'no-confusing-arrow': 'off',
        'no-restricted-imports': 'off',
        'no-useless-constructor': 'off',
        'no-useless-computed-key': 'off',
        'object-shorthand': 'off',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'off',
        'require-yield': 'off',
        'rest-spread-spacing': 'off',
        'template-curly-spacing': 'off',
        'yield-star-spacing': 'off',
    }
}