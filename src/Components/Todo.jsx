import React, { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Reorder } from 'framer-motion';

const Todo = ({ todos, completeTodo, removeTodo, updatedTodos, setAddTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updatedTodos(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Reorder.Group
      axis="y"
      values={todo}
      onReorder={setAddTodo}
    >
      <Reorder.Item
        whileInView={{scale: [0, 1.1, .8, 1]}}
        whileHover={{ scale: 1.1}}
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        value={todo}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </Reorder.Item>
    </Reorder.Group>
  ));
};

export default Todo;
