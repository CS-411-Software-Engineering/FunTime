import React, { Component } from 'react';
import {Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <InputGroup className="mb-3">
          <FormControl
            placeholder="SEARCH"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
    );
  }
}
 
export default Search;