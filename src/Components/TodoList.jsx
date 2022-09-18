import React, { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import Todo from "./Todo.jsx";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
  };

  const updatedTodos = (todoId, newTodo) => {
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newTodo : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div>
        <h1 className="title">What are your plans today?</h1>
      </div>
      <TodoForm onSubmit={addToDo} />
      <div className="todo-container">
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updatedTodos={updatedTodos}
        />
      </div>
    </>
  );
};

export default TodoList;
