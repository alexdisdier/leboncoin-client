import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Cookies from 'js-cookie';

import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Offers from './containers/Offers/Offers';
import Offer from './containers/Offer/Offer';
import SignUp from './containers/SignUp/SignUp';
import LogIn from './containers/LogIn/LogIn';
import Publish from './containers/Publish/Publish';
import Profile from './containers/Profile/Profile';

import {
  ROUTE_HOME,
  ROUTE_SIGNUP,
  ROUTE_LOGIN,
  ROUTE_PUBLISH,
  ROUTE_OFFERS,
  ROUTE_OFFER,
  ROUTE_PROFILE,
} from './constant/routes';

import './assets/css/reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: Cookies.get('token') || null,
      email: Cookies.get('email') || null,
      username: Cookies.get('username') || null,
      isToggle: false,
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  setUser = (user) => {
    if (user) {
      const {
        token,
        email,
        account: { username },
      } = user;
      this.setState({
        token,
        email,
        username,
      });

      Cookies.set('token', token);
      Cookies.set('email', email);
      Cookies.set('username', username);
    } else {
      console.error('no user was passed in setUser()');
    }
  };

  getUser = () => {
    const { token, email, username } = this.state;

    if (!token) {
      console.error('getUser() does not find a user, check token');
      return;
    }

    // eslint-disable-next-line consistent-return
    return {
      token,
      email,
      username,
    };
  };

  logOut = () => {
    this.setState({
      token: null,
      email: null,
      username: null,
    });

    Cookies.remove('token');
    Cookies.remove('email');
    Cookies.remove('username');
  };

  toggleMenu = () => {
    const { isToggle } = this.state;

    this.setState({
      isToggle: !isToggle,
    });
  };

  render() {
    const {
      token, username, isToggle, windowWidth,
    } = this.state;

    return (
      <Router>
        <ScrollToTop>
          <>
            <Header
              token={token}
              username={username}
              isToggle={isToggle}
              logOut={this.logOut}
              toggleMenu={this.toggleMenu}
            />
            <Switch>
              <Route
                exact
                path={ROUTE_HOME}
                render={(props) => <Home {...props} />}
              />
              <Route
                exact
                path="/leboncoin-client"
                render={(props) => <Home {...props} />}
              />
              <Route
                exact
                path={ROUTE_OFFERS}
                render={(props) => <Offers {...props} windowWidth={windowWidth} />}
              />
              <Route
                exact
                path={`/leboncoin-client${ROUTE_OFFERS}`}
                render={(props) => <Offers {...props} windowWidth={windowWidth} />}
              />
              <Route
                path={`${ROUTE_OFFER}/:id`}
                render={(props) => <Offer {...props} />}
              />
              <Route
                path={`/leboncoin-client${ROUTE_OFFER}/:id`}
                render={(props) => <Offer {...props} />}
              />
              <Route
                path={ROUTE_SIGNUP}
                render={(props) => <SignUp setUser={this.setUser} {...props} />}
              />
              <Route
                path={`/leboncoin-client${ROUTE_SIGNUP}`}
                render={(props) => <SignUp setUser={this.setUser} {...props} />}
              />

              <Route
                path={ROUTE_LOGIN}
                render={(props) => <LogIn setUser={this.setUser} {...props} />}
              />
              <Route
                path={`/leboncoin-client${ROUTE_LOGIN}`}
                render={(props) => <LogIn setUser={this.setUser} {...props} />}
              />
              <Route
                path={ROUTE_PUBLISH}
                render={(props) => {
                  if (token) {
                    return <Publish getUser={this.getUser} {...props} />;
                  }
                  return <Redirect to={ROUTE_LOGIN} />; // source: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md
                }}
              />
              <Route
                path={ROUTE_PROFILE}
                render={(props) => {
                  if (token) {
                    return <Profile getUser={this.getUser} {...props} />;
                  }
                  return <Redirect to={ROUTE_OFFERS} />;
                }}
              />
              <Route
                path={`/leboncoin-client${ROUTE_PROFILE}`}
                render={(props) => {
                  if (token) {
                    return <Profile getUser={this.getUser} {...props} />;
                  }
                  return <Redirect to={ROUTE_OFFERS} />;
                }}
              />
            </Switch>
          </>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
