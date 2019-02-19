import React, { Component } from "react";
import axios from "axios";

import "./SignUp.css";

const urlPost = "https://leboncoin-api.herokuapp.com/api/user/sign_up";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  createAccount(newUser) {
    axios
      .post(urlPost, newUser)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    const stateToUpdate = {};

    stateToUpdate[name] = value;

    this.setState(stateToUpdate);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, email, password, confirmPassword } = this.state;

    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        this.createAccount({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password
        });
        console.log("Success");
      } else {
        console.log("the passwords are not similar");
      }
    } else {
      console.log("you're missing one field");
    }
  };

  render() {
    const clockSvg = (
      <svg viewBox="0 0 24 24" data-name="Calque 1" focusable="false">
        <path d="M17.24 15.07l-4.64-2.76V6.86a.85.85 0 0 0-.86-.86h-.08a.85.85 0 0 0-.86.86v5.67a1.2 1.2 0 0 0 .59 1l5 3a.86.86 0 1 0 .87-1.48z" />
        <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm0 21.6a9.6 9.6 0 1 1 9.6-9.6 9.6 9.6 0 0 1-9.6 9.6z" />
      </svg>
    );

    const bellSvg = (
      <svg viewBox="0 0 24 24" data-name="Calque 1" focusable="false">
        <path d="M12 24a2.49 2.49 0 0 0 2.51-2.46h-5A2.48 2.48 0 0 0 12 24zM21.13 18.2l-1.61-1.58v-6.16c0-3.78-2.06-6.94-5.64-7.78v-.83a1.88 1.88 0 0 0-3.76 0v.83c-3.59.84-5.63 4-5.63 7.78v6.16L2.87 18.2a1.23 1.23 0 0 0 .88 2.11h16.49a1.23 1.23 0 0 0 .89-2.11z" />
      </svg>
    );

    const eyeSvg = (
      <svg viewBox="0 0 24 24" data-name="Calque 1" focusable="false">
        <path d="M12 8.6A3.33 3.33 0 0 0 8.73 12 3.33 3.33 0 0 0 12 15.4a3.33 3.33 0 0 0 3.27-3.4A3.33 3.33 0 0 0 12 8.6z" />
        <path d="M12 3.5A12.92 12.92 0 0 0 0 12a12.92 12.92 0 0 0 12 8.5A12.92 12.92 0 0 0 24 12a12.92 12.92 0 0 0-12-8.5zm0 14.17A5.56 5.56 0 0 1 6.55 12 5.56 5.56 0 0 1 12 6.33 5.56 5.56 0 0 1 17.45 12 5.56 5.56 0 0 1 12 17.67z" />
      </svg>
    );

    const { username, email, password, confirmPassword } = this.state;

    return (
      <div className="wrapper">
        <div className="sign-up-page">
          <div className="sign-up-flex">
            <div className="sign-up-flex-left">
              <section>
                <h2>Pourquoi créer un compte ?</h2>
                <div className="flex-row">
                  {clockSvg}
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
                  {bellSvg}
                  <div className="flex-row">
                    <p>Soyez les premiers informés</p>
                    <p>
                      Créez des alertes Immo ou Emploi et ne manquez jamais
                      l’annonce qui vous intéresse.
                    </p>
                  </div>
                </div>
                <div className="flex-row">
                  {eyeSvg}
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
