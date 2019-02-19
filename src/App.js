import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header/Header";

import Home from "./containers/Home/Home";
import Offer from "./containers/Offer/Offer";
import SignUp from "./containers/SignUp/SignUp";
import LogIn from "./containers/LogIn/LogIn";
import Publish from "./containers/Publish/Publish";

import "./assets/css/reset.css";
import "./App.css";

class App extends Component {
  state = {
    userId: Cookies.get("userId") || null,
    token: Cookies.get("userToken") || null
  };

  setUserId = id => {
    this.setState({
      userId: id
    });
    Cookies.set("userId", id);
  };

  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route
              exact={true}
              path="/"
              render={props => <Home {...props} />}
            />
            <Route
              path="/offer/:offerId"
              render={props => <Offer {...props} />}
            />
            <Route path="/SignUp" render={props => <SignUp {...props} />} />
            <Route
              path="/LogIn"
              render={props => <LogIn {...props} />}
              setUserId={this.setUserId}
            />
            <Route path="/Publish" render={props => <Publish {...props} />} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
