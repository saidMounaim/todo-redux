import * as actions from "./TodoActionsTypes";

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_TODOS:
      return {
        ...state,
      };
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case actions.TODO_COMPLETED:
      const newValue = action.payload.completed;
      const originalTodos = [...state.todos];
      const filtredTodos = originalTodos.map((todo) =>
        todo == action.payload ? { ...todo, completed: !newValue } : todo
      );
      return {
        ...state,
        todos: filtredTodos,
      };
    case actions.DELETE_TODO:
      const originalTodos1 = [...state.todos];
      const filtredTodos1 = originalTodos1.filter((t) => t !== action.payload);
      return {
        ...state,
        todos: filtredTodos1,
      };
    default:
      return state;
  }
};
