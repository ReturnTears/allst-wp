# 
```
项目中使用npm之前需要初始化: npm init -y
再安装: npm i jquery -S
npm i webpack -S

使用webpack对我们编写的js做一层封装
webpack .\src\main.js .\dist\bundle.js


webpack打包报错如下:
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
解决思路:
只需要在项目中的package.json中script中配置上
"dev": "webpack --mode development",    "build": "webpack --mode production" 两句即可

启动项目
npm run dev / build / test / start

Webpack可以做什么事情?
1 - webpack可以处理JS文件的互相依赖关系
2 - webpack能够处理JS的兼容问题, 把高级的浏览器不识别的语法转换为低级的,浏览器能正常识别的语法
3 - webpack打包语句: webpack 要打包文件的路径 打包好文件存放路径
4- 针对第三点可以做优化, 在webpack.config.js文件种配置好路径, 直接输入webpack即可打包

entry: 入口
output: 出口

当我们在控制台直接输入webpack执行命令时,webpack做了以下几步:
1 - 首先, webpack发现我们并没有通过命令的形式去给他指定入口和出口
2 - webpack会去项目中的根目录中查找'webpack.config.js'的配置文件
3 - 当找到配置后,webpack会去解析执行这个配置文件,执行完成后就得到了配置文件中导出的配置对象
4 - webpack拿到配置对象后执行打包


使用webpack-dev-server这个工具来实现打包编译的功能
npm i webpack-dev-server -D
这个工具的用法和webpack一样
webpack-dev-server帮我们打包的bundle.js文件并没有放到实际的物理磁盘中,而是托管到了电脑的内存中, 所以在项目的根目录下找不到bundle.js
我们可以认为webpack-dev-server把打包好的文件, 以一种虚拟的形式,托管到了咱们项目的根目录中,虽然我们看不到它, 但是可以认为和dist src node_modules平级,有一个看不见的文件叫做bundle.js

"start": "webpack-dev-server --open --port 4567 --contentBase src --hot",   
--open 启动完成后自动打开浏览器
--port 端口号为4567
--contentBase 指定路径
--hot 热更新(只是更新了修改部分的js文件, 实现页面异步刷新)

在内存种生成HTML页面的安装命令:
cnpm i html-webpack-plugin -D
只要时插件都要导入到plugins中
当使用了html-webpack-plugin之后, 我们不再需要手动bundle.js的引用路径了, 因为这个插件会自动帮我们创建一个合适的script并引入正确的路径
这个插件的作用:
1 - 自动在内存中根据指定的页面生成一个内存的页面
2 - 自动把打包好的bundle.js追加到页面中去


如果需要打包CSS文件,需要安装cnpm i style-loader css-loader -D
打开webpack.config.js这个配置文件,在里面新增一个配置节点,叫做module,它是一个对象,在这个module对象身上,有个rules属性,这个属性是数组,存放了所以第三方文件的匹配和处理规则


注意:
webpack处理第三方文件类型的过程:
1 - 发现这个要处理的文件是不是JS文件, 是就直接处理, 不是就会去配置文件中查找有没有对应的第三方loader规则
2 - 如果能找到对应的规则, 就会调用对应的loader处理该类型的文件
3 - 在调用loader的时候,从右往左的调用顺序
4 - 当最后一个loader调用完成,会把处理的结果直接交给webpack进行打包合并处理,最终输出到bundle.js中去


安装less-loader
cnpm i less-loader -D
less-loadern内部还依赖于less:
cnpm i less -D

安装scss-loader
cnpm i sass-loader -D
sass-loader依赖于node-sass
cnpm i node-sass -D


复习webpack
1 - 拿到一个项目后首先使用包管理工具将项目管理起来
 npm init -y
如果项目路径或名称有中文字符,则不使用上述的命令
 npm init
2 - 创建两个文件夹
 src用于存放源代码
    在src下新建index.html, 这是项目的首页
    在src下新建main.js, 这是项目的JS入口文件 
 dist用于存放打包后输出的文件
    该文件夹也可以不用创建, 在打包的时候会去查找是否存在该文件夹,不存在就会自动生成
3 - 全局打包
在项目的根路径下
webpack .\src\main.js .\dist\bundle.js
4 - 全局打包的优化
全局打包会将打包后的文件输出到dist目录下, 但是每次修改后都需要重新运行打包命令,
可以使用如下命令让项目进行自动实时打包:
cnpm i webpack-dev-server -D
如果没有安装webpack,上一命令依赖webpack,
cnpm i webpack -D
5 - 创建webpack.config.js
该文件是webpack的核心配置文件
webpack是基于node进行构建的, 所以webpack的配置文件中任何合法的Node代码都是支持的
var path = require('path')
向外暴露一个对象,
当以命令行运行webpack或webpack-dev-server的时候, 工具会发现我们并没有提供要打包的文件入口和出口文件, 此时,
他会检测项目中的配置文件, 并读取这个文件,就拿到了导出的这个配置对象, 然后根据这个对象进行打包构建
module.export = {
 // 显示声明项目的入口出口文件
}
6 - 打包
新增5之后的打包命令为:
webpack

7 - 新增css文件夹
在该文件夹下新增样式文件index.css
使用该样式的两种方式:
7.1 - 在网页中显示的引入,但是使用node之后不推荐这种方式, 因为它会发起二次请求
7.2 - 在main.js文件中import导入

8 - 再次打包
会报错缺失相应的加载器, 因为webpack只能处理js相关的配置文件, 但是可以使用相应的加载器来加载
cnpm i style-loader css-loader -D

9 - webpack.config.js中添加配置节点
    module: { // 配置所有第三方loader提供的
        rules: [ // 配置第三方模块的匹配规则
            {test: xx, user: {}}
        ]
    }
10 - 运行项目
项目根路径下运行:
npm run dev / start / 
 
```














