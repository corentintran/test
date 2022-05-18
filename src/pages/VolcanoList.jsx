import React from "react";
import { useState } from "react";

import "../styles.css";
import SearchBar from "../components/SearchBar";
import VolcanoGrid from "../components/VolcanoGrid";
import { useVolcanoData } from "../api";

//import Volcano from "./Volcano";

export default function VolcanoList() {
  const [country, setCountry] = useState("Japan");
  const { loading, volcanoes, error } = useVolcanoData(country);
  //if (loading) {
  //  return <p>Loading...</p>;
  //}

  //const rowData = props.rowData;
  //setError(null);

  return (
    <div className="container">
      <h1>Volcanoes of {country}</h1>
      <SearchBar onSubmit={setCountry} />

      <VolcanoGrid {...volcanoes} />
      {error === null ? (
        volcanoes.map((volc) => <VolcanoGrid {...volc} />)
      ) : (
        <p>Error: {error}</p>
      )}
    </div>
  );
}
