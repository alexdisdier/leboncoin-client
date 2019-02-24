import React from "react";
import Button from "./Button/Button";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import "./Header.css";

const header = props => {
  const { token, username } = props;

  let renderNav;

  const logOut = (
    <>
      <Button to="/log_in">Se connecter</Button>
      <Button to="/sign_up">Créer un compte</Button>
    </>
  );

  const logIn = (
    <>
      <Button to="/profile">Hello {username}</Button>
      <button onClick={() => props.logOut()}>Se déconnecter</button>
    </>
  );

  if (token) {
    renderNav = logIn;
  } else {
    renderNav = logOut;
  }

  return (
    <header className="header">
      <div className="wrapper flex">
        <a href="https://alexdisdier.fr">
          <Logo />
        </a>
        <Button to="/publish">Déposer une annonce</Button>
        <Button to="/offres">offres</Button>
        <div className="account-panel">{renderNav}</div>
      </div>
    </header>
  );
};

export default header;
