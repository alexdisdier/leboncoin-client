import React from "react";
import { shallow } from "enzyme";

import Offers from "./Offers";

describe("Offers", () => {
  it("render()", () => {
    const wrapper = shallow(<Offers />);
    expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <filters
    handleFilters={[Function]}
    maxPrice=""
    minPrice=""
    sort=""
    submitFilters={[Function]}
    title=""
  />
  <loading />
</Fragment>
`);
  });
});
