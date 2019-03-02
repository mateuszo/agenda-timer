import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import AgendaItem from '../model/AgendaItem';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class NewItemForm extends Component {
    constructor(props) {
      super(props);
      this.classes = props.classes;
      this.state = {name: '', duration: 0};
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      const item = new AgendaItem(this.state.name, parseInt(this.state.duration));
      this.props.addItem(item);
      // event.target.reset();
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <TextField
            name="name"
            label="Name"
            className={this.classes.textField}
            value={this.state.name}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <TextField
            name="duration"
            label="Duration"
            className={this.classes.textField}
            value={this.state.duration}
            onChange={this.handleInputChange}
            type="number"
            margin="normal"
          />
          <Button variant="contained" size="large" onClick={this.handleSubmit} className={this.classes.button}>
            Add
          </Button>
        </div>
      // <Form inline onSubmit={this.handleSubmit}>
      //     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      //       <Label for="name" className="mr-sm-2">Name:</Label>
      //       <Input type="text" name="name" id="name" placeholder="boring stuff" onChange={this.handleInputChange} />
      //     </FormGroup>
      //     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      //       <Label for="duration" className="mr-sm-2">Duration:</Label>
      //       <Input type="number" name="duration" id="duration" placeholder="33" onChange={this.handleInputChange} />
      //     </FormGroup>
      //     <Button>Add</Button>
      //   </Form>
      )
    }
  
  }


  export default withStyles(styles)(NewItemForm);