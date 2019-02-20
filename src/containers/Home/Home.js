import React, { Component } from "react";
import axios from "axios";

import Filters from "../../components/Filters/Filters";
import Card from "../../components/Card/Card";

import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";

import "./Home.css";

// const urlFilterPrice =
//   "https://leboncoin-api.herokuapp.com/api/offer/with-count?title=ordinateur&priceMax=200";

class Home extends Component {
  state = {
    offers: [],
    count: 0,
    limit: 25,
    totalPages: 0,
    currentPage: 1,

    title: "",
    minPrice: "",
    maxPrice: "",
    sort: "",

    isLoading: true,
    error: null
  };

  async componentDidMount() {
    await this.goToPage(1);
  }

  goToPage = async pageClicked => {
    try {
      const skip = (pageClicked - 1) * this.state.limit;
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=${skip}&limit=${
          this.state.limit
        }`
      );
      const offers = response.data.offers;
      const count = response.data.count;
      this.setState({
        offers: offers,
        count: count,
        totalPages: Math.ceil(count / this.state.limit),
        currentPage: pageClicked,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error: "An error occurred"
      });
    }
  };

  handleFilters = event => {
    const name = event.target.name;
    const value = event.target.value;
    const stateToUpdate = {};

    stateToUpdate[name] = value;

    this.setState(stateToUpdate);
  };

  searchFilters = async criteria => {
    try {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/api/offer/with-count?title=${
          criteria.title
        }`
      );
      const offers = response.data.offers;
      const count = response.data.count;
      this.setState({
        offers: offers,
        count: count
      });
    } catch (error) {
      this.setState({
        error: "An error occured"
      });
    }
  };

  submitFilters = event => {
    event.preventDefault();

    const criteria = {
      title: this.state.title,
      minPrice: this.state.minPrice,
      maxPrice: this.state.maxPrice,
      sort: this.state.sort
    };

    const keys = Object.values(criteria);

    // Checks if a value exists
    const notEmpty = keys.filter(value => value !== "").length > 0;

    if (notEmpty) {
      this.searchFilters(criteria);
    } else {
      console.log("nothing");
    }
  };

  renderMain() {
    const { isLoading, error, currentPage, totalPages } = this.state;
    if (!isLoading && error === null) {
      return (
        <>
          <div className="wrapper homepage">
            <ul>
              {this.state.offers.map(e => (
                <Card
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={this.goToPage}
          />
        </>
      );
    } else if (isLoading && error === null) {
      return <Loading />;
    } else {
      return null;
    }
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
          // filters={this.state.filters}
          handleFilters={this.handleFilters}
          submitFilters={this.submitFilters}
        />

        {this.renderMain()}
      </>
    );
  }
}

export default Home;
