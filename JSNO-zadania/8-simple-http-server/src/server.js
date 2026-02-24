import { createServer } from "node:http";

// Singleton (JEDNA INSTANCJA SERVERA) na całą aplikacje
export const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    let data = [];
    if (req.url === "/guests" && req.method === "GET") {
      res.statusCode = 200;
      data = await questInMemoryDb.getAll();
    } else if (req.url === "/guests" && req.method === "POST") {
      console.log("MY BODY IS", req.body);
      let body = "";
      // TODO: naprawić w `express.js`
      req.on("data", (chunk) => {
        // console.warn("CHUNK", chunk.toString());
        body += chunk.toString();
      });
      res.statusCode = 200;
      data = await questInMemoryDb.getAll();
    } else {
      res.statusCode = 404;
      data = {
        error: `${res.statusCode} - nie znam ścieżki [${req.method}]${req.url}`,
      };
    }
    res.end(JSON.stringify(data));
  } catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "coś poszło nie tak" }));
  }
});

// vs
// Factory Function (za każdym wywołaniem - NOWA INSTANCJA)
/*
export function makeNewInstance() {
  return createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello World on url: ${req.url}!\n`);
  });
}
*/
