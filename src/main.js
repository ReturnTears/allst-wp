// 这是main.js 是我们项目的JS入口文件
// import *** from ***是ES6种导入模板的方式


// 1.导入jQuery
import $ from 'jquery'
// 2.导入css, webpack默认只能打包JS文件, 不能打包非JS类型的文件
import './css/index.css'
import './css/index.less'
import './css/index.scss'

$(function () {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', function () {
       return '#' + 'D97634'
    });
});