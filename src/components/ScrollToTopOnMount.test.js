import React from "react";
import { shallow } from "enzyme";

import ScrollToTopOnMount from "./ScrollToTopOnMount";

describe("ScrollToTopOnMount", () => {
  it("should render null", () => {
    const wrapper = shallow(<ScrollToTopOnMount />);
    expect(wrapper).toMatchInlineSnapshot(`""`);
  });
});
