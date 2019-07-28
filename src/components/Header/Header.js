import React from "react";
import Button from "./Button/Button";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as MenuBtn } from "../../assets/img/menu-button.svg";
import { ReactComponent as CloseBtn } from "../../assets/img/close-button.svg";

import "./Header.css";

function Header(props) {
  const { token, username } = props;

  let renderNav;

  const logOut = (
    <>
      <Button to="/log_in" toggleMenu={props.toggleMenu}>
        Se connecter
      </Button>
      <Button to="/sign_up" toggleMenu={props.toggleMenu}>
        Créer un compte
      </Button>
    </>
  );

  const logIn = (
    <>
      <Button to="/profile" toggleMenu={props.toggleMenu}>
        Hello {username}
      </Button>
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
      <div className={`wrapper flex ${props.isToggle ? "flex-xs" : ""}`}>
        <Button to="/">
          <Logo />
        </Button>
        <menu
          id="menu"
          className="show-xs"
          onClick={() => {
            props.toggleMenu();
          }}
        >
          {props.isToggle ? <CloseBtn /> : <MenuBtn />}
        </menu>
        <div className={`nav ${props.isToggle ? "menu-open" : "hidden-xs"}`}>
          <Button to="/publish" toggleMenu={props.toggleMenu}>
            Déposer une annonce
          </Button>
          <Button to="/offres" toggleMenu={props.toggleMenu}>
            offres
          </Button>
          <div className="account-panel">{renderNav}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
