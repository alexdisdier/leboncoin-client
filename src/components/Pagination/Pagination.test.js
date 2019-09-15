import React from "react";
import { shallow } from "enzyme";

import Pagination from "./Pagination";

describe("Pagination", () => {
  let props;

  props = {
    totalPages: 4,
    currentPage: 2,
    goToPage: 3,
    windowWidth: 600
  };

  describe("actions", () => {
    it("renders the previous page", () => {
      const wrapper = shallow(<Pagination {...props} />);

      wrapper
        .find("span")
        .at(0)
        .simulate("onClick");
    });
  });

  describe("render()", () => {
    it("render()", () => {
      const wrapper = shallow(<Pagination {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
<div
  className="pagination"
>
  <span
    key="0"
    onClick={[Function]}
  >
    <ReactComponent />
  </span>
  <span
    key="1"
  >
    2
  </span>
  <span
    key="2"
    onClick={[Function]}
  >
    <ReactComponent />
  </span>
</div>
`);
    });
  });
});
