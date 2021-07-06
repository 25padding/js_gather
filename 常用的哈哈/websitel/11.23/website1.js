const express = require('express');
// 使用框架创建web服务器
const app = express();
// 声明静态资源目录
app.use("/", express.static("views"));
// 声明模板文件目录（需要创建views目录，并将html文件放到该目录中）
//假设数据库中的用户信息为
var users = [{ username: 'iu', password: '123' },
    { username: '金高银', password: '456' },
    { username: '极乐宫的太子殿下', password: '789' },
]

//路由
app.get('/chkUsername', (request, response) => { //请求，响应
    // 接受get请求的数据
    var data = request.query;
    //console.log(data);

    //查询数据库，判断用户名是否存在
    // 遍历出来
    var result = { status: 'ok', msg: '用户名可以使用' };
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == data.username) {
            result = { status: 'error', msg: '用户名已被占用' };
            break;
        }
    }
    console.log(result);
    //响应结果给浏览器
    response.send(result);

});
// 程序监听3000端口
app.listen(3000);

console.log("web是你？")