import React, { Component } from 'react';
import './App.css';
import './model/AgendaItem'
import AgendaItem from './model/AgendaItem';
import { NewItemForm, ItemList } from './components';


class App extends Component {
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
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(item){
    this.setState({items: [...this.state.items, item]});
    console.log(this.state);
  }

  deleteItem(item){
    this.setState({items: this.state.items.filter(it => it !== item)});
  }

  render() {
    return (
      <div className="App">
        <NewItemForm addItem={this.addItem} />
        <ItemList items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
