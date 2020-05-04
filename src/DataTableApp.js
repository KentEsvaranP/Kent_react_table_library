import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import "./DataTableApp.css";
import sampleData from './mock_data.json';

const Genres = ({ values }) => {
  return (
    <>
      {values.map((genre, idx) => {
        return (
          <span key={idx} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};

function DataTableApp(props) {
  const columns = useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "Type",
            accessor: "show.type"
          }
        ]
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Language",
            accessor: "show.language"
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
            Cell: ({ cell: { value } }) => <Genres values={value} />
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",
            Cell: ({ cell: { value } }) => {
              const hour = Math.floor(value / 60);
              const min = Math.floor(value % 60);
              return (
                <>
                  {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
                  {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
                </>
              );
            }
          },
          {
            Header: "Status",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
   /* (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      //const result = await axios.get("./mock_data.json");
      setData(result.data);
    })();*/
      setData(sampleData);
  }, []);
  return (
    <div className="DataTableApp">
          <Table columns={columns} data={data} search={props.search} sort={props.sort}/>
    </div>
  );
}

export default DataTableApp;
