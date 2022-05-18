import React from "react";
import { useState, useEffect } from "react";

import "../styles.css";
import SearchBar from "../components/SearchBar";
import { useVolcano } from "../api";
import VolcanoGrid from "../components/VolcanoGrid";

//import Volcano from "./Volcano";

export default function VolcanoList() {
  const [country, setCountry] = useState("Japan");
  const { loading, volcanoes, error } = useVolcano(country);
  if (loading) {
    return <p>Loading...</p>;
  }

  //const rowData = props.rowData;
  //setError(null);

  return (
    <div className="container">
      <h1>Volanoes of {country}</h1>
      <SearchBar onSubmit={setCountry} />

      {error === null ? (
        volcanoes.map((volcano) => <VolcanoGrid key={volcano} />)
      ) : (
        <p>Error: {error}</p>
      )}
    </div>
  );
}
