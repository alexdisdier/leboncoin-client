/* eslint-disable no-irregular-whitespace */
import React from 'react';
import { shallow } from 'enzyme';

import Filters from './Filters';

jest.mock('react-router-dom', () => ({
  Link: 'Link',
}));

describe('Filters', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'title',
      minPrice: 'minPrice',
      maxPrice: 'maxPrice',
      sort: 'sort',
      handleFilters: jest.fn(),
      submitFilters: jest.fn(),
    };
  });

  describe('actions', () => {
    it('handles value change of the search input', () => {
      const wrapper = shallow(<Filters {...props} />);
      wrapper.find('input').at(0).simulate('change', 'test');

      expect(props.handleFilters).toHaveBeenCalledTimes(1);
      expect(props.handleFilters).toHaveBeenCalledWith('test');
    });
  });

  describe('render()', () => {
    it('renders the Filters correctly', () => {
      const wrapper = shallow(<Filters {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
        <div
          className="filters-container"
        >
          <div
            className="wrapper"
          >
            <form
              onSubmit={[MockFunction]}
            >
              <div
                className="search"
              >
                <input
                  name="title"
                  onChange={[MockFunction]}
                  placeholder="Que recherchez-vous?"
                  type="text"
                  value="title"
                />
                <button
                  type="submit"
                >
                  Rechercher
                </button>
              </div>
              <div
                className="filters"
              >
                <div
                  className="price-range"
                >
                  <label
                    htmlFor="price"
                  >
                    Prix entre
                  </label>
                  <select
                    name="minPrice"
                    onChange={[MockFunction]}
                    value="minPrice"
                  >
                    <option
                      value=""
                    >
                      Prix min
                    </option>
                    <option
                      value="10"
                    >
                      10
                    </option>
                    <option
                      value="20"
                    >
                      20
                    </option>
                    <option
                      value="30"
                    >
                      30
                    </option>
                    <option
                      value="40"
                    >
                      40
                    </option>
                    <option
                      value="50"
                    >
                      50
                    </option>
                    <option
                      value="75"
                    >
                      75
                    </option>
                    <option
                      value="100"
                    >
                      100
                    </option>
                    <option
                      value="200"
                    >
                      200
                    </option>
                    <option
                      value="300"
                    >
                      300
                    </option>
                    <option
                      value="400"
                    >
                      400
                    </option>
                    <option
                      value="500"
                    >
                      500
                    </option>
                    <option
                      value="1000"
                    >
                      1000
                    </option>
                  </select>
                  <span>
                    et
                  </span>
                  <select
                    name="maxPrice"
                    onChange={[MockFunction]}
                    value="maxPrice"
                  >
                    <option
                      value=""
                    >
                      Prix max
                    </option>
                    <option
                      value="10"
                    >
                      10
                    </option>
                    <option
                      value="20"
                    >
                      20
                    </option>
                    <option
                      value="30"
                    >
                      30
                    </option>
                    <option
                      value="40"
                    >
                      40
                    </option>
                    <option
                      value="50"
                    >
                      50
                    </option>
                    <option
                      value="75"
                    >
                      75
                    </option>
                    <option
                      value="100"
                    >
                      100
                    </option>
                    <option
                      value="200"
                    >
                      200
                    </option>
                    <option
                      value="300"
                    >
                      300
                    </option>
                    <option
                      value="400"
                    >
                      400
                    </option>
                    <option
                      value="500"
                    >
                      500
                    </option>
                    <option
                      value="1000"
                    >
                      1000
                    </option>
                  </select>
                </div>
                <select
                  name="sort"
                  onChange={[MockFunction]}
                  value="sort"
                >
                  <option
                    value=""
                  >
                    Options de recherche
                  </option>
                  <option
                    value="date-desc"
                  >
                    Tri: Plus récents
                  </option>
                  <option
                    value="date-asc"
                  >
                    Tri: Plus vieux
                  </option>
                  <option
                    value="price-asc"
                  >
                    Tri: Moins cher
                  </option>
                  <option
                    value="price-desc"
                  >
                    Tri: Plus cher
                  </option>
                </select>
              </div>
            </form>
          </div>
        </div>
      `);
    });
  });
});
