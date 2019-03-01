import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import AgendaItem from '../model/AgendaItem';

class NewItemForm extends Component {
    constructor(props) {
      super(props);
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
      event.target.reset();
      event.preventDefault();
    }
  
    render() {
      return (
      <Form inline onSubmit={this.handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="name" className="mr-sm-2">Name:</Label>
            <Input type="text" name="name" id="name" placeholder="boring stuff" onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="duration" className="mr-sm-2">Duration:</Label>
            <Input type="number" name="duration" id="duration" placeholder="33" onChange={this.handleInputChange} />
          </FormGroup>
          <Button>Add</Button>
        </Form>
      )
    }
  
  }


  export default NewItemForm;