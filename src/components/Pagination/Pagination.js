import React from "react";

import "./Pagination.css";

const pagination = props => {
  const { totalPages, currentPage, goToPage } = props;
  console.log("totalPages", totalPages);
  console.log("currentPage", currentPage);

  const pages = [];

  const chevronLeft = (
    <svg viewBox="0 0 24 24" data-name="Calque 1" focusable="false">
      <path d="M10.13 12l8.25-8.33a2.15 2.15 0 0 0 0-3 2.1 2.1 0 0 0-3 0l-9.76 9.82a2.14 2.14 0 0 0 0 3l9.76 9.86a2.1 2.1 0 0 0 3 0 2.2 2.2 0 0 0 0-3.05z" />
    </svg>
  );

  const chevronRight = (
    <svg viewBox="0 0 24 24" data-name="Calque 1" focusable="false">
      <path d="M18.38 10.49L8.62.63a2.1 2.1 0 0 0-3 0 2.15 2.15 0 0 0 0 3L13.87 12l-8.25 8.32a2.2 2.2 0 0 0 0 3.05 2.1 2.1 0 0 0 3 0l9.76-9.86a2.14 2.14 0 0 0 0-3.02z" />
    </svg>
  );

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1) {
      pages.push(
        <span
          key={0}
          onClick={() => {
            if (currentPage > 1) {
              goToPage(currentPage - 1);
            }
          }}
        >
          {chevronLeft}
        </span>
      );
    }
    pages.push(
      <span
        key={i}
        className={currentPage === i ? "active" : ""}
        onClick={() => goToPage(i)}
      >
        {i}
      </span>
    );

    if (i === totalPages) {
      pages.push(
        <span
          key={i + 1}
          onClick={() => {
            if (currentPage < totalPages) {
              goToPage(currentPage + 1);
            }
          }}
        >
          {chevronRight}
        </span>
      );
    }
  }
  return <div className="pagination">{pages}</div>;
};

export default pagination;
