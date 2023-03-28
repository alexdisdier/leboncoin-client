import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

import Filters from '../../components/Filters/Filters';
import Card from '../../components/Card/Card';

import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';

import './Offers.css';

class Offers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      limit: 10, // Products per page
      totalPages: 0,
      currentPage: 1,

      title: Cookies.get('title') || '',
      minPrice: Cookies.get('minPrice') || '',
      maxPrice: Cookies.get('maxPrice') || '',
      sort: Cookies.get('sort') || '',

      isLoading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/.netlify/functions/offer');
      const { limit } = this.state;

      this.setState({
        offers: response.data.offers,
        totalPages: Math.ceil(response.data.offers.length / limit),
      });
      this.goToPage(1);
    } catch (error) {
      this.setState({
        error,
      });
    }
  }

  goToPage = async (pageClicked) => {
    const { title, minPrice, maxPrice, sort, limit } = this.state;

    try {
      if (title !== '' || minPrice !== '' || maxPrice !== '' || sort !== '') {
        const criteria = {
          title,
          minPrice,
          maxPrice,
          sort,
        };

        this.searchFilters(criteria);
        this.setState({
          isLoading: false,
        });
      } else {
        const skip = (pageClicked - 1) * limit;
        const response = await axios.get(
          `/.netlify/functions/offer/with-count?skip=${skip}&limit=${limit}`
        );
        const { offers } = response.data;

        this.setState({
          offers,
          currentPage: pageClicked,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        error: 'An error occurred',
      });
    }
  };

  handleFilters = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    const stateToUpdate = {};

    if (value === '') {
      Cookies.remove('title');
      Cookies.remove('minPrice');
      Cookies.remove('maxPrice');
      Cookies.remove('sort');
    }

    stateToUpdate[name] = value;

    this.setState(stateToUpdate);
  };

  searchFilters = async (criteria) => {
    try {
      if (criteria !== undefined) {
        let maxPriceQuery = '';
        if (criteria.maxPrice !== '') {
          maxPriceQuery = `&priceMax=${criteria.maxPrice}`;
        }

        const response = await axios.get(
          `/.netlify/functions/offer-with-count?title=${criteria.title}&priceMin=${criteria.minPrice}${maxPriceQuery}&sort=${criteria.sort}`
        );
        const { offers } = response.data;

        const { limit, title, minPrice, maxPrice, sort } = this.state;

        this.setState({
          offers,
          totalPages: Math.ceil(response.data.offers.count / limit),
          title,
          minPrice,
          maxPrice,
          sort,
        });
        Cookies.set('title', title);
        Cookies.set('minPrice', minPrice);
        Cookies.set('maxPrice', maxPrice);
        Cookies.set('sort', sort);
      }
    } catch (error) {
      this.setState({
        error: 'An error occured',
      });
    }
  };

  submitFilters = (event) => {
    event.preventDefault();
    const { title, minPrice, maxPrice, sort } = this.state;

    const criteria = {
      title,
      minPrice,
      maxPrice,
      sort,
    };

    const keys = Object.values(criteria);

    // Checks if a value exists
    const notEmpty = keys.filter((value) => value !== '').length > 0;

    if (notEmpty) {
      this.searchFilters(criteria);
    } else {
      this.searchFilters();
      this.setState({
        title: '',
        minPrice: '',
        maxPrice: '',
        sort: '',
      });
      Cookies.remove('title');
      Cookies.remove('minPrice');
      Cookies.remove('maxPrice');
      Cookies.remove('sort');
      this.goToPage(1);
    }
  };

  renderMain() {
    const { isLoading, error, currentPage, totalPages, offers } = this.state;
    const { windowWidth } = this.props;

    if (error !== null) return null;
    if (isLoading) return <Loading />;
    if (!offers)
      return (
        <div>No offers at the moment - migrating from heroku to netlify</div>
      );

    return (
      <>
        <div className="wrapper Offerspage">
          <ul>
            {offers.map(
              ({ _id: id, pictures, title, description, price, created }) => (
                <Card
                  key={id + title}
                  pictures={pictures}
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  date={created}
                />
              )
            )}
          </ul>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={this.goToPage}
          windowWidth={windowWidth}
        />
      </>
    );
  }

  render() {
    const { title, minPrice, maxPrice, sort } = this.state;

    return (
      <>
        <Filters
          title={title}
          minPrice={minPrice}
          maxPrice={maxPrice}
          sort={sort}
          handleFilters={this.handleFilters}
          submitFilters={this.submitFilters}
        />

        {this.renderMain()}
      </>
    );
  }
}

export default Offers;
