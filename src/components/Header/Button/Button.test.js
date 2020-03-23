import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

jest.mock('react-router-dom', () => ({
  Link: 'Link'
}));

describe('Button', () => {
  let props;

  beforeEach(() => {
    window.innerWidth = 1000;
    props = {
      to: 'to',
      children: 'children',
      toggleMenu: jest.fn()
    };
  });

  describe('action', () => {
    it('toggles the menu', () => {
      window.innerWidth = 643;
      const wrapper = shallow(<Button {...props} />);

      wrapper.find('div').simulate('click');

      expect(props.toggleMenu).toHaveBeenCalled();
    });
  });

  describe('render()', () => {
    it('renders a standard link', () => {
      const wrapper = shallow(<Button {...props} />);

      expect(wrapper).toMatchInlineSnapshot(`
<Link
  className="btn to"
  to="to"
>
  children
</Link>
`);
    });

    it('renders a mobile clickable link', () => {
      window.innerWidth = 643;
      const wrapper = shallow(<Button {...props} />);

      expect(wrapper).toMatchInlineSnapshot(`
<div
  onClick={[MockFunction]}
>
  <Link
    to="to"
  >
    children
  </Link>
</div>
`);
    });
  });
});
