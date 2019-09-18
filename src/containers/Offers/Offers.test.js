import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { mount, shallow } from "enzyme";

import Offers from "./Offers";

import domain from "../../assets/domain";

jest.mock("../../components/Filters/Filters", () => "Filters");
jest.mock("../../components/Card/Card", () => "Card");
jest.mock("../../components/Pagination/Pagination", () => "Pagination");
jest.mock("../../components/Loading/Loading", () => "Loading");

const mock = new MockAdapter(axios);

const mockData = {
  data: {
    count: 1,
    offers: [
      {
        description:
          "I'll connect the mobile AI system, that should monitor the USB system!",
        price: 675,
        pictures: [],
        _id: "5c7ace2c3fe94a001750770b",
        title: "Handcrafted Soft Mouse",
        creator: {
          account: { phone: "0600000000", username: "faker" },
          _id: "5c7a850dd4bf7a00174c015e"
        },
        created: "2019-03-02T18:40:44.613Z",
        __v: 0
      },
      {
        description: "another product offer!",
        price: 100,
        pictures: [],
        _id: "5c7ace2c3fe94a001750770b",
        title: "Handcrafted Soft Mouse",
        creator: {
          account: { phone: "0600000000", username: "faker" },
          _id: "5c7a850dd4bf7a00174c015e"
        },
        created: "2019-03-02T18:40:44.613Z",
        __v: 0
      }
    ]
  }
};

describe("Offers", () => {
  it("should render a list of offers", async () => {
    const wrapper = shallow(<Offers />);

    await mock.onGet(`${domain}/offer/with-count`).reply(200, mockData);
    await axios.get(`${domain}/offer/with-count`).then(function(response) {
      // console.log(response.data);
      wrapper.setState({
        offers: response.data.offers,
        count: response.data.count,
        totalPages: Math.ceil(response.data.count / 10)
      });
    });

    expect(wrapper.instance().state.data).toEqual(undefined);

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
