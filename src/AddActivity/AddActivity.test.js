import React from 'react';
import ReactDOM from 'react-dom';
import AddActivity from './AddActivity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});
