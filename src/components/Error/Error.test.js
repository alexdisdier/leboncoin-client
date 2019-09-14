import React from "react";
import { shallow } from "enzyme";

import Error from "./Error";

describe("Error", () => {
  it("render()", () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="absolute"
  id="error-loading"
>
  <div
    className="relative"
  >
    <img
      alt="cloud warning error"
      src="Cloud_Warning.svg"
    />
    <span />
  </div>
</div>
`);
  });
});
