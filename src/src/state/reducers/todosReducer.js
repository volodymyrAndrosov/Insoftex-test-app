const SET_TODOS = "SET_TODOS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const defaultState = {
  todos: [],
  isFetching: true,
};

export const todosReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TODOS: {
      return {
        ...state,
        todos: payload,
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: payload,
      };
    }
    default:
      return state;
  }
};

export const setTodos = todos => {
  return {
    type: SET_TODOS,
    payload: todos,
  };
};

export const setIsFetching = isFetching => {
  return {
    type: SET_IS_FETCHING,
    payload: isFetching,
  };
};
