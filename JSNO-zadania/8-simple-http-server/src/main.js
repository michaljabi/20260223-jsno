import { env } from "node:process";
import { server } from "./server-event-driven.js";


// starts a simple http server locally on port 3000
server.listen(Number(env.PORT), () => {
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  console.log(`Listening on ${env.PORT}`);
});
