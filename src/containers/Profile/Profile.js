import React, { Component } from "react";
import axios from "axios";

import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";

import "./Profile.css";

const local = "http://localhost:3001";
const server = "https://leboncoin-api.herokuapp.com/api";
const domain = local;

class Profile extends Component {
  state = {
    offers: [],
    isDelete: true,

    isLoading: true,
    error: null
  };

  async componentDidMount() {
    this.fetchOffer();
  }

  fetchOffer = async () => {
    try {
      const token = this.props.getUser().token;
      const response = await axios.get(domain + "/profile", {
        headers: {
          authorization: "Bearer " + token
        }
      });
      console.log(response.data);
      const offer = response.data;
      this.setState({
        offers: offer,
        isLoading: false
      });
    } catch (error) {
      console.log({
        error: error.message
      });
    }
  };

  deleteOffer = async id => {
    try {
      const token = this.props.getUser().token;

      await axios.delete(`${domain}/delete/${id}`, {
        headers: {
          authorization: "Bearer " + token
        }
      });
      this.fetchOffer();
    } catch (error) {
      console.log("not deleted");
    }
  };

  renderOffers() {
    const { isLoading, error, offers } = this.state;

    if (!isLoading && error === null) {
      if (offers !== undefined) {
        return (
          <>
            <div className="wrapper homepage">
              <ul>
                {this.state.offers.map(e => (
                  <Card
                    isDelete={this.state.isDelete}
                    deleteOffer={this.deleteOffer}
                    key={e._id}
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
          </>
        );
      }
    } else if (isLoading && error === null) {
      return <Loading />;
    } else {
      return null;
    }
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="ad-listing">
            <h1>Votre profil</h1>
            <div className="profile-details">
              <p>Username: {this.props.getUser().username}</p>
              <p>Email: {this.props.getUser().email}</p>
            </div>
            {this.renderOffers()}
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
