import React from "react";
import { shallow } from "enzyme";

import Error from "./Error";

describe("Error", () => {
  let props;

  beforeEach(() => {
    props = {
      error: "error"
    };
  });
  it("renders an error", () => {
    const wrapper = shallow(<Error {...props} />);
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
    <span>
      error
    </span>
  </div>
</div>
`);
  });
});
