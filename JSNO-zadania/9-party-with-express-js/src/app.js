import express from "express";
import HttpError from "./http-errors/HttpError.js";
import { guestsController } from "./guests/guests.controller.js";
import { playgroundsController } from "./playgrounds/playgrounds.controller.js";
import { env } from "node:process";
import { timeStamp } from "node:console";

export const app = express();

app.use(playgroundsController);
app.use("/guests", guestsController);

// ścieżki nie odnalezione `404`
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

// Global catch-all error
app.use((err, req, res, next) => {
  const timeOfError = new Intl.DateTimeFormat({ timeStyle: "full" }).format(
    err.timestamp ?? new Date(),
  );

  console.error(timeOfError, err.stack);
  res.status(err?.status ?? 500).json({
    error: err?.constructor?.name,
    message: err?.message ?? "Unknown Error",
    method: req.method,
    url: req.url,
    timeStamp: err?.timestamp,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    ...(env.NODE_ENV === "development" ? { stack: err.stack.split("\n") } : {}),
  });
});
