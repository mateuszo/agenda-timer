import React, { Component } from 'react';
import Timer from "./Timer";
import {secondsToString} from "../utils/utils";
import Button from '@material-ui/core/Button';

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
        return this.state.items.map(
            (item) => (<li key={item.id}>{item.name} - {secondsToString(item.timeLeft)}</li>)
        );
    }

    tick = () => {
        const currentItem = this.getCurrentItem();
        this.setState({items: this.state.items.map((it) => it.id === currentItem.id ? currentItem.tick() : it)});
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
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