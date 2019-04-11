// require
const path = require('path');
// 导出对象
module.exports = {
    // 设置环境变量development或者production 影响你这个文件(min)的引入
    mode:"development",
    // 定义入口 建议使用相对路径 这份文件将会引入被webpack后续给打包
    entry: './input/index.js',
    // 定义出口文件
    output: {
        // 输出的文件夹路径
        path: path.resolve(__dirname, 'output'),
        // 定义输出的文件名
        filename: 'bundle.js'
    }
};