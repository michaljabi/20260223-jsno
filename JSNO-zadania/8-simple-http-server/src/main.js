import { env } from "node:process";

console.log(env.PORT);
console.log(typeof Number(env.PORT));
