import React from "react";
import { shallow } from "enzyme";

import Offer from "./Offer";

describe("Offer", () => {
  it("render()", () => {
    const wrapper = shallow(<Offer />);
    expect(wrapper).toMatchInlineSnapshot(`""`);
  });
});
