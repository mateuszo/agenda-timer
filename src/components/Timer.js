import React, { Component } from 'react';

export default class Timer extends Component {

    constructor(props){
        super(props);
        this.state = {
            secondsLeft: 60,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                secondsLeft: this.state.secondsLeft - 1
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.secondsLeft}</h1>
            </div>
        )
    }
}