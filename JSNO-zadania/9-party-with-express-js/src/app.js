import express from "express";
import { questInMemoryDb } from './db/quest-in-memory-db.js'

export const app = express();

app.get("/", (req, res) => {
  const helloOnServer = "Witaj na serwerze";
  res.send(`
    <!DOCTYPE html>
    <html lang="pl">
        <head></head>
        <body>
            <h1 style="color: red">${helloOnServer}</h1>
        </body>
    </html>
  `);
});

app.get("/guests", async (req, res) => {

  const { status } = req.query;
  if(status) {
    return res.json(await questInMemoryDb.getByStatus(status))
  } 
  res.json(await questInMemoryDb.getAll())
});

app.get("/guests/:id", async (req, res) => {
   const { id } = req.params;
   res.json(await questInMemoryDb.getById(Number(id)))
});


app.get("/test", (req, res) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
  const authorization = req.header("authorization") ?? '';
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
  const [, token = ''] = authorization.split(' ')

  res.json({
    authIs: authorization,
    tokenIs: token
  });
  //res.json([]);
});


app.get("/error", (req, res) => {
  
  throw new Error('Oh no!')
})
