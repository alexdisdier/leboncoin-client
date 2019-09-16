import React from "react";
import { shallow } from "enzyme";

import SignUp from "./SignUp";

describe("SignUp", () => {
  it("render()", () => {
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
              <ReactComponent />
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
              <ReactComponent />
            </div>
            <div
              className="flex-column"
            >
              <p>
                Soyez les premiers informés
              </p>
              <p>
                Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce qui vous intéresse.
              </p>
            </div>
          </div>
          <div
            className="flex-row"
          >
            <div>
              <ReactComponent />
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
                name="newsletter"
                type="checkbox"
              />
              <label
                htmlFor="newsletter"
              >
                Je souhaite recevoir des offres des partenaires du site leboncoin susceptibles de m’intéresser
              </label>
            </div>
            <div
              className="form-checkbox"
            >
              <input
                name="legal"
                required={true}
                type="checkbox"
              />
              <label
                htmlFor="legal"
              >
                " J'accepte les 
                <span>
                  Conditions Générales de Vente
                </span>
                "
              </label>
            </div>
            <button>
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
