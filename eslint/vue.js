/*
 * @FilePath: /neon-config/eslint/vue.js
 * @Author: maggot-code
 * @Date: 2022-06-12 23:36:00
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-12 23:51:12
 * @Description: 
 */
module.exports = {
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
            },
        }
    ],
    extends: [
        'plugin:vue/vue3-recommended'
    ],
    rules: {
        'vue/no-setup-props-destructure': ['error'],

        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',

        // [ 控制vue文件中tag的位置和顺序 ]
        'vue/component-tags-order': 'off',
    }
}
