import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('random-id', () => {
  return jest.fn(() => 'STATIC_ID');
});

it('renders an unchanging snapshot', () => {
  const wrapper = Enzyme.mount(<App />);
  expect(wrapper).toMatchSnapshot();
});
