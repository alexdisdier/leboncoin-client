import React from "react";
import Button from "./Button/Button";

import "./Header.css";

const header = props => {
  return (
    <header className="header">
      <div className="wrapper flex">
        <a href="https://alexdisdier.fr">logo</a>
        <Button to="/publish">Déposer une annonce</Button>
        <Button to="/">offres</Button>
        <div className="account-panel">
          <Button to="/login">Se connecter</Button>
          <Button to="/signup">Créer un compte</Button>
        </div>
      </div>
    </header>
  );
};

export default header;
