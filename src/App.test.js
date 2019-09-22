import React from "react";
import { shallow } from "enzyme";

import App from "./app";

jest.mock("history/createBrowserHistory", () => () => "history");
jest.mock("react-router-dom", () => ({
  Router: "Router",
  Route: "Route",
  Switch: "Switch",
  Redirect: "Redirect"
}));

jest.mock("./components/ScrollToTop", () => "ScrollToTop");
jest.mock("./components/Header/Header", () => "Header");
jest.mock("./containers/Home/Home", () => "Home");
jest.mock("./containers/LogIn/LogIn", () => "LogIn");
jest.mock("./containers/Offer/Offer", () => "Offer");
jest.mock("./containers/Offers/Offers", () => "Offers");
jest.mock("./containers/Profile/Profile", () => "Profile");
jest.mock("./containers/Publish/Publish", () => "Publish");
jest.mock("./containers/SignUp/SignUp", () => "SignUp");

describe("<App />", () => {
  it("should render all routes", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchInlineSnapshot(`
<Component>
  <ScrollToTop>
    <Header
      isToggle={false}
      logOut={[Function]}
      toggleMenu={[Function]}
      token={null}
      username={null}
    />
    <Switch>
      <Route
        exact={true}
        path="/"
        render={[Function]}
      />
      <Route
        exact={true}
        path="/offres"
        render={[Function]}
      />
      <Route
        path="/offer/:id"
        render={[Function]}
      />
      <Route
        path="/sign_up"
        render={[Function]}
      />
      <Route
        path="/log_in"
        render={[Function]}
      />
      <Route
        path="/publish"
        render={[Function]}
      />
      <Route
        path="/profile"
        render={[Function]}
      />
    </Switch>
  </ScrollToTop>
</Component>
`);
  });
});
