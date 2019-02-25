import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { minutesToString } from './utils/utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('test durationstring', () => {
  expect(minutesToString(61)).toBe("01:01:00");
  } 
)
