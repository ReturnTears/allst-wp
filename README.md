# 
```
项目种使用npm之前需要初始化: npm init -y
再安装: npm i jquery -S

使用webpack对我们编写的js做一层封装
webpack .\src\main.js .\dist\bundle.js


webpack打包报错如下:
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
解决思路:
只需要在项目中的package.json中script中配置上
"dev": "webpack --mode development",    "build": "webpack --mode production" 两句即可



```