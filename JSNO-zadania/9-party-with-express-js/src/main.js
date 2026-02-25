import { app } from "./app.js";
import { env } from 'node:process'

const port = env.PORT ?? 3000;

app.use((req, res, next) => {
  res.status(404).json({
    message: "Path not found!",
    url: req.url,
    method: req.method,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})