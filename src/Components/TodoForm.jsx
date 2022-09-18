import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo"
          placeholder="Add todo"
          name="text"
          value={input}
          onChange={handleChange}
          ref={focus}
        />
        <button className="addBtn">Add</button>
      </form>
    </>
  );
};

export default TodoForm;
