import React from 'react';
import Button from './Button/Button';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as MenuBtn } from '../../assets/img/menu-button.svg';
import { ReactComponent as CloseBtn } from '../../assets/img/close-button.svg';

import {
  ROUTE_SIGNUP,
  ROUTE_LOGIN,
  ROUTE_PROFILE,
  ROUTE_PUBLISH,
  ROUTE_OFFERS,
  ROUTE_HOME,
} from '../../constant/routes';

import './Header.css';

// const toggleEnums = {
//   0: 'hidden-xs',
//   1: 'menu-open',
// };

function Header(props) {
  const { token, username, toggleMenu, isToggle, logOut: propsLogOut } = props;

  let renderNav;

  const logOut = (
    <>
      <Button to={ROUTE_LOGIN} toggleMenu={toggleMenu}>
        Se connecter
      </Button>
      <Button to={ROUTE_SIGNUP} toggleMenu={toggleMenu}>
        Créer un compte
      </Button>
    </>
  );

  const logIn = (
    <>
      <Button to={ROUTE_PROFILE} toggleMenu={toggleMenu}>
        Hello {username}
      </Button>
      <button type="button" onClick={() => propsLogOut()}>
        Se déconnecter
      </button>
    </>
  );

  if (token) {
    renderNav = logIn;
  } else {
    renderNav = logOut;
  }

  return (
    <header className="header">
      <div className={`wrapper flex ${isToggle ? 'flex-xs' : ''}`}>
        <Button to={ROUTE_HOME}>
          <Logo />
        </Button>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <menu
          id="menu"
          className="show-xs"
          onClick={() => {
            toggleMenu();
          }}
        >
          {isToggle ? <CloseBtn /> : <MenuBtn />}
        </menu>
        <div className={`nav ${isToggle ? 'menu-open' : 'hidden-xs'}`}>
          <Button to={ROUTE_PUBLISH} toggleMenu={toggleMenu}>
            Déposer une annonce
          </Button>
          <div className="offers-link">
            <Button to={ROUTE_OFFERS} toggleMenu={toggleMenu}>
              offres
            </Button>
          </div>
          <div className="account-panel">{renderNav}</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
