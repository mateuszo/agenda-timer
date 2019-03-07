import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Input from '@material-ui/core/Input';

import { minutesToString } from '../utils/utils';

class Item extends Component {
    constructor(props) {
      super(props);
      this.deleteThis = this.deleteThis.bind(this);
    }
  
    deleteThis(){
      this.props.deleteItem(this.props.item);
    }
  
    render() {
      return (
        <ListItem button>
          <Input
            defaultValue={this.props.item.name}
            inputProps={{'aria-label': 'Name',}}
          />
          <Input
            defaultValue={this.props.item.duration}
            inputProps={{'aria-label': 'Duration',}}
            type="number"
          />
          <i onClick={this.deleteThis} class="material-icons">delete</i>
        </ListItem>
      )
    }
  }

  export default Item