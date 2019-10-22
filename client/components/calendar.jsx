import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div style={{border: "1px solid black"}}>
        {this.props.events.map((event, index) => {
          return <div key = {index}>{event.summary}</div>
        })}
      </div>
     );
  }
}
 
export default Calendar;