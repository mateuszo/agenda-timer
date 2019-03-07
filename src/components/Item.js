import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Input from '@material-ui/core/Input';

class Item extends Component {
    constructor(props) {
      super(props);
      this.deleteThis = this.deleteThis.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDurationChange = this.handleDurationChange.bind(this);

    }
  
    deleteThis(){
      this.props.deleteItem(this.props.item);
    }

    handleNameChange(event){
      const item = this.props.item;
      item.name = event.target.value;
      this.props.updateItem(item);
    }

    handleDurationChange(event){
      const item = this.props.item;
      item.duration = parseInt(event.target.value);
      this.props.updateItem(item);
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
            defaultValue={this.props.item.duration}
            inputProps={{'aria-label': 'Duration',}}
            onChange={this.handleDurationChange}
            type="number"
          />
          <i onClick={this.deleteThis} className="material-icons">delete</i>
        </ListItem>
      )
    }
  }

  export default Item