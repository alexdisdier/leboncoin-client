import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Profile from './Profile';

import domain from '../../assets/domain';

jest.mock('../../components/Card/Card', () => 'Card');
jest.mock('../../components/Loading/Loading', () => 'Loading');

const mockOffers = [
  {
    _id: '123',
    created: '2019-03-02T18:40:44.613Z',
    creator: {
      account: { phone: '123456789', username: 'faker' }
    },
    description: 'description-1',
    pictures: ['img_1', 'img_2'],
    price: 99,
    title: 'offer'
  }
];

describe('Profile', () => {
  let mock;
  let props;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    props = {
      getUser: jest.fn()
    };
  });

  afterEach(() => {
    mock.restore();
    mock.reset();
  });

  describe('actions', () => {
    it('fetches offers on #componentDidMount', done => {
      props.getUser.mockReturnValue('username');
      props.getUser.mockReturnValue('email');
      props.getUser.mockReturnValue('token');

      const wrapper = shallow(<Profile {...props} />);
      const fetchOfferSpy = jest.spyOn(wrapper.instance(), 'fetchOffer');

      mock.onGet(`${domain}/profile`).reply(200, mockOffers, {
        headers: {
          authorization: 'Bearer 5GByR1WUvblAHtQu'
        }
      });

      expect(wrapper.state()).toHaveProperty('offers', []);

      wrapper
        .instance()
        .componentDidMount()
        .then(() => {
          axios
            .get(`${domain}/profile`, {
              headers: {
                authorization: 'Bearer 5GByR1WUvblAHtQu'
              }
            })
            .then(response => {
              expect(fetchOfferSpy).toHaveBeenCalled();
              expect(wrapper.state('offers')).toEqual(response.data);
            });

          done();
        });
    });
  });

  describe('render()', () => {
    it('renders a loader', () => {
      props.getUser.mockReturnValue('username');
      props.getUser.mockReturnValue('email');
      props.getUser.mockReturnValue('token');

      const wrapper = shallow(<Profile {...props} />);
      wrapper.setState({
        isLoading: true,
        error: null
      });

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

    it('renders no offers', () => {
      props.getUser.mockReturnValue('username');
      props.getUser.mockReturnValue('email');
      props.getUser.mockReturnValue('token');

      const wrapper = shallow(<Profile {...props} />);
      wrapper.setState({
        isLoading: true,
        error: 'error'
      });

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
    </div>
  </div>
</Fragment>
`);
    });

    it('renders the Section with one offer', () => {
      props.getUser.mockReturnValue('username');
      props.getUser.mockReturnValue('email');
      props.getUser.mockReturnValue('token');

      const wrapper = shallow(<Profile {...props} />);
      wrapper.setState({
        offers: mockOffers,
        isLoading: false
      });

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
      <div
        className="wrapper homepage"
      >
        <ul>
          <Card
            dataTestId="profile-ad-card"
            date="2019-03-02T18:40:44.613Z"
            deleteOffer={[Function]}
            description="description-1"
            id="123"
            isDelete={true}
            key="123offer"
            pictures={
              Array [
                "img_1",
                "img_2",
              ]
            }
            price={99}
            title="offer"
          />
        </ul>
      </div>
    </div>
  </div>
</Fragment>
`);
    });
  });
});
