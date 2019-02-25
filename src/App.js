import React, { Component } from 'react';
import './App.css';
import './model/AgendaItem'
import { AgendaItem } from './model/AgendaItem';
import { minutesToString } from './utils/utils';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <NewItemForm />
        <ItemList />
      </Container>
      </div>
    );
  }
}


class NewItemForm extends Component {
  render() {
    return (
    <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="name" className="mr-sm-2">Name:</Label>
          <Input type="text" name="name" id="name" placeholder="boring stuff" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="duration" className="mr-sm-2">Duration:</Label>
          <Input type="number" name="duration" id="duration" placeholder="33" />
        </FormGroup>
        <Button>Add</Button>
      </Form>
    )
  }

}

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        new AgendaItem("greetings", 3),
        new AgendaItem("discussion", 15),
        new AgendaItem("goodbye", 13),
        new AgendaItem("long item", 63),
      ],
    };
  }

  render() {
    const listItems = this.state.items.map(
      (item) => <Item item={item} />        
    );

    const total = minutesToString(this.state.items
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

class Item extends Component {
  render() {
    return (
      <li>{this.props.item.name} - {minutesToString(this.props.item.duration)}</li>
    )
  }
}

export default App;
