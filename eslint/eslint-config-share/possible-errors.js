/*
 * @FilePath: /neon-config/eslint/eslint-config-share/possible-errors.js
 * @Author: maggot-code
 * @Date: 2022-06-19 20:19:17
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-19 23:07:10
 * @Description: 可能存在的错误规则
 */
export default {
    'for-direction': ['error'], // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'getter-return': ['error', { allowImplicit: false }], // 强制 getter 函数中出现 return 语句
}
