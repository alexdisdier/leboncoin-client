import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import domain from '../../assets/domain';
import { getByTestId } from '../../utils';

import LogIn from './LogIn';

jest.mock('../../Validation/Validation', () => 'Validation');

const loginSuccessMock = {
  token: '123456789'
};
// const loginFailsMock = {
//   message: 'wrong password'
// };

describe('LogIn', () => {
  let mock;
  let props;

  beforeEach(() => {
    mock = new MockAdapter(axios);

    props = {
      history: {
        push: jest.fn()
      },
      setUser: jest.fn()
    };
  });

  afterEach(() => {
    mock.restore();
    mock.reset();
  });

  describe('actions', () => {
    it('logs in', done => {
      const wrapper = shallow(<LogIn {...props} />);
      const emailEvent = {
        target: { name: 'email', value: 'hello@gmail.com' }
      };
      const passwordEvent = { target: { name: 'password', value: 'world' } };

      getByTestId(wrapper, 'input-email').simulate('change', emailEvent);
      getByTestId(wrapper, 'input-password').simulate('change', passwordEvent);
      getByTestId(wrapper, 'login').simulate('click', {
        preventDefault: () => {}
      });

      const header = {
        email: wrapper.state('email'),
        password: wrapper.state('password')
      };

      mock.onPost(`${domain}/log_in`, header).reply(200, loginSuccessMock);

      // expect(props.setUser).toHaveBeenCalled();

      axios.get(`${domain}/log_in`, header).then(function(response) {
        console.log(response.data);
      });

      // console.log(wrapper.debug());
      // expect(wrapper.state()).toHaveProperty("LogIn", {});
      // wrapper.instance().componentDidMount();
      done();
    });
    it('navigates to sign up for an account', () => {
      const wrapper = shallow(<LogIn {...props} />);
      getByTestId(wrapper, 'go-to-signup').simulate('click');
      expect(props.history.push).toHaveBeenCalledWith('/sign_up');
    });
  });

  it('render()', () => {
    const wrapper = shallow(<LogIn {...props} />);
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
            data-testid="input-email"
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
              data-testid="input-password"
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
          data-testid="login"
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
        <button
          className="btn"
          data-testid="go-to-signup"
          onClick={[Function]}
        >
          Créer un compte
        </button>
      </div>
    </section>
  </div>
</div>
`);
  });
});
