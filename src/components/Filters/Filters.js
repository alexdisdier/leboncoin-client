import React from "react";

import "./Filters.css";
const filters = props => {
  const { title, minPrice, maxPrice, sort } = props;
  return (
    <div className="filters-container">
      <div className="wrapper">
        <form onSubmit={props.submitFilters}>
          <div className="search">
            <input
              type="text"
              placeholder="Que recherchez-vous?"
              name="title"
              value={title}
              onChange={props.handleFilters}
            />
            <button type="submit">Rechercher</button>
          </div>
          <div className="filters">
            <div className="price-range">
              <label htmlFor="price">Prix&nbsp;entre</label>
              <select
                name="minPrice"
                value={minPrice}
                onChange={props.handleFilters}
              >
                <option>Prix min</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
              <span>et</span>
              <select
                name="maxPrice"
                value={maxPrice}
                onChange={props.handleFilters}
              >
                <option>Prix max</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
            <select name="sort" value={sort} onChange={props.handleFilters}>
              <option value="desc">Tri: Plus récents</option>
              <option value="asc">Tri: Plus vieux</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default filters;
