import React, { Component } from "react";
import axios from "axios";

import Loading from "../../components/Loading/Loading";

import "./Offer.css";

class Offer extends Component {
  state = {
    offer: [],
    isLoading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" +
          this.props.match.params.offerId
      );
      const offer = response.data;
      this.setState({
        offer: offer,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error: "An error occurred"
      });
    }
  }

  renderSection() {
    const { title, price, description, created, creator } = this.state.offer;
    const { isLoading, error } = this.state;
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
                <div className="gallery-container" />
                <div className="section-card-body">
                  <h1>{title}</h1>
                  <span>{price}&nbsp;€</span>
                  <div>{created}</div>
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
      return null;
    }
  }

  render() {
    return this.renderSection();
  }
}

export default Offer;
