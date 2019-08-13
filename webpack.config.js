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
            },
            {
                // 处理图片路径的loader,limit给定的值是图片的大小,单位是byte, 如果我们引用的图片大于等于给定值的limit值,则不会被转为base64格式的字符串,
                // 如果小于则会被转为base64的字符串, 不被转换的base64可以使用项目启动的地址路径访问:http://localhost:3000/4f1cf1440d433948298121cd03106456.jpg
                // 文件名被转为了hash值, 这样是为了保证不重名
                //test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=147,595'
                // 使用图片原有的名字
                test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=147,595&name=[name].[ext]'
                // 如果项目中有同名的文件, 为了打包时后面的文件不覆盖前面的文件,可以使用带hash的文件名进行重命名
                //test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=147,595&name=[hash:8]-[name].[ext]'
            },
            {
                test:/\.(ttf|eot|woff|woff2)$/, use: 'url-loader'
            }
        ]
    }
}