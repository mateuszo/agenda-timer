import React, { Component } from 'react';
import './App.css';
import './model/AgendaItem'
import { AgendaItem } from './model/AgendaItem';
import { minutesToString } from './utils/utils';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Duration:
            <input type="number" name="duration" />
          </label>
          <input type="submit" value="Add" />
        </form>
        <ItemList />
      </div>
    );
  }
}

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        new AgendaItem("greetings", 3),
        new AgendaItem("discussion", 15),
        new AgendaItem("goodbye", 13),
        new AgendaItem("long item", 63),
      ],
    };
  }

  render() {
    const listItems = this.state.items.map(
      (item) => <Item item={item} />        
    );

    const total = minutesToString(this.state.items
      .map( (item) => item.duration)
      .reduce( (prev, curr) => prev + curr
    ));

    return (
      <div>
        <ol>
          {listItems}
        </ol>
        <div>Total: {total}</div>
      </div>
    )
  };
}

class Item extends Component {
  render() {
    return (
      <li>{this.props.item.name} - {minutesToString(this.props.item.duration)}</li>
    )
  }
}

export default App;
