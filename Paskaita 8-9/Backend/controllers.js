import Todo from "./models/todos.js";

export async function createTodo(req, res) {
  const { name, description } = req.body;
  if (!name || !description) {
    // patikrinimas jeigu neivieno nepaduoda meta error
    return res.status(400).json({ error: "Name and description are required" });
  }
  try {
    const newTodo = await Todo.create({
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
  try {
    const todo = await Todo.find({}, { __v: 0 });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function deleteTodoById(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Todo.findByIdAndDelete(id);
    if (deleted) {
      res.status(200).json({ message: `Todo with ID: ${id} is deleted` });
    } else {
      res.status(404).json({ error: `Todo not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export async function updateTodoById(req, res) {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    todo.isFinished = !todo.isFinished;
    await todo.save();
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
