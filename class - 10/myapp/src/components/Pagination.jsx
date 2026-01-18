import React, { useContext } from "react";
import { CountryContext } from "../context/CountryContext";

const Pagination = () => {
  const { handlePrev, handleNext, page, totalPages } =
    useContext(CountryContext);
  return (
    <section>
      <button onClick={handlePrev} disabled={page === 1}>
        PREV
      </button>
      <span>|</span>
      <button onClick={handleNext} disabled={page == totalPages}>
        NEXT
      </button>

      <section>
        <h1>
          {page}/{totalPages}
        </h1>
      </section>
    </section>
  );
};

export default Pagination;
