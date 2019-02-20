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
                <option value="0">Prix min</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
              </select>
              <span>et</span>
              <select
                name="maxPrice"
                value={maxPrice}
                onChange={props.handleFilters}
              >
                <option value="">Prix max</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
              </select>
            </div>
            <select name="sort" value={sort} onChange={props.handleFilters}>
              <option value="date-desc">Filtres de tris</option>
              <option value="date-desc">Tri: Plus récents</option>
              <option value="date-asc">Tri: Plus vieux</option>
              <option value="price-asc">Tri: Moins cher</option>
              <option value="price-desc">Tri: Plus cher</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default filters;
