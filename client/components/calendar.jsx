import React, { Component } from 'react';
import moment, { calendarFormat } from 'moment';
import {
  Calendar,
  momentLocalizer,
} from 'react-big-calendar';
require('react-big-calendar/lib/css/react-big-calendar.css');
import './calendar.css'

// import {Row, Col} from 'react-bootstrap';

const localizer = momentLocalizer(moment);

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {events:[]  };
  }

  componentDidMount () {
    const events = []
    this.props.events.map((event) => events.push({
      start: new Date(event.start.dateTime),
      end: new Date(event.end.dateTime),
      title: event.summary,
    }))
    this.setState({events});
  }




  render() {
    return ( 

      <div>
        <Calendar 
          localizer={localizer} 
          events={this.state.events} 
          defaultView='week'
          views = {['week']}
          
          />

      </div>
      
      // <div style={{border: "1px solid black"}}>
      //   {this.props.events.map((event, index) => {
      //     return <div key = {index}>
      //       <h1>{event.summary}</h1>
      //       <h2>{event.start.dateTime}</h2>
      //       <h2>{event.end.dateTime}</h2>
      //     </div>
      //   })}
      // </div>
     );
  }
}
 
export default MyCalendar;