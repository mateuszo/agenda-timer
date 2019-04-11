import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 500,
    },
    warning: {
        background: red[500],
    },
});

class TimeTable extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
    }

    render() {
        return (
            <Paper className={this.classes.root}>
                <Table className={this.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Duration</TableCell>
                            <TableCell align="right">Time spent</TableCell>
                            <TableCell align="right">Difference</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.items.map(item => (
                            <TableRow
                                className={classNames({[this.classes.warning]: item.timeSpent > item.duration,})}
                                key={item.id}>
                                <TableCell component="th" scope="row">
                                    {item.name}
                                </TableCell>
                                <TableCell align="right">{item.duration}</TableCell>
                                <TableCell align="right">{item.timeSpent}</TableCell>
                                <TableCell align="right">{item.duration - item.timeSpent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default withStyles(styles)(TimeTable)