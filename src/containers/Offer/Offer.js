import React, { Component } from 'react';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { format } from 'date-fns';
import domain from '../../assets/domain';

import Loading from '../../components/Loading/Loading';

import { ROUTE_OFFER } from '../../constant/routes';

import './Offer.css';

class Offer extends Component {
  state = {
    offer: {},
    isLoading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        domain + ROUTE_OFFER + '/' + this.props.match.params.id
      );
      const offer = response.data;

      this.setState({
        offer: offer,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error: 'An error occurred'
      });
    }
  }

  renderSection() {
    const {
      isLoading,
      error,
      offer: { title, price, description, created, creator, pictures }
    } = this.state;
    const imgUrl = [];

    if (pictures) {
      if (pictures.length > 0) {
        for (let i = 0; i < pictures.length; i++) {
          imgUrl.push(pictures[i].secure_url);
        }
      }
    }

    if (!isLoading && error === null) {
      const profileImg = (
        <svg viewBox="0 0 24 24" data-name="Calque 1" focusable="false">
          <circle cx="12" cy="12" fill="#cad1d9" r="12" />
          <circle cx="12" cy="10.26" fill="#a8b4c0" r="4.73" />
          <path
            d="M12 16.64a8.67 8.67 0 0 0-7.73 4.53 12 12 0 0 0 15.46 0A8.67 8.67 0 0 0 12 16.64z"
            fill="#a8b4c0"
          />
        </svg>
      );
      return (
        <div className="wrapper">
          <section className="section-offer">
            <div className="section-main">
              <div className="section-card">
                {imgUrl.length === 0 ? (
                  <div className="gallery-container" />
                ) : (
                  ''
                )}
                <Carousel>
                  {imgUrl.map((img, index) => {
                    return (
                      <div key={index}>
                        <img src={img} alt="carousel slider" />
                      </div>
                    );
                  })}
                </Carousel>

                <div className="section-card-body">
                  <h1>{title}</h1>
                  <span>{price}&nbsp;€</span>
                  <div>{format(created, 'MMMM DD, YYYY')}</div>
                </div>
              </div>
              <div className="section-description">
                <div>Description</div>
                <p>{description}</p>
              </div>
            </div>
            <div className="section-sidebar">
              <div className="contact-card">
                <div>{profileImg}</div>
                <div className="user">{creator.account.username}</div>
                <div className="phone">{creator.account.phone}</div>
              </div>
            </div>
          </section>
        </div>
      );
    } else if (isLoading && error === null) {
      return <Loading />;
    } else {
      return error;
    }
  }

  render() {
    return this.renderSection();
  }
}

export default Offer;
