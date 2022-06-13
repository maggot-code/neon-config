/*
 * @FilePath: /neon-config/eslint/index.js
 * @Author: maggot-code
 * @Date: 2022-06-12 03:52:45
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-14 00:35:26
 * @Description: eslint config package
 */
module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        './share.js',
        './vue.js',
        'plugin:jsonc/recommended-with-jsonc',
    ],
    // reportUnusedDisableDirectives: true,
    ignorePatterns: [
        '*.min.*',
        'CHANGELOG.md',
        'dist',
        'LICENSE*',
        'output',
        'coverage',
        'public',
        'temp',
        'packages-lock.json',
        'pnpm-lock.yaml',
        'yarn.lock',
        '__snapshots__',
        '!.github',
        '!.vitepress',
        '!.vscode',
    ],
    overrides: [
        {
            files: ['*.json', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/quotes': ['error', 'double'],
                'jsonc/quote-props': ['error', 'always'],
                'jsonc/comma-dangle': ['error', 'never'],
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
            rules: {
                'no-unused-expressions': 'off',
            },
        },
    ]
};
