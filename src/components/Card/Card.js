import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import LinesEllipsis from 'react-lines-ellipsis';

import './Card.css';

import { ROUTE_OFFER } from '../../constant/routes';

const card = ({
  id,
  title,
  price,
  description,
  date,
  pictures,
  isDelete,
  deleteOffer,
  dataTestId
}) => {
  let image;

  if (pictures.length > 0) {
    image = pictures[0].secure_url;
  }

  let style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  };

  let deleteAd;

  if (isDelete) {
    deleteAd = (
      <span
        id="delete-ad"
        onClick={() => {
          deleteOffer(id);
        }}
      >
        ⤫
      </span>
    );
  }

  return (
    <li data-testid={dataTestId ? dataTestId : 'card'} className="card">
      {deleteAd}
      <Link to={`${ROUTE_OFFER}/${id}`}>
        <div className="card-body">
          <div className="card-img">
            <div className="img" style={style} />
          </div>
          <div className="card-content">
            <div className="card-top">
              <h3 className="card-title">{title}</h3>
              <span className="card-price">{price}&nbsp;€</span>
            </div>
            <div className="card-bottom" />
            <LinesEllipsis
              text={description}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
            <span className="date-fns">{format(date, 'MMMM DD, YYYY')}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default card;
