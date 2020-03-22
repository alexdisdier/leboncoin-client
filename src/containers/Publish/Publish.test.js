import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Publish from './Publish';

import { getByTestId } from '../../utils';
import domain from '../../assets/domain';

jest.mock('../../components/Loading/Loading', () => 'Loading');

const mockAdvertBody = {
  title: 'testing',
  description: 'hello world',
  price: 100,
  files: ['img_1']
};

const mockAdvertResponse = {
  _id: '5e776328ba25760017c19e3f',
  title: 'testing',
  description: 'hello world',
  price: 100,
  pictures: ['https://www.images.com/img_1'],
  creator: {
    account: {
      phone: '0600000000',
      username: 'faker'
    },
    _id: '5c7a850dd4bf7a00174c015e'
  },
  created: '2020-03-22T13:07:52.517Z'
};

console.error = jest.fn();

describe('Publish', () => {
  let props;
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    console.error.mockClear();

    props = {
      getUser: jest.fn(),
      history: {
        push: jest.fn()
      }
    };
  });

  describe('actions', () => {
    it('removes an image uploaded', () => {
      props.getUser.mockReturnValue('token');
      const wrapper = shallow(<Publish {...props} />);

      wrapper.setState({
        files: mockAdvertBody.files
      });

      expect(wrapper.state('files')).toEqual(['img_1']);

      getByTestId(wrapper, 'image')
        .at(0)
        .simulate('click');

      expect(wrapper.state('files')).toEqual([]);
    });

    it('succeeds posting an ad with a title, a description and a price', () => {
      props.getUser.mockReturnValue('token');
      const wrapper = shallow(<Publish {...props} />);
      const spySubmitForm = jest.spyOn(wrapper.instance(), 'submitForm');

      const details = {
        title: {
          target: { name: 'title', value: 'hello' }
        },
        description: {
          target: {
            name: 'description',
            value: 'this is the world description'
          }
        },
        price: {
          target: {
            name: 'price',
            value: '99'
          }
        }
      };

      getByTestId(wrapper, 'input-title').simulate('change', details.title);
      getByTestId(wrapper, 'textarea-description').simulate(
        'change',
        details.description
      );
      getByTestId(wrapper, 'input-price').simulate('change', details.price);

      getByTestId(wrapper, 'submit-form').simulate('submit', {
        preventDefault: () => {}
      });

      expect(spySubmitForm).toHaveBeenCalled();

      mock.onPost(`${domain}/publish`).reply(200, mockAdvertResponse, {
        headers: {
          authorization: 'Bearer 5GByR1WUvblAHtQu'
        }
      });

      axios
        .post(`${domain}/publish`, wrapper.state(), {
          headers: {
            authorization: 'Bearer 5GByR1WUvblAHtQu'
          }
        })
        .then(response => {
          // console.log(response);
          // expect(props.history.push).toHaveBeenCalled();
        });
    });

    // it('fails posting an ad', done => {
    //   const wrapper = shallow(<Publish {...props} />);
    //   const spySubmitForm = jest.spyOn(wrapper.instance(), 'submitForm');

    //   mock.onPost(`${domain}/publish`).networkError();

    //   axios.post(`${domain}/publish`).then(response => {
    //     console.log(response);
    //     done();
    //   });

    //   expect(spySubmitForm).toThrow();
    // });
  });

  describe('render()', () => {
    it('renders a loader while uploading', () => {
      const wrapper = shallow(<Publish {...props} />);
      wrapper.setState({
        isLoading: true
      });

      expect(wrapper.find('Loading')).toBeTruthy();
      expect(getByTestId(wrapper, 'loading')).toBeTruthy();
    });

    it('renders the publish page', () => {
      const wrapper = shallow(<Publish {...props} />);
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
        data-testid="submit-form"
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
            data-testid="input-title"
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
            data-testid="textarea-description"
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
            data-testid="input-price"
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
});
