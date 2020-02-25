const serve = require("koa-static");
const path = require("path");
const Koa = require("koa");
const app = new Koa();

app.use(serve(`${__dirname}`));
app.listen(3003, () => {
  console.log(`server is running at http://localhost:3003`);
});
