import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';


import Item from './Item';
import { minutesToString } from '../utils/utils';
import AgendaItem from "../model/AgendaItem";

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

    const listItems = Array.from(this.props.items).map(
      ([key, item]) => <Item key={key} item={item} buttonAction={this.props.deleteItem} buttonType={"delete"} updateItem={this.props.updateItem}/>
    );

    const total = minutesToString(
      Array.from(this.props.items)
      .map( ([key, item]) => item.duration)
      .reduce( (prev, curr) => prev + curr, 0
    ));

    const newItem = new AgendaItem("", 0);

    return (
      <div className={this.classes.root}>
        <List component="nav">
          {listItems}
          <Item key={newItem.id} item={newItem} buttonAction={this.props.updateItem} buttonType={"save"} updateItem={() => {}} />
        </List>

        <div>Total: {total}</div>
      </div>
    )
  };
}

export default withStyles(styles)(ItemList)