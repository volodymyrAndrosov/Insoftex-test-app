import axios from "axios";
import { setTodos, setIsFetching } from "../reducers/todosReducer";

export const getTodos = () => {
  return async dispatch => {
    dispatch(setIsFetching(true));
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch(setTodos(response.data));
    dispatch(setIsFetching(false));
  };
};
