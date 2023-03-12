import React from 'react';
import { shallow } from 'enzyme';

import Validation from './Validation';

describe('Validation', () => {
  let props;

  beforeEach(() => {
    props = {
      isValid: false,
    };
  });

  describe('render()', () => {
    it("doesn't render an error message", () => {
      props.isValid = true;
      const wrapper = shallow(<Validation {...props} />);
      expect(wrapper).toMatchInlineSnapshot('<div />');
    });

    it('renders an error message', () => {
      const wrapper = shallow(<Validation {...props} />);
      expect(wrapper).toMatchInlineSnapshot(`
<div
  className="error-message"
  style={
    Object {
      "color": "red",
    }
  }
>
  mauvais mot de passe
</div>
`);
    });
  });
});
