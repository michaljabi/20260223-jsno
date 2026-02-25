import { app } from "./app.js";
import { env } from "node:process";

const port = env.PORT ?? 3000;
const logLevel = env.LOG_LEVEL ?? 'trace';

app.listen(port, () => {
  console.log(`Example app listening on port ${port} with env ${env.NODE_ENV} with logLevel ${logLevel}`);
});
