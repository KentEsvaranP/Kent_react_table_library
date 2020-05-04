import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";

export default function Table({ columns, data, search, sort}) {
  const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useSortBy
  );

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("show.name", value);
    setFilterInput(value);
  };
  if (typeof search === "string")
    search = (search == "true") ? true : false;
  if (typeof sort === "string") {
    sort = (sort == "true") ? true : false;
  }
  // Render the UI for your table
  return (
    <>
      {search && <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search 'Name'"}
      />
      }
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                if(!sort)
                column.disableSortBy = true;
                return (< th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    (column.isSorted)
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : (index === 1) ? "sort-indicate" : ""
                  }
                >
                  {column.render("Header")}
                </th>);
          })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
