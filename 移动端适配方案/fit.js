/*
 * @Author: your name
 * @Date: 2021-06-30 00:04:06
 * @LastEditTime: 2021-06-30 00:27:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \6.29自适用的作业__wmn\js\fit.js
 */
reFS()
window.onresize = reFS;

function reFS() {
    var dWidth = document.documentElement.clientWidth //设备宽
    var uiWidth = 320 //ui尺寸
    console.log(dWidth);
    var FS = (dWidth / uiWidth);
    var reFS = document.documentElement.style.fontSize = FS * 10 + 'px'
    console.log(reFS);
    // console.log(hh);
}