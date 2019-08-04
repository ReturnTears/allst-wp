const path = require('path')
const webpack = require('webpack')          // 启用热更新的第二步
const htmlWebpackPlugin = require('html-webpack-plugin')
// 通过Node种的模块操作,向外曝露了一个配置对象
module.exports = {
    entry:path.join(__dirname, './src/main.js'),
    output:{
        path:path.join(__dirname, './dist'),
        filename:'bundle.js'
    },
    mode: 'development',
    devServer: { // 这是dev-server命令的第二种形式
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true,      // 启用热更新的第一步
    },
    plugins: [ // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(),    // 启用热更新的第三步

        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "indexJun.html"  // 指定生成页面的名称
        })
    ],
    module: {   // 用于所有的第三方加载器和匹配规则
        rules: [
            {
                // 正则匹配, 匹配到文件用什么处理器来处理, loader的调用规则是从右到左
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                // 正则匹配less
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 正则匹配sass
                test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}