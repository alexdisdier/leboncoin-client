import React from 'react';
import { shallow } from 'enzyme';

import SignUp from './SignUp';

import { getByTestId } from '../../utils';

describe('SignUp', () => {
  describe('actions', () => {
    it('creates an account', () => {
      const wrapper = shallow(<SignUp />);
      const spyHandleSubmit = jest.spyOn(wrapper.instance(), 'handleSubmit');

      const details = {
        username: {
          target: { name: 'username', value: 'tester' },
        },
        email: {
          target: {
            name: 'email',
            value: 'tester@email.com',
          },
        },
        password: {
          target: {
            name: 'password',
            value: '123456789',
          },
        },
      };

      getByTestId(wrapper, 'input-username').simulate(
        'change',
        details.username
      );
      getByTestId(wrapper, 'input-password').simulate(
        'change',
        details.password
      );
      getByTestId(wrapper, 'input-confirm-password').simulate(
        'change',
        details.password
      );
      getByTestId(wrapper, 'checkbox-legal').simulate('click');

      getByTestId(wrapper, 'submit-form').simulate('submit', {
        preventDefault: () => {},
      });

      expect(spyHandleSubmit).toHaveBeenCalled();
    });
  });

  describe('render()', () => {
    it('render full component', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper).toMatchInlineSnapshot(`
        <div
          className="wrapper"
        >
          <div
            className="sign-up-page"
          >
            <div
              className="sign-up-flex"
            >
              <div
                className="sign-up-flex-left"
              >
                <section>
                  <h2>
                    Pourquoi créer un compte ?
                  </h2>
                  <div
                    className="flex-row speed"
                  >
                    <div>
                      <ForwardRef(SvgClock) />
                    </div>
                    <div
                      className="flex-column"
                    >
                      <p>
                        Gagnez du temps
                      </p>
                      <p>
                        Publiez vos annonces rapidement, avec vos informations pré-remplies chaque fois que vous souhaitez déposer une nouvelle annonce.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-row"
                  >
                    <div>
                      <ForwardRef(SvgBell) />
                    </div>
                    <div
                      className="flex-column"
                    >
                      <p>
                        Soyez les premiers informés
                      </p>
                      <p>
                        Créez des alertes Immo ou Emploi et ne manquez jamais l"annonce qui vous intéresse.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex-row"
                  >
                    <div>
                      <ForwardRef(SvgEye) />
                    </div>
                    <div
                      className="flex-column"
                    >
                      <p>
                        Visibilité
                      </p>
                      <p>
                        Suivez les statistiques de vos annonces (nombre de fois où votre annonce a été vue, nombre de contacts reçus).
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="sign-up-flex-right connection"
              >
                <section>
                  <h1>
                    Créez un compte
                  </h1>
                  <form
                    className="form"
                    data-testid="submit-form"
                    onSubmit={[Function]}
                  >
                    <div
                      className="form-item"
                    >
                      <label
                        htmlFor="username"
                      >
                        username *
                      </label>
                      <input
                        data-testid="input-username"
                        id="username"
                        name="username"
                        onChange={[Function]}
                        required={true}
                        type="text"
                        value=""
                      />
                    </div>
                    <div
                      className="form-item"
                    >
                      <label
                        htmlFor="email"
                      >
                        Adresse email *
                      </label>
                      <input
                        data-testid="input-email"
                        id="email"
                        name="email"
                        onChange={[Function]}
                        required={true}
                        type="email"
                        value=""
                      />
                    </div>
                    <div
                      className="form-item form-password"
                    >
                      <div
                        className="form-item"
                      >
                        <label
                          htmlFor="password"
                        >
                          Mot de passe *
                        </label>
                        <input
                          data-testid="input-password"
                          id="password"
                          name="password"
                          onChange={[Function]}
                          required={true}
                          type="password"
                          value=""
                        />
                      </div>
                      <div
                        className="form-item"
                      >
                        <label
                          htmlFor="confirmPassword"
                        >
                          Confirmer le mot de passe *
                        </label>
                        <input
                          data-testid="input-confirm-password"
                          id="confirmPassword"
                          name="confirmPassword"
                          onChange={[Function]}
                          required={true}
                          type="password"
                          value=""
                        />
                      </div>
                    </div>
                    <div
                      className="form-checkbox"
                    >
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                      />
                      <label
                        htmlFor="newsletter"
                      >
                        Je souhaite recevoir des offres des partenaires du site leboncoin susceptibles de m"intéresser
                      </label>
                    </div>
                    <div
                      className="form-checkbox"
                    >
                      <input
                        data-testid="checkbox-legal"
                        name="legal"
                        required={true}
                        type="checkbox"
                      />
                      <label
                        htmlFor="legal"
                      >
                        "J’accepte les 
                        <span>
                          Conditions Générales de Vente"
                        </span>
                      </label>
                    </div>
                    <button
                      type="button"
                    >
                      Créer mon Compte Personnel
                    </button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      `);
    });
  });
});
