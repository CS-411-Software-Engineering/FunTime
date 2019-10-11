import React, { Component } from 'react';
import {Row, Col, Card, ListGroup} from 'react-bootstrap';
class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Header>Recommendations</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Row>
    );
  }
}
 
export default Recommend;