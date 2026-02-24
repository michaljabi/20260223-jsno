import { createServer } from "node:http";
import { eventBus } from "./event-bus.js";

import "./guests/guests.controller.js";

export const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Event emmiter:
  eventBus.emit(`${req.method}.${req.url}`, { req, res });
});

// Do tego potrzeba bibioteki:
// Handle all other events (not handled)
// https://www.npmjs.com/package/eventemitter2
eventBus.on("*", () => {});
