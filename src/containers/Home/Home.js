import React from 'react';
import Button from '../../components/Header/Button/Button';

import {
  ROUTE_OFFERS,
  ROUTE_SIGNUP,
  ROUTE_PUBLISH,
  ROUTE_PROFILE,
} from '../../constant/routes';

import './Home.css';

const home = () => (
  <div className="wrapper">
    <div className="card" style={{ display: 'block' }}>
      <h1>Bienvenue sur mon clone du boncoin</h1>
      <div className="card-wrapper">
        <div className="card-left" style={{ display: 'block' }}>
          <section>
            <h2>Front End </h2>
            <div className="flex-row speed">
              <div className="flex-column">
                <p>Technologies utilisées</p>
                <ul>
                  <li>React</li>
                  <li>React Router Dom</li>
                  <li>Axios</li>
                  <li>Cloudinary</li>
                </ul>
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-column">
                <p>Fonctionalités</p>
                <ul className="p-20">
                  <li>
                    Afficher toutes{' '}
                    <Button to={ROUTE_OFFERS}>les offres</Button> avec un
                    componsant loading en attendant le chargement.
                  </li>
                  <li>Afficher une offre spécifique.</li>
                  <li>Filtres de recherches d&apos;offre</li>
                  <li>Pagination</li>
                  <li>
                    Cookies implémentés pour sauvegarder les filtres de
                    recherche
                  </li>
                  <li>
                    <Button to={ROUTE_SIGNUP}>Créer un compte</Button>{' '}
                    d&apos;utilisateur
                  </li>
                  <li>
                    <Button to={ROUTE_SIGNUP}>Se connecter</Button> à son compte
                  </li>
                  <li>
                    <Button to={ROUTE_PUBLISH}>Publier</Button> une annonce avec
                    Cloudinary
                  </li>
                  <li>
                    <Button to={ROUTE_PROFILE}>
                      Voir son profile d&apos;utilisateur
                    </Button>{' '}
                    avec les annonces que l&apos;on a publié.
                  </li>
                  <li>Possibilité d&apos;effacer ses annonces.</li>
                  <li>
                    Cookies implémentés pour reconnaître l&apos;utilisateur
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-column">
                <p>
                  Voir le code source →
                  <a
                    href="https://github.com/alexdisdier/leboncoin-client"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {' '}
                    Github
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="sign-up-flex-left" style={{ display: 'block' }}>
          <section>
            <h2>Back End</h2>
            <div className="flex-row speed">
              <div className="flex-column">
                <p>Technologies utilisées</p>
                <ul>
                  <li>Express</li>
                  <li>Express Router</li>
                  <li>MongoDb</li>
                  <li>Mongoose</li>
                  <li>Heroku</li>
                  <li>Cloudinary</li>
                  <li>mLab</li>
                </ul>
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-column">
                <p>Fonctionalités</p>
                <ul>
                  <li>Models pour les utilisateurs et les annonces (offres)</li>
                  <li>
                    Routes CRUD pour les utilisateurs et les annonces (offres)
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-row">
              <div className="flex-column">
                <p>
                  Voir le code source →
                  <a
                    href="https://github.com/alexdisdier/leboncoin-api"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {' '}
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
);

export default home;
