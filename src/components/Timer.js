import React, {Component} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {secondsToString} from "../utils/utils";

export default class Timer extends Component {

    getProgress = () => 100 * (this.props.item.timeSpent) / (this.props.item.duration);

    render() {
        return (
            <div>
                Current item: <strong>{this.props.item.name}</strong><br/>
                Time left: <strong>{secondsToString(this.props.item.getTimeLeft())}</strong>
                <LinearProgress variant="determinate" value={this.getProgress()}/>
            </div>
        )
    }
}