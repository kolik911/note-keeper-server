import express from "express";
import mongoose from "mongoose";

import * as db from "../utils/DBUtils";

db.setUpConnection();

const router = express.Router();

router.get("/", (req, res) => {
  db.listNotes().then(data => res.json(data));
});

router.post("/", (req, res) => {
  db.createNote(req.body).then(data => res.json(data));
});

router.put("/:id", db.upDate);

// router.post("/:id", db.editCheckBox);

router.delete("/:id", db.deleteNote);

export default router;
