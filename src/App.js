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
    token: Cookies.get("token") || null,
    username: Cookies.get("username") || null
  };

  setUser = user => {
    if (user) {
      const { token, account } = user;
      this.setState({
        token: token,
        username: account.username
      });

      Cookies.set("token", token);
      Cookies.set("username", account.username);
    } else {
      console.log("no user was passed in setUser()");
    }
  };

  getUser = () => {
    if (this.state.token) {
      return {
        token: this.state.token,
        username: this.state.username
      };
    } else {
      console.log("getUser() does not find a user, check token");
    }
  };

  logOut = () => {
    this.setState({
      token: null,
      username: null
    });

    Cookies.remove("token");
    Cookies.remove("username");
  };

  render() {
    return (
      <Router>
        <>
          <Header
            token={this.state.token}
            logOut={this.logOut}
            username={this.state.username}
          />
          <Switch>
            <Route
              exact={true}
              path="/"
              render={props => {
                // props = {
                //  history (push triggers redirection)
                //  match
                //  location
                // }
                return <Home {...props} />;
              }}
            />
            <Route
              path="/offer/:offerId"
              render={props => <Offer {...props} />}
            />
            <Route
              path="/sign_up"
              render={props => <SignUp setUser={this.setUser} {...props} />}
            />

            <Route
              path="/log_in"
              render={props => <LogIn setUser={this.setUser} {...props} />}
            />
            <Route
              path="/publish"
              render={props => <Publish getUser={this.getUser} {...props} />}
            />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
