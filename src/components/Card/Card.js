import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import "./Card.css";
const card = props => {
  let image;
  if (props.pictures.length > 0) {
    image = props.pictures[0].secure_url;
  }

  let style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center"
  };

  return (
    <li className="card">
      <Link to={`/offer/${props.id}`}>
        <div className="card-body">
          <div className="card-img">
            <div className="img" style={style} />
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
