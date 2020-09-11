import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper = shallow(<App/>);

test('App rendered successfully', () => {
  expect(wrapper).toBeTruthy()
});
