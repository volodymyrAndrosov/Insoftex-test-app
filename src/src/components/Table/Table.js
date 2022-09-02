import { useSortBy, useTable, useGlobalFilter, usePagination, useRowSelect } from "react-table";
import React, { useEffect } from "react";
import GlobalFilter from "../GlobalFilter/GlobalFilter";
import DefaultButton from "../DefaultButton/DefaultButton";
import CheckBox from "../CheckBox/CheckBox";
import { useDispatch } from "react-redux";
import { getRows } from "../../state/actions/rows";
import { useNavigate } from "react-router-dom";

const Table = props => {
  const { data, columns } = props;

  if (!data?.length && !columns?.length) return <div>No data for table </div>;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    selectedFlatRows,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination, useRowSelect, hooks => {
    hooks.visibleColumns.push(columns => {
      return [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => <CheckBox {...getToggleAllRowsSelectedProps()} />,
          Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ];
    });
  });
  const { globalFilter } = state;
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(getRows(selectedFlatRows));
  }, [selectedFlatRows]);

  const onSelectedRowsPageClick = () => {
    history("/selected-rows"); //routes can be moved to CONST file, yes i know:)
  };

  return (
    <div
      style={{
        display: "flex",
        width: "auto",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center ",
      }}>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}>
                  {column.render("Header")}
                  <span>{column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(pageItem => {
            prepareRow(pageItem);
            return (
              <tr {...pageItem.getRowProps()}>
                {pageItem.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <pre>
          <code>
            {JSON.stringify(
              {
                selectedFlatRows: selectedFlatRows.map(row => row.original),
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
      <div>
        <DefaultButton onClick={() => previousPage()} text={"PrevPage"} />
        <DefaultButton onClick={() => nextPage()} text={"NextPage"} />
      </div>
      <br />
      <DefaultButton onClick={onSelectedRowsPageClick} text={"Go to Selected Rows Page"} />
    </div>
  );
};

export default Table;
