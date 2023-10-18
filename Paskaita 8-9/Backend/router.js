import express from "express";
import { createTodo, deleteTodoById, getTodo } from "./controllers.js";

const router = express.Router();

router.post("/todos", createTodo);
router.get("/todos", getTodo);
router.delete("/todos/:id", deleteTodoById);

export default router;
