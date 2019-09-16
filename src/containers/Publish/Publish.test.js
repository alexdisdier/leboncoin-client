import React from "react";
import { shallow } from "enzyme";

import Publish from "./Publish";

describe("Publish", () => {
  it("render()", () => {
    const wrapper = shallow(<Publish />);
    expect(wrapper).toMatchInlineSnapshot(`
<div
  className="wrapper"
>
  <div
    className="ad-listing"
  >
    <h1>
      Déposer une annonce
    </h1>
    <div
      className="ad-listing-container"
    >
      <h2>
        Votre annonce
      </h2>
      <form
        onSubmit={[Function]}
      >
        <div
          className="ad-listing-body"
        >
          <label
            htmlFor="title"
          >
            Titre de l'annonce
          </label>
          <input
            maxLength="50"
            name="title"
            onChange={[Function]}
            required={true}
            type="text"
            value=""
          />
          <label
            htmlFor="description"
          >
            Texte de l'annonce
          </label>
          <textarea
            maxLength="4000"
            name="description"
            onChange={[Function]}
            required={true}
            rows="10"
            value=""
          />
          <label
            htmlFor="price"
          >
            Prix
          </label>
          <input
            maxLength="8"
            name="price"
            onChange={[Function]}
            required={true}
            type="text"
            value=""
          />
          <p>
            <span>
              Photos :
            </span>
             Une annonce avec photo est 7 fois plus consultée qu'une annonce sans photo
          </p>
          <aside>
            <ReactFileReader
              base64={true}
              disabled={false}
              fileTypes={
                Array [
                  ".png",
                  ".jpg",
                ]
              }
              handleFiles={[Function]}
              multipleFiles={false}
              multiplesFiles={false}
            >
              <div
                className="box-photo"
              >
                Photo principale
              </div>
            </ReactFileReader>
            <ReactFileReader
              base64={true}
              disabled={false}
              fileTypes={
                Array [
                  ".png",
                  ".jpg",
                ]
              }
              handleFiles={[Function]}
              multipleFiles={false}
              multiplesFiles={false}
            >
              <div
                className="box-photo"
              >
                Photo 2
              </div>
            </ReactFileReader>
            <ReactFileReader
              base64={true}
              disabled={false}
              fileTypes={
                Array [
                  ".png",
                  ".jpg",
                ]
              }
              handleFiles={[Function]}
              multipleFiles={false}
              multiplesFiles={false}
            >
              <div
                className="box-photo"
              >
                Photo 3
              </div>
            </ReactFileReader>
          </aside>
          <button
            className="validate-btn"
          >
            Valider
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
`);
  });
});
