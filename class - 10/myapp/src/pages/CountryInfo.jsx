import { useContext, useEffect } from "react";
import "../App.css";
import CountryData from "../components/CountryData";
import Pagination from "../components/Pagination";
import { CountryContext } from "../context/CountryContext";

function CountryInfo() {
  const { page, PAGE_SIZE, filteredcountries, fetchData, setPaginationData } =
    useContext(CountryContext);

  useEffect(() => {
    let startIdx = (page - 1) * PAGE_SIZE;
    let endIdx = page * PAGE_SIZE;
    console.log(startIdx, endIdx);
    setPaginationData(filteredcountries.slice(startIdx, endIdx));
  }, [page, filteredcountries, PAGE_SIZE, setPaginationData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <CountryData />
      <Pagination />
    </>
  );
}

export default CountryInfo;
