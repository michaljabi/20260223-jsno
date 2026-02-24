import { eventBus } from "../event-bus.js";
import { questInMemoryDb } from "../../db/quest-in-memory-db.js";

// Event listener.
eventBus.on("POST./guests", ({ req, res }) => {
  console.log("REQ url", req.url);
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    res.end(
      JSON.stringify({
        yourBodyIs: JSON.parse(body),
      }),
    );
  });
});

eventBus.on("GET./guests", async ({ req, res }) => {
  res.statusCode = 200;
  const data = await questInMemoryDb.getAll();
  res.end(JSON.stringify(data));
});
