const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log('Request'); //XXX
  ctx.body = 'node-local';
});

app.listen(7014);
