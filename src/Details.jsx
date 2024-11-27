import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation();

  if (!state || !state.data) return <p>No country selected.</p>;

  const { data } = state;
  const { name, population, region, capital, flags } = data;

  return (
    <div className="content">
      <h2>Details for {name.common}</h2>
      <img src={flags.png} alt={`${name.common} flag`} width="150" />
      <p><strong>Capital:</strong> {capital ? capital[0] : "N/A"}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
    </div>
  );
}

export default Details;
