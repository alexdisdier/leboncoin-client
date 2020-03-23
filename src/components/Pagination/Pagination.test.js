import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';

import { getByTestId } from '../../utils';

describe('Pagination', () => {
  let props;

  beforeEach(() => {
    props = {
      totalPages: 4,
      currentPage: 2,
      goToPage: jest.fn(),
      windowWidth: 1024
    };

    window.innerWidth = props.windowWidth;
  });

  describe('actions', () => {
    describe('mobile', () => {
      it('goes to the previous page', () => {
        props.windowWidth = 643;
        const wrapper = shallow(<Pagination {...props} />);

        getByTestId(wrapper, 'mobile-previous-page').simulate('click');

        expect(props.goToPage).toHaveBeenCalled();
        expect(props.goToPage).toHaveBeenCalledWith(1);
      });

      it('goes to the next page', () => {
        props.windowWidth = 643;
        const wrapper = shallow(<Pagination {...props} />);

        getByTestId(wrapper, 'mobile-next-page').simulate('click');

        expect(props.goToPage).toHaveBeenCalled();
      });
    });

    describe('desktop', () => {
      it('goes to the previous page', () => {
        const wrapper = shallow(<Pagination {...props} />);

        getByTestId(wrapper, 'desktop-previous-page').simulate('click');

        expect(props.goToPage).toHaveBeenCalled();
        expect(props.goToPage).toHaveBeenCalledWith(1);
      });
    });
  });

  describe('render()', () => {
    it('render desktop pagination', () => {
      const wrapper = shallow(<Pagination {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
<div
  className="pagination"
>
  <span
    data-testid="desktop-previous-page"
    key="0"
    onClick={[Function]}
  >
    <ReactComponent />
  </span>
  <span
    className=""
    key="1"
    onClick={[Function]}
  >
    1
  </span>
  <span
    className="active"
    key="2"
    onClick={[Function]}
  >
    2
  </span>
  <span
    className=""
    key="3"
    onClick={[Function]}
  >
    3
  </span>
  <span
    className=""
    key="4"
    onClick={[Function]}
  >
    4
  </span>
  <span
    key="5"
    onClick={[Function]}
  >
    <ReactComponent />
  </span>
</div>
`);
    });
    it('render mobile pagination', () => {
      props.windowWidth = 643;
      const wrapper = shallow(<Pagination {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
<div
  className="pagination"
>
  <span
    data-testid="mobile-previous-page"
    key="0"
    onClick={[Function]}
  >
    <ReactComponent />
  </span>
  <span
    key="1"
  >
    2
  </span>
  <span
    data-testid="mobile-next-page"
    key="2"
    onClick={[Function]}
  >
    <ReactComponent />
  </span>
</div>
`);
    });
  });
});
