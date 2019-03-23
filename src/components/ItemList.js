import React, {Component} from 'react';
import List from '@material-ui/core/List';
import {withStyles} from '@material-ui/core/styles';


import Item from './Item';
import {minutesToString} from '../utils/utils';
import AgendaItem from "../model/AgendaItem";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});


class ItemList extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
    }

    calculateTotalTime() {
        return minutesToString(
            AgendaItem.calculateTotal(this.props.items));
    }

    renderItemList() {
        return this.props.items.map(
            (item) => <Item key={item.id}
                            item={item}
                            buttonAction={this.props.deleteItem}
                            buttonType={"delete"}
                            updateItem={this.props.updateItem}/>
        );
    }

    render() {

        const newItem = new AgendaItem("", 0);

        return (
            <div className={this.classes.root}>
                <List component="nav">
                    {this.renderItemList()}
                    <Item key={newItem.id}
                          item={newItem}
                          buttonAction={this.props.addItem}
                          buttonType={"save"}
                          updateItem={() => {
                          }}/>
                </List>

                <div>Total: {this.calculateTotalTime()}</div>
            </div>
        )
    };
}

export default withStyles(styles)(ItemList)