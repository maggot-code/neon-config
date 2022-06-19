/*
 * @FilePath: /neon-config/eslint/eslint-config-share/index.js
 * @Author: maggot-code
 * @Date: 2022-06-18 17:34:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-19 20:25:58
 * @Description: 
 */
import { default as PossibleErrors } from "./possible-errors";
import { default as BestPractices } from "./best-practices";
import { default as Variable } from "./variable";
import { default as Browser } from "./browser";
import {default as CodeStyle} from "./code-style";
import { default as Es6 } from "./es6";

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
    globals: {
        window: 'readonly'
    },
    plugins: [],
    rules: {
        // 可能会存在的错误
        ...PossibleErrors,
        // 最佳实践
        ...BestPractices,
        // 变量相关
        ...Variable,
        // NodeJS 或者 CommonJS相关
        ...Browser,
        // 代码风格相关
        ...CodeStyle,
        // ES6相关
        ...Es6
    }
}
