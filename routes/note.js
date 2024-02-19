import express from "express";
import { createNote } from "../controllers/note.js";
import { getNotes } from "../controllers/note.js";
import { getNote } from "../controllers/note.js";
import { updateNote } from "../controllers/note.js";
import { deleteNote } from "../controllers/note.js";
import { login } from "../controllers/auth.js";
import { register } from "../controllers/auth.js";

const router = express.Router();

router.post("/", createNote);
router.get("/", getNotes);
router.get("/:id", getNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.post("/login", login);
router.post("/register", register);

export default router;
