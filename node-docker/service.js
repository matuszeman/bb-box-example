const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log('Request'); //XXX
  ctx.body = 'node-docker';
});

app.listen(7013);
