import "boxicons";
import "../css/todoitems.css";

export default function TodoItems({ item, todos, setTodos }) {
  // Function to toggle the "done" state
  const toggleDone = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className={`todoitemlist ${item.done ? "completed" : ""}`}>
      <div onClick={toggleDone} style={{ flex: 1, cursor: "pointer" }}>
        {item.name}
      </div>
      <button
        onClick={() => {
          setTodos(todos.filter((todo) => todo.id !== item.id)); // Filter by unique id
        }}
      >
        <box-icon name="trash" type="solid" color="#ffffff"></box-icon>
      </button>
    </div>
  );
}
