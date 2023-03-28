import React from 'react';
import { get, set, remove } from 'js-cookie';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Offers from './Offers';

import domain from '../../assets/domain';

const mockOffers = {
  count: 2,
  offers: [
    {
      created: '2019-03-02T18:40:44.613Z',
      creator: {
        account: { phone: '123456789', username: 'faker' },
      },
      description: 'description-1',
      pictures: [],
      price: 675,
      title: 'offer-1',
    },
    {
      created: '2019-03-02T18:40:44.613Z',
      creator: {
        account: { phone: '123456789', username: 'faker' },
      },
      description: 'description-2',
      pictures: [],
      price: 675,
      title: 'offer-2',
    },
  ],
};

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));

jest.mock('../../components/Filters/Filters', () => 'Filters');
jest.mock('../../components/Card/Card', () => 'Card');
jest.mock('../../components/Pagination/Pagination', () => 'Pagination');
jest.mock('../../components/Loading/Loading', () => 'Loading');

describe('Offers', () => {
  describe('actions', () => {
    let mock;

    beforeEach(() => {
      mock = new MockAdapter(axios);
      get.mockClear();
      set.mockClear();
      remove.mockClear();
    });

    afterEach(() => {
      mock.restore();
      mock.reset();
    });

    it.skip('fetches offers on #componentDidMount', (done) => {
      const wrapper = shallow(<Offers />);
      expect(wrapper.state()).toHaveProperty('offers', []);

      mock.onGet(`${domain}/offer/with-count`).reply(200, mockOffers);

      wrapper
        .instance()
        .componentDidMount()
        .then(() => {
          expect(wrapper.state()).toHaveProperty('offers');
          expect(wrapper.state('offers')).toEqual(mockOffers.offers);

          wrapper.setState({ title: 'title' });

          const spyGoToPage = jest.spyOn(wrapper.instance(), 'goToPage');
          const spySearchFilters = jest.spyOn(
            wrapper.instance(),
            'searchFilters'
          );

          wrapper.instance().forceUpdate();
          wrapper.instance().goToPage(1);

          expect(spyGoToPage).toHaveBeenCalledTimes(1);
          expect(spyGoToPage).toHaveBeenCalledWith(1);

          expect(spySearchFilters).toHaveBeenCalledTimes(1);
          expect(spySearchFilters).toHaveBeenCalledWith({
            maxPrice: '',
            minPrice: '',
            sort: '',
            title: 'title',
          });

          done();
        });
    });

    it('handles filters', () => {
      const wrapper = shallow(<Offers />);

      wrapper.setState({
        maxPrice: '',
        minPrice: '',
        sort: '',
        title: '',
      });

      const spyHandleFilters = jest.spyOn(wrapper.instance(), 'handleFilters');

      wrapper.instance().forceUpdate();
      wrapper.instance().handleFilters({ target: { value: '' } });

      expect(spyHandleFilters).toHaveBeenCalledTimes(1);
      expect(remove).toHaveBeenCalled();
    });

    it('submit filters', () => {
      const wrapper = shallow(<Offers />);

      wrapper.setState({
        maxPrice: '',
        minPrice: '',
        sort: '',
        title: 'title',
      });

      const spySubmitFilters = jest.spyOn(wrapper.instance(), 'submitFilters');
      const spySearchFilters = jest.spyOn(wrapper.instance(), 'searchFilters');

      wrapper.instance().forceUpdate();
      wrapper.instance().submitFilters({ preventDefault() {} });

      expect(spySubmitFilters).toHaveBeenCalledTimes(1);
      expect(spySearchFilters).toHaveBeenCalledTimes(1);
      expect(spySearchFilters).toHaveBeenCalledWith({
        maxPrice: '',
        minPrice: '',
        sort: '',
        title: 'title',
      });
    });

    it('clear filters  & cookies', () => {
      const wrapper = shallow(<Offers />);

      wrapper.setState({
        maxPrice: '',
        minPrice: '',
        sort: '',
        title: '',
      });

      const spySubmitFilters = jest.spyOn(wrapper.instance(), 'submitFilters');
      const spySearchFilters = jest.spyOn(wrapper.instance(), 'searchFilters');

      wrapper.instance().forceUpdate();
      wrapper.instance().submitFilters({ preventDefault() {} });

      expect(spySubmitFilters).toHaveBeenCalledTimes(1);
      expect(spySearchFilters).toHaveBeenCalledTimes(1);
      expect(remove).toHaveBeenCalled();
    });
  });

  describe('render()', () => {
    const wrapper = shallow(<Offers />);

    it('renders a loader', () => {
      wrapper.setState({ isLoading: true });

      expect(wrapper).toMatchInlineSnapshot(`
        <Fragment>
          <Filters
            handleFilters={[Function]}
            maxPrice=""
            minPrice=""
            sort=""
            submitFilters={[Function]}
            title=""
          />
          <Loading />
        </Fragment>
      `);
    });

    it('renders no cards', () => {
      wrapper.setState({ isLoading: true, error: 'error' });
      expect(wrapper).toMatchInlineSnapshot(`
        <Fragment>
          <Filters
            handleFilters={[Function]}
            maxPrice=""
            minPrice=""
            sort=""
            submitFilters={[Function]}
            title=""
          />
        </Fragment>
      `);
    });

    it('renders the offers cards', () => {
      wrapper.setState({
        isLoading: false,
        error: null,
        offers: mockOffers.offers,
        totalPages: 1,
      });

      expect(wrapper).toMatchInlineSnapshot(`
        <Fragment>
          <Filters
            handleFilters={[Function]}
            maxPrice=""
            minPrice=""
            sort=""
            submitFilters={[Function]}
            title=""
          />
          <div
            className="wrapper Offerspage"
          >
            <ul>
              <Card
                date="2019-03-02T18:40:44.613Z"
                description="description-1"
                key="undefinedoffer-1"
                pictures={Array []}
                price={675}
                title="offer-1"
              />
              <Card
                date="2019-03-02T18:40:44.613Z"
                description="description-2"
                key="undefinedoffer-2"
                pictures={Array []}
                price={675}
                title="offer-2"
              />
            </ul>
          </div>
          <Pagination
            currentPage={1}
            goToPage={[Function]}
            totalPages={1}
          />
        </Fragment>
      `);
    });
  });
});
