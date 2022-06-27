/*
 * @FilePath: \neon-config\eslint\test\index.jsx
 * @Author: zhangyang
 * @Date: 2022-06-27 10:49:47
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-06-27 14:17:03
 * @Description:
 */
const title = 'Hello Eslint';

function sayTitle() {
    console.log(title);
}

export default () => {
    return (
        <>
            <h1
                className="neon-eslint"
                id="neon-eslist"
                onClick={sayTitle}
            >
                {title}
            </h1>
        </>
    );
};
