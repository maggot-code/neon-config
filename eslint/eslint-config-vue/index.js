/*
 * @FilePath: /neon-config/eslint/eslint-config-vue/index.js
 * @Author: maggot-code
 * @Date: 2022-06-18 17:50:31
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-27 23:55:49
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
        },
    ],
    extends: ['plugin:vue/vue3-recommended'],
    rules: {
        // 不能使用箭头函数定义 options API watch
        'vue/no-arrow-functions-in-watch': ['error'],

        // 不限制组件命名格式
        'vue/multi-word-component-names': 'off',
    },
};
