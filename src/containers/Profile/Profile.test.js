import React from "react";
import { shallow } from "enzyme";

import Profile from "./Profile";

jest.mock("../../components/Card/Card", () => "Card");
jest.mock("../../components/Loading/Loading", () => "Loading");

describe("Profile", () => {
  let props;

  beforeEach(() => {
    props = {
      getUser: jest.fn()
    };
  });

  it("renders the Section correctly", () => {
    props.getUser.mockReturnValueOnce("username");
    props.getUser.mockReturnValueOnce("email");

    const wrapper = shallow(<Profile {...props} />);
    expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <div
    className="wrapper"
  >
    <div
      className="ad-listing"
    >
      <h1>
        Votre profil
      </h1>
      <div
        className="profile-details"
      >
        <p>
          Username: 
        </p>
        <p>
          Email: 
        </p>
      </div>
      <Loading />
    </div>
  </div>
</Fragment>
`);
  });
});
