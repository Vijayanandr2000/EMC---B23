import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const CountryData = () => {
  const { handleChange, paginationData } = useContext(CountryContext);
  return (
    <section>
      <h1>🌍 Country Flags</h1>

      <input
        type="text"
        id="search"
        placeholder="Search for a country..."
        onChange={handleChange}
      />

      <div id="container" className="container">
        {paginationData.map((country) => {
          return (
            <div className="country-card">
              <img src={country.flags.png} alt="flag-image" />
              <p>{country.name.common}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CountryData;
