import express from "express";
import { questInMemoryDb } from "./guests.service.js";
// import {Router} from 'express'

export const guestsController = express.Router();

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
