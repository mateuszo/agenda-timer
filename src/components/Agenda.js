import React, { Component } from 'react';
import Timer from "./Timer";
import {secondsToString} from "../utils/utils";
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import AgendaItem from '../model/AgendaItem';

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

                Time left: <strong>{secondsToString(AgendaItem.calculateTotalTimeLeft(this.state.items))}</strong>
                {/*<LinearProgress variant="determinate" value={this.getProgress()}/>*/}
            </div>
        )
    }
}