import React from "react";
import Button from "./Button/Button";

import "./Header.css";

const header = props => {
  const { token, username } = props;
  const logOut = (
    <>
      <Button to="/login">Se connecter</Button>
      <Button to="/signup">Créer un compte</Button>
    </>
  );

  const logIn = (
    <>
      <span>{username} est connecté</span>
      <button onClick={() => props.endSession()}>Se déconnecter</button>
    </>
  );

  let display;

  if (token !== null && username !== null) {
    display = logIn;
  } else {
    display = logOut;
  }

  return (
    <header className="header">
      <div className="wrapper flex">
        <a href="https://alexdisdier.fr">logo</a>
        <Button to="/publish">Déposer une annonce</Button>
        <Button to="/">offres</Button>
        <div className="account-panel">{display}</div>
      </div>
    </header>
  );
};

export default header;
