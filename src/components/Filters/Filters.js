import React from "react";

import "./Filters.css";
const filters = props => {
  return (
    <div className="filters-container">
      <div className="wrapper">
        <form>
          <div className="search">
            <input
              type="text"
              name="search"
              value=""
              placeholder="Que recherchez-vous?"
            />
            <button>Rechercher</button>
          </div>
          <div className="filters">
            <div className="price-range">
              <label htmlFor="price">Prix entre</label>
              <select>
                <option>Prix min</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              et
              <select>
                <option>Prix max</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
            <select>
              <option>Tri: Plus récents</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default filters;
