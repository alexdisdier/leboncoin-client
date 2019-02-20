import React, { Component } from "react";
import axios from "axios";
import { ReactComponent as ClockIcon } from "../../assets/img/clock.svg";
import { ReactComponent as BellIcon } from "../../assets/img/bell.svg";
import { ReactComponent as EyeIcon } from "../../assets/img/eye.svg";

import "./SignUp.css";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { username, email, password, confirmPassword } = this.state;

      if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
          const response = await axios.post(
            "https://leboncoin-api.herokuapp.com/api/user/sign_up",
            {
              email: email,
              username: username,
              password: password
            }
          );

          if (response.data.token) {
            this.props.setUser(response.data);
            this.props.history.push("/");
            console.log("Success, user created");
          } else {
            alert("an error occurred");
          }
        } else {
          console.log("the passwords are not similar");
        }
      } else {
        console.log("you're missing one field");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;

    return (
      <div className="wrapper">
        <div className="sign-up-page">
          <div className="sign-up-flex">
            <div className="sign-up-flex-left">
              <section>
                <h2>Pourquoi créer un compte ?</h2>
                <div className="flex-row">
                  <ClockIcon />
                  <div className="flex-row">
                    <p>Gagnez du temps</p>
                    <p>
                      Publiez vos annonces rapidement, avec vos informations
                      pré-remplies chaque fois que vous souhaitez déposer une
                      nouvelle annonce.
                    </p>
                  </div>
                </div>
                <div className="flex-row">
                  <BellIcon />
                  <div className="flex-row">
                    <p>Soyez les premiers informés</p>
                    <p>
                      Créez des alertes Immo ou Emploi et ne manquez jamais
                      l’annonce qui vous intéresse.
                    </p>
                  </div>
                </div>
                <div className="flex-row">
                  <EyeIcon />
                  <div className="flex-row">
                    <p>Visibilité</p>
                    <p>
                      Suivez les statistiques de vos annonces (nombre de fois où
                      votre annonce a été vue, nombre de contacts reçus).
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="sign-up-flex-right">
              <section>
                <h1>Créez un compte</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-item">
                    <label htmlFor="username">username *</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-item">
                    <label htmlFor="email">Adresse email *</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-item form-password">
                    <div className="form-item">
                      <label htmlFor="password">Mot de passe *</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-item">
                      <label htmlFor="confirmPassword">
                        Confirmer le mot de passe *
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-checkbox">
                    <input type="checkbox" name="newsletter" />
                    <label htmlFor="newsletter">
                      Je souhaite recevoir des offres des partenaires du site
                      leboncoin susceptibles de m’intéresser
                    </label>
                  </div>

                  <div className="form-checkbox">
                    <input type="checkbox" name="legal" />
                    <label htmlFor="legal">
                      "&nbsp;J'accepte les&nbsp;
                      <span>Conditions Générales de Vente</span>"
                    </label>
                  </div>

                  <button type="submit">Créer mon Compte Personnel</button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
