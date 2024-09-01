import { useState } from "react";
import "../css/todo.css";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todo, setTodo] = useState({ id: Date.now(), name: "", done: false });
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.name.trim()) {
      // Add a new todo with a unique id
      setTodos([...todos, { ...todo, id: Date.now() }]);
      setTodo({ id: Date.now(), name: "", done: false }); // Reset input field
    }
  };

  return (
    <div className="top">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          onChange={(event) => setTodo({ ...todo, name: event.target.value })}
          placeholder="Add Todo"
          value={todo.name}
          type="text"
        />
        <button type="submit">
          <box-icon
            type="regular"
            name="add-to-queue"
            size="md"
            color="#ffffff"
          ></box-icon>
        </button>
      </form>
      {todos.map((item) => (
        <TodoItems
          key={item.id}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
