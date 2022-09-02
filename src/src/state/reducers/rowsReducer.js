const SET_ROWS = "SET_ROWS";
const SET_ROW = "SET_ROW";

const defaultState = {
  selectedRows: [],
};

export const rowsReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ROWS: {
      return {
        ...state,
        selectedRows: payload,
      };
    }
    case SET_ROW: {
      const { userId } = payload;
      const { selectedRows } = state;
      const selectedRowsNew = [...selectedRows];

      if (selectedRows.some(el => el.userId === userId)) return state;

      selectedRowsNew.push(payload);

      return { ...state, selectedRows: selectedRowsNew };
    }
    default:
      return state;
  }
};

export const setRows = rows => {
  return {
    type: SET_ROWS,
    payload: rows,
  };
};

export const setRow = row => {
  return {
    type: SET_ROW,
    payload: row,
  };
};
