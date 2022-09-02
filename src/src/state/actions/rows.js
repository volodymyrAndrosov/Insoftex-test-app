import axios from "axios";
import { setRows } from "../reducers/rowsReducer";

export const getRows = rows => {
  return async dispatch => {
    dispatch(setRows(rows));
  };
};
