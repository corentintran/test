import { useEffect, useState } from "react";

const API_KEY = "34362870b15d4757aa533131220504";

export function useVolcano(query) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVolcanoByQuery(query)
      .then((volcano) => {
        setHeadlines(volcano);
        setLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [query]);

  return {
    loading,
    headlines,
    error
  };
}

function getVolcanoByQuery(q) {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${q}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if ("error" in res) {
        throw new Error(res.error.message);
      }
      return res.forecast.forecastday[0].hour;
    })
    .then((forecasts) =>
      forecasts.map((forecast) => ({
        time: forecast.time,
        text: forecast.condition.text,
        temp: forecast.temp_c,
        wind: forecast.wind_kph,
        icon: forecast.condition.icon
      }))
    );
}
