import React, { Component } from 'react';
import Timer from "./Timer";
import {secondsToString} from "../utils/utils";
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import AgendaItem from '../model/AgendaItem';
import TimeTable from "./TimeTable";

export default class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            currentItemIndex: 0,
            startedAt: new Date(),
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

    getProgress() {
        return 100 * (1 - (AgendaItem.calculateTimeTillTheEnd(this.state.items) / AgendaItem.calculateTotalDuration(this.state.items)));
    }

    getExpectedEndTime(){
        const expectedEndMillis = this.state.startedAt.getTime()
            + 1000 * AgendaItem.calculateTotalDuration(this.state.items)
            + 1000 * AgendaItem.calculateTotalDelay(this.state.items);
        return new Date(expectedEndMillis).toLocaleTimeString();
    }

    //TODO: refactor this...
    handleNext = (event) => {
        const currentItemIndex = this.state.currentItemIndex;
        const itemsSize = this.state.items.size;
        const increment = currentItemIndex + 1 < itemsSize ? 1 : 0;
        this.setState({currentItemIndex: this.state.currentItemIndex + increment});

        const isLastItem = currentItemIndex + 1 === itemsSize;
        if(isLastItem){
            clearInterval(this.interval);
        }

        if(currentItemIndex + 2 === itemsSize){
            event.target.innerText = "Stop";
        }
    };

    render() {
        return (
            <div>
                <TimeTable items={this.state.items}/>
                <Timer item={this.getCurrentItem()} />
                <br/>
                <Button variant="contained"
                        onClick={this.handleNext}>
                    Next
                </Button>
                <br/>
                <br/>

                Meeting started at: {this.state.startedAt.toLocaleTimeString()}<br/>
                Expected end time: {this.getExpectedEndTime()}<br/>

                Time spent: <strong>{secondsToString(AgendaItem.calculateTotalTimeSpent(this.state.items))}</strong>
                <br/>
                Time left: <strong>{secondsToString(AgendaItem.calculateTimeTillTheEnd(this.state.items))}</strong>
                <LinearProgress variant="determinate" value={this.getProgress()}/>
            </div>
        )
    }
}