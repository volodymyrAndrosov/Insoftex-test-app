const columns = [
  {
    Header: "UserID",
    accessor: "id", // accessor is the "key" in the data
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Completed",
    accessor: rowItem => rowItem.completed.toString(),
  },
];

export { columns };
