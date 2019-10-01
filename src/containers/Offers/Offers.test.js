import React from "react";
import axios from "axios";
import { get, set, remove } from "js-cookie";
import { shallow } from "enzyme";

import Offers from "./Offers";

import domain from "../../assets/domain";

/**
 * Unit tests should be run in isolation;
 * Thus we shouldn't make any external calls to the server.
 * Mocking axios module
 * makes unit tests independent of the network
 */
jest.mock("axios");

jest.mock("js-cookie", () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn()
}));

jest.mock("../../components/Filters/Filters", () => "Filters");
jest.mock("../../components/Card/Card", () => "Card");
jest.mock("../../components/Pagination/Pagination", () => "Pagination");
jest.mock("../../components/Loading/Loading", () => "Loading");

describe("Offers", () => {
  describe("api calls", () => {
    beforeEach(() => {
      get.mockClear();
      set.mockClear();
      remove.mockClear();
    });

    it("fetches offers on #componentDidMount", done => {
      const wrapper = shallow(<Offers />);
      expect(wrapper.state()).toHaveProperty("offers", []);
      wrapper
        .instance()
        .componentDidMount()
        .then(() => {
          expect(axios.get).toHaveBeenCalled();
          expect(axios.get).toHaveBeenCalledWith(`${domain}/offer/with-count`);
          expect(wrapper.state()).toHaveProperty("offers", [
            {
              count: 1,
              offers: [
                {
                  __v: 0,
                  _id: "5c7ace2c3fe94a001750770b",
                  created: "2019-03-02T18:40:44.613Z",
                  creator: {
                    _id: "5c7a850dd4bf7a00174c015e",
                    account: { phone: "0600000000", username: "faker" }
                  },
                  description:
                    "I'll connect the mobile AI system, that should monitor the USB system!",
                  pictures: [],
                  price: 675,
                  title: "Handcrafted Soft Mouse"
                },
                {
                  __v: 0,
                  _id: "5c7ace2c3fe94a001750770b",
                  created: "2019-03-02T18:40:44.613Z",
                  creator: {
                    _id: "5c7a850dd4bf7a00174c015e",
                    account: { phone: "0600000000", username: "faker" }
                  },
                  description: "another product offer!",
                  pictures: [],
                  price: 100,
                  title: "Handcrafted Soft Mouse"
                }
              ]
            }
          ]);

          wrapper.setState({ title: "title" });

          const spyGoToPage = jest.spyOn(wrapper.instance(), "goToPage");
          const spySearchFilters = jest.spyOn(
            wrapper.instance(),
            "searchFilters"
          );

          wrapper.instance().forceUpdate();
          wrapper.instance().goToPage(1);

          expect(spyGoToPage).toHaveBeenCalledTimes(1);
          expect(spyGoToPage).toHaveBeenCalledWith(1);

          expect(spySearchFilters).toHaveBeenCalledTimes(1);
          expect(spySearchFilters).toHaveBeenCalledWith({
            maxPrice: "",
            minPrice: "",
            sort: "",
            title: "title"
          });

          done();
        });
    });

    it("handles filters", () => {
      const wrapper = shallow(<Offers />);

      wrapper.setState({
        maxPrice: "",
        minPrice: "",
        sort: "",
        title: ""
      });

      const spyHandleFilters = jest.spyOn(wrapper.instance(), "handleFilters");

      wrapper.instance().forceUpdate();
      wrapper.instance().handleFilters({ target: { value: "" } });

      expect(spyHandleFilters).toHaveBeenCalledTimes(1);
      expect(remove).toHaveBeenCalled();
    });

    it("submit filters", () => {
      const wrapper = shallow(<Offers />);

      wrapper.setState({
        maxPrice: "",
        minPrice: "",
        sort: "",
        title: "title"
      });

      const spySubmitFilters = jest.spyOn(wrapper.instance(), "submitFilters");
      const spySearchFilters = jest.spyOn(wrapper.instance(), "searchFilters");

      wrapper.instance().forceUpdate();
      wrapper.instance().submitFilters({ preventDefault() {} });

      expect(spySubmitFilters).toHaveBeenCalledTimes(1);
      expect(spySearchFilters).toHaveBeenCalledTimes(1);
      expect(spySearchFilters).toHaveBeenCalledWith({
        maxPrice: "",
        minPrice: "",
        sort: "",
        title: "title"
      });
    });

    it("clear filters  & cookies", () => {
      const wrapper = shallow(<Offers />);

      wrapper.setState({
        maxPrice: "",
        minPrice: "",
        sort: "",
        title: ""
      });

      const spySubmitFilters = jest.spyOn(wrapper.instance(), "submitFilters");
      const spySearchFilters = jest.spyOn(wrapper.instance(), "searchFilters");

      wrapper.instance().forceUpdate();
      wrapper.instance().submitFilters({ preventDefault() {} });

      expect(spySubmitFilters).toHaveBeenCalledTimes(1);
      expect(spySearchFilters).toHaveBeenCalledTimes(1);
      expect(remove).toHaveBeenCalled();
    });
  });

  describe("render()", () => {
    const wrapper = shallow(<Offers />);

    it("rendres a loading component", () => {
      wrapper.setState({ isLoading: true });

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

    it("renders no cards", () => {
      wrapper.setState({ isLoading: true, error: "error" });
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
</Fragment>
`);
    });

    it("renders the offers cards", () => {
      wrapper.setState({ isLoading: false, error: null });

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
  <div
    className="wrapper Offerspage"
  >
    <ul>
      <Card
        key="0"
      />
    </ul>
  </div>
  <Pagination
    currentPage={1}
    goToPage={[Function]}
    totalPages={NaN}
  />
</Fragment>
`);
    });
  });
});
