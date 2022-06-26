/*
 * @FilePath: /neon-config/eslint/test/index.jsx
 * @Author: maggot-code
 * @Date: 2022-06-25 19:00:35
 * @LastEditors: maggot-code
 * @LastEditTime: 2022-06-27 00:51:20
 * @Description:
 */
const label = 'Label';

function handlerClick() {
    console.log(label);
}

export default () => {
    return (
        <div
            className="neon-label"
            id="neon-label"
            onClick={handlerClick}
        >
            {label}
        </div>
    );
};
