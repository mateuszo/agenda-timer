import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Input from '@material-ui/core/Input';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item
        };
        this.buttonAction = this.buttonAction.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
    }

    buttonAction(){
        this.props.buttonAction(this.state.item);
    }

    handleNameChange(event){
        const newName = event.target.value;
        const newItem = this.state.item.setName(newName);
        this.setState({
            item: newItem
        });
        this.props.updateItem(newItem);
    }

    handleDurationChange(event){
        const newDuration = event.target.value * 60;
        const newItem = this.state.item.setDuration(newDuration);
        this.setState({
            item: newItem
        });
        this.props.updateItem(newItem);
    }

    render() {
        return (
            <ListItem key={this.props.item.id} button>
                <Input
                    defaultValue={this.props.item.name}
                    inputProps={{'aria-label': 'Name',}}
                    onChange={this.handleNameChange}
                />
                <Input
                    defaultValue={this.props.item.getMinutes()}
                    inputProps={{'aria-label': 'Duration',}}
                    onChange={this.handleDurationChange}
                    type="number"
                />
                <i onClick={this.buttonAction} className="material-icons">{this.props.buttonType}</i>
            </ListItem>
        )
    }
}

export default Item