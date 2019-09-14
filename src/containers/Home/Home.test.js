import React from "react";
import { shallow } from "enzyme";

import Home from "./Home";

describe("Home", () => {
  it("render()", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="wrapper"
>
  <div
    className="card"
    style={
      Object {
        "display": "block",
      }
    }
  >
    <h1>
      Bienvenue sur mon clone du boncoin
    </h1>
    <div
      className="card-wrapper"
    >
      <div
        className="card-left"
        style={
          Object {
            "display": "block",
          }
        }
      >
        <section>
          <h2>
            Front End 
          </h2>
          <div
            className="flex-row speed"
          >
            <div
              className="flex-column"
            >
              <p>
                Technologies utilisées
              </p>
              <ul>
                <li>
                  React
                </li>
                <li>
                  React Router Dom
                </li>
                <li>
                  Axios
                </li>
                <li>
                  Cloudinary
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex-row"
          >
            <div
              className="flex-column"
            >
              <p>
                Fonctionalités
              </p>
              <ul
                className="p-20"
              >
                <li>
                  Afficher toutes
                   
                  <button
                    to="/offres"
                  >
                    les offres
                  </button>
                   avec un componsant loading en attendant le chargement.
                </li>
                <li>
                  Afficher une offre spécifique.
                </li>
                <li>
                  Filtres de recherches d'offre
                </li>
                <li>
                  Pagination
                </li>
                <li>
                  Cookies implémentés pour sauvegarder les filtres de recherche
                </li>
                <li>
                  <button
                    to="/sign_up"
                  >
                    Créer un compte
                  </button>
                   
                  d'utilisateur
                </li>
                <li>
                  <button
                    to="/sign_up"
                  >
                    Se connecter
                  </button>
                   à son compte
                </li>
                <li>
                  <button
                    to="/publish"
                  >
                    Publier
                  </button>
                   une annonce avec Cloudinary
                </li>
                <li>
                  <button
                    to="/profile"
                  >
                    Voir son profile d'utilisateur
                  </button>
                   
                  avec les annonces que l'on a publié.
                </li>
                <li>
                  Possibilité d'effacer ses annonces.
                </li>
                <li>
                  Cookies implémentés pour reconnaître l'utilisateur
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex-row"
          >
            <div
              className="flex-column"
            >
              <p>
                Voir le code source →
                <a
                  href="https://github.com/alexdisdier/leboncoin-client"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                   
                  Github
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div
        className="sign-up-flex-left"
        style={
          Object {
            "display": "block",
          }
        }
      >
        <section>
          <h2>
            Back End
          </h2>
          <div
            className="flex-row speed"
          >
            <div
              className="flex-column"
            >
              <p>
                Technologies utilisées
              </p>
              <ul>
                <li>
                  Express
                </li>
                <li>
                  Express Router
                </li>
                <li>
                  MongoDb
                </li>
                <li>
                  Mongoose
                </li>
                <li>
                  Heroku
                </li>
                <li>
                  Cloudinary
                </li>
                <li>
                  mLab
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex-row"
          >
            <div
              className="flex-column"
            >
              <p>
                Fonctionalités
              </p>
              <ul>
                <li>
                  Models pour les utilisateurs et les annonces (offres)
                </li>
                <li>
                  Routes CRUD pour les utilisateurs et les annonces (offres)
                </li>
              </ul>
            </div>
          </div>
          <div
            className="flex-row"
          >
            <div
              className="flex-column"
            >
              <p>
                Voir le code source →
                <a
                  href="https://github.com/alexdisdier/leboncoin-api"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                   
                  Github
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
`);
  });
});
