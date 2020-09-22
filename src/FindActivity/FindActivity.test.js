import React from 'react';
import ReactDOM from 'react-dom';
import FindActivity from './FindActivity';
import renderer from 'react-test-renderer';

describe('FindActivity component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FindActivity />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<FindActivity />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})