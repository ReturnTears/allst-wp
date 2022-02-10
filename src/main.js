// 这是main.js 是我们项目的JS入口文件
// import *** from ***是ES6种导入模板的方式

import Vue from 'vue'
// 1.导入jQuery
import $ from 'jquery'
// 2.导入css, webpack默认只能打包JS文件, 不能打包非JS类型的文件
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 如果要通过路径的形式去引入node_module中相关的文件,可以直接省略路径前面的node_modules这一层目录,直接写包的名称+文件路径
import 'bootstrap/dist/css/bootstrap.css'

$(function () {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', function () {
       return '#' + 'D97634'
    });
});
// class关键字时ES6中提供的新语法,用来实现面向对象编程方式
class Person {
    // 使用static关键字可以定义静态属性, 只能通过类名来访问
    // 实例属性可以通过实例来访问
    static info = {name: 'JUNN', age: 18}
}
// var p1 = new Person();

// var vm = new Vue({
//    el: '#app',
//    data: {
//        msg: 'webpack'
//    }
// });