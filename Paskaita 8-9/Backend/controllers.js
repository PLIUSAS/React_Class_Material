import Todo from "./models/todos.js";

export async function createTodo(req, res) {
  const { name, description } = req.body;
  try {
    const newTodo = new Todo({
      name,
      description,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function getTodo(req, res) {
  const { name, description } = req.body;
  try {
    const todo = await Todo.find();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function deleteTodoById(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Todo.findByIdAndDelete(id);
    if (deleted) {
      res.json(deleted);
      alert(`Todo with id ${id} is deleted`);
    } else {
      res.status(404).json({ error: `Todo with id ${id} is not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
