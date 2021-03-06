import React, {Component} from 'react';
import './App.css';
import './model/AgendaItem'
import AgendaItem from './model/AgendaItem';
import {List} from 'immutable';
import {Agenda, ItemList} from './components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function generateItems() {
    const items = [
        new AgendaItem.Builder().withName("greetings").withDuration(10).build(),
        new AgendaItem.Builder().withName("discussion").withDuration(15*60).build(),
        new AgendaItem.Builder().withName("goodbye").withDuration(13*60).build(),
        new AgendaItem.Builder().withName("long item").withDuration(63*60).build(),
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
