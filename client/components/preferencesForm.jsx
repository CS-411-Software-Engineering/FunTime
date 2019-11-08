import React, { Component } from 'react';
import { Container, FormControl, FormGroup } from 'react-bootstrap';

class preferencesForm extends Component {
  render() {
    return (
      <form>
        <Form.Group controlId="input1">
          <Form.Label>sample</Form.Label>
          <Form.Control type="text" placeholder="sample" />
        </Form.Group>
      </form>
    );
  }
}

export default preferencesForm;
