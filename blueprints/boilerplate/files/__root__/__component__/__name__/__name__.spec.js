import React from 'react';
import { shallow } from 'enzyme';
import <%= pascalEntityName %> from './<%= pascalEntityName %>';

describe('<%= pascalEntityName %>', () => {
  it('should...', () => {
    const element = shallow(<<%= pascalEntityName %> />);
    expect(element.text()).toEqual('Hello');
  });
});
