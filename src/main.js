// 这是main.js 是我们项目的JS入口文件
// import *** from ***是ES6种导入模板的方式


// 1.导入jQuery
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'lightblue');
    $('li:even').css('backgroundColor', function () {
       return '#' + 'D97634'
    });
});