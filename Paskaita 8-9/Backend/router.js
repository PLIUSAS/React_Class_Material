import express from "express";
import {
  createTodo,
  deleteTodoById,
  getTodo,
  updateTodoById,
} from "./controllers.js";

const router = express.Router();

router.post("/todos", createTodo);

router.get("/todos", getTodo);

router.delete("/todos/:id", deleteTodoById);

router.put("/todos/:id", updateTodoById);

export default router;
