import { app } from "./server.js";
import { env } from 'node:process'

const port = env.PORT ?? 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})