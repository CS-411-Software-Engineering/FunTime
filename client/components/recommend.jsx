import React, { Component } from 'react';
import {Row, Col, Card, ListGroup} from 'react-bootstrap';
import Recomm from './recomm.jsx';
class Recommend extends Component {


  constructor(props) {
    super(props);
    this.state = {events:[
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"},
      {title:"FunTime1", time:"11:00AM- 12:00PM", info:"Come and have fun!", img:"holder.js/100px180"}
    ] }
  }
  render() { 
    return ( 
      // <Row>
      //   <Card style={{ width: '18rem' }}>
      //     <Card.Header>Recommendations</Card.Header>
      //     <ListGroup variant="flush">
      //       <ListGroup.Item>Cras justo odio</ListGroup.Item>
      //       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      //       <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      //     </ListGroup>
      //   </Card>
      // </Row>
      <div className = "recommend">
        {this.state.events.map((p)=> (<Recomm title = {p.title} time = {p.time} info = {p.info} img = {p.info}/>))}
      </div>
    );
  }
}
 
export default Recommend;