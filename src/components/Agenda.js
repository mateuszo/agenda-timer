import React, { Component } from 'react';
import Timer from "./Timer";
import {minutesToString} from "../utils/utils";

export default class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            currentItemIndex: 0,
        }
    }

    getCurrentItem() {
        return this.state.items.get(this.state.currentItemIndex);
    }


    renderItemList() {
        return this.props.items.map(
            (item) => (<li key={item.id}>{item.name} - {minutesToString(item.timeLeft)}</li>)
        );
    }


    render() {
        return (
            <div>
                <ol>
                    {this.renderItemList()}
                </ol>
                <h1>Current item: {this.getCurrentItem().name}</h1>
                <Timer secondsLeft={this.getCurrentItem().duration * 60}/>
            </div>
        )
    }
}