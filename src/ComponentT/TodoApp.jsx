import React, { useState } from "react";
import { useTodoStore } from "../Store/TodoStore";
import "../My-Style/style.css"


function To() {

  const { todos, addTodo, toggleTodo, updateTodo, removeTodo } = useTodoStore();
  const [inputText, setInputText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Handle Create
  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    addTodo(inputText);
    setInputText("");
  };

  // Set up Update Mode
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Save the Updated Text
  const handleUpdate = (id) => {
    if (!editText.trim()) return;
    updateTodo(id, editText);
    setEditingId(null);
  };

  return (
    <div className="todo-container">
      {/* FORM FOR CREATING TODOS */}

      <form onSubmit={handleAdd} className="input1">
        <input
          className="input-group"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit" className="add">
          Add
        </button>
      </form>

      {/* RENDER / READ TODOS */}
      <ul className="todo-item">
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              // Inline Update UI
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ flexGrow: 1, padding: "4px" }}
                />
                <button onClick={() => handleUpdate(todo.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              // Standard View (Read / Toggle / Delete UI)
              <div className="parent">
                <div className="first">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.text}</span>
                </div>
                <div className="last">
                  <button className="edit" onClick={() => startEditing(todo)}>edit</button>
                  <button
                    className="delete"
                    onClick={() => removeTodo(todo.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>No tasks yet. Add one above!</p>}
    </div>
  );
}

export default To;
