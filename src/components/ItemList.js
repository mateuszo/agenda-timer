import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';


import Item from './Item';
import { minutesToString } from '../utils/utils';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ItemList extends Component {
  constructor(props){
    super(props);
    this.classes = props.classes;
  }



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
      <div className={this.classes.root}>
        <List component="nav">
          {listItems}
        </List>
        <div>Total: {total}</div>
      </div>
    )
  };
}

export default withStyles(styles)(ItemList)