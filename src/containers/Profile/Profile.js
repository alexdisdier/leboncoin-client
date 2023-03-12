import React, { Component } from 'react';
import axios from 'axios';
import domain from '../../assets/domain';

import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';

import { ROUTE_PROFILE } from '../../constant/routes';

import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      isDelete: true,

      isLoading: true,
      error: null,
    };
  }

  async componentDidMount() {
    this.fetchOffer();
  }

  fetchOffer = async () => {
    const { getUser } = this.props;

    try {
      const { token } = getUser();
      const response = await axios.get(domain + ROUTE_PROFILE, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const offer = response.data;
      this.setState({
        offers: offer,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  deleteOffer = async (id) => {
    const { getUser } = this.props;

    try {
      const { token } = getUser();

      await axios.delete(`${domain}/delete/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      this.fetchOffer();
    } catch (error) {
      console.error('not deleted', error);
    }
  };

  renderOffers() {
    const {
      isLoading, error, offers, isDelete,
    } = this.state;

    if (error || (!isLoading && !offers)) {
      return null;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className="wrapper homepage">
        <ul>
          {offers.map(
            ({
              _id: id, title, pictures, description, price, created,
            }) => (
              <Card
                dataTestId="profile-ad-card"
                isDelete={isDelete}
                deleteOffer={this.deleteOffer}
                key={id + title}
                pictures={pictures}
                id={id}
                title={title}
                description={description}
                price={price}
                date={created}
              />
            ),
          )}
        </ul>
      </div>
    );
  }

  render() {
    const { getUser } = this.props;

    return (
      <>
        <div className="wrapper">
          <div className="ad-listing">
            <h1>Votre profil</h1>
            <div className="profile-details">
              <p>
                Username:
                {' '}
                {getUser().username}
              </p>
              <p>
                Email:
                {' '}
                {getUser().email}
              </p>
            </div>
            {this.renderOffers()}
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
