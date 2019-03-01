import React, { Component } from 'react';

import Item from './Item';
import { minutesToString } from '../utils/utils';

class ItemList extends Component {

    render() {
      if(this.props.items.length === 0){
        return(<div>No items :(</div>);
      }
  
  
      const listItems = this.props.items.map(
        (item) => <Item item={item} deleteItem={this.props.deleteItem}/>        
      );
  
      const total = minutesToString(this.props.items
        .map( (item) => item.duration)
        .reduce( (prev, curr) => prev + curr
      ));
  
      return (
        <div>
          <ol>
            {listItems}
          </ol>
          <div>Total: {total}</div>
        </div>
      )
    };
  }

  export default ItemList