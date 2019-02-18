import React from "react";

import "./Pagination.css";

const pagination = props => {
  const pages = [];

  for (let i = 1; i <= props.length; i++) {
    if (i === 1) {
      pages.push(<span key={0}>←</span>);
    }
    pages.push(
      <span
        key={i}
        className={props.currentPage === 1 ? "pagination-active" : ""}
        onClick={() => props.goToPage(i)}
      >
        {i}
      </span>
    );
    if (i === props.pages) {
      pages.push(<span key={props.length + 1}>→</span>);
    }
  }
  return <div className="pagination">{pages}</div>;
};

export default pagination;
