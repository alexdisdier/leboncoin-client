import React from 'react';
import { ReactComponent as ChevronLeft } from '../../assets/img/chevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../assets/img/chevronRight.svg';

import './Pagination.css';

const pagination = ({
  totalPages, currentPage, goToPage, windowWidth,
}) => {
  const pages = [];

  if (windowWidth < 768) {
    pages.push(
      <>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <span
          data-testid="mobile-previous-page"
          key="0"
          onClick={() => {
            if (currentPage > 1) {
              goToPage(currentPage - 1);
            }
          }}
        >
          <ChevronLeft />
        </span>
        <span key="1">{currentPage}</span>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <span
          data-testid="mobile-next-page"
          key="2"
          onClick={() => {
            if (currentPage < totalPages) {
              goToPage(currentPage + 1);
            }
          }}
        >
          <ChevronRight />
        </span>
      </>,
    );
  } else {
    for (let i = 1; i <= totalPages; i += 1) {
      if (i === 1) {
        pages.push(
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <span
            data-testid="desktop-previous-page"
            key={0}
            onClick={() => {
              if (currentPage > 1) {
                goToPage(currentPage - 1);
              }
            }}
          >
            <ChevronLeft />
          </span>,
        );
      }
      pages.push(
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <span
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => goToPage(i)}
        >
          {i}
        </span>,
      );

      if (i === totalPages) {
        pages.push(
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <span
            key={i + 1}
            onClick={() => {
              if (currentPage < totalPages) {
                goToPage(currentPage + 1);
              }
            }}
          >
            <ChevronRight />
          </span>,
        );
      }
    }
  }

  return <div className="pagination">{pages}</div>;
};

export default pagination;
