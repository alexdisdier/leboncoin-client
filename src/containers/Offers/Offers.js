import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import domain from "../../assets/domain";

import Filters from "../../components/Filters/Filters";
import Card from "../../components/Card/Card";

import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";

import "./Offers.css";

class Offers extends Component {
  state = {
    offers: [],
    count: 0,
    limit: 10, // Products per page
    totalPages: 0,
    currentPage: 1,

    title: Cookies.get("title") || "",
    minPrice: Cookies.get("minPrice") || "",
    maxPrice: Cookies.get("maxPrice") || "",
    sort: Cookies.get("sort") || "",

    isLoading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`${domain}/offer/with-count`);
      await this.setState({
        offers: response.data.offers,
        count: response.data.count,
        totalPages: Math.ceil(response.data.count / this.state.limit)
      });
      this.goToPage(1);
    } catch (error) {
      this.setState({
        error: error
      });
    }
  }

  goToPage = async pageClicked => {
    const { title, minPrice, maxPrice, sort, limit } = this.state;
    try {
      if (title !== "" || minPrice !== "" || maxPrice !== "" || sort !== "") {
        const criteria = {
          title: title,
          minPrice: minPrice,
          maxPrice: maxPrice,
          sort: sort
        };
        this.searchFilters(criteria);
        this.setState({
          isLoading: false
        });
      } else {
        const skip = (pageClicked - 1) * limit;
        const response = await axios.get(
          `${domain}/offer/with-count?skip=${skip}&limit=${limit}`
        );
        const offers = response.data.offers;

        this.setState({
          offers: offers,
          currentPage: pageClicked,
          isLoading: false
        });
      }
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

    if (value === "") {
      Cookies.remove("title");
      Cookies.remove("minPrice");
      Cookies.remove("maxPrice");
      Cookies.remove("sort");
    }

    stateToUpdate[name] = value;

    this.setState(stateToUpdate);
  };

  searchFilters = async criteria => {
    try {
      if (criteria !== undefined) {
        let maxPrice = "";
        if (criteria.maxPrice !== "") {
          maxPrice = "&priceMax=" + criteria.maxPrice;
        }
        const response = await axios.get(
          `${domain}/offer/with-count?title=${criteria.title}&priceMin=${criteria.minPrice}${maxPrice}&sort=${criteria.sort}`
        );
        const offers = response.data.offers;

        this.setState({
          offers: offers,
          totalPages: Math.ceil(response.data.count / this.state.limit),
          title: this.state.title,
          minPrice: this.state.minPrice,
          maxPrice: this.state.maxPrice,
          sort: this.state.sort
        });
        Cookies.set("title", this.state.title);
        Cookies.set("minPrice", this.state.minPrice);
        Cookies.set("maxPrice", this.state.maxPrice);
        Cookies.set("sort", this.state.sort);
      }
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
      this.searchFilters();
      this.setState({
        title: "",
        minPrice: "",
        maxPrice: "",
        sort: ""
      });
      Cookies.remove("title");
      Cookies.remove("minPrice");
      Cookies.remove("maxPrice");
      Cookies.remove("sort");
      this.goToPage(1);
    }
  };

  renderMain() {
    const { isLoading, error, currentPage, totalPages, offers } = this.state;

    if (!isLoading && error === null) {
      if (offers !== undefined) {
        return (
          <>
            <div className="wrapper Offerspage">
              <ul>
                {this.state.offers.map((e, index) => (
                  <Card
                    key={index}
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
              windowWidth={this.props.windowWidth}
            />
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
