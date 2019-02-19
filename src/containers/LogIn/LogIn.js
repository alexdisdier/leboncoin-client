import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const urlPost = "https://leboncoin-api.herokuapp.com/api/user/log_in";

class LogIn extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    const stateToUpdate = {};

    stateToUpdate[name] = value;

    this.setState(stateToUpdate);
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(urlPost, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        const id = response.data._id;
        const token = response.data.token;
        const username = response.data.account.username;
        this.props.setUserId(id, token, username);
        console.log("success, check cookies");
      })
      .catch(error => console.log(error));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="wrapper">
        <div className="sign-in-flex">
          <section>
            <h1>Connexion</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-item">
                <label htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-item form-password">
                <div className="form-item">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <button type="submit">Se connecter</button>
            </form>

            <div className="create-account-redirect">
              <p>Vous n'avez pas de compte ?</p>
              <Link className="btn" to="/signup">
                Créer un compte
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default LogIn;
