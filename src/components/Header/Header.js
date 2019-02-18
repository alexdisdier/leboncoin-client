import React from "react";
import Button from "./Button/Button";

import "./Header.css";

const header = props => {
  return (
    <header className="header">
      <div className="wrapper flex">
        <a href="https://alexdisdier.fr">logo</a>
        <Button to="/advertise">Déposer une annonce</Button>
        <Button to="/home">offres</Button>
        <div className="account-panel">
          <Button to="/login">Se connecter</Button>
          <Button to="/account">Créer un compte</Button>
        </div>
      </div>
    </header>
  );
};

export default header;
