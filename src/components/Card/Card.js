import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import "./Card.css";
const card = props => {
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
