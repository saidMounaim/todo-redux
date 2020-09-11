import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../redux/TodoActions";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ title: "", completed: false });

  const onChangeTodo = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (todo.title == "") {
      return;
    }
    dispatch(addTodoAction(todo));
    setTodo({ title: "", completed: false });
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmitTodo}>
        <input
          type="text"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
          value={todo.title}
          onChange={onChangeTodo}
        />
        <button
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
          type="submit"
        >
          Add
        </button>
      </form>
    </React.Fragment>
  );
};

export default TodoAdd;
