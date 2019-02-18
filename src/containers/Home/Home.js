import React from "react";

import Filters from "../../components/Filters/Filters";
import Card from "../../components/Card/Card";

import Pagination from "../../components/Pagination/Pagination";

import "./Home.css";
const home = props => {
  return (
    <>
      <Filters />
      <div className="wrapper homepage">
        <ul>
          {props.offers.map((e, index) => (
            <Card
              key={index}
              pictures={e.pictures}
              id={e._id}
              title={e.title}
              description={e.description}
              price={e.price}
              date={e.created}
            />
          ))}
        </ul>
      </div>
      <Pagination length={props.offers.length} goToPage={props.goToPage} />
    </>
  );
};

export default home;
