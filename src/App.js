import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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
    token: Cookies.get("token") || null,
    username: Cookies.get("username") || null,
    redirect: false
  };

  setUserId = (id, token, username) => {
    Cookies.set("userId", id);
    Cookies.set("token", token);
    Cookies.set("username", username);
    this.setState({
      userId: Cookies.get("userId"),
      token: Cookies.get("token"),
      username: Cookies.get("username"),
      redirect: true
    });
  };

  endSession = () => {
    Cookies.remove("userId");
    Cookies.remove("token");
    Cookies.remove("username");
    this.setState({
      userId: null,
      token: null,
      username: null,
      redirect: false
    });
  };

  render() {
    return (
      <Router>
        <>
          <Header
            token={this.state.token}
            endSession={this.endSession}
            username={this.state.username}
          />
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
              render={props =>
                this.state.redirect ? (
                  <Redirect to="/" />
                ) : (
                  <LogIn setUserId={this.setUserId} {...props} />
                )
              }
            />
            <Route path="/Publish" render={props => <Publish {...props} />} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
