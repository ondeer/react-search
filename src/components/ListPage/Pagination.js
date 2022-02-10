import { useState, useEffect } from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const pages = [];

  for (let i = 1; i <= Math.ceil(props.filteredData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  useEffect(() => {
    props.pageNumberCallback(indexOfFirstItem, indexOfLastItem);
  }, [indexOfFirstItem,indexOfLastItem]);

  const newPageHandler = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const nextButtonHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevButtonHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  let prevDisabled = null;
  let nextDisabled = null;
  let buttonVisible = null;

  if (pages.length >= 2) {
    buttonVisible = true;
  } else {
    buttonVisible = false;
  }

  if (currentPage === 1) {
    prevDisabled = true;
  } else if (currentPage === pages.length) {
    nextDisabled = true;
  } else {
    prevDisabled = false;
    nextDisabled = false;
  }

  const renderPageNumbers = pages.map((number) => {
    return (
      <li
        onClick={newPageHandler}
        key={number}
        id={number}
        className={currentPage === number ? classes.active : null}>
        {number}
      </li>
    );
  });

  return (
    <ul className={classes.pagination}>
      {buttonVisible && (
        <li style={{border:'none'}}>
          <button disabled={prevDisabled} onClick={prevButtonHandler}>
            Previous
          </button>
        </li>
      )}
      {renderPageNumbers}
      {buttonVisible && (
        <li style={{border:'none', padding:'0'}}>
          <button disabled={nextDisabled} onClick={nextButtonHandler}>
            Next
          </button>
        </li>
      )}
    </ul>
  );
};

export default Pagination;
