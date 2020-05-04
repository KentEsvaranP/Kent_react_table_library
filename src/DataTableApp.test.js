import React from 'react';
import ReactDOM from 'react-dom';
import DataTableApp from './DataTableApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataTableApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
