import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

jest.mock("./Button/Button", () => "Button");

describe("Header", () => {
  let props;

  beforeEach(() => {
    props = {
      token: "token",
      username: "username",
      toggleMenu: jest.fn(),
      isToggle: false
    };
  });

  describe("actions", () => {
    it("toggles the menu", () => {
      const wrapper = shallow(<Header {...props} />);
      wrapper
        .find("menu")
        .at(0)
        .simulate("click");

      expect(props.toggleMenu).toHaveBeenCalledTimes(1);
    });
  });

  describe("render()", () => {
    it("renders the Header correctly", () => {
      const wrapper = shallow(<Header {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
<header
  className="header"
>
  <div
    className="wrapper flex "
  >
    <Button
      to="/"
    >
      <ReactComponent />
    </Button>
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
      <Button
        to="/publish"
        toggleMenu={[MockFunction]}
      >
        Déposer une annonce
      </Button>
      <Button
        to="/offres"
        toggleMenu={[MockFunction]}
      >
        offres
      </Button>
      <div
        className="account-panel"
      >
        <Button
          to="/profile"
          toggleMenu={[MockFunction]}
        >
          Hello 
          username
        </Button>
        <button
          onClick={[Function]}
        >
          Se déconnecter
        </button>
      </div>
    </div>
  </div>
</header>
`);
    });
  });
});
