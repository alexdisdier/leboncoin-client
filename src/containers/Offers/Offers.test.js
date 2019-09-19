import React from "react";
import axios from "axios";
import { shallow } from "enzyme";

import Offers from "./Offers";

import domain from "../../assets/domain";

jest.mock("axios");

jest.mock("../../components/Filters/Filters", () => "Filters");
jest.mock("../../components/Card/Card", () => "Card");
jest.mock("../../components/Pagination/Pagination", () => "Pagination");
jest.mock("../../components/Loading/Loading", () => "Loading");

describe("Offers", () => {
  // it("calls componentDidMount", () => {
  //   jest.spyOn(Offers.prototype, "componentDidMount");
  //   const wrapper = shallow(<Offers />);
  //   expect(Offers.prototype.componentDidMount.mock.calls.length).toBe(1);
  // });

  it("fetches a list of offers", async () => {
    const getSpy = await jest.spyOn(axios, "get");
    const wrapper = shallow(<Offers />);

    expect(getSpy).toBeCalled();
    expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <Filters
    handleFilters={[Function]}
    maxPrice=""
    minPrice=""
    sort=""
    submitFilters={[Function]}
    title=""
  />
  <Loading />
</Fragment>
`);
  });

  it("should render a list of offers", async () => {
    const wrapper = shallow(<Offers />);

    expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <Filters
    handleFilters={[Function]}
    maxPrice=""
    minPrice=""
    sort=""
    submitFilters={[Function]}
    title=""
  />
  <Loading />
</Fragment>
`);
  });

  it("render()", () => {
    const wrapper = shallow(<Offers />);
    expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <Filters
    handleFilters={[Function]}
    maxPrice=""
    minPrice=""
    sort=""
    submitFilters={[Function]}
    title=""
  />
  <Loading />
</Fragment>
`);
  });
});
