const fs = require('fs');
const Koa = require('koa');

let router = require('./routers/index')

let app = new Koa()


app.name = 'flow';
app.env = 'development';
app.proxy = true;
app.listen(3000);

app.on('error', function (err, ctx) {
    console.log('err:');
    console.log(err);
    console.log(ctx);
});

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())