import React from 'react';
import ReactDOM from 'react-dom';
import Success from './Success';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Success />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Success />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});