const Koa = require("koa");
const Router = require("koa-router");
const render = require("./render.node").render;

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = render();
  next();
});

app.use(router.routes()).listen(3000);
