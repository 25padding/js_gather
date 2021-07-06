// 引入Express框架
// 常量
const express = require('express');
// 使用框架创建web服务器
const app = express();
// 声明模板文件目录（需要创建views目录，并将html文件放到该目录中）
app.use("/", express.static("views"));

//静态声明模板资源目录（需要创建static目录，并将）
app.use("/public", express.static("public"))

const bodyParser = require('body-parser');

// 配置body-parser模块
app.use(bodyParser.urlencoded({ extended: false }));
// 接收请求


//假设数据库中的用户信息为
var userData = [
    { username: 'iu', password: '123' },
    { username: '李恩惠', password: '123' },
    { username: '金高银', password: '123' },
];
// 路由
app.post("/test", function(request, response) {

    console.log(request.query.callback)
    console.log("有跨越请求发生")
        // var result = { msg: "跨越请求成功" }
        // 响应结果给浏览器 

    response.send(result);
})

// 程序监听8000端口
app.listen(3000);
// 一定记住端口号要一致否则找不到
console.log("web服务正在运行...")