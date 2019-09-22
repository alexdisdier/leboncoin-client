import React from "react";
import { shallow } from "enzyme";

import Pagination from "./Pagination";

describe("Pagination", () => {
  let props;

  props = {
    totalPages: 4,
    currentPage: 2,
    goToPage: jest.fn(),
    windowWidth: 600
  };

  describe("actions", () => {
    it("renders the previous page", () => {
      const wrapper = shallow(<Pagination {...props} />);

      wrapper
        .find("span")
        .at(0)
        .simulate("click");

      expect(props.goToPage).toHaveBeenCalledTimes(1);
      expect(props.goToPage).toHaveBeenCalledWith(1);
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
