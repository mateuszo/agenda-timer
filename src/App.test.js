import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { minutesToString } from './utils/utils';
import AgendaItem from './model/AgendaItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('test durationstring', () => {
  expect(minutesToString(61)).toBe("01:01:00");
  } 
)

test('test AgendaItemModel', () => {
  let item = new AgendaItem("testitem", 10);
  expect(item.name).toBe("testitem");
  expect(item.duration).toBe(10);
  
  }
)

test('AgendaItemModel id is unique', () => {
  let item = new AgendaItem("testitem", 10);
  let item2 = new AgendaItem("testitem", 10);
  expect(item2.id).not.toBe(item.id);
  }
)
