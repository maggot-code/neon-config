/*
 * @FilePath: /neon-config/eslint/eslint-config-typescript/index.js
 * @Author: maggot-code
 * @Date: 2022-06-27 20:38:54
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-27 23:42:04
 * @Description:
 */
module.exprots = {
    extends: [
        '@antfu/eslint-config-basic',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        '@typescript-eslint/member-delimiter-style': [
            'error',
            { multiline: { delimiter: 'none' } },
        ],
        '@typescript-eslint/type-annotation-spacing': ['error', {}],
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                disallowTypeAnnotations: false,
            },
        ],
        '@typescript-eslint/consistent-type-definitions': [
            'error',
            'interface',
        ],

        'no-useless-constructor': 'off',
        indent: 'off',
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: { arguments: 1 },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoreComments: false,
                ignoredNodes: [
                    'TemplateLiteral *',
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                    'TSTypeParameterInstantiation',
                ],
                offsetTernaryExpressions: true,
            },
        ],

        // off
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/parameter-properties': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
    },
};
