import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoCompletedAction, deleteTodo } from "../redux/TodoActions";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deletetodo = (todo) => {
    if (window.confirm("are u sure?")) {
      dispatch(deleteTodo(todo));
    }
  };

  return (
    <React.Fragment>
      {todos.map((todo, index) => (
        <li
          key={index}
          className={todo.completed ? `completed` : false}
          onClick={() => dispatch(todoCompletedAction(todo))}
        >
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="checkbox"
                type="checkbox"
                checked={todo.completed ? `checked` : false}
              />
              {todo.title}
              <i className="input-helper"></i>
            </label>
          </div>
          <i
            onClick={() => deletetodo(todo)}
            className="remove mdi mdi-close-circle-outline"
          ></i>
        </li>
      ))}
    </React.Fragment>
  );
};

export default TodoList;
