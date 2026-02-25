import express from "express";
import { questInMemoryDb } from "./guests.service.js";
import { randomUUID } from "node:crypto"
// import {Router} from 'express'

export const guestsController = express.Router();

guestsController.post("", async (req, res) => {
  // https://expressjs.com/en/5x/api.html#req.body
  const { name, lastName } = req.body;
  const guest = { name, lastName, id: 3, uuid: randomUUID() }
  // docelowo:
  //  questInMemoryDb.addOne(name, lastname);
  res.status(201).json(guest);
});

guestsController.get("", async (req, res) => {
  const { status } = req.query;
  if (status) {
    return res.json(await questInMemoryDb.getByStatus(status));
  }
  res.json(await questInMemoryDb.getAll());
});

guestsController.get("/:uuid", async (req, res) => {
  const { uuid } = req.params;
  res.json(await questInMemoryDb.getByUuid(uuid));
});


