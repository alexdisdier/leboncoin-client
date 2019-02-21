import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import "./Card.css";
const card = props => {
  // let background;
  // if (_id === "5c6da693f180080014ba0c96") {
  //   background =
  //     "https://res.cloudinary.com/lereacteur/image/upload/v1550689939/leboncoin/5c6d51d5f180080014ba0c3d/Mt1UvBo8QGhMMX8c.png";
  // } else if (_id === "5c6daa40f180080014ba0c97") {
  //   background =
  //     "https://res.cloudinary.com/lereacteur/image/upload/v1550690880/leboncoin/5c6d51d5f180080014ba0c3d/HXyABtOlZbH1xAG7.png";
  // } else {
  //   background = "";
  // }

  // let style = {
  //   width: "100%",
  //   height: "400px",
  //   backgroundImage: `url(${background})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "contain",
  //   backgroundPosition: "center"
  // };

  return (
    <li className="card">
      <Link to={`/offer/${props.id}`}>
        <div className="card-body">
          <div className="card-img">
            <div className="img" />
          </div>
          <div className="card-content">
            <div className="card-top">
              <h3 className="card-title">{props.title}</h3>
              <span className="card-price">{props.price}&nbsp;€</span>
            </div>
            <div className="card-bottom" />
            <p>{props.description}</p>
            <span>{format(props.date, "MMMM DD, YYYY")}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default card;
