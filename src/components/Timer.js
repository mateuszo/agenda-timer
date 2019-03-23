import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {
            secondsLeft: this.props.secondsLeft,
        }
    }

    tick = () => {
        if(this.state.secondsLeft > 0){
            this.setState({
                secondsLeft: this.state.secondsLeft - 1
            });
        } else {
            clearInterval(this.interval);
        }
    };

    componentDidMount() {
        this.interval = setInterval(this.tick , 1000);
    }

    getProgress = () => 100*(this.props.secondsLeft - this.state.secondsLeft)/this.props.secondsLeft;


    render() {
        return (
            <div>
                <h1>{this.state.secondsLeft}</h1>
                <LinearProgress variant="determinate" value={this.getProgress()} />
            </div>
        )
    }
}