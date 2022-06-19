/*
 * @FilePath: /neon-config/eslint/typescript.js
 * @Author: maggot-code
 * @Date: 2022-06-14 01:03:49
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-14 01:11:03
 * @Description: 
 */
module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        './share.js',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    }
}
