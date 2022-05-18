import { useEffect, useState } from "react";

//const API_KEY = "34362870b15d4757aa533131220504";

export function useVolcanoData(country) {
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.message));
  }, [country]);

  return {
    loading,
    volcanoes,
    error
  };
}

export function useVolcanoId(id) {
  fetch(`http://sefdb02.qut.edu.au:3001/volcano/` + id)
    .then((res) => res.json())
    .then((res) => setVolcano(res))
    .then((volcanoes) =>
      volcanoes.map((volc) => ({
        id: volc.id,
        name: volc.name,
        country: volc.country,
        region: volc.region,
        subregion: volc.subregion,
        last_eruption: volc.last_eruption,
        summit: volc.summit
      }))
    );
}
