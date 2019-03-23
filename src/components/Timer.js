import React, { Component } from 'react';

export default class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {
            secondsLeft: 60,
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
    }

    componentDidMount() {
        this.interval = setInterval(this.tick , 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.secondsLeft}</h1>
            </div>
        )
    }
}