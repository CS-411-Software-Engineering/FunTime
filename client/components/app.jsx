import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Calendar from './calendar.jsx';
import Recommend from './recommend.jsx';
import Search from './search.jsx';
import Navigation from './navigation.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() { 
    return ( 

      <Container>
        <header>
          <Row style={{marginTop: "50px", height: "100%"}}>
            <Col sm={8}><Search /></Col>
            <Col sm={4}><Navigation /></Col>
          </Row>
        </header>
        <Row>
          <Col sm={8}><Calendar /></Col>
          <Col sm={4}><Recommend /></Col>
        </Row>
      </Container>
     );
  }
}
 
export default App;