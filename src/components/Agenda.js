import React, { Component } from 'react';
import Timer from "./Timer";
import {secondsToString} from "../utils/utils";
import Button from '@material-ui/core/Button';

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
            (item) => (<li key={item.id}>{item.name} - {secondsToString(item.timeLeft)}</li>)
        );
    }


    render() {
        return (
            <div>
                <ol>
                    {this.renderItemList()}
                </ol>
                <Timer item={this.getCurrentItem()} />
                <br/>
                <Button variant="contained"
                        onClick={() => this.setState({currentItemIndex: this.state.currentItemIndex + 1})}>
                    Next
                </Button>
            </div>
        )
    }
}