import { createContext, useState } from "react";

export const CountryContext = createContext();

const PAGE_SIZE = 5;
const URL = "https://restcountries.com/v3.1/all?fields=name,flags";

const CountryContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredcountries, setFilteredCountries] = useState([]);
  const [paginationData, setPaginationData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const calculatePageSize = (data) => {
    let size = data.length;

    let totalPage = Math.ceil(size / PAGE_SIZE);
    setTotalPages(totalPage);
  };

  async function fetchData() {
    const response = await fetch(URL);
    const datas = await response.json();

    calculatePageSize(datas);

    setCountries(datas);
    setFilteredCountries(datas);
    setPaginationData(datas.slice(0, PAGE_SIZE));
  }

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const input = e.target.value.toLowerCase();

    let filteredCountries = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(input);
    });

    calculatePageSize(filteredCountries);

    setFilteredCountries(filteredCountries);
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        filteredcountries,
        paginationData,
        page,
        totalPages,

        setPaginationData,

        fetchData,
        handleNext,
        handlePrev,
        handleChange,

        PAGE_SIZE,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
