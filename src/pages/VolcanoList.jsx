import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import "../styles.css";
import SearchBar from "../components/SearchBar";
import { useVolcano } from "../api";

//import Volcano from "./Volcano";

export default function VolcanoList() {
  const [rowData, setRowData] = useState([]);
  const country = "Japan";

  useEffect(() => {
    fetch("http://sefdb02.qut.edu.au:3001/volcanoes?country=" + country)
      .then((res) => res.json())
      .then((data) => data.works)
      .then((works) =>
        works.map((volcan) => {
          return {
            name: volcan.name,
            region: volcan.region,
            subregion: volcan.subregion
          };
        })
      )
      .then((rowData) => setRowData(rowData));
  }, []);

  const navigate = useNavigate();

  const columns = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Region", field: "region" },
    { headerName: "Subregion", field: "subregion" }
  ];

  //const rowData = props.rowData;

  return (
    <div className="container">
      <SearchBar onSubmit={setRowData} />
      <div
        className="ag-theme-balham"
        style={{
          height: "300px",
          width: "800px"
        }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination
          paginationPageSize={7}
          onRowClicked={(row) => navigate(`/volcano?name=${row.data.title}`)}
        />
      </div>
    </div>
  );
}
