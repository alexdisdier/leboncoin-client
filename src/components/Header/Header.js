import React from "react";
import Button from "./Button/Button";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import "./Header.css";

const header = props => {
  const { token, username } = props;

  let renderNav;

  const logOut = (
    <>
      <Button to="/leboncoin-client/log_in">Se connecter</Button>
      <Button to="/leboncoin-client/sign_up">Créer un compte</Button>
    </>
  );

  const logIn = (
    <>
      <Button to="/leboncoin-client/profile">Hello {username}</Button>
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
        <Button to="/leboncoin-client">
          <Logo />
        </Button>
        <Button to="/leboncoin-client/publish">Déposer une annonce</Button>
        <Button to="/leboncoin-client/offres">offres</Button>
        <div className="account-panel">{renderNav}</div>
      </div>
    </header>
  );
};

export default header;
