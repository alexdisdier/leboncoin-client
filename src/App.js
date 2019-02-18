import React, { Component } from "react";
import axios from "axios";

import Home from "./containers/Home/Home";
import Offer from "./containers/Offer/Offer";

import Header from "./components/Header/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/reset.css";
import "./App.css";

class App extends Component {
  state = {
    offers: [],
    error: null
    // skip: null,
    // limit: null
  };

  async componentDidMount() {
    try {
      this.goToPage();
    } catch (error) {
      this.setState({
        error: "An error occurred"
      });
    }
  }

  goToPage = async (skip, limit) => {
    const response = await axios.get(
      `https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=0&limit=25`
    );
    const offers = response.data.offers;
    this.setState({
      offers: offers
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Header />
            <Switch>
              <Route
                exact
                path="/home"
                render={props => (
                  <Home
                    {...props}
                    offers={this.state.offers}
                    goToPage={this.goToPage}
                  />
                )}
              />
              <Route
                path="/offer/:offerId"
                render={props => <Offer {...props} />}
              />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
