import React from "react";
import { shallow } from "enzyme";

import Offer from "./Offer";

import domain from "../../assets/domain";

/**
 * Unit tests should be run in isolation;
 * Thus we shouldn't make any external calls to the server.
 * Mocking axios module
 * makes unit tests independent of the network
 */
jest.mock("axios");

jest.mock("react-responsive-carousel", () => "Carousel");

describe("Offers", () => {
  describe("api calls", () => {
    it("fetches offers on #componentDidMount", () => {
      const wrapper = shallow(<Offer />);
      expect(wrapper.state()).toHaveProperty("offer", {});
      wrapper.instance().componentDidMount();
    });
  });
});

describe("Offer", () => {
  it("render()", () => {
    const wrapper = shallow(<Offer />);
    expect(wrapper).toMatchInlineSnapshot(`""`);
  });
});
