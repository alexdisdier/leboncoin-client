import React from "react";
import { shallow } from "enzyme";

import Card from "./Card";

jest.mock("react-lines-ellipsis", () => "LinesEllipsis");

jest.mock("date-fns", () => ({
  format: date => "23/09/2019"
}));

describe("Card", () => {
  let props;

  beforeEach(() => {
    props = {
      id: "id",
      title: "title",
      price: 15,
      description: "description",
      date: "date",
      pictures: ["test"],
      isDelete: jest.fn(),
      deleteOffer: jest.fn()
    };
  });
  it("deletes an offer", () => {
    const wrapper = shallow(<Card {...props} />);
    wrapper
      .find("#delete-ad")
      .at(0)
      .simulate("click");

    expect(props.deleteOffer).toHaveBeenCalledTimes(1);
  });

  it("render()", () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<li
  className="card"
>
  <span
    id="delete-ad"
    onClick={[Function]}
  >
    ⤫
  </span>
  <Link
    replace={false}
    to="/offer/id"
  >
    <div
      className="card-body"
    >
      <div
        className="card-img"
      >
        <div
          className="img"
          style={
            Object {
              "backgroundImage": "url(undefined)",
              "backgroundPosition": "center",
              "backgroundRepeat": "no-repeat",
              "backgroundSize": "contain",
            }
          }
        />
      </div>
      <div
        className="card-content"
      >
        <div
          className="card-top"
        >
          <h3
            className="card-title"
          >
            title
          </h3>
          <span
            className="card-price"
          >
            15
             €
          </span>
        </div>
        <div
          className="card-bottom"
        />
        <LinesEllipsis
          basedOn="letters"
          ellipsis="..."
          maxLine="1"
          text="description"
          trimRight={true}
        />
        <span
          className="date-fns"
        >
          23/09/2019
        </span>
      </div>
    </div>
  </Link>
</li>
`);
  });
});
