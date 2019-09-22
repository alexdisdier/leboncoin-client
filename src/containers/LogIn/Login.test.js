import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";

/**
 * Unit tests should be run in isolation;
 * Thus we shouldn't make any external calls to the server.
 * Mocking axios module
 * makes unit tests independent of the network
 */
jest.mock("axios");

jest.mock("../../Validation/Validation", () => "Validation");

describe("Login", () => {
  describe("api calls", () => {
    it("fetches Logins on #componentDidMount", () => {
      // const wrapper = shallow(<Login />);
      // expect(wrapper.state()).toHaveProperty("Login", {});
      // wrapper.instance().componentDidMount();
    });
  });
});

describe("Login", () => {
  it("render()", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="wrapper connection"
>
  <div
    className="sign-in-flex"
  >
    <section>
      <h1>
        Connexion
      </h1>
      <form
        className="form"
        onSubmit={[Function]}
      >
        <div
          className="form-item"
        >
          <label
            htmlFor="email"
          >
            Adresse email
          </label>
          <input
            name="email"
            onChange={[Function]}
            placeholder="mern@gmail.com"
            required={true}
            type="email"
            value=""
          />
        </div>
        <div
          className="form-item"
        >
          <div
            className="form-item"
          >
            <label
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              name="password"
              onChange={[Function]}
              required={true}
              style={
                Object {
                  "boxShadow": false,
                }
              }
              type="password"
              value=""
            />
          </div>
          <Validation
            isValid={true}
          />
        </div>
        <button
          type="submit"
        >
          Se connecter
        </button>
      </form>
      <div
        className="create-account-redirect"
      >
        <p>
          Vous n'avez pas de compte ?
        </p>
        <Link
          className="btn"
          replace={false}
          to="/sign_up"
        >
          Créer un compte
        </Link>
      </div>
    </section>
  </div>
</div>
`);
  });
});
