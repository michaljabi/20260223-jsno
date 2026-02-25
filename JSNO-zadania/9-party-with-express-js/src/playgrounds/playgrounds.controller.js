import { Router } from "express";
import HttpError from "../http-errors/HttpError.js";
import { authorizationMiddleware } from "../auth/authorization.middeware.js";

export const playgroundsController = Router();

playgroundsController.get("/", [authorizationMiddleware], (req, res) => {
  const helloOnServer = "Witaj na serwerze";
  res.send(`
    <!DOCTYPE html>
    <html lang="pl">
        <head></head>
        <body>
            <h1 style="color: red">${helloOnServer}</h1>
            <pre>${JSON.stringify(req.user)}</pre>
        </body>
    </html>
  `);
});

playgroundsController.get("/test", (req, res) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
  const authorization = req.header("authorization") ?? "";
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
  const [, token = ""] = authorization.split(" ");

  res.json({
    authIs: authorization,
    tokenIs: token,
  });
  //res.json([]);
});

playgroundsController.get("/error", (req, res) => {
  throw new HttpError("Oh no!");
});
