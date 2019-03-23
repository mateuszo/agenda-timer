import React, {Component} from 'react';
import './App.css';
import './model/AgendaItem'
import AgendaItem from './model/AgendaItem';
import {ItemList, Timer} from './components';
import {Map} from 'immutable';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {sumMap} from "./utils/utils";

function generateItems() {
    const items = [
        new AgendaItem("greetings", 3),
        new AgendaItem("discussion", 15),
        new AgendaItem("goodbye", 13),
        new AgendaItem("long item", 63),
    ];
    let itemMap = new Map();
    for (let item of items) {
        itemMap = itemMap.set(item.id, item);
    }
    return itemMap;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: generateItems(),
        };
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    updateItem(item) {
        this.setState({items: this.state.items.set(item.id, item)});
    }

    deleteItem(item) {
        this.setState({items: this.state.items.delete(item.id)});
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
                                             updateItem={this.updateItem}/>
                                   <Link to="/timer">Start the Timer</Link>
                               </div>)
                           }/>

                    <Route path="/timer"
                           render={() =>
                               (<div>
                                   <Timer secondsLeft={sumMap(this.state.items)*60}/>
                                   <Link to="/">Go home</Link>
                               </div>)
                           }/>
                </div>
            </Router>
        );
    }
}

export default App;
