/*
 * @FilePath: /neon-config/eslint/eslint-config-share/index.js
 * @Author: maggot-code
 * @Date: 2022-06-18 17:34:23
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-23 01:56:45
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
    globals: {
        window: 'readonly'
    },
    plugins: [],
    rules: {
        // [ 可能会存在的错 start ]
        // 关闭禁止使用 console
        'no-console': 'off',
        // 关闭禁止使用debugger
        'no-debugger': 'off',
        // 关闭禁止在嵌套块中出现变量声明或 function 声明
        'no-inner-declarations': 'off',
        // 不知道啥意思，不过ESLint推荐开启了
        'no-misleading-character-class': 'off',
        // 看不懂，先禁用了，ESLint推荐开启了
        'require-atomic-updates': 'off',
        
        // 禁止使用无限for循环
        'for-direction': ['error'],
        // new Promise 参数不能是异步函数
        'no-async-promise-executor': ['error'],
        // 不能在循环中出现await，可以使用 Promise.all()
        'no-await-in-loop': ['error'],
        // 禁止和 -0 比较
        'no-compare-neg-zero': ['error'],
        // 禁止条件表达式中出现赋值操作符( = )
        'no-cond-assign': ['error'],
        // 禁止在正则表达式中使用控制字符串
        'no-control-regex': ['error'],
        // 禁止 function 定义中出现重复参数名
        'no-dupe-args': ['error'],
        // 禁止对象字面量表达式中出现重复的Key {a:1,a:2}
        'no-dupe-keys': ['error'],
        // 禁止在 switch 选择中出现重复的 case 关键字
        'no-duplicate-case': ['error'],
        // 禁止正则表达式中使用空的字符集
        'no-empty-character-class': ['error'],
        // 禁止对 catch 子句的参数重新赋值
        'no-ex-assign': ['error'],
        // 禁止不必要的布尔类型转换
        'no-extra-boolean-cast': ['error'],
        // 禁止不必要的分号
        'no-extra-semi': ['error'],
        // 禁止对 function "声明" 重新赋值
        'no-func-assign': ['error'],
        // 禁止 RegExp 构造函数中出现无效的正则表达式字符串
        'no-invalid-regexp': ['error'],
        // 禁止出现不规则的空白
        'no-irregular-whitespace': ['error'],
        // 禁止把全局对象作为函数调用
        // var math = Math(); var json = JSON();
        'no-obj-calls': ['error'],
        // 禁止直接调用 Object.prototypes 的内置属性
        // bad: foo.hasValue("bar");
        // good: Object.prototype.hasValue(foo, "bar")
        'no-prototype-builtins': ['error'],
        // 禁止正则表达式字面量中出现多个连续空格
        'no-regex-spaces': ['error'],
        // 禁止稀疏数组 [1,,3] [,]
        'no-sparse-arrays': ['error'],
        // 禁止在常规字符串中出现 模板字面量 占位符语法
        // bad: "a ${value} c";
        // good: `a ${value} c`;
        'no-template-curly-in-string': ['error'],
        // 禁止出现奇怪的多行表达式，反正报错就是多行表达式写的很怪
        'no-unexpected-multiline': ['error'],
        // 禁止在 return、throw、continue、break 语句之后出现无法达到的代码
        'no-unreachable': ['error'],
        // 禁止在 finally 语句中出现流程控制语句
        'no-unsafe-finally': ['error'],
        // 禁止对关系运算符左值使用否定操作符(!)
        // bad：if(!a in object);
        // good: if( ! (a in object));
        'no-unsafe-negation': ['error'],
        // 必须使用 isNaN() 方法来检查 NaN
        'use-isnan': ['error'],
        
        // typeof 表达式必须与有效字符串比较，允许与另一个 typeof 表达式比较
        'valid-typeof': ['error', { requireStringLiterals: true }],
        // getter函数必须存在return关键字，允许直接return
        'getter-return': ['error', { allowImplicit: true }],
        // 禁止条件表达式中出现常量，允许在循环中使用，如：while(true)
        'no-constant-condition': ['error', { checkLoops: false }],
        // 禁止出现空语句夸块，可以写入注释，允许空的 catch 语句块
        'no-empty': ['error', { allowEmptyCatch: true }],
        // 禁止不必要的括号,只检查函数表达式
        'no-extra-parens': ['error', 'functions'],
        // [ 可能会存在的错 end ]

        // [ 最佳实践 start ]
        // 指定程序中允许的最大环路复杂度（判断或循环最多允许判定数量）
        'complexity':['off',12],
        // 不要求在类（class）中必须使用 this 关键字
        'class-methods-use-this': 'off',
        // 不要求 return 语句必须指定返回值，允许隐式 return （undefined）
        'consistent-return': 'off',
        // 不要求 switch 语句中存在 default 分支
        'default-case': 'off',
        // 不要求在 for in 语句中必须存在一个 if 语句
        'guard-for-in': 'off',
        // 不限制单个文件中 class 的最大数量
        'max-classes-per-file': 'off',
        // 没懂，先禁用了
        'no-div-regex': 'off',
        // 允许出现空函数，在可能存在的错误中已经定义了函数块中可以写注释
        'no-empty-function': 'off',
        // 禁止不需要的标签（没懂，先关闭了）
        'no-extra-label': 'off',
        // 允许对原生对象或只读全局对象进行赋值(暂时的，后面出问题在修改)
        'no-global-assign': 'off',
        // 允许使用短符号进行类型转换
        'no-implicit-coercion': 'off',
        // 允许在全局范围中声明变量和声明 function (主要为了方便调试，有其他规则限制全局声明)
        'no-implicit-globals': 'off',
        // 允许 this 关键字出现在类和对象之外的地方，例如 function
        'no-invalid-this': 'off',
        // 允许随意嵌套块（嵌套块由其他规则定义）
        'no-lone-blocks': 'off',
        // 允许循环中出现函数声明（循环函数声明由其他规则定义）
        'no-loop-func': 'off',
        // 允许使用魔术数字
        'no-magic-numbers': 'off',
        // 允许使用 new Function 来创建函数
        'no-new-func': 'off',
        // 允许对 functio 参数进行重新赋值
        // 这也许会导致副作用的产生，不过还是暂时关闭了
        'no-param-reassign': 'off',
        // 允许使用对象的某些属性
        'no-restricted-properties': 'off',
        // 允许在 return 语句中使用赋值语句
        'no-return-assign': 'off',
        // 允许 return 不必要的 await（忽略这种状态下的返回值）
        'no-return-await': 'off',
        // 允许使用 javascript:url
        'no-script-url': 'off',
        // 允许自我赋值
        'no-self-assign': 'off',
        // 允许出现未使用的表达式, 通过其他工具提示该表达式未使用
        'no-unused-expressions': 'off',
        // 允许出现未使用的标签，通过其他工具提示该标签未使用
        'no-unused-labels': 'off',
        // 允许存在没用的 catch 子句
        'no-useless-catch': 'off',
        // 允许普通字符串与模板字符串拼接
        'no-useless-concat': 'off',
        // 不检查转义字符
        'no-useless-escape': 'off',
        // 允许使用 void 操作符
        'no-void': 'off',
        // 允许在注释中使用特殊的警告语句
        'no-warning-comments': 'off',
        // 不检查正则表达式中使用命名捕获
        'prefer-named-capture-group': 'off',
        // 不要求使用 Error 对象作为 Promise 的拒绝原因
        'prefer-promise-reject-errors': 'off',
        // 允许在 parseInt() 方法中使用基数参数
        'radix': 'off',
        // 允许使用不带 await 表达式的 async 函数
        'require-await': 'off',
        // 不检查在 RegExp 中使用 u 标志
        'require-unicode-regexp': 'off',
        // 不检查 IIFE 使用括号括起来
        'wrap-iife': 'off',
        // 不检查 “Yoda” 条件
        'yoda':'off',
        
        // 使用 alert confirm prompt 方法的时候会警告不会报错
        'no-alert': ['warn'],
        // 允许使用多行字符串，不会报错，但会警告
        'no-multi-str': ['warn'],
        // 要求所有的 var 声明必须出现在该作用域的顶部
        'vars-on-top':['error'],
        // 禁止使用 new 关键字之后没有进行赋值操作
        'no-new': ['error'],
        // 禁止对 String Number Boolean 使用 new 关键字
        'no-new-wrappers': ['error'],
        // 禁止使用 with 语句
        'no-with':['error'],
        // 禁止八进制的字面量
        'no-octal': ['error'],
        // 禁止在字符串中使用八进制转义
        'no-octal-escape': ['error'],
        // 禁止使用 .call() 和 .apply()
        'no-useless-call': ['error'],
        // 禁止多余的 return 语句
        'no-useless-return':['error'],
        // 强制要求变量的使用与定义在相同的作用域中
        'block-scoped-var': ['error'],
        // 禁用 arguments.caller 或 arguments.callee，ES5已经弃用
        'no-caller': ['error'],
        // 不允许在case子句中使用词法声明（没懂，不过ESLint推荐禁用）
        'no-case-declarations': ['error'],
        // 禁止使用空解构模式
        'no-empty-pattern': ['error'],
        // 与 null 比较必须使用强类型比较（ === !== ）
        'no-eq-null': ['error'],
        // 禁止多次声明同一变量
        'no-redeclare':['error'],
        // 禁止使用 __proto__ 属性
        'no-proto':['error'],
        // 禁止使用 eval() 方法
        'no-eval': ['error'],
        // 禁止使用与 eval() 类似的方法
        'no-implied-eval':['error'],
        // 禁止扩展原生类型
        'no-extend-native': ['error'],
        // 禁止不必要的 .bind() 调用
        'no-extra-bind': ['error'],
        // 禁止 case 语句落空
        'no-fallthrough': ['error'],
        // 禁止在数字字面量之前或之后使用小数点（字符串不作限制）
        // bad: const num = .5; const num = 5.;
        // good: const num = 0.5; const num = 5.0;
        'no-floating-decimal': ['error'],
        // 禁止使用 __iterator__ 属性
        'no-iterator': ['error'],
        // 禁止自身比较
        'no-self-compare': ['error'],
        // 禁止逗号操作符
        'no-sequences': ['error'],
        // 禁止抛出异常时使用字面量, 推荐 new Error("字面量")
        'no-throw-literal': ['error'],
        // 禁止永远不变的循环条件, 这能避免死循环的出现
        'no-unmodified-loop-condition':['error'],

        // 强制要求使用数组方法的回调函数中必须出现 return 关键字
        // 允许直接 return (隐式返回 undenfind)
        'array-callback-return': ['error', { allowImplicit: true }],
        // 禁止使用多个空格，允许忽略行尾或注释之前的空格
        'no-multi-spaces':['error',{ignoreEOLComments:false}],
        // 禁止 if 语句中 return 之后出现 eslint 块(可能有歧义，后面再改)
        'no-else-return': ['error', { allowElseIf: false }],
        // 禁止使用 label 语句
        'no-labels':['error',{allowLoop:false,allowSwitch:false}],
        // 强制要求 setter 和 getter 成对出现
        // 只定义 setter 会警告
        // 只定义 getter 会警告
        'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: true }],
        /**
         * 尽可能使用点号(.)
         * 允许：
         * const user = {"name":"zz", "age":14};
         * const userAge = user["age"];
         */
        'dot-notation':['error',{allowKeywords:false}],
        /**
         * 强制点符号(.)之前和之后使用一致的换行，允许一下换行规则
         * bad:
         * const zz = user.
         *            name
         * good:
         * const zz = user
         *            .name
         */
        'dot-location':['error','property'],
        // 强制控制语句中必须使用风格一致的括号，允许关键字与表达式同行时不使用括号
        'curly': ['error', 'multi-line'],
        // 除了(比较字面量的值、typeof 的值、和 null) 之外必须使用 === 或 !==
        'eqeqeq':['error','smart'],
        // [ 最佳实践 end ]

        // [ 变量相关 start ]
        // [ 变量相关 end ]
        
        // [ NodeJS 或者 CommonJS相关 start ]
        // [ NodeJS 或者 CommonJS相关 end ]

        // [ ES6相关 start ]
        // [ ES6相关 end ]

        // [ 代码风格相关 start ]
        // [ 代码风格相关 end ]
    }
}
