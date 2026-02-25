import { app } from "./app.js";
import { env } from 'node:process'
import HttpError from "./http-errors/HttpError.js";

const port = env.PORT ?? 3000;

app.use((req, res, next) => {
  // res.status(404).json({
  //   message: "Path not found!",
  //   url: req.url,
  //   method: req.method,
  // });
  // const myError = new Error('Path not found!')
  // myError.status = 404;
  // throw myError
  // throw new HttpError('Path not found!', 404);
  throw HttpError.make404PathNotFound();
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err?.status ?? 500).json({
    error: err?.constructor?.name,
    message: err?.message ?? 'Unknown Error',
    method: req.method,
    url: req.url
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})