import React from "react";

const GlobalFilter = props => {
  const { filter, setFilter } = props;

  return (
    <span>
      <span>Search:</span>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
    </span>
  );
};

export default GlobalFilter;
