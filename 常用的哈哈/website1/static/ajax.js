/*
 * AJAX请求
 * @param  {string}  url            请求的URL地址
 * @param  {function}  callback     回调函数
 * @param  {string}  type           请求方式（GET或POST）
 * @param  {string}  data           POST方式发送的数据
 */
function ajax(url, callback, type = "GET", data = "") {
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        var xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 5 ,6
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 2.声明请求地址以及请求方式
    if (type == "GET") {
        xhr.open("GET", callback, url, true)
        xhr.send();
    } else {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);

    }

    // 4.监听Ajax的状态，接收服务器响应数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // console.log(xhr.responseText);
            // 将接收到的json字符串转为json对象
            // console.log(xhr.responseText);
            var data = JSON.parse(xhr.responseText);
            //  用户结束到的状态显示在页面
            callback(data);
            // 用回调函数封装给用户
        }
    }
}