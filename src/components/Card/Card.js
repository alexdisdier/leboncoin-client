import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import LinesEllipsis from "react-lines-ellipsis";

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

  let deleteAd;

  if (props.isDelete) {
    deleteAd = (
      <span
        id="delete-ad"
        onClick={() => {
          props.deleteOffer(props.id);
        }}
      >
        ⤫
      </span>
    );
  }

  return (
    <li className="card">
      {deleteAd}
      <Link to={`/leboncoin-client/offer/${props.id}`}>
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
            <LinesEllipsis
              text={props.description}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
            <span style={{ marginTop: "-16px" }}>
              {format(props.date, "MMMM DD, YYYY")}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default card;
