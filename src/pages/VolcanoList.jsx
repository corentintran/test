import React from "react";
import { useEffect, useState } from "react";

import "../styles.css";
import SearchBar from "../components/SearchBar";
import VolcanoGrid from "../components/VolcanoGrid";

export default function VolcanoList() {
  const [country, setCountry] = useState("Japan");
  const { volcanoes, error } = useVolcanoData(country);

  //const rowData = props.rowData;
  //setError(null);

  return (
    <div className="container">
      <h1>Volcanoes of {country}</h1>
      <SearchBar onSubmit={setCountry} />

      <VolcanoGrid volcanoes={volcanoes} />
      {error === null ? (
        volcanoes.map((volc) => <VolcanoGrid {...volc} />)
      ) : (
        <p>Error: {error}</p>
      )}
    </div>
  );
}

function useVolcanoData(country) {
  const [volcanoes, setVolcanoes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://sefdb02.qut.edu.au:3001/volcanoes?country=${country}`)
      .then((res) => res.json())
      .then((res) => setVolcanoes(res))
      .then((data) =>
        data.map((volc) => ({
          id: volc.id,
          name: volc.name,
          region: volc.region,
          subregion: volc.subregion
        }))
      )
      .then((volc) => {
        setVolcanoes(volc);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [country]);

  return {
    volcanoes,
    error
  };
}

function useCountryData() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://sefdb02.qut.edu.au:3001/countries`)
      .then((res) => res.json())
      .then((res) => setCountries(res))
      .then((country) => {
        setCountries(country);
        setError(null);
      })
      .catch((err) => setError(err.message));
  });

  return {
    countries,
    error
  };
}
