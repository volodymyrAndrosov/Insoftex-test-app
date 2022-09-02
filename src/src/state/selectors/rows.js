import { createSelector } from "reselect";

const selectGlobal = state => state;

const makeSelectSelectedRows = () => createSelector(selectGlobal, state => state.selectedRows);

export { makeSelectSelectedRows };
