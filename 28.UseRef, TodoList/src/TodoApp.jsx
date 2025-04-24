import React, { useRef, useState } from "react";
import styles from "./assets/styles/Todo.module.css";

function TodoApp() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    const value = inputRef.current.value.trim();
    if (!value) {
      alert("Todo boş ola bilməz!");
      return;
    }
    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex].text = value;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, { text: value, completed: false }]);
    }
    inputRef.current.value = "";
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    inputRef.current.value = todos[index].text;
  };

  const handleClearAll = () => {
    setTodos([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <input ref={inputRef} type="text" placeholder="Todo əlavə et..." />
        <button onClick={handleAddTodo}>
          {editIndex !== null ? "Yenilə" : "Əlavə et"}
        </button>
        <button className={styles.clearBtn} onClick={handleClearAll}>Hamısını Sil</button>
      </div>

      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`${styles.todoItem} ${todo.completed ? styles.completed : styles.pending}`}
          >
            <span onClick={() => toggleTodo(index)}>
              {index + 1}. {todo.text}
            </span>
            <div className={styles.actions}>
              {!todo.completed && (
                <button onClick={() => handleEdit(index)}>Edit</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
