import React from 'react';
import ReactDOM from 'react-dom';
import FindActivity from './FindActivity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FindActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});
