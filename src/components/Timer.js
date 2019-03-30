import React, {Component} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {secondsToString} from "../utils/utils";

export default class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
        }
    }

    tick = () => {
        this.state.item.tick();
        this.forceUpdate();
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidUpdate(prevProps) {
        if (this.props.item.id !== prevProps.item.id) {
            this.setState({item: this.props.item});
        }
    }

    getProgress = () => 100 * (this.props.item.duration - this.state.item.timeLeft) / (this.props.item.duration);


    render() {
        return (
            <div>
                Current item: <strong>{this.state.item.name}</strong><br/>
                Time left: <strong>{secondsToString(this.state.item.timeLeft)}</strong>
                <LinearProgress variant="determinate" value={this.getProgress()}/>
            </div>
        )
    }
}