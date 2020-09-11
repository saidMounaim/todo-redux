import * as actions from "./TodoActionsTypes";

export const fetchTodoAction = () => {
  return {
    type: actions.ADD_TODO,
  };
};

export const addTodoAction = (todo) => {
  return {
    type: actions.ADD_TODO,
    payload: todo,
  };
};

export const todoCompletedAction = (completed) => {
  return {
    type: actions.TODO_COMPLETED,
    payload: completed,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: actions.DELETE_TODO,
    payload: todo,
  };
};
