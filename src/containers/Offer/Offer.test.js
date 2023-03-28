/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Offer from './Offer';

import domain from '../../assets/domain';

jest.mock('react-responsive-carousel', () => ({
  Carousel: 'Carousel',
}));

jest.mock('../../components/Loading/Loading', () => 'Loading');

const mockOffer = {
  id: '123',
  created: '2019-03-02T18:40:44.613Z',
  creator: {
    account: { phone: '123456789', username: 'faker' },
  },
  description: 'description-1',
  pictures: ['img_1', 'img_2'],
  price: 99,
  title: 'offer',
};

describe('Offer', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
    mock.reset();
  });

  it('fetches one offer', (done) => {
    const wrapper = shallow(<Offer />);
    expect(wrapper.state()).toHaveProperty('offer', {});

    mock
      .onGet(`${domain}/offer`, { params: { id: '123' } })
      .reply(200, mockOffer);

    expect(wrapper.state()).toHaveProperty('offer');

    wrapper
      .instance()
      .componentDidMount()
      .then(() => {
        axios.get(`${domain}/offer`, { params: { id: '123' } }).then(() => {
          // console.log(response.data);
          expect(wrapper.state('offer')).toEqual({});
        });
        done();
      });
  });

  describe('render()', () => {
    it('renders a loading component', () => {
      const wrapper = shallow(<Offer />);
      wrapper.setState({
        isLoading: true,
        error: null,
      });
      expect(wrapper).toMatchInlineSnapshot('<Loading />');
    });

    it('renders an error message when network fails', () => {
      const wrapper = shallow(<Offer />);
      wrapper.setState({
        error: 'error message',
      });
      expect(wrapper).toMatchInlineSnapshot(`""`);
    });

    it('renders the full component', () => {
      const wrapper = shallow(<Offer />);
      wrapper.setState({
        offer: mockOffer,
        isLoading: false,
        error: null,
      });
      expect(wrapper).toMatchInlineSnapshot(`
        <div
          className="wrapper"
        >
          <section
            className="section-offer"
          >
            <div
              className="section-main"
            >
              <div
                className="section-card"
              >
                <Carousel>
                  <div
                    key="img0"
                  >
                    <img
                      alt="carousel slider"
                    />
                  </div>
                  <div
                    key="img1"
                  >
                    <img
                      alt="carousel slider"
                    />
                  </div>
                </Carousel>
                <div
                  className="section-card-body"
                >
                  <h1>
                    offer
                  </h1>
                  <span>
                    99
                     €
                  </span>
                  <div>
                    March 02, 2019
                  </div>
                </div>
              </div>
              <div
                className="section-description"
              >
                <div>
                  Description
                </div>
                <p>
                  description-1
                </p>
              </div>
            </div>
            <div
              className="section-sidebar"
            >
              <div
                className="contact-card"
              >
                <div>
                  <svg
                    data-name="Calque 1"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      fill="#cad1d9"
                      r="12"
                    />
                    <circle
                      cx="12"
                      cy="10.26"
                      fill="#a8b4c0"
                      r="4.73"
                    />
                    <path
                      d="M12 16.64a8.67 8.67 0 0 0-7.73 4.53 12 12 0 0 0 15.46 0A8.67 8.67 0 0 0 12 16.64z"
                      fill="#a8b4c0"
                    />
                  </svg>
                </div>
                <div
                  className="user"
                >
                  faker
                </div>
                <div
                  className="phone"
                >
                  123456789
                </div>
              </div>
            </div>
          </section>
        </div>
      `);
    });
  });
});
