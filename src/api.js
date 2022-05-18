import { useEffect, useState } from "react";

//const API_KEY = "34362870b15d4757aa533131220504";

export function useVolcano(country) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVolcanoByCountry(country)
      .then((volcano) => {
        setHeadlines(volcano);
        setLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [country]);

  //old useEffect
  /*
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
  */

  return {
    loading,
    headlines,
    error
  };
}

function getVolcanoByCountry(c) {
  return fetch(`http://sefdb02.qut.edu.au:3001/volcanoes?country=${c}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if ("error" in res) {
        throw new Error(res.error.message);
      }
      return res.forecast.forecastday[0].hour;
    })
    .then((volcanoes) =>
      volcanoes.map((volcan) => ({
        name: volcan.name,
        region: volcan.region,
        subregion: volcan.subregion
      }))
    );
}
