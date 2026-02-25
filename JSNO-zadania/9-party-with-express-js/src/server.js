import express from "express";

export const app = express();

app.get("/guests", (req, res) => {
  res.send("Hello World?!");
});
