import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

class Calendar extends Component {
  constructor(props) {
    super(props);
    const localizer = BigCalendar.momentLocalizer(moment);
    this.state = {  };
  }
  render() { 
    return ( 
      // <div style={{border: "1px solid black"}}>
      //   {this.props.events.map((event, index) => {
      //     return <div key = {index}>
      //       <h1>{event.summary}</h1>
      //       <h2>{event.start.dateTime}</h2>
      //       <h2>{event.end.dateTime}</h2>
      //     </div>
      //   })}
      // </div>
      <div>
        <BigCalendar localizer = {localizer} events={this.props.events}/>

      </div>
     );
  }
}
 
export default Calendar;