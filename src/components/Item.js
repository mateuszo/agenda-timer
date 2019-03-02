import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';

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
          {this.props.item.name} - {minutesToString(this.props.item.duration)} 
          <i onClick={this.deleteThis} class="material-icons">
          delete
          </i>
        </ListItem>
      )
    }
  }

  export default Item