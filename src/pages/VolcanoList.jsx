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
  const [country, setCountry] = useState("Japan");
  const { loading, headlines, error } = useVolcano(query);
  if (loading) {
    return <p>Loading...</p>;
  }

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch("http://sefdb02.qut.edu.au:3001/volcanoes?country=" + country)
      .then((res) => res.json())
      .then((data) => setRowData(res))
      .then((data) =>
        data.map((rowData) => {
          return {
            name: rowData.name,
            region: rowData.region,
            subregion: rowData.subregion
          };
        })
      )
      .then((volcans) => setRowData(volcans));
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
      <h1>Volanoes of {country}</h1>
      <SearchBar onSubmit={setCountry} />
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
          onRowClicked={(row) => navigate(`/volcano?name=${row.data.name}`)}
        />
      </div>
    </div>
  );
}
