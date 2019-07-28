import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("Header", () => {
  it("renders the Header correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchInlineSnapshot(`
<header
  className="header"
>
  <div
    className="wrapper flex "
  >
    <button
      to="/"
    >
      <ReactComponent />
    </button>
    <menu
      className="show-xs"
      id="menu"
      onClick={[Function]}
    >
      <ReactComponent />
    </menu>
    <div
      className="nav hidden-xs"
    >
      <button
        to="/publish"
      >
        Déposer une annonce
      </button>
      <button
        to="/offres"
      >
        offres
      </button>
      <div
        className="account-panel"
      >
        <button
          to="/log_in"
        >
          Se connecter
        </button>
        <button
          to="/sign_up"
        >
          Créer un compte
        </button>
      </div>
    </div>
  </div>
</header>
`);
  });
});
