import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

jest.mock("react-router-dom", () => ({
  Link: "Link"
}));

describe("Button", () => {
  let props;

  beforeEach(() => {
    props = {
      to: "to",
      children: "children",
      toggleMenu: jest.fn()
    };
  });

  describe("action", () => {
    it("toggles the menu", () => {
      // const wrapper = shallow(<Button {...props} />);
    });
  });

  describe("render()", () => {
    it("renders the Button correctly", () => {
      const wrapper = shallow(<Button {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
<Link
  className="btn to"
  to="to"
>
  children
</Link>
`);
    });
  });
});
