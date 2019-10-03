import React from "react";
import { shallow } from "enzyme";

import ScrollToTop from "./ScrollToTop";

jest.mock("react-router-dom", () => ({
  withRouter: x => x
}));

const windowScrollTo = jest.fn();
global.scrollTo = () => windowScrollTo();

describe("ScrollToTop", () => {
  let props;

  beforeEach(() => {
    windowScrollTo.mockClear();

    props = {
      location: {
        pathname: "pathname"
      },
      children: <div>child</div>
    };
  });

  it("calls window.scrollTo if pathname is different", () => {
    const wrapper = shallow(<ScrollToTop {...props} />);
    wrapper.setProps({ location: { pathname: "new-pathname" } });
    expect(windowScrollTo).toHaveBeenCalledTimes(1);
  });

  it("renders props children", () => {
    const wrapper = shallow(<ScrollToTop {...props} />);
    expect(windowScrollTo).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchInlineSnapshot(`
<div>
  child
</div>
`);
  });
});
