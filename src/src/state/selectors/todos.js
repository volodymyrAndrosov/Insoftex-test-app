import { createSelector } from "reselect";

const selectGlobal = state => state;

const makeSelectTodos = () => createSelector(selectGlobal, state => state.todos);

export { makeSelectTodos };
