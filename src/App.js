import React, {Component} from 'react';
import './App.css';
import './model/AgendaItem'
import AgendaItem from './model/AgendaItem';
import {List} from 'immutable';
import {Agenda, ItemList} from './components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function generateItems() {
    const items = [
        new AgendaItem("greetings", 3),
        new AgendaItem("discussion", 15),
        new AgendaItem("goodbye", 13),
        new AgendaItem("long item", 63),
    ];
    return List(items);
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: generateItems(),
        };
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    updateItem(item) {
        this.setState({items: this.state.items.map((it) => it.id === item.id ? item : it)});
    }

    deleteItem(item) {
        this.setState({items: this.state.items.filter((it) => it.id !== item.id)});
    }


    addItem(item) {
        this.setState({items: this.state.items.push(item)})
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/"
                           render={() =>
                               (<div>
                                   <ItemList items={this.state.items}
                                             deleteItem={this.deleteItem}
                                             updateItem={this.updateItem}
                                             addItem={this.addItem}/>
                                   <Link to="/timer">Start the Timer</Link>
                               </div>)
                           }/>

                    <Route path="/timer"
                           render={() =>
                               (<div>
                                   <Link to="/">Go home</Link>
                                   <Agenda items={this.state.items}/>
                               </div>)
                           }/>
                </div>
            </Router>
        );
    }
}

export default App;
